'use client';

import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { translations, type Language } from '@/lib/translations';

export function Header({ language, setLanguage }: { language: Language, setLanguage: (lang: Language) => void }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const t = translations[language]; // Directly get the translations for the current language

  const toggleLanguage = () => {
    const newLanguage = language === 'en' ? 'es' : 'en';
    setLanguage(newLanguage);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-14 max-w-7xl items-center justify-between px-4 md:px-6">
        <Link href="#" className="flex items-center gap-2" prefetch={false}>
          <span className="font-bold text-lg">Balta.dev</span>
        </Link>
        <div className='flex items-center gap-2'>
          <nav className="hidden items-center gap-4 md:flex">
            {t.nav.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <Button onClick={toggleLanguage} variant="ghost" size="sm">
            {language === 'en' ? 'ES' : 'EN'}
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden">
          <nav className="grid gap-2 px-4 pb-4">
            {t.nav.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-medium text-muted-foreground transition-colors hover:text-primary"
                onClick={() => setIsMenuOpen(false)} 
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
