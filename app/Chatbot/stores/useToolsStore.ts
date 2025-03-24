import { create } from "zustand";
import { persist } from "zustand/middleware";
import { DEFAULT_TOOLS_CONFIG, defaultVectorStore } from "../config/constants";

export type WebSearchConfig = {
  user_location?: {
    type: "approximate";
    country?: string;
    city?: string;
    region?: string;
  };
};

type File = {
  id: string;
  name: string;
  content: string;
};

type VectorStore = {
  id: string;
  name: string;
  files?: File[];
};

interface ToolsState {
  functionsEnabled: boolean;
  setFunctionsEnabled: (enabled: boolean) => void;
  webSearchEnabled: boolean;
  setWebSearchEnabled: (enabled: boolean) => void;
  fileSearchEnabled: boolean;
  setFileSearchEnabled: (enabled: boolean) => void;
  webSearchConfig: WebSearchConfig;
  setWebSearchConfig: (config: WebSearchConfig) => void;
  vectorStore: VectorStore | null;
  setVectorStore: (store: VectorStore) => void;
}

const useToolsStore = create<ToolsState>()(
  persist(
    (set) => ({
      functionsEnabled: DEFAULT_TOOLS_CONFIG.functionsEnabled,
      webSearchEnabled: DEFAULT_TOOLS_CONFIG.webSearchEnabled,
      fileSearchEnabled: DEFAULT_TOOLS_CONFIG.fileSearchEnabled,
      vectorStore: defaultVectorStore.id !== "" ? defaultVectorStore : null,
      webSearchConfig: {
        user_location: {
          type: "approximate",
          country: "",
          city: "",
          region: "",
        },
      },
      setFunctionsEnabled: (enabled) => {
        set({ functionsEnabled: enabled });
      },
      setWebSearchEnabled: (enabled) => {
        set({ webSearchEnabled: enabled });
      },
      setFileSearchEnabled: (enabled) => {
        set({ fileSearchEnabled: enabled });
      },
      setWebSearchConfig: (config) => set({ webSearchConfig: config }),
      setVectorStore: (store) => set({ vectorStore: store }),
    }),
    {
      name: "chatbot-tools",
    }
  )
);

export default useToolsStore; 