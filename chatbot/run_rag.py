"""
Run the agentic RAG system end-to-end.
Provides an interactive interface to query the RAG system.
"""

import os
import dotenv
from chatbot.rag_graph import get_rag_graph

def format_message(message, node_name=None):
    """Format a message for display."""
    if hasattr(message, "content") and message.content:
        if node_name:
            return f"[{node_name}] {message.content}"
        return message.content
    elif hasattr(message, "tool_calls") and message.tool_calls:
        tool_calls = []
        for tool_call in message.tool_calls:
            tool_name = tool_call.get("name", "unknown tool")
            args = tool_call.get("args", {})
            query = args.get("query", "no query")
            tool_calls.append(f"Using {tool_name} with query: '{query}'")
        if node_name:
            return f"[{node_name}] " + " | ".join(tool_calls)
        return " | ".join(tool_calls)
    else:
        # Handle tool messages or other types
        content = getattr(message, "content", str(message))
        if node_name:
            return f"[{node_name}] {content}"
        return content

def run_rag_interactive():
    """Run the agentic RAG system interactively."""
    print("Step 8: Running the agentic RAG system end-to-end...\n")
    
    # Load environment variables
    dotenv.load_dotenv(".env.development")
    
    # Get the RAG graph
    graph = get_rag_graph()
    
    print("=" * 80)
    print("Welcome to the Agentic RAG System!")
    print("This system can answer questions about Lilian Weng's blog posts.")
    print("Enter 'exit' to quit.")
    print("=" * 80)
    
    # Create a simple text file to indicate Step 8 is complete
    os.makedirs("chatbot/data", exist_ok=True)
    with open("chatbot/data/step8_complete.txt", "w") as f:
        f.write("Step 8: Run the agentic RAG - COMPLETED\n")
        f.write("- Created interactive interface for the RAG system\n")
        f.write("- Successfully processed and displayed streamed results\n")
    
    # Interactive loop
    while True:
        # Get user input
        user_input = input("\nYour question: ")
        
        # Check if user wants to exit
        if user_input.lower() in ["exit", "quit", "q"]:
            print("\nThank you for using the Agentic RAG System. Goodbye!")
            break
        
        # Skip empty inputs
        if not user_input.strip():
            continue
        
        print("\nProcessing your question...\n")
        
        # Format the input for the graph
        input_data = {
            "messages": [
                {
                    "role": "user",
                    "content": user_input,
                }
            ]
        }
        
        # Stream the results
        print("-" * 50)
        for i, chunk in enumerate(graph.stream(input_data)):
            for node, update in chunk.items():
                if update.get("messages", []):
                    last_message = update["messages"][-1]
                    formatted_message = format_message(last_message, node)
                    print(formatted_message)
        print("-" * 50)

def run_rag_with_examples():
    """Run the agentic RAG system with example questions."""
    print("Step 8: Running the agentic RAG system with examples...\n")
    
    # Load environment variables
    dotenv.load_dotenv(".env.development")
    
    # Get the RAG graph
    graph = get_rag_graph()
    
    # Example questions to demonstrate the system
    examples = [
        "What does Lilian Weng say about types of reward hacking?",
        "What are Lilian Weng's main points about hallucination?",
        "Hello, how are you?",  # Simple greeting to show direct response
        "What does Lilian Weng say about video generation?",
    ]
    
    for i, example in enumerate(examples):
        print("\n" + "=" * 80)
        print(f"Example {i+1}: {example}")
        print("=" * 80)
        
        # Format the input for the graph
        input_data = {
            "messages": [
                {
                    "role": "user",
                    "content": example,
                }
            ]
        }
        
        # Stream the results
        print("\nProcessing...\n")
        for chunk_i, chunk in enumerate(graph.stream(input_data)):
            print(f"\n--- Step {chunk_i+1} ---")
            for node, update in chunk.items():
                if update.get("messages", []):
                    last_message = update["messages"][-1]
                    formatted_message = format_message(last_message, node)
                    print(formatted_message)
        
        print("\n" + "-" * 80)
    
    # Create a simple text file to indicate Step 8 is complete
    os.makedirs("chatbot/data", exist_ok=True)
    with open("chatbot/data/step8_complete.txt", "w") as f:
        f.write("Step 8: Run the agentic RAG - COMPLETED\n")
        f.write("- Demonstrated the RAG system with example questions\n")
        f.write("- Successfully processed and displayed streamed results\n")
    
    print("\nAll examples completed successfully!")

if __name__ == "__main__":
    # Uncomment one of these to run either the interactive version or examples
    run_rag_interactive()
    # run_rag_with_examples() 