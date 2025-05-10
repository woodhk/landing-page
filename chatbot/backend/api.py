"""
API Server for the Agentic RAG System.
Provides endpoints for the frontend to interact with the RAG system.
"""

import os
import json
import pickle
import asyncio
import sys
from fastapi import FastAPI, HTTPException, Request, WebSocket, WebSocketDisconnect
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List, Dict, Any, Optional

# Add the current directory to the path to find agentic_rag.py
current_dir = os.path.dirname(os.path.abspath(__file__))
if current_dir not in sys.path:
    sys.path.insert(0, current_dir)

# Import functions from agentic_rag.py
from agentic_rag import (
    preprocess_document,
    create_retriever,
    create_rag_graph,
    format_message
)

# Create FastAPI app
app = FastAPI(title="Agentic RAG API")

origins = [
    "http://localhost:3000",
    "https://fluentpro-landing-page.vercel.app"
]

# Configure CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],  # Allows all methods
    allow_headers=["*"],  # Allows all headers
)

# Data models
class ChatMessage(BaseModel):
    id: str
    text: str
    isUser: bool
    timestamp: str

class ChatRequest(BaseModel):
    messages: List[ChatMessage]

class ChatResponse(BaseModel):
    id: str
    text: str
    isUser: bool
    timestamp: str

# Global variables for the RAG system
doc_splits = None
retriever_tool = None
graph = None

# Initialize the RAG system
async def initialize_rag_system():
    global doc_splits, retriever_tool, graph
    
    if doc_splits is None:
        print("Initializing RAG system...")
        
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
            os.makedirs("chatbot/data", exist_ok=True)
            with open(doc_splits_path, "wb") as f:
                pickle.dump(doc_splits, f)
        
        # Create retriever tool
        retriever_tool = create_retriever(doc_splits)
        
        # Create RAG graph
        graph = create_rag_graph(retriever_tool)
        
        print("RAG system initialized!")

# Initialize on startup
@app.on_event("startup")
async def startup_event():
    await initialize_rag_system()

# Process a message using the RAG system
async def process_with_rag(user_message: str) -> str:
    global graph
    
    # Make sure the RAG system is initialized
    if graph is None:
        await initialize_rag_system()
    
    # Format the input for the graph
    input_data = {
        "messages": [
            {
                "role": "user",
                "content": user_message,
            }
        ]
    }
    
    # Collect the responses
    all_responses = []
    final_response = ""
    
    # Stream the results
    for chunk in graph.stream(input_data):
        for node, update in chunk.items():
            if update.get("messages", []):
                last_message = update["messages"][-1]
                formatted_message = format_message(last_message, node)
                all_responses.append(formatted_message)
                
                # If this is from the generate_answer node, it's our final response
                if node == "generate_answer":
                    final_response = formatted_message.replace("[generate_answer] ", "")
    
    return final_response or "I'm sorry, I couldn't generate a response."

# Chat endpoint
@app.post("/api/chat", response_model=ChatResponse)
async def chat(request: ChatRequest):
    if not request.messages:
        raise HTTPException(status_code=400, detail="No messages provided")
    
    # Get the last user message
    last_user_message = None
    for message in reversed(request.messages):
        if message.isUser:
            last_user_message = message
            break
    
    if not last_user_message:
        raise HTTPException(status_code=400, detail="No user message found")
    
    # Process the message with RAG
    response_text = await process_with_rag(last_user_message.text)
    
    # Create and return the response
    import datetime
    import uuid
    
    return ChatResponse(
        id=str(uuid.uuid4()),
        text=response_text,
        isUser=False,
        timestamp=datetime.datetime.now().isoformat()
    )

# WebSocket endpoint for streaming responses
@app.websocket("/api/chat-stream")
async def chat_stream(websocket: WebSocket):
    await websocket.accept()
    
    try:
        while True:
            # Receive message from client
            data = await websocket.receive_text()
            data = json.loads(data)
            
            # Get the user message
            user_message = data.get("message", "")
            
            if not user_message:
                await websocket.send_json({"error": "No message provided"})
                continue
            
            # Process the message with RAG
            response_text = await process_with_rag(user_message)
            
            # Send response back to client
            import datetime
            import uuid
            
            await websocket.send_json({
                "id": str(uuid.uuid4()),
                "text": response_text,
                "isUser": False,
                "timestamp": datetime.datetime.now().isoformat()
            })
    
    except WebSocketDisconnect:
        print("Client disconnected")

# Health check endpoint
@app.get("/health")
async def health_check():
    return {"status": "ok"}

# Run the server
if __name__ == "__main__":
    import uvicorn
    uvicorn.run("api:app", host="0.0.0.0", port=8000, reload=True) 