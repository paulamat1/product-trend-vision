
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface VolumeChangeItem {
  id: number;
  name: string;
  change: number;
  category: string;
}

interface VolumeChangesCardProps {
  positiveChanges: VolumeChangeItem[];
  negativeChanges: VolumeChangeItem[];
}

export const VolumeChangesCard = ({ positiveChanges, negativeChanges }: VolumeChangesCardProps) => {
  return (
    <Card className="h-96">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg font-semibold">Unusual Volume Changes</CardTitle>
      </CardHeader>
      <CardContent className="pt-0">
        <Tabs defaultValue="positive" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-3">
            <TabsTrigger value="positive" className="text-xs">Top Gains</TabsTrigger>
            <TabsTrigger value="negative" className="text-xs">Top Losses</TabsTrigger>
          </TabsList>
          <TabsContent value="positive" className="mt-0">
            <div className="space-y-1.5">
              {positiveChanges.map((item, index) => (
                <div key={item.id} className="flex items-center justify-between p-2 border-l-4 border-green-500 bg-green-50 rounded">
                  <div className="min-w-0 flex-1">
                    <p className="font-medium text-gray-900 text-sm truncate">{item.name}</p>
                    <p className="text-xs text-gray-500">{item.category}</p>
                  </div>
                  <div className="text-green-600 font-semibold text-sm">+{item.change}%</div>
                </div>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="negative" className="mt-0">
            <div className="space-y-1.5">
              {negativeChanges.map((item, index) => (
                <div key={item.id} className="flex items-center justify-between p-2 border-l-4 border-red-500 bg-red-50 rounded">
                  <div className="min-w-0 flex-1">
                    <p className="font-medium text-gray-900 text-sm truncate">{item.name}</p>
                    <p className="text-xs text-gray-500">{item.category}</p>
                  </div>
                  <div className="text-red-600 font-semibold text-sm">{item.change}%</div>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};
