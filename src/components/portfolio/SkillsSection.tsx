import { Code2, Database, GitMerge, Languages, Component, Server } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { AnimatedSection } from './AnimatedSection';

const skills = {
  "Lenguajes & Bases de Datos": {
    icon: <Database className="h-6 w-6 text-accent" />,
    items: ["HTML", "CSS", "JavaScript", "TypeScript", "Python", "SQL", "MongoDB", "PostgreSQL"],
  },
  "Frameworks & Librerías": {
    icon: <Component className="h-6 w-6 text-accent" />,
    items: ["React", "Next.js", "Tailwind CSS", "Node.js", "Express", "Django"],
  },
  "Herramientas": {
    icon: <GitMerge className="h-6 w-6 text-accent" />,
    items: ["Git", "GitHub", "Docker"],
  },
  "Idiomas": {
    icon: <Languages className="h-6 w-6 text-accent" />,
    items: ["Español (Nativo)", "Inglés (Avanzado C1)"],
  },
};

export function SkillsSection() {
  return (
    <section id="skills" className="w-full">
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        <AnimatedSection>
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Habilidades</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Un vistazo a las tecnologías y herramientas con las que trabajo para construir aplicaciones web modernas.
              </p>
            </div>
          </div>
        </AnimatedSection>
        
        <div className="mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 py-12">
          {Object.entries(skills).map(([category, { icon, items }], index) => (
            <AnimatedSection key={category} delay={index * 100}>
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    {icon}
                    {category}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {items.map((skill) => (
                      <Badge key={skill} variant="secondary" className="text-sm">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}