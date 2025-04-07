import React from 'react';

interface AdministrativeSupportLayoutProps {
  children: React.ReactNode;
}

export default function AdministrativeSupportLayout({ children }: AdministrativeSupportLayoutProps) {
  return (
    <div className="administrative-support-layout">
      {children}
    </div>
  );
} 