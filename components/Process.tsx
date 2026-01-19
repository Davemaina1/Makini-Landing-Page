
import React from 'react';
import { Reveal } from './Reveal';
import { ClipboardList, Zap, Send, LineChart } from 'lucide-react';

const steps = [
  {
    title: "Intake",
    description: "Standardize how work enters your firm. No more scattered emails or missing context.",
    icon: ClipboardList,
    color: "bg-blue-50"
  },
  {
    title: "Automate",
    description: "Bespoke AI agents handle the repetitive drafting and research with elite precision.",
    icon: Zap,
    color: "bg-amber-50"
  },
  {
    title: "Submit",
    description: "Deliver high-quality work hours or days before the deadline. Speed as a competitive advantage.",
    icon: Send,
    color: "bg-green-50"
  },
  {
    title: "Track",
    description: "Real-time visibility into every request, status, and billable milestone.",
    icon: LineChart,
    color: "bg-purple-50"
  }
];

export const Process: React.FC = () => {
  return (
    <section id="process" className="py-40 bg-white text-makini-navy relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-24">
          <Reveal width="100%">
            <span className="text-makini-royal uppercase tracking-[0.2em] text-xs font-bold mb-4 block">The Workflow</span>
          </Reveal>
          <Reveal width="100%" delay={0.1}>
            <h2 className="font-serif text-4xl md:text-6xl text-makini-navy">
              From Request to <span className="italic text-makini-royal">Resolution</span>
            </h2>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {steps.map((step, index) => (
            <Reveal key={index} delay={index * 0.1} width="100%">
              <div className="relative flex flex-col items-center text-center group">
                {/* Connector Line for desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-[calc(50%+40px)] w-[calc(100%-80px)] h-px bg-makini-soft/20 z-0"></div>
                )}
                
                <div className={`w-24 h-24 ${step.color} rounded-full flex items-center justify-center mb-8 relative z-10 border border-makini-soft/10 group-hover:scale-110 transition-transform duration-500 shadow-sm`}>
                  <step.icon className="w-10 h-10 text-makini-royal" strokeWidth={1.5} />
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-makini-navy text-white rounded-full flex items-center justify-center text-xs font-bold border-2 border-white">
                    0{index + 1}
                  </div>
                </div>

                <h3 className="font-serif text-2xl mb-4 text-makini-navy group-hover:text-makini-royal transition-colors">
                  {step.title}
                </h3>
                <p className="text-makini-navy/60 leading-relaxed text-sm max-w-[200px]">
                  {step.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal width="100%" delay={0.5}>
          <div className="mt-24 p-12 bg-makini-ice/50 rounded-sm border border-makini-soft/10 text-center max-w-3xl mx-auto">
            <h4 className="font-serif text-2xl mb-4 italic text-makini-royal">"It makes them submit work faster than ever."</h4>
            <p className="text-makini-navy/70 text-sm tracking-wide">
              Our core objective is to reduce the friction between instruction and delivery. 
              Makini AI doesn't just assist; it accelerates.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
