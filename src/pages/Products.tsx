
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Package, TrendingUp, DollarSign, Star } from 'lucide-react';

const Products = () => {
  const products = [
    {
      id: 1,
      name: 'Premium Ticket',
      category: 'Tickets',
      price: '$150',
      sales: 2100,
      rating: 4.8,
      status: 'bestseller',
    },
    {
      id: 2,
      name: 'VIP Package',
      category: 'Packages',
      price: '$300',
      sales: 1800,
      rating: 4.9,
      status: 'popular',
    },
    {
      id: 3,
      name: 'Standard Ticket',
      category: 'Tickets',
      price: '$75',
      sales: 1500,
      rating: 4.5,
      status: 'active',
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'bestseller':
        return 'bg-yellow-100 text-yellow-800';
      case 'popular':
        return 'bg-green-100 text-green-800';
      case 'active':
        return 'bg-blue-100 text-blue-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-900">Products</h1>
        <Button>Add New Product</Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <Card key={product.id} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg">{product.name}</CardTitle>
                <Badge className={getStatusColor(product.status)}>
                  {product.status}
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-2 text-gray-600">
                <Package className="h-4 w-4" />
                <span>{product.category}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <DollarSign className="h-4 w-4" />
                <span className="font-semibold">{product.price}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <TrendingUp className="h-4 w-4" />
                <span>{product.sales} sales</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                <span>{product.rating} rating</span>
              </div>
              <Button variant="outline" className="w-full">
                View Details
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Products;
