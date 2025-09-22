import { Facebook, Mail, Menu, Phone, Rss, Twitter, X, Youtube } from 'lucide-react';
import { useEffect, useState } from 'react';
import Logo from '../components/homeopethiclogo.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'HOME', href: '#home' },
    { label: 'ABOUT US', href: '#about', hasDropdown: true },
    { label: 'ABOUT COURSE', href: '#programs' },
    { label: 'AWARD & ACHIEVEMENTS', href: '#achievements' },
    { label: 'ADMISSION', href: '#admissions', hasDropdown: true },
    { label: 'ACADEMIC ACTIVITIES', href: '#academic', hasDropdown: true },
    { label: 'CLINICAL MATERIAL', href: '#clinical' },
    { label: 'CLINICAL INFORMATION', href: '#clinical-info', hasDropdown: true },
    { label: 'EXAM', href: '#exam', hasDropdown: true },
    { label: 'STAFF LIST', href: '#staff', hasDropdown: true },
    { label: 'COLLEGE COUNCIL', href: '#council' },
    { label: 'PHOTO GALLERY', href: '#gallery' },
    { label: 'FACILITIES', href: '#facilities', hasDropdown: true },
    { label: 'ANTI-RAGGING', href: '#anti-ragging', hasDropdown: true },
    { label: 'CONTACT', href: '#contact' }
  ];

  return (
    <>
      {/* Top Header Bar */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-2 text-sm">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2 text-gray-600">
                <Phone className="h-4 w-4" />
                <span>+917970707001</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-600">
                <Mail className="h-4 w-4" />
                <span>info@monarkuni.ac.in</span>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <a href="#" className="text-blue-600 hover:text-blue-800">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="#" className="text-blue-400 hover:text-blue-600">
                <Twitter className="h-4 w-4" />
              </a>
              <a href="#" className="text-red-600 hover:text-red-800">
                <Youtube className="h-4 w-4" />
              </a>
              <a href="#" className="text-orange-600 hover:text-orange-800">
                <Rss className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className={`sticky top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg' : 'bg-white'
        }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-4">
              {/* Logo */}
              <div className="flex items-center space-x-3">
                <img src={Logo} alt="Logo"  />
               
              </div>

              {/* College Name */}
            
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Navigation */}
          <nav className="hidden lg:block border-t border-gray-200 py-2">
            <div className="flex flex-wrap items-center justify-center space-x-1">
              {navItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded transition-colors duration-200 whitespace-nowrap"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </nav>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="lg:hidden py-4 border-t border-gray-200">
              <nav className="flex flex-col space-y-2">
                {navItems.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded transition-colors duration-200"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
            </div>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;