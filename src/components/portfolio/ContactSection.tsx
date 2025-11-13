
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

const contactDetails = [
  {
    icon: <Mail className="h-6 w-6 text-accent" />,
    label: "Email",
    value: "baltakoeln@icloud.com",
    href: "mailto:baltakoeln@icloud.com"
  },
  {
    icon: <Phone className="h-6 w-6 text-accent" />,
    label: "Teléfono",
    value: "+49 17657808931",
    href: "tel:+4917657808931"
  },
  {
    icon: <MapPin className="h-6 w-6 text-accent" />,
    label: "Ubicación",
    value: "Köln, Alemania",
    href: "#"
  }
];

const contactFormSchema = z.object({
  name: z.string().min(2, { message: "El nombre debe tener al menos 2 caracteres." }),
  email: z.string().email({ message: "Por favor, introduce un email válido." }),
  message: z.string().min(10, { message: "El mensaje debe tener al menos 10 caracteres." }),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

export function ContactSection() {
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

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
        title: "Mensaje Enviado",
        description: "Gracias por contactarme. Te responderé lo antes posible.",
      });
      form.reset();
    } else {
      toast({
        variant: "destructive",
        title: "Error al enviar",
        description: result.error || "No se pudo enviar el mensaje. Inténtalo de nuevo.",
      });
    }
  };

  return (
    <section id="contact" className="w-full bg-card">
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        <AnimatedSection>
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Contacto</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                ¿Tienes un proyecto en mente o quieres conectar? No dudes en contactarme.
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
                <CardTitle>Envíame un mensaje</CardTitle>
              </CardHeader>
              <CardContent>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Nombre</FormLabel>
                          <FormControl>
                            <Input placeholder="Tu nombre" {...field} />
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
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input placeholder="tu@email.com" {...field} />
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
                          <FormLabel>Mensaje</FormLabel>
                          <FormControl>
                            <Textarea placeholder="Escribe tu mensaje aquí..." className="resize-none" {...field} rows={5}/>
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
                      {loading ? "Enviando..." : "Enviar Mensaje"}
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
