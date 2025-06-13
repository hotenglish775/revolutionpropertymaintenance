'use client';

import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, CheckCircle, Star } from 'lucide-react';

export default function BathroomRenovation() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const beforeAfterImages = [
    {
      before: 'https://images.pexels.com/photos/1454806/pexels-photo-1454806.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop',
      after: 'https://images.pexels.com/photos/2724748/pexels-photo-2724748.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop',
      title: 'Luxury Master Bathroom'
    },
    {
      before: 'https://images.pexels.com/photos/6585761/pexels-photo-6585761.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop',
      after: 'https://images.pexels.com/photos/6585760/pexels-photo-6585760.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop',
      title: 'Modern Spa Bathroom'
    },
    {
      before: 'https://images.pexels.com/photos/1454806/pexels-photo-1454806.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop',
      after: 'https://images.pexels.com/photos/6782351/pexels-photo-6782351.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop',
      title: 'Contemporary Bathroom Design'
    }
  ];

  const features = [
    'Walk-in Shower Design',
    'Custom Vanity Installation',
    'Tile & Stone Work',
    'Modern Fixture Installation',
    'Heated Floor Systems',
    'Custom Storage Solutions',
    'Lighting Design',
    'Plumbing & Electrical',
    'Ventilation Systems',
    'Accessibility Features'
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % beforeAfterImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + beforeAfterImages.length) % beforeAfterImages.length);
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      {/* Hero Section */}
      <section className="bg-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-4">Bathroom Renovation</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Create your personal spa retreat with luxurious bathroom renovations that combine 
            modern functionality with elegant design.
          </p>
        </div>
      </section>

      {/* Before/After Slider */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Bathroom Transformations</h2>
            <p className="text-xl text-gray-600">
              See how we transform ordinary bathrooms into extraordinary spaces
            </p>
          </div>

          <Card className="overflow-hidden shadow-xl">
            <div className="relative">
              <div className="grid grid-cols-2">
                <div className="relative">
                  <img 
                    src={beforeAfterImages[currentSlide].before}
                    alt="Before"
                    className="w-full h-96 object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-red-500 text-white px-4 py-2 rounded-full font-medium">
                    Before
                  </div>
                </div>
                <div className="relative">
                  <img 
                    src={beforeAfterImages[currentSlide].after}
                    alt="After"
                    className="w-full h-96 object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-green-500 text-white px-4 py-2 rounded-full font-medium">
                    After
                  </div>
                </div>
              </div>

              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-3 transition-all duration-200"
              >
                <ChevronLeft className="h-6 w-6 text-gray-600" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-3 transition-all duration-200"
              >
                <ChevronRight className="h-6 w-6 text-gray-600" />
              </button>
            </div>

            <CardContent className="p-6 text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                {beforeAfterImages[currentSlide].title}
              </h3>
              <div className="flex justify-center space-x-2 mt-4">
                {beforeAfterImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-200 ${
                      index === currentSlide ? 'bg-blue-700' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Features & Services */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Complete Bathroom Renovation Services
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                From luxury master bathrooms to functional powder rooms, we create beautiful 
                spaces that enhance your daily routine and add value to your home.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>

              <Button size="lg" className="mt-8 bg-orange-500 hover:bg-orange-600">
                Schedule Free Consultation
              </Button>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://images.pexels.com/photos/2724748/pexels-photo-2724748.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
                alt="Modern bathroom with walk-in shower"
                className="rounded-lg shadow-md"
              />
              <img 
                src="https://images.pexels.com/photos/6585760/pexels-photo-6585760.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
                alt="Luxury bathroom vanity"
                className="rounded-lg shadow-md mt-8"
              />
              <img 
                src="https://images.pexels.com/photos/6782351/pexels-photo-6782351.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
                alt="Bathroom tile work"
                className="rounded-lg shadow-md -mt-8"
              />
              <img 
                src="https://images.pexels.com/photos/1454806/pexels-photo-1454806.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
                alt="Bathroom renovation in progress"
                className="rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-700 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Create Your Dream Bathroom?</h2>
          <p className="text-xl mb-8">
            Let's discuss your bathroom renovation project and design your perfect space
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