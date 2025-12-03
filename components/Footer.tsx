import React, { useState } from 'react';
import { LegalModal } from './LegalModal';
import { Phone } from 'lucide-react';
import { MakiniLogo } from './MakiniLogo';

export const Footer: React.FC = () => {
  const [modal, setModal] = useState<{isOpen: boolean; title: string; content: React.ReactNode}>({
    isOpen: false,
    title: '',
    content: null
  });

  const closeModal = () => setModal(prev => ({ ...prev, isOpen: false }));

  const handlePrivacy = (e: React.MouseEvent) => {
    e.preventDefault();
    setModal({
      isOpen: true,
      title: "Privacy Policy",
      content: (
        <>
          <p>
            At Makini AI, preserving the confidentiality of your legal practice is our paramount obligation. We do not merely comply with data regulations; we internalize them into every layer of our automation architecture.
          </p>
          <div className="my-6 p-6 bg-makini-ice border-l-2 border-makini-royal">
            <p className="text-xs uppercase tracking-widest text-makini-royal mb-3 font-bold">Global Compliance Standards</p>
            <p className="italic mb-4 text-makini-navy">
              We strictly adhere to the <strong>General Data Protection Regulation (GDPR)</strong> and the sovereign privacy laws of our key operating jurisdictions:
            </p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-4 text-sm text-makini-navy/80">
               <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-makini-royal rounded-full shrink-0"></span> Kenya (Data Protection Act, 2019)</li>
               <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-makini-royal rounded-full shrink-0"></span> Nigeria (Nigeria Data Protection Act)</li>
               <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-makini-royal rounded-full shrink-0"></span> South Africa (POPIA)</li>
               <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-makini-royal rounded-full shrink-0"></span> Rwanda (Personal Data Protection Law)</li>
               <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-makini-royal rounded-full shrink-0"></span> UAE (Federal Decree-Law No. 45)</li>
               <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-makini-royal rounded-full shrink-0"></span> UK (UK GDPR & DPA 2018)</li>
               <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-makini-royal rounded-full shrink-0"></span> USA (Relevant Federal & State Laws)</li>
            </ul>
          </div>
          <p>
             Your data remains strictly siloed within your own Microsoft or Google Workspace tenants. We build the infrastructure; we do not retain the data.
          </p>
        </>
      )
    });
  };

  const handleTerms = (e: React.MouseEvent) => {
    e.preventDefault();
    setModal({
      isOpen: true,
      title: "Terms of Service",
      content: (
        <>
          <p>
             Makini AI is not a generic software vendor. We are strategic automation partners. 
          </p>
          <p>
             Due to the tailored nature of our solutions—ranging from bespoke contract lifecycle management to AI-powered research silos—our commercial terms are <strong>custom-tailored for each client engagement</strong>.
          </p>
          <h4 className="text-makini-navy font-serif text-xl mt-8 mb-4">Service Framework</h4>
          <p>
             Your specific rights, service level guarantees (SLAs), and intellectual property ownership regarding custom code are governed by the <strong>Master Services Agreement (MSA)</strong> and <strong>Statement of Work (SOW)</strong> executed at the commencement of our engagement.
          </p>
          <p className="mt-6 border-t border-makini-navy/10 pt-6 text-sm opacity-70">
             By accessing our services, you agree to use our automations in compliance with all applicable laws and the ethical standards of the legal profession.
          </p>
        </>
      )
    });
  };

  const socialLinks = [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/company/makinitechnologies/",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
      hoverColor: "hover:text-[#0077b5] hover:border-[#0077b5]",
    },
    {
      name: "X",
      url: "https://x.com/makiniai?s=21",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
      hoverColor: "hover:text-black hover:border-black",
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/makini.ai?igsh=MWkzbWJjczJ1azR2aQ%3D%3D&utm_source=qr",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
           <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      ),
      hoverColor: "hover:text-[#E1306C] hover:border-[#E1306C]",
    },
    {
      name: "Phone",
      url: "tel:+250793145376",
      icon: <Phone className="w-5 h-5" />,
      hoverColor: "hover:text-makini-royal hover:border-makini-royal",
    },
    {
      name: "WhatsApp",
      url: "https://wa.me/250793145376",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
           <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
        </svg>
      ),
      hoverColor: "hover:text-[#25D366] hover:border-[#25D366]",
    }
  ];

  return (
    <>
      <footer className="bg-makini-ice text-makini-navy/60 pb-12 pt-20 border-t border-makini-navy/5 relative overflow-hidden">
        
        <div className="max-w-7xl mx-auto px-6 flex flex-col items-center gap-10 relative z-10">
          
          {/* Main Logo in Footer */}
          <div className="mb-6 flex flex-col items-center gap-2 opacity-80 hover:opacity-100 transition-opacity">
            <MakiniLogo className="w-12 h-12" />
            <div className="flex items-baseline gap-1">
              <span className="font-serif text-xl font-bold tracking-[0.1em] text-makini-navy">MAKINI</span>
              <span className="text-[0.6rem] uppercase tracking-[0.3em] text-makini-royal font-bold">AI</span>
            </div>
          </div>

          {/* PARTNER SECTION: Microsoft & Google */}
          <div className="flex flex-col items-center gap-6 mb-8">
              <span className="text-makini-royal uppercase tracking-[0.3em] text-[10px] font-bold">Backed By & Supported By</span>
              
              <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
                  
                  {/* Microsoft for Startups */}
                  <div className="group flex items-center gap-5 cursor-default p-4 rounded-xl bg-white shadow-sm hover:shadow-md transition-all duration-500 border border-makini-soft/20">
                    {/* Icon Grid */}
                    <div className="grid grid-cols-2 gap-1">
                        <div className="w-4 h-4 bg-[#F25022]"></div>
                        <div className="w-4 h-4 bg-[#7FBA00]"></div>
                        <div className="w-4 h-4 bg-[#00A4EF]"></div>
                        <div className="w-4 h-4 bg-[#FFB900]"></div>
                    </div>
                    
                    <div className="flex flex-col">
                        <span className="font-sans text-xl text-makini-navy tracking-tight font-semibold leading-none">Microsoft</span>
                        <span className="font-sans text-sm text-makini-navy/60 tracking-wide font-medium leading-none mt-1">for Startups</span>
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="hidden md:block h-12 w-px bg-makini-navy/10"></div>

                  {/* Google Gemini Program */}
                  <div className="group flex items-center gap-5 cursor-default p-4 rounded-xl bg-white shadow-sm hover:shadow-md transition-all duration-500 border border-makini-soft/20">
                    <div className="relative w-8 h-8">
                        {/* Always show color version in light mode */}
                         <svg viewBox="0 0 24 24" className="w-full h-full absolute inset-0">
                            <defs>
                                <linearGradient id="gemini-gradient-footer" x1="0%" y1="0%" x2="100%" y2="100%">
                                    <stop offset="0%" stopColor="#4E86F7" />
                                    <stop offset="100%" stopColor="#8F49E7" />
                                </linearGradient>
                            </defs>
                            <path d="M12 2C12 7.523 16.477 12 22 12C16.477 12 12 16.477 12 22C12 16.477 7.523 12 2 12C7.523 12 12 7.523 12 2Z" fill="url(#gemini-gradient-footer)" />
                        </svg>
                    </div>

                    <div className="flex flex-col">
                        <span className="font-sans text-xl text-makini-navy tracking-tight font-semibold leading-none">Google</span>
                        <span className="font-sans text-sm text-makini-navy/60 tracking-wide font-medium leading-none mt-1">Gemini Program</span>
                    </div>
                  </div>

              </div>
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-makini-navy/10 max-w-sm"></div>

          {/* Social Media Section */}
          <div className="flex items-center justify-center gap-8 md:gap-12">
            {socialLinks.map((link) => (
              <a 
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`group relative p-3 rounded-full bg-white border border-makini-soft/30 transition-all duration-300 hover:-translate-y-1 ${link.hoverColor} text-makini-navy/70 shadow-sm hover:shadow-md`}
                aria-label={link.name}
              >
                <div className="relative z-10">
                  {link.icon}
                </div>
              </a>
            ))}
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-makini-navy/10 max-w-2xl mt-8"></div>

          {/* Legal & Copyright */}
          <div className="flex flex-col md:flex-row justify-between items-center w-full gap-6">
            <div className="text-xs md:text-sm tracking-widest uppercase font-medium">
              © {new Date().getFullYear()} Makini AI. All Rights Reserved.
            </div>
            
            <div className="flex flex-wrap justify-center gap-6 md:gap-8 text-xs md:text-sm font-medium">
              <a href="#" onClick={handlePrivacy} className="hover:text-makini-royal transition-colors">Privacy Policy</a>
              <a href="#" onClick={handleTerms} className="hover:text-makini-royal transition-colors">Terms of Service</a>
              <a href="mailto:info@makini.tech" className="hover:text-makini-royal transition-colors">Contact Support</a>
            </div>
          </div>
        </div>
      </footer>
      <LegalModal 
        isOpen={modal.isOpen} 
        onClose={closeModal} 
        title={modal.title} 
        content={modal.content} 
      />
    </>
  );
};