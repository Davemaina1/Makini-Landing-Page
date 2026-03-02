import React from 'react';
import { Reveal } from './Reveal';

export const Quote: React.FC = () => {
  return (
    <section className="py-24 bg-makini-navy text-white relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <Reveal width="100%">
          <div>
            <span className="text-makini-soft uppercase tracking-[0.3em] text-xs font-bold mb-8 block">The Mission</span>
            <blockquote className="text-3xl md:text-5xl font-serif leading-tight mb-12">
              "We are not just building tools. We are building the <span className="italic text-makini-soft">trust layer</span> that allows AI to serve the next billion users without causing harm."
            </blockquote>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-makini-soft/20 border border-makini-soft/40 mb-4 overflow-hidden">
                <img src="https://picsum.photos/seed/nairobi/100/100" alt="Founder" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
              <p className="font-bold">Makini AI Research Team</p>
              <p className="text-sm opacity-60">Nairobi, Kenya</p>
            </div>
          </div>
        </Reveal>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-white rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-white rounded-full"></div>
      </div>
    </section>
  );
};
