
import React from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from '@/components/ui/navigation-menu';
import { Building2, BarChart3, Package, Calendar, FileText, TrendingUp, User, Settings, LogOut } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const navigationItems = [
  { title: 'Dashboard', url: '/', icon: BarChart3 },
  { title: 'Events', url: '/events', icon: Calendar },
  { title: 'Products', url: '/products', icon: Package },
  { title: 'Objects', url: '/objects', icon: TrendingUp },
  { title: 'Reporting', url: '/reporting', icon: FileText },
];

export const DashboardHeader = () => {
  const location = useLocation();
  
  const companies = [
    { id: '1', name: 'TechCorp Inc.' },
    { id: '2', name: 'Innovation Labs' },
    { id: '3', name: 'Digital Solutions' },
    { id: '4', name: 'Future Systems' },
  ];

  return (
    <header className="bg-white border-b border-gray-200 px-4 md:px-6 py-3">
      <div className="flex items-center justify-between">
        {/* Logo and Navigation */}
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <Building2 className="h-6 w-6 text-blue-600" />
            <span className="text-lg font-semibold text-gray-900">Analytics Pro</span>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navigationItems.map((item) => (
              <Link
                key={item.title}
                to={item.url}
                className={`flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  location.pathname === item.url
                    ? 'bg-blue-50 text-blue-600'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                <item.icon className="h-4 w-4" />
                {item.title}
              </Link>
            ))}
          </nav>
        </div>
        
        {/* Company Selector and User Profile */}
        <div className="flex items-center gap-3">
          {/* Company Selector */}
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-600 hidden lg:inline">Company:</span>
            <Select defaultValue="1">
              <SelectTrigger className="w-32 lg:w-40 h-8 text-sm">
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

          {/* User Profile Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-2 hover:bg-gray-50 rounded-full p-1 transition-colors">
              <Avatar className="h-8 w-8">
                <AvatarImage src="/placeholder.svg" alt="User" />
                <AvatarFallback className="bg-blue-100 text-blue-600">
                  <User className="h-4 w-4" />
                </AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56 bg-white">
              <DropdownMenuLabel className="font-normal">
                <div className="flex flex-col space-y-1">
                  <p className="text-sm font-medium leading-none">John Doe</p>
                  <p className="text-xs leading-none text-gray-500">john.doe@example.com</p>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="cursor-pointer">
                <User className="mr-2 h-4 w-4" />
                <span>Profile</span>
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer">
                <Settings className="mr-2 h-4 w-4" />
                <span>Settings</span>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="cursor-pointer text-red-600">
                <LogOut className="mr-2 h-4 w-4" />
                <span>Log out</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden mt-3 border-t pt-3">
        <nav className="flex gap-1 overflow-x-auto">
          {navigationItems.map((item) => (
            <Link
              key={item.title}
              to={item.url}
              className={`flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium whitespace-nowrap transition-colors ${
                location.pathname === item.url
                  ? 'bg-blue-50 text-blue-600'
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
              }`}
            >
              <item.icon className="h-4 w-4" />
              {item.title}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};
