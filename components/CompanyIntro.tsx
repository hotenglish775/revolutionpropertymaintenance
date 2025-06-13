import { Button } from '@/components/ui/button';
import { Award, Users, Clock, CheckCircle } from 'lucide-react';

const CompanyIntro = () => {
  const stats = [
    { icon: Award, label: 'Years Experience', value: '15+' },
    { icon: Users, label: 'Happy Clients', value: '500+' },
    { icon: Clock, label: 'Projects Completed', value: '1000+' },
    { icon: CheckCircle, label: 'Satisfaction Rate', value: '99%' },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Transform Your Property with Expert Craftsmanship
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              For over 15 years, Revolution Property Maintenance has been the trusted choice for property owners 
              across South Wales looking to transform their living spaces. Our team of skilled craftsmen and designers 
              work together to bring your vision to life, ensuring every detail meets our high 
              standards of quality and excellence.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              From small updates to complete property makeovers, we handle every aspect of your renovation 
              project with professionalism, attention to detail, and a commitment to your satisfaction. 
              Serving Llanelli, Swansea, Cardiff, Carmarthen, Ammanford, Neath and surrounding areas.
            </p>
            <Button size="lg" className="bg-blue-700 hover:bg-blue-800">
              Request a Free Quote
            </Button>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
                  <Icon className="h-8 w-8 text-blue-700 mx-auto mb-3" />
                  <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyIntro;