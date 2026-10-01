import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Navbar } from '../components/layout/Navbar';
import { HeroSection } from '../components/sections/HeroSection';
import { AboutSection } from '../components/sections/AboutSection';
import { SkillsSection } from '../components/sections/SkillsSection';
import { ExperienceSection } from '../components/sections/ExperienceSection';
import { ProjectGridSection } from '../components/sections/ProjectGridSection';
import { CertificationsSection } from '../components/sections/CertificationsSection';
import { ResumeCTASection } from '../components/sections/ResumeCTASection';
import { ContactSection } from '../components/sections/ContactSection';
import { Footer } from '../components/layout/Footer';

export const HomePage: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const targetId = location.hash.substring(1);
      const element = document.getElementById(targetId);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    }
  }, [location]);

  return (
    <div className="min-h-screen bg-[#06080d] text-slate-100 selection:bg-cyan-500/30 selection:text-cyan-200">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectGridSection />
        <CertificationsSection />
        <ResumeCTASection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};
