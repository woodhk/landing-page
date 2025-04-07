import React from 'react';

interface HROnboardingStaffLayoutProps {
  children: React.ReactNode;
}

export default function HROnboardingStaffLayout({ children }: HROnboardingStaffLayoutProps) {
  return (
    <div className="hr-onboarding-staff-layout">
      {children}
    </div>
  );
} 