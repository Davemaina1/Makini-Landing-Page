import React from 'react';
import { Reveal } from './Reveal';

export const Partners: React.FC = () => {
  return (
    <section className="py-20 bg-white border-y border-makini-navy/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <Reveal width="100%">
          <div className="flex flex-col items-center gap-12">
            
            <div className="flex flex-col items-center gap-4 text-center">
              <div className="h-px w-12 bg-makini-royal/30 mb-2"></div>
              <span className="text-makini-royal uppercase tracking-[0.4em] text-xs font-bold">
                Global Support
              </span>
              <h3 className="font-serif text-2xl md:text-3xl text-makini-navy">
                Backed and supported by the world's leading technology pioneers.
              </h3>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-24 w-full">
              
              {/* Microsoft for Startups - Increased Size */}
              <div className="group flex items-center gap-6 cursor-default transition-all duration-500 hover:scale-105">
                <div className="grid grid-cols-2 gap-1.5">
                  <div className="w-6 h-6 bg-[#F25022] shadow-sm"></div>
                  <div className="w-6 h-6 bg-[#7FBA00] shadow-sm"></div>
                  <div className="w-6 h-6 bg-[#00A4EF] shadow-sm"></div>
                  <div className="w-6 h-6 bg-[#FFB900] shadow-sm"></div>
                </div>
                
                <div className="flex flex-col">
                  <span className="font-sans text-3xl text-makini-navy tracking-tight font-bold leading-none">
                    Microsoft
                  </span>
                  <span className="font-sans text-lg text-makini-navy/50 tracking-wide font-medium leading-none mt-1">
                    for Startups
                  </span>
                </div>
              </div>

              {/* Vertical Divider on Desktop */}
              <div className="hidden md:block h-16 w-px bg-makini-navy/10"></div>
              <div className="md:hidden w-16 h-px bg-makini-navy/10"></div>

              {/* Google Gemini Program - Increased Size */}
              <div className="group flex items-center gap-6 cursor-default transition-all duration-500 hover:scale-105">
                <div className="relative w-12 h-12">
                   <svg viewBox="0 0 24 24" className="w-full h-full drop-shadow-sm">
                      <defs>
                          <linearGradient id="gemini-gradient-partners" x1="0%" y1="0%" x2="100%" y2="100%">
                              <stop offset="0%" stopColor="#4E86F7" />
                              <stop offset="100%" stopColor="#8F49E7" />
                          </linearGradient>
                      </defs>
                      <path d="M12 2C12 7.523 16.477 12 22 12C16.477 12 12 16.477 12 22C12 16.477 7.523 12 2 12C7.523 12 12 7.523 12 2Z" fill="url(#gemini-gradient-partners)" />
                  </svg>
                </div>

                <div className="flex flex-col">
                  <span className="font-sans text-3xl text-makini-navy tracking-tight font-bold leading-none">
                    Google
                  </span>
                  <span className="font-sans text-lg text-makini-navy/50 tracking-wide font-medium leading-none mt-1">
                    Gemini Program
                  </span>
                </div>
              </div>

            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};