import React from 'react';
import { KPICard } from '@/components/dashboard/KPICard';
import { TopSellingCard } from '@/components/dashboard/TopSellingCard';
import { VolumeChangesCard } from '@/components/dashboard/VolumeChangesCard';
import { SalesChart } from '@/components/dashboard/SalesChart';
import { AISuggestionsCard } from '@/components/dashboard/AISuggestionsCard';

const Dashboard = () => {
  const kpiData = [
    { title: 'Total Revenue', value: '$124,562', change: 12.5, changeType: 'increase' as const },
    { title: 'Active Events', value: '23', change: 8.2, changeType: 'increase' as const },
    { title: 'Products Sold', value: '1,429', change: -3.1, changeType: 'decrease' as const },
    { title: 'Conversion Rate', value: '3.2%', change: 5.7, changeType: 'increase' as const },
  ];

  const topEvents = [
    { id: 1, name: 'Summer Festival 2024', sales: 1250, change: 15.2 },
    { id: 2, name: 'Tech Conference', sales: 890, change: 8.7 },
    { id: 3, name: 'Art Gallery Opening', sales: 654, change: -2.1 },
    { id: 4, name: 'Music Concert', sales: 543, change: 12.3 },
    { id: 5, name: 'Food Festival', sales: 432, change: 6.8 },
  ];

  const topProducts = [
    { id: 1, name: 'Premium Ticket', sales: 2100, change: 18.5 },
    { id: 2, name: 'VIP Package', sales: 1800, change: 12.1 },
    { id: 3, name: 'Standard Ticket', sales: 1500, change: 5.3 },
    { id: 4, name: 'Group Package', sales: 980, change: -1.2 },
    { id: 5, name: 'Early Bird', sales: 750, change: 9.7 },
  ];

  const positiveChanges = [
    { id: 1, name: 'Corporate Events', change: 45.2, category: 'Events' },
    { id: 2, name: 'Premium Merchandise', change: 38.7, category: 'Products' },
    { id: 3, name: 'Weekend Shows', change: 32.1, category: 'Events' },
    { id: 4, name: 'Digital Tickets', change: 28.9, category: 'Products' },
    { id: 5, name: 'Group Bookings', change: 25.4, category: 'Events' },
  ];

  const negativeChanges = [
    { id: 1, name: 'Physical Merchandise', change: -25.3, category: 'Products' },
    { id: 2, name: 'Weekday Events', change: -18.7, category: 'Events' },
    { id: 3, name: 'Last Minute Tickets', change: -15.2, category: 'Products' },
    { id: 4, name: 'Outdoor Events', change: -12.8, category: 'Events' },
    { id: 5, name: 'Student Discounts', change: -10.9, category: 'Products' },
  ];

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900">Dashboard</h1>
        <div className="text-xs md:text-sm text-gray-500">
          Last updated: {new Date().toLocaleDateString()}
        </div>
      </div>

      {/* KPI Cards - 2x2 on mobile, 4 across on larger screens */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
        {kpiData.map((kpi, index) => (
          <KPICard
            key={index}
            title={kpi.title}
            value={kpi.value}
            change={kpi.change}
            changeType={kpi.changeType}
            description="from last week"
          />
        ))}
      </div>

      {/* Main Dashboard Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Top Selling Events */}
        <TopSellingCard title="Top Selling Events" items={topEvents} />
        
        {/* Top Selling Products */}
        <TopSellingCard title="Top Selling Products" items={topProducts} />
        
        {/* Unusual Volume Changes */}
        <VolumeChangesCard 
          positiveChanges={positiveChanges} 
          negativeChanges={negativeChanges} 
        />
      </div>

      {/* Sales Chart and AI Suggestions */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <SalesChart />
        <AISuggestionsCard />
      </div>
    </div>
  );
};

export default Dashboard;
