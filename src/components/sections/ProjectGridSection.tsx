import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Layers, Sparkles, Filter } from 'lucide-react';
import { projectsData } from '../../data/projectsData';
import { FeaturedProjectCard } from './FeaturedProjectCard';
import { ProjectCard } from './ProjectCard';
import { ProjectCategory } from '../../types/portfolio';

const categories: ProjectCategory[] = [
  'All',
  'Full Stack',
  'Web Development',
  'AI',
  'E-Commerce',
  'Real Estate',
  '3D / Creative',
];

export const ProjectGridSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('All');

  const featuredProject = projectsData.find((p) => p.featured) || projectsData[0];
  
  const filteredProjects = projectsData.filter((project) => {
    if (selectedCategory === 'All') return true;
    return project.category === selectedCategory;
  });

  // Remaining projects excluding the featured card when 'All' is selected to prevent duplicate rendering
  const gridProjects =
    selectedCategory === 'All'
      ? filteredProjects.filter((p) => p.id !== featuredProject.id)
      : filteredProjects;

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-slate-950/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono uppercase tracking-wider">
            <Layers className="w-3.5 h-3.5" />
            <span>Real-World Engineering Portfolio</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Featured Projects & Case Studies
          </h2>
          <p className="text-slate-400 text-base">
            Explore 12 production-grade applications engineered with Java Spring Boot, React, AWS Cloud, and Generative AI.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-200 ${
                selectedCategory === cat
                  ? 'bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-950 shadow-[0_0_15px_rgba(0,242,254,0.3)]'
                  : 'bg-slate-900/80 text-slate-300 border border-white/10 hover:border-cyan-500/30 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Show Featured Hero Case Study when 'All' or 'AI' is selected */}
        {(selectedCategory === 'All' || selectedCategory === 'AI') && (
          <FeaturedProjectCard project={featuredProject} />
        )}

        {/* Asymmetric Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {gridProjects.map((project, idx) => (
            <ProjectCard key={project.id} project={project} index={idx} />
          ))}
        </div>

        {gridProjects.length === 0 && (
          <div className="text-center py-12 text-slate-400">
            No projects found in this category.
          </div>
        )}

      </div>
    </section>
  );
};
