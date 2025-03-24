/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable React strict mode for improved error handling
  reactStrictMode: true,
  
  // Configure image domains for security
  images: {
    domains: [
      // Add any external domains for images here
    ],
  },
  
  // API route configuration
  api: {
    // Configure body parser size limit
    bodyParser: {
      sizeLimit: '1mb',
    },
    // Enable response compression
    responseLimit: false,
  },
  
  // Configure security headers
  async headers() {
    return [
      {
        // Apply these headers to all routes
        source: '/(.*)',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
          // Strict-Transport-Security should only be enabled in production
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload',
          },
        ],
      },
    ];
  },
  
  // Disable x-powered-by header
  poweredByHeader: false,
};

export default nextConfig;