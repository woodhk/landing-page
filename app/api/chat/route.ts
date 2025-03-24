import { NextRequest, NextResponse } from 'next/server';
import { OpenAI } from 'openai';

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
    const { messages } = body;
    
    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json(
        { error: 'Messages are required and must be an array' },
        { status: 400 }
      );
    }

    // Get the latest user message
    const userMessage = messages.find(msg => msg.role === 'user')?.content || '';
    
    try {
      // Create a response using Chat Completions API since we know it works reliably
      const response = await openai.chat.completions.create({
        model: 'gpt-3.5-turbo',
        messages: [
          {
            role: 'system',
            content: 'You are a helpful assistant focused on answering questions about this website. Keep responses brief and focused on the website content.'
          },
          {
            role: 'user',
            content: userMessage
          }
        ],
        stream: true,
      });

      // Create a new ReadableStream
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
      return new NextResponse(stream, {
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