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
    github: 'https://github.com/baltasar-garcia/ecommerce-platform',
    imageId: 'project-ecommerce'
  },
  {
    title: 'App de Gestión de Tareas',
    description: 'Aplicación para organizar tareas diarias con sistema de autenticación de usuarios y seguimiento de progreso.',
    tech: ['Next.js', 'Tailwind CSS', 'PostgreSQL', 'Prisma'],
    github: 'https://github.com/baltasar-garcia/task-manager-app',
    imageId: 'project-task-manager'
  },
  {
    title: 'Sitio Web Portafolio',
    description: 'Mi portafolio personal para mostrar mis proyectos, habilidades y experiencia profesional (este mismo sitio).',
    tech: ['Next.js', 'Tailwind CSS', 'TypeScript', 'Genkit'],
    github: 'https://github.com/baltasar-garcia/portfolio',
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
              <Card className="flex flex-col h-full overflow-hidden transition-transform transform hover:-translate-y-2">
                {projectImage && (
                  <Image
                    alt={project.title}
                    className="aspect-video w-full object-cover"
                    height={340}
                    src={projectImage.imageUrl}
                    width={600}
                    data-ai-hint={projectImage.imageHint}
                  />
                )}
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="outline">{tech}</Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex gap-2">
                  <Button asChild variant="ghost" className="w-full">
                    <Link href={project.github} target="_blank">
                      <Github className="mr-2 h-4 w-4" /> Ver en GitHub
                    </Link>
                  </Button>
                  {project.demo && (
                    <Button asChild variant="secondary" className="w-full">
                      <Link href={project.demo} target="_blank">
                        Ver Demo <ArrowUpRight className="ml-auto h-4 w-4" />
                      </Link>
                    </Button>
                  )}
                </CardFooter>
              </Card>
            </AnimatedSection>
          )})}
        </div>
      </div>
    </section>
  );
}
