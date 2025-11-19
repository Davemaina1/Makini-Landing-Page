import React from 'react';
import { ArrowDown } from 'lucide-react';
import { Reveal } from './Reveal';
import { SparklesCore } from './ui/sparkles';

export const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-screen w-full bg-makini-navy text-makini-ice overflow-hidden flex items-center justify-center pt-20">
      
      {/* Subtle Background Gradients */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-0 left-1/4 w-[60vw] h-[60vw] bg-makini-royal/20 rounded-full blur-[150px] animate-pulse" style={{ animationDuration: '8s' }} />
        <div className="absolute bottom-0 right-1/4 w-[50vw] h-[50vw] bg-makini-soft/10 rounded-full blur-[150px]" />
        
        {/* White Spotlight Gradient for Depth */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/5 rounded-full blur-[120px] mix-blend-overlay pointer-events-none"></div>
      </div>

      {/* Sparkles Effect - Color updated to Ice/White for visibility on Navy */}
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={70}
          className="w-full h-full"
          particleColor="#E7F0FA"
          speed={0.5}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12 flex flex-col items-center text-center">
        <Reveal width="100%">
          <div className="mb-8 flex flex-col items-center gap-4">
            {/* Increased opacity of white line for better contrast */}
            <div className="h-[1px] w-12 bg-white/80 shadow-[0_0_10px_rgba(255,255,255,0.5)]"></div>
            <span className="text-makini-soft uppercase tracking-[0.4em] text-xs md:text-sm font-medium">
              Automating Legal Work
            </span>
          </div>
        </Reveal>

        <Reveal width="100%" delay={0.2}>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-9xl leading-[1] mb-10 tracking-tight text-white">
            Efficiency, <br />
            <span className="italic text-makini-soft font-light">Perfected.</span>
          </h1>
        </Reveal>

        <Reveal width="100%" delay={0.4}>
          <p className="max-w-2xl mx-auto text-makini-ice/70 text-lg md:text-xl font-light leading-relaxed mb-16 tracking-wide">
            We engineer custom workflow automations and AI solutions for in-house counsel and law firms. 
            Submit work early. Fulfill requests precisely. Track perfectly.
          </p>
        </Reveal>

        <Reveal width="100%" delay={0.6}>
          <div className="flex flex-col md:flex-row gap-6">
            <a 
               href="#expertise"
               className="bg-white/5 border border-white/20 text-makini-ice px-12 py-4 text-sm uppercase tracking-[0.2em] hover:bg-makini-ice hover:text-makini-navy hover:border-makini-ice hover:shadow-[0_0_50px_rgba(231,240,250,0.4)] hover:scale-105 active:scale-95 transition-all duration-500 ease-out backdrop-blur-sm"
            >
              Our Solutions
            </a>
          </div>
        </Reveal>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 text-makini-ice/20 animate-bounce duration-1000">
        <ArrowDown size={24} strokeWidth={1} />
      </div>
    </section>
  );
};