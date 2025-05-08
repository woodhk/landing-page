"""
Query generator module for the agentic RAG system.
Provides the generate_query_or_respond function that decides whether to use retriever or respond directly.
"""

from langgraph.graph import MessagesState
from langchain.chat_models import init_chat_model
import dotenv
import os
from chatbot.retriever import get_retriever_tool

# Initialize the necessary components
dotenv.load_dotenv(".env.development")
response_model = init_chat_model("openai:gpt-4.1", temperature=0)
retriever_tool = get_retriever_tool()

def get_generate_query_or_respond():
    """
    Get the generate_query_or_respond function for the agentic RAG system.
    
    Returns:
        A function that generates a response or decides to use the retriever tool.
    """
    def generate_query_or_respond(state: MessagesState):
        """Call the model to generate a response based on the current state. Given
        the question, it will decide to retrieve using the retriever tool, or simply respond to the user.
        """
        response = (
            response_model
            .bind_tools([retriever_tool]).invoke(state["messages"])
        )
        return {"messages": [response]}
    
    return generate_query_or_respond 