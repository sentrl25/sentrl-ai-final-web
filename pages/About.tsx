import React from 'react';
import { CheckCircle2 } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <div className="pt-10 pb-20">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 mb-20">
        <h1 className="text-4xl md:text-6xl font-bold text-sentrl-white mb-6">
          THE <span className="text-sentrl-cyan">SENTRL</span> STANDARD
        </h1>
        <p className="text-xl text-sentrl-grey max-w-2xl border-l-4 border-sentrl-cyan pl-6 py-2">
          We don't just consult. We architect the nervous system of your future enterprise.
        </p>
      </div>

      {/* Acronym Breakdown */}
      <div className="bg-sentrl-carbon border-y border-sentrl-cyan/10 py-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid gap-12">
            {[
              {
                letter: 'S',
                word: 'Systems',
                desc: 'Moving beyond isolated tasks to holistic, interconnected operational ecosystems.'
              },
              {
                letter: 'E',
                word: 'Engineering',
                desc: 'Applying rigorous scientific principles to business process construction.'
              },
              {
                letter: 'N',
                word: 'Network',
                desc: 'Creating fluid communication pathways between data, AI, and human operators.'
              },
              {
                letter: 'T',
                word: 'Testing',
                desc: 'Continuous validation protocols ensuring 99.9% reliability before deployment.'
              },
              {
                letter: 'R',
                word: 'Research',
                desc: 'Forward-looking R&D to integrate emerging tech before your competitors do.'
              },
              {
                letter: 'L',
                word: 'Laboratories',
                desc: 'Controlled environments for safe innovation and rapid prototyping.'
              }
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-6 md:gap-12 group">
                <div className="text-6xl md:text-8xl font-black text-sentrl-void text-stroke-cyan opacity-30 group-hover:opacity-100 transition-opacity select-none font-mono">
                  {item.letter}
                </div>
                <div className="pt-2 md:pt-6">
                  <h3 className="text-2xl font-bold text-sentrl-white mb-2">{item.word}</h3>
                  <p className="text-sentrl-grey leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Philosophy */}
      <div className="max-w-7xl mx-auto px-6 mt-20 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div>
           <h2 className="text-3xl font-bold text-sentrl-white mb-6">Disciplined Engineering. <br/><span className="text-sentrl-tech">Not Magic.</span></h2>
           <p className="text-sentrl-grey mb-6 leading-relaxed">
             The market is flooded with "AI solutions" that are little more than wrappers around chat bots. SENTRL takes a different approach. We treat your business as a machine.
           </p>
           <p className="text-sentrl-grey mb-8 leading-relaxed">
             We strip it down to its core logic, identify the friction points, and rebuild it with automated piping and intelligent routing. The result is a business that runs itself.
           </p>
           
           <ul className="space-y-4">
             {['Enterprise-Grade Security', 'Scalable Architecture', 'Zero-Trust Frameworks', 'Predictive Analytics'].map(feat => (
               <li key={feat} className="flex items-center gap-3 text-sentrl-white">
                 <CheckCircle2 className="text-sentrl-cyan" size={20} />
                 {feat}
               </li>
             ))}
           </ul>
        </div>
        <div className="h-full min-h-[400px] bg-sentrl-carbon border border-sentrl-cyan/20 relative p-8 flex flex-col justify-end overflow-hidden">
          <div className="absolute top-0 right-0 p-32 bg-sentrl-cyan/10 blur-[100px] rounded-full"></div>
          <div className="relative z-10">
            <h3 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sentrl-white to-sentrl-grey mb-2">100%</h3>
            <p className="text-sentrl-cyan font-mono uppercase tracking-widest text-sm mb-8">Operational Visibility</p>
            
            <h3 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sentrl-white to-sentrl-grey mb-2">24/7</h3>
            <p className="text-sentrl-tech font-mono uppercase tracking-widest text-sm">Automated Uptime</p>
          </div>
        </div>
      </div>
    </div>
  );
};