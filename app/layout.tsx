// app/layout.tsx
import './globals.css';
import type { Metadata } from 'next';
import { ChatUI } from './components/Chat';

export const metadata: Metadata = {
  title: 'FluentPro',
  description: 'Give your employees the Business English Speaking skills they need to perform their job better in English.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
        <ChatUI />
      </body>
    </html>
  );
}