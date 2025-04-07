import React from 'react';

interface ClientRelationshipLayoutProps {
  children: React.ReactNode;
}

export default function ClientRelationshipLayout({ children }: ClientRelationshipLayoutProps) {
  return (
    <div className="client-relationship-layout">
      {children}
    </div>
  );
} 