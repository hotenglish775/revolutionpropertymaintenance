'use client';

import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, CheckCircle, Star } from 'lucide-react';

export default function Roofing() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const beforeAfterImages = [
    {
      before: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop',
      after: 'https://images.pexels.com/photos/271816/pexels-photo-271816.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop',
      title: 'Complete Roof Replacement'
    },
    {
      before: 'https://images.pexels.com/photos/1370704/pexels-photo-1370704.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop',
      after: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop',
      title: 'Roof Repair & Restoration'
    },
    {
      before: 'https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop',
      after: 'https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop',
      title: 'New Roof Installation'
    }
  ];

  const features = [
    'Roof Replacement',
    'Roof Repairs',
    'Shingle Installation',
    'Metal Roofing',
    'Gutter Installation',
    'Roof Inspections',
    'Emergency Repairs',
    'Skylight Installation',
    'Ventilation Systems',
    'Insurance Claims'
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
          <h1 className="text-5xl font-bold mb-4">Roofing Services</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Protect your home with professional roofing services. From repairs to complete 
            replacements, we ensure your roof stands strong against the elements.
          </p>
        </div>
      </section>

      {/* Before/After Slider */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Roofing Transformations</h2>
            <p className="text-xl text-gray-600">
              See how new roofing can enhance your home's protection and curb appeal
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
                Professional Roofing Services
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Whether you need emergency repairs or a complete roof replacement, 
                our experienced roofers deliver quality workmanship and reliable protection.
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
                src="https://images.pexels.com/photos/271816/pexels-photo-271816.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
                alt="New roof installation"
                className="rounded-lg shadow-md"
              />
              <img 
                src="https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
                alt="Roof repair work"
                className="rounded-lg shadow-md mt-8"
              />
              <img 
                src="https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
                alt="Roofing materials"
                className="rounded-lg shadow-md -mt-8"
              />
              <img 
                src="https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
                alt="Roof maintenance"
                className="rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-700 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Need Roofing Services?</h2>
          <p className="text-xl mb-8">
            Let's discuss your roofing project and protect your home with quality workmanship
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