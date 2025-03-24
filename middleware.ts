import { NextResponse, type NextRequest } from 'next/server';

// Rate limiting configuration
const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minute in milliseconds
const MAX_REQUESTS_PER_WINDOW = 20; // Maximum requests per window

// Store for rate limiting (in production, use Redis or similar)
const rateLimit = new Map<string, { count: number; resetTime: number }>();

export async function middleware(request: NextRequest) {
  // Only apply to chat API endpoint
  if (request.nextUrl.pathname.startsWith('/api/chat')) {
    return handleChatApiRequest(request);
  }

  return NextResponse.next();
}

function handleChatApiRequest(request: NextRequest) {
  // Apply CORS headers for API routes
  const response = new NextResponse(
    JSON.stringify({ success: true }),
    {
      status: 200,
      headers: {
        'Access-Control-Allow-Origin': '*', // In production, specify your domain
        'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization',
        'Content-Type': 'application/json',
      },
    }
  );

  // Handle preflight requests
  if (request.method === 'OPTIONS') {
    return response;
  }

  // Get client IP for rate limiting
  const ip = request.headers.get('x-forwarded-for') || 
             request.ip || 
             'unknown';

  // Implement rate limiting
  const now = Date.now();
  const rateLimitInfo = rateLimit.get(ip) || { count: 0, resetTime: now + RATE_LIMIT_WINDOW };

  // Reset counter if window expired
  if (now > rateLimitInfo.resetTime) {
    rateLimitInfo.count = 0;
    rateLimitInfo.resetTime = now + RATE_LIMIT_WINDOW;
  }

  // Increment counter
  rateLimitInfo.count++;
  rateLimit.set(ip, rateLimitInfo);

  // Check if rate limit exceeded
  if (rateLimitInfo.count > MAX_REQUESTS_PER_WINDOW) {
    return new NextResponse(
      JSON.stringify({ error: 'Too many requests, please try again later' }),
      {
        status: 429,
        headers: {
          'Content-Type': 'application/json',
          'Retry-After': `${Math.ceil((rateLimitInfo.resetTime - now) / 1000)}`,
        },
      }
    );
  }

  return NextResponse.next();
}

// Configure which routes the middleware runs on
export const config = {
  matcher: ['/api/chat/:path*'],
};