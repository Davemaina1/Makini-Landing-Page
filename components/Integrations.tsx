import React from 'react';
import { Reveal } from './Reveal';

export const Integrations: React.FC = () => {
  return (
    <section id="integration" className="py-32 bg-makini-navy text-makini-ice border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
        <Reveal width="100%">
            <span className="text-makini-soft uppercase tracking-[0.2em] text-xs font-bold mb-8 block">Seamless Integration</span>
        </Reveal>
        <Reveal width="100%" delay={0.1}>
          <h2 className="font-serif text-3xl md:text-5xl mb-20 max-w-3xl mx-auto leading-tight text-white">
            We build custom automations directly within your ecosystem.
          </h2>
        </Reveal>
        
        <div className="flex flex-col md:flex-row justify-center items-center gap-16 md:gap-32">
            
            {/* Microsoft */}
            <Reveal delay={0.2}>
                <div className="group flex items-center gap-6 opacity-60 hover:opacity-100 transition-all duration-500 grayscale hover:grayscale-0 cursor-default">
                    <div className="grid grid-cols-2 gap-1 transform group-hover:scale-110 transition-transform duration-500">
                        <div className="w-5 h-5 bg-[#F25022]"></div>
                        <div className="w-5 h-5 bg-[#7FBA00]"></div>
                        <div className="w-5 h-5 bg-[#00A4EF]"></div>
                        <div className="w-5 h-5 bg-[#FFB900]"></div>
                    </div>
                    <span className="text-3xl font-serif text-white group-hover:text-white transition-colors drop-shadow-[0_0_8px_rgba(255,255,255,0.2)]">Microsoft 365</span>
                </div>
            </Reveal>

            {/* White Gradient Separator */}
            <div className="h-px w-24 bg-gradient-to-r from-transparent via-white/30 to-transparent md:h-24 md:w-px md:bg-gradient-to-b"></div>

            {/* Google */}
            <Reveal delay={0.3}>
                <div className="group flex items-center gap-6 opacity-60 hover:opacity-100 transition-all duration-500 grayscale hover:grayscale-0 cursor-default">
                     <svg className="w-12 h-12 transform group-hover:scale-110 transition-transform duration-500" viewBox="0 0 24 24">
                        <path fill="#4285F4" d="M23.745 12.27c0-.79-.07-1.54-.19-2.27h-11.3v4.51h6.47c-.29 1.48-1.14 2.73-2.4 3.6l3.89 3.03c2.27-2.09 3.58-5.17 3.58-8.87L23.745 12.27z" />
                        <path fill="#34A853" d="M12.255 24c3.24 0 5.95-1.07 7.96-2.9l-3.89-3.03c-1.07.72-2.43 1.14-4.07 1.14-3.14 0-5.8-2.12-6.75-4.97h-4.02v3.11c1.99 3.95 6.08 6.65 10.77 6.65z" />
                        <path fill="#FBBC05" d="M5.505 14.24c-.25-.74-.39-1.54-.39-2.36s.14-1.63.39-2.36v-3.11h-4.02c-.82 1.63-1.28 3.45-1.28 5.47 0 2.02.46 3.84 1.28 5.47l4.02-3.11z" />
                        <path fill="#EA4335" d="M12.255 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C18.205 1.19 15.495 0 12.255 0c-4.69 0-8.78 2.7-10.77 6.65l4.02 3.11c.95-2.85 3.61-4.97 6.75-4.97z" />
                     </svg>
                     <span className="text-3xl font-serif text-white group-hover:text-white transition-colors drop-shadow-[0_0_8px_rgba(255,255,255,0.2)]">Google Workspace</span>
                </div>
            </Reveal>

        </div>
      </div>
    </section>
  );
};