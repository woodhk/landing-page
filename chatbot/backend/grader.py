"""
Document grader module for the agentic RAG system.
Provides the grade_documents function that evaluates document relevance.
"""

from pydantic import BaseModel, Field
from typing import Literal
from langchain.chat_models import init_chat_model
from langgraph.graph import MessagesState
import dotenv
import os

# Initialize environment and model
dotenv.load_dotenv(".env.development")
grader_model = init_chat_model("openai:gpt-4.1", temperature=0)

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

def get_grade_documents():
    """
    Get the grade_documents function for the agentic RAG system.
    
    Returns:
        A function that determines document relevance and returns next node.
    """
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
        
        if score == "yes":
            return "generate_answer"
        else:
            return "rewrite_question"
    
    return grade_documents 