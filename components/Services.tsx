import React from 'react';
import { Briefcase, GraduationCap, FileCheck, Cpu, ArrowUpRight } from 'lucide-react';
import { Reveal } from './Reveal';
import { ServiceItem } from '../types';

const services: ServiceItem[] = [
  {
    title: "Workflow Automation",
    description: "Custom automations on Microsoft & Google Workspace to eliminate redundancy and accelerate submission times.",
    icon: Briefcase
  },
  {
    title: "Legal AI Training",
    description: "Guiding legal teams on maximising AI utility. We teach you how to use AI to multiply your time and precision.",
    icon: GraduationCap
  },
  {
    title: "Contract Lifecycle",
    description: "A complete CLM platform. Automate drafting, negotiation, and renewal tracking in one seamless flow.",
    icon: FileCheck
  },
  {
    title: "Custom Engineering",
    description: "Bespoke knowledge management platforms and AI-powered research tools tailored to your firm's DNA.",
    icon: Cpu
  }
];

export const Services: React.FC = () => {
  return (
    <section id="expertise" className="py-32 md:py-48 bg-makini-navy text-makini-ice relative overflow-hidden">
      {/* Ambient White Light for Contrast */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/5 rounded-full blur-[150px] pointer-events-none mix-blend-overlay translate-x-1/3 -translate-y-1/3"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 border-b border-white/10 pb-8">
          <Reveal>
            <div className="max-w-2xl">
              <span className="text-makini-soft uppercase tracking-[0.2em] text-xs font-bold mb-4 block">Expertise</span>
              <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl text-white">
                Designed for <br/>
                <span className="italic text-makini-soft/80">The Modern Counsel</span>
              </h2>
            </div>
          </Reveal>
          <Reveal delay={0.2}>
             <div className="mt-8 md:mt-0 text-right">
               <span className="text-6xl font-serif text-white/10">04</span>
             </div>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <Reveal key={index} delay={index * 0.1} width="100%">
              <div className="group relative bg-white/5 border border-white/10 p-12 h-full hover:bg-white/10 hover:border-white/25 hover:shadow-[0_32px_64px_rgba(13,36,64,0.18)] hover:-translate-y-2 hover:scale-[1.02] transition-all duration-500 ease-out backdrop-blur-sm rounded-sm overflow-hidden">
                
                {/* Hover sheen effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-[200%] group-hover:animate-[shine_1s_ease-in-out] pointer-events-none"></div>

                <div className="absolute top-12 right-12 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-100">
                    <ArrowUpRight className="text-white drop-shadow-[0_0_5px_rgba(255,255,255,0.5)]" size={24} strokeWidth={1} />
                </div>
                
                <div className="mb-12">
                  {/* Icon with Pulse & Glow Animation */}
                  <service.icon className="w-12 h-12 text-makini-soft stroke-[1] mb-6 transition-all duration-500 ease-in-out group-hover:text-white group-hover:scale-110 group-hover:-translate-y-1 group-hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.4)]" />
                  
                  <h3 className="font-serif text-3xl text-white/90 mb-2 group-hover:text-white transition-colors duration-300">
                    {service.title}
                  </h3>
                </div>
                
                <p className="text-makini-ice/60 leading-relaxed font-light text-lg max-w-sm transition-all duration-500 group-hover:text-makini-ice/90">
                  {service.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

      </div>
      <style>{`
        @keyframes shine {
          from { transform: translateX(-200%); }
          to { transform: translateX(200%); }
        }
      `}</style>
    </section>
  );
};