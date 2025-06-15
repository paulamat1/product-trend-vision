
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

interface SalesData {
  date: string;
  sales: number;
}

interface Event {
  id: string;
  name: string;
  data: SalesData[];
}

const mockEvents: Event[] = [
  {
    id: '1',
    name: 'Summer Festival 2024',
    data: [
      { date: 'Jan', sales: 4000 },
      { date: 'Feb', sales: 3000 },
      { date: 'Mar', sales: 5000 },
      { date: 'Apr', sales: 4500 },
      { date: 'May', sales: 6000 },
      { date: 'Jun', sales: 8000 },
    ],
  },
  {
    id: '2',
    name: 'Tech Conference 2024',
    data: [
      { date: 'Jan', sales: 2000 },
      { date: 'Feb', sales: 2500 },
      { date: 'Mar', sales: 3000 },
      { date: 'Apr', sales: 3500 },
      { date: 'May', sales: 4000 },
      { date: 'Jun', sales: 4500 },
    ],
  },
];

export const SalesChart = () => {
  const [selectedEvent, setSelectedEvent] = useState<string>(mockEvents[0].id);
  
  const currentEventData = mockEvents.find(event => event.id === selectedEvent)?.data || [];

  return (
    <Card className="col-span-2">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg font-semibold">Sales of Active Events</CardTitle>
          <Select value={selectedEvent} onValueChange={setSelectedEvent}>
            <SelectTrigger className="w-48">
              <SelectValue placeholder="Select an event" />
            </SelectTrigger>
            <SelectContent>
              {mockEvents.map((event) => (
                <SelectItem key={event.id} value={event.id}>
                  {event.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </CardHeader>
      <CardContent>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={currentEventData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Line 
                type="monotone" 
                dataKey="sales" 
                stroke="#3b82f6" 
                strokeWidth={3}
                dot={{ fill: '#3b82f6', strokeWidth: 2, r: 6 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};
