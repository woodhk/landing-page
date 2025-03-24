import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(request: Request) {
  const { vectorStoreId, query } = await request.json();

  try {
    if (!vectorStoreId) {
      return new Response(
        JSON.stringify({ error: "Vector store ID is required" }),
        { status: 400 }
      );
    }

    // Search the vector store
    const searchResponse = await openai.vectorStores.search(
      vectorStoreId,
      { query, limit: 5 }
    );

    return new Response(JSON.stringify(searchResponse), { status: 200 });
  } catch (error) {
    console.error("Error searching vector store:", error);
    return new Response(
      JSON.stringify({ error: "Error searching vector store" }),
      { status: 500 }
    );
  }
} 