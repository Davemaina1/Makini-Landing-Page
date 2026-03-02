import React from 'react';
import { Globe, Users, TrendingUp } from 'lucide-react';
import { Reveal } from './Reveal';

export const WhyAfrica: React.FC = () => {
  const stats = [
    { label: "Next Billion Users", value: "1.4B", description: "The population of Africa is the fastest growing digital market globally." },
    { label: "Linguistic Diversity", value: "2,000+", description: "Languages spoken across the continent, mostly low-resource for AI." },
    { label: "Economic Growth", value: "6 of 10", description: "Of the world's fastest growing economies are in Africa." }
  ];

  return (
    <section id="why-africa" className="py-24 bg-makini-navy text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <Reveal width="100%">
            <div>
              <h2 className="text-4xl md:text-6xl font-serif mb-8">
                Africa is the <span className="italic text-makini-soft">next AI frontier.</span>
              </h2>
              <p className="text-xl opacity-70 mb-12 leading-relaxed">
                By 2050, one in four people on Earth will be African. If AI systems are not built to understand African languages and cultures today, we are designing a future of digital exclusion at a massive scale.
              </p>
              
              <div className="space-y-8">
                {stats.map((stat, i) => (
                  <div key={i} className="flex gap-6 items-start">
                    <div className="text-4xl font-serif text-makini-soft">{stat.value}</div>
                    <div>
                      <h4 className="font-bold mb-1">{stat.label}</h4>
                      <p className="text-sm opacity-60">{stat.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal width="100%" delay={0.2}>
            <div className="relative">
              <div className="dark-glass p-8 rounded-[2rem] relative z-10">
                <div className="aspect-square rounded-2xl overflow-hidden bg-makini-royal/20 flex items-center justify-center">
                  <Globe className="w-48 h-48 text-makini-soft opacity-20 animate-pulse" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                        <p className="text-5xl font-serif mb-2">2030</p>
                        <p className="text-xs uppercase tracking-widest opacity-60">The Tipping Point</p>
                    </div>
                  </div>
                </div>
                <div className="mt-8 p-6 bg-white/5 rounded-xl border border-white/10">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-xs font-bold uppercase tracking-wider">AI Adoption Rate</span>
                    <TrendingUp className="w-4 h-4 text-makini-soft" />
                  </div>
                  <div className="progress-bar bg-white/10"><div className="progress-fill bg-makini-soft w-[74%]"></div></div>
                  <p className="text-[10px] mt-4 opacity-40 italic">Projected AI integration across African enterprise sectors by 2030.</p>
                </div>
              </div>
              
              {/* Decorative Orbs */}
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-makini-soft/10 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-makini-royal/20 rounded-full blur-3xl"></div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};