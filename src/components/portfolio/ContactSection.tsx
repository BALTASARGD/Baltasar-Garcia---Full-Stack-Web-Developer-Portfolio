import Link from 'next/link';
import { Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { AnimatedSection } from './AnimatedSection';

const contactDetails = [
  {
    icon: <Mail className="h-6 w-6 text-accent" />,
    label: "Email",
    value: "baltasar.garcia.dev@email.com",
    href: "mailto:baltasar.garcia.dev@email.com"
  },
  {
    icon: <Phone className="h-6 w-6 text-accent" />,
    label: "Teléfono",
    value: "+54 9 11 1234-5678",
    href: "tel:+5491112345678"
  },
  {
    icon: <MapPin className="h-6 w-6 text-accent" />,
    label: "Ubicación",
    value: "Buenos Aires, Argentina",
    href: "#"
  }
];

export function ContactSection() {
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
        
        <div className="mx-auto max-w-4xl py-12">
            <AnimatedSection delay={100}>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {contactDetails.map((detail) => (
                  <div key={detail.label} className="flex flex-col items-center text-center">
                    {detail.icon}
                    <h3 className="text-lg font-semibold mt-4">{detail.label}</h3>
                    <Link href={detail.href} className="text-muted-foreground hover:text-primary transition-colors">
                      {detail.value}
                    </Link>
                  </div>
                ))}
              </div>
            </AnimatedSection>
            <AnimatedSection delay={200}>
                <div className="flex justify-center space-x-4 mt-12">
                    <Button variant="ghost" size="icon" asChild>
                      <Link href="https://github.com/baltasar-garcia" target="_blank" aria-label="GitHub">
                        <Github className="h-8 w-8 text-muted-foreground hover:text-primary" />
                      </Link>
                    </Button>
                    <Button variant="ghost" size="icon" asChild>
                      <Link href="https://linkedin.com/in/baltasar-garcia" target="_blank" aria-label="LinkedIn">
                        <Linkedin className="h-8 w-8 text-muted-foreground hover:text-primary" />
                      </Link>
                    </Button>
                </div>
            </AnimatedSection>
        </div>
      </div>
    </section>
  );
}