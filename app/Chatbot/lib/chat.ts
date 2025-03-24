import { handleTool, toolsMap } from "./tools";
import { Item, MessageItem, ToolCallItem } from "./types";

/**
 * Parse JSON with error handling
 */
function safeJsonParse(text: string) {
  try {
    return JSON.parse(text);
  } catch (e) {
    // For incomplete JSON, try to parse with a more lenient approach
    try {
      // Add missing closing brackets/braces if needed
      let fixedText = text;
      const openBraces = (text.match(/\{/g) || []).length;
      const closeBraces = (text.match(/\}/g) || []).length;
      for (let i = 0; i < openBraces - closeBraces; i++) {
        fixedText += '}';
      }
      
      const openBrackets = (text.match(/\[/g) || []).length;
      const closeBrackets = (text.match(/\]/g) || []).length;
      for (let i = 0; i < openBrackets - closeBrackets; i++) {
        fixedText += ']';
      }
      
      return JSON.parse(fixedText);
    } catch (e2) {
      // If still fails, return empty object
      console.warn("Failed to parse JSON:", text);
      return {};
    }
  }
}

/**
 * Handle a turn in the conversation with the AI
 * @param messages Messages to send to the API
 * @param tools Tools to enable for the API
 * @param onMessage Callback for each event from the API
 */
export const handleTurn = async (
  messages: any[],
  tools: any[],
  onMessage: (data: any) => void
) => {
  try {
    // Get response from the API
    const response = await fetch("/api/Chatbot/turn-response", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        messages: messages,
        tools: tools,
      }),
    });

    if (!response.ok) {
      console.error(`Error: ${response.status} - ${response.statusText}`);
      return;
    }

    // Reader for streaming data
    const reader = response.body!.getReader();
    const decoder = new TextDecoder();
    let done = false;
    let buffer = "";

    while (!done) {
      const { value, done: doneReading } = await reader.read();
      done = doneReading;
      const chunkValue = decoder.decode(value);
      buffer += chunkValue;

      const lines = buffer.split("\n\n");
      buffer = lines.pop() || "";

      for (const line of lines) {
        if (line.startsWith("data: ")) {
          const dataStr = line.slice(6);
          if (dataStr === "[DONE]") {
            done = true;
            break;
          }
          const data = JSON.parse(dataStr);
          onMessage(data);
        }
      }
    }

    // Handle any remaining data in buffer
    if (buffer && buffer.startsWith("data: ")) {
      const dataStr = buffer.slice(6);
      if (dataStr !== "[DONE]") {
        const data = JSON.parse(dataStr);
        onMessage(data);
      }
    }
  } catch (error) {
    console.error("Error handling turn:", error);
  }
};

/**
 * Process a message from the user, send it to the API, and handle the response
 * @param userMessage User's message
 * @param tools Tools to enable
 * @param chatMessages Current chat messages
 * @param conversationItems Current conversation items
 * @param setChatMessages Function to update chat messages
 * @param setConversationItems Function to update conversation items
 */
export const processUserMessage = async (
  userMessage: MessageItem,
  tools: any[],
  chatMessages: Item[],
  conversationItems: any[],
  setChatMessages: (items: Item[]) => void,
  setConversationItems: (items: any[]) => void
) => {
  // Add user message to chat UI
  const updatedChatMessages = [...chatMessages, userMessage];
  setChatMessages(updatedChatMessages);

  // Convert to format for API
  const apiMessage = {
    role: userMessage.role,
    content: typeof userMessage.content === 'string' 
      ? userMessage.content 
      : userMessage.content[0].text || "",
  };

  // Add to conversation history
  const updatedConversationItems = [...conversationItems, apiMessage];
  setConversationItems(updatedConversationItems);

  // Track function arguments for streaming
  let functionArguments = "";

  // Process the conversation with the AI
  await handleTurn(updatedConversationItems, tools, async ({ event, data }) => {
    if (event === "response.output_item.added") {
      const { item } = data || {};
      
      // New item coming in
      if (!item || !item.type) {
        return;
      }

      // Handle different item types
      switch (item.type) {
        case "message": {
          const text = item.content && item.content[0] ? item.content[0].text || "" : "";
          const newMessage: MessageItem = {
            type: "message",
            role: "assistant",
            id: item.id,
            content: [
              {
                type: "output_text",
                text,
              },
            ],
          };
          
          setChatMessages([...updatedChatMessages, newMessage]);
          setConversationItems([...updatedConversationItems, {
            role: "assistant",
            content: text,
          }]);
          break;
        }
        
        case "function_call": {
          functionArguments += item.arguments || "";
          const toolCall: ToolCallItem = {
            type: "tool_call",
            tool_type: "function_call",
            status: "in_progress",
            id: item.id,
            name: item.name,
            arguments: item.arguments || "",
            parsedArguments: {},
            output: null,
          };
          
          setChatMessages([...updatedChatMessages, toolCall]);
          break;
        }
        
        case "web_search_call": {
          const toolCall: ToolCallItem = {
            type: "tool_call",
            tool_type: "web_search_call",
            status: item.status || "in_progress",
            id: item.id,
            output: null,
          };
          
          setChatMessages([...updatedChatMessages, toolCall]);
          break;
        }
      }
    }
    else if (event === "response.output_item.done") {
      const { item } = data || {};

      // Update tool call with ID
      const toolCallMessage = updatedChatMessages.find(
        (m) => m.type === "tool_call" && m.id === item.id
      ) as ToolCallItem | undefined;
      
      if (toolCallMessage) {
        toolCallMessage.call_id = item.call_id;
        setChatMessages([...updatedChatMessages]);
      }
      
      setConversationItems([...updatedConversationItems, item]);
    }
    else if (event === "response.function_call_arguments.delta") {
      // Handle streaming function arguments
      functionArguments += data.delta || "";
      let parsedFunctionArguments = {};
      
      if (functionArguments.length > 0) {
        try {
          parsedFunctionArguments = safeJsonParse(functionArguments);
        } catch (e) {
          // Ignore parsing errors for partial JSON
        }
      }

      const toolCallMessage = updatedChatMessages.find(
        (m) => m.type === "tool_call" && m.id === data.item_id
      ) as ToolCallItem | undefined;
      
      if (toolCallMessage) {
        toolCallMessage.arguments = functionArguments;
        toolCallMessage.parsedArguments = parsedFunctionArguments;
        setChatMessages([...updatedChatMessages]);
      }
    }
    else if (event === "response.function_call_arguments.done") {
      // Final function arguments processing
      const { item_id, arguments: finalArgs } = data;
      functionArguments = finalArgs;

      const toolCallMessage = updatedChatMessages.find(
        (m) => m.type === "tool_call" && m.id === item_id
      ) as ToolCallItem | undefined;
      
      if (toolCallMessage && toolCallMessage.type === "tool_call") {
        toolCallMessage.arguments = finalArgs;
        
        try {
          toolCallMessage.parsedArguments = safeJsonParse(finalArgs);
        } catch (e) {
          console.error("Error parsing function arguments:", e);
        }
        
        toolCallMessage.status = "completed";
        setChatMessages([...updatedChatMessages]);

        if (toolCallMessage.name) {
          // Check for vector store ID in the tools
          let vectorStoreId: string | undefined;
          if (tools) {
            const fileSearchTool = tools.find(tool => 
              typeof tool === 'object' && 
              tool.type === 'file_search' && 
              'vector_store_id' in tool
            );
            
            if (fileSearchTool && 'vector_store_id' in fileSearchTool) {
              vectorStoreId = fileSearchTool.vector_store_id as string;
            }
          }

          // Execute the tool with vector store ID if needed
          const toolResult = await handleTool(
            toolCallMessage.name as keyof typeof toolsMap,
            toolCallMessage.parsedArguments,
            vectorStoreId
          );

          // Update with result
          toolCallMessage.output = JSON.stringify(toolResult);
          setChatMessages([...updatedChatMessages]);
          
          // Add to conversation history
          setConversationItems([
            ...updatedConversationItems,
            {
              type: "function_call_output",
              call_id: toolCallMessage.call_id,
              status: "completed",
              output: JSON.stringify(toolResult),
            },
          ]);

          // Process another turn after tool output
          await processUserMessage(
            {
              type: "message",
              role: "user",
              content: [{ type: "input_text", text: "" }],
            },
            tools,
            updatedChatMessages,
            updatedConversationItems,
            setChatMessages,
            setConversationItems
          );
        }
      }
    }
    else if (event === "response.web_search_call.completed") {
      const { item_id, output } = data;
      
      const toolCallMessage = updatedChatMessages.find(
        (m) => m.type === "tool_call" && m.id === item_id
      ) as ToolCallItem | undefined;
      
      if (toolCallMessage && toolCallMessage.type === "tool_call") {
        toolCallMessage.output = output;
        toolCallMessage.status = "completed";
        setChatMessages([...updatedChatMessages]);
      }
    }
  });
}; 