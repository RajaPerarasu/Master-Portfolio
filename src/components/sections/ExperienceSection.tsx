import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, CheckCircle2, Building2, Layers } from 'lucide-react';
import { experienceData } from '../../data/experienceData';

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-slate-950/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono uppercase tracking-wider">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Professional Career</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Work Experience & Internship
          </h2>
          <p className="text-slate-400 text-base">
            Hands-on software development experience building real enterprise applications and cloud pipelines.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="max-w-4xl mx-auto relative">
          {/* Vertical Glowing Line */}
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-400 via-purple-500 to-transparent -translate-x-1/2" />

          {experienceData.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative mb-12 sm:mb-16"
            >
              {/* Timeline Center Node */}
              <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 -top-1 w-8 h-8 rounded-full bg-slate-900 border-2 border-cyan-400 flex items-center justify-center text-cyan-400 shadow-[0_0_15px_rgba(0,242,254,0.5)] z-20">
                <Briefcase className="w-4 h-4" />
              </div>

              {/* Experience Card */}
              <div className="ml-12 sm:ml-0 sm:w-1/2 sm:pr-8 sm:even:ml-auto sm:even:pl-8 sm:even:pr-0">
                <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-white/10 glass-panel-hover relative">
                  
                  {/* Role & Company Header */}
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white tracking-tight">
                        {exp.role}
                      </h3>
                      <div className="flex items-center gap-2 text-cyan-400 font-semibold text-sm mt-1">
                        <Building2 className="w-4 h-4" />
                        <span>{exp.company}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{exp.period} ({exp.duration})</span>
                    </div>
                  </div>

                  {/* Highlights Bullet List */}
                  <div className="space-y-3 mb-6">
                    {exp.highlights.map((item, i) => (
                      <div key={i} className="flex items-start gap-2 text-sm text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech Stack Badges */}
                  <div className="pt-4 border-t border-white/10">
                    <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2.5">Key Technologies & Practices</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded-md bg-slate-900 border border-white/10 text-xs font-medium text-cyan-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
