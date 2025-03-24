export const MODEL = "gpt-4o-mini";

// System prompt for the assistant
export const SYSTEM_PROMPT = `
You are a helpful assistant focused on answering questions about FluentPro, an AI-powered Business English training web application.
Use the context information you have to provide accurate and helpful responses about FluentPro's features, target audience, and company history.
Keep responses brief and focused on the website content.

If you don't have specific information to answer a question, DO NOT make up or hallucinate an answer. 
Instead, politely ask the user to email support@languagekey.com for more information.
Say something like: "I don't have that specific information. Please email support@languagekey.com for assistance with your question."
`;

// Initial message that will be displayed in the chat
export const INITIAL_MESSAGE = "How can I help you learn about FluentPro?";

// Default tools configuration
export const DEFAULT_TOOLS_CONFIG = {
  functionsEnabled: true,
  webSearchEnabled: false,
  fileSearchEnabled: true,
};

// Default vector store (will be populated after creation)
export const defaultVectorStore = {
  id: "",
  name: "FluentPro",
}; 