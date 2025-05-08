"""
Answer generator module for the agentic RAG system.
Provides the generate_answer function that generates responses based on retrieved context.
"""

from langchain.chat_models import init_chat_model
from langgraph.graph import MessagesState
import dotenv
import os

# Initialize environment and model
dotenv.load_dotenv(".env.development")
response_model = init_chat_model("openai:gpt-4.1", temperature=0)

# Generate answer prompt
GENERATE_PROMPT = (
    "You are an assistant for question-answering tasks. "
    "Use the following pieces of retrieved context to answer the question. "
    "If you don't know the answer, just say that you don't know. "
    "Use three sentences maximum and keep the answer concise.\n"
    "Question: {question} \n"
    "Context: {context}"
)

def get_generate_answer():
    """
    Get the generate_answer function for the agentic RAG system.
    
    Returns:
        A function that generates an answer based on the question and retrieved context.
    """
    def generate_answer(state: MessagesState):
        """Generate an answer."""
        question = state["messages"][0].content
        context = state["messages"][-1].content
        prompt = GENERATE_PROMPT.format(question=question, context=context)
        response = response_model.invoke([{"role": "user", "content": prompt}])
        return {"messages": [response]}
    
    return generate_answer 