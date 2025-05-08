from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

# Import the compiled LangGraph app
from graph import compiled_graph_app

app = FastAPI()

# Configure CORS for frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # Update this based on your frontend URL
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
async def root():
    return {"message": "Welcome to the Chatbot API"}

@app.post("/invoke_chat_basic")
async def invoke_chat_basic(user_message: str):
    """
    Basic endpoint for testing the chatbot functionality.
    """
    try:
        # Invoke the LangGraph app with the user message
        result = compiled_graph_app.invoke({"messages": [("user", user_message)]})
        
        # Extract the AI's response from the result
        # This will need to be adjusted based on your actual graph output structure
        ai_message = result["messages"][-1].content  # Assuming the last message is the AI's response
        
        return {"response": ai_message}
    except Exception as e:
        return {"error": str(e)} 