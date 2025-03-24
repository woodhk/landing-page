import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';

// Create an OpenAI API client
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// Maximum number of requests allowed per minute
const MAX_REQUESTS_PER_MINUTE = 10;
// Store IP addresses and their request timestamps
const requestLog: Record<string, number[]> = {};

/**
 * Rate limiting middleware
 * @param ip The IP address of the requester
 * @returns Boolean indicating if the request is allowed
 */
function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const windowMs = 60 * 1000; // 1 minute in milliseconds
  
  // Initialize request log for this IP if it doesn't exist
  if (!requestLog[ip]) {
    requestLog[ip] = [];
  }
  
  // Filter out requests older than the rate limit window
  const recentRequests = requestLog[ip].filter(
    timestamp => now - timestamp < windowMs
  );
  
  // Update the request log
  requestLog[ip] = recentRequests;
  
  // Check if the rate limit has been exceeded
  if (recentRequests.length >= MAX_REQUESTS_PER_MINUTE) {
    return true;
  }
  
  // Log this request
  requestLog[ip].push(now);
  return false;
}

// Function to search vector store for relevant content
async function searchVectorStore(vectorStoreId: string, query: string) {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || ''}/api/Chatbot/vector_stores/search`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        vectorStoreId,
        query,
      }),
    });

    if (!response.ok) {
      throw new Error('Failed to search vector store');
    }

    const data = await response.json();
    return data.chunks || [];
  } catch (error) {
    console.error('Error searching vector store:', error);
    return [];
  }
}

// Check if a message is related to FluentPro
function isFluentProRelated(message: string): boolean {
  const fluentProTerms = [
    'fluentpro', 'fluent pro', 'fluentPro', 
    'language key', 'languagekey', 
    'english training', 'business english'
  ];
  
  return fluentProTerms.some(term => message.toLowerCase().includes(term.toLowerCase()));
}

export async function POST(req: NextRequest) {
  try {
    // Get user's IP for rate limiting
    const ip = req.headers.get('x-forwarded-for') || 'unknown';
    
    // Check rate limiting
    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { status: 429 }
      );
    }

    // Parse the request body
    const body = await req.json();
    const { messages, tools } = body;
    
    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json(
        { error: 'Messages are required and must be an array' },
        { status: 400 }
      );
    }

    try {
      // Get the last user message
      const lastUserMessage = messages[messages.length - 1];
      let fluentProContext = '';

      // Check if we have any vector store info in the tools config
      const vectorStoreInfo = tools?.find((tool: any) => 
        tool.type === 'file_search' && tool.vector_store_id
      );
      
      // If this is a FluentPro related question and we have a vector store
      if (
        lastUserMessage && 
        lastUserMessage.role === 'user' && 
        isFluentProRelated(lastUserMessage.content) && 
        vectorStoreInfo?.vector_store_id
      ) {
        // Search the vector store for relevant information
        const chunks = await searchVectorStore(
          vectorStoreInfo.vector_store_id, 
          lastUserMessage.content
        );
        
        if (chunks.length > 0) {
          // Format the retrieved chunks into context
          fluentProContext = 'Information about FluentPro:\n\n' + 
            chunks.map((chunk: any) => chunk.text).join('\n\n');
        }
      }

      // Enhanced system prompt with FluentPro information if available
      const systemPrompt = `You are a helpful assistant focused on answering questions about FluentPro, an AI-powered Business English training web application.
      
      ${fluentProContext ? 'USE THE FOLLOWING INFORMATION TO ANSWER QUESTIONS ABOUT FLUENTPRO:\n\n' + fluentProContext : 'Keep responses brief and focused on the website content.'}
      
      If you don't have specific information to answer a question about FluentPro, DO NOT make up or hallucinate an answer. 
      Instead, politely ask the user to email support@languagekey.com for more information.`;

      // Prepare input messages
      const inputMessages = [
        {
          role: 'system',
          content: systemPrompt
        },
        ...messages
      ];

      // Create chat completion with the enhanced context
      const response = await openai.chat.completions.create({
        model: 'gpt-4o-mini',
        messages: inputMessages,
        stream: true,
      });

      // Create a ReadableStream
      const stream = new ReadableStream({
        async start(controller) {
          try {
            // Process each chunk from the OpenAI stream
            for await (const chunk of response) {
              const content = chunk.choices[0]?.delta?.content || '';
              if (content) {
                // Encode the content as UTF-8
                const encoder = new TextEncoder();
                controller.enqueue(encoder.encode(content));
              }
            }
            controller.close();
          } catch (error) {
            console.error('Streaming error:', error);
            controller.error(error);
          }
        },
      });

      // Return the stream as response
      return new Response(stream, {
        headers: {
          'Content-Type': 'text/plain; charset=utf-8',
          'Cache-Control': 'no-cache',
        },
      });
    } catch (responseError) {
      console.error('OpenAI API error:', responseError);
      return NextResponse.json(
        { error: 'Error with AI response: ' + (responseError instanceof Error ? responseError.message : 'Unknown error') },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error('Chat API error:', error);
    return NextResponse.json(
      { error: 'An error occurred while processing your request' },
      { status: 500 }
    );
  }
}