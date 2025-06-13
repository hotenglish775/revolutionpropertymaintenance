'use client';

import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Star, ExternalLink } from 'lucide-react';

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'kitchen', label: 'Kitchen Remodeling' },
    { id: 'bathroom', label: 'Bathroom Renovation' },
    { id: 'basement', label: 'Basement Finishing' },
    { id: 'addition', label: 'Home Additions' },
    { id: 'full', label: 'Full Renovation' },
  ];

  const projects = [
    {
      id: 1,
      title: 'Modern Farmhouse Kitchen',
      category: 'kitchen',
      location: 'Llanelli',
      duration: '6 weeks',
      budget: '£45,000 - £55,000',
      description: 'Complete kitchen transformation featuring custom white shaker cabinets, quartz countertops, subway tile backsplash, and stainless steel appliances. The open layout maximises space and creates a perfect entertaining area.',
      challenge: 'The original kitchen was cramped with outdated appliances and poor lighting.',
      solution: 'We removed a non-load bearing wall to open up the space and installed a large island for additional storage and seating.',
      images: [
        'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
        'https://images.pexels.com/photos/2089698/pexels-photo-2089698.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
        'https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      ],
      clientFeedback: {
        name: 'Sarah & Tom Williams',
        rating: 5,
        text: 'Our new kitchen exceeded all expectations. The team was professional, clean, and finished on schedule.',
      },
    },
    {
      id: 2,
      title: 'Luxury Master Bathroom',
      category: 'bathroom',
      location: 'Swansea',
      duration: '4 weeks',
      budget: '£25,000 - £35,000',
      description: 'Spa-like master bathroom featuring a walk-in shower with glass enclosure, freestanding soaking tub, double vanity with quartz countertops, and heated tile floors.',
      challenge: 'Limited space and outdated plumbing required creative solutions.',
      solution: 'We reconfigured the layout to maximise space and updated all plumbing to accommodate the new fixtures.',
      images: [
        'https://images.pexels.com/photos/2724748/pexels-photo-2724748.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
        'https://images.pexels.com/photos/6585760/pexels-photo-6585760.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
        'https://images.pexels.com/photos/6782351/pexels-photo-6782351.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      ],
      clientFeedback: {
        name: 'Michael Davies',
        rating: 5,
        text: 'The attention to detail in our bathroom renovation was incredible. It feels like a luxury spa.',
      },
    },
    {
      id: 3,
      title: 'Entertainment Basement',
      category: 'basement',
      location: 'Cardiff',
      duration: '8 weeks',
      budget: '£35,000 - £45,000',
      description: 'Transformed unfinished basement into an entertainment space with home theatre, bar area, game room, and guest bathroom. Features luxury vinyl plank flooring and custom built-ins.',
      challenge: 'Moisture issues and low ceiling height presented unique challenges.',
      solution: 'We installed a comprehensive moisture control system and used recessed lighting to maximise headroom.',
      images: [
        'https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
        'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
        'https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      ],
      clientFeedback: {
        name: 'David & Lisa Evans',
        rating: 5,
        text: 'Our basement went from unusable storage to our favourite room in the house. Amazing transformation!',
      },
    },
    {
      id: 4,
      title: 'Two-Storey Home Addition',
      category: 'addition',
      location: 'Carmarthen',
      duration: '12 weeks',
      budget: '£85,000 - £95,000',
      description: 'Added 800 sq ft to existing ranch home with a two-storey addition featuring master suite upstairs and expanded kitchen/dining area downstairs. Seamless integration with existing architecture.',
      challenge: 'Matching existing rooflines and siding while adding significant square footage.',
      solution: 'Our architects designed an addition that appears to be part of the original home structure.',
      images: [
        'https://images.pexels.com/photos/271816/pexels-photo-271816.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
        'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
        'https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      ],
      clientFeedback: {
        name: 'Robert Jones',
        rating: 5,
        text: 'The addition looks like it was always part of our home. The craftsmanship is outstanding.',
      },
    },
    {
      id: 5,
      title: 'Victorian Home Restoration',
      category: 'full',
      location: 'Neath',
      duration: '16 weeks',
      budget: '£125,000 - £150,000',
      description: 'Complete restoration of 1890s Victorian home preserving original character while adding modern amenities. Updated electrical, plumbing, and HVAC while maintaining historical integrity.',
      challenge: 'Preserving historical elements while meeting modern building codes.',
      solution: 'We worked closely with historical preservation guidelines to maintain authenticity while ensuring safety and functionality.',
      images: [
        'https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
        'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
        'https://images.pexels.com/photos/1370704/pexels-photo-1370704.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      ],
      clientFeedback: {
        name: 'Jennifer Thomas',
        rating: 5,
        text: 'They perfectly balanced preserving our home\'s history with modern living needs. Exceptional work.',
      },
    },
    {
      id: 6,
      title: 'Contemporary Kitchen Remodel',
      category: 'kitchen',
      location: 'Ammanford',
      duration: '5 weeks',
      budget: '£38,000 - £48,000',
      description: 'Sleek contemporary kitchen with flat-panel cabinets, waterfall quartz island, and integrated appliances. Smart home features and under-cabinet lighting create a modern cooking environment.',
      challenge: 'Achieving a seamless, minimalist look while maximising storage.',
      solution: 'Custom cabinet design with hidden storage solutions and clean lines throughout.',
      images: [
        'https://images.pexels.com/photos/2089698/pexels-photo-2089698.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
        'https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
        'https://images.pexels.com/photos/1599791/pexels-photo-1599791.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      ],
      clientFeedback: {
        name: 'Mark Phillips',
        rating: 5,
        text: 'The modern design is exactly what we envisioned. The functionality is perfect for our lifestyle.',
      },
    },
  ];

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      {/* Hero Section */}
      <section className="bg-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-4">Our Portfolio</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Explore our completed projects and see how we've transformed properties across South Wales 
            with quality craftsmanship and innovative design solutions.
          </p>
        </div>
      </section>

      {/* Filter Categories */}
      <section className="py-8 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                onClick={() => setSelectedCategory(category.id)}
                className={selectedCategory === category.id ? "bg-blue-700 hover:bg-blue-800" : ""}
              >
                {category.label}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {filteredProjects.map((project) => (
              <Card key={project.id} className="overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
                  <img 
                    src={project.images[0]}
                    alt={project.title}
                    className="w-full h-48 md:h-32 object-cover rounded-lg"
                  />
                  <img 
                    src={project.images[1]}
                    alt={project.title}
                    className="w-full h-48 md:h-32 object-cover rounded-lg"
                  />
                  <img 
                    src={project.images[2]}
                    alt={project.title}
                    className="w-full h-48 md:h-32 object-cover rounded-lg"
                  />
                </div>
                
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{project.title}</h3>
                      <div className="flex items-center space-x-4 text-sm text-gray-600">
                        <span>{project.location}</span>
                        <span>•</span>
                        <span>{project.duration}</span>
                        <span>•</span>
                        <span>{project.budget}</span>
                      </div>
                    </div>
                    <Badge variant="outline" className="border-blue-700 text-blue-700">
                      {categories.find(cat => cat.id === project.category)?.label}
                    </Badge>
                  </div>

                  <p className="text-gray-600 mb-4">{project.description}</p>

                  <div className="space-y-4 mb-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Challenge:</h4>
                      <p className="text-gray-600 text-sm">{project.challenge}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Solution:</h4>
                      <p className="text-gray-600 text-sm">{project.solution}</p>
                    </div>
                  </div>

                  <div className="bg-blue-50 p-4 rounded-lg">
                    <div className="flex items-center mb-2">
                      <div className="flex">
                        {[...Array(project.clientFeedback.rating)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                        ))}
                      </div>
                      <span className="ml-2 font-semibold text-gray-900">{project.clientFeedback.name}</span>
                    </div>
                    <blockquote className="text-gray-600 text-sm italic">
                      "{project.clientFeedback.text}"
                    </blockquote>
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
          <h2 className="text-4xl font-bold mb-4">Ready to Start Your Project?</h2>
          <p className="text-xl mb-8">
            Let's discuss your renovation ideas and create something amazing together across South Wales
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