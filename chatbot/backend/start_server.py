#!/usr/bin/env python3
"""
Start the API server for the Agentic RAG system.
This script starts the FastAPI server without installing dependencies by default.
"""

import os
import sys
import subprocess
import argparse

def install_dependencies():
    """Install required dependencies for the API server."""
    print("Installing required dependencies...")
    
    # Install FastAPI, uvicorn and dotenv
    dependencies = [
        "fastapi",
        "uvicorn",
        "python-dotenv",
        "websockets"
    ]
    
    for dependency in dependencies:
        try:
            subprocess.check_call([
                sys.executable, "-m", "pip", "install", dependency
            ])
            print(f"Installed {dependency}")
        except subprocess.CalledProcessError:
            print(f"Error installing {dependency}")
            return False
    
    return True

def start_server():
    """Start the API server."""
    print("Starting API server...")
    
    try:
        # Add the parent directory to Python's path
        import sys
        import os
        
        # Get the absolute path to the project root
        project_root = os.path.abspath(os.path.join(os.path.dirname(__file__), "../.."))
        
        # Add the project root to the Python path
        if project_root not in sys.path:
            sys.path.insert(0, project_root)
            print(f"Added {project_root} to Python path")
        
        # Run the API server
        os.system("python -m chatbot.backend.api")
    except Exception as e:
        print(f"Error starting server: {e}")
        return False
    
    return True

if __name__ == "__main__":
    # Parse command line arguments
    parser = argparse.ArgumentParser(description='Start the Agentic RAG API Server')
    parser.add_argument('--install-deps', action='store_true', 
                        help='Install dependencies before starting the server')
    args = parser.parse_args()
    
    print("=" * 50)
    print("Agentic RAG API Server")
    print("=" * 50)
    
    # Install dependencies only if requested
    if args.install_deps:
        if not install_dependencies():
            print("Failed to install dependencies.")
            sys.exit(1)
    
    # Start server
    if not start_server():
        print("Failed to start server.")
        sys.exit(1) 