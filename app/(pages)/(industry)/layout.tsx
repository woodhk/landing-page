import React from 'react';

export default function IndustryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col">
      {/* You can add shared components for all industry pages here */}
      {/* Like a specialized header or navigation for industries */}
      <main className="flex-1">{children}</main>
      {/* Footer or other shared components */}
    </div>
  );
}
