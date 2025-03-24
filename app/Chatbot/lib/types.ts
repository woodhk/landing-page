// Content types for messages
export interface ContentItem {
  type: "input_text" | "output_text" | "refusal" | "output_audio";
  annotations?: any[];
  text?: string;
}

// Message items for storing conversation history
export interface MessageItem {
  type: "message";
  role: "user" | "assistant" | "system";
  id?: string;
  content: ContentItem[] | string;
}

// Tool call items to display in chat
export interface ToolCallItem {
  type: "tool_call";
  tool_type: "file_search_call" | "web_search_call" | "function_call";
  status: "in_progress" | "completed" | "failed" | "searching";
  id: string;
  name?: string | null;
  call_id?: string;
  arguments?: string;
  parsedArguments?: any;
  output?: string | null;
}

// Combined item type for chat display
export type Item = MessageItem | ToolCallItem;

// Tool types
export interface WebSearchTool {
  type: "web_search";
  user_location?: {
    type: "approximate";
    country?: string;
    city?: string;
    region?: string;
  };
}

export interface FunctionTool {
  type: "function";
}

export interface FileSearchTool {
  type: "file_search";
  vector_store_id?: string;
}

export type Tool = WebSearchTool | FunctionTool | FileSearchTool; 