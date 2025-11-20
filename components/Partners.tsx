import React from 'react';
import { Reveal } from './Reveal';

export const Partners: React.FC = () => {
  return (
    <section className="py-12 bg-makini-navy border-b border-white/5 relative overflow-hidden">
      {/* Subtle top gradient to blend with Hero */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <Reveal width="100%">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
            
            <span className="text-makini-soft/50 uppercase tracking-[0.3em] text-[10px] md:text-xs font-medium border-r border-white/10 pr-8 mr-4 hidden md:block">
              Backed By
            </span>
            <span className="text-makini-soft/50 uppercase tracking-[0.3em] text-[10px] font-medium md:hidden mb-2">
              Backed By
            </span>

            {/* Microsoft for Startups Logo - Monochromatic Premium Style -> Colors on Hover */}
            <div className="group flex items-center gap-4 opacity-70 hover:opacity-100 transition-all duration-500 cursor-default">
              {/* Logo Icon */}
              <div className="grid grid-cols-2 gap-1">
                {/* Red */}
                <div className="w-3 h-3 bg-white/90 shadow-[0_0_10px_rgba(255,255,255,0.2)] group-hover:bg-[#F25022] group-hover:shadow-[0_0_15px_rgba(242,80,34,0.5)] transition-all duration-500"></div>
                {/* Green */}
                <div className="w-3 h-3 bg-white/90 shadow-[0_0_10px_rgba(255,255,255,0.2)] group-hover:bg-[#7FBA00] group-hover:shadow-[0_0_15px_rgba(127,186,0,0.5)] transition-all duration-500"></div>
                {/* Blue */}
                <div className="w-3 h-3 bg-white/90 shadow-[0_0_10px_rgba(255,255,255,0.2)] group-hover:bg-[#00A4EF] group-hover:shadow-[0_0_15px_rgba(0,164,239,0.5)] transition-all duration-500"></div>
                {/* Yellow */}
                <div className="w-3 h-3 bg-white/90 shadow-[0_0_10px_rgba(255,255,255,0.2)] group-hover:bg-[#FFB900] group-hover:shadow-[0_0_15px_rgba(255,185,0,0.5)] transition-all duration-500"></div>
              </div>
              
              {/* Logo Text */}
              <div className="flex flex-col">
                <span className="font-sans text-xl text-white tracking-tight font-semibold leading-none group-hover:text-white transition-colors">
                  Microsoft
                </span>
                <span className="font-sans text-sm text-makini-ice/60 tracking-wide font-light leading-none mt-1 group-hover:text-white/90 transition-colors">
                  for Startups
                </span>
              </div>
            </div>

          </div>
        </Reveal>
      </div>
    </section>
  );
};