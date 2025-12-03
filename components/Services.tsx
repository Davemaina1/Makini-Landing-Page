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
    <section id="expertise" className="py-40 bg-makini-ice text-makini-navy relative">
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 border-b border-makini-navy/10 pb-8">
          <Reveal>
            <div className="max-w-2xl">
              <span className="text-makini-royal uppercase tracking-[0.2em] text-xs font-bold mb-4 block">Expertise</span>
              <h2 className="font-serif text-4xl md:text-6xl text-makini-navy">
                Designed for <br/>
                <span className="italic text-makini-royal">The Modern Counsel</span>
              </h2>
            </div>
          </Reveal>
          <Reveal delay={0.2}>
             <div className="mt-8 md:mt-0 text-right">
               <span className="text-6xl font-serif text-makini-navy/10">04</span>
             </div>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Reveal key={index} delay={index * 0.1} width="100%">
              {/* Clean White Card */}
              <div className="group relative bg-white border border-makini-soft/20 p-12 h-full hover:border-makini-royal/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ease-out rounded-sm">
                
                <div className="absolute top-12 right-12 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-100">
                    <ArrowUpRight className="text-makini-royal" size={24} strokeWidth={1.5} />
                </div>
                
                <div className="mb-10">
                  <service.icon className="w-10 h-10 text-makini-royal mb-6 transition-transform duration-500 group-hover:scale-110" />
                  
                  <h3 className="font-serif text-3xl text-makini-navy mb-4 group-hover:text-makini-royal transition-colors duration-300">
                    {service.title}
                  </h3>
                </div>
                
                <p className="text-makini-navy/70 leading-relaxed font-normal text-lg max-w-sm">
                  {service.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
};