import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowLeft,
  ExternalLink,
  Github,
  CheckCircle2,
  Cpu,
  Layers,
  Sparkles,
  AlertTriangle,
  Lightbulb,
  ArrowRight,
  Maximize2,
  Code2,
} from 'lucide-react';
import { projectsData } from '../data/projectsData';
import { LightboxModal } from '../components/ui/LightboxModal';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';

export const ProjectDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const projectIndex = projectsData.findIndex((p) => p.slug === slug);
  const project = projectsData[projectIndex];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [slug]);

  if (!project) {
    return (
      <div className="min-h-screen bg-[#06080d] text-white flex flex-col justify-between">
        <Navbar />
        <div className="max-w-xl mx-auto px-4 py-32 text-center space-y-4">
          <h1 className="text-3xl font-bold">Project Not Found</h1>
          <p className="text-slate-400">The requested case study could not be located.</p>
          <Link
            to="/#projects"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-cyan-500 text-slate-950 font-semibold"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Portfolio
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const nextProjectIndex = (projectIndex + 1) % projectsData.length;
  const nextProject = projectsData[nextProjectIndex];

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#06080d] text-slate-100 flex flex-col justify-between selection:bg-cyan-500/30 selection:text-cyan-200">
      <Navbar />

      <main className="pt-28 pb-24 relative overflow-hidden">
        {/* Background Ambient Glow */}
        <div className="absolute top-0 right-1/4 w-96 h-96 radial-glow-cyan blur-3xl pointer-events-none" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          {/* Back Button */}
          <div>
            <Link
              to="/#projects"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 border border-white/10 text-xs font-semibold text-slate-300 hover:text-white hover:border-cyan-500/40 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 text-cyan-400" />
              <span>Back to All Projects</span>
            </Link>
          </div>

          {/* 1. HERO SECTION */}
          <section className="space-y-8">
            <div className="space-y-4">
              <div className="flex flex-wrap items-center gap-3">
                <span className="px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono font-semibold">
                  {project.category}
                </span>
                {project.featured && (
                  <span className="px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-xs font-mono font-semibold flex items-center gap-1">
                    <Sparkles className="w-3 h-3 text-purple-400" /> Flagship Case Study
                  </span>
                )}
              </div>

              <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
                {project.title}
              </h1>

              <p className="text-lg sm:text-xl text-slate-300 max-w-3xl leading-relaxed">
                {project.tagline}
              </p>

              {/* Action Links */}
              <div className="flex flex-wrap items-center gap-4 pt-4">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-xl font-semibold text-sm text-slate-950 bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 shadow-[0_0_20px_rgba(0,242,254,0.3)] transition-all flex items-center gap-2"
                >
                  <span>Live Project Demo</span>
                  <ExternalLink className="w-4 h-4" />
                </a>

                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 rounded-xl font-semibold text-sm text-slate-200 bg-slate-900 border border-white/10 hover:border-cyan-500/50 hover:bg-slate-800 transition-all flex items-center gap-2"
                  >
                    <Github className="w-4 h-4 text-cyan-400" />
                    <span>View GitHub Source</span>
                  </a>
                )}
              </div>
            </div>

            {/* Main Featured Screenshot */}
            <div
              onClick={() => openLightbox(0)}
              className="relative overflow-hidden rounded-3xl border border-white/10 shadow-2xl bg-slate-950 group cursor-pointer"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full max-h-[550px] object-cover object-top transition-transform duration-700 group-hover:scale-102"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <div className="px-4 py-2 rounded-xl bg-slate-900/90 border border-white/20 text-white font-mono text-xs flex items-center gap-2">
                  <Maximize2 className="w-4 h-4 text-cyan-400" /> Click to Expand Image
                </div>
              </div>
            </div>
          </section>

          {/* 2. OVERVIEW & TECHNOLOGIES */}
          <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-8 glass-panel p-8 rounded-3xl border border-white/10 space-y-4">
              <h2 className="text-2xl font-bold text-white tracking-tight flex items-center gap-2">
                <Layers className="w-5 h-5 text-cyan-400" /> Project Overview
              </h2>
              <p className="text-slate-300 leading-relaxed text-base">
                {project.overview}
              </p>
            </div>

            <div className="lg:col-span-4 glass-panel p-8 rounded-3xl border border-white/10 space-y-4">
              <h2 className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
                <Code2 className="w-5 h-5 text-purple-400" /> Technologies
              </h2>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 rounded-lg bg-slate-900 border border-white/10 text-xs font-mono font-medium text-cyan-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </section>

          {/* 3. KEY FEATURES */}
          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-white tracking-tight flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-cyan-400" /> Key Product Features
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {project.features.map((feat, i) => (
                <div
                  key={i}
                  className="glass-panel p-6 rounded-2xl border border-white/10 flex items-start gap-4 hover:border-cyan-500/30 transition-colors"
                >
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shrink-0">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-base font-bold text-white">{feat.title}</h3>
                    <p className="text-sm text-slate-400 leading-relaxed">{feat.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 4. SCREENSHOT GALLERY */}
          {project.screenshots && project.screenshots.length > 0 && (
            <section className="space-y-6">
              <h2 className="text-2xl font-bold text-white tracking-tight flex items-center gap-2">
                <Maximize2 className="w-5 h-5 text-purple-400" /> Screenshot Showcase
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {project.screenshots.map((img, i) => (
                  <div
                    key={i}
                    onClick={() => openLightbox(i)}
                    className="relative overflow-hidden rounded-2xl border border-white/10 aspect-video bg-slate-950 cursor-pointer group"
                  >
                    <img
                      src={img}
                      alt={`${project.title} screenshot ${i + 1}`}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <Maximize2 className="w-6 h-6 text-white" />
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* 5. DEVELOPMENT HIGHLIGHTS */}
          {project.highlights && project.highlights.length > 0 && (
            <section className="glass-panel p-8 rounded-3xl border border-white/10 space-y-4">
              <h2 className="text-2xl font-bold text-white tracking-tight flex items-center gap-2">
                <Cpu className="w-5 h-5 text-amber-400" /> Technical Implementation Highlights
              </h2>
              <ul className="space-y-3">
                {project.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-slate-300">
                    <div className="w-2 h-2 rounded-full bg-cyan-400 shrink-0 mt-2" />
                    <span className="leading-relaxed">{h}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* 6. CHALLENGES & SOLUTIONS */}
          {project.challenges && project.challenges.length > 0 && (
            <section className="space-y-6">
              <h2 className="text-2xl font-bold text-white tracking-tight flex items-center gap-2">
                <Lightbulb className="w-5 h-5 text-emerald-400" /> Engineering Challenges & Solutions
              </h2>

              <div className="space-y-6">
                {project.challenges.map((cs, i) => (
                  <div key={i} className="glass-panel p-6 sm:p-8 rounded-2xl border border-white/10 space-y-4">
                    <div className="flex items-start gap-3 text-rose-400 font-semibold text-sm">
                      <AlertTriangle className="w-5 h-5 shrink-0 mt-0.5" />
                      <div>
                        <span className="font-mono text-xs uppercase block text-rose-400/80">Challenge</span>
                        <p className="text-slate-200 mt-1">{cs.challenge}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 text-emerald-400 font-semibold text-sm pt-3 border-t border-white/10">
                      <Lightbulb className="w-5 h-5 shrink-0 mt-0.5" />
                      <div>
                        <span className="font-mono text-xs uppercase block text-emerald-400/80">Solution</span>
                        <p className="text-slate-200 mt-1">{cs.solution}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* 7. NEXT PROJECT NAVIGATION */}
          <section className="pt-12 border-t border-white/10">
            <div className="glass-panel p-8 rounded-3xl border border-cyan-500/30 flex flex-col sm:flex-row items-center justify-between gap-6">
              <div>
                <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider block">Next Portfolio Project</span>
                <h3 className="text-2xl font-bold text-white tracking-tight mt-1">{nextProject.title}</h3>
                <p className="text-xs text-slate-400 mt-1">{nextProject.category} • {nextProject.technologies.slice(0, 3).join(', ')}</p>
              </div>

              <Link
                to={`/projects/${nextProject.slug}`}
                className="px-6 py-3.5 rounded-xl font-semibold text-sm text-slate-950 bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 shadow-[0_0_20px_rgba(0,242,254,0.3)] transition-all flex items-center gap-2 shrink-0"
              >
                <span>Explore Next Project</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </section>

        </div>
      </main>

      <LightboxModal
        isOpen={lightboxOpen}
        images={project.screenshots && project.screenshots.length > 0 ? project.screenshots : [project.image]}
        currentIndex={lightboxIndex}
        onClose={() => setLightboxOpen(false)}
        onNavigate={(idx) => setLightboxIndex(idx)}
      />

      <Footer />
    </div>
  );
};
