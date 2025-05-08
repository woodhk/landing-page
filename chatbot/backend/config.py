import os
import pathlib
from dotenv import load_dotenv

# Get the path to the root directory
ROOT_DIR = pathlib.Path(__file__).parent.parent.parent

# Load environment variables from .env.development file
env_path = os.path.join(ROOT_DIR, '.env.development')
load_dotenv(env_path)

# API Keys
OPENAI_API_KEY = os.getenv("OPENAI_API_KEY")
if not OPENAI_API_KEY:
    raise ValueError("OPENAI_API_KEY environment variable is not set")

# System Prompt
DEFAULT_SYSTEM_PROMPT = """You are a helpful AI assistant with knowledge of various Python libraries and frameworks, especially LangGraph.

About LangGraph:
- LangGraph is a framework for building stateful, multi-actor applications with LLMs
- It's built on top of LangChain and provides tools for creating complex workflows with LLMs
- Key features include: stateful execution, conditional flows, multi-agent communication, and debugging tools
- LangGraph allows building flow-based applications with multiple agents that can interact
- It's particularly useful for creating complex conversational agents and workflows
- The StateGraph is the core component that allows for creating nodes and edges to define application flow
- It supports both synchronous and asynchronous execution of workflows

You answer questions accurately and concisely.
If you don't know the answer to a question, you should say 'I don't know, please email fluentpro@languagekey.com' rather than making up an answer.
"""

SYSTEM_PROMPT = os.getenv("SYSTEM_PROMPT", DEFAULT_SYSTEM_PROMPT)

# Other configurations
MODEL_NAME = os.getenv("MODEL_NAME", "gpt-3.5-turbo") 