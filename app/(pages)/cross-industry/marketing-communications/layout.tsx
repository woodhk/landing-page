import React from 'react';

interface MarketingCommunicationsLayoutProps {
  children: React.ReactNode;
}

export default function MarketingCommunicationsLayout({ children }: MarketingCommunicationsLayoutProps) {
  return (
    <div className="marketing-communications-layout">
      {children}
    </div>
  );
} 