"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, Code, X, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { translations, type Language } from '@/lib/translations';

function LanguageSwitcher({ setLanguage, language }: { setLanguage: (lang: Language) => void; language: Language; }) {
  const t = translations[language].header;
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <Globe className="h-5 w-5" />
          <span className="sr-only">{t.selectLanguage}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setLanguage('es')}>
          <span className="mr-2">🇪🇸</span>
          <span>{t.spanish}</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setLanguage('en')}>
          <span className="mr-2">🇬🇧</span>
          <span>{t.english}</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setLanguage('de')}>
          <span className="mr-2">🇩🇪</span>
          <span>{t.german}</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export function Header({ language, setLanguage }: { language: Language, setLanguage: (lang: Language) => void }) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const t = translations[language].header;

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full transition-all duration-300',
        isScrolled ? 'border-b border-border/40 bg-background/95 backdrop-blur-sm' : 'bg-transparent'
      )}
    >
      <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:px-6">
        <Link href="#home" className="flex items-center gap-2">
          <Code className="h-6 w-6 text-primary" />
          <span className="font-bold text-lg">Baltasar García</span>
        </Link>
        <div className='flex items-center gap-2'>
          <nav className="hidden items-center gap-4 md:flex">
            {t.nav.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="hidden md:block">
            <LanguageSwitcher setLanguage={setLanguage} language={language} />
          </div>
        </div>
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">{t.openMenu}</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="flex flex-col gap-6 p-6">
                <Link href="#home" className="flex items-center gap-2 mb-4">
                  <Code className="h-6 w-6 text-primary" />
                  <span className="font-bold">Baltasar García</span>
                </Link>
                {t.nav.map((link) => (
                  <SheetClose key={link.href} asChild>
                    <Link
                      href={link.href}
                      className="text-lg font-medium text-foreground transition-colors hover:text-primary"
                    >
                      {link.label}
                    </Link>
                  </SheetClose>
                ))}
                <div className="border-t pt-6">
                  <LanguageSwitcher setLanguage={setLanguage} language={language} />
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
