import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Reveal } from './Reveal';

export const FAQ: React.FC = () => {
  const faqs = [
    {
      question: "Why do African languages need separate evaluation?",
      answer: "Direct translation of safety benchmarks fails because cultural context, idioms, and harm categories differ significantly. A model that is safe in English can still generate tribal hate speech or dangerous medical advice in Swahili because it wasn't trained or tested on those specific linguistic risks."
    },
    {
      question: "Which languages do you currently support?",
      answer: "We have deep benchmarking data for Swahili, Zulu, Hausa, Amharic, and Yoruba. Our roadmap includes expanding to the top 20 most spoken African languages by the end of the year."
    },
    {
      question: "How do you collect your evaluation data?",
      answer: "We work with a network of 500+ certified native speakers and linguists across the continent who annotate sentences for bias, toxicity, and cultural relevance. This human-in-the-loop approach ensures our benchmarks are grounded in real-world usage."
    },
    {
      question: "Can we integrate your tools into our existing CI/CD pipeline?",
      answer: "Yes. Our evaluation tools are available via API and can be integrated into your model development lifecycle to provide real-time safety scores before deployment."
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 bg-makini-ice">
      <div className="max-w-3xl mx-auto px-6">
        <Reveal width="100%">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif text-makini-navy mb-4">Frequently Asked Questions</h2>
            <p className="text-makini-navy/60">Everything you need to know about AI safety in Africa.</p>
          </div>
        </Reveal>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <Reveal key={index} width="100%" delay={index * 0.1}>
              <div className="glass rounded-2xl overflow-hidden border-white/60">
                <button 
                  className="w-full px-8 py-6 text-left flex justify-between items-center hover:bg-white/40 transition-colors"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                >
                  <span className="font-bold text-makini-navy">{faq.question}</span>
                  {openIndex === index ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                </button>
                {openIndex === index && (
                  <div className="px-8 pb-6 text-makini-navy/70 leading-relaxed animate-in fade-in slide-in-from-top-2">
                    {faq.answer}
                  </div>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
