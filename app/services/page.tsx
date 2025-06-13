'use client';

import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link';

export default function Services() {
  const [activeSliders, setActiveSliders] = useState<{[key: string]: number}>({});

  const services = [
    {
      id: 'kitchen',
      title: 'Kitchen Remodeling',
      description: 'Transform your kitchen into the heart of your home with custom designs that combine functionality and beauty. Our expert team handles everything from cabinet installation to countertop selection.',
      features: ['Custom Cabinet Design', 'Countertop Installation', 'Appliance Integration', 'Lighting Design', 'Flooring Options', 'Storage Solutions'],
      href: '/services/kitchen-remodeling',
      beforeAfter: [
        {
          before: 'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop',
          after: 'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop',
        },
        {
          before: 'https://images.pexels.com/photos/1599791/pexels-photo-1599791.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop',
          after: 'https://images.pexels.com/photos/2089698/pexels-photo-2089698.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop',
        },
      ],
    },
    {
      id: 'bathroom',
      title: 'Bathroom Renovations',
      description: 'Create your personal spa retreat with luxurious bathroom renovations. From modern fixtures to elegant tile work, we design bathrooms that are both beautiful and functional.',
      features: ['Walk-in Showers', 'Custom Vanities', 'Tile Installation', 'Modern Fixtures', 'Storage Solutions', 'Lighting Design'],
      href: '/services/bathroom-renovation',
      beforeAfter: [
        {
          before: 'https://images.pexels.com/photos/1454806/pexels-photo-1454806.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop',
          after: 'https://images.pexels.com/photos/2724748/pexels-photo-2724748.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop',
        },
        {
          before: 'https://images.pexels.com/photos/6585761/pexels-photo-6585761.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop',
          after: 'https://images.pexels.com/photos/6585760/pexels-photo-6585760.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop',
        },
      ],
    },
    {
      id: 'basement',
      title: 'Basement Finishing',
      description: 'Unlock the potential of your basement space with professional finishing services. Whether you want a home theater, office, or guest suite, we make basements livable and beautiful.',
      features: ['Moisture Control', 'Insulation', 'Flooring Installation', 'Ceiling Solutions', 'Entertainment Areas', 'Home Offices'],
      href: '/services/basement-finishing',
      beforeAfter: [
        {
          before: 'https://images.pexels.com/photos/5998051/pexels-photo-5998051.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop',
          after: 'https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop',
        },
        {
          before: 'https://images.pexels.com/photos/6775269/pexels-photo-6775269.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop',
          after: 'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop',
        },
      ],
    },
    {
      id: 'additions',
      title: 'Home Additions',
      description: 'Expand your living space with seamless home additions that blend perfectly with your existing architecture. From single rooms to multi-story extensions.',
      features: ['Room Additions', 'Second Story Extensions', 'Garage Conversions', 'Sunrooms', 'Master Suites', 'In-law Apartments'],
      href: '/services/home-additions',
      beforeAfter: [
        {
          before: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop',
          after: 'https://images.pexels.com/photos/271816/pexels-photo-271816.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop',
        },
        {
          before: 'https://images.pexels.com/photos/1370704/pexels-photo-1370704.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop',
          after: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop',
        },
      ],
    },
    {
      id: 'full-renovation',
      title: 'Full Home Renovation',
      description: 'Complete home transformations from concept to completion. We handle every aspect of your renovation project with expert coordination and craftsmanship.',
      features: ['Complete Design', 'Structural Work', 'All Systems Updates', 'Interior & Exterior', 'Project Management', 'Quality Control'],
      href: '/services/full-home-renovation',
      beforeAfter: [
        {
          before: 'https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop',
          after: 'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop',
        },
        {
          before: 'https://images.pexels.com/photos/1370704/pexels-photo-1370704.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop',
          after: 'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop',
        },
      ],
    },
    {
      id: 'painting',
      title: 'Painting & Decorating',
      description: 'Transform your home with professional painting and decorating services. From color consultation to flawless application, we bring beauty to every surface.',
      features: ['Interior Painting', 'Exterior Painting', 'Color Consultation', 'Wall Preparation', 'Decorative Finishes', 'Wallpaper Installation'],
      href: '/services/painting-decorating',
      beforeAfter: [
        {
          before: 'https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop',
          after: 'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop',
        },
        {
          before: 'https://images.pexels.com/photos/1370704/pexels-photo-1370704.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop',
          after: 'https://images.pexels.com/photos/271816/pexels-photo-271816.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop',
        },
      ],
    },
    {
      id: 'flooring',
      title: 'Flooring Services',
      description: 'Transform your home from the ground up with professional flooring installation. From hardwood to luxury vinyl, we install floors that last.',
      features: ['Hardwood Flooring', 'Luxury Vinyl Plank', 'Tile Installation', 'Carpet Installation', 'Floor Refinishing', 'Subfloor Preparation'],
      href: '/services/flooring',
      beforeAfter: [
        {
          before: 'https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop',
          after: 'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop',
        },
        {
          before: 'https://images.pexels.com/photos/1370704/pexels-photo-1370704.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop',
          after: 'https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop',
        },
      ],
    },
    {
      id: 'plastering',
      title: 'Plastering Services',
      description: 'Expert plastering services for smooth, durable walls and ceilings. From repairs to complete installations, we deliver flawless finishes.',
      features: ['Wall Plastering', 'Ceiling Plastering', 'Plaster Repairs', 'Skim Coating', 'Decorative Finishes', 'Surface Preparation'],
      href: '/services/plastering',
      beforeAfter: [
        {
          before: 'https://images.pexels.com/photos/5998051/pexels-photo-5998051.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop',
          after: 'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop',
        },
        {
          before: 'https://images.pexels.com/photos/6775269/pexels-photo-6775269.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop',
          after: 'https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop',
        },
      ],
    },
    {
      id: 'roofing',
      title: 'Roofing Services',
      description: 'Protect your home with professional roofing services. From repairs to complete replacements, we ensure your roof stands strong against the elements.',
      features: ['Roof Replacement', 'Roof Repairs', 'Shingle Installation', 'Metal Roofing', 'Gutter Installation', 'Emergency Repairs'],
      href: '/services/roofing',
      beforeAfter: [
        {
          before: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop',
          after: 'https://images.pexels.com/photos/271816/pexels-photo-271816.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop',
        },
        {
          before: 'https://images.pexels.com/photos/1370704/pexels-photo-1370704.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop',
          after: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop',
        },
      ],
    },
  ];

  const nextSlide = (serviceId: string) => {
    const service = services.find(s => s.id === serviceId);
    if (service) {
      setActiveSliders(prev => ({
        ...prev,
        [serviceId]: ((prev[serviceId] || 0) + 1) % service.beforeAfter.length
      }));
    }
  };

  const prevSlide = (serviceId: string) => {
    const service = services.find(s => s.id === serviceId);
    if (service) {
      setActiveSliders(prev => ({
        ...prev,
        [serviceId]: ((prev[serviceId] || 0) - 1 + service.beforeAfter.length) % service.beforeAfter.length
      }));
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      {/* Hero Section */}
      <section className="bg-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-xl max-w-3xl mx-auto">
            From kitchen remodels to complete home renovations, we offer comprehensive 
            services to transform every corner of your home with expert craftsmanship.
          </p>
        </div>
      </section>

      {/* Services Sections */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {services.map((service, index) => (
              <div key={service.id} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <h2 className="text-4xl font-bold text-gray-900 mb-6">{service.title}</h2>
                  <p className="text-lg text-gray-600 mb-6">{service.description}</p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="space-x-4">
                    <Link href={service.href}>
                      <Button size="lg" className="bg-orange-500 hover:bg-orange-600">
                        Learn More
                      </Button>
                    </Link>
                    <Button size="lg" variant="outline" className="border-blue-700 text-blue-700 hover:bg-blue-700 hover:text-white">
                      Schedule Consultation
                    </Button>
                  </div>
                </div>

                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <Card className="overflow-hidden shadow-xl">
                    <div className="relative">
                      <div className="grid grid-cols-2">
                        <div className="relative">
                          <img 
                            src={service.beforeAfter[activeSliders[service.id] || 0].before}
                            alt="Before"
                            className="w-full h-64 object-cover"
                          />
                          <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                            Before
                          </div>
                        </div>
                        <div className="relative">
                          <img 
                            src={service.beforeAfter[activeSliders[service.id] || 0].after}
                            alt="After"
                            className="w-full h-64 object-cover"
                          />
                          <div className="absolute top-4 left-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                            After
                          </div>
                        </div>
                      </div>

                      {service.beforeAfter.length > 1 && (
                        <>
                          <button
                            onClick={() => prevSlide(service.id)}
                            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-2 transition-all duration-200"
                          >
                            <ChevronLeft className="h-5 w-5 text-gray-600" />
                          </button>
                          <button
                            onClick={() => nextSlide(service.id)}
                            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-2 transition-all duration-200"
                          >
                            <ChevronRight className="h-5 w-5 text-gray-600" />
                          </button>
                        </>
                      )}
                    </div>

                    {service.beforeAfter.length > 1 && (
                      <CardContent className="p-4">
                        <div className="flex justify-center space-x-2">
                          {service.beforeAfter.map((_, slideIndex) => (
                            <button
                              key={slideIndex}
                              onClick={() => setActiveSliders(prev => ({ ...prev, [service.id]: slideIndex }))}
                              className={`w-2 h-2 rounded-full transition-all duration-200 ${
                                slideIndex === (activeSliders[service.id] || 0) ? 'bg-blue-700' : 'bg-gray-300'
                              }`}
                            />
                          ))}
                        </div>
                      </CardContent>
                    )}
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-700 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Transform Your Home?</h2>
          <p className="text-xl mb-8">
            Let's discuss your renovation project and bring your vision to life
          </p>
          <div className="space-x-4">
            <Button size="lg" className="bg-orange-500 hover:bg-orange-600">
              Get Free Quote
            </Button>
            <Button size="lg" variant="outline" className="text-blue-700 border-white hover:bg-white">
              Schedule Consultation
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}