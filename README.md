# FluentPro Landing Page

A modern landing page built with Next.js, TypeScript, and Tailwind CSS.

## Features

- Responsive design with mobile and desktop layouts
- Animated components using Framer Motion
- Interactive UI elements
- AI Chat Assistant integration

## AI Assistant Implementation

The website includes an AI chat assistant feature that:
- Helps users with questions about the website content
- Uses OpenAI's API for natural language responses
- Provides real-time streaming responses
- Includes proper security and rate limiting

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up environment variables:
   Create a `.env.development` file with the following:
   ```
   OPENAI_API_KEY=your_openai_api_key
   ```
4. Run the development server:
   ```bash
   npm run dev
   ```
5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Environment Variables

- `OPENAI_API_KEY`: Your OpenAI API key for the chat functionality

## Deployment

This project is deployed using [Vercel](https://vercel.com). Configure the following environment variables during deployment:

1. `OPENAI_API_KEY`: Your production OpenAI API key

## Security Considerations

The implementation includes:
- Rate limiting to prevent API abuse
- HTTP security headers
- CORS configuration
- Error handling and validation

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!
