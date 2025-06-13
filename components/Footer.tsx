import Link from 'next/link';
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-xl font-bold mb-4">Revolution Property Maintenance</h3>
            <p className="text-gray-300 mb-4">
              Transform your property with our professional maintenance and renovation services. 
              From kitchens to complete home makeovers, we bring your vision to life across South Wales.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>01554 123456</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>info@revolutionpropertymaintenance.co.uk</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>ERW Road, Llanelli SA15 2TE, South Wales</span>
              </div>
            </div>
            <div className="mt-4">
              <p className="text-sm text-gray-400">
                Serving: Llanelli, Swansea, Cardiff, Carmarthen, Ammanford, Neath & surrounding areas
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/services" className="text-gray-300 hover:text-white">All Services</Link></li>
              <li><Link href="/about" className="text-gray-300 hover:text-white">About Us</Link></li>
              <li><Link href="/portfolio" className="text-gray-300 hover:text-white">Portfolio</Link></li>
              <li><Link href="/contact" className="text-gray-300 hover:text-white">Contact</Link></li>
              <li><Link href="/booking" className="text-gray-300 hover:text-white">Book Consultation</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><Link href="/services/kitchen-remodeling" className="text-gray-300 hover:text-white">Kitchen Remodeling</Link></li>
              <li><Link href="/services/bathroom-renovation" className="text-gray-300 hover:text-white">Bathroom Renovation</Link></li>
              <li><Link href="/services/basement-finishing" className="text-gray-300 hover:text-white">Basement Finishing</Link></li>
              <li><Link href="/services/home-additions" className="text-gray-300 hover:text-white">Home Additions</Link></li>
              <li><Link href="/services/full-home-renovation" className="text-gray-300 hover:text-white">Full Home Renovation</Link></li>
              <li><Link href="/services/painting-decorating" className="text-gray-300 hover:text-white">Painting & Decorating</Link></li>
              <li><Link href="/services/flooring" className="text-gray-300 hover:text-white">Flooring</Link></li>
              <li><Link href="/services/plastering" className="text-gray-300 hover:text-white">Plastering</Link></li>
              <li><Link href="/services/roofing" className="text-gray-300 hover:text-white">Roofing</Link></li>
            </ul>
          </div>
        </div>

        {/* Social Media & Copyright */}
        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex space-x-4 mb-4 md:mb-0">
            <Facebook className="h-6 w-6 text-gray-400 hover:text-white cursor-pointer" />
            <Instagram className="h-6 w-6 text-gray-400 hover:text-white cursor-pointer" />
            <Twitter className="h-6 w-6 text-gray-400 hover:text-white cursor-pointer" />
          </div>
          <p className="text-gray-400 text-sm">
            © 2024 Revolution Property Maintenance. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;