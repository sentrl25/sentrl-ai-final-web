import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'full' | 'icon';
}

export const Logo: React.FC<LogoProps> = ({ className = '', variant = 'full' }) => {
  return (
    <div className={`flex items-center gap-4 select-none group ${className}`}>
      {/* Icon Mark */}
      <div className="relative w-12 h-12 flex items-center justify-center transform group-hover:scale-105 transition-transform duration-500">
        {/* Ambient Glow */}
        <div className="absolute inset-0 bg-sentrl-cyan/20 blur-xl rounded-full opacity-50 group-hover:opacity-100 transition-opacity duration-700 animate-pulse-slow"></div>
        
        <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible z-10">
          <defs>
             <linearGradient id="sentrlGradient" x1="0%" y1="0%" x2="100%" y2="100%">
               <stop offset="0%" stopColor="#20E0E0" />
               <stop offset="50%" stopColor="#4DA3FF" />
               <stop offset="100%" stopColor="#20E0E0" />
             </linearGradient>
             <linearGradient id="boltGradient" x1="0%" y1="0%" x2="100%" y2="100%">
               <stop offset="0%" stopColor="#FFFFFF" />
               <stop offset="30%" stopColor="#EAF6FF" />
               <stop offset="100%" stopColor="#20E0E0" />
             </linearGradient>
             <filter id="glowEffect" x="-50%" y="-50%" width="200%" height="200%">
               <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
               <feMerge>
                 <feMergeNode in="coloredBlur"/>
                 <feMergeNode in="SourceGraphic"/>
               </feMerge>
             </filter>
             <filter id="boltGlow" x="-50%" y="-50%" width="200%" height="200%">
               <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
               <feFlood floodColor="#20E0E0" result="glowColor" />
               <feComposite in="glowColor" in2="coloredBlur" operator="in" result="coloredBlur" />
               <feMerge>
                 <feMergeNode in="coloredBlur"/>
                 <feMergeNode in="SourceGraphic"/>
               </feMerge>
             </filter>
          </defs>
          
          {/* Dynamic Background Geometrics - Rotating Rings */}
          <g className="origin-center animate-[spin_8s_linear_infinite] opacity-40 text-sentrl-aqua">
             {/* Broken Outer Ring */}
             <path d="M50 5 A45 45 0 0 1 95 50" fill="none" stroke="currentColor" strokeWidth="0.5" />
             <path d="M50 95 A45 45 0 0 1 5 50" fill="none" stroke="currentColor" strokeWidth="0.5" />
          </g>

          <g className="origin-center animate-[spin_12s_linear_infinite_reverse] opacity-30 text-sentrl-tech">
             {/* Inner Hexagonal Fragments */}
             <path d="M20 35 L15 50 L20 65" fill="none" stroke="currentColor" strokeWidth="1" />
             <path d="M80 65 L85 50 L80 35" fill="none" stroke="currentColor" strokeWidth="1" />
          </g>
          
          {/* Main Frame - Abstracted Shield/Hex */}
          <path 
            d="M50 12 L85 28 L85 62 L50 88 L15 62 L15 28 Z" 
            fill="none" 
            stroke="url(#sentrlGradient)" 
            strokeWidth="1.5"
            strokeLinejoin="round"
            filter="url(#glowEffect)"
            className="drop-shadow-[0_0_8px_rgba(32,224,224,0.4)]"
          />

          {/* Tech Nodes at Vertices */}
          <g fill="#20E0E0">
            <circle cx="50" cy="12" r="1.5" />
            <circle cx="85" cy="28" r="1.5" />
            <circle cx="85" cy="62" r="1.5" />
            <circle cx="50" cy="88" r="1.5" />
            <circle cx="15" cy="62" r="1.5" />
            <circle cx="15" cy="28" r="1.5" />
          </g>
          
          {/* Sharper, Sexier Lightning Bolt */}
          <path 
            d="M58 22 L35 54 H50 L42 82 L70 45 H52 L58 22 Z" 
            fill="url(#boltGradient)"
            stroke="none"
            filter="url(#boltGlow)"
            className="drop-shadow-[0_0_15px_rgba(32,224,224,0.9)] group-hover:drop-shadow-[0_0_25px_rgba(32,224,224,1)] transition-all duration-300"
          />
        </svg>
      </div>

      {/* Text Wordmark - Futuristic & Sexy */}
      {variant === 'full' && (
        <div className="flex flex-col justify-center h-full relative">
          <div className="relative">
             <span className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-sentrl-white via-sentrl-cyan to-sentrl-white font-sans tracking-[0.2em] leading-none drop-shadow-[0_0_10px_rgba(32,224,224,0.3)]">
              SENTRL
            </span>
            {/* Subtle overlay glint effect */}
            <span className="absolute inset-0 text-2xl font-black text-white/10 font-sans tracking-[0.2em] leading-none animate-pulse opacity-50" aria-hidden="true">
              SENTRL
            </span>
          </div>
          {/* Tech Underscore */}
          <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-sentrl-cyan to-transparent mt-1 opacity-50"></div>
        </div>
      )}
    </div>
  );
};