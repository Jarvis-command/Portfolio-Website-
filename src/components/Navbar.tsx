import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const sections = ['home', 'about', 'experience', 'insights', 'skills', 'contact'];

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <button
            onClick={() => scrollToSection('home')}
            className="flex items-center space-x-2 group"
          >
            <div className="px-4 h-12 bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg flex items-center justify-center gap-2 font-bold text-white text-lg transition-transform group-hover:scale-110 whitespace-nowrap">
              <img
                src="/Gowtham photo.jpg"
                alt="Gowtham Chilakapati"
                className="w-8 h-8 rounded-full object-cover border border-white/40"
                loading="eager"
              />
              <span>Gowtham Chilakapati</span>
            </div>
          </button>

          <div className="hidden md:flex items-center space-x-8">
            {sections.map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`text-sm font-medium transition-colors capitalize relative group ${
                  activeSection === section
                    ? 'text-primary-600'
                    : 'text-text-secondary hover:text-text-primary'
                }`}
              >
                {section.replace('-', ' ')}
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-primary-600 to-primary-700 transition-all ${
                  activeSection === section ? 'w-full' : 'w-0 group-hover:w-full'
                }`}></span>
              </button>
            ))}
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-text-secondary hover:text-text-primary"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-white/98 backdrop-blur-md border-t border-border">
          <div className="px-4 py-4 space-y-3">
            {sections.map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`block w-full text-left px-4 py-2 rounded-lg transition-colors capitalize ${
                  activeSection === section
                    ? 'bg-gradient-to-r from-primary-600 to-primary-700 text-white'
                    : 'text-text-secondary hover:bg-surface'
                }`}
              >
                {section.replace('-', ' ')}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
