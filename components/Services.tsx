import React from 'react';
import { ShieldAlert, MessageSquare, TestTube2, BarChart3, Gavel } from 'lucide-react';
import { Reveal } from './Reveal';

export const Services: React.FC = () => {
  const products = [
    {
      id: '01',
      title: 'Bias Detection',
      description: '100K+ annotated sentences, Swahili and Zulu, 6 bias categories.',
      icon: ShieldAlert,
      featured: true,
      visual: (
        <div className="mt-6 space-y-4 p-4 bg-white/40 rounded-xl border border-white/60">
          <div className="space-y-2">
            <div className="flex justify-between text-[10px] font-bold uppercase">
              <span>Tribal Bias</span>
              <span className="text-red-500">82%</span>
            </div>
            <div className="progress-bar"><div className="progress-fill bg-red-500 w-[82%]"></div></div>
          </div>
          <div className="space-y-2">
            <div className="flex justify-between text-[10px] font-bold uppercase">
              <span>Gender Bias</span>
              <span className="text-orange-500">45%</span>
            </div>
            <div className="progress-bar"><div className="progress-fill bg-orange-500 w-[45%]"></div></div>
          </div>
          <div className="space-y-2">
            <div className="flex justify-between text-[10px] font-bold uppercase">
              <span>Regional Dialect</span>
              <span className="text-makini-royal">12%</span>
            </div>
            <div className="progress-bar"><div className="progress-fill bg-makini-royal w-[12%]"></div></div>
          </div>
        </div>
      )
    },
    {
      id: '02',
      title: 'Content Moderation Evaluation',
      description: 'Testing how models handle hate speech and harmful content in local contexts where direct translations fail.',
      icon: MessageSquare,
    },
    {
      id: '03',
      title: 'Model Accuracy Testing',
      description: 'Rigorous factual accuracy audits for models deployed in African markets, focusing on local history and geography.',
      icon: TestTube2,
    },
    {
      id: '04',
      title: 'Language Benchmarking',
      description: "Africa's equivalent of GLUE/HellaSwag. The definitive standard for measuring LLM performance in low-resource languages.",
      icon: BarChart3,
    },
    {
      id: '05',
      title: 'AI Governance and Policy Advisory',
      description: 'Helping governments and organizations build frameworks for responsible AI deployment across the continent.',
      icon: Gavel,
    }
  ];

  return (
    <section id="products" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <Reveal width="100%">
            <h2 className="text-4xl md:text-5xl font-serif text-makini-navy mb-6">
              Five tools. <span className="italic font-normal">One mission.</span>
            </h2>
            <p className="text-lg text-makini-navy/60 max-w-2xl">
              We provide the technical infrastructure needed to verify that AI models are safe, accurate, and fair for African users.
            </p>
          </Reveal>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, i) => (
            <Reveal 
              key={product.id}
              width="100%"
              delay={i * 0.1}
            >
              <div 
                className={`glass p-8 rounded-3xl flex flex-col h-full transition-all hover:shadow-xl hover:-translate-y-1 ${
                  product.featured ? 'lg:col-span-2 lg:flex-row gap-8 items-center' : ''
                }`}
              >
                <div className={product.featured ? 'flex-1' : ''}>
                  <div className="flex items-center gap-4 mb-6">
                    <span className="text-xs font-bold text-makini-royal/40">{product.id}</span>
                    <div className="w-12 h-12 rounded-2xl bg-makini-royal/10 flex items-center justify-center">
                      <product.icon className="w-6 h-6 text-makini-royal" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-serif mb-4">{product.title}</h3>
                  <p className="text-makini-navy/60 leading-relaxed">
                    {product.description}
                  </p>
                </div>
                {product.featured && (
                  <div className="flex-1 w-full">
                    {product.visual}
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