export type Language = 'es' | 'en' | 'de';

export const translations = {
  es: {
    header: {
      nav: [
        { href: '#home', label: 'Inicio' },
        { href: '#about', label: 'Sobre mí' },
        { href: '#skills', label: 'Habilidades' },
        { href: '#projects', label: 'Proyectos' },
        { href: '#contact', label: 'Contacto' },
      ],
      selectLanguage: "Seleccionar idioma",
      spanish: "Español",
      english: "English",
      german: "Deutsch",
      openMenu: "Abrir menú"
    },
    hero: {
      title: 'Full Stack Web Developer',
      description: '¡Hola! Soy Baltasar, un apasionado desarrollador Full Stack con base en Argentina. Me especializo en crear experiencias web fluidas, modernas y escalables.',
      contactMe: 'Contáctame',
      myProjects: 'Mis Proyectos',
    },
    about: {
      title: 'Sobre Mí',
      subtitle: 'Mi objetivo es transformar ideas en soluciones digitales robustas y eficientes, combinando diseño limpio con código de alta calidad.',
      experience: [
        {
          role: "Prácticas: Desarrollador Web y Software Fullstack",
          company: "It-Solutions Ghostnet Systems",
          period: "Nov 2025 - Presente",
          description: "Realizando prácticas profesionales en desarrollo Full Stack en Lübeck, Alemania.",
        },
        {
          role: "Desarrollador Web y Software",
          company: "DCI Digital Career Institute",
          period: "2023 - Oct 2025",
          description: "Formación intensiva en desarrollo web y de software en Berlín, Alemania.",
        },
        {
          role: "Curso de Alemán Profesional",
          company: "Nivel B2",
          period: "2024",
          description: "Estudios de alemán enfocados en el ámbito profesional para alcanzar el nivel B2.",
        },
      ]
    },
    skills: {
        title: 'Habilidades',
        subtitle: 'Un vistazo a las tecnologías y herramientas con las que trabajo para construir aplicaciones web modernas.',
        categories: {
            languages_db: {
                title: "Lenguajes & Bases de Datos",
                items: ["HTML", "CSS", "JavaScript", "TypeScript", "MongoDB", "Sass", "Bash", "Markdown"],
            },
            frameworks: {
                title: "Frameworks & Librerías",
                items: ["React", "Next.js", "Tailwind CSS", "Node.js", "Express.js", "Bootstrap", "Mongoose", "RestAPI"],
            },
            tools: {
                title: "Herramientas",
                items: ["Git", "GitHub", "Vite", "Bun", "Linux", "Vscode", "Firebase", "Npm", "Postman", "Render"],
            },
            design: {
                title: "Diseño UI/UX",
                items: ["UI/UX Design", "Figma", "Canva", "Responsive Design"],
            },
            human_languages: {
                title: "Idiomas",
                items: ["Español (Nativo)", "Inglés (A2)", "Alemán (B2)", "Catalán (C1)"],
            },
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
        title: 'Contacto',
        subtitle: '¿Tienes un proyecto en mente o quieres conectar? No dudes en contactarme.',
        details: {
            email: { label: 'Email' },
            phone: { label: 'Teléfono' },
            location: { label: 'Ubicación', value: 'Köln, Alemania' }
        },
        form: {
            title: 'Envíame un mensaje',
            name: 'Nombre',
            namePlaceholder: 'Tu nombre',
            emailPlaceholder: 'tu@email.com',
            message: 'Mensaje',
            messagePlaceholder: 'Escribe tu mensaje aquí...',
            submit: 'Enviar Mensaje',
            sending: 'Enviando...',
            validation: {
                name: 'El nombre debe tener al menos 2 caracteres.',
                email: 'Por favor, introduce un email válido.',
                message: 'El mensaje debe tener al menos 10 caracteres.',
            }
        },
        toast: {
            success: {
                title: 'Mensaje Enviado',
                description: 'Gracias por contactarme. Te responderé lo antes posible.',
            },
            error: {
                title: 'Error al enviar',
                description: 'No se pudo enviar el mensaje. Inténtalo de nuevo.',
            }
        }
    },
    skillRecommender: {
        title: 'Recomendador de Habilidades',
        subtitle: 'Utiliza esta herramienta de IA para obtener recomendaciones personalizadas sobre qué habilidades aprender para alcanzar tus metas profesionales.',
        openButton: 'Abrir Recomendador',
        dialog: {
            title: 'Recomendador de Habilidades con IA',
            description: 'Describe tus habilidades actuales y metas para recibir un plan de aprendizaje personalizado.',
        },
        form: {
            currentSkills: 'Habilidades Actuales',
            currentSkillsPlaceholder: 'Ej: React, Node.js, Express, MongoDB, REST APIs...',
            careerGoals: 'Metas Profesionales',
            careerGoalsPlaceholder: 'Ej: Convertirme en un arquitecto de software, especializarme en DevOps, liderar un equipo de desarrollo...',
            submit: 'Obtener Recomendación',
            generating: 'Generando...',
            validation: {
                currentSkills: "Por favor, detalla tus habilidades actuales con más de 20 caracteres.",
                careerGoals: "Por favor, describe tus metas profesionales con más de 20 caracteres.",
            }
        },
        loading: {
            title: 'Analizando tu perfil...',
        },
        results: {
            recommendedSkills: 'Habilidades Recomendadas',
            learningPaths: 'Rutas de Aprendizaje',
        },
        toast: {
            success: {
                title: "Recomendación generada",
                description: "Tu plan de aprendizaje personalizado está listo.",
            },
            error: {
                title: "Error",
                description: "No se pudieron generar las recomendaciones. Inténtalo de nuevo.",
            }
        }
    },
    footer: {
      copyright: 'Baltasar García. Todos los derechos reservados.'
    }
  },
  en: {
    header: {
      nav: [
        { href: '#home', label: 'Home' },
        { href: '#about', label: 'About Me' },
        { href: '#skills', label: 'Skills' },
        { href: '#projects', label: 'Projects' },
        { href: '#contact', label: 'Contact' },
      ],
      selectLanguage: "Select language",
      spanish: "Español",
      english: "English",
      german: "Deutsch",
      openMenu: "Open menu"
    },
    hero: {
      title: 'Full Stack Web Developer',
      description: 'Hello! I\'m Baltasar, a passionate Full Stack developer based in Argentina. I specialize in creating fluid, modern, and scalable web experiences.',
      contactMe: 'Contact Me',
      myProjects: 'My Projects',
    },
    about: {
      title: 'About Me',
      subtitle: 'My goal is to transform ideas into robust and efficient digital solutions, combining clean design with high-quality code.',
      experience: [
        {
          role: "Internship: Fullstack Web and Software Developer",
          company: "It-Solutions Ghostnet Systems",
          period: "Nov 2025 - Present",
          description: "Undertaking a professional internship in Full Stack development in Lübeck, Germany.",
        },
        {
          role: "Web and Software Developer",
          company: "DCI Digital Career Institute",
          period: "2023 - Oct 2025",
          description: "Intensive training in web and software development in Berlin, Germany.",
        },
        {
          role: "Professional German Course",
          company: "B2 Level",
          period: "2024",
          description: "German studies focused on the professional field to achieve B2 level.",
        },
      ]
    },
    skills: {
        title: 'Skills',
        subtitle: 'A look at the technologies and tools I work with to build modern web applications.',
        categories: {
            languages_db: {
                title: "Languages & Databases",
                items: ["HTML", "CSS", "JavaScript", "TypeScript", "MongoDB", "Sass", "Bash", "Markdown"],
            },
            frameworks: {
                title: "Frameworks & Libraries",
                items: ["React", "Next.js", "Tailwind CSS", "Node.js", "Express.js", "Bootstrap", "Mongoose", "RestAPI"],
            },
            tools: {
                title: "Tools",
                items: ["Git", "GitHub", "Vite", "Bun", "Linux", "Vscode", "Firebase", "Npm", "Postman", "Render"],
            },
            design: {
                title: "UI/UX Design",
                items: ["UI/UX Design", "Figma", "Canva", "Responsive Design"],
            },
            human_languages: {
                title: "Languages",
                items: ["Spanish (Native)", "English (A2)", "German (B2)", "Catalan (C1)"],
            },
        }
    },
    projects: {
        title: 'Featured Projects',
        subtitle: 'A selection of my work that demonstrates my ability to build functional and attractive web applications.',
        projectList: [
            {
              title: 'The Modern House',
              description: 'Clone of the "The Modern House" website, a real estate agency specializing in designer homes.',
              tech: ['HTML', 'CSS', 'JavaScript'],
              github: 'https://github.com/BALTASARGD/The-Modern-House',
              demo: 'https://baltasargd.github.io/The-Modern-House/',
              imageId: 'project-modern-house'
            },
            {
              title: 'MyControl',
              description: 'Application for managing personal and family finances, with control of income, expenses, and budgets.',
              tech: ['Next.js', 'Tailwind CSS', 'Firebase', 'TypeScript'],
              github: 'https://github.com/BALTASARGD/MyControl',
              demo: 'https://my-control-eta.vercel.app/',
              imageId: 'project-my-control'
            },
            {
              title: 'Chore Champ App',
              description: 'Gamified application to manage household chores, with progress tracking, streaks, and achievements.',
              tech: ['Next.js', 'Tailwind CSS', 'Firebase', 'TypeScript'],
              github: 'https://github.com/BALTASARGD/chore-champ-app',
              demo: 'https://chore-champ-app.vercel.app/',
              imageId: 'project-chore-champ'
            },
            {
              title: 'E-commerce Platform',
              description: 'Complete online store with shopping cart, product management, and integrated payment gateway.',
              tech: ['React', 'Node.js', 'MongoDB', 'Express'],
              github: 'https://github.com/BALTASARGD/ecommerce-platform',
              imageId: 'project-ecommerce'
            },
            {
              title: 'Task Manager App',
              description: 'Application to organize daily tasks with user authentication system and progress tracking.',
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
        title: 'Contact',
        subtitle: 'Have a project in mind or want to connect? Feel free to contact me.',
        details: {
            email: { label: 'Email' },
            phone: { label: 'Phone' },
            location: { label: 'Location', value: 'Cologne, Germany' }
        },
        form: {
            title: 'Send me a message',
            name: 'Name',
            namePlaceholder: 'Your name',
            emailPlaceholder: 'you@email.com',
            message: 'Message',
            messagePlaceholder: 'Write your message here...',
            submit: 'Send Message',
            sending: 'Sending...',
            validation: {
                name: 'Name must be at least 2 characters long.',
                email: 'Please enter a valid email.',
                message: 'Message must be at least 10 characters long.',
            }
        },
        toast: {
            success: {
                title: 'Message Sent',
                description: 'Thank you for contacting me. I will get back to you as soon as possible.',
            },
            error: {
                title: 'Error sending',
                description: 'Could not send the message. Please try again.',
            }
        }
    },
    skillRecommender: {
        title: 'Skill Recommender',
        subtitle: 'Use this AI tool to get personalized recommendations on what skills to learn to achieve your career goals.',
        openButton: 'Open Recommender',
        dialog: {
            title: 'AI Skill Recommender',
            description: 'Describe your current skills and goals to receive a personalized learning plan.',
        },
        form: {
            currentSkills: 'Current Skills',
            currentSkillsPlaceholder: 'e.g., React, Node.js, Express, MongoDB, REST APIs...',
            careerGoals: 'Career Goals',
            careerGoalsPlaceholder: 'e.g., Become a software architect, specialize in DevOps, lead a development team...',
            submit: 'Get Recommendation',
            generating: 'Generating...',
            validation: {
                currentSkills: "Please detail your current skills with more than 20 characters.",
                careerGoals: "Please describe your career goals with more than 20 characters.",
            }
        },
        loading: {
            title: 'Analyzing your profile...',
        },
        results: {
            recommendedSkills: 'Recommended Skills',
            learningPaths: 'Learning Paths',
        },
        toast: {
            success: {
                title: "Recommendation generated",
                description: "Your personalized learning plan is ready.",
            },
            error: {
                title: "Error",
                description: "Could not generate recommendations. Please try again.",
            }
        }
    },
    footer: {
      copyright: 'Baltasar García. All rights reserved.'
    }
  },
  de: {
    header: {
      nav: [
        { href: '#home', label: 'Startseite' },
        { href: '#about', label: 'Über mich' },
        { href: '#skills', label: 'Fähigkeiten' },
        { href: '#projects', label: 'Projekte' },
        { href: '#contact', label: 'Kontakt' },
      ],
      selectLanguage: "Sprache auswählen",
      spanish: "Español",
      english: "English",
      german: "Deutsch",
      openMenu: "Menü öffnen"
    },
    hero: {
      title: 'Full-Stack-Webentwickler',
      description: 'Hallo! Ich bin Baltasar, ein leidenschaftlicher Full-Stack-Entwickler aus Argentinien. Ich bin darauf spezialisiert, flüssige, moderne und skalierbare Weberlebnisse zu schaffen.',
      contactMe: 'Kontakt',
      myProjects: 'Meine Projekte',
    },
    about: {
      title: 'Über Mich',
      subtitle: 'Mein Ziel ist es, Ideen in robuste und effiziente digitale Lösungen zu verwandeln, indem ich sauberes Design mit hochwertigem Code kombiniere.',
      experience: [
        {
          role: "Praktikum: Fullstack Web- und Softwareentwickler",
          company: "It-Solutions Ghostnet Systems",
          period: "Nov 2025 - Heute",
          description: "Berufspraktikum in der Full-Stack-Entwicklung in Lübeck, Deutschland.",
        },
        {
          role: "Web- und Softwareentwickler",
          company: "DCI Digital Career Institute",
          period: "2023 - Okt 2025",
          description: "Intensive Ausbildung in Web- und Softwareentwicklung in Berlin, Deutschland.",
        },
        {
          role: "Berufsbezogener Deutschkurs",
          company: "Niveau B2",
          period: "2024",
          description: "Deutschstudium mit Schwerpunkt auf dem beruflichen Bereich zur Erreichung des Niveaus B2.",
        },
      ]
    },
    skills: {
        title: 'Fähigkeiten',
        subtitle: 'Ein Einblick in die Technologien und Werkzeuge, mit denen ich arbeite, um moderne Webanwendungen zu erstellen.',
        categories: {
            languages_db: {
                title: "Sprachen & Datenbanken",
                items: ["HTML", "CSS", "JavaScript", "TypeScript", "MongoDB", "Sass", "Bash", "Markdown"],
            },
            frameworks: {
                title: "Frameworks & Bibliotheken",
                items: ["React", "Next.js", "Tailwind CSS", "Node.js", "Express.js", "Bootstrap", "Mongoose", "RestAPI"],
            },
            tools: {
                title: "Werkzeuge",
                items: ["Git", "GitHub", "Vite", "Bun", "Linux", "Vscode", "Firebase", "Npm", "Postman", "Render"],
            },
            design: {
                title: "UI/UX-Design",
                items: ["UI/UX Design", "Figma", "Canva", "Responsive Design"],
            },
            human_languages: {
                title: "Sprachen",
                items: ["Spanisch (Muttersprache)", "Englisch (A2)", "Deutsch (B2)", "Katalanisch (C1)"],
            },
        }
    },
    projects: {
        title: 'Ausgewählte Projekte',
        subtitle: 'Eine Auswahl meiner Arbeiten, die meine Fähigkeit demonstrieren, funktionale und ansprechende Webanwendungen zu erstellen.',
        projectList: [
            {
                title: 'The Modern House',
                description: 'Klon der Website "The Modern House", einer auf Designhäuser spezialisierten Immobilienagentur.',
                tech: ['HTML', 'CSS', 'JavaScript'],
                github: 'https://github.com/BALTASARGD/The-Modern-House',
                demo: 'https://baltasargd.github.io/The-Modern-House/',
                imageId: 'project-modern-house'
            },
            {
                title: 'MyControl',
                description: 'Anwendung zur Verwaltung persönlicher und familiärer Finanzen mit Kontrolle über Einnahmen, Ausgaben und Budgets.',
                tech: ['Next.js', 'Tailwind CSS', 'Firebase', 'TypeScript'],
                github: 'https://github.com/BALTASARGD/MyControl',
                demo: 'https://my-control-eta.vercel.app/',
                imageId: 'project-my-control'
            },
            {
                title: 'Chore Champ App',
                description: 'Gamifizierte Anwendung zur Verwaltung von Hausarbeiten mit Fortschrittsverfolgung, Serien und Erfolgen.',
                tech: ['Next.js', 'Tailwind CSS', 'Firebase', 'TypeScript'],
                github: 'https://github.com/BALTASARGD/chore-champ-app',
                demo: 'https://chore-champ-app.vercel.app/',
                imageId: 'project-chore-champ'
            },
            {
                title: 'E-Commerce-Plattform',
                description: 'Kompletter Online-Shop mit Warenkorb, Produktverwaltung und integriertem Zahlungsgateway.',
                tech: ['React', 'Node.js', 'MongoDB', 'Express'],
                github: 'https://github.com/BALTASARGD/ecommerce-platform',
                imageId: 'project-ecommerce'
            },
            {
                title: 'Aufgaben-Manager-App',
                description: 'Anwendung zur Organisation täglicher Aufgaben mit Benutzerauthentifizierungssystem und Fortschrittsverfolgung.',
                tech: ['Next.js', 'Tailwind CSS', 'PostgreSQL', 'Prisma'],
                github: 'https://github.com/BALTASARGD/task-manager-app',
                imageId: 'project-task-manager'
            },
            {
                title: 'Portfolio-Website',
                description: 'Mein persönliches Portfolio zur Präsentation meiner Projekte, Fähigkeiten und Berufserfahrung (diese Seite).',
                tech: ['Next.js', 'Tailwind CSS', 'TypeScript', 'Genkit'],
                github: 'https://github.com/BALTASARGD/BaltaDev',
                demo: 'https://portfolio-seven-delta-66.vercel.app/',
                imageId: 'project-portfolio'
            },
        ]
    },
    contact: {
        title: 'Kontakt',
        subtitle: 'Haben Sie ein Projekt im Sinn oder möchten Sie sich vernetzen? Zögern Sie nicht, mich zu kontaktieren.',
        details: {
            email: { label: 'Email' },
            phone: { label: 'Telefon' },
            location: { label: 'Standort', value: 'Köln, Deutschland' }
        },
        form: {
            title: 'Schick mir eine Nachricht',
            name: 'Name',
            namePlaceholder: 'Ihr Name',
            emailPlaceholder: 'ihre@email.com',
            message: 'Nachricht',
            messagePlaceholder: 'Schreiben Sie hier Ihre Nachricht...',
            submit: 'Nachricht senden',
            sending: 'Senden...',
            validation: {
                name: 'Der Name muss mindestens 2 Zeichen lang sein.',
                email: 'Bitte geben Sie eine gültige E-Mail-Adresse ein.',
                message: 'Die Nachricht muss mindestens 10 Zeichen lang sein.',
            }
        },
        toast: {
            success: {
                title: 'Nachricht gesendet',
                description: 'Danke, dass Sie mich kontaktiert haben. Ich werde mich so schnell wie möglich bei Ihnen melden.',
            },
            error: {
                title: 'Fehler beim Senden',
                description: 'Die Nachricht konnte nicht gesendet werden. Bitte versuchen Sie es erneut.',
            }
        }
    },
    skillRecommender: {
        title: 'Fähigkeiten-Empfehler',
        subtitle: 'Nutzen Sie dieses KI-Tool, um personalisierte Empfehlungen zu erhalten, welche Fähigkeiten Sie erlernen sollten, um Ihre Karriereziele zu erreichen.',
        openButton: 'Empfehler öffnen',
        dialog: {
            title: 'KI-Fähigkeiten-Empfehler',
            description: 'Beschreiben Sie Ihre aktuellen Fähigkeiten und Ziele, um einen personalisierten Lernplan zu erhalten.',
        },
        form: {
            currentSkills: 'Aktuelle Fähigkeiten',
            currentSkillsPlaceholder: 'z.B. React, Node.js, Express, MongoDB, REST APIs...',
            careerGoals: 'Karriereziele',
            careerGoalsPlaceholder: 'z.B. Software-Architekt werden, sich auf DevOps spezialisieren, ein Entwicklungsteam leiten...',
            submit: 'Empfehlung erhalten',
            generating: 'Wird generiert...',
            validation: {
                currentSkills: "Bitte beschreiben Sie Ihre aktuellen Fähigkeiten mit mehr als 20 Zeichen.",
                careerGoals: "Bitte beschreiben Sie Ihre Karriereziele mit mehr als 20 Zeichen.",
            }
        },
        loading: {
            title: 'Dein Profil wird analysiert...',
        },
        results: {
            recommendedSkills: 'Empfohlene Fähigkeiten',
            learningPaths: 'Lernpfade',
        },
        toast: {
            success: {
                title: "Empfehlung generiert",
                description: "Ihr personalisierter Lernplan ist fertig.",
            },
            error: {
                title: "Fehler",
                description: "Empfehlungen konnten nicht generiert werden. Bitte versuchen Sie es erneut.",
            }
        }
    },
    footer: {
      copyright: 'Baltasar García. Alle Rechte vorbehalten.'
    }
  },
};
