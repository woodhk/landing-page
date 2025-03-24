"use client";

import { useState } from 'react';
import { useToolSettings } from './ChatContext';

interface SetupProps {
  fluentProInfo: string;
}

export function VectorStoreSetup({ fluentProInfo }: SetupProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');
  const { setVectorStore } = useToolSettings();

  const setupVectorStore = async () => {
    setIsLoading(true);
    setStatus('loading');
    setMessage('Setting up FluentPro knowledge base...');

    try {
      // Step 1: Create a vector store
      const createStoreResponse = await fetch("/api/Chatbot/vector_stores/create_store", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: "FluentPro",
        }),
      });

      if (!createStoreResponse.ok) {
        throw new Error("Failed to create vector store");
      }

      const vectorStore = await createStoreResponse.json();
      const vectorStoreId = vectorStore.id;

      // Step 2: Upload the FluentPro information as a file
      const fileContent = btoa(fluentProInfo); // Convert to base64
      const fileObject = {
        name: "fluentpro-info.txt",
        content: fileContent,
      };

      const uploadFileResponse = await fetch("/api/Chatbot/vector_stores/upload_file", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fileObject,
        }),
      });

      if (!uploadFileResponse.ok) {
        throw new Error("Failed to upload file");
      }

      const file = await uploadFileResponse.json();
      const fileId = file.id;

      // Step 3: Add the file to the vector store
      const addFileResponse = await fetch("/api/Chatbot/vector_stores/add_file", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          vectorStoreId,
          fileId,
        }),
      });

      if (!addFileResponse.ok) {
        throw new Error("Failed to add file to vector store");
      }

      // Save the vector store ID to the tools store
      setVectorStore({
        id: vectorStoreId,
        name: "FluentPro",
      });

      setStatus('success');
      setMessage('FluentPro knowledge base is ready!');
    } catch (error) {
      console.error("Error setting up vector store:", error);
      setStatus('error');
      setMessage('Failed to set up FluentPro knowledge base. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="p-4 border rounded-md mb-4 bg-gray-50">
      <h3 className="text-lg font-medium mb-2">FluentPro Knowledge Base</h3>
      
      {status === 'idle' && (
        <div>
          <p className="text-sm text-gray-600 mb-3">
            Set up the AI to answer questions about FluentPro using the provided information.
          </p>
          <button
            onClick={setupVectorStore}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
            disabled={isLoading}
          >
            {isLoading ? 'Setting up...' : 'Setup Knowledge Base'}
          </button>
        </div>
      )}
      
      {status === 'loading' && (
        <div className="flex items-center">
          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-blue-600 mr-2"></div>
          <p className="text-sm text-gray-600">{message}</p>
        </div>
      )}
      
      {status === 'success' && (
        <div className="bg-green-100 border border-green-200 text-green-800 px-4 py-3 rounded">
          <p className="text-sm">{message}</p>
        </div>
      )}
      
      {status === 'error' && (
        <div className="bg-red-100 border border-red-200 text-red-800 px-4 py-3 rounded">
          <p className="text-sm">{message}</p>
          <button
            onClick={setupVectorStore}
            className="mt-2 px-3 py-1 text-xs bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors"
          >
            Try Again
          </button>
        </div>
      )}
    </div>
  );
} 