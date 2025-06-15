
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Bot, Lightbulb, TrendingUp, AlertTriangle } from 'lucide-react';

interface AISuggestion {
  id: number;
  type: 'optimization' | 'opportunity' | 'warning';
  title: string;
  description: string;
  priority: 'high' | 'medium' | 'low';
}

const mockSuggestions: AISuggestion[] = [
  {
    id: 1,
    type: 'optimization',
    title: 'Optimize Event Timing',
    description: 'Consider scheduling events on weekends to increase attendance by 25%',
    priority: 'high',
  },
  {
    id: 2,
    type: 'opportunity',
    title: 'Bundle Products',
    description: 'Create product bundles for frequently bought together items',
    priority: 'medium',
  },
  {
    id: 3,
    type: 'warning',
    title: 'Inventory Alert',
    description: 'Low stock detected for popular items - consider restocking',
    priority: 'high',
  },
  {
    id: 4,
    type: 'optimization',
    title: 'Price Optimization',
    description: 'Adjust pricing for premium tickets based on demand patterns',
    priority: 'medium',
  },
];

export const AISuggestionsCard = () => {
  const getIcon = (type: string) => {
    switch (type) {
      case 'optimization':
        return <TrendingUp className="h-3 w-3" />;
      case 'opportunity':
        return <Lightbulb className="h-3 w-3" />;
      case 'warning':
        return <AlertTriangle className="h-3 w-3" />;
      default:
        return <Bot className="h-3 w-3" />;
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high':
        return 'bg-red-100 text-red-800';
      case 'medium':
        return 'bg-yellow-100 text-yellow-800';
      case 'low':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <Card className="h-96">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg font-semibold flex items-center gap-2">
          <Bot className="h-4 w-4 text-blue-600" />
          AI Suggestions
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="space-y-2">
          {mockSuggestions.map((suggestion) => (
            <div key={suggestion.id} className="p-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
              <div className="flex items-start justify-between mb-1">
                <div className="flex items-center gap-1.5">
                  {getIcon(suggestion.type)}
                  <h4 className="font-medium text-gray-900 text-sm">{suggestion.title}</h4>
                </div>
                <Badge className={`${getPriorityColor(suggestion.priority)} text-xs px-1.5 py-0.5`}>
                  {suggestion.priority}
                </Badge>
              </div>
              <p className="text-xs text-gray-600 leading-relaxed">{suggestion.description}</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
