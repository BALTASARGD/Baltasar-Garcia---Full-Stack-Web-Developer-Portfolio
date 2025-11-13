import Image from 'next/image';
import Link from 'next/link';
import { Github, ArrowUpRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardDescription } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { AnimatedSection } from './AnimatedSection';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { translations, type Language } from '@/lib/translations';

export function ProjectsSection({ language }: { language: Language }) {
  const t = translations[language].projects;
  const projectData = t.projectList;

  return (
    <section id="projects" className="w-full bg-card">
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        <AnimatedSection>
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">{t.title}</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                {t.subtitle}
              </p>
            </div>
          </div>
        </AnimatedSection>
        
        <div className="py-12">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full max-w-5xl mx-auto"
            >
              <CarouselContent>
                {projectData.map((project, index) => {
                  const projectImage = PlaceHolderImages.find((img) => img.id === project.imageId);
                  return (
                    <CarouselItem key={project.title} className="md:basis-1/2 lg:basis-1/3 p-4">
                      <AnimatedSection delay={index * 100}>
                        <Card className="group relative flex flex-col h-full overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:shadow-2xl">
                          <div className="relative w-full aspect-video overflow-hidden">
                            {projectImage && (
                              <Image
                                alt={project.title}
                                className="object-cover w-full h-full transition-transform duration-500 ease-in-out group-hover:scale-105"
                                fill
                                src={projectImage.imageUrl}
                                data-ai-hint={projectImage.imageHint}
                              />
                            )}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
                            <div className="absolute bottom-4 left-4 right-4 transform translate-y-20 group-hover:translate-y-0 transition-transform duration-500 ease-in-out">
                              <h3 className="text-xl font-bold text-white">{project.title}</h3>
                              <div className="flex gap-2 mt-2">
                                {project.github && (
                                  <Button asChild variant="ghost" size="icon" className="h-8 w-8 text-white hover:bg-white/20 hover:text-white">
                                    <Link href={project.github} target="_blank" aria-label="GitHub">
                                      <Github className="h-5 w-5" />
                                    </Link>
                                  </Button>
                                )}
                                {project.demo && (
                                  <Button asChild variant="ghost" size="icon" className="h-8 w-8 text-white hover:bg-white/20 hover:text-white">
                                    <Link href={project.demo} target="_blank" aria-label="Live Demo">
                                      <ArrowUpRight className="h-5 w-5" />
                                    </Link>
                                  </Button>
                                )}
                              </div>
                            </div>
                          </div>
                          <div className="p-6 flex flex-col justify-between flex-grow">
                            <div className="flex flex-wrap gap-2 mb-4">
                              {project.tech.map((tech) => (
                                <Badge key={tech} variant="secondary">{tech}</Badge>
                              ))}
                            </div>
                            <CardDescription className="text-muted-foreground/90">
                              {project.description}
                            </CardDescription>
                          </div>
                        </Card>
                      </AnimatedSection>
                    </CarouselItem>
                  )
                })}
              </CarouselContent>
              <CarouselPrevious className="hidden sm:flex" />
              <CarouselNext className="hidden sm:flex" />
            </Carousel>
        </div>
      </div>
    </section>
  );
}
