"use client";

import { useState } from 'react';
import { Header } from '@/components/portfolio/Header';
import { HeroSection } from '@/components/portfolio/HeroSection';
import { AboutSection } from '@/components/portfolio/AboutSection';
import { SkillsSection } from '@/components/portfolio/SkillsSection';
import { ProjectsSection } from '@/components/portfolio/ProjectsSection';
import { SkillRecommenderSection } from '@/components/portfolio/SkillRecommenderSection';
import { ContactSection } from '@/components/portfolio/ContactSection';
import { Footer } from '@/components/portfolio/Footer';
import type { Language } from '@/lib/translations';

export default function Home() {
  const [language, setLanguage] = useState<Language>('es');

  return (
    <div className="flex flex-col min-h-dvh bg-background">
      <Header language={language} setLanguage={setLanguage} />
      <main className="flex-1">
        <HeroSection language={language} />
        <AboutSection language={language} />
        <SkillsSection language={language} />
        <ProjectsSection language={language} />
        <ContactSection language={language} />
        <SkillRecommenderSection language={language} />
      </main>
      <Footer language={language} />
    </div>
  );
}
