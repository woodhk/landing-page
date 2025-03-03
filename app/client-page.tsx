'use client';

import dynamic from 'next/dynamic';

// Dynamically import the HomePage component with no SSR
const HomePage = dynamic(() => import('./(pages)/home/page'), {
  ssr: false,
});

export default function ClientPage() {
  return <HomePage />;
} 