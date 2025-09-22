import React from 'react';
import { Phone, Mail, MapPin, Facebook, Twitter, Youtube, Rss } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { label: 'About Us', href: '#about' },
    { label: 'Academic Programs', href: '#programs' },
    { label: 'Admissions', href: '#admissions' },
    { label: 'Facilities', href: '#facilities' },
    { label: 'Clinical Information', href: '#clinical-info' },
    { label: 'Photo Gallery', href: '#gallery' }
  ];

  const importantLinks = [
    { label: 'Central Council of Homoeopathy', href: '#' },
    { label: 'Monark University', href: '#' },
    { label: 'NAAC Accreditation', href: '#' },
    { label: 'Anti-Ragging Committee', href: '#anti-ragging' },
    { label: 'Student Grievance', href: '#' },
    { label: 'RTI Information', href: '#' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center">
                  <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                    <div className="w-6 h-6 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-xs">M</span>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold">Monark College</h3>
                <p className="text-gray-400 text-sm">Homoeopathic Excellence</p>
              </div>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed text-sm">
              Monark Homoeopathic Medical College & Hospital Vahelal - A constituent institute 
              of Monark University, committed to excellence in homoeopathic medical education.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-gray-800 p-2 rounded-lg hover:bg-blue-600 transition-colors duration-200">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-lg hover:bg-blue-400 transition-colors duration-200">
                <Twitter className="h-4 w-4" />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-lg hover:bg-red-600 transition-colors duration-200">
                <Youtube className="h-4 w-4" />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-lg hover:bg-orange-600 transition-colors duration-200">
                <Rss className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Important Links</h4>
            <ul className="space-y-3">
              {importantLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Information</h4>
            <div className="space-y-4 text-gray-400 text-sm">
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium text-white mb-1">Address</p>
                  <p>Monark Homoeopathic Medical College & Hospital Vahelal, Gujarat, India</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4" />
                <div>
                  <p className="font-medium text-white mb-1">Phone</p>
                  <p>+917970707001</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4" />
                <div>
                  <p className="font-medium text-white mb-1">Email</p>
                  <p>info@monarkuni.ac.in</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2024 Monark Homoeopathic Medical College & Hospital Vahelal. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
              Terms & Conditions
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
              Disclaimer
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;