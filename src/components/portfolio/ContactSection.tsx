"use client";

import Link from 'next/link';
import { Mail, MapPin, Github, Linkedin, Phone, Send, LoaderCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { AnimatedSection } from './AnimatedSection';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { sendContactMessage } from '@/app/contact-actions';
import { useState } from 'react';
import { translations, type Language } from '@/lib/translations';

export function ContactSection({ language }: { language: Language }) {
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();
  const t = translations[language].contact;

  const contactFormSchema = z.object({
    name: z.string().min(2, { message: t.form.validation.name }),
    email: z.string().email({ message: t.form.validation.email }),
    message: z.string().min(10, { message: t.form.validation.message }),
  });
  
  type ContactFormValues = z.infer<typeof contactFormSchema>;

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormValues) => {
    setLoading(true);
    const result = await sendContactMessage(data);
    setLoading(false);

    if (result.success) {
      toast({
        title: t.toast.success.title,
        description: t.toast.success.description,
      });
      form.reset();
    } else {
      toast({
        variant: "destructive",
        title: t.toast.error.title,
        description: result.error || t.toast.error.description,
      });
    }
  };
  
  const contactDetails = [
    {
      icon: <Mail className="h-6 w-6 text-accent" />,
      label: t.details.email.label,
      value: "baltakoeln@icloud.com",
      href: "mailto:baltakoeln@icloud.com"
    },
    {
      icon: <Phone className="h-6 w-6 text-accent" />,
      label: t.details.phone.label,
      value: "+49 17657808931",
      href: "tel:+4917657808931"
    },
    {
      icon: <MapPin className="h-6 w-6 text-accent" />,
      label: t.details.location.label,
      value: t.details.location.value,
      href: "#"
    }
  ];

  return (
    <section id="contact" className="w-full bg-card">
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
        
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 py-12 lg:grid-cols-2">
          <AnimatedSection delay={100}>
            <div className="space-y-8">
              {contactDetails.map((detail) => (
                <div key={detail.label} className="flex items-start gap-4">
                  <div className="flex-shrink-0">{detail.icon}</div>
                  <div>
                    <h3 className="text-lg font-semibold">{detail.label}</h3>
                    <Link href={detail.href} className="text-muted-foreground hover:text-primary transition-colors">
                      {detail.value}
                    </Link>
                  </div>
                </div>
              ))}
              <div className="flex items-start gap-4">
                 <div className="flex-shrink-0">
                    <Linkedin className="h-6 w-6 text-accent" />
                 </div>
                 <div>
                    <h3 className="text-lg font-semibold">LinkedIn</h3>
                    <Link href="https://www.linkedin.com/in/balta-garcia-68a50434a/" target="_blank" className="text-muted-foreground hover:text-primary transition-colors">
                      in/balta-garcia-68a50434a
                    </Link>
                 </div>
              </div>
              <div className="flex items-start gap-4">
                 <div className="flex-shrink-0">
                    <Github className="h-6 w-6 text-accent" />
                 </div>
                 <div>
                    <h3 className="text-lg font-semibold">GitHub</h3>
                    <Link href="https://github.com/BALTASARGD" target="_blank" className="text-muted-foreground hover:text-primary transition-colors">
                      BALTASARGD
                    </Link>
                 </div>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={200}>
            <Card>
              <CardHeader>
                <CardTitle>{t.form.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>{t.form.name}</FormLabel>
                          <FormControl>
                            <Input placeholder={t.form.namePlaceholder} {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>{t.form.email}</FormLabel>
                          <FormControl>
                            <Input placeholder={t.form.emailPlaceholder} {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>{t.form.message}</FormLabel>
                          <FormControl>
                            <Textarea placeholder={t.form.messagePlaceholder} className="resize-none" {...field} rows={5}/>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button type="submit" className="w-full" disabled={loading}>
                      {loading ? (
                        <LoaderCircle className="mr-2 h-4 w-4 animate-spin" />
                      ) : (
                        <Send className="mr-2 h-4 w-4" />
                      )}
                      {loading ? t.form.sending : t.form.submit}
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
