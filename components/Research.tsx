import React from 'react';
import { BookOpen, Users, Globe } from 'lucide-react';
import { Reveal } from './Reveal';

export const Research: React.FC = () => {
  const papers = [
    {
      title: "Measuring Toxicity in Swahili Social Media",
      author: "Makini AI Research",
      year: "2024",
      tags: ["NLP", "Safety"]
    },
    {
      title: "Regional Bias in Large Language Models",
      author: "Makini AI Research",
      year: "2023",
      tags: ["Evaluation", "Bias"]
    },
    {
      title: "Low-Resource Language Benchmarking",
      author: "Makini AI Research",
      year: "2024",
      tags: ["Datasets", "Africa"]
    }
  ];

  return (
    <section id="research" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <Reveal width="100%">
            <div>
              <span className="text-makini-royal uppercase tracking-[0.2em] text-xs font-bold mb-4 block">Our Research</span>
              <h2 className="text-4xl md:text-5xl font-serif text-makini-navy">
                Open science for <span className="italic font-normal">safer AI.</span>
              </h2>
            </div>
          </Reveal>
          <Reveal width="fit-content" delay={0.2}>
            <div className="mt-8 md:mt-0">
              <a href="#" className="text-makini-royal font-bold border-b-2 border-makini-royal/20 pb-1 hover:border-makini-royal transition-all">View all publications</a>
            </div>
          </Reveal>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {papers.map((paper, i) => (
            <Reveal key={i} width="100%" delay={i * 0.1}>
              <div className="glass p-8 rounded-3xl border-makini-soft/10 hover:shadow-xl transition-all h-full">
                <div className="flex gap-2 mb-6">
                  {paper.tags.map(tag => (
                    <span key={tag} className="text-[10px] font-bold uppercase tracking-wider bg-makini-ice px-2 py-1 rounded text-makini-royal">{tag}</span>
                  ))}
                </div>
                <h3 className="text-xl font-serif mb-4 leading-tight">{paper.title}</h3>
                <div className="flex items-center justify-between mt-8 pt-6 border-t border-makini-navy/5">
                  <span className="text-sm opacity-60">{paper.author}</span>
                  <span className="text-sm font-bold">{paper.year}</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};