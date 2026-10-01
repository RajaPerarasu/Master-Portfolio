import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Download, Eye, Sparkles, CheckCircle } from 'lucide-react';
import { developerInfo } from '../../data/developerInfo';

export const ResumeCTASection: React.FC = () => {
  return (
    <section className="py-20 relative overflow-hidden bg-slate-950/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-panel p-8 sm:p-12 rounded-3xl border border-cyan-500/30 text-center relative overflow-hidden shadow-[0_0_50px_rgba(0,242,254,0.12)]"
        >
          {/* Ambient Glow */}
          <div className="absolute -top-24 -left-24 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Curriculum Vitae</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            Want to know more about my experience?
          </h2>

          <p className="text-slate-300 text-base max-w-2xl mx-auto mb-8 leading-relaxed">
            Download or view my complete official resume for a detailed breakdown of my full-stack engineering skills, AWS cloud architecture projects, academic background, and professional achievements.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href={developerInfo.resumePath}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 rounded-xl font-semibold text-sm text-slate-950 bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 shadow-[0_0_25px_rgba(0,242,254,0.4)] transition-all transform hover:-translate-y-0.5 flex items-center gap-2"
            >
              <Eye className="w-4 h-4" />
              <span>View Resume</span>
            </a>

            <a
              href={developerInfo.resumePath}
              download="Raja_Perarasu_R_Resume.pdf"
              className="px-6 py-3.5 rounded-xl font-semibold text-sm text-slate-200 bg-slate-900 border border-white/10 hover:border-cyan-500/50 hover:bg-slate-800 transition-all flex items-center gap-2"
            >
              <Download className="w-4 h-4 text-cyan-400" />
              <span>Download Resume (PDF)</span>
            </a>
          </div>

          <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
            <span className="flex items-center gap-1.5"><CheckCircle className="w-3.5 h-3.5 text-cyan-400" /> Java & Spring Boot</span>
            <span className="flex items-center gap-1.5"><CheckCircle className="w-3.5 h-3.5 text-cyan-400" /> React.js & Modern JS</span>
            <span className="flex items-center gap-1.5"><CheckCircle className="w-3.5 h-3.5 text-cyan-400" /> AWS Cloud & AI Integration</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
