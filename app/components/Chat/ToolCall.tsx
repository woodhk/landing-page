"use client";

import { ToolCallItem } from './ChatContext';
import { Loader2 } from 'lucide-react';

interface ToolCallProps {
  toolCall: ToolCallItem;
}

export function ToolCall({ toolCall }: ToolCallProps) {
  const getStatusIcon = () => {
    switch (toolCall.status) {
      case 'in_progress':
      case 'searching':
        return <Loader2 className="h-4 w-4 animate-spin text-blue-600" />;
      case 'completed':
        return <div className="h-4 w-4 bg-green-500 rounded-full"></div>;
      case 'failed':
        return <div className="h-4 w-4 bg-red-500 rounded-full"></div>;
      default:
        return null;
    }
  };

  const getFunctionTitle = () => {
    switch (toolCall.tool_type) {
      case 'web_search_call':
        return 'Web Search';
      case 'file_search_call':
        return 'File Search';
      case 'function_call':
        return toolCall.name || 'Function Call';
      default:
        return 'Tool Call';
    }
  };

  return (
    <div className="flex flex-col w-full bg-white rounded-lg p-4 text-xs text-gray-700 space-y-2.5 border border-gray-200 shadow-sm">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          {getStatusIcon()}
          <span className="font-medium">{getFunctionTitle()}</span>
        </div>
        <span className="text-xs text-gray-500 px-2 py-0.5 bg-gray-100 rounded-full">
          {toolCall.status === 'in_progress' || toolCall.status === 'searching' ? 'Working...' : toolCall.status}
        </span>
      </div>
      
      {toolCall.arguments && (
        <div className="bg-gray-50 p-3 rounded-md font-mono text-xs overflow-auto border border-gray-200">
          {JSON.stringify(toolCall.parsedArguments || JSON.parse(toolCall.arguments), null, 2)}
        </div>
      )}
      
      {toolCall.output && (
        <div className="mt-2">
          <div className="text-xs font-semibold mb-1 text-gray-600">Output:</div>
          <div className="bg-gray-50 p-3 rounded-md font-mono text-xs overflow-auto max-h-40 border border-gray-200">
            {typeof toolCall.output === 'string' ? 
              (toolCall.output.startsWith('{') ? 
                JSON.stringify(JSON.parse(toolCall.output), null, 2) : 
                toolCall.output) : 
              JSON.stringify(toolCall.output, null, 2)}
          </div>
        </div>
      )}
    </div>
  );
} 