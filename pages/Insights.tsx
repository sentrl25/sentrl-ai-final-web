import React from 'react';
import { ArrowRight, Calendar, Clock, User } from 'lucide-react';
import { Link } from 'react-router-dom';

const articles = [
  {
    id: 1,
    title: "Why Structured Systems Outperform Ad-Hoc Agility",
    excerpt: "The start-up mantra of 'move fast and break things' is a liability at scale. Here is why rigid systems engineering provides the true foundation for sustainable agility.",
    date: "12 Oct 2023",
    readTime: "4 min read",
    author: "Head of Research",
    tag: "Strategy"
  },
  {
    id: 2,
    title: "The Automation Paradox: Doing Less to Grow More",
    excerpt: "Counter-intuitively, removing human touchpoints from your core delivery loop increases customer satisfaction by reducing variance. Automation unlocks the growth curve.",
    date: "28 Sep 2023",
    readTime: "6 min read",
    author: "Lead Architect",
    tag: "Automation"
  },
  {
    id: 3,
    title: "Achieving the Impossible Projection",
    excerpt: "Most businesses set targets based on current capacity. We discuss how to invert the model: set the ambition, then engineer the infrastructure required to support it.",
    date: "15 Sep 2023",
    readTime: "5 min read",
    author: "Strategy Director",
    tag: "Growth"
  }
];

export const Insights: React.FC = () => {
  return (
    <div className="pb-20">
      <section className="py-20 bg-sentrl-midnight border-b border-sentrl-cyan/10">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-sentrl-white mb-6">
            INTELLIGENCE <span className="text-sentrl-cyan">LOG</span>
          </h1>
          <p className="text-xl text-sentrl-grey max-w-2xl">
            Technical briefings, strategic frameworks, and research from the SENTRL labs.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid gap-10">
          {articles.map((article) => (
            <article key={article.id} className="group border-b border-sentrl-cyan/10 pb-10 last:border-0 hover:bg-sentrl-cyan/5 -mx-6 px-6 py-6 rounded-lg transition-colors">
              <div className="flex flex-col md:flex-row gap-8 items-start">
                 <div className="w-full md:w-1/4 pt-1">
                    <span className="inline-block px-3 py-1 bg-sentrl-cyan/10 text-sentrl-cyan text-xs font-bold uppercase tracking-wider rounded mb-4">
                      {article.tag}
                    </span>
                    <div className="flex flex-col gap-2 text-sm text-sentrl-grey/60">
                      <div className="flex items-center gap-2"><Calendar size={14} /> {article.date}</div>
                      <div className="flex items-center gap-2"><Clock size={14} /> {article.readTime}</div>
                      <div className="flex items-center gap-2"><User size={14} /> {article.author}</div>
                    </div>
                 </div>
                 
                 <div className="w-full md:w-3/4">
                   <h2 className="text-2xl md:text-3xl font-bold text-sentrl-white mb-4 group-hover:text-sentrl-cyan transition-colors">
                     {article.title}
                   </h2>
                   <p className="text-sentrl-grey mb-6 leading-relaxed">
                     {article.excerpt}
                   </p>
                   <Link to="#" className="inline-flex items-center gap-2 text-sentrl-tech font-bold uppercase text-sm tracking-wider hover:translate-x-2 transition-transform">
                     Read Analysis <ArrowRight size={16} />
                   </Link>
                 </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="bg-sentrl-carbon py-16 mt-8">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h3 className="text-2xl font-bold text-sentrl-white mb-4">Subscribe to Intelligence</h3>
          <p className="text-sentrl-grey mb-8">Receive quarterly engineering briefings. No marketing fluff.</p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Business Email Address" 
              className="flex-1 bg-sentrl-void border border-sentrl-cyan/20 px-4 py-3 text-sentrl-white focus:outline-none focus:border-sentrl-cyan"
            />
            <button className="bg-sentrl-cyan text-sentrl-void px-6 py-3 font-bold uppercase tracking-widest hover:bg-sentrl-aqua transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};