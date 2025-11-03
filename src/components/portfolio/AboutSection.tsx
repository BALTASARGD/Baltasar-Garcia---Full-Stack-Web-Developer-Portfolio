import { AnimatedSection } from './AnimatedSection';

const experience = [
  {
    role: "Desarrollador Full Stack Freelance",
    company: "Trabajo Autónomo",
    period: "2021 - Presente",
    description: "Desarrollo y mantenimiento de aplicaciones web para diversos clientes, utilizando tecnologías como React, Node.js y Next.js para ofrecer soluciones robustas y a medida.",
  },
  {
    role: "Tutor de Desarrollo Web",
    company: "Coderhouse",
    period: "2022 - 2023",
    description: "Guié a más de 200 estudiantes a través de los fundamentos del desarrollo web, resolviendo dudas y corrigiendo proyectos para asegurar su aprendizaje.",
  },
];

export function AboutSection() {
  return (
    <section id="about" className="w-full bg-card">
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        <AnimatedSection>
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Sobre Mí</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Mi objetivo es transformar ideas en soluciones digitales robustas y eficientes, combinando diseño limpio con código de alta calidad.
              </p>
            </div>
          </div>
        </AnimatedSection>
        
        <div className="mx-auto grid max-w-5xl items-start gap-12 py-12 lg:grid-cols-1">
          <div className="relative pl-8">
            <div className="absolute left-0 top-0 h-full w-0.5 bg-primary/20" />
            {experience.map((item, index) => (
              <AnimatedSection key={index} delay={index * 100}>
                <div className="relative mb-12">
                  <div className="absolute -left-[38px] top-1.5 flex h-8 w-8 items-center justify-center rounded-full bg-primary">
                    <div className="h-3 w-3 rounded-full bg-primary-foreground" />
                  </div>
                  <p className="font-semibold text-primary">{item.period}</p>
                  <h3 className="text-xl font-bold mt-1">{item.role}</h3>
                  <p className="text-md font-medium text-accent">{item.company}</p>
                  <p className="mt-2 text-muted-foreground">{item.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}