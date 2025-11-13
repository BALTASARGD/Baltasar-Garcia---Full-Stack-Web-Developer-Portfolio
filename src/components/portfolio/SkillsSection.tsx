import { Code2, Database, GitMerge, Languages, Component, Server, PenTool } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { AnimatedSection } from './AnimatedSection';
import { translations, type Language } from '@/lib/translations';

const icons: { [key: string]: React.ReactNode } = {
  "languages_db": <Database className="h-6 w-6 text-accent" />,
  "frameworks": <Component className="h-6 w-6 text-accent" />,
  "tools": <GitMerge className="h-6 w-6 text-accent" />,
  "design": <PenTool className="h-6 w-6 text-accent" />,
  "human_languages": <Languages className="h-6 w-6 text-accent" />,
};

export function SkillsSection({ language }: { language: Language }) {
  const t = translations[language].skills;
  const skillCategories = Object.keys(t.categories) as (keyof typeof t.categories)[];

  return (
    <section id="skills" className="w-full">
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
        
        <div className="mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-12">
          {skillCategories.map((categoryKey, index) => {
            const category = t.categories[categoryKey];
            return (
            <AnimatedSection key={categoryKey} delay={index * 100}>
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    {icons[categoryKey]}
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.items.map((skill) => (
                      <Badge key={skill} variant="secondary" className="text-sm">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
          )})}
        </div>
      </div>
    </section>
  );
}
