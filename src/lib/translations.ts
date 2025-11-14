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
      greeting: "",
      title: 'Full Stack Web Developer based in Germany.',
      description: "I'm passionate about creating dynamic, responsive, and user-friendly websites. My journey into web development started with a curiosity about how websites work, and it has evolved into a passion for coding and design.",
      contactMe: 'Contact Me',
      myProjects: 'My Projects',
    },
    about: {
      title: 'About Me',
      subtitle: 'My Story & Skills',
      experience: [
        {
          period: "Nov 2025 - Present",
          role: "Internship as a full-stack web and software developer",
          company: "It-Solutions Ghostnet Systems. Lübeck Germany",
          description: "I am currently doing an internship as a full-stack web and software developer at It-Solutions Ghostnet Systems.",
        },
        {
          period: "Jun 2024 - Oct 2025",
          role: "Web and software developer studies",
          company: "Dci Digital Carrer institute in Berlin",
          description: "I studied web and software development at the Dci Digital Carrer institute in Berlin and finished in October 2025.",
        },
        {
          period: "2024",
          role: "German Level B2",
          company: "Aimed at the professions",
          description: "I studied German to a B2 level, focusing on professional language skills.",
        },
      ],
    },
    skills: {
        title: "Skills",
        subtitle: "My technical and personal skills.",
        categories: {
            languages_db: {
                title: "Languages & Databases",
                items: ["HTML", "CSS", "JavaScript", "TypeScript", "Bash"]
            },
            frameworks: {
                title: "Frameworks & Libraries",
                items: ["React", "Next.js", "Bootstrap", "Sass", "Responsive design", "Node.js", "Express.js", "RestAPI", "Mongoose", "Vite", "Bun", "Tailwind CSS"]
            },
            tools: {
                title: "Tools & Platforms",
                items: ["Git", "GitHub", "Linux", "Vscode", "Firebase", "Npm", "Postman", "Render", "Markdown", "Vercel"]
            },
            design: {
                title: "Design",
                items: ["UI/Ux Design", "Figma", "Canva"]
            },
            human_languages: {
                title: "Human Languages",
                items: ["Spanish (Native Speaker)", "German (B2)", "English (A2)"]
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
            tech: ['Next.js', 'Tailwind CSS', 'TypeScript'],
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
    skillRecommender: {
      title: "AI Skill Recommender",
      subtitle: "Analyze your skills and get personalized recommendations to boost your career.",
      openButton: "Get Recommendations",
      dialog: {
        title: "Skill Recommendation Tool",
        description: "Describe your current skills and career goals to get AI-powered recommendations.",
      },
      form: {
        currentSkills: "Your Current Skills",
        currentSkillsPlaceholder: "e.g., React, Node.js, SQL, project management...",
        careerGoals: "Your Career Goals",
        careerGoalsPlaceholder: "e.g., Become a senior full-stack developer, specialize in frontend...",
        generating: "Generating...",
        submit: "Get Recommendations",
        validation: {
          currentSkills: "Current skills must be at least 20 characters.",
          careerGoals: "Career goals must be at least 20 characters.",
        },
      },
      loading: {
        title: "Analyzing your profile...",
      },
      results: {
        recommendedSkills: "Recommended Skills",
        learningPaths: "Personalized Learning Paths",
      },
      toast: {
        success: {
          title: "Recommendations Ready!",
          description: "Your personalized skill recommendations have been generated.",
        },
        error: {
          title: "Uh oh! Something went wrong.",
          description: "Could not generate recommendations. Please try again.",
        },
      },
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
      greeting: '',
      title: 'Desarrollador Web FullStack residente en alemania',
      description: 'Me interesa mucho crear sitios web dinámicos, adaptables y fáciles de usar. Mi incursión en el desarrollo web comenzó con la curiosidad por saber cómo funcionan los sitios web, y evolucionó hasta convertirse en una pasión por la programación y el diseño.',
      contactMe: 'Contáctame',
      myProjects: 'Mis Proyectos',
    },
    about: {
      title: 'Sobre Mí',
      subtitle: 'Mi Historia y Habilidades',
      experience: [
        {
          period: "Nov 2025 - Presente",
          role: "Practicas de desarrollador web y software fullstack",
          company: "It-Solutions Ghostnet Systems. Lübeck Deutschland",
          description: "Realizo actualmente practicas de desarrollador web y software fullstack en la empresa It-Solutions Ghostnet Systems.",
        },
        {
          period: "Jun 2024 - Oct 2025",
          role: "Estudios de desarrollador web y del software",
          company: "Dci Digital Carrer institute en Berlin",
          description: "Realice estudios de desarrollador web y del softeare en Dci Digital Carrer institute en Berlin y acabe en octubre de 2025.",
        },
        {
          period: "2024",
          role: "Nivel B2 de Alemán",
          company: "Dirigido a las profesiones",
          description: "Estudié alemán hasta el nivel B2, enfocado en el ámbito profesional.",
        },
      ],
    },
    skills: {
        title: "Habilidades",
        subtitle: "Mis habilidades técnicas y personales.",
        categories: {
            languages_db: {
                title: "Lenguajes y Bases de Datos",
                items: ["HTML", "CSS", "JavaScript", "TypeScript", "Bash"]
            },
            frameworks: {
                title: "Frameworks y Librerías",
                items: ["React", "Next.js", "Bootstrap", "Sass", "Responsive design", "Node.js", "Express.js", "RestAPI", "Mongoose", "Vite", "Bun", "Tailwind CSS"]
            },
            tools: {
                title: "Herramientas y Plataformas",
                items: ["Git", "GitHub", "Linux", "Vscode", "Firebase", "Npm", "Postman", "Render", "Markdown", "Vercel"]
            },
            design: {
                title: "Diseño",
                items: ["UI/Ux Design", "Figma", "Canva"]
            },
            human_languages: {
                title: "Idiomas",
                items: ["Español (Lengua materna)", "Alemán (B2)", "Inglés (A2)"]
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
              tech: ['Next.js', 'Tailwind CSS', 'TypeScript'],
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
    skillRecommender: {
      title: "Recomendador de Habilidades con IA",
      subtitle: "Analiza tus habilidades y obtén recomendaciones personalizadas para impulsar tu carrera.",
      openButton: "Obtener Recomendaciones",
      dialog: {
        title: "Herramienta de Recomendación de Habilidades",
        description: "Describe tus habilidades actuales y objetivos profesionales para obtener recomendaciones con IA.",
      },
      form: {
        currentSkills: "Tus Habilidades Actuales",
        currentSkillsPlaceholder: "Ej: React, Node.js, SQL, gestión de proyectos...",
        careerGoals: "Tus Metas Profesionales",
        careerGoalsPlaceholder: "Ej: Convertirme en desarrollador full-stack senior, especializarme en frontend...",
        generating: "Generando...",
        submit: "Obtener Recomendaciones",
        validation: {
          currentSkills: "Las habilidades actuales deben tener al menos 20 caracteres.",
          careerGoals: "Las metas profesionales deben tener al menos 20 caracteres.",
        },
      },
      loading: {
        title: "Analizando tu perfil...",
      },
      results: {
        recommendedSkills: "Habilidades Recomendadas",
        learningPaths: "Rutas de Aprendizaje Personalizadas",
      },
      toast: {
        success: {
          title: "¡Recomendaciones Listas!",
          description: "Se han generado tus recomendaciones de habilidades personalizadas.",
        },
        error: {
          title: "¡Uy! Algo salió mal.",
          description: "No se pudieron generar las recomendaciones. Por favor, inténtalo de nuevo.",
        },
      },
    },
    footer: {
        copyright: '© 2024 Baltasar Garcia. Todos los derechos reservados.',
    }
  },
  de: {
    nav: [
      { href: '#home', label: 'Startseite' },
      { href: '#about', label: 'Über mich' },
      { href: '#projects', label: 'Projekte' },
      { href: '#contact', label: 'Kontakt' },
    ],
    hero: {
      greeting: '',
      title: 'Full-Stack Webentwickler mit Sitz in Deutschland.',
      description: 'Ich erstelle leidenschaftlich gerne dynamische, responsive und benutzerfreundliche Websites. Meine Reise in die Webentwicklung begann mit der Neugier, wie Websites funktionieren, und hat sich zu einer Leidenschaft für das Programmieren und Designen entwickelt.',
      contactMe: 'Kontaktieren Sie mich',
      myProjects: 'Meine Projekte',
    },
    about: {
      title: 'Über mich',
      subtitle: 'Meine Geschichte & Fähigkeiten',
      experience: [
        {
          period: "Nov 2025 - Heute",
          role: "Praktikum als Full-Stack-Web- und Softwareentwickler",
          company: "It-Solutions Ghostnet Systems. Lübeck Deutschland",
          description: "Ich absolviere derzeit ein Praktikum als Full-Stack-Web- und Softwareentwickler bei It-Solutions Ghostnet Systems.",
        },
        {
          period: "Jun 2024 - Okt 2025",
          role: "Studium der Web- und Softwareentwicklung",
          company: "Dci Digital Carrer institute in Berlin",
          description: "Ich habe am Dci Digital Carrer institute in Berlin Web- und Softwareentwicklung studiert und im Oktober 2025 abgeschlossen.",
        },
        {
          period: "2024",
          role: "Deutschniveau B2",
          company: "Berufsbezogen",
          description: "Ich habe berufsbezogenes Deutsch auf dem Niveau B2 gelernt.",
        },
      ],
    },
    skills: {
        title: "Fähigkeiten",
        subtitle: "Meine technischen und persönlichen Fähigkeiten.",
        categories: {
            languages_db: {
                title: "Sprachen & Datenbanken",
                items: ["HTML", "CSS", "JavaScript", "TypeScript", "Bash"]
            },
            frameworks: {
                title: "Frameworks & Bibliotheken",
                items: ["React", "Next.js", "Bootstrap", "Sass", "Responsive design", "Node.js", "Express.js", "RestAPI", "Mongoose", "Vite", "Bun", "Tailwind CSS"]
            },
            tools: {
                title: "Tools & Plattformen",
                items: ["Git", "GitHub", "Linux", "Vscode", "Firebase", "Npm", "Postman", "Render", "Markdown", "Vercel"]
            },
            design: {
                title: "Design",
                items: ["UI/Ux Design", "Figma", "Canva"]
            },
            human_languages: {
                title: "Menschliche Sprachen",
                items: ["Spanisch (Muttersprache)", "Deutsch (B2)", "Englisch (A2)"]
            }
        }
    },
    projects: {
        title: 'Ausgewählte Projekte',
        subtitle: 'Eine Auswahl meiner Arbeiten, die meine Fähigkeit demonstrieren, funktionale und ansprechende Webanwendungen zu erstellen.',
        projectList: [
            {
              title: 'The Modern House',
              description: 'Ein Klon der Website "The Modern House", einer auf Designerhäuser spezialisierten Immobilienagentur.',
              tech: ['HTML', 'CSS', 'JavaScript'],
              github: 'https://github.com/BALTASARGD/The-Modern-House',
              demo: 'https://baltasargd.github.io/The-Modern-House/',
              imageId: 'project-modern-house'
            },
            {
              title: 'MyControl',
              description: 'Eine Anwendung zur Verwaltung der persönlichen und familiären Finanzen mit Kontrolle über Einnahmen, Ausgaben und Budgets.',
              tech: ['Next.js', 'Tailwind CSS', 'Firebase', 'TypeScript'],
              github: 'https://github.com/BALTASARGD/MyControl',
              demo: 'https://my-control-eta.vercel.app/',
              imageId: 'project-my-control'
            },
            {
              title: 'Chore Champ App',
              description: 'Eine spielerische Anwendung zur Verwaltung von Hausarbeiten mit Fortschrittsverfolgung, Erfolgsserien und Erfolgen.',
              tech: ['Next.js', 'Tailwind CSS', 'Firebase', 'TypeScript'],
              github: 'https://github.com/BALTASARGD/chore-champ-app',
              demo: 'https://chore-champ-app.vercel.app/',
              imageId: 'project-chore-champ'
            },
            {
              title: 'E-Commerce-Plattform',
              description: 'Ein kompletter Online-Shop mit Warenkorb, Produktverwaltung und integriertem Zahlungsgateway.',
              tech: ['React', 'Node.js', 'MongoDB', 'Express'],
              github: 'https://github.com/BALTASARGD/ecommerce-platform',
              imageId: 'project-ecommerce'
            },
            {
              title: 'Aufgaben-Manager-App',
              description: 'Eine Anwendung zur Organisation täglicher Aufgaben mit Benutzerauthentifizierungssystem und Fortschrittsverfolgung.',
              tech: ['Next.js', 'Tailwind CSS', 'PostgreSQL', 'Prisma'],
              github: 'https://github.com/BALTASARGD/task-manager-app',
              imageId: 'project-task-manager'
            },
            {
              title: 'Portfolio-Website',
              description: 'Mein persönliches Portfolio, um meine Projekte, Fähigkeiten und beruflichen Erfahrungen zu präsentieren (genau diese Seite).',
              tech: ['Next.js', 'Tailwind CSS', 'TypeScript'],
              github: 'https://github.com/BALTASARGD/BaltaDev',
              demo: 'https://portfolio-seven-delta-66.vercel.app/',
              imageId: 'project-portfolio'
          },
        ]
    },
    contact: {
        title: "Kontakt",
        subtitle: "Ich bin offen für neue Möglichkeiten. Zögern Sie nicht, mich zu kontaktieren.",
        details: {
            email: { label: "Email" },
            phone: { label: "Telefon" },
            location: { label: "Standort", value: "Köln, Deutschland" }
        },
        form: {
            title: "Schicken Sie mir eine Nachricht",
            name: "Name",
            namePlaceholder: "Ihr Name",
            email: "Email",
            emailPlaceholder: "Ihre E-Mail",
            message: "Nachricht",
            messagePlaceholder: "Ihre Nachricht",
            sending: "Wird gesendet...",
            submit: "Nachricht senden",
            validation: {
                name: "Der Name muss mindestens 2 Zeichen lang sein.",
                email: "Bitte geben Sie eine gültige E-Mail-Adresse ein.",
                message: "Die Nachricht muss mindestens 10 Zeichen lang sein."
            }
        },
        toast: {
            success: {
                title: "Nachricht gesendet!",
                description: "Vielen Dank für Ihre Kontaktaufnahme. Ich werde mich bald bei Ihnen melden."
            },
            error: {
                title: "Oh oh! Etwas ist schief gelaufen.",
                description: "Es gab ein Problem mit Ihrer Anfrage."
            }
        }
    },
    skillRecommender: {
      title: "KI-Fähigkeiten-Empfehler",
      subtitle: "Analysieren Sie Ihre Fähigkeiten und erhalten Sie personalisierte Empfehlungen, um Ihre Karriere voranzutreiben.",
      openButton: "Empfehlungen erhalten",
      dialog: {
        title: "Tool zur Empfehlung von Fähigkeiten",
        description: "Beschreiben Sie Ihre aktuellen Fähigkeiten und Karriereziele, um KI-gestützte Empfehlungen zu erhalten.",
      },
      form: {
        currentSkills: "Ihre aktuellen Fähigkeiten",
        currentSkillsPlaceholder: "z.B. React, Node.js, SQL, Projektmanagement...",
        careerGoals: "Ihre Karriereziele",
        careerGoalsPlaceholder: "z.B. Senior Full-Stack-Entwickler werden, sich auf Frontend spezialisieren...",
        generating: "Wird generiert...",
        submit: "Empfehlungen erhalten",
        validation: {
          currentSkills: "Die aktuellen Fähigkeiten müssen mindestens 20 Zeichen lang sein.",
          careerGoals: "Die Karriereziele müssen mindestens 20 Zeichen lang sein.",
        },
      },
      loading: {
        title: "Ihr Profil wird analysiert...",
      },
      results: {
        recommendedSkills: "Empfohlene Fähigkeiten",
        learningPaths: "Personalisierte Lernpfade",
      },
      toast: {
        success: {
          title: "Empfehlungen bereit!",
          description: "Ihre personalisierten Fähigkeitsempfehlungen wurden generiert.",
        },
        error: {
          title: "Oh oh! Etwas ist schief gelaufen.",
          description: "Empfehlungen konnten nicht generiert werden. Bitte versuchen Sie es erneut.",
        },
      },
    },
    footer: {
        copyright: '© 2024 Baltasar Garcia. Alle Rechte vorbehalten.',
    }
  }
};

export type Language = keyof typeof translations;

export const ICONS = {
  github: Github,
  linkedin: Linkedin,
};
