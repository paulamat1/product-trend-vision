
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Box, MapPin, Calendar, Activity } from 'lucide-react';

const Objects = () => {
  const objects = [
    {
      id: 1,
      name: 'Main Stage',
      type: 'Venue',
      location: 'Central Park',
      status: 'occupied',
      utilization: '85%',
      nextEvent: '2024-07-15',
    },
    {
      id: 2,
      name: 'Audio Equipment Set A',
      type: 'Equipment',
      location: 'Storage Room 1',
      status: 'available',
      utilization: '60%',
      nextEvent: '2024-07-20',
    },
    {
      id: 3,
      name: 'Exhibition Hall',
      type: 'Venue',
      location: 'Convention Center',
      status: 'maintenance',
      utilization: '0%',
      nextEvent: '2024-08-01',
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'occupied':
        return 'bg-red-100 text-red-800';
      case 'available':
        return 'bg-green-100 text-green-800';
      case 'maintenance':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-900">Objects</h1>
        <Button>Add New Object</Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {objects.map((object) => (
          <Card key={object.id} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg">{object.name}</CardTitle>
                <Badge className={getStatusColor(object.status)}>
                  {object.status}
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-2 text-gray-600">
                <Box className="h-4 w-4" />
                <span>{object.type}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <MapPin className="h-4 w-4" />
                <span>{object.location}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <Activity className="h-4 w-4" />
                <span>{object.utilization} utilization</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <Calendar className="h-4 w-4" />
                <span>Next: {new Date(object.nextEvent).toLocaleDateString()}</span>
              </div>
              <Button variant="outline" className="w-full">
                Manage Object
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Objects;
