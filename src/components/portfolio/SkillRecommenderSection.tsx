"use client";

import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Wand2, LoaderCircle, Lightbulb, BookOpen } from 'lucide-react';
import { getSkillRecommendations } from '@/app/actions';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { AnimatedSection } from './AnimatedSection';
import { Badge } from '../ui/badge';
import type { SkillRecommendationOutput } from '@/ai/flows/skill-recommendation-tool';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const formSchema = z.object({
  currentSkills: z.string().min(20, "Por favor, detalla tus habilidades actuales con más de 20 caracteres."),
  careerGoals: z.string().min(20, "Por favor, describe tus metas profesionales con más de 20 caracteres."),
});

type FormValues = z.infer<typeof formSchema>;

export function SkillRecommenderSection() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<SkillRecommendationOutput | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const { toast } = useToast();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      currentSkills: '',
      careerGoals: '',
    },
  });

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    setLoading(true);
    setResult(null);
    const response = await getSkillRecommendations(data);
    setLoading(false);

    if (response.success && response.data) {
      setResult(response.data);
      toast({
        title: "Recomendación generada",
        description: "Tu plan de aprendizaje personalizado está listo.",
      });
    } else {
      toast({
        variant: "destructive",
        title: "Error",
        description: response.error || "No se pudieron generar las recomendaciones. Inténtalo de nuevo.",
      });
    }
  };
  
  const handleOpenChange = (open: boolean) => {
    setIsOpen(open);
    if (!open) {
      form.reset();
      setResult(null);
    }
  };

  return (
    <section id="skill-recommender" className="w-full">
        <AnimatedSection>
          <div className="container mx-auto max-w-7xl px-4 md:px-6 flex flex-col items-center text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl flex items-center justify-center gap-3">
              <Wand2 className="h-8 w-8 text-accent" />
              Recomendador de Habilidades
            </h2>
            <p className="max-w-[900px] mt-4 text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Utiliza esta herramienta de IA para obtener recomendaciones personalizadas sobre qué habilidades aprender para alcanzar tus metas profesionales.
            </p>
            <Dialog open={isOpen} onOpenChange={handleOpenChange}>
              <DialogTrigger asChild>
                <Button className="mt-8">Abrir Recomendador</Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[625px] max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle>Recomendador de Habilidades con IA</DialogTitle>
                  <DialogDescription>
                    Describe tus habilidades actuales y metas para recibir un plan de aprendizaje personalizado.
                  </DialogDescription>
                </DialogHeader>
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                      <FormField
                        control={form.control}
                        name="currentSkills"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Habilidades Actuales</FormLabel>
                            <FormControl>
                              <Textarea
                                placeholder="Ej: React, Node.js, Express, MongoDB, REST APIs..."
                                className="resize-none"
                                {...field}
                                rows={3}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="careerGoals"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Metas Profesionales</FormLabel>
                            <FormControl>
                              <Textarea
                                placeholder="Ej: Convertirme en un arquitecto de software, especializarme en DevOps, liderar un equipo de desarrollo..."
                                className="resize-none"
                                {...field}
                                rows={3}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <Button type="submit" disabled={loading} className="w-full">
                        {loading ? (
                          <>
                            <LoaderCircle className="mr-2 h-4 w-4 animate-spin" />
                            Generando...
                          </>
                        ) : (
                          "Obtener Recomendación"
                        )}
                      </Button>
                    </form>
                  </Form>

                {loading && (
                    <Card className="mt-6">
                      <CardHeader>
                        <CardTitle className="animate-pulse text-base">Analizando tu perfil...</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="w-full h-6 rounded-md bg-muted animate-pulse"></div>
                        <div className="w-full h-20 rounded-md bg-muted animate-pulse"></div>
                      </CardContent>
                    </Card>
                )}

                {result && (
                    <div className="mt-6 space-y-4">
                      <Card>
                        <CardHeader>
                          <CardTitle className="flex items-center gap-2 text-base">
                            <Lightbulb className="h-5 w-5 text-accent" />
                            Habilidades Recomendadas
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="flex flex-wrap gap-2">
                              {result.recommendedSkills.split(',').map(skill => (
                                  <Badge key={skill.trim()} variant="default" className="text-sm">{skill.trim()}</Badge>
                              ))}
                          </div>
                        </CardContent>
                      </Card>
                      <Card>
                        <CardHeader>
                          <CardTitle className="flex items-center gap-2 text-base">
                            <BookOpen className="h-5 w-5 text-accent" />
                            Rutas de Aprendizaje
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="prose prose-sm max-w-none dark:prose-invert text-foreground whitespace-pre-wrap">
                            {result.learningPaths}
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                )}
              </DialogContent>
            </Dialog>
          </div>
        </AnimatedSection>
    </section>
  );
}
