"""
Retriever module for the agentic RAG system.
Provides access to the retriever tool that searches Lilian Weng's blog posts.
"""

from langchain_core.vectorstores import InMemoryVectorStore
from langchain_openai import OpenAIEmbeddings
from langchain.tools.retriever import create_retriever_tool
import pickle
import os
import dotenv

def get_retriever_tool():
    """
    Get the retriever tool for searching Lilian Weng's blog posts.
    
    Returns:
        A retriever tool that can be used by the agent.
    """
    # Load environment variables
    dotenv.load_dotenv(".env.development")
    
    # Load the preprocessed documents
    with open("chatbot/data/doc_splits.pkl", "rb") as f:
        doc_splits = pickle.load(f)
    
    # Create an in-memory vector store with OpenAI embeddings
    embeddings = OpenAIEmbeddings()
    vectorstore = InMemoryVectorStore.from_documents(
        documents=doc_splits, embedding=embeddings
    )
    
    # Create a retriever from the vector store
    retriever = vectorstore.as_retriever()
    
    # Create a retriever tool
    retriever_tool = create_retriever_tool(
        retriever,
        "retrieve_blog_posts",
        "Search and return information about Lilian Weng blog posts.",
    )
    
    return retriever_tool 