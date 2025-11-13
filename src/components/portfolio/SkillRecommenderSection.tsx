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
import { translations, type Language } from '@/lib/translations';

export function SkillRecommenderSection({ language }: { language: Language }) {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<SkillRecommendationOutput | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const { toast } = useToast();
  const t = translations[language].skillRecommender;

  const formSchema = z.object({
    currentSkills: z.string().min(20, t.form.validation.currentSkills),
    careerGoals: z.string().min(20, t.form.validation.careerGoals),
  });

  type FormValues = z.infer<typeof formSchema>;

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
        title: t.toast.success.title,
        description: t.toast.success.description,
      });
    } else {
      toast({
        variant: "destructive",
        title: t.toast.error.title,
        description: response.error || t.toast.error.description,
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
              {t.title}
            </h2>
            <p className="max-w-[900px] mt-4 text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              {t.subtitle}
            </p>
            <Dialog open={isOpen} onOpenChange={handleOpenChange}>
              <DialogTrigger asChild>
                <Button className="mt-8">{t.openButton}</Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[625px] max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle>{t.dialog.title}</DialogTitle>
                  <DialogDescription>
                    {t.dialog.description}
                  </DialogDescription>
                </DialogHeader>
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                      <FormField
                        control={form.control}
                        name="currentSkills"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>{t.form.currentSkills}</FormLabel>
                            <FormControl>
                              <Textarea
                                placeholder={t.form.currentSkillsPlaceholder}
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
                            <FormLabel>{t.form.careerGoals}</FormLabel>
                            <FormControl>
                              <Textarea
                                placeholder={t.form.careerGoalsPlaceholder}
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
                            {t.form.generating}
                          </>
                        ) : (
                          t.form.submit
                        )}
                      </Button>
                    </form>
                  </Form>

                {loading && (
                    <Card className="mt-6">
                      <CardHeader>
                        <CardTitle className="animate-pulse text-base">{t.loading.title}</CardTitle>
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
                            {t.results.recommendedSkills}
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
                            {t.results.learningPaths}
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
