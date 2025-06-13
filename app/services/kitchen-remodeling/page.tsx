'use client';

import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, CheckCircle, Star } from 'lucide-react';

export default function KitchenRemodeling() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const beforeAfterImages = [
    {
      before: 'https://images.pexels.com/photos/1599791/pexels-photo-1599791.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop',
      after: 'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop',
      title: 'Modern Farmhouse Kitchen'
    },
    {
      before: 'https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop',
      after: 'https://images.pexels.com/photos/2089698/pexels-photo-2089698.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop',
      title: 'Contemporary Kitchen Design'
    },
    {
      before: 'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop',
      after: 'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop',
      title: 'Luxury Kitchen Transformation'
    }
  ];

  const features = [
    'Custom Cabinet Design & Installation',
    'Countertop Selection & Installation',
    'Kitchen Island Design',
    'Appliance Integration',
    'Lighting Design & Installation',
    'Backsplash Installation',
    'Flooring Options',
    'Storage Solutions',
    'Plumbing & Electrical Work',
    'Project Management'
  ];

  const process = [
    {
      step: 1,
      title: 'Initial Consultation',
      description: 'We discuss your vision, needs, and budget for your dream kitchen.'
    },
    {
      step: 2,
      title: 'Design & Planning',
      description: 'Our designers create detailed plans and 3D renderings of your new kitchen.'
    },
    {
      step: 3,
      title: 'Material Selection',
      description: 'Choose from our wide selection of cabinets, countertops, and finishes.'
    },
    {
      step: 4,
      title: 'Construction',
      description: 'Our skilled craftsmen bring your kitchen to life with attention to detail.'
    },
    {
      step: 5,
      title: 'Final Walkthrough',
      description: 'We ensure everything meets our high standards and your expectations.'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      text: 'Our kitchen renovation exceeded all expectations. The team was professional and the quality is outstanding.',
      rating: 5,
      project: 'Complete Kitchen Remodel'
    },
    {
      name: 'Mike Chen',
      text: 'From design to completion, the process was seamless. We love our new kitchen!',
      rating: 5,
      project: 'Modern Kitchen Design'
    }
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
          <h1 className="text-5xl font-bold mb-4">Kitchen Remodeling</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Transform your kitchen into the heart of your home with custom designs that combine 
            functionality, beauty, and your personal style.
          </p>
        </div>
      </section>

      {/* Before/After Slider */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">See the Transformation</h2>
            <p className="text-xl text-gray-600">
              Witness the incredible transformations we've achieved for our clients
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
                Complete Kitchen Renovation Services
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                From initial design to final installation, we handle every aspect of your kitchen 
                renovation with expert craftsmanship and attention to detail.
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
                src="https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
                alt="Modern kitchen with white cabinets"
                className="rounded-lg shadow-md"
              />
              <img 
                src="https://images.pexels.com/photos/2089698/pexels-photo-2089698.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
                alt="Contemporary kitchen island"
                className="rounded-lg shadow-md mt-8"
              />
              <img 
                src="https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
                alt="Kitchen with granite countertops"
                className="rounded-lg shadow-md -mt-8"
              />
              <img 
                src="https://images.pexels.com/photos/1599791/pexels-photo-1599791.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
                alt="Kitchen cabinet installation"
                className="rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Kitchen Renovation Process</h2>
            <p className="text-xl text-gray-600">
              A streamlined approach that ensures your project is completed on time and within budget
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {process.map((step, index) => (
              <div key={index} className="text-center">
                <div className="bg-blue-700 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-gray-600 mb-4">
                    "{testimonial.text}"
                  </blockquote>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-blue-700 text-sm">{testimonial.project}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-700 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Transform Your Kitchen?</h2>
          <p className="text-xl mb-8">
            Let's discuss your kitchen renovation project and bring your vision to life
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