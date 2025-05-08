#!/usr/bin/env python3
"""
Agentic RAG System - Complete Implementation
A single file implementation of an agentic RAG system using LangGraph.
"""

import os
import getpass
import pickle
import dotenv
from typing import Literal
from pydantic import BaseModel, Field

# LangChain imports
from langchain_community.document_loaders import PyPDFLoader
from langchain_text_splitters import RecursiveCharacterTextSplitter
from langchain_core.vectorstores import InMemoryVectorStore
from langchain_openai import OpenAIEmbeddings
from langchain.tools.retriever import create_retriever_tool
from langchain.chat_models import init_chat_model
from langchain_core.messages import convert_to_messages

# LangGraph imports
from langgraph.graph import StateGraph, START, END, MessagesState
from langgraph.prebuilt import ToolNode
from langgraph.prebuilt import tools_condition

# Make sure the data directory exists
os.makedirs("chatbot/data", exist_ok=True)

# Load environment variables
dotenv.load_dotenv(".env.development")

# Set API key if not already set
def _set_env(key: str):
    if key not in os.environ:
        os.environ[key] = getpass.getpass(f"{key}:")

# Step 1: Preprocess documents
def preprocess_document():
    """Fetch and preprocess the PDF document."""
    print("Step One: Preprocessing PDF document...")
    
    # 1. Load the PDF document
    pdf_path = "public/fluentproRAG.pdf"
    print(f"Loading PDF document: {pdf_path}")
    
    loader = PyPDFLoader(pdf_path)
    pdf_docs = loader.load()
    
    print(f"Loaded {len(pdf_docs)} pages from PDF")
    
    # Display a sample of the first page
    print("\nSample of first page content:")
    print(pdf_docs[0].page_content.strip()[:200] + "...\n")
    
    # 2. Split documents into smaller chunks for indexing
    print("Splitting document into chunks...")
    
    text_splitter = RecursiveCharacterTextSplitter.from_tiktoken_encoder(
        chunk_size=500,  # Using larger chunk size for PDF content
        chunk_overlap=100
    )
    doc_splits = text_splitter.split_documents(pdf_docs)
    
    print(f"Created {len(doc_splits)} document chunks")
    
    # Display a sample of the first chunk
    print("\nSample of first document chunk:")
    print(doc_splits[0].page_content.strip()[:150] + "...\n")
    
    return doc_splits

# Step 2: Create a retriever tool
def create_retriever(doc_splits):
    """Create a retriever tool from document chunks."""
    print("Step Two: Creating a retriever tool...")
    
    # 1. Create an in-memory vector store with OpenAI embeddings
    print("Creating vector store with OpenAI embeddings...")
    embeddings = OpenAIEmbeddings()
    vectorstore = InMemoryVectorStore.from_documents(
        documents=doc_splits, embedding=embeddings
    )
    
    # Create a retriever from the vector store
    retriever = vectorstore.as_retriever()
    
    # 2. Create a retriever tool
    print("Creating retriever tool...")
    retriever_tool = create_retriever_tool(
        retriever,
        "retrieve_pdf_content",
        "Search and return information from the FluentPro RAG PDF document.",
    )
    
    # 3. Test the tool
    print("\nTesting the retriever tool with query: 'rag system'")
    result = retriever_tool.invoke({"query": "rag system"})
    print("\nRetriever tool result sample:")
    print(result[:300] + "...\n")
    
    return retriever_tool

# Step 3: Generate query
def get_generate_query_or_respond(retriever_tool):
    """Create the function for deciding whether to retrieve or respond directly."""
    response_model = init_chat_model("openai:gpt-4.1", temperature=0)
    
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

# Step 4: Grade documents
class GradeDocuments(BaseModel):
    """Grade documents using a binary score for relevance check."""
    binary_score: str = Field(
        description="Relevance score: 'yes' if relevant, or 'no' if not relevant"
    )

GRADE_PROMPT = (
    "You are a grader assessing relevance of a retrieved document to a user question. \n "
    "Here is the retrieved document: \n\n {context} \n\n"
    "Here is the user question: {question} \n"
    "If the document contains keyword(s) or semantic meaning related to the user question, grade it as relevant. \n"
    "Give a binary score 'yes' or 'no' score to indicate whether the document is relevant to the question."
)

def get_grade_documents():
    """Create the function for grading document relevance."""
    grader_model = init_chat_model("openai:gpt-4.1", temperature=0)
    
    def grade_documents(
        state: MessagesState,
    ) -> Literal["generate_answer", "rewrite_question"]:
        """Determine whether the retrieved documents are relevant to the question."""
        question = state["messages"][0].content
        context = state["messages"][-1].content

        prompt = GRADE_PROMPT.format(question=question, context=context)
        response = (
            grader_model
            .with_structured_output(GradeDocuments).invoke(
                [{"role": "user", "content": prompt}]
            )
        )
        score = response.binary_score

        if score == "yes":
            return "generate_answer"
        else:
            return "rewrite_question"
    
    return grade_documents

# Step 5: Rewrite question
REWRITE_PROMPT = (
    "Look at the input and try to reason about the underlying semantic intent / meaning.\n"
    "Here is the initial question:"
    "\n ------- \n"
    "{question}"
    "\n ------- \n"
    "Formulate an improved question:"
)

def get_rewrite_question():
    """Create the function for rewriting the question."""
    response_model = init_chat_model("openai:gpt-4.1", temperature=0)
    
    def rewrite_question(state: MessagesState):
        """Rewrite the original user question."""
        messages = state["messages"]
        question = messages[0].content
        prompt = REWRITE_PROMPT.format(question=question)
        response = response_model.invoke([{"role": "user", "content": prompt}])
        return {"messages": [{"role": "user", "content": response.content}]}
    
    return rewrite_question

# Step 6: Generate answer
GENERATE_PROMPT = (
    "You are an assistant for question-answering tasks. "
    "Use the following pieces of retrieved context to answer the question. "
    "If you don't know the answer, just say that you don't know. "
    "Use three sentences maximum and keep the answer concise.\n"
    "Question: {question} \n"
    "Context: {context}"
)

def get_generate_answer():
    """Create the function for generating the final answer."""
    response_model = init_chat_model("openai:gpt-4.1", temperature=0)
    
    def generate_answer(state: MessagesState):
        """Generate an answer."""
        question = state["messages"][0].content
        context = state["messages"][-1].content
        prompt = GENERATE_PROMPT.format(question=question, context=context)
        response = response_model.invoke([{"role": "user", "content": prompt}])
        return {"messages": [response]}
    
    return generate_answer

# Step 7: Assemble the graph
def create_rag_graph(retriever_tool):
    """Assemble the agentic RAG graph."""
    print("Step Seven: Assembling the graph...")
    
    # Get all our functions
    generate_query_or_respond = get_generate_query_or_respond(retriever_tool)
    grade_documents = get_grade_documents()
    rewrite_question = get_rewrite_question()
    generate_answer = get_generate_answer()
    
    workflow = StateGraph(MessagesState)

    # Define the nodes we will cycle between
    workflow.add_node("generate_query_or_respond", generate_query_or_respond)
    workflow.add_node("retrieve", ToolNode([retriever_tool]))
    workflow.add_node("rewrite_question", rewrite_question)
    workflow.add_node("generate_answer", generate_answer)

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

    # Edges taken after the `action` node is called.
    workflow.add_conditional_edges(
        "retrieve",
        # Assess agent decision
        grade_documents,
        {
            "generate_answer": "generate_answer",
            "rewrite_question": "rewrite_question",
        }
    )
    workflow.add_edge("generate_answer", END)
    workflow.add_edge("rewrite_question", "generate_query_or_respond")

    # Compile
    print("Compiling the graph...")
    graph = workflow.compile()
    print("Graph compiled successfully!")
    
    return graph

# Helper function to format messages
def format_message(message, node_name=None):
    """Format a message for display."""
    if hasattr(message, "content") and message.content:
        if node_name:
            return f"[{node_name}] {message.content}"
        return message.content
    elif hasattr(message, "tool_calls") and message.tool_calls:
        tool_calls = []
        for tool_call in message.tool_calls:
            tool_name = tool_call.get("name", "unknown tool")
            args = tool_call.get("args", {})
            query = args.get("query", "no query")
            tool_calls.append(f"Using {tool_name} with query: '{query}'")
        if node_name:
            return f"[{node_name}] " + " | ".join(tool_calls)
        return " | ".join(tool_calls)
    else:
        # Handle tool messages or other types
        content = getattr(message, "content", str(message))
        if node_name:
            return f"[{node_name}] {content}"
        return content

# Step 8: Run the agentic RAG
def run_rag_interactive(graph):
    """Run the agentic RAG system interactively."""
    print("Step Eight: Running the agentic RAG system end-to-end...\n")
    
    print("=" * 80)
    print("Welcome to the Agentic RAG System!")
    print("This system can answer questions about the FluentPro RAG PDF document.")
    print("Enter 'exit' to quit.")
    print("=" * 80)
    
    # Interactive loop
    while True:
        # Get user input
        user_input = input("\nYour question: ")
        
        # Check if user wants to exit
        if user_input.lower() in ["exit", "quit", "q"]:
            print("\nThank you for using the Agentic RAG System. Goodbye!")
            break
        
        # Skip empty inputs
        if not user_input.strip():
            continue
        
        print("\nProcessing your question...\n")
        
        # Format the input for the graph
        input_data = {
            "messages": [
                {
                    "role": "user",
                    "content": user_input,
                }
            ]
        }
        
        # Stream the results
        print("-" * 50)
        for chunk in graph.stream(input_data):
            for node, update in chunk.items():
                if update.get("messages", []):
                    last_message = update["messages"][-1]
                    formatted_message = format_message(last_message, node)
                    print(formatted_message)
        print("-" * 50)

def run_rag_with_example(graph, example_question):
    """Run the agentic RAG system with an example question."""
    print("\n" + "=" * 80)
    print(f"Example Question: {example_question}")
    print("=" * 80)
    
    # Format the input for the graph
    input_data = {
        "messages": [
            {
                "role": "user",
                "content": example_question,
            }
        ]
    }
    
    # Stream the results
    print("\nProcessing...\n")
    for chunk_i, chunk in enumerate(graph.stream(input_data)):
        print(f"\n--- Step {chunk_i+1} ---")
        for node, update in chunk.items():
            if update.get("messages", []):
                last_message = update["messages"][-1]
                formatted_message = format_message(last_message, node)
                print(formatted_message)
    
    print("\n" + "-" * 80)

def main():
    """Main function to run the agentic RAG system."""
    # Make sure OPENAI_API_KEY is set
    _set_env("OPENAI_API_KEY")
    
    # Check if we have preprocessed documents
    doc_splits_path = "chatbot/data/doc_splits.pkl"
    if os.path.exists(doc_splits_path):
        print("Loading preprocessed documents...")
        with open(doc_splits_path, "rb") as f:
            doc_splits = pickle.load(f)
    else:
        # Process documents
        doc_splits = preprocess_document()
        
        # Save processed documents
        with open(doc_splits_path, "wb") as f:
            pickle.dump(doc_splits, f)
    
    # Create retriever tool
    retriever_tool = create_retriever(doc_splits)
    
    # Create RAG graph
    graph = create_rag_graph(retriever_tool)
    
    # Start interactive mode directly
    run_rag_interactive(graph)

if __name__ == "__main__":
    main() 