import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChefHat, Bath, Home, Plus, Hammer, Palette } from 'lucide-react';

const ServicesOverview = () => {
  const services = [
    {
      icon: ChefHat,
      title: 'Kitchen Remodeling',
      description: 'Custom kitchen designs that combine functionality with style. From cabinets to countertops, we create the perfect cooking space.',
      image: 'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop',
    },
    {
      icon: Bath,
      title: 'Bathroom Renovation',
      description: 'Transform your bathroom into a luxurious retreat with modern fixtures, elegant tiles, and smart storage solutions.',
      image: 'https://images.pexels.com/photos/2724748/pexels-photo-2724748.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop',
    },
    {
      icon: Home,
      title: 'Basement Finishing',
      description: 'Turn your unfinished basement into valuable living space. Entertainment rooms, home offices, or guest suites.',
      image: 'https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop',
    },
    {
      icon: Plus,
      title: 'Home Additions',
      description: 'Expand your home with seamless additions that blend perfectly with your existing architecture and style.',
      image: 'https://images.pexels.com/photos/271816/pexels-photo-271816.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop',
    },
    {
      icon: Hammer,
      title: 'Full Home Renovation',
      description: 'Complete home transformations from concept to completion. We handle every aspect of your renovation project.',
      image: 'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop',
    },
    {
      icon: Palette,
      title: 'Painting & Decorating',
      description: 'Professional painting and decorating services to create beautiful, functional spaces that reflect your personal style.',
      image: 'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop',
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We offer comprehensive property maintenance and renovation services to transform every corner of your property. 
            Each project is handled with expert craftsmanship and attention to detail across South Wales.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={index} className="group hover:shadow-xl transition-shadow duration-300">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4 bg-white p-2 rounded-full shadow-md">
                    <Icon className="h-6 w-6 text-blue-700" />
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <Button variant="outline" className="w-full group-hover:bg-blue-700 group-hover:text-white transition-colors duration-300">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Link href="/services">
            <Button size="lg" className="bg-orange-500 hover:bg-orange-600">
              View All Services
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;