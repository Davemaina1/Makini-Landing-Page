import React, { useState, useEffect } from 'react';
import { Menu, X, Mail } from 'lucide-react';
import { MakiniLogo } from './MakiniLogo';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Light mode navigation: Transparent at top, White glass on scroll
  const navClasses = `fixed w-full z-50 transition-all duration-700 ${
    isScrolled || isMobileMenuOpen
      ? 'bg-white/80 backdrop-blur-md border-b border-makini-navy/5 py-3 shadow-sm' 
      : 'bg-transparent py-8'
  }`;

  return (
    <nav className={navClasses}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <a 
          href="#hero"
          className="cursor-pointer z-50 group relative no-underline flex items-center gap-3"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <MakiniLogo className={`w-10 h-10 md:w-12 md:h-12 transition-all duration-500 ${isScrolled ? 'drop-shadow-none' : 'drop-shadow-sm'}`} />
          <div className="flex flex-col justify-center">
            <h1 className={`text-2xl font-serif font-bold tracking-[0.15em] text-makini-navy transition-all duration-500 leading-none`}>
              MAKINI
            </h1>
            <span className="text-[0.65rem] uppercase tracking-[0.4em] text-makini-royal font-bold ml-1">
              AI
            </span>
          </div>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-12">
          {['Expertise', 'Integration', 'Impact', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className={`text-xs uppercase tracking-[0.15em] font-medium text-makini-navy/70 hover:text-makini-royal transition-colors duration-300`}
            >
              {item}
            </a>
          ))}
          
          <a 
            href="mailto:info@makini.tech"
            className="bg-makini-royal text-white border border-transparent px-8 py-3 text-xs uppercase tracking-[0.15em] hover:bg-makini-navy hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 ease-out rounded-sm"
          >
            Inquire
          </a>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden z-50 flex items-center gap-4">
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
            type="button"
            className={`text-makini-navy hover:text-makini-royal transition-colors p-2`}
          >
            {isMobileMenuOpen ? <X size={24} strokeWidth={1.5} /> : <Menu size={24} strokeWidth={1.5} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay - Light Mode */}
      <div className={`fixed inset-0 bg-makini-ice z-40 flex flex-col items-center justify-center space-y-10 transition-all duration-500 ${isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}`}>
        {['Expertise', 'Integration', 'Impact', 'Contact'].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-3xl font-serif text-makini-navy hover:text-makini-royal transition-colors tracking-wide"
          >
            {item}
          </a>
        ))}
        <a 
            href="mailto:info@makini.tech"
            onClick={() => setIsMobileMenuOpen(false)}
            className="flex items-center gap-3 text-makini-royal text-lg mt-8 font-medium tracking-wide"
        >
          <Mail size={18} /> info@makini.tech
        </a>
      </div>
    </nav>
  );
};