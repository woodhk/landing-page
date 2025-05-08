"""
Question rewriting module for the agentic RAG system.
Provides functionality to rewrite questions to improve retrieval.
"""

from langchain.chat_models import init_chat_model
from langgraph.graph import MessagesState
import dotenv
import os
from langchain_core.messages import convert_to_messages
import re

# Rewrite prompt for improving questions
REWRITE_PROMPT = (
    "Look at the input and try to reason about the underlying semantic intent / meaning.\n"
    "Here is the initial question:"
    "\n ------- \n"
    "{question}"
    "\n ------- \n"
    "Formulate an improved question. Simply respond with the improved question directly without any preamble, explanatory text, or formatting."
)

def cleanup_response(response):
    """Clean up the response to extract just the improved question."""
    # Remove common preambles and formatting
    cleaned = re.sub(r'^(Here\'s an improved (version|question):?\s*)', '', response, flags=re.IGNORECASE)
    cleaned = re.sub(r'^(Improved question:?\s*)', '', cleaned, flags=re.IGNORECASE)
    cleaned = re.sub(r'^(Certainly!?\s*)', '', cleaned, flags=re.IGNORECASE)
    cleaned = re.sub(r'^\**|\**$', '', cleaned)  # Remove asterisks for formatting
    cleaned = re.sub(r'^["\']|["\']$', '', cleaned)  # Remove quotes
    return cleaned.strip()

def setup_rewrite_question():
    """Setup and test the rewrite_question functionality."""
    print("Step 5: Rewrite question...")
    
    # Load environment variables
    dotenv.load_dotenv(".env.development")
    
    # Check if the API key was loaded successfully
    api_key = os.environ.get("OPENAI_API_KEY")
    if not api_key:
        raise ValueError("OPENAI_API_KEY not found in .env.development")
    
    # Initialize the model
    response_model = init_chat_model("openai:gpt-4.1", temperature=0)
    
    # Define the rewrite_question function
    def rewrite_question(state: MessagesState):
        """Rewrite the original user question."""
        messages = state["messages"]
        question = messages[0].content
        prompt = REWRITE_PROMPT.format(question=question)
        response = response_model.invoke([{"role": "user", "content": prompt}])
        
        # Clean up the response
        improved_question = cleanup_response(response.content)
        
        return {"messages": [{"role": "user", "content": improved_question}]}
    
    # Test: Run with a sample question that needs improvement
    print("\nTest: Rewriting a sample question")
    input_data = {
        "messages": convert_to_messages(
            [
                {
                    "role": "user",
                    "content": "What does Lilian Weng say about reward?",
                },
                {
                    "role": "assistant",
                    "content": "",
                    "tool_calls": [
                        {
                            "id": "1",
                            "name": "retrieve_blog_posts",
                            "args": {"query": "reward Lilian Weng"},
                        }
                    ],
                },
                {"role": "tool", "content": "This document contains information about different topics but doesn't specifically address what Lilian Weng says about reward.", "tool_call_id": "1"},
            ]
        )
    }
    
    result = rewrite_question(input_data)
    print("\nOriginal question:")
    print(input_data["messages"][0].content)
    print("\nRewritten question:")
    print(result["messages"][0]["content"])
    
    # Create a simple text file to indicate Step 5 is complete
    os.makedirs("chatbot/data", exist_ok=True)
    with open("chatbot/data/step5_complete.txt", "w") as f:
        f.write("Step 5: Rewrite question - COMPLETED\n")
        f.write("- Created rewrite_question function to improve the original question\n")
        f.write("- Successfully tested with a sample question\n")
    
    print("\nStep 5 completion status saved!")
    return rewrite_question

if __name__ == "__main__":
    setup_rewrite_question() 