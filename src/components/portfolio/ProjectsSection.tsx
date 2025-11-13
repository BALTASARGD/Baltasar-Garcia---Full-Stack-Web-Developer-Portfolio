import Image from 'next/image';
import Link from 'next/link';
import { Github, ArrowUpRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardDescription } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { AnimatedSection } from './AnimatedSection';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

const projects = [
  {
    title: 'The Modern House',
    description: 'Clone de la página web de "The Modern House", una inmobiliaria especializada en casas de diseño.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/BALTASARGD/The-Modern-House',
    demo: 'https://baltasargd.github.io/The-Modern-House/',
    imageId: 'project-modern-house'
  },
  {
    title: 'MyControl',
    description: 'Aplicación para la gestión de finanzas personales y familiares, con control de ingresos, gastos y presupuestos.',
    tech: ['Next.js', 'Tailwind CSS', 'Firebase', 'TypeScript'],
    github: 'https://github.com/BALTASARGD/MyControl',
    demo: 'https://my-control-eta.vercel.app/',
    imageId: 'project-my-control'
  },
  {
    title: 'Chore Champ App',
    description: 'Aplicación gamificada para gestionar tareas del hogar, con seguimiento de progreso, rachas y logros.',
    tech: ['Next.js', 'Tailwind CSS', 'Firebase', 'TypeScript'],
    github: 'https://github.com/BALTASARGD/chore-champ-app',
    demo: 'https://chore-champ-app.vercel.app/',
    imageId: 'project-chore-champ'
  },
  {
    title: 'Plataforma E-commerce',
    description: 'Tienda online completa con carrito de compras, gestión de productos y pasarela de pago integrada.',
    tech: ['React', 'Node.js', 'MongoDB', 'Express'],
    github: 'https://github.com/BALTASARGD/ecommerce-platform',
    imageId: 'project-ecommerce'
  },
  {
    title: 'App de Gestión de Tareas',
    description: 'Aplicación para organizar tareas diarias con sistema de autenticación de usuarios y seguimiento de progreso.',
    tech: ['Next.js', 'Tailwind CSS', 'PostgreSQL', 'Prisma'],
    github: 'https://github.com/BALTASARGD/task-manager-app',
    imageId: 'project-task-manager'
  },
  {
    title: 'Sitio Web Portafolio',
    description: 'Mi portafolio personal para mostrar mis proyectos, habilidades y experiencia profesional (este mismo sitio).',
    tech: ['Next.js', 'Tailwind CSS', 'TypeScript', 'Genkit'],
    github: 'https://github.com/BALTASARGD/BaltaDev',
    demo: 'https://portfolio-seven-delta-66.vercel.app/',
    imageId: 'project-portfolio'
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="w-full bg-card">
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        <AnimatedSection>
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Proyectos Destacados</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Una selección de mis trabajos que demuestran mi capacidad para construir aplicaciones web funcionales y atractivas.
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
                {projects.map((project, index) => {
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
                                layout="fill"
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
