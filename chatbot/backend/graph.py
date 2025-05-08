from typing import Annotated, List, Optional, Dict, Any, Union
import logging
import os
import json

from langchain_openai import ChatOpenAI
from langchain_core.documents import Document
from langchain_core.messages import SystemMessage, HumanMessage, AIMessage
from typing_extensions import TypedDict, NotRequired

from langgraph.graph import StateGraph, END
from langgraph.graph.message import add_messages
from langgraph.prebuilt import ToolNode

# Import configuration
from config import OPENAI_API_KEY, SYSTEM_PROMPT, MODEL_NAME

# Set up logging
logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(levelname)s - %(message)s')
logger = logging.getLogger(__name__)

# Create logs directory if it doesn't exist
os.makedirs("logs", exist_ok=True)

# Define the state type for the graph
class State(TypedDict):
    # Messages exchanged in the conversation
    messages: Annotated[list, add_messages]
    
    # For RAG: Retrieved documents from the vector store
    documents: NotRequired[Optional[List[Document]]]
    
    # For suggested prompts/follow-up questions
    suggested_prompts: NotRequired[Optional[List[str]]]
    
    # For error handling and state tracking
    error: NotRequired[Optional[str]]


# Define the basic chatbot node function
def chatbot_node(state: State):
    """
    Basic chatbot node that responds to user messages.
    
    This node takes the current conversation state, formats messages
    properly for the LLM, adds the system prompt, and generates a response.
    
    Args:
        state (State): The current state containing messages and other context
        
    Returns:
        Dict: Updated state with the AI's response added to messages
    """
    try:
        # Get the current messages from the state
        messages = state.get("messages", [])
        
        # Log the current conversation state
        logger.info(f"Processing message. Conversation length: {len(messages)}")
        
        # Format messages properly for the LLM
        formatted_messages = []
        
        # Get the latest user message to understand the current query
        latest_user_message = None
        for msg in reversed(messages):
            if isinstance(msg, HumanMessage) or (isinstance(msg, dict) and msg.get("role") == "user") or (isinstance(msg, tuple) and msg[0] == "user"):
                if isinstance(msg, HumanMessage):
                    latest_user_message = msg.content
                elif isinstance(msg, dict):
                    latest_user_message = msg.get("content", "")
                elif isinstance(msg, tuple):
                    latest_user_message = msg[1]
                break
        
        # Add system message first with enhanced instruction
        base_system_prompt = SYSTEM_PROMPT
        if latest_user_message:
            enhanced_system_prompt = f"{base_system_prompt}\n\nThe user has asked: '{latest_user_message}'\nPlease provide a direct and concise answer to this specific question without repeating the question."
            formatted_messages.append(SystemMessage(content=enhanced_system_prompt))
        else:
            formatted_messages.append(SystemMessage(content=base_system_prompt))
        
        # Add conversation history with proper typing
        for msg in messages:
            if isinstance(msg, dict):
                role = msg.get("role", "")
                content = msg.get("content", "")
                
                if role == "user":
                    formatted_messages.append(HumanMessage(content=content))
                elif role == "assistant":
                    formatted_messages.append(AIMessage(content=content))
            elif isinstance(msg, tuple) and len(msg) == 2:
                role, content = msg
                if role == "user":
                    formatted_messages.append(HumanMessage(content=content))
                elif role == "assistant":
                    formatted_messages.append(AIMessage(content=content))
        
        # Invoke the LLM to generate a response
        logger.info(f"Invoking LLM with {len(formatted_messages)} messages")
        response = llm.invoke(formatted_messages)
        logger.info("LLM response generated successfully")
        
        # Return the response to be added to the state
        return {"messages": [response]}
    
    except Exception as e:
        # Log the error
        logger.error(f"Error in chatbot_node: {str(e)}", exc_info=True)
        
        # Handle errors gracefully
        return {
            "messages": [AIMessage(content="I'm sorry, I encountered an error. Please try again later.")],
            "error": str(e)
        }

# Define a debug node to log the current state
def debug_node(state: State):
    """
    Debug node that logs the current state for monitoring.
    
    This is useful for tracking the state as it flows through the graph.
    
    Args:
        state (State): The current state
        
    Returns:
        State: The unchanged state
    """
    try:
        # Log key metrics about the state
        message_count = len(state.get("messages", []))
        has_documents = "documents" in state and state["documents"] is not None
        has_suggested_prompts = "suggested_prompts" in state and state["suggested_prompts"] is not None
        has_error = "error" in state and state["error"] is not None
        
        # Create a structured log entry
        log_entry = {
            "message_count": message_count,
            "has_documents": has_documents,
            "has_suggested_prompts": has_suggested_prompts,
            "has_error": has_error,
        }
        
        # Write to debug log
        logger.debug(f"Debug node state: {json.dumps(log_entry)}")
        
        # For detailed debugging, write to a separate file
        with open("logs/graph_debug.log", "a") as f:
            f.write(f"{json.dumps(log_entry)}\n")
        
        # Return unchanged state
        return {}
    except Exception as e:
        logger.error(f"Error in debug_node: {str(e)}", exc_info=True)
        return {}

# Initialize the LLM with more specific parameters
llm = ChatOpenAI(
    model=MODEL_NAME,
    temperature=0.7,  # Add temperature for controlled randomness
    max_tokens=1000,  # Limit response length
    api_key=OPENAI_API_KEY
)

# Conditional routing function to decide the flow after debug
def should_continue(state: State) -> str:
    """
    Conditional routing function that decides if the conversation should continue or end.
    This will prevent infinite recursion by breaking the cycle.
    
    Args:
        state (State): The current state
        
    Returns:
        str: The next node to route to - "chatbot" or END
    """
    # Get all messages in the conversation
    messages = state.get("messages", [])
    
    # If there are no messages, continue to chatbot
    if not messages:
        logger.info("Empty messages list, continuing to chatbot node")
        return "chatbot"
    
    # Find the last user message index
    last_user_message_idx = -1
    for i in range(len(messages) - 1, -1, -1):
        msg = messages[i]
        if (isinstance(msg, HumanMessage) or 
            (isinstance(msg, dict) and msg.get("role") == "user") or
            (isinstance(msg, tuple) and msg[0] == "user")):
            last_user_message_idx = i
            break
    
    # If no user message found (unlikely), continue to chatbot
    if last_user_message_idx == -1:
        logger.info("No user message found, continuing to chatbot node")
        return "chatbot"
    
    # Check if there's an AI response after the last user message
    has_ai_response_after_user = False
    for i in range(last_user_message_idx + 1, len(messages)):
        msg = messages[i]
        if (isinstance(msg, AIMessage) or 
            (isinstance(msg, dict) and msg.get("role") == "assistant") or
            (isinstance(msg, tuple) and msg[0] == "assistant")):
            has_ai_response_after_user = True
            break
    
    # If we already have an AI response to the latest user message, we should end the cycle
    if has_ai_response_after_user:
        logger.info("AI has already responded to the latest user message, ending cycle")
        return END
    else:
        logger.info("Latest user message requires AI response, continuing to chatbot node")
        return "chatbot"

def build_graph():
    """
    Build and return the chatbot graph.
    
    This function creates a graph with the following flow:
    1. Start → debug_node (for initial state logging)
    2. debug_node → conditional routing based on should_continue
       a. If should_continue returns "chatbot", go to chatbot_node
       b. If should_continue returns END, end the conversation turn
    3. chatbot_node → debug_node
    
    Returns:
        compiled graph: The compiled graph application
    """
    logger.info("Building the chatbot graph...")
    
    # Initialize the graph builder
    graph_builder = StateGraph(State)
    
    # Add nodes to the graph
    graph_builder.add_node("chatbot", chatbot_node)
    graph_builder.add_node("debug", debug_node)
    
    # Define the conditional edges of the graph
    graph_builder.add_conditional_edges(
        "debug",
        should_continue,
        {
            "chatbot": "chatbot",
            END: END
        }
    )
    
    # Add edge from chatbot back to debug
    graph_builder.add_edge("chatbot", "debug")
    
    # Set the entry point of the graph
    graph_builder.set_entry_point("debug")
    
    # Compile the graph with debugging enabled
    compiled_app = graph_builder.compile(debug=True)
    
    logger.info("Chatbot graph built successfully")
    
    # Return the compiled graph
    return compiled_app

# Build and compile the graph
compiled_graph_app = build_graph()

# For visualization purposes, we can create a DOT representation of the graph
def get_graph_visualization():
    """
    Get a text representation of the graph for visualization.
    
    Returns:
        str: Text representation of the graph
    """
    try:
        # Since to_dot() is not available in this version of LangGraph,
        # create a simple text representation
        graph_description = """
        LangGraph Structure:
        
        Entry Point: debug
        
        Nodes:
        - debug (Debug Node)
        - chatbot (Chatbot Node)
        
        Edges:
        - debug -> [conditional: should_continue]
          - If "chatbot": -> chatbot
          - If END: -> END
        - chatbot -> debug
        
        Flow:
        1. Start at debug node
        2. If user needs a response, go to chatbot
        3. If AI already responded, end flow
        4. After chatbot generates response, return to debug
        """
        
        # Save to file for reference
        with open("logs/graph_visualization.txt", "w") as f:
            f.write(graph_description)
        
        logger.info("Created text-based graph visualization instead of DOT format")
        return graph_description
    except Exception as e:
        logger.error(f"Error generating graph visualization: {str(e)}")
        return "Error generating visualization"

# Generate and log the graph visualization
try:
    get_graph_visualization()
    logger.info("Graph visualization generated and saved to logs/graph_visualization.txt")
except Exception as e:
    logger.error(f"Failed to generate graph visualization: {str(e)}")

# If this file is run directly, print some debug information
if __name__ == "__main__":
    print("Graph structure initialized with conditional routing to prevent infinite loops")
    print("Test the graph with: compiled_graph_app.invoke({'messages': [('user', 'Hello!')]})")