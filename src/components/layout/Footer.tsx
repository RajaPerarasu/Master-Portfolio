import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Linkedin, Mail, ArrowUp, Code2, Terminal } from 'lucide-react';
import { developerInfo } from '../../data/developerInfo';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#040508] border-t border-white/10 pt-16 pb-12 text-slate-400 relative overflow-hidden">
      {/* Glow effect */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-48 bg-cyan-500/5 blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          {/* Brand Info */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-slate-900 border border-cyan-500/30 flex items-center justify-center">
                <Terminal className="w-4 h-4 text-cyan-400" />
              </div>
              <span className="font-bold text-white text-lg tracking-tight">Raja Perarasu R</span>
            </div>
            <p className="text-sm text-slate-400 max-w-md leading-relaxed">
              Java Full Stack Developer specializing in Spring Boot, React.js, AWS Cloud infrastructure, and Generative AI integrations.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href={developerInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="w-9 h-9 rounded-lg bg-slate-900 border border-white/10 flex items-center justify-center text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 transition-colors"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={developerInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="w-9 h-9 rounded-lg bg-slate-900 border border-white/10 flex items-center justify-center text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${developerInfo.email}`}
                aria-label="Send Email"
                className="w-9 h-9 rounded-lg bg-slate-900 border border-white/10 flex items-center justify-center text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 transition-colors"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-semibold">Navigation</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#about" className="hover:text-cyan-300 transition-colors">About Me</a></li>
              <li><a href="#skills" className="hover:text-cyan-300 transition-colors">Tech Skills</a></li>
              <li><a href="#experience" className="hover:text-cyan-300 transition-colors">Experience</a></li>
              <li><a href="#projects" className="hover:text-cyan-300 transition-colors">Featured Projects</a></li>
              <li><a href="#certifications" className="hover:text-cyan-300 transition-colors">Certifications</a></li>
            </ul>
          </div>

          {/* Direct Actions */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-semibold">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href={developerInfo.resumePath} target="_blank" rel="noopener noreferrer" className="hover:text-cyan-300 transition-colors">
                  Download Resume (PDF)
                </a>
              </li>
              <li>
                <a href={developerInfo.github} target="_blank" rel="noopener noreferrer" className="hover:text-cyan-300 transition-colors">
                  GitHub Repositories
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-cyan-300 transition-colors">
                  Contact & Inquiries
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© 2026 Raja Perarasu R. All rights reserved.</p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 border border-white/10 text-slate-400 hover:text-white hover:border-cyan-500/40 transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
