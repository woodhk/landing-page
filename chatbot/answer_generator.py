"""
Answer generator module for the agentic RAG system.
Provides functionality to generate an answer based on retrieved context.
"""

from langchain.chat_models import init_chat_model
from langgraph.graph import MessagesState
import dotenv
import os
from langchain_core.messages import convert_to_messages

# Generate answer prompt
GENERATE_PROMPT = (
    "You are an assistant for question-answering tasks. "
    "Use the following pieces of retrieved context to answer the question. "
    "If you don't know the answer, just say that you don't know. "
    "Use three sentences maximum and keep the answer concise.\n"
    "Question: {question} \n"
    "Context: {context}"
)

def setup_answer_generator():
    """Setup and test the generate_answer functionality."""
    print("Step 6: Generate an answer...")
    
    # Load environment variables
    dotenv.load_dotenv(".env.development")
    
    # Check if the API key was loaded successfully
    api_key = os.environ.get("OPENAI_API_KEY")
    if not api_key:
        raise ValueError("OPENAI_API_KEY not found in .env.development")
    
    # Initialize the model
    response_model = init_chat_model("openai:gpt-4.1", temperature=0)
    
    # Define the generate_answer function
    def generate_answer(state: MessagesState):
        """Generate an answer."""
        question = state["messages"][0].content
        context = state["messages"][-1].content
        prompt = GENERATE_PROMPT.format(question=question, context=context)
        response = response_model.invoke([{"role": "user", "content": prompt}])
        return {"messages": [response]}
    
    # Test: Generate an answer based on a question and relevant context
    print("\nTest: Generating an answer")
    input_data = {
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
                    "content": "According to Lilian Weng, reward hacking can be categorized into two types: environment or goal misspecification, and reward tampering. Reward hacking occurs when an RL agent exploits flaws or ambiguities in the reward function to obtain high rewards without genuinely learning the intended behaviors. Some work defines reward tampering as a distinct category of misalignment behavior from reward hacking, but Lilian Weng considers reward hacking as a broader concept.",
                    "tool_call_id": "1",
                },
            ]
        )
    }
    
    result = generate_answer(input_data)
    print("\nQuestion:")
    print(input_data["messages"][0].content)
    print("\nRetrieved Context:")
    print(input_data["messages"][-1].content)
    print("\nGenerated Answer:")
    print(result["messages"][-1].content)
    
    # Create a simple text file to indicate Step 6 is complete
    os.makedirs("chatbot/data", exist_ok=True)
    with open("chatbot/data/step6_complete.txt", "w") as f:
        f.write("Step 6: Generate an answer - COMPLETED\n")
        f.write("- Created generate_answer function based on retrieved context\n")
        f.write("- Successfully tested with a relevant question and context\n")
    
    print("\nStep 6 completion status saved!")
    return generate_answer

if __name__ == "__main__":
    setup_answer_generator() 