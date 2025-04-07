import React from 'react';

interface ITTechnicalSupportLayoutProps {
  children: React.ReactNode;
}

export default function ITTechnicalSupportLayout({ children }: ITTechnicalSupportLayoutProps) {
  return (
    <div className="it-technical-support-layout">
      {children}
    </div>
  );
} 