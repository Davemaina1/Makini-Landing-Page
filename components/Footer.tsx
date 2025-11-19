import React, { useState } from 'react';
import { LegalModal } from './LegalModal';

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
          <div className="my-6 p-6 bg-makini-navy/5 border-l-2 border-makini-soft">
            <p className="text-xs uppercase tracking-widest text-makini-soft mb-3 font-bold">Global Compliance Standards</p>
            <p className="italic mb-4 text-makini-navy/90">
              We strictly adhere to the <strong>General Data Protection Regulation (GDPR)</strong> and the sovereign privacy laws of our key operating jurisdictions:
            </p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-4 text-sm text-makini-navy/80">
               <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-makini-soft rounded-full shrink-0"></span> Kenya (Data Protection Act, 2019)</li>
               <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-makini-soft rounded-full shrink-0"></span> Nigeria (Nigeria Data Protection Act)</li>
               <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-makini-soft rounded-full shrink-0"></span> South Africa (POPIA)</li>
               <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-makini-soft rounded-full shrink-0"></span> Rwanda (Personal Data Protection Law)</li>
               <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-makini-soft rounded-full shrink-0"></span> UAE (Federal Decree-Law No. 45)</li>
               <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-makini-soft rounded-full shrink-0"></span> UK (UK GDPR & DPA 2018)</li>
               <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-makini-soft rounded-full shrink-0"></span> USA (Relevant Federal & State Laws)</li>
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

  return (
    <>
      <footer className="bg-makini-navy/95 text-makini-ice/40 py-12 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-xs md:text-sm tracking-widest uppercase">
            © {new Date().getFullYear()} Makini AI. All Rights Reserved.
          </div>
          
          <div className="flex flex-wrap justify-center gap-6 md:gap-8 text-xs md:text-sm">
            <a href="#" onClick={handlePrivacy} className="hover:text-makini-soft transition-colors">Privacy Policy</a>
            <a href="#" onClick={handleTerms} className="hover:text-makini-soft transition-colors">Terms of Service</a>
            <a href="mailto:info@makini.tech" className="hover:text-makini-soft transition-colors">Contact Support</a>
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