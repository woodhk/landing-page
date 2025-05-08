"""
Question rewriter module for the agentic RAG system.
Provides the rewrite_question function that improves search queries.
"""

from langchain.chat_models import init_chat_model
from langgraph.graph import MessagesState
import dotenv
import os
import re

# Initialize environment and model
dotenv.load_dotenv(".env.development")
response_model = init_chat_model("openai:gpt-4.1", temperature=0)

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

def get_rewrite_question():
    """
    Get the rewrite_question function for the agentic RAG system.
    
    Returns:
        A function that rewrites the original user question to improve retrieval.
    """
    def rewrite_question(state: MessagesState):
        """Rewrite the original user question."""
        messages = state["messages"]
        question = messages[0].content
        prompt = REWRITE_PROMPT.format(question=question)
        response = response_model.invoke([{"role": "user", "content": prompt}])
        
        # Clean up the response
        improved_question = cleanup_response(response.content)
        
        return {"messages": [{"role": "user", "content": improved_question}]}
    
    return rewrite_question 