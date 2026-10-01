import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Award, Code, Cloud, Sparkles, BookOpen, Monitor, Keyboard, CheckCircle, ExternalLink } from 'lucide-react';
import { certificationsData } from '../../data/certificationsData';
import { LightboxModal } from '../ui/LightboxModal';

const iconMap: Record<string, React.ElementType> = {
  Code,
  Cloud,
  Sparkles,
  BookOpen,
  Monitor,
  Keyboard,
};

export const CertificationsSection: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="certifications" className="py-24 relative overflow-hidden bg-grid-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono uppercase tracking-wider">
            <Award className="w-3.5 h-3.5" />
            <span>Verified Knowledge</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Professional Certifications
          </h2>
          <p className="text-slate-400 text-base">
            Recognized credentials in software development, cloud infrastructure, AI models, and enterprise software.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificationsData.map((cert, idx) => {
            const IconComponent = iconMap[cert.icon] || Award;
            return (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="glass-panel p-6 rounded-2xl border border-white/10 glass-panel-hover flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-slate-900 border border-cyan-500/30 flex items-center justify-center text-cyan-400 group-hover:border-cyan-400 group-hover:shadow-[0_0_15px_rgba(0,242,254,0.3)] transition-all">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="px-2.5 py-1 rounded-full bg-slate-900 border border-white/10 text-[10px] font-mono text-cyan-300">
                      {cert.date}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white tracking-tight mb-1 group-hover:text-cyan-400 transition-colors">
                    {cert.title}
                  </h3>

                  <p className="text-xs text-slate-400 font-medium mb-4">
                    {cert.issuer}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {cert.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-900 border border-white/10 text-slate-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-slate-500">
                  <span className="flex items-center gap-1 text-emerald-400 font-mono text-[11px]">
                    <CheckCircle className="w-3.5 h-3.5" /> Verified Certificate
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>

      <LightboxModal
        isOpen={!!selectedImage}
        images={selectedImage ? [selectedImage] : []}
        currentIndex={0}
        onClose={() => setSelectedImage(null)}
      />
    </section>
  );
};
