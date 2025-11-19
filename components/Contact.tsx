import React, { useState } from 'react';
import { Reveal } from './Reveal';
import { Send, CheckCircle2, Loader2 } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    phone: '',
    email: '',
    inquiry: ''
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      // Encode form data for Netlify
      const encode = (data: any) => {
        return Object.keys(data)
          .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
          .join('&');
      };

      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({
          'form-name': 'contact',
          ...formState
        }),
      });

      setStatus('success');
    } catch (error) {
      console.error("Submission failed", error);
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-32 bg-makini-navy border-t border-white/5 text-white relative overflow-hidden">
      {/* Background Texture */}
      <div className="absolute inset-0 bg-makini-navy z-0"></div>
      <div className="absolute inset-0 opacity-20 mix-blend-overlay bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-makini-royal/40 via-transparent to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24">
          
          {/* Text Column */}
          <div className="flex flex-col justify-center">
            <Reveal width="100%">
               <span className="text-makini-soft/60 uppercase tracking-[0.3em] text-xs font-medium mb-6 block">
                Get in Touch
               </span>
            </Reveal>

            <Reveal width="100%" delay={0.2}>
              <h2 className="font-serif text-5xl md:text-7xl mb-8 leading-tight text-white">
                Elevate Your <br/> Practice
              </h2>
            </Reveal>
            
            <Reveal width="100%" delay={0.3}>
              <p className="text-xl font-light mb-12 text-makini-ice/80 leading-relaxed">
                Contact us to diagnose your workflow and build the custom automation your firm deserves.
              </p>
            </Reveal>

            <Reveal width="100%" delay={0.4}>
              <div className="space-y-4 text-makini-ice/60 font-light">
                <p>General Inquiries: <a href="mailto:info@makini.tech" className="text-white hover:text-makini-soft transition-colors border-b border-white/30 pb-1 hover:border-makini-soft">info@makini.tech</a></p>
              </div>
            </Reveal>
          </div>

          {/* Form Column */}
          <div className="bg-white/5 backdrop-blur-md border border-white/15 p-8 md:p-12 rounded-sm shadow-2xl relative group">
            {/* Subtle white glow on form container hover */}
            <div className="absolute -inset-px bg-gradient-to-b from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-sm"></div>
            
            {status === 'success' ? (
              <div className="h-full min-h-[400px] flex flex-col items-center justify-center text-center animate-in fade-in zoom-in duration-500">
                <div className="bg-makini-soft/20 p-6 rounded-full mb-6">
                  <CheckCircle2 size={48} className="text-makini-soft" />
                </div>
                <h3 className="font-serif text-3xl mb-4">Received</h3>
                <p className="text-makini-ice/80 max-w-xs leading-relaxed">
                  Your inquiry has been securely transmitted to our team. We will be in touch shortly.
                </p>
                <button 
                  onClick={() => {
                    setStatus('idle');
                    setFormState({ name: '', phone: '', email: '', inquiry: '' });
                  }} 
                  className="mt-8 text-xs uppercase tracking-widest text-makini-soft hover:text-white transition-colors"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <>
                {/* 
                  Hidden Netlify Form for detection during build. 
                  This allows Netlify to register the form named "contact".
                */}
                <form name="contact" data-netlify="true" hidden>
                  <input type="text" name="name" />
                  <input type="text" name="phone" />
                  <input type="email" name="email" />
                  <textarea name="inquiry"></textarea>
                </form>

                <form onSubmit={handleSubmit} className="space-y-8 relative z-10" data-netlify="true" name="contact">
                  {/* Hidden input required for Netlify to route the submission correctly */}
                  <input type="hidden" name="form-name" value="contact" />
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="group/input">
                      <label htmlFor="name" className="block text-xs uppercase tracking-widest text-makini-ice/60 mb-2 group-focus-within/input:text-white transition-colors">Name</label>
                      <input 
                        type="text" 
                        id="name" 
                        name="name" 
                        required
                        maxLength={100}
                        value={formState.name}
                        onChange={handleChange}
                        className="w-full bg-transparent border-b border-white/20 py-3 text-white focus:outline-none focus:border-white transition-all duration-300 placeholder-white/10 focus:shadow-[0_10px_20px_-10px_rgba(255,255,255,0.1)]"
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="group/input">
                      <label htmlFor="phone" className="block text-xs uppercase tracking-widest text-makini-ice/60 mb-2 group-focus-within/input:text-white transition-colors">Phone Number</label>
                      <input 
                        type="tel" 
                        id="phone" 
                        name="phone"
                        required
                        maxLength={50}
                        value={formState.phone}
                        onChange={handleChange}
                        className="w-full bg-transparent border-b border-white/20 py-3 text-white focus:outline-none focus:border-white transition-all duration-300 placeholder-white/10 focus:shadow-[0_10px_20px_-10px_rgba(255,255,255,0.1)]"
                        placeholder="+1 (555) 000-0000"
                      />
                    </div>
                  </div>

                  <div className="group/input">
                    <label htmlFor="email" className="block text-xs uppercase tracking-widest text-makini-ice/60 mb-2 group-focus-within/input:text-white transition-colors">Email Address</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email"
                      required
                      maxLength={100}
                      value={formState.email}
                      onChange={handleChange}
                      className="w-full bg-transparent border-b border-white/20 py-3 text-white focus:outline-none focus:border-white transition-all duration-300 placeholder-white/10 focus:shadow-[0_10px_20px_-10px_rgba(255,255,255,0.1)]"
                      placeholder="john@firm.com"
                    />
                  </div>

                  <div className="group/input">
                    <label htmlFor="inquiry" className="block text-xs uppercase tracking-widest text-makini-ice/60 mb-2 group-focus-within/input:text-white transition-colors">Inquiry</label>
                    <textarea 
                      id="inquiry" 
                      name="inquiry"
                      required
                      maxLength={2000}
                      value={formState.inquiry}
                      onChange={handleChange}
                      rows={4}
                      className="w-full bg-transparent border-b border-white/20 py-3 text-white focus:outline-none focus:border-white transition-all duration-300 placeholder-white/10 resize-none focus:shadow-[0_10px_20px_-10px_rgba(255,255,255,0.1)]"
                      placeholder="Tell us about your workflow needs..."
                    ></textarea>
                  </div>

                  <div className="pt-4">
                    <button 
                      type="submit" 
                      disabled={status === 'submitting'}
                      className="w-full bg-white text-makini-navy font-medium py-4 px-8 hover:bg-makini-ice hover:text-makini-navy hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] hover:scale-105 active:scale-95 transition-all duration-500 ease-out flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed uppercase tracking-[0.2em] text-xs"
                    >
                      {status === 'submitting' ? (
                        <>
                          <Loader2 size={16} className="animate-spin" /> Transmitting...
                        </>
                      ) : (
                        <>
                          Send Message <Send size={16} />
                        </>
                      )}
                    </button>
                    {status === 'error' && (
                      <p className="text-red-400 text-xs mt-4 text-center uppercase tracking-widest">
                        Transmission failed. Please try again or email directly.
                      </p>
                    )}
                  </div>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};