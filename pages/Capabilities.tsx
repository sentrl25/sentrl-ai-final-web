import React from 'react';
import { BarChart3, Bot, Globe, Layers, Lock, Zap } from 'lucide-react';

export const Capabilities: React.FC = () => {
  const capabilities = [
    {
      icon: <Bot size={32} />,
      title: "AI Workforce Augmentation",
      desc: "Deploy autonomous agents to handle repetitive cognitive tasks, freeing human capital for strategic decisions.",
      stat: "40-60%",
      statLabel: "Labour Cost Reduction"
    },
    {
      icon: <Layers size={32} />,
      title: "Full-Stack Automation",
      desc: "End-to-end workflow automation connecting CRM, ERP, and logistics into a single unified stream.",
      stat: "3x",
      statLabel: "Throughput Velocity"
    },
    {
      icon: <BarChart3 size={32} />,
      title: "Predictive Intelligence",
      desc: "Forecasting models that utilize historical data to predict market shifts and inventory needs.",
      stat: "92%",
      statLabel: "Forecast Accuracy"
    },
    {
      icon: <Globe size={32} />,
      title: "Global Scalability",
      desc: "Cloud-native infrastructure designed to handle infinite load without architectural restructuring.",
      stat: "Infinite",
      statLabel: "Growth Ceiling"
    },
    {
      icon: <Lock size={32} />,
      title: "Sovereign Data Control",
      desc: "Private cloud deployments ensuring your proprietary data never trains public models.",
      stat: "100%",
      statLabel: "Data Ownership"
    },
    {
      icon: <Zap size={32} />,
      title: "Rapid Prototyping",
      desc: "From concept to deployed mvp in weeks, not months, using our pre-built modules.",
      stat: "Weeks",
      statLabel: "Time to Market"
    }
  ];

  return (
    <div className="pb-20">
      {/* Hero */}
      <section className="bg-sentrl-midnight py-20 border-b border-sentrl-cyan/10">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-sentrl-white mb-6">
            CAPABILITIES & <span className="text-sentrl-cyan">PERFORMANCE</span>
          </h1>
          <p className="text-xl text-sentrl-grey max-w-2xl mx-auto">
            Metrics that matter. We measure success in efficiency gains, cost reduction, and speed.
          </p>
        </div>
      </section>

      {/* Grid */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {capabilities.map((cap, idx) => (
            <div key={idx} className="glass-panel p-8 rounded-lg hover:border-sentrl-cyan/50 transition-all duration-300 group">
              <div className="flex justify-between items-start mb-6">
                <div className="p-3 bg-sentrl-cyan/10 rounded text-sentrl-cyan group-hover:bg-sentrl-cyan group-hover:text-sentrl-void transition-colors">
                  {cap.icon}
                </div>
                <div className="text-right">
                  <span className="block text-2xl font-bold text-sentrl-white">{cap.stat}</span>
                  <span className="text-xs uppercase tracking-wider text-sentrl-grey/70">{cap.statLabel}</span>
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-sentrl-white mb-3">{cap.title}</h3>
              <p className="text-sentrl-grey text-sm leading-relaxed">{cap.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Impact Section */}
      <section className="bg-sentrl-void py-20 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-4xl bg-sentrl-cyan/5 blur-3xl pointer-events-none"></div>
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
           <h2 className="text-3xl font-bold text-sentrl-white mb-8">The Compound Effect</h2>
           <p className="text-lg text-sentrl-grey leading-relaxed mb-10">
             Implementing SENTRL systems creates a flywheel effect. As automation handles the baseline, your human talent focuses on expansion. This creates a cycle of reduced costs and increasing revenues that radically improves EBITA.
           </p>
           
           <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center border-t border-sentrl-cyan/20 pt-10">
             <div>
               <div className="text-3xl font-mono font-bold text-sentrl-plasma mb-1">+24%</div>
               <div className="text-xs text-sentrl-grey uppercase">Margin Increase</div>
             </div>
             <div>
               <div className="text-3xl font-mono font-bold text-sentrl-plasma mb-1">-35%</div>
               <div className="text-xs text-sentrl-grey uppercase">OpEx Reduction</div>
             </div>
             <div>
               <div className="text-3xl font-mono font-bold text-sentrl-plasma mb-1">Zero</div>
               <div className="text-xs text-sentrl-grey uppercase">Downtime</div>
             </div>
             <div>
               <div className="text-3xl font-mono font-bold text-sentrl-plasma mb-1">10x</div>
               <div className="text-xs text-sentrl-grey uppercase">Scalability</div>
             </div>
           </div>
        </div>
      </section>
    </div>
  );
};