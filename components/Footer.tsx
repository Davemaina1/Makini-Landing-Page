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
        <div className="space-y-4">
          <p>
            At Makini AI, preserving the confidentiality of your data is our paramount obligation. We do not merely comply with data regulations; we internalize them into every layer of our evaluation architecture.
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
            </ul>
          </div>
        </div>
      )
    });
  };

  const handleTerms = (e: React.MouseEvent) => {
    e.preventDefault();
    setModal({
      isOpen: true,
      title: "Terms of Service",
      content: (
        <div className="space-y-4">
          <p>
             Makini AI provides evaluation infrastructure and tools for AI safety. 
          </p>
          <p>
             Our commercial terms are custom-tailored for each client engagement, ranging from API access to bespoke model audits.
          </p>
          <h4 className="text-makini-navy font-serif text-xl mt-8 mb-4">Service Framework</h4>
          <p>
             Your specific rights and service level guarantees are governed by the Master Services Agreement (MSA) executed at the commencement of our engagement.
          </p>
        </div>
      )
    });
  };

  return (
    <>
      <footer className="bg-makini-navy text-white/60 py-24 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-2 space-y-6">
              <div className="flex items-center gap-2">
                <MakiniLogo className="w-8 h-8 text-makini-soft" />
                <span className="font-serif text-2xl font-semibold text-white">Makini AI</span>
              </div>
              <p className="max-w-sm text-sm leading-relaxed">
                Building the evaluation infrastructure that holds AI accountable in African languages so that the next billion users are not left behind.
              </p>
            </div>
            
            <div className="space-y-6">
              <h4 className="text-white font-bold uppercase tracking-widest text-xs">Company</h4>
              <ul className="space-y-4 text-sm">
                <li><a href="#problem" className="hover:text-makini-soft transition-colors">Problem</a></li>
                <li><a href="#why-africa" className="hover:text-makini-soft transition-colors">Why Africa</a></li>
                <li><a href="#products" className="hover:text-makini-soft transition-colors">Our Work</a></li>
                <li><a href="#research" className="hover:text-makini-soft transition-colors">Research</a></li>
              </ul>
            </div>

            <div className="space-y-6">
              <h4 className="text-white font-bold uppercase tracking-widest text-xs">Legal</h4>
              <ul className="space-y-4 text-sm">
                <li><a href="#" onClick={handlePrivacy} className="hover:text-makini-soft transition-colors">Privacy Policy</a></li>
                <li><a href="#" onClick={handleTerms} className="hover:text-makini-soft transition-colors">Terms of Service</a></li>
                <li><a href="#contact" className="hover:text-makini-soft transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-xs">© {new Date().getFullYear()} Makini AI. Nairobi, Kenya.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors"><MakiniLogo className="w-5 h-5" /></a>
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