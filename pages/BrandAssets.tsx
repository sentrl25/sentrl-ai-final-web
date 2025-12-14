import React from 'react';
import { Download, Copy, Palette } from 'lucide-react';
import { Logo } from '../components/Logo';

export const BrandAssets: React.FC = () => {
  return (
    <div className="pb-20">
      <section className="bg-sentrl-midnight py-20 border-b border-sentrl-cyan/10">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-4xl font-bold text-sentrl-white mb-6">BRAND <span className="text-sentrl-cyan">PACKAGE</span></h1>
          <p className="text-xl text-sentrl-grey">Official guidelines, logos, and colour systems for SENTRL partners.</p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-16 space-y-20">
        
        {/* LOGOS */}
        <div>
          <h2 className="text-2xl font-bold text-sentrl-white mb-8 border-l-4 border-sentrl-cyan pl-4">Identity Assets</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="glass-panel p-10 flex flex-col items-center justify-center gap-8 rounded-lg">
               <div className="bg-sentrl-void p-8 rounded w-full flex justify-center border border-sentrl-cyan/10">
                 <Logo variant="full" />
               </div>
               <div className="flex gap-4 w-full">
                 <button className="flex-1 border border-sentrl-cyan/30 text-sentrl-cyan py-3 px-4 uppercase text-xs font-bold tracking-wider hover:bg-sentrl-cyan/10 transition-colors flex items-center justify-center gap-2">
                   <Download size={14} /> SVG
                 </button>
                 <button className="flex-1 border border-sentrl-cyan/30 text-sentrl-cyan py-3 px-4 uppercase text-xs font-bold tracking-wider hover:bg-sentrl-cyan/10 transition-colors flex items-center justify-center gap-2">
                   <Download size={14} /> PNG
                 </button>
               </div>
               <p className="text-xs text-sentrl-grey uppercase tracking-widest">Dark Background (Primary)</p>
            </div>

            <div className="glass-panel p-10 flex flex-col items-center justify-center gap-8 rounded-lg">
               <div className="bg-sentrl-white p-8 rounded w-full flex justify-center border border-gray-200">
                 {/* Visual simulation of light mode logo usage matching new design */}
                 <div className="flex items-center gap-3">
                   <div className="relative w-12 h-12 flex items-center justify-center">
                     <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible">
                       <path 
                         d="M50 12 L85 28 L85 62 L50 88 L15 62 L15 28 Z" 
                         fill="none" 
                         stroke="#06080A" 
                         strokeWidth="1.5"
                       />
                       <g fill="#06080A">
                         <circle cx="50" cy="12" r="1.5" />
                         <circle cx="85" cy="28" r="1.5" />
                         <circle cx="85" cy="62" r="1.5" />
                         <circle cx="50" cy="88" r="1.5" />
                         <circle cx="15" cy="62" r="1.5" />
                         <circle cx="15" cy="28" r="1.5" />
                       </g>
                       <path 
                         d="M58 22 L35 54 H50 L42 82 L70 45 H52 L58 22 Z" 
                         fill="#06080A"
                       />
                     </svg>
                   </div>
                   <span className="text-2xl font-black text-[#06080A] font-sans tracking-[0.2em] leading-none">SENTRL</span>
                 </div>
               </div>
               <div className="flex gap-4 w-full">
                 <button className="flex-1 border border-sentrl-cyan/30 text-sentrl-cyan py-3 px-4 uppercase text-xs font-bold tracking-wider hover:bg-sentrl-cyan/10 transition-colors flex items-center justify-center gap-2">
                   <Download size={14} /> SVG
                 </button>
                 <button className="flex-1 border border-sentrl-cyan/30 text-sentrl-cyan py-3 px-4 uppercase text-xs font-bold tracking-wider hover:bg-sentrl-cyan/10 transition-colors flex items-center justify-center gap-2">
                   <Download size={14} /> PNG
                 </button>
               </div>
               <p className="text-xs text-sentrl-grey uppercase tracking-widest">Light Background (Stationery)</p>
            </div>
          </div>
        </div>

        {/* COLORS */}
        <div>
          <h2 className="text-2xl font-bold text-sentrl-white mb-8 border-l-4 border-sentrl-cyan pl-4">Colour System</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <div className="h-24 bg-sentrl-cyan rounded-lg shadow-[0_0_20px_rgba(32,224,224,0.3)]"></div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-sentrl-white font-bold">Electric Cyan</span>
                <span className="font-mono text-sentrl-grey">#20E0E0</span>
              </div>
              <p className="text-xs text-sentrl-grey/60">Core Energy, Logos, CTAs</p>
            </div>
            
            <div className="space-y-2">
              <div className="h-24 bg-sentrl-aqua rounded-lg"></div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-sentrl-white font-bold">Laser Aqua</span>
                <span className="font-mono text-sentrl-grey">#3FE3E8</span>
              </div>
              <p className="text-xs text-sentrl-grey/60">Hover States, Accents</p>
            </div>

            <div className="space-y-2">
              <div className="h-24 bg-sentrl-tech rounded-lg"></div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-sentrl-white font-bold">Neon Tech Blue</span>
                <span className="font-mono text-sentrl-grey">#4DA3FF</span>
              </div>
              <p className="text-xs text-sentrl-grey/60">Data Visuals, Dividers</p>
            </div>

             <div className="space-y-2">
              <div className="h-24 bg-sentrl-void rounded-lg border border-white/10"></div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-sentrl-white font-bold">Deep Void</span>
                <span className="font-mono text-sentrl-grey">#06080A</span>
              </div>
              <p className="text-xs text-sentrl-grey/60">Primary Background</p>
            </div>

            <div className="space-y-2">
              <div className="h-24 bg-sentrl-white rounded-lg"></div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-sentrl-white font-bold">Soft White</span>
                <span className="font-mono text-sentrl-grey">#EAF6FF</span>
              </div>
              <p className="text-xs text-sentrl-grey/60">Headings, Primary Text</p>
            </div>
          </div>
        </div>

        {/* TYPOGRAPHY */}
        <div>
           <h2 className="text-2xl font-bold text-sentrl-white mb-8 border-l-4 border-sentrl-cyan pl-4">Typography</h2>
           <div className="glass-panel p-8 rounded-lg space-y-8">
             <div>
               <p className="text-xs text-sentrl-grey uppercase mb-2">Primary Heading Font</p>
               <h3 className="text-4xl font-sans font-bold text-sentrl-white">Inter Display</h3>
               <p className="text-lg text-sentrl-grey mt-2">ABCDEFGHIJKLMNOPQRSTUVWXYZ <br/> abcdefghijklmnopqrstuvwxyz 1234567890</p>
             </div>
             <div className="w-full h-px bg-sentrl-cyan/20"></div>
             <div>
               <p className="text-xs text-sentrl-grey uppercase mb-2">Data & Monospace Font</p>
               <h3 className="text-4xl font-mono text-sentrl-cyan">JetBrains Mono</h3>
               <p className="text-lg text-sentrl-grey mt-2 font-mono">ABCDEFGHIJKLMNOPQRSTUVWXYZ <br/> abcdefghijklmnopqrstuvwxyz 1234567890</p>
             </div>
           </div>
        </div>

      </section>
    </div>
  );
};