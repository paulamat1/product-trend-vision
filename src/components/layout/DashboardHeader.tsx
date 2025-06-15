
import React from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Building2 } from 'lucide-react';

export const DashboardHeader = () => {
  const companies = [
    { id: '1', name: 'TechCorp Inc.' },
    { id: '2', name: 'Innovation Labs' },
    { id: '3', name: 'Digital Solutions' },
    { id: '4', name: 'Future Systems' },
  ];

  return (
    <header className="bg-white border-b border-gray-200 px-4 md:px-6 py-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <Building2 className="h-6 w-6 text-blue-600" />
            <span className="text-lg font-semibold text-gray-900">Analytics Pro</span>
          </div>
        </div>
        
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-600 hidden md:inline">Company:</span>
            <Select defaultValue="1">
              <SelectTrigger className="w-40 md:w-48 h-8 text-sm">
                <SelectValue placeholder="Select company" />
              </SelectTrigger>
              <SelectContent className="bg-white">
                {companies.map((company) => (
                  <SelectItem key={company.id} value={company.id}>
                    {company.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
    </header>
  );
};
