import os
from langchain_core.vectorstores import InMemoryVectorStore
from langchain_openai import OpenAIEmbeddings
from langchain.tools.retriever import create_retriever_tool
import pickle
import dotenv

def create_retriever():
    print("Step Two: Creating a retriever tool...")
    
    # Load environment variables
    dotenv.load_dotenv(".env.development")
    
    # Check if the API key was loaded successfully
    api_key = os.environ.get("OPENAI_API_KEY")
    if not api_key:
        raise ValueError("OPENAI_API_KEY not found in .env.development")
    else:
        print("OPENAI_API_KEY loaded successfully")
    
    # Load the preprocessed documents
    print("Loading preprocessed documents...")
    with open("chatbot/data/doc_splits.pkl", "rb") as f:
        doc_splits = pickle.load(f)
    
    print(f"Loaded {len(doc_splits)} document chunks")
    
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
    
    # Create a simple text file to indicate Step 2 is complete
    os.makedirs("chatbot/data", exist_ok=True)
    with open("chatbot/data/step2_complete.txt", "w") as f:
        f.write("Step 2: Create a retriever tool - COMPLETED\n")
        f.write(f"- Created vector store with {len(doc_splits)} document chunks\n")
        f.write("- Successfully tested retriever tool with query 'rag system'\n")
    
    print("Step 2 completion status saved!")
    return retriever_tool

# Function to build the retriever tool when needed
def build_retriever_tool():
    """Build the retriever tool from doc_splits."""
    dotenv.load_dotenv(".env.development")
    
    with open("chatbot/data/doc_splits.pkl", "rb") as f:
        doc_splits = pickle.load(f)
        
    embeddings = OpenAIEmbeddings()
    vectorstore = InMemoryVectorStore.from_documents(
        documents=doc_splits, embedding=embeddings
    )
    retriever = vectorstore.as_retriever()
    
    retriever_tool = create_retriever_tool(
        retriever,
        "retrieve_pdf_content",
        "Search and return information from the FluentPro RAG PDF document.",
    )
    
    return retriever_tool

if __name__ == "__main__":
    create_retriever() 