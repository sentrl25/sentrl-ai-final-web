import React, { useState } from 'react';
import { Mail, MapPin, Send } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Construct mailto link
    const subject = `Inquiry from ${formData.company}: ${formData.name}`;
    const body = `Name: ${formData.name}%0D%0ACompany: ${formData.company}%0D%0AEmail: ${formData.email}%0D%0A%0D%0AMessage:%0D%0A${formData.message}`;
    
    window.location.href = `mailto:gday@sentrl.com.au?subject=${subject}&body=${body}`;
    
    setStatus('success');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen py-20 relative">
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Info Side */}
          <div>
            <h1 className="text-5xl font-bold text-sentrl-white mb-6">
              INITIALISE <br /> <span className="text-sentrl-cyan">SEQUENCE</span>
            </h1>
            <p className="text-xl text-sentrl-grey mb-12 border-l-2 border-sentrl-cyan pl-6">
              Ready to sentrlise your operations? Reach out to our engineering team to discuss your architecture.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="bg-sentrl-cyan/10 p-4 rounded-full text-sentrl-cyan">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-sentrl-white uppercase tracking-wider mb-1">Electronic Mail</h3>
                  <a href="mailto:gday@sentrl.com.au" className="text-sentrl-soft hover:text-sentrl-cyan transition-colors text-lg">
                    gday@sentrl.com.au
                  </a>
                  <p className="text-sm text-sentrl-grey/60 mt-1">Direct route to engineering.</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="bg-sentrl-cyan/10 p-4 rounded-full text-sentrl-cyan">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-sentrl-white uppercase tracking-wider mb-1">Operations Base</h3>
                  <p className="text-sentrl-grey">
                    Level 5, Tech Corridor<br />
                    Sydney, Australia 2000
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="bg-sentrl-carbon/80 border border-sentrl-cyan/20 p-8 md:p-12 rounded-lg backdrop-blur-sm neon-border">
            {status === 'success' ? (
              <div className="text-center py-20">
                <div className="inline-block p-6 bg-sentrl-cyan/20 rounded-full text-sentrl-cyan mb-6 animate-pulse">
                  <Send size={48} />
                </div>
                <h3 className="text-2xl font-bold text-sentrl-white mb-4">Transmission Prepared</h3>
                <p className="text-sentrl-grey mb-6">Opening your email client to finalise transmission...</p>
                <button 
                  onClick={() => setStatus('idle')}
                  className="text-sentrl-cyan uppercase font-bold text-sm tracking-widest hover:underline"
                >
                  Reset Form
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sentrl-grey text-xs uppercase tracking-widest mb-2">Identifier / Name</label>
                  <input 
                    type="text" 
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-sentrl-void border border-sentrl-cyan/20 p-4 text-sentrl-white focus:outline-none focus:border-sentrl-cyan focus:shadow-[0_0_10px_rgba(32,224,224,0.2)] transition-all"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label className="block text-sentrl-grey text-xs uppercase tracking-widest mb-2">Organisation</label>
                  <input 
                    type="text" 
                    name="company"
                    required
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full bg-sentrl-void border border-sentrl-cyan/20 p-4 text-sentrl-white focus:outline-none focus:border-sentrl-cyan focus:shadow-[0_0_10px_rgba(32,224,224,0.2)] transition-all"
                    placeholder="Acme Corp"
                  />
                </div>

                <div>
                  <label className="block text-sentrl-grey text-xs uppercase tracking-widest mb-2">Comms Frequency / Email</label>
                  <input 
                    type="email" 
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-sentrl-void border border-sentrl-cyan/20 p-4 text-sentrl-white focus:outline-none focus:border-sentrl-cyan focus:shadow-[0_0_10px_rgba(32,224,224,0.2)] transition-all"
                    placeholder="john@acme.com"
                  />
                </div>

                <div>
                  <label className="block text-sentrl-grey text-xs uppercase tracking-widest mb-2">Parameters / Message</label>
                  <textarea 
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-sentrl-void border border-sentrl-cyan/20 p-4 text-sentrl-white focus:outline-none focus:border-sentrl-cyan focus:shadow-[0_0_10px_rgba(32,224,224,0.2)] transition-all"
                    placeholder="We need to automate our logistics chain..."
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  className="w-full bg-sentrl-cyan text-sentrl-void py-4 font-bold uppercase tracking-widest hover:bg-sentrl-aqua hover:shadow-[0_0_20px_rgba(32,224,224,0.3)] transition-all flex items-center justify-center gap-3"
                >
                  <Send size={18} /> Transmit Inquiry
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </div>
  );
};