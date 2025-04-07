import React from 'react';

interface FinanceLayoutProps {
  children: React.ReactNode;
}

export default function FinanceLayout({ children }: FinanceLayoutProps) {
  return (
    <div className="finance-layout">
      {children}
    </div>
  );
} 