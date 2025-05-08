"""
RAG Graph module for the agentic RAG system.
Provides the assembled graph for use in applications.
"""

from langgraph.graph import StateGraph, START, END, MessagesState
from langgraph.prebuilt import ToolNode
from langgraph.prebuilt import tools_condition
import dotenv
import os

# Import all our custom components
from chatbot.query_generator import get_generate_query_or_respond
from chatbot.retriever import get_retriever_tool
from chatbot.grader import get_grade_documents
from chatbot.question_rewriter import get_rewrite_question
from chatbot.generator import get_generate_answer

# Initialize environment
dotenv.load_dotenv(".env.development")

def get_rag_graph():
    """
    Get the assembled agentic RAG graph.
    
    Returns:
        A compiled graph that can be used for agentic RAG.
    """
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
    graph = workflow.compile()
    return graph 