import React from 'react';
import { Reveal } from './Reveal';

export const Partners: React.FC = () => {
  const partners = [
    { name: 'Microsoft for Startups', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg' },
    { name: 'Google Gemini Program', logo: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg' },
    { name: 'Gates Foundation', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Bill_%26_Melinda_Gates_Foundation_logo.svg/1200px-Bill_%26_Melinda_Gates_Foundation_logo.svg.png' },
    { name: 'AfriLabs', logo: 'https://afrilabs.com/wp-content/uploads/2021/04/AfriLabs-Logo-1.png' },
    { name: 'Meta', logo: 'https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg' },
  ];

  // Duplicate for seamless loop
  const allPartners = [...partners, ...partners, ...partners];

  return (
    <section className="py-24 border-y border-makini-soft/10 bg-white/30 backdrop-blur-sm overflow-hidden">
      <Reveal width="100%">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-16">
          <div className="max-w-md text-center md:text-left">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-makini-royal mb-4">Our Supporters</p>
            <h2 className="text-3xl md:text-4xl font-serif text-makini-navy leading-tight">
              Backed by the world's <span className="italic">leading AI ecosystems.</span>
            </h2>
          </div>

          <div className="relative h-[300px] w-full md:w-[400px] overflow-hidden">
            <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-b from-white/30 via-transparent to-white/30"></div>
            <div className="flex flex-col gap-12 animate-marquee-vertical items-center">
              {allPartners.map((partner, i) => (
                <div key={i} className="h-16 md:h-20 flex items-center justify-center grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
                  <img 
                    src={partner.logo} 
                    alt={partner.name}
                    className="h-full w-auto max-w-[200px] object-contain"
                    referrerPolicy="no-referrer"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
};