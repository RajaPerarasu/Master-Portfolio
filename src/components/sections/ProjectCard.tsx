import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ExternalLink, Github, ArrowRight, Layers } from 'lucide-react';
import { Project } from '../../types/portfolio';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: (index % 4) * 0.1 }}
      className="glass-panel rounded-2xl border border-white/10 glass-panel-hover overflow-hidden flex flex-col justify-between group h-full"
      data-cursor="project"
    >
      <div>
        {/* Project Screenshot Container */}
        <div className="relative overflow-hidden aspect-video bg-slate-950 border-b border-white/10">
          <Link to={`/projects/${project.slug}`}>
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent opacity-80 group-hover:opacity-40 transition-opacity" />
          </Link>

          {/* Category Tag */}
          <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-slate-900/90 backdrop-blur-md border border-white/10 text-[10px] font-mono text-cyan-300">
            {project.category}
          </div>
        </div>

        {/* Card Body */}
        <div className="p-6 space-y-3">
          <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-cyan-400 transition-colors line-clamp-1">
            <Link to={`/projects/${project.slug}`}>{project.title}</Link>
          </h3>

          <p className="text-xs sm:text-sm text-slate-400 leading-relaxed line-clamp-2">
            {project.description}
          </p>

          {/* Technology Badges */}
          <div className="pt-2 flex flex-wrap gap-1.5">
            {project.technologies.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-900 border border-white/10 text-slate-300 group-hover:border-cyan-500/30 transition-colors"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 4 && (
              <span className="px-1.5 py-0.5 rounded text-[10px] font-mono bg-slate-900 border border-white/10 text-slate-500">
                +{project.technologies.length - 4}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Card Footer Actions */}
      <div className="p-6 pt-0 flex items-center justify-between border-t border-white/5 mt-4">
        <Link
          to={`/projects/${project.slug}`}
          className="inline-flex items-center gap-1.5 text-xs font-bold text-cyan-400 group-hover:text-cyan-300 transition-colors"
        >
          <span>View Case Study</span>
          <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
        </Link>

        <div className="flex items-center gap-2">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
            title="Live Demo"
          >
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
              title="GitHub Repository"
            >
              <Github className="w-3.5 h-3.5" />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};
