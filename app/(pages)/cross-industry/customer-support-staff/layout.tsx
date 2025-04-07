import React from 'react';

interface CustomerSupportStaffLayoutProps {
  children: React.ReactNode;
}

export default function CustomerSupportStaffLayout({ children }: CustomerSupportStaffLayoutProps) {
  return (
    <div className="customer-support-staff-layout">
      {children}
    </div>
  );
} 