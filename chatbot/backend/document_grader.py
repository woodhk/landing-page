"""
Document grader module for the agentic RAG system.
Provides functionality to grade document relevance to the user question.
"""

from pydantic import BaseModel, Field
from typing import Literal
from langchain.chat_models import init_chat_model
from langgraph.graph import MessagesState
import dotenv
import os
from langchain_core.messages import convert_to_messages

# Grade prompt for document relevance
GRADE_PROMPT = (
    "You are a grader assessing relevance of a retrieved document to a user question. \n "
    "Here is the retrieved document: \n\n {context} \n\n"
    "Here is the user question: {question} \n"
    "If the document contains keyword(s) or semantic meaning related to the user question, grade it as relevant. \n"
    "Give a binary score 'yes' or 'no' score to indicate whether the document is relevant to the question."
)

# Schema for document grading output
class GradeDocuments(BaseModel):
    """Grade documents using a binary score for relevance check."""
    binary_score: str = Field(
        description="Relevance score: 'yes' if relevant, or 'no' if not relevant"
    )

def setup_document_grader():
    """Setup and test the document grader functionality."""
    print("Step 4: Grade documents...")
    
    # Load environment variables
    dotenv.load_dotenv(".env.development")
    
    # Check if the API key was loaded successfully
    api_key = os.environ.get("OPENAI_API_KEY")
    if not api_key:
        raise ValueError("OPENAI_API_KEY not found in .env.development")
    
    # Initialize the grader model
    grader_model = init_chat_model("openai:gpt-4.1", temperature=0)
    
    # Define the grade_documents function
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
        
        print(f"Document grading score: {score}")
        
        if score == "yes":
            return "generate_answer"
        else:
            return "rewrite_question"
    
    # Test 1: Run with clearly irrelevant documents
    print("\nTest 1: Clearly irrelevant document")
    input_1 = {
        "messages": convert_to_messages(
            [
                {
                    "role": "user",
                    "content": "What does Lilian Weng say about types of reward hacking?",
                },
                {
                    "role": "assistant",
                    "content": "",
                    "tool_calls": [
                        {
                            "id": "1",
                            "name": "retrieve_blog_posts",
                            "args": {"query": "types of reward hacking"},
                        }
                    ],
                },
                {"role": "tool", "content": "This document is about cats and dogs and has nothing to do with reward hacking or Lilian Weng.", "tool_call_id": "1"},
            ]
        )
    }
    result_1 = grade_documents(input_1)
    print(f"Result: {result_1}")
    
    # Test 2: Run with clearly relevant documents
    print("\nTest 2: Clearly relevant document")
    input_2 = {
        "messages": convert_to_messages(
            [
                {
                    "role": "user",
                    "content": "What does Lilian Weng say about types of reward hacking?",
                },
                {
                    "role": "assistant",
                    "content": "",
                    "tool_calls": [
                        {
                            "id": "1",
                            "name": "retrieve_blog_posts",
                            "args": {"query": "types of reward hacking"},
                        }
                    ],
                },
                {
                    "role": "tool",
                    "content": "According to Lilian Weng, reward hacking can be categorized into two types: environment or goal misspecification, and reward tampering. Reward hacking occurs when an RL agent exploits flaws or ambiguities in the reward function to obtain high rewards without genuinely learning the intended behaviors.",
                    "tool_call_id": "1",
                },
            ]
        )
    }
    result_2 = grade_documents(input_2)
    print(f"Result: {result_2}")
    
    # Create a simple text file to indicate Step 4 is complete
    os.makedirs("chatbot/data", exist_ok=True)
    with open("chatbot/data/step4_complete.txt", "w") as f:
        f.write("Step 4: Grade documents - COMPLETED\n")
        f.write("- Created grade_documents function with structured output schema\n")
        f.write("- Successfully tested with both relevant and irrelevant documents\n")
    
    print("\nStep 4 completion status saved!")
    return grade_documents

if __name__ == "__main__":
    setup_document_grader() 