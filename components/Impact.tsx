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
    <section id="impact" className="py-32 bg-makini-navy text-makini-ice relative overflow-hidden">
      {/* Decorative blurred background elements */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-makini-soft/5 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-makini-royal/5 rounded-full blur-[120px] translate-x-1/3 translate-y-1/3 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col gap-24 items-center">
          
          {/* Top Section: Statistics */}
          <div className="flex flex-col items-center text-center gap-12 w-full">
            <Reveal width="100%">
              <div className="max-w-2xl mx-auto">
                <span className="text-makini-soft uppercase tracking-[0.2em] text-xs font-bold mb-6 block">Global Reach</span>
                <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-6 leading-tight text-white">
                  Trusted by legal pioneers across continents.
                </h2>
              </div>
            </Reveal>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-16 mt-4">
              <Reveal delay={0.2}>
                <div className="flex flex-col items-center gap-6 group">
                  <div className="p-4 bg-white/5 rounded-full group-hover:bg-makini-soft/20 transition-colors duration-500 border border-white/5">
                    <Building2 size={32} className="text-makini-soft" strokeWidth={1} />
                  </div>
                  <div>
                    <div className="text-5xl font-serif font-medium mb-2 text-white">20+</div>
                    <div className="text-lg text-makini-ice/70 uppercase tracking-widest font-light">Law Firms</div>
                    <p className="text-sm text-makini-ice/40 mt-2 font-light max-w-xs mx-auto">
                      Optimizing practice management workflows.
                    </p>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.4}>
                <div className="flex flex-col items-center gap-6 group">
                  <div className="p-4 bg-white/5 rounded-full group-hover:bg-makini-soft/20 transition-colors duration-500 border border-white/5">
                    <Users size={32} className="text-makini-soft" strokeWidth={1} />
                  </div>
                  <div>
                    <div className="text-5xl font-serif font-medium mb-2 text-white">100+</div>
                    <div className="text-lg text-makini-ice/70 uppercase tracking-widest font-light">In-house Counsel</div>
                    <p className="text-sm text-makini-ice/40 mt-2 font-light max-w-xs mx-auto">
                      Automating repetitive tasks globally.
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>

          {/* Bottom Section: Scrollable 3D Spheres (Presence) */}
          <div className="w-full border-t border-white/10 pt-16">
             <Reveal delay={0.6} width="100%">
                <div className="flex flex-col gap-10 items-center">
                   {/* Centered Header */}
                   <div className="flex flex-col items-center justify-center gap-3 text-center">
                      <div className="flex items-center gap-3">
                        <Globe className="text-makini-soft" size={24} strokeWidth={1} />
                        <span className="text-sm uppercase tracking-widest text-makini-ice/60 font-bold">Global Presence</span>
                      </div>
                      <span className="text-xs text-makini-ice/30 flex items-center gap-1 font-light">
                        Drag to Explore <ArrowRight size={12}/>
                      </span>
                   </div>
                   
                   {/* Scroll Container */}
                   <div 
                      ref={scrollRef}
                      className="flex overflow-x-auto py-12 px-4 gap-12 cursor-grab active:cursor-grabbing select-none no-scrollbar w-full justify-start md:justify-center"
                      style={{ 
                        scrollbarWidth: 'none', 
                        msOverflowStyle: 'none',
                        maskImage: 'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)'
                      }}
                      onMouseDown={handleMouseDown}
                      onMouseLeave={handleMouseLeave}
                      onMouseUp={handleMouseUp}
                      onMouseMove={handleMouseMove}
                   >
                      {countryData.map((country, idx) => (
                        <div key={country.name} className="group flex flex-col items-center gap-6 flex-shrink-0 perspective-1000">
                           {/* Sphere Container */}
                           <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full transition-all duration-700 ease-out group-hover:scale-110 group-hover:-translate-y-2 hover:z-20">
                              
                              {/* 1. Flag Gradient (Hover) */}
                              <div 
                                className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 group-hover:shadow-[0_0_50px_rgba(123,164,208,0.3)]"
                                style={{ background: country.gradient }}
                              ></div>
                              
                              {/* 2. Default Glass Layer */}
                              <div className="absolute inset-0 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm group-hover:opacity-0 transition-all duration-500 z-10 flex items-center justify-center shadow-[inset_0_0_20px_rgba(255,255,255,0.1)]">
                                 <span className="font-serif text-3xl text-white/30 font-bold group-hover:opacity-0 transition-opacity duration-300 select-none">
                                   {country.name.substring(0, 2).toUpperCase()}
                                 </span>
                              </div>

                              {/* 3. 3D Shine */}
                              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/30 via-transparent to-transparent opacity-50 pointer-events-none z-20 mix-blend-overlay"></div>
                              <div className="absolute top-2 left-4 w-12 h-6 bg-white/20 rounded-[100%] blur-[8px] z-20 pointer-events-none"></div>
                           </div>

                           {/* Country Name Label */}
                           <div className="flex flex-col items-center opacity-40 group-hover:opacity-100 transition-all duration-500">
                             {/* Connecting line lights up on hover */}
                             <span className="w-px h-8 bg-gradient-to-b from-white/20 to-transparent mb-3 group-hover:from-white/60 transition-colors duration-500"></span>
                             
                             {/* Text glows on hover */}
                             <span className="font-serif text-xl text-white tracking-wide group-hover:text-white group-hover:drop-shadow-[0_0_12px_rgba(255,255,255,0.7)] transition-all duration-500">
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