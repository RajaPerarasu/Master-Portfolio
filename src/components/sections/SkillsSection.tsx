import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Server, Code2, Cloud, Cpu, Database, Wrench, Sparkles, Check } from 'lucide-react';
import { skillsData } from '../../data/skillsData';
import { SkillCategory } from '../../types/portfolio';

const iconMap: Record<string, React.ElementType> = {
  Server,
  Code2,
  Cloud,
  Cpu,
  Database,
  Wrench,
};

export const SkillsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('All');

  const categories = ['All', ...skillsData.map((c) => c.title)];

  const filteredData =
    activeTab === 'All'
      ? skillsData
      : skillsData.filter((c) => c.title === activeTab);

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-grid-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Skills & Technology Ecosystem
          </h2>
          <p className="text-slate-400 text-base">
            Comprehensive skill set across full-stack engineering, cloud infrastructure, AI models, and QA tooling.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-200 ${
                activeTab === cat
                  ? 'bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-950 shadow-[0_0_15px_rgba(0,242,254,0.3)]'
                  : 'bg-slate-900/80 text-slate-300 border border-white/10 hover:border-cyan-500/30 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredData.map((category, idx) => {
            const IconComponent = iconMap[category.iconName] || Server;
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="glass-panel p-6 rounded-2xl border border-white/10 glass-panel-hover flex flex-col justify-between"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/10">
                    <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-bold text-white tracking-tight">
                      {category.title}
                    </h3>
                  </div>

                  {/* Skill Badge Grid */}
                  <div className="flex flex-wrap gap-2.5">
                    {category.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className="group flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900/90 border border-white/10 hover:border-cyan-500/40 hover:bg-slate-800/90 transition-all"
                      >
                        <Check className="w-3.5 h-3.5 text-cyan-400 opacity-70 group-hover:opacity-100" />
                        <span className="text-xs font-semibold text-slate-200 group-hover:text-white">
                          {skill.name}
                        </span>
                        {skill.badge && (
                          <span className="text-[10px] font-mono text-cyan-400/80 bg-cyan-500/10 px-1.5 py-0.5 rounded">
                            {skill.badge}
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-white/10 text-[11px] font-mono text-slate-500 flex items-center justify-between">
                  <span>{category.skills.length} core competencies</span>
                  <span className="text-cyan-400/80">Verified</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
