import Image from 'next/image';
import Link from 'next/link';
import { Github, Linkedin, ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { AnimatedSection } from './AnimatedSection';
import { translations, type Language } from '@/lib/translations';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function HeroSection({ language }: { language: Language }) {
  const t = translations[language].hero;
  const profileImage = PlaceHolderImages.find((img) => img.id === 'profile');

  return (
    <section id="home" className="w-full py-24 md:py-32 lg:py-40 xl:py-48">
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        <div className="flex flex-col lg:flex-row-reverse items-center justify-center gap-12 lg:gap-16">
          <AnimatedSection className="flex justify-center items-center w-full lg:w-1/2">
            <div className="relative w-full max-w-xs aspect-[3/4]">
              {profileImage && <Image src={profileImage.imageUrl} alt="Baltasar Garcia" fill className="object-cover rounded-lg" sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"/>}
            </div>
          </AnimatedSection>
          <div className="flex flex-col justify-center space-y-4 text-center lg:text-left">
             <AnimatedSection>
              <div className="space-y-4">
                <p className="text-xl text-muted-foreground">{t.greeting}</p>
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Balta García
                </h1>
                <p className="text-xl text-accent">
                  {t.title}
                </p>
                <p className="max-w-[600px] text-muted-foreground md:text-xl lg:mx-0">
                  {t.description}
                </p>
              </div>
             </AnimatedSection>
            <AnimatedSection delay={100}>
              <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center lg:justify-start">
                <Button asChild size="lg">
                  <a href="#contact">{t.contactMe}</a>
                </Button>
                <Button asChild variant="secondary" size="lg">
                  <a href="#projects">
                    {t.myProjects}
                    <ArrowDown className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </AnimatedSection>
             <AnimatedSection delay={200}>
              <div className="flex justify-center lg:justify-start space-x-4 mt-4">
                  <Button variant="ghost" size="icon" asChild>
                    <Link href="https://github.com/BALTASARGD" target="_blank" aria-label="GitHub">
                      <Github className="h-6 w-6 text-muted-foreground hover:text-primary" />
                    </Link>
                  </Button>
                  <Button variant="ghost" size="icon" asChild>
                    <Link href="https://www.linkedin.com/in/balta-garcia-68a50434a/" target="_blank" aria-label="LinkedIn">
                      <Linkedin className="h-6 w-6 text-muted-foreground hover:text-primary" />
                    </Link>
                  </Button>
              </div>
             </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
}
