import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Sparkles, ExternalLink, Github, ArrowRight, Cpu, Server, Code2, Database } from 'lucide-react';
import { Project } from '../../types/portfolio';

interface FeaturedProjectCardProps {
  project: Project;
}

export const FeaturedProjectCard: React.FC<FeaturedProjectCardProps> = ({ project }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="glass-panel p-6 sm:p-10 rounded-3xl border border-cyan-500/30 glass-panel-hover relative overflow-hidden mb-16 shadow-[0_0_40px_rgba(0,242,254,0.1)] group"
      data-cursor="project"
    >
      {/* Background Accent Glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-cyan-500/15 via-purple-500/10 to-transparent rounded-full blur-3xl pointer-events-none" />

      {/* Featured Badge Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/20 border border-cyan-400/40 text-cyan-300 text-xs font-mono font-bold uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-spin-slow" />
          <span>Flagship Featured Project</span>
        </div>
        <span className="text-xs font-mono text-purple-400 font-medium">Java • AI • React • Cloud</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left Screenshot / Media Preview (7 cols) */}
        <div className="lg:col-span-7 relative group/img overflow-hidden rounded-2xl border border-white/10 shadow-2xl bg-slate-950">
          <Link to={`/projects/${project.slug}`}>
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-[320px] sm:h-[400px] object-cover object-top transition-transform duration-700 ease-out group-hover/img:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-60 group-hover/img:opacity-30 transition-opacity" />
          </Link>
        </div>

        {/* Right Info Column (5 cols) */}
        <div className="lg:col-span-5 space-y-5">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight group-hover:text-cyan-400 transition-colors">
            <Link to={`/projects/${project.slug}`}>{project.title}</Link>
          </h3>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            {project.description}
          </p>

          {/* Quick Key Highlights */}
          <div className="space-y-2 pt-2">
            {project.features.slice(0, 3).map((feat, i) => (
              <div key={i} className="flex items-center gap-2 text-xs text-slate-300">
                <div className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                <span><strong className="text-white">{feat.title}:</strong> {feat.description}</span>
              </div>
            ))}
          </div>

          {/* Technology Badges */}
          <div className="pt-3">
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-lg text-xs font-mono font-medium bg-slate-900 border border-white/10 text-cyan-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Action CTAs */}
          <div className="pt-4 flex items-center gap-3">
            <Link
              to={`/projects/${project.slug}`}
              className="px-5 py-3 rounded-xl font-semibold text-xs text-slate-950 bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 shadow-[0_0_20px_rgba(0,242,254,0.3)] transition-all flex items-center gap-2"
            >
              <span>View Full Case Study</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-slate-900 border border-white/10 text-slate-300 hover:text-white hover:border-cyan-500/40 transition-colors"
              title="Live Demo"
            >
              <ExternalLink className="w-4 h-4" />
            </a>

            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-slate-900 border border-white/10 text-slate-300 hover:text-white hover:border-cyan-500/40 transition-colors"
                title="GitHub Repository"
              >
                <Github className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};
