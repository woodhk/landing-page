# Agentic RAG Chatbot System

This system combines an agentic RAG (Retrieval Augmented Generation) backend with a React frontend to provide an intelligent chatbot that can answer questions about FluentPro.

## System Architecture

The system consists of two main parts:

1. **Backend**: A Python-based agentic RAG system using LangGraph, LangChain, and OpenAI.
2. **Frontend**: A React-based chatbot interface using Next.js.

## How to Run

### Step 1: Start the Backend API Server

First, you need to start the backend API server that will process chat messages using the agentic RAG system:

```bash
cd /path/to/landing-page-main
python chatbot/backend/start_server.py
```

This script will:
- Install required dependencies (FastAPI, Uvicorn, etc.)
- Start the API server on port 8000

### Step 2: Run the Next.js Frontend

In a separate terminal, start the Next.js frontend:

```bash
cd /path/to/landing-page-main
npm run dev
```

This will start the Next.js development server, typically on port 3000.

### Step 3: Use the Chatbot

1. Open your browser and navigate to `http://localhost:3000`
2. Click on the chat icon in the bottom-right corner
3. The system will check if the backend API is running
4. Start asking questions about FluentPro!

## How It Works

1. The frontend sends user messages to the backend API
2. The backend processes the message using the agentic RAG system:
   - Decides whether to use retrieval or respond directly
   - Retrieves relevant information from the FluentPro document
   - Grades the relevance of retrieved documents
   - Rewrites the question if necessary
   - Generates a concise response
3. The response is sent back to the frontend and displayed to the user

## Troubleshooting

- If you encounter a message about the API server not running, make sure you've completed Step 1
- If you're seeing errors about missing dependencies, run `pip install -r chatbot/backend/requirements.txt`
- Check the API server logs for any errors

## Development Notes

- The backend uses an in-memory vector store, so document embeddings will be recomputed on each restart
- The frontend uses Next.js API routes to proxy requests to the backend

## Environment Variables

The system requires the following environment variables:

- `OPENAI_API_KEY`: Your OpenAI API key for generating embeddings and responses 