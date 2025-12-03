import React from 'react';
import { Reveal } from './Reveal';

export const Partners: React.FC = () => {
  return (
    <section className="py-12 bg-makini-ice border-b border-makini-navy/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <Reveal width="100%">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
            
            <span className="text-makini-royal uppercase tracking-[0.3em] text-[10px] md:text-xs font-bold border-r border-makini-navy/10 pr-8 mr-4 hidden md:block">
              Backed By
            </span>
            <span className="text-makini-royal uppercase tracking-[0.3em] text-[10px] font-bold md:hidden mb-2">
              Backed By
            </span>

            {/* Microsoft for Startups Logo - Light Mode */}
            <div className="group flex items-center gap-4 cursor-default">
              {/* Logo Icon */}
              <div className="grid grid-cols-2 gap-1">
                <div className="w-3 h-3 bg-[#F25022]"></div>
                <div className="w-3 h-3 bg-[#7FBA00]"></div>
                <div className="w-3 h-3 bg-[#00A4EF]"></div>
                <div className="w-3 h-3 bg-[#FFB900]"></div>
              </div>
              
              {/* Logo Text */}
              <div className="flex flex-col">
                <span className="font-sans text-xl text-makini-navy tracking-tight font-semibold leading-none">
                  Microsoft
                </span>
                <span className="font-sans text-sm text-makini-navy/60 tracking-wide font-medium leading-none mt-1">
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