import Image from 'next/image';
import Link from 'next/link';
import { Github, ArrowUpRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { CardDescription } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { AnimatedSection } from './AnimatedSection';
import { translations, type Language } from '@/lib/translations';

export function ProjectsSection({ language }: { language: Language }) {
  const t = translations[language].projects;
  const projectData = t.projectList;

  return (
    <section id="projects" className="w-full py-24 md:py-32">
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        <AnimatedSection>
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">{t.title}</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                {t.subtitle}
              </p>
            </div>
          </div>
        </AnimatedSection>
        
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projectData.map((project, index) => {
            const projectImage = PlaceHolderImages.find((img) => img.id === project.imageId);
            return (
              <AnimatedSection delay={index * 100} key={project.title}>
                <div className="group relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
                  <Link href={project.demo || project.github || '#'} className="absolute inset-0 z-10" target="_blank" rel="noopener noreferrer">
                    <span className="sr-only">View Project</span>
                  </Link>
                  <div className="relative w-full aspect-video overflow-hidden">
                    {projectImage && (
                      <Image
                        alt={project.title}
                        className="object-cover w-full h-full transition-transform duration-500 ease-in-out group-hover:scale-105"
                        width={600}
                        height={400}
                        src={projectImage.imageUrl}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out" />
                    <div className="absolute top-4 right-4 transform translate-x-12 group-hover:translate-x-0 transition-transform duration-500 ease-in-out">
                        <div className="flex gap-2">
                            {project.github && (
                                <Button asChild variant="ghost" size="icon" className="h-9 w-9 bg-primary/80 text-primary-foreground hover:bg-primary/90 rounded-full">
                                    <Link href={project.github} target="_blank" aria-label="GitHub">
                                        <Github className="h-5 w-5" />
                                    </Link>
                                </Button>
                            )}
                            {project.demo && (
                                <Button asChild variant="ghost" size="icon" className="h-9 w-9 bg-primary/80 text-primary-foreground hover:bg-primary/90 rounded-full">
                                    <Link href={project.demo} target="_blank" aria-label="Live Demo">
                                        <ArrowUpRight className="h-5 w-5" />
                                    </Link>
                                </Button>
                            )}
                        </div>
                    </div>
                  </div>
                  <div className="p-6 bg-card">
                    <h3 className="text-xl font-bold text-accent">{project.title}</h3>
                    <CardDescription className="mt-2 text-muted-foreground">
                      {project.description}
                    </CardDescription>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {project.tech.map((tech) => (
                        <Badge key={tech} variant="secondary">{tech}</Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            )
          })}
        </div>
      </div>
    </section>
  );
}
