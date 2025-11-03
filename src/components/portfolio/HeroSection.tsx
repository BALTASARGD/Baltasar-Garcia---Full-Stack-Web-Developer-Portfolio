import Image from 'next/image';
import Link from 'next/link';
import { Github, Linkedin, ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { AnimatedSection } from './AnimatedSection';

export function HeroSection() {
  const profileImage = PlaceHolderImages.find((img) => img.id === 'profile');

  return (
    <section id="home" className="w-full py-24 md:py-32 lg:py-40 xl:py-48">
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:gap-16">
          <div className="flex flex-col justify-center space-y-4 text-center lg:text-left">
             <AnimatedSection>
              <div className="space-y-4">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Baltasar García
                </h1>
                <p className="text-xl text-accent">
                  Full Stack Web Developer
                </p>
                <p className="max-w-[600px] text-muted-foreground md:text-xl lg:mx-0">
                  ¡Hola! Soy Baltasar, un apasionado desarrollador Full Stack con base en Argentina. Me especializo en crear experiencias web fluidas, modernas y escalables.
                </p>
              </div>
             </AnimatedSection>
            <AnimatedSection delay={100}>
              <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center lg:justify-start">
                <Button asChild size="lg">
                  <Link href="#contact">Contáctame</Link>
                </Button>
                <Button asChild variant="secondary" size="lg">
                  <Link href="#projects">
                    Mis Proyectos
                    <ArrowDown className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </AnimatedSection>
             <AnimatedSection delay={200}>
              <div className="flex justify-center lg:justify-start space-x-4 mt-4">
                  <Button variant="ghost" size="icon" asChild>
                    <Link href="https://github.com/baltasar-garcia" target="_blank" aria-label="GitHub">
                      <Github className="h-6 w-6 text-muted-foreground hover:text-primary" />
                    </Link>
                  </Button>
                  <Button variant="ghost" size="icon" asChild>
                    <Link href="https://linkedin.com/in/baltasar-garcia" target="_blank" aria-label="LinkedIn">
                      <Linkedin className="h-6 w-6 text-muted-foreground hover:text-primary" />
                    </Link>
                  </Button>
              </div>
             </AnimatedSection>
          </div>
           <AnimatedSection className="flex justify-center items-center">
            <Avatar className="w-64 h-64 lg:w-80 lg:h-80 border-4 border-primary shadow-lg">
                {profileImage && <AvatarImage src={profileImage.imageUrl} alt={profileImage.description} data-ai-hint={profileImage.imageHint} />}
                <AvatarFallback>BG</AvatarFallback>
            </Avatar>
           </AnimatedSection>
        </div>
      </div>
    </section>
  );
}