'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, Home, Wrench, Users, Image, Phone, Calendar, ChevronDown, Quote } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const navItems = [
    { href: '/', label: 'Home', icon: Home },
    { href: '/portfolio', label: 'Portfolio', icon: Image },
    { href: '/about', label: 'About', icon: Users },
    { href: '/contact', label: 'Contact', icon: Phone },
    { href: '/booking', label: 'Book Now', icon: Calendar },
  ];

  const serviceItems = [
    { href: '/services/kitchen-remodeling', label: 'Kitchen Remodeling' },
    { href: '/services/bathroom-renovation', label: 'Bathroom Renovation' },
    { href: '/services/basement-finishing', label: 'Basement Finishing' },
    { href: '/services/home-additions', label: 'Home Additions' },
    { href: '/services/full-home-renovation', label: 'Full Home Renovation' },
    { href: '/services/painting-decorating', label: 'Painting & Decorating' },
    { href: '/services/flooring', label: 'Flooring' },
    { href: '/services/plastering', label: 'Plastering' },
    { href: '/services/roofing', label: 'Roofing' },
  ];

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <Wrench className="h-8 w-8 text-blue-700" />
              <span className="font-bold text-xl text-gray-900">Revolution Property Maintenance</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-gray-700 hover:text-blue-700 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
              >
                {item.label}
              </Link>
            ))}
            
            {/* Services Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className="flex items-center text-gray-700 hover:text-blue-700 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
              >
                <Wrench className="h-4 w-4 mr-1" />
                Services
                <ChevronDown className="h-4 w-4 ml-1" />
              </button>
              
              {isServicesOpen && (
                <div className="absolute top-full left-0 mt-1 w-64 bg-white rounded-md shadow-lg border border-gray-200 py-2 z-50">
                  <Link
                    href="/services"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700 font-medium border-b border-gray-100"
                    onClick={() => setIsServicesOpen(false)}
                  >
                    All Services
                  </Link>
                  {serviceItems.map((service) => (
                    <Link
                      key={service.href}
                      href={service.href}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700"
                      onClick={() => setIsServicesOpen(false)}
                    >
                      {service.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Button className="bg-orange-500 hover:bg-orange-600">
              <Quote className="h-4 w-4 mr-1" />
              Free Quote
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-blue-700 p-2"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="flex items-center space-x-2 text-gray-700 hover:text-blue-700 block px-3 py-2 rounded-md text-base font-medium"
                    onClick={() => setIsOpen(false)}
                  >
                    <Icon className="h-4 w-4" />
                    <span>{item.label}</span>
                  </Link>
                );
              })}
              
              {/* Mobile Services Menu */}
              <div className="border-t border-gray-200 pt-2">
                <div className="flex items-center space-x-2 px-3 py-2 text-gray-900 font-medium">
                  <Wrench className="h-4 w-4" />
                  <span>Services</span>
                </div>
                <Link
                  href="/services"
                  className="block px-6 py-2 text-sm text-gray-700 hover:text-blue-700 font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  All Services
                </Link>
                {serviceItems.map((service) => (
                  <Link
                    key={service.href}
                    href={service.href}
                    className="block px-6 py-2 text-sm text-gray-700 hover:text-blue-700"
                    onClick={() => setIsOpen(false)}
                  >
                    {service.label}
                  </Link>
                ))}
              </div>
              
              <div className="px-3 py-2">
                <Button className="w-full bg-orange-500 hover:bg-orange-600">
                  <Quote className="h-4 w-4 mr-1" />
                  Free Quote
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Overlay for desktop dropdown */}
      {isServicesOpen && (
        <div 
          className="fixed inset-0 z-40" 
          onClick={() => setIsServicesOpen(false)}
        />
      )}
    </nav>
  );
};

export default Navigation;