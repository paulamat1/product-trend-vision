
import React from 'react';
import { DashboardHeader } from './DashboardHeader';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardHeader />
      <main className="p-4 md:p-6">
        {children}
      </main>
    </div>
  );
};
