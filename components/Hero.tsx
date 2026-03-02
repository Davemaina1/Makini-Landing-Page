import React from 'react';
import { ArrowDown } from 'lucide-react';
import { Reveal } from './Reveal';
import { SparklesCore } from './ui/sparkles';
import { MakiniLogo } from './MakiniLogo';

export const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-screen w-full bg-makini-ice text-makini-navy overflow-hidden flex items-center justify-center pt-20">
      
      {/* Background Gradients - Light & Airy */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-white rounded-full blur-[100px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-makini-soft/20 rounded-full blur-[120px]" />
      </div>

      {/* Sparkles Effect - Navy particles to show on light bg */}
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none opacity-40">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={60}
          className="w-full h-full"
          particleColor="#0D2440" 
          speed={0.5}
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-12 flex flex-col items-center text-center">
        <Reveal width="100%">
          <div className="mb-12 flex flex-col items-center">
            {/* Prominent Logo Display - Height fixed to 120px */}
            <div className="h-[120px] w-auto bg-white p-4 rounded-3xl shadow-2xl border border-makini-soft/10 mb-8 transform hover:scale-105 transition-all duration-700 animate-in fade-in zoom-in duration-1000 overflow-hidden">
               <MakiniLogo className="h-full w-auto" />
            </div>
            <div className="h-[2px] w-16 bg-makini-royal mb-4"></div>
            <span className="text-makini-royal uppercase tracking-[0.3em] text-xs font-bold">
              Automating Legal Excellence
            </span>
          </div>
        </Reveal>

        <Reveal width="100%" delay={0.2}>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-[1.1] mb-10 tracking-tight text-makini-navy">
            AI is already in Africa. <br />
            <span className="italic text-makini-royal/90 font-light text-4xl md:text-6xl lg:text-7xl">Nobody checked if it works.</span>
          </h1>
        </Reveal>

        <Reveal width="100%" delay={0.4}>
          <div className="max-w-3xl mx-auto space-y-8 mb-16">
            <p className="text-makini-navy/80 text-lg md:text-xl font-normal leading-relaxed tracking-wide">
              Every major AI model — GPT, Gemini, Claude, LLaMA — was tested for safety in English. Not in Swahili. Not in Zulu. Not in Hausa. Makini AI builds the evaluation tools that change that.
            </p>
            <p className="text-makini-navy/60 text-base md:text-lg font-medium leading-relaxed italic">
              We build the evaluation infrastructure that holds AI accountable in African languages so that the next billion users are not left behind.
            </p>
          </div>
        </Reveal>

        <Reveal width="100%" delay={0.6}>
          <div className="flex flex-col md:flex-row gap-6 items-center justify-center">
            <a 
               href="#expertise"
               className="bg-makini-royal text-white px-10 py-4 text-sm uppercase tracking-[0.2em] font-medium hover:bg-makini-navy hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ease-out rounded-sm w-full md:w-auto"
            >
              Our Solutions
            </a>
            <a 
               href="#contact"
               className="border-2 border-makini-royal text-makini-royal px-10 py-4 text-sm uppercase tracking-[0.2em] font-bold hover:bg-makini-royal hover:text-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ease-out rounded-sm w-full md:w-auto"
            >
              Get a Demo
            </a>
          </div>
        </Reveal>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 text-makini-royal/50 animate-bounce duration-1000">
        <ArrowDown size={24} strokeWidth={1.5} />
      </div>
    </section>
  );
};