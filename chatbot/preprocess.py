from langchain_community.document_loaders import WebBaseLoader
from langchain_text_splitters import RecursiveCharacterTextSplitter
import pickle
import os

def preprocess_documents():
    print("Step One: Preprocessing documents...")
    
    # 1. Fetch documents from specified URLs
    urls = [
        "https://lilianweng.github.io/posts/2024-11-28-reward-hacking/",
        "https://lilianweng.github.io/posts/2024-07-07-hallucination/",
        "https://lilianweng.github.io/posts/2024-04-12-diffusion-video/",
    ]
    
    print(f"Fetching documents from {len(urls)} URLs...")
    docs = [WebBaseLoader(url).load() for url in urls]
    
    # Display a sample of the first document
    print("\nSample of first document content:")
    print(docs[0][0].page_content.strip()[:200] + "...\n")
    
    # 2. Split documents into smaller chunks for indexing
    print("Splitting documents into chunks...")
    docs_list = [item for sublist in docs for item in sublist]
    
    text_splitter = RecursiveCharacterTextSplitter.from_tiktoken_encoder(
        chunk_size=100, chunk_overlap=50
    )
    doc_splits = text_splitter.split_documents(docs_list)
    
    print(f"Created {len(doc_splits)} document chunks")
    
    # Display a sample of the first chunk
    print("\nSample of first document chunk:")
    print(doc_splits[0].page_content.strip() + "\n")
    
    # Save the processed documents for later use
    os.makedirs("chatbot/data", exist_ok=True)
    with open("chatbot/data/doc_splits.pkl", "wb") as f:
        pickle.dump(doc_splits, f)
    
    print("Documents preprocessed and saved successfully!")
    return doc_splits

if __name__ == "__main__":
    preprocess_documents() 