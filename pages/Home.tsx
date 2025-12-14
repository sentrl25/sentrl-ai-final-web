import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Cpu, Network, Shield, Zap } from 'lucide-react';

export const Home: React.FC = () => {
  return (
    <div className="relative">
      {/* Localized Glow for Hero (adds extra punch on top of global bg) */}
      <div className="absolute top-0 left-0 w-full h-[800px] bg-aurora-gradient opacity-20 pointer-events-none z-0"></div>

      {/* HERO SECTION */}
      <section className="relative z-10 min-h-[90vh] flex items-center">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-sentrl-cyan/30 bg-sentrl-cyan/5 text-sentrl-cyan text-xs font-mono tracking-widest uppercase animate-pulse-slow backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-sentrl-cyan"></span>
              System Online
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-sentrl-white leading-tight">
              SENTRLISE <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sentrl-cyan to-sentrl-tech text-glow">
                YOUR BUSINESS
              </span>
            </h1>
            
            <p className="text-xl text-sentrl-grey font-light max-w-lg leading-relaxed border-l-2 border-sentrl-cyan pl-6 bg-sentrl-void/30 backdrop-blur-sm p-4 rounded-r-lg">
              Automate. Operate. Dominate. <br/>
              We engineer intelligent infrastructure for total control, visibility, and scale.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link to="/contact" className="bg-sentrl-cyan text-sentrl-void px-8 py-4 font-bold uppercase tracking-widest hover:bg-sentrl-aqua hover:shadow-[0_0_30px_rgba(32,224,224,0.4)] transition-all text-center">
                Initialise System
              </Link>
              <Link to="/capabilities" className="border border-sentrl-cyan/50 text-sentrl-cyan px-8 py-4 font-bold uppercase tracking-widest hover:bg-sentrl-cyan/10 transition-all text-center backdrop-blur-sm">
                Explore Logic
              </Link>
            </div>
          </div>

          <div className="relative h-[400px] lg:h-[600px] flex items-center justify-center">
            {/* Abstract Geometric HUD */}
            <div className="relative w-64 h-64 md:w-96 md:h-96">
              <div className="absolute inset-0 border-2 border-sentrl-cyan/20 rounded-full animate-[spin_10s_linear_infinite]"></div>
              <div className="absolute inset-4 border border-sentrl-tech/30 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>
              
              {/* Spinning Hex Ring */}
               <div className="absolute inset-[-20px] opacity-20 animate-spin-slow">
                 <svg viewBox="0 0 100 100" className="w-full h-full text-sentrl-cyan fill-none stroke-current">
                    <path d="M50 0 L93 25 V75 L50 100 L7 75 V25 Z" strokeDasharray="5,5" />
                 </svg>
               </div>

              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-32 h-32 bg-sentrl-cyan/10 blur-xl rounded-full animate-pulse"></div>
                <Zap size={64} className="text-sentrl-cyan relative z-10 drop-shadow-[0_0_15px_rgba(32,224,224,0.8)]" />
              </div>
              
              {/* Floating Data Points */}
              <div className="absolute -top-10 -right-10 glass-panel p-4 rounded border-l-2 border-sentrl-cyan animate-blob animation-delay-2000">
                <span className="block text-xs text-sentrl-grey uppercase tracking-widest">System Load</span>
                <span className="text-2xl font-mono text-sentrl-cyan">98.4%</span>
              </div>
               <div className="absolute -bottom-5 -left-10 glass-panel p-4 rounded border-r-2 border-sentrl-tech animate-blob">
                <span className="block text-xs text-sentrl-grey uppercase tracking-widest">Efficiency</span>
                <span className="text-2xl font-mono text-sentrl-tech">+340%</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* INTRODUCTION SECTION */}
      <section className="py-24 bg-sentrl-midnight/60 backdrop-blur-sm relative overflow-hidden border-y border-sentrl-cyan/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 border border-sentrl-cyan/10 bg-sentrl-carbon/40 hover:bg-sentrl-carbon/80 hover:border-sentrl-cyan/50 transition-all duration-300 group rounded-lg">
              <Cpu className="text-sentrl-cyan mb-6 group-hover:scale-110 transition-transform drop-shadow-[0_0_10px_rgba(32,224,224,0.4)]" size={40} />
              <h3 className="text-xl font-bold text-sentrl-white mb-4">Systems Engineering</h3>
              <p className="text-sentrl-grey/80 leading-relaxed">
                Structured architecture replacing ad-hoc chaos. We build resilient backbones for enterprise operations.
              </p>
            </div>
            <div className="p-8 border border-sentrl-cyan/10 bg-sentrl-carbon/40 hover:bg-sentrl-carbon/80 hover:border-sentrl-cyan/50 transition-all duration-300 group rounded-lg">
              <Network className="text-sentrl-tech mb-6 group-hover:scale-110 transition-transform drop-shadow-[0_0_10px_rgba(77,163,255,0.4)]" size={40} />
              <h3 className="text-xl font-bold text-sentrl-white mb-4">AI Automation</h3>
              <p className="text-sentrl-grey/80 leading-relaxed">
                Intelligent workflows that scale indefinitely. Reduce manual overhead and eliminate human error.
              </p>
            </div>
            <div className="p-8 border border-sentrl-cyan/10 bg-sentrl-carbon/40 hover:bg-sentrl-carbon/80 hover:border-sentrl-cyan/50 transition-all duration-300 group rounded-lg">
              <Shield className="text-sentrl-soft mb-6 group-hover:scale-110 transition-transform drop-shadow-[0_0_10px_rgba(107,182,255,0.4)]" size={40} />
              <h3 className="text-xl font-bold text-sentrl-white mb-4">Operational Control</h3>
              <p className="text-sentrl-grey/80 leading-relaxed">
                Total visibility dashboards. See every metric, every process, and every outcome in real-time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA STRIP */}
      <section className="py-16 border-y border-sentrl-cyan/20 bg-sentrl-void/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="text-3xl font-bold text-sentrl-white mb-2">Ready to dominate your sector?</h2>
            <p className="text-sentrl-grey">Deploy intelligent infrastructure today.</p>
          </div>
          <Link to="/contact" className="group flex items-center gap-4 text-sentrl-cyan font-bold uppercase tracking-widest hover:text-sentrl-white transition-colors">
            Start Deployment <ArrowRight className="group-hover:translate-x-2 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  );
};