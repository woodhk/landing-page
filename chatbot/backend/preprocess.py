from langchain_community.document_loaders import PyPDFLoader
from langchain_text_splitters import RecursiveCharacterTextSplitter
import pickle
import os

def preprocess_document():
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
    
    # Save the processed documents for later use
    os.makedirs("chatbot/data", exist_ok=True)
    with open("chatbot/data/doc_splits.pkl", "wb") as f:
        pickle.dump(doc_splits, f)
    
    print("Document preprocessed and saved successfully!")
    return doc_splits

if __name__ == "__main__":
    preprocess_document() 