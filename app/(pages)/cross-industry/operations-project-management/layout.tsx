import React from 'react';

interface OperationsProjectManagementLayoutProps {
  children: React.ReactNode;
}

export default function OperationsProjectManagementLayout({ children }: OperationsProjectManagementLayoutProps) {
  return (
    <div className="operations-project-management-layout">
      {children}
    </div>
  );
} 