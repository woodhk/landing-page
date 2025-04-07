import React from 'react';

interface LearningDevelopmentStaffLayoutProps {
  children: React.ReactNode;
}

export default function LearningDevelopmentStaffLayout({ children }: LearningDevelopmentStaffLayoutProps) {
  return (
    <div className="learning-development-staff-layout">
      {children}
    </div>
  );
} 