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
      const params = new URLSearchParams();
      params.append('form-name', 'contact');
      Object.entries(formState).forEach(([key, value]) => {
        params.append(key, value as string);
      });

      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: params.toString(),
      });

      setStatus('success');
    } catch (error) {
      console.error("Submission failed", error);
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-40 bg-makini-ice text-makini-navy border-t border-makini-navy/5 relative">
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          
          {/* Text Column */}
          <div className="flex flex-col justify-center">
            <Reveal width="100%">
               <span className="text-makini-royal uppercase tracking-[0.2em] text-xs font-bold mb-6 block">
                Get in Touch
               </span>
            </Reveal>

            <Reveal width="100%" delay={0.2}>
              <h2 className="font-serif text-5xl md:text-7xl mb-8 leading-tight text-makini-navy">
                Elevate Your <br/> Practice
              </h2>
            </Reveal>
            
            <Reveal width="100%" delay={0.3}>
              <p className="text-xl font-normal mb-12 text-makini-navy/70 leading-relaxed">
                Contact us to diagnose your workflow and build the custom automation your firm deserves.
              </p>
            </Reveal>

            <Reveal width="100%" delay={0.4}>
              <div className="space-y-4 text-makini-navy/70 font-medium">
                <p>General Inquiries: <a href="mailto:info@makini.tech" className="text-makini-royal border-b border-makini-royal/30 pb-1 hover:border-makini-royal transition-colors">info@makini.tech</a></p>
              </div>
            </Reveal>
          </div>

          {/* Form Column */}
          <div className="bg-white p-10 md:p-12 rounded-sm shadow-xl border border-makini-soft/10">
            
            {status === 'success' ? (
              <div className="h-full min-h-[400px] flex flex-col items-center justify-center text-center animate-in fade-in zoom-in duration-500">
                <div className="bg-makini-ice p-6 rounded-full mb-6">
                  <CheckCircle2 size={48} className="text-makini-royal" />
                </div>
                <h3 className="font-serif text-3xl mb-4 text-makini-navy">Received</h3>
                <p className="text-makini-navy/70 max-w-xs leading-relaxed">
                  Your inquiry has been securely transmitted to our team. We will be in touch shortly.
                </p>
                <button 
                  onClick={() => {
                    setStatus('idle');
                    setFormState({ name: '', phone: '', email: '', inquiry: '' });
                  }} 
                  className="mt-8 text-xs uppercase tracking-widest text-makini-royal font-bold hover:text-makini-navy transition-colors"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <input type="hidden" name="form-name" value="contact" />
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="group/input">
                    <label htmlFor="name" className="block text-xs uppercase tracking-widest text-makini-navy/60 mb-2 font-bold">Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name" 
                      required
                      maxLength={100}
                      value={formState.name}
                      onChange={handleChange}
                      className="w-full bg-makini-ice/30 border-b-2 border-makini-soft/30 py-3 text-makini-navy focus:outline-none focus:border-makini-royal transition-all duration-300 placeholder-makini-navy/30"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="group/input">
                    <label htmlFor="phone" className="block text-xs uppercase tracking-widest text-makini-navy/60 mb-2 font-bold">Phone Number</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      name="phone"
                      required
                      maxLength={50}
                      value={formState.phone}
                      onChange={handleChange}
                      className="w-full bg-makini-ice/30 border-b-2 border-makini-soft/30 py-3 text-makini-navy focus:outline-none focus:border-makini-royal transition-all duration-300 placeholder-makini-navy/30"
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>
                </div>

                <div className="group/input">
                  <label htmlFor="email" className="block text-xs uppercase tracking-widest text-makini-navy/60 mb-2 font-bold">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email"
                    required
                    maxLength={100}
                    value={formState.email}
                    onChange={handleChange}
                    className="w-full bg-makini-ice/30 border-b-2 border-makini-soft/30 py-3 text-makini-navy focus:outline-none focus:border-makini-royal transition-all duration-300 placeholder-makini-navy/30"
                    placeholder="john@firm.com"
                  />
                </div>

                <div className="group/input">
                  <label htmlFor="inquiry" className="block text-xs uppercase tracking-widest text-makini-navy/60 mb-2 font-bold">Inquiry</label>
                  <textarea 
                    id="inquiry" 
                    name="inquiry"
                    required
                    maxLength={2000}
                    value={formState.inquiry}
                    onChange={handleChange}
                    rows={4}
                    className="w-full bg-makini-ice/30 border-b-2 border-makini-soft/30 py-3 text-makini-navy focus:outline-none focus:border-makini-royal transition-all duration-300 placeholder-makini-navy/30 resize-none"
                    placeholder="Tell us about your workflow needs..."
                  ></textarea>
                </div>

                <div className="pt-6">
                  <button 
                    type="submit" 
                    disabled={status === 'submitting'}
                    className="w-full bg-makini-royal text-white font-bold py-4 px-8 hover:bg-makini-navy hover:shadow-lg hover:-translate-y-1 transition-all duration-300 ease-out flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed uppercase tracking-[0.2em] text-xs rounded-sm"
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
                    <p className="text-red-500 text-xs mt-4 text-center uppercase tracking-widest">
                      Transmission failed. Please try again or email directly.
                    </p>
                  )}
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};