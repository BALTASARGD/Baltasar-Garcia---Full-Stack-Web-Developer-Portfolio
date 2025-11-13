import { Github, Linkedin } from 'lucide-react';

export const translations = {
  en: {
    nav: [
      { href: '#home', label: 'Home' },
      { href: '#about', label: 'About' },
      { href: '#projects', label: 'Projects' },
      { href: '#contact', label: 'Contact' },
    ],
    hero: {
      greeting: "Hello world, I'm Balta Garcia",
      title: 'Junior Web Developer based in Germany.',
      description: "I'm passionate about creating dynamic, responsive, and user-friendly websites. My journey into web development started with a curiosity about how websites work, and it has evolved into a passion for coding and design.",
      contactMe: 'Contact Me',
      myProjects: 'My Projects',
    },
    about: {
      title: 'About Me',
      subtitle: 'My Story & Skills',
      experience: [
        {
          period: "2022 - Present",
          role: "Self-Taught Web Developer",
          company: "Personal Projects",
          description: "My interest in web development began when I decided to build a website for my personal training business. This sparked a deep curiosity that led me to dive into the world of programming, starting with the basics of HTML, CSS, and JavaScript, and then moving on to modern frameworks like React and Next.js.",
        },
        {
          period: "Today",
          role: "Aspiring Junior Developer",
          company: "Open to Opportunities",
          description: "I thrive on challenges and enjoy solving complex problems. I am a lifelong learner, constantly seeking to expand my knowledge and skills. My goal is to use my passion for technology to create meaningful and impactful solutions.",
        },
      ],
    },
    skills: {
        title: "Skills",
        subtitle: "My technical and personal skills.",
        categories: {
            languages_db: {
                title: "Languages & Databases",
                items: ["HTML", "CSS", "JavaScript", "TypeScript", "Python", "SQL"]
            },
            frameworks: {
                title: "Frameworks & Libraries",
                items: ["React", "Next.js", "Node.js", "Express", "Tailwind CSS", "shadcn/ui"]
            },
            tools: {
                title: "Tools & Platforms",
                items: ["Git", "GitHub", "Docker", "Firebase", "Vercel", "Genkit"]
            },
            design: {
                title: "Design",
                items: ["Figma", "Canva"]
            },
            human_languages: {
                title: "Human Languages",
                items: ["Spanish (Native)", "English (C1)", "German (B1)"]
            }
        }
    },
    projects: {
        title: 'Featured Projects',
        subtitle: 'A selection of my work that demonstrates my ability to build functional and engaging web applications.',
        projectList: [
          {
            title: 'The Modern House',
            description: 'A clone of the website "The Modern House", a real estate agency specializing in designer homes.',
            tech: ['HTML', 'CSS', 'JavaScript'],
            github: 'https://github.com/BALTASARGD/The-Modern-House',
            demo: 'https://baltasargd.github.io/The-Modern-House/',
            imageId: 'project-modern-house'
          },
          {
            title: 'MyControl',
            description: 'An application for managing personal and family finances, with control over income, expenses, and budgets.',
            tech: ['Next.js', 'Tailwind CSS', 'Firebase', 'TypeScript'],
            github: 'https://github.com/BALTASARGD/MyControl',
            demo: 'https://my-control-eta.vercel.app/',
            imageId: 'project-my-control'
          },
          {
            title: 'Chore Champ App',
            description: 'A gamified application to manage household chores, with progress tracking, streaks, and achievements.',
            tech: ['Next.js', 'Tailwind CSS', 'Firebase', 'TypeScript'],
            github: 'https://github.com/BALTASARGD/chore-champ-app',
            demo: 'https://chore-champ-app.vercel.app/',
            imageId: 'project-chore-champ'
          },
          {
            title: 'E-commerce Platform',
            description: 'A complete online store with a shopping cart, product management, and integrated payment gateway.',
            tech: ['React', 'Node.js', 'MongoDB', 'Express'],
            github: 'https://github.com/BALTASARGD/ecommerce-platform',
            imageId: 'project-ecommerce'
          },
          {
            title: 'Task Manager App',
            description: 'An application to organize daily tasks with a user authentication system and progress tracking.',
            tech: ['Next.js', 'Tailwind CSS', 'PostgreSQL', 'Prisma'],
            github: 'https://github.com/BALTASARGD/task-manager-app',
            imageId: 'project-task-manager'
          },
          {
            title: 'Portfolio Website',
            description: 'My personal portfolio to showcase my projects, skills, and professional experience (this very site).',
            tech: ['Next.js', 'Tailwind CSS', 'TypeScript', 'Genkit'],
            github: 'https://github.com/BALTASARGD/BaltaDev',
            demo: 'https://portfolio-seven-delta-66.vercel.app/',
            imageId: 'project-portfolio'
        },
        ]
    },
    contact: {
        title: "Contact Me",
        subtitle: "I'm open to new opportunities. Feel free to reach out.",
        details: {
            email: { label: "Email" },
            phone: { label: "Phone" },
            location: { label: "Location", value: "Cologne, Germany" }
        },
        form: {
            title: "Send me a message",
            name: "Name",
            namePlaceholder: "Your name",
            email: "Email",
            emailPlaceholder: "Your email",
            message: "Message",
            messagePlaceholder: "Your message",
            sending: "Sending...",
            submit: "Send Message",
            validation: {
                name: "Name must be at least 2 characters.",
                email: "Please enter a valid email.",
                message: "Message must be at least 10 characters."
            }
        },
        toast: {
            success: {
                title: "Message Sent!",
                description: "Thanks for reaching out. I'll get back to you soon."
            },
            error: {
                title: "Uh oh! Something went wrong.",
                description: "There was a problem with your request."
            }
        }
    },
    footer: {
        copyright: '© 2024 Baltasar Garcia. All rights reserved.',
    }
  },
  es: {
    nav: [
      { href: '#home', label: 'Inicio' },
      { href: '#about', label: 'Sobre Mí' },
      { href: '#projects', label: 'Proyectos' },
      { href: '#contact', label: 'Contacto' },
    ],
    hero: {
      greeting: 'Hola mundo, soy Balta García',
      title: 'Desarrollador web junior residente en Alemania.',
      description: 'Me interesa mucho crear sitios web dinámicos, adaptables y fáciles de usar. Mi incursión en el desarrollo web comenzó con la curiosidad por saber cómo funcionan los sitios web, y evolucionó hasta convertirse en una pasión por la programación y el diseño.',
      contactMe: 'Contáctame',
      myProjects: 'Mis Proyectos',
    },
    about: {
      title: 'Sobre Mí',
      subtitle: 'Mi Historia y Habilidades',
      experience: [
        {
          period: "2022 - Presente",
          role: "Desarrollador Web Autodidacta",
          company: "Proyectos Personales",
          description: "Mi interés en el desarrollo web comenzó cuando decidí construir un sitio web para mi negocio de entrenamiento personal. Esto despertó una profunda curiosidad que me llevó a sumergirme en el mundo de la programación, comenzando con los fundamentos de HTML, CSS y JavaScript, y luego pasando a frameworks modernos como React y Next.js.",
        },
        {
          period: "Hoy",
          role: "Aspirante a Desarrollador Junior",
          company: "Abierto a Oportunidades",
          description: "Me gustan los desafíos y disfruto resolviendo problemas complejos. Soy un aprendiz de por vida, buscando constantemente expandir mis conocimientos y habilidades. Mi objetivo es utilizar mi pasión por la tecnología para crear soluciones significativas e impactantes.",
        },
      ],
    },
    skills: {
        title: "Habilidades",
        subtitle: "Mis habilidades técnicas y personales.",
        categories: {
            languages_db: {
                title: "Lenguajes y Bases de Datos",
                items: ["HTML", "CSS", "JavaScript", "TypeScript", "Python", "SQL"]
            },
            frameworks: {
                title: "Frameworks y Librerías",
                items: ["React", "Next.js", "Node.js", "Express", "Tailwind CSS", "shadcn/ui"]
            },
            tools: {
                title: "Herramientas y Plataformas",
                items: ["Git", "GitHub", "Docker", "Firebase", "Vercel", "Genkit"]
            },
            design: {
                title: "Diseño",
                items: ["Figma", "Canva"]
            },
            human_languages: {
                title: "Idiomas",
                items: ["Español (Nativo)", "Inglés (C1)", "Alemán (B1)"]
            }
        }
    },
    projects: {
        title: 'Proyectos Destacados',
        subtitle: 'Una selección de mis trabajos que demuestran mi capacidad para construir aplicaciones web funcionales y atractivas.',
        projectList: [
            {
              title: 'The Modern House',
              description: 'Clone de la página web de "The Modern House", una inmobiliaria especializada en casas de diseño.',
              tech: ['HTML', 'CSS', 'JavaScript'],
              github: 'https://github.com/BALTASARGD/The-Modern-House',
              demo: 'https://baltasargd.github.io/The-Modern-House/',
              imageId: 'project-modern-house'
            },
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
              github: 'https://github.com/BALTASARGD/ecommerce-platform',
              imageId: 'project-ecommerce'
            },
            {
              title: 'App de Gestión de Tareas',
              description: 'Aplicación para organizar tareas diarias con sistema de autenticación de usuarios y seguimiento de progreso.',
              tech: ['Next.js', 'Tailwind CSS', 'PostgreSQL', 'Prisma'],
              github: 'https://github.com/BALTASARGD/task-manager-app',
              imageId: 'project-task-manager'
            },
            {
              title: 'Sitio Web Portafolio',
              description: 'Mi portafolio personal para mostrar mis proyectos, habilidades y experiencia profesional (este mismo sitio).',
              tech: ['Next.js', 'Tailwind CSS', 'TypeScript', 'Genkit'],
              github: 'https://github.com/BALTASARGD/BaltaDev',
              demo: 'https://portfolio-seven-delta-66.vercel.app/',
              imageId: 'project-portfolio'
          },
        ]
    },
    contact: {
        title: "Contacto",
        subtitle: "Estoy abierto a nuevas oportunidades. No dudes en contactarme.",
        details: {
            email: { label: "Correo" },
            phone: { label: "Teléfono" },
            location: { label: "Ubicación", value: "Colonia, Alemania" }
        },
        form: {
            title: "Envíame un mensaje",
            name: "Nombre",
            namePlaceholder: "Tu nombre",
            email: "Correo",
            emailPlaceholder: "Tu correo electrónico",
            message: "Mensaje",
            messagePlaceholder: "Tu mensaje",
            sending: "Enviando...",
            submit: "Enviar Mensaje",
            validation: {
                name: "El nombre debe tener al menos 2 caracteres.",
                email: "Por favor, introduce un correo electrónico válido.",
                message: "El mensaje debe tener al menos 10 caracteres."
            }
        },
        toast: {
            success: {
                title: "¡Mensaje Enviado!",
                description: "Gracias por contactarme. Te responderé pronto."
            },
            error: {
                title: "¡Uy! Algo salió mal.",
                description: "Hubo un problema con tu solicitud."
            }
        }
    },
    footer: {
        copyright: '© 2024 Baltasar Garcia. Todos los derechos reservados.',
    }
  },
};

export type Language = keyof typeof translations;

export const ICONS = {
  github: Github,
  linkedin: Linkedin,
};
