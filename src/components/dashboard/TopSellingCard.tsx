
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface TopSellingItem {
  id: number;
  name: string;
  sales: number;
  change: number;
}

interface TopSellingCardProps {
  title: string;
  items: TopSellingItem[];
}

export const TopSellingCard = ({ title, items }: TopSellingCardProps) => {
  return (
    <Card className="h-96">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg font-semibold">{title}</CardTitle>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="space-y-2">
          {items.map((item, index) => (
            <div key={item.id} className="flex items-center justify-between p-2 bg-gray-50 rounded-lg">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center text-xs font-semibold text-blue-600">
                  {index + 1}
                </div>
                <div className="min-w-0 flex-1">
                  <p className="font-medium text-gray-900 text-sm truncate">{item.name}</p>
                  <p className="text-xs text-gray-500">{item.sales} sales</p>
                </div>
              </div>
              <div className={`text-xs font-medium ${
                item.change >= 0 ? 'text-green-600' : 'text-red-600'
              }`}>
                {item.change >= 0 ? '+' : ''}{item.change}%
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
