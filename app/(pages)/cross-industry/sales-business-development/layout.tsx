import React from 'react';

interface SalesBusinessDevelopmentLayoutProps {
  children: React.ReactNode;
}

export default function SalesBusinessDevelopmentLayout({ children }: SalesBusinessDevelopmentLayoutProps) {
  return (
    <div className="sales-business-development-layout">
      {children}
    </div>
  );
} 