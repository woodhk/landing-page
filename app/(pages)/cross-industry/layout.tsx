import React from 'react';

interface CrossIndustryLayoutProps {
  children: React.ReactNode;
}

export default function CrossIndustryLayout({ children }: CrossIndustryLayoutProps) {
  return (
    <div className="cross-industry-layout">
      {children}
    </div>
  );
} 