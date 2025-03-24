import { create } from "zustand";
import { Item, ContentItem, MessageItem, ToolCallItem } from "../lib/types";
import { ChatCompletionMessageParam } from "openai/resources/chat/completions";
import { INITIAL_MESSAGE } from "../config/constants";
import { persist } from "zustand/middleware";

interface ConversationState {
  // Items displayed in the chat
  chatMessages: Item[];
  // Items sent to the Responses API
  conversationItems: any[];

  setChatMessages: (items: Item[]) => void;
  setConversationItems: (messages: any[]) => void;
  addChatMessage: (item: Item) => void;
  addConversationItem: (message: ChatCompletionMessageParam) => void;
  clearConversation: () => void;
}

const useConversationStore = create<ConversationState>()(
  persist(
    (set) => ({
      chatMessages: [
        {
          type: "message",
          role: "assistant",
          content: [{ type: "output_text", text: INITIAL_MESSAGE }],
        },
      ],
      conversationItems: [],
      setChatMessages: (items) => set({ chatMessages: items }),
      setConversationItems: (messages) => set({ conversationItems: messages }),
      addChatMessage: (item) =>
        set((state) => ({ chatMessages: [...state.chatMessages, item] })),
      addConversationItem: (message) =>
        set((state) => ({
          conversationItems: [...state.conversationItems, message],
        })),
      clearConversation: () => set({
        chatMessages: [
          {
            type: "message",
            role: "assistant",
            content: [{ type: "output_text", text: INITIAL_MESSAGE }],
          },
        ],
        conversationItems: [],
      }),
    }),
    {
      name: "chatbot-conversation",
    }
  )
);

export default useConversationStore; 