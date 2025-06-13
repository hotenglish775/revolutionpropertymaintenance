import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Award, Shield, Clock, Users, Star, Heart } from 'lucide-react';

export default function About() {
  const teamMembers = [
    {
      name: 'John Mitchell',
      role: 'Founder & Lead Contractor',
      experience: '20+ years',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      bio: 'John founded Revolution Property Maintenance with a vision to transform properties while building lasting relationships with clients across South Wales.',
    },
    {
      name: 'Sarah Davis',
      role: 'Interior Designer',
      experience: '12+ years',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      bio: 'Sarah brings creativity and functionality together, designing spaces that reflect each client\'s unique style throughout the region.',
    },
    {
      name: 'Mike Rodriguez',
      role: 'Project Manager',
      experience: '15+ years',
      image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      bio: 'Mike ensures every project runs smoothly, on time, and within budget while maintaining our high quality standards.',
    },
    {
      name: 'Lisa Thompson',
      role: 'Kitchen Specialist',
      experience: '10+ years',
      image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      bio: 'Lisa specialises in kitchen design and renovation, creating functional and beautiful cooking spaces.',
    },
  ];

  const values = [
    {
      icon: Award,
      title: 'Quality Craftsmanship',
      description: 'We use only the finest materials and employ skilled craftsmen to ensure lasting results.',
    },
    {
      icon: Shield,
      title: 'Licensed & Insured',
      description: 'Fully licensed contractors with comprehensive insurance for your peace of mind.',
    },
    {
      icon: Clock,
      title: 'On-Time Delivery',
      description: 'We respect your time and complete projects according to agreed schedules.',
    },
    {
      icon: Heart,
      title: 'Customer First',
      description: 'Your satisfaction is our priority. We listen, understand, and deliver beyond expectations.',
    },
  ];

  const testimonials = [
    {
      name: 'Robert Anderson',
      location: 'Llanelli',
      project: 'Full Home Renovation',
      text: 'The team at Revolution Property Maintenance completely transformed our 1950s home. Their attention to detail and professionalism was outstanding.',
      rating: 5,
    },
    {
      name: 'Jennifer Walsh',
      location: 'Swansea',
      project: 'Kitchen & Bathroom Remodel',
      text: 'From design to completion, the process was seamless. They helped us make decisions and stayed within our budget.',
      rating: 5,
    },
    {
      name: 'Mark Stevens',
      location: 'Cardiff',
      project: 'Basement Finishing',
      text: 'Our basement went from storage space to our favourite room in the house. The quality of work is exceptional.',
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      {/* Hero Section */}
      <section className="bg-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-4">About Revolution Property Maintenance</h1>
          <p className="text-xl max-w-3xl mx-auto">
            For over 15 years, we've been transforming properties and exceeding expectations 
            with quality craftsmanship and personalised service across South Wales.
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-lg text-gray-600 mb-6">
                Revolution Property Maintenance was founded in 2009 with a simple mission: to help property owners 
                across South Wales transform their houses into the homes of their dreams. What started as a small family 
                business has grown into one of the region's most trusted renovation companies.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Our founder, John Mitchell, began his career as a carpenter and quickly developed a 
                passion for property renovation. He believed that every home has the potential to be 
                extraordinary, and with the right team and vision, any space can be transformed.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Today, we've completed over 1,000 projects and built lasting relationships with 
                hundreds of families throughout Llanelli, Swansea, Cardiff, Carmarthen, Ammanford, Neath 
                and surrounding areas. Our commitment to quality, integrity, and customer satisfaction remains at the heart of everything we do.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
                alt="Kitchen renovation"
                className="rounded-lg shadow-md"
              />
              <img 
                src="https://images.pexels.com/photos/2724748/pexels-photo-2724748.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
                alt="Bathroom renovation"
                className="rounded-lg shadow-md mt-8"
              />
              <img 
                src="https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
                alt="Living room"
                className="rounded-lg shadow-md -mt-8"
              />
              <img 
                src="https://images.pexels.com/photos/271816/pexels-photo-271816.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
                alt="Home exterior"
                className="rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Mission & Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're committed to delivering exceptional results while maintaining the highest 
              standards of professionalism and integrity across all our projects in South Wales.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card key={index} className="text-center">
                  <CardContent className="p-6">
                    <Icon className="h-12 w-12 text-blue-700 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                    <p className="text-gray-600">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our experienced professionals are passionate about bringing your renovation 
              dreams to life with skill, creativity, and attention to detail.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <img 
                    src={member.image}
                    alt={member.name}
                    className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-blue-700 font-medium mb-1">{member.role}</p>
                  <p className="text-sm text-gray-500 mb-3">{member.experience}</p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Client Testimonials</h2>
            <p className="text-xl text-gray-600">
              Don't just take our word for it - hear what our clients across South Wales have to say
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
                    <div className="text-gray-500 text-sm">{testimonial.location}</div>
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
          <h2 className="text-4xl font-bold mb-4">Ready to Work With Us?</h2>
          <p className="text-xl mb-8">
            Let's discuss your renovation project and see how we can bring your vision to life
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