// app/(pages)/layout.tsx
import React from 'react';
import StickyNavbar from '../../components/navigation/NavBar/page';
import Footer from '../../components/navigation/Footer';
import ChatbotWrapper from '../../chatbot/frontend/ChatbotWrapper';

export default function PagesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="flex flex-col min-h-screen w-full">
        <StickyNavbar />
        <main className="flex-grow pt-24"> {/* Increased padding-top to account for fixed navbar with padding */}
          {children}
        </main>
        <Footer />
      </div>
      {/* Render chatbot outside the main layout */}
      <ChatbotWrapper />
    </>
  );
}