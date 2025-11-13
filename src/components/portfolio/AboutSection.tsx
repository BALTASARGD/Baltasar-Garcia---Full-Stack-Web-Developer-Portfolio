import { AnimatedSection } from './AnimatedSection';
import { translations, type Language } from '@/lib/translations';

export function AboutSection({ language }: { language: Language }) {
  const t = translations[language].about;

  return (
    <section id="about" className="w-full bg-card">
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
        
        <div className="mx-auto grid max-w-5xl items-start gap-12 py-12 lg:grid-cols-1">
          <div className="relative pl-8">
            <div className="absolute left-0 top-0 h-full w-0.5 bg-primary/20" />
            {t.experience.map((item, index) => (
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
