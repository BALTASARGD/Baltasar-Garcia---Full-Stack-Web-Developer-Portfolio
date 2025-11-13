import Image from 'next/image';
import Link from 'next/link';
import { Github, ArrowUpRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { AnimatedSection } from './AnimatedSection';

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
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-12">
          {projects.map((project, index) => {
            const projectImage = PlaceHolderImages.find((img) => img.id === project.imageId);
            return (
            <AnimatedSection key={project.title} delay={index * 100}>
              <Card className="group relative flex flex-col h-full overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:shadow-2xl">
                <div className="relative w-full aspect-video overflow-hidden">
                    {projectImage && (
                    <Image
                        alt={project.title}
                        className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
                        layout="fill"
                        src={projectImage.imageUrl}
                        data-ai-hint={projectImage.imageHint}
                    />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
                </div>
                <div className="p-6 flex flex-col justify-between flex-grow">
                    <div>
                        <div className="flex items-start justify-between">
                            <CardTitle className="text-xl font-bold mb-2">{project.title}</CardTitle>
                             <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <Button asChild variant="ghost" size="icon" className="h-8 w-8">
                                    <Link href={project.github} target="_blank">
                                    <Github className="h-5 w-5" />
                                    </Link>
                                </Button>
                                {project.demo && (
                                    <Button asChild variant="ghost" size="icon" className="h-8 w-8">
                                    <Link href={project.demo} target="_blank">
                                        <ArrowUpRight className="h-5 w-5" />
                                    </Link>
                                    </Button>
                                )}
                            </div>
                        </div>

                        <div className="flex flex-wrap gap-2 mb-4">
                            {project.tech.map((tech) => (
                            <Badge key={tech} variant="secondary">{tech}</Badge>
                            ))}
                        </div>
                        
                        <div className="max-h-0 opacity-0 group-hover:max-h-40 group-hover:opacity-100 transition-all duration-500 ease-in-out">
                            <CardDescription className="text-muted-foreground/80 mt-2">
                                {project.description}
                            </CardDescription>
                        </div>
                    </div>
                </div>
              </Card>
            </AnimatedSection>
          )})}
        </div>
      </div>
    </section>
  );
}
