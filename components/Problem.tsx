
import React from 'react';
import { AlertTriangle, ShieldX, BarChartHorizontal } from 'lucide-react';
import { Reveal } from './Reveal';

export const Problem: React.FC = () => {
  const problems = [
    {
      title: "Content moderation is broken",
      description: "Models that pass safety filters in English often fail to detect toxicity, hate speech, and misinformation in African languages.",
      icon: AlertTriangle
    },
    {
      title: "Models are deployed untested",
      description: "Billions are spent on AI safety, but almost none of it is allocated to testing performance in the contexts where the next billion users live.",
      icon: ShieldX
    },
    {
      title: "No accountability, no measurement",
      description: "Without standardized benchmarks, labs cannot prove their models are safe for African markets, and regulators have no way to measure risk.",
      icon: BarChartHorizontal
    }
  ];

  return (
    <section id="problem" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <Reveal width="100%">
            <h2 className="text-4xl md:text-6xl font-serif text-makini-navy mb-8 max-w-4xl">
              You've spent billions making AI safe. <span className="italic font-normal text-makini-royal">Not for Africa.</span>
            </h2>
          </Reveal>
        </div>

        <div className="grid md:grid-cols-3 gap-12 text-center md:text-left">
          {problems.map((p, i) => (
            <Reveal key={i} width="100%" delay={i * 0.1}>
              <div className="space-y-6 flex flex-col items-center md:items-start">
                <div className="w-14 h-14 rounded-2xl bg-red-50 flex items-center justify-center">
                  <p.icon className="w-7 h-7 text-red-500" />
                </div>
                <h3 className="text-2xl font-serif">({i + 1}) {p.title}</h3>
                <p className="text-makini-navy/60 leading-relaxed">
                  {p.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
