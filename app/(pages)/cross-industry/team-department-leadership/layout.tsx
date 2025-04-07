import React from 'react';

interface TeamDepartmentLeadershipLayoutProps {
  children: React.ReactNode;
}

export default function TeamDepartmentLeadershipLayout({ children }: TeamDepartmentLeadershipLayoutProps) {
  return (
    <div className="team-department-leadership-layout">
      {children}
    </div>
  );
} 