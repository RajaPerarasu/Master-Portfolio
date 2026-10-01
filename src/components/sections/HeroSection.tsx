import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, FileText, Mail, Sparkles, Code, Terminal, Layers } from 'lucide-react';
import { FloatingTechWorkspace } from '../3d/FloatingTechWorkspace';
import { developerInfo } from '../../data/developerInfo';

export const HeroSection: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden bg-grid-pattern">
      {/* Background Radial Ambient Glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 radial-glow-cyan rounded-full pointer-events-none blur-3xl opacity-60" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 radial-glow-purple rounded-full pointer-events-none blur-3xl opacity-50" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Hero Content Column (7 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-6 text-left"
          >
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-cyan-500/30 text-xs font-mono text-cyan-300 backdrop-blur-md shadow-inner">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
              <span>Available for Full Stack & Cloud Engineering Roles</span>
            </div>

            {/* Developer Name */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-tight">
              Hi, I'm <br />
              <span className="brand-gradient-text">Raja Perarasu R</span>
            </h1>

            {/* Main Title */}
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-slate-200 flex items-center gap-3">
              <Terminal className="w-6 h-6 text-cyan-400 shrink-0" />
              <span>Java Full Stack Developer | AI & AWS</span>
            </h2>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
              {developerInfo.supportingText}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a
                href="#projects"
                className="px-6 py-3.5 rounded-xl font-semibold text-sm text-slate-950 bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 shadow-[0_0_25px_rgba(0,242,254,0.4)] transition-all transform hover:-translate-y-0.5 flex items-center gap-2"
              >
                <span>View Projects</span>
                <Layers className="w-4 h-4" />
              </a>

              <a
                href={developerInfo.resumePath}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-xl font-semibold text-sm text-slate-200 bg-slate-900/90 border border-white/10 hover:border-cyan-500/50 hover:bg-slate-800 transition-all flex items-center gap-2"
              >
                <FileText className="w-4 h-4 text-cyan-400" />
                <span>Download Resume</span>
              </a>

              <a
                href="#contact"
                className="px-6 py-3.5 rounded-xl font-semibold text-sm text-slate-300 border border-white/10 hover:border-white/30 hover:text-white transition-all flex items-center gap-2"
              >
                <Mail className="w-4 h-4 text-purple-400" />
                <span>Contact Me</span>
              </a>
            </div>

            {/* Social Links & Quick Stats */}
            <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <a
                  href={developerInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900/60 border border-white/10 text-xs font-medium text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 transition-colors"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub</span>
                </a>
                <a
                  href={developerInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900/60 border border-white/10 text-xs font-medium text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                  <span>LinkedIn</span>
                </a>
              </div>

              {/* Quick Metrics */}
              <div className="flex items-center gap-6 text-xs text-slate-400">
                <div>
                  <span className="font-bold text-cyan-400 text-base font-mono block">12+</span>
                  <span>Real Projects</span>
                </div>
                <div className="h-6 w-px bg-white/10" />
                <div>
                  <span className="font-bold text-purple-400 text-base font-mono block">6 Mos</span>
                  <span>CS Infotech Intern</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Hero Column: 3D Interactive Scene (5 cols) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            <FloatingTechWorkspace />
          </motion.div>

        </div>
      </div>

      {/* Scroll Down Indicator */}
      <a
        href="#about"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 p-2 rounded-full border border-white/10 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 transition-colors animate-bounce"
        aria-label="Scroll to About section"
      >
        <ArrowDown className="w-4 h-4" />
      </a>
    </section>
  );
};
