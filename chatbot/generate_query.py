from langgraph.graph import MessagesState
from langchain.chat_models import init_chat_model
import dotenv
import os
from chatbot.retriever import get_retriever_tool

def setup_generate_query():
    """Setup the generate_query_or_respond function and test it."""
    print("Step Three: Generate query...")
    
    # Load environment variables
    dotenv.load_dotenv(".env.development")
    
    # Check if the API key was loaded successfully
    api_key = os.environ.get("OPENAI_API_KEY")
    if not api_key:
        raise ValueError("OPENAI_API_KEY not found in .env.development")
    
    # Get the retriever tool from Step Two
    retriever_tool = get_retriever_tool()
    
    # Initialize the chat model
    response_model = init_chat_model("openai:gpt-4.1", temperature=0)
    
    # Define the generate_query_or_respond function
    def generate_query_or_respond(state: MessagesState):
        """Call the model to generate a response based on the current state. Given
        the question, it will decide to retrieve using the retriever tool, or simply respond to the user.
        """
        response = (
            response_model
            .bind_tools([retriever_tool]).invoke(state["messages"])
        )
        return {"messages": [response]}
    
    # Test 1: Try it on a random input
    print("\nTest 1: Simple greeting")
    input_1 = {"messages": [{"role": "user", "content": "hello!"}]}
    response_1 = generate_query_or_respond(input_1)["messages"][-1]
    print("Response:")
    print(response_1.content)
    
    # Test 2: Ask a question that requires semantic search
    print("\nTest 2: Question requiring semantic search")
    input_2 = {
        "messages": [
            {
                "role": "user",
                "content": "What does Lilian Weng say about types of reward hacking?",
            }
        ]
    }
    response_2 = generate_query_or_respond(input_2)["messages"][-1]
    print("Response:")
    
    # Check if the response has tool calls
    tool_calls = getattr(response_2, "tool_calls", None)
    if tool_calls:
        print("Tool call detected:")
        for tool_call in tool_calls:
            if isinstance(tool_call, dict):
                print(f"Tool: {tool_call.get('name')}")
                print(f"Args: {tool_call.get('args')}")
            else:
                print(f"Tool call: {tool_call}")
                # Try to access attributes or methods that might be available
                for attr in ["name", "id", "args"]:
                    if hasattr(tool_call, attr):
                        print(f"  {attr}: {getattr(tool_call, attr)}")
    else:
        print(response_2.content)
    
    # Let's print the entire response to debug
    print("\nDebug - Full response object:")
    print(f"Response type: {type(response_2)}")
    for attr in dir(response_2):
        if not attr.startswith("_"):
            try:
                value = getattr(response_2, attr)
                if not callable(value):
                    print(f"{attr}: {value}")
            except Exception as e:
                print(f"Error getting {attr}: {e}")
    
    # Create a simple text file to indicate Step 3 is complete
    os.makedirs("chatbot/data", exist_ok=True)
    with open("chatbot/data/step3_complete.txt", "w") as f:
        f.write("Step 3: Generate query - COMPLETED\n")
        f.write("- Created generate_query_or_respond function\n")
        f.write("- Successfully tested with simple greeting and semantic search query\n")
    
    print("\nStep 3 completion status saved!")
    return generate_query_or_respond

if __name__ == "__main__":
    setup_generate_query() 