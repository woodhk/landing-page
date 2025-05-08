"""
Graph assembler for the agentic RAG system.
Assembles all components into a complete workflow graph.
"""

from langgraph.graph import StateGraph, START, END, MessagesState
from langgraph.prebuilt import ToolNode
from langgraph.prebuilt import tools_condition
import dotenv
import os
from IPython.display import Image, display

# Import all our custom components
from chatbot.query_generator import get_generate_query_or_respond
from chatbot.retriever import get_retriever_tool
from chatbot.grader import get_grade_documents
from chatbot.question_rewriter import get_rewrite_question
from chatbot.generator import get_generate_answer

def assemble_graph():
    """Assemble and test the complete agentic RAG graph."""
    print("Step 7: Assemble the graph...")
    
    # Load environment variables
    dotenv.load_dotenv(".env.development")
    
    # Get all our functions from previous steps
    generate_query_or_respond = get_generate_query_or_respond()
    retriever_tool = get_retriever_tool()
    grade_documents = get_grade_documents()
    rewrite_question = get_rewrite_question()
    generate_answer = get_generate_answer()
    
    # Create the graph
    workflow = StateGraph(MessagesState)
    
    # Define the nodes we will cycle between
    workflow.add_node("generate_query_or_respond", generate_query_or_respond)
    workflow.add_node("retrieve", ToolNode([retriever_tool]))
    workflow.add_node("rewrite_question", rewrite_question)
    workflow.add_node("generate_answer", generate_answer)
    
    # Add the starting edge
    workflow.add_edge(START, "generate_query_or_respond")
    
    # Decide whether to retrieve
    workflow.add_conditional_edges(
        "generate_query_or_respond",
        # Assess LLM decision (call `retriever_tool` tool or respond to the user)
        tools_condition,
        {
            # Translate the condition outputs to nodes in our graph
            "tools": "retrieve",
            END: END,
        },
    )
    
    # Edges taken after the `retrieve` node is called
    workflow.add_conditional_edges(
        "retrieve",
        # Assess agent decision using the document grader
        grade_documents,
        {
            "generate_answer": "generate_answer",
            "rewrite_question": "rewrite_question",
        }
    )
    
    # Complete the cycle
    workflow.add_edge("generate_answer", END)
    workflow.add_edge("rewrite_question", "generate_query_or_respond")
    
    # Compile the graph
    print("\nCompiling the graph...")
    graph = workflow.compile()
    
    # Generate a visualization of the graph
    try:
        os.makedirs("chatbot/data", exist_ok=True)
        graph_viz = graph.get_graph().draw_mermaid_png()
        with open("chatbot/data/graph_visualization.png", "wb") as f:
            f.write(graph_viz)
        print("Graph visualization saved to chatbot/data/graph_visualization.png")
    except Exception as e:
        print(f"Error generating graph visualization: {e}")
    
    # Create a simple text file to indicate Step 7 is complete
    with open("chatbot/data/step7_complete.txt", "w") as f:
        f.write("Step 7: Assemble the graph - COMPLETED\n")
        f.write("- Created complete agentic RAG workflow graph\n")
        f.write("- Connected all components (generate_query, retrieve, grade, rewrite, answer)\n")
    
    print("\nStep 7 completion status saved!")
    
    # Run a simple test
    print("\nTesting the complete graph with a sample question...")
    
    for i, chunk in enumerate(graph.stream(
        {
            "messages": [
                {
                    "role": "user",
                    "content": "What does Lilian Weng say about types of reward hacking?",
                }
            ]
        }
    )):
        print(f"\n--- Chunk {i+1} ---")
        for node, update in chunk.items():
            print(f"Update from node: {node}")
            if update.get("messages", []):
                last_message = update["messages"][-1]
                if hasattr(last_message, "content") and last_message.content:
                    print(f"Content: {last_message.content[:150]}...")
                elif hasattr(last_message, "tool_calls") and last_message.tool_calls:
                    print(f"Tool calls: {last_message.tool_calls}")
                else:
                    print(f"Tool message: {last_message.get('content', '')[:150]}...")
    
    return graph

if __name__ == "__main__":
    assemble_graph() 