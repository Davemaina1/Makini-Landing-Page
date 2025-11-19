import React, { useState, useEffect } from 'react';
import { Menu, X, Mail } from 'lucide-react';

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

  const navClasses = `fixed w-full z-50 transition-all duration-700 ${
    isScrolled || isMobileMenuOpen
      ? 'bg-makini-navy/90 backdrop-blur-lg border-b border-makini-ice/5 py-4 shadow-lg' 
      : 'bg-transparent py-8'
  }`;

  const textColor = 'text-white';
  
  return (
    <nav className={navClasses}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <a 
          href="#hero"
          className="cursor-pointer z-50 group relative no-underline"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <h1 className={`text-2xl font-serif font-medium tracking-[0.2em] text-white drop-shadow-[0_0_12px_rgba(255,255,255,0.4)] group-hover:text-makini-soft transition-all duration-500`}>
            MAKINI
          </h1>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-12">
          {['Expertise', 'Integration', 'Impact', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className={`text-xs uppercase tracking-[0.2em] text-makini-ice/70 hover:text-white transition-colors duration-300`}
            >
              {item}
            </a>
          ))}
          
          <a 
            href="mailto:info@makini.tech"
            className="border border-white/30 px-8 py-3 text-xs uppercase tracking-[0.2em] text-makini-ice hover:bg-makini-ice hover:text-makini-navy hover:border-makini-ice hover:shadow-[0_0_30px_rgba(231,240,250,0.5)] hover:scale-105 active:scale-95 transition-all duration-500 ease-out"
          >
            Inquire
          </a>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden z-50 flex items-center gap-4">
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
            type="button"
            className={`${textColor} hover:text-makini-soft transition-colors p-2`}
          >
            {isMobileMenuOpen ? <X size={24} strokeWidth={1} /> : <Menu size={24} strokeWidth={1} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-makini-navy z-40 flex flex-col items-center justify-center space-y-12 transition-all duration-700 ${isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}`}>
        {['Expertise', 'Integration', 'Impact', 'Contact'].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-4xl font-serif text-makini-ice/90 hover:text-makini-soft transition-colors font-light tracking-wide"
          >
            {item}
          </a>
        ))}
        <a 
            href="mailto:info@makini.tech"
            onClick={() => setIsMobileMenuOpen(false)}
            className="flex items-center gap-3 text-makini-soft text-lg mt-12 font-light tracking-wider"
        >
          <Mail size={18} /> info@makini.tech
        </a>
      </div>
    </nav>
  );
};