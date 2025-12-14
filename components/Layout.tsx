import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Logo } from './Logo';
import { Menu, X, ArrowRight, Download, ShieldCheck, Linkedin, Twitter } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'About', path: '/about' },
    { name: 'Capabilities', path: '/capabilities' },
    { name: 'Insights', path: '/insights' },
    { name: 'Brand Portal', path: '/brand' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="min-h-screen bg-sentrl-void text-sentrl-grey font-sans selection:bg-sentrl-cyan selection:text-sentrl-void overflow-x-hidden relative">
      
      {/* --- GLOBAL DYNAMIC BACKGROUND LAYERS --- */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        
        {/* 1. Aurora Atmosphere (Moving Gradient Blobs) */}
        <div className="absolute top-[-20%] left-[-10%] w-[900px] h-[900px] bg-sentrl-cyan/5 rounded-full blur-[130px] animate-blob mix-blend-screen"></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[800px] h-[800px] bg-sentrl-tech/5 rounded-full blur-[130px] animate-blob animation-delay-2000 mix-blend-screen"></div>
        <div className="absolute top-[30%] right-[30%] w-[600px] h-[600px] bg-sentrl-aqua/5 rounded-full blur-[100px] animate-blob animation-delay-4000 mix-blend-screen opacity-50"></div>
        
        {/* 2. Structured Grid (Engineering feel) */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(32,224,224,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(32,224,224,0.03)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_100%)] opacity-70"></div>
        
        {/* 3. Subtle Geometric Accents (Floating Hexagons/Lines) */}
        <svg className="absolute inset-0 w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
          <pattern id="hex-pattern" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
             <path d="M100 0 L150 25 V75 L100 100 L50 75 V25 Z" fill="none" stroke="#20E0E0" strokeWidth="0.5" opacity="0.3" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#hex-pattern)" mask="url(#fade-mask)" />
          <defs>
            <radialGradient id="fade-mask">
              <stop offset="0%" stopColor="white" stopOpacity="0" />
              <stop offset="50%" stopColor="white" stopOpacity="0.5" />
              <stop offset="100%" stopColor="white" stopOpacity="0" />
            </radialGradient>
          </defs>
        </svg>

      </div>

      {/* Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 glass-panel border-b border-sentrl-cyan/10">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link to="/" className="hover:opacity-80 transition-opacity">
            <Logo />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium tracking-wide uppercase hover:text-sentrl-cyan transition-colors ${
                  isActive(link.path) ? 'text-sentrl-cyan drop-shadow-[0_0_8px_rgba(32,224,224,0.4)]' : 'text-sentrl-grey'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contact"
              className="bg-sentrl-cyan text-sentrl-void px-6 py-2 font-bold uppercase text-sm tracking-wider hover:bg-sentrl-aqua hover:shadow-[0_0_20px_rgba(32,224,224,0.4)] transition-all transform hover:-translate-y-0.5 flex items-center gap-2"
            >
              Contact <ArrowRight size={16} />
            </Link>
          </nav>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-sentrl-cyan"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Nav Overlay */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-20 left-0 right-0 bg-sentrl-midnight border-b border-sentrl-cyan/20 p-6 flex flex-col gap-6 shadow-2xl">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="text-lg font-medium text-sentrl-white hover:text-sentrl-cyan"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setIsMenuOpen(false)}
              className="w-full text-center bg-sentrl-cyan text-sentrl-void px-6 py-3 font-bold uppercase tracking-wider"
            >
              Contact Us
            </Link>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="pt-20 relative z-10">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-sentrl-midnight/80 backdrop-blur-md border-t border-sentrl-cyan/10 pt-20 pb-10 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 md:col-span-2">
              <Logo className="mb-6" />
              <p className="max-w-md text-sentrl-grey/70 leading-relaxed mb-6">
                SENTRL engineers intelligent infrastructure — combining systems engineering, AI automation, and operational architecture to give businesses total control.
              </p>
              <div className="flex gap-4">
                <a href="#" className="p-2 border border-sentrl-cyan/20 text-sentrl-cyan hover:bg-sentrl-cyan hover:text-sentrl-void transition-colors">
                  <Linkedin size={20} />
                </a>
                <a href="#" className="p-2 border border-sentrl-cyan/20 text-sentrl-cyan hover:bg-sentrl-cyan hover:text-sentrl-void transition-colors">
                  <Twitter size={20} />
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-sentrl-white font-bold uppercase tracking-widest mb-6 border-l-2 border-sentrl-cyan pl-3">Sitemap</h4>
              <ul className="space-y-4">
                <li><Link to="/about" className="hover:text-sentrl-cyan transition-colors">About SENTRL</Link></li>
                <li><Link to="/capabilities" className="hover:text-sentrl-cyan transition-colors">Capabilities</Link></li>
                <li><Link to="/insights" className="hover:text-sentrl-cyan transition-colors">Insights</Link></li>
                <li><Link to="/contact" className="hover:text-sentrl-cyan transition-colors">Contact</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-sentrl-white font-bold uppercase tracking-widest mb-6 border-l-2 border-sentrl-cyan pl-3">Legal</h4>
              <ul className="space-y-4">
                <li><Link to="/brand" className="hover:text-sentrl-cyan transition-colors">Brand Assets</Link></li>
                <li><span className="cursor-pointer hover:text-sentrl-cyan transition-colors">Privacy Policy</span></li>
                <li><span className="cursor-pointer hover:text-sentrl-cyan transition-colors">Terms of Service</span></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-sentrl-cyan/5 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-sentrl-grey/40">
            <p>&copy; {new Date().getFullYear()} SENTRL. All rights reserved.</p>
            <p className="mt-2 md:mt-0 font-mono text-xs">Systems Engineering Network for Testing, Research & Laboratories</p>
          </div>
        </div>
      </footer>
    </div>
  );
};