import React from 'react';
import { Send, Mail, MapPin, Globe } from 'lucide-react';
import { Reveal } from './Reveal';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-white/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <Reveal width="100%">
            <div>
              <h2 className="text-4xl md:text-5xl font-serif text-makini-navy mb-8">
                If you're deploying AI in Africa, <span className="italic font-normal">talk to us first.</span>
              </h2>
              <p className="text-xl text-makini-navy/60 mb-12 leading-relaxed">
                We partner with labs, governments, and enterprise teams to ensure their technology is safe for the next billion users.
              </p>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-makini-royal/10 flex items-center justify-center">
                    <Mail className="w-5 h-5 text-makini-royal" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-makini-navy/40">Email</p>
                    <p className="font-medium">hello@makini.ai</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-makini-royal/10 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-makini-royal" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-makini-navy/40">Location</p>
                    <p className="font-medium">Nairobi, Kenya</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-makini-royal/10 flex items-center justify-center">
                    <Globe className="w-5 h-5 text-makini-royal" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-makini-navy/40">Global Reach</p>
                    <p className="font-medium">Serving 40+ African nations</p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal width="100%" delay={0.2}>
            <div className="glass p-8 md:p-12 rounded-[2rem] border-white/60 shadow-2xl">
              <form name="contact" method="POST" data-netlify="true" className="space-y-6">
                <input type="hidden" name="form-name" value="contact" />
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-makini-navy/60">Full Name</label>
                    <input 
                      type="text" 
                      name="name"
                      required
                      className="w-full px-6 py-4 bg-white/50 rounded-2xl border border-makini-soft/20 focus:outline-none focus:border-makini-royal transition-colors"
                      placeholder="Jane Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-makini-navy/60">Email Address</label>
                    <input 
                      type="email" 
                      name="email"
                      required
                      className="w-full px-6 py-4 bg-white/50 rounded-2xl border border-makini-soft/20 focus:outline-none focus:border-makini-royal transition-colors"
                      placeholder="jane@organization.com"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-makini-navy/60">Organization</label>
                  <input 
                    type="text" 
                    name="organization"
                    required
                    className="w-full px-6 py-4 bg-white/50 rounded-2xl border border-makini-soft/20 focus:outline-none focus:border-makini-royal transition-colors"
                    placeholder="AI Lab / Government Agency"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-makini-navy/60">Message</label>
                  <textarea 
                    name="message"
                    required
                    rows={4}
                    className="w-full px-6 py-4 bg-white/50 rounded-2xl border border-makini-soft/20 focus:outline-none focus:border-makini-royal transition-colors resize-none"
                    placeholder="How can we help you evaluate your models?"
                  ></textarea>
                </div>
                <button 
                  type="submit"
                  className="w-full py-5 bg-makini-royal text-white rounded-2xl font-bold hover:bg-makini-navy transition-all hover:shadow-xl flex items-center justify-center gap-2 group"
                >
                  Send Inquiry
                  <Send className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </button>
              </form>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};