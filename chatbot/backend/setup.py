import getpass
import os
import subprocess
import sys

# Install required packages
def install_packages():
    print("Installing required packages...")
    subprocess.check_call([
        sys.executable, "-m", "pip", "install", "-U", "--quiet",
        "langgraph", "langchain[openai]", "langchain-community", "langchain-text-splitters"
    ])
    print("Packages installed successfully!")

# Function to set environment variables
def _set_env(key: str):
    if key not in os.environ:
        os.environ[key] = getpass.getpass(f"{key}:")

# Set OpenAI API key
def setup_api_keys():
    print("Setting up API keys...")
    _set_env("OPENAI_API_KEY")
    print("API keys set successfully!")

if __name__ == "__main__":
    install_packages()
    setup_api_keys()
    print("Setup complete! LangSmith is ready for LangGraph development.") 