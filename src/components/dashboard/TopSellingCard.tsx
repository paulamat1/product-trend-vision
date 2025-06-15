
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
      <CardHeader>
        <CardTitle className="text-lg font-semibold">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {items.map((item, index) => (
            <div key={item.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-sm font-semibold text-blue-600">
                  {index + 1}
                </div>
                <div>
                  <p className="font-medium text-gray-900">{item.name}</p>
                  <p className="text-sm text-gray-500">{item.sales} sales</p>
                </div>
              </div>
              <div className={`text-sm font-medium ${
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
