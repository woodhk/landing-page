import dynamic from 'next/dynamic';

// Dynamically import the HomePage component with no SSR
const HomePage = dynamic(() => import('./(pages)/home/page'), {
  ssr: false,
});

export default function Page() {
  return <HomePage />;
}