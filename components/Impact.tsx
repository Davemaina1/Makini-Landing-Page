import React, { useRef, useState } from 'react';
import { Reveal } from './Reveal';
import { Globe, Users, Building2, ArrowRight } from 'lucide-react';

const countryData = [
  {
    name: "Kenya",
    gradient: "linear-gradient(135deg, #000000 20%, #BB0000 50%, #006600 80%)"
  },
  {
    name: "Nigeria",
    gradient: "linear-gradient(135deg, #008751 30%, #FFFFFF 50%, #008751 70%)"
  },
  {
    name: "South Africa",
    gradient: "linear-gradient(135deg, #E03C31 0%, #000000 30%, #FFB81C 50%, #007749 70%, #001489 100%)"
  },
  {
    name: "Rwanda",
    gradient: "linear-gradient(135deg, #00A1DE 33%, #FAD201 66%, #20603D 100%)"
  },
  {
    name: "UAE",
    gradient: "linear-gradient(135deg, #FF0000 20%, #00732F 40%, #FFFFFF 60%, #000000 80%)"
  }
];

export const Impact: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 1.5; 
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <section id="impact" className="py-40 bg-makini-ice text-makini-navy border-t border-makini-navy/5 overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col gap-28 items-center">
          
          {/* Top Section: Statistics */}
          <div className="flex flex-col items-center text-center gap-16 w-full">
            <Reveal width="100%">
              <div className="max-w-2xl mx-auto">
                <span className="text-makini-royal uppercase tracking-[0.2em] text-xs font-bold mb-6 block">Global Reach</span>
                <h2 className="font-serif text-4xl md:text-6xl mb-6 leading-tight text-makini-navy">
                  Trusted by legal pioneers across continents.
                </h2>
              </div>
            </Reveal>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-20 mt-4">
              <Reveal delay={0.2}>
                <div className="flex flex-col items-center gap-6 group">
                  <div className="p-5 bg-white rounded-full shadow-lg group-hover:-translate-y-2 transition-transform duration-500 border border-makini-soft/20">
                    <Building2 size={36} className="text-makini-royal" strokeWidth={1.5} />
                  </div>
                  <div>
                    <div className="text-6xl font-serif font-medium mb-3 text-makini-navy">20+</div>
                    <div className="text-sm text-makini-navy/60 uppercase tracking-widest font-semibold">Law Firms</div>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.4}>
                <div className="flex flex-col items-center gap-6 group">
                  <div className="p-5 bg-white rounded-full shadow-lg group-hover:-translate-y-2 transition-transform duration-500 border border-makini-soft/20">
                    <Users size={36} className="text-makini-royal" strokeWidth={1.5} />
                  </div>
                  <div>
                    <div className="text-6xl font-serif font-medium mb-3 text-makini-navy">100+</div>
                    <div className="text-sm text-makini-navy/60 uppercase tracking-widest font-semibold">In-house Counsel</div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>

          {/* Bottom Section: Scrollable 3D Spheres */}
          <div className="w-full border-t border-makini-navy/10 pt-20">
             <Reveal delay={0.6} width="100%">
                <div className="flex flex-col gap-12 items-center">
                   
                   <div className="flex flex-col items-center justify-center gap-3 text-center">
                      <div className="flex items-center gap-3">
                        <Globe className="text-makini-royal" size={24} strokeWidth={1.5} />
                        <span className="text-sm uppercase tracking-widest text-makini-navy font-bold">Global Presence</span>
                      </div>
                      <span className="text-xs text-makini-navy/40 flex items-center gap-1 font-medium">
                        Drag to Explore <ArrowRight size={12}/>
                      </span>
                   </div>
                   
                   {/* Scroll Container */}
                   <div 
                      ref={scrollRef}
                      className="flex overflow-x-auto py-12 px-4 gap-16 cursor-grab active:cursor-grabbing select-none no-scrollbar w-full justify-start md:justify-center"
                      style={{ 
                        scrollbarWidth: 'none', 
                        msOverflowStyle: 'none',
                        touchAction: 'pan-x'
                      }}
                      onMouseDown={handleMouseDown}
                      onMouseLeave={handleMouseLeave}
                      onMouseUp={handleMouseUp}
                      onMouseMove={handleMouseMove}
                   >
                      {countryData.map((country) => (
                        <div key={country.name} className="group flex flex-col items-center gap-8 flex-shrink-0">
                           {/* Sphere Container */}
                           <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full transition-all duration-700 ease-out group-hover:scale-105 group-hover:-translate-y-2 hover:z-20 shadow-xl">
                              
                              {/* 1. Flag Gradient (Hover) */}
                              <div 
                                className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 shadow-2xl"
                                style={{ background: country.gradient }}
                              ></div>
                              
                              {/* 2. Default State - Navy Sphere on Light BG */}
                              <div className="absolute inset-0 rounded-full bg-makini-navy border-4 border-white group-hover:opacity-0 transition-all duration-500 z-10 flex items-center justify-center">
                                 <span className="font-serif text-3xl text-white/50 font-bold group-hover:opacity-0 transition-opacity duration-300 select-none">
                                   {country.name.substring(0, 2).toUpperCase()}
                                 </span>
                              </div>
                           </div>

                           {/* Country Name Label */}
                           <div className="flex flex-col items-center opacity-60 group-hover:opacity-100 transition-all duration-500">
                             <span className="font-serif text-xl text-makini-navy font-bold tracking-wide">
                               {country.name}
                             </span>
                           </div>
                        </div>
                      ))}
                   </div>
                </div>
             </Reveal>
          </div>

        </div>
      </div>
    </section>
  );
};