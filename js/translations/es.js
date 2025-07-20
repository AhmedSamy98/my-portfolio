// ===================================
// SPANISH TRANSLATIONS
// ===================================

const translations_es = {
    // Navigation
    nav: {
        home: 'Inicio',
        about: 'Acerca de',
        experience: 'Experiencia',
        projects: 'Proyectos',
        skills: 'Habilidades',
        certificates: 'Certificados',
        contact: 'Contacto'
    },

    // Hero Section
    hero: {
        greeting: 'Hola, soy',
        name: 'Ahmed Samy Zaky',
        title: 'Desarrollador Flutter',
        subtitle: 'Desarrollador móvil especializado en Flutter y Dart con más de 3 años de experiencia en la creación de aplicaciones móviles avanzadas',
        downloadCV: 'Descargar CV',
        viewProjects: 'Ver Proyectos',
        scrollDown: 'Desplazarse hacia abajo'
    },

    // About Section
    about: {
        title: 'Acerca de mí',
        subtitle: 'Desarrollador Flutter apasionado con experiencia práctica en la creación de aplicaciones móviles',
        description: 'Ingeniero móvil con más de 3 años de experiencia diseñando, construyendo y entregando aplicaciones Flutter de nivel de producción. Experto en Dart 3 💙, Flutter 3.x 🚀, Firebase 🔥 (Auth, Firestore, Storage) y arquitecturas modernas y modulares - Arquitectura limpia 🏛️ con capas basadas en características, gestión de estados MVVM y Cubit 📊 - que mantienen el código escalable y listo para pruebas.',
        description_2: 'Las habilidades integrales abarcan análisis de requisitos, UI/UX perfecta ✨, integración de API REST 🔄, pipelines de CI/CD en GitHub Actions 🔄, lanzamientos automáticos en Play-Console 🚀 y perfilado de rendimiento 📈. Capacidad probada para publicar aplicaciones pulidas en Google Play y mantener su ciclo de vida.',
        
        stats: {
            experience: 'Años de experiencia',
            projects: 'Proyectos completados',
            certificates: 'Certificados'
        },

        skills: {
            title: 'Habilidades principales',
            flutter: 'Desarrollo Flutter',
            firebase: 'Servicios Firebase',
            architecture: 'Arquitectura limpia',
            stateManagement: 'Gestión de estado'
        },

        competencies: {
            title: 'Competencias clave',
            flutter: 'Desarrollo Flutter',
            flutter_desc: 'Experto en la creación de aplicaciones móviles multiplataforma con UI/UX perfecta',
            firebase: 'Integración de Firebase',
            firebase_desc: 'Implementación de autenticación, Firestore, almacenamiento y funciones en tiempo real',
            cicd: 'Pipelines CI/CD',
            cicd_desc: 'GitHub Actions y flujos de trabajo de despliegue automatizados'
        }
    },

    // Experience Section
    experience: {
        title: 'Mi Experiencia',
        subtitle: 'Mi viaje en el desarrollo de aplicaciones móviles',
        present: 'Presente',
        
        roles: {
            'senior-flutter': 'Desarrollador Flutter Senior',
            'flutter-dev': 'Desarrollador Flutter',
            'mobile-dev': 'Desarrollador de Aplicaciones Móviles',
            'intern': 'Interno de Desarrollo'
        },

        achievements: 'Logros principales:',
        technologies: 'Tecnologías utilizadas:',
        projectLink: 'Enlace del proyecto',
        viewDetails: 'Ver detalles'
    },

    // Experience Section Data
    experienceData: [
        {
            id: 'languages-arabic',
            company: 'Idiomas en Árabe - "بالعربى لغات"',
            position: 'Desarrollador Flutter y Colaborador Clave',
            duration: 'Mayo 2025 - Presente',
            location: 'Remoto',
            description: 'Rediseñé completamente la base de código migrando la aplicación del uso ad-hoc de setState a una arquitectura robusta basada en Cubit fundamentada en principios de Arquitectura Limpia orientada a funciones, mejorando significativamente la gestión de estado, mantenibilidad, capacidad de prueba y escalabilidad.',
            highlights: [
                'Rediseño de la estructura de carpetas del proyecto enfocándome en una clara separación de responsabilidades con capas principales y de funciones',
                'Implementación de inyección de dependencias usando get_it y desarrollo de pruebas unitarias',
                'Desarrollo de la función "Favoritos" que permite a los usuarios guardar palabras, frases y reglas gramaticales',
                'Colaboración como contribuyente clave junto al propietario original de la aplicación y desarrollador principal',
                'La aplicación está activa y en uso tanto en Google Play Store como en Apple App Store'
            ],
            technologies: ['Flutter', 'Cubit', 'Clean Architecture', 'shared_preferences', 'get_it', 'Unit Testing'],
            links: [
                { type: 'playstore', url: 'https://play.google.com/store/apps/details?id=com.Arabic.Languages', label: 'Google Play' },
                { type: 'appstore', url: 'https://apps.apple.com/us/app/%D9%84%D8%BA%D8%A7%D8%AA-%D8%A8%D8%A7%D9%84%D8%B9%D8%B1%D8%A8%D9%89/id6738091599', label: 'App Store' }
            ],
            current: true,
            achievement: 'Actual'
        },
        {
            id: 'freelance-templates',
            company: 'Desarrollador Flutter Freelance',
            position: 'Portafolio de 28 Aplicaciones de Plantilla Listas para Marca',
            duration: 'Febrero 2025 - Presente',
            location: 'Remoto',
            description: 'Diseñé un conjunto de 28 aplicaciones de demostración estándar que permiten a los proyectos de clientes lanzarse en comercio electrónico, servicios de transporte, entrega de alimentos, streaming de medios, reserva de hoteles, educación, Q&A, servicios de automóviles y servicios bajo demanda.',
            highlights: [
                'Construcción de capas UI orientadas a funciones y view-models MobX',
                'Creación de fuentes de datos abstractas listas para conectarse a APIs REST / backends de Firebase',
                'Entrega de diseños pixel-perfect, totalmente responsivos (Material 3 & Cupertino)',
                'Producción de walkthroughs de video continuos y demos APK',
                'Mantenimiento del codebase con migraciones Flutter 3.x / Dart 3.x y actualizaciones semanales'
            ],
            technologies: ['Flutter', 'MobX', 'Clean Architecture', 'Material 3', 'Cupertino', 'REST API', 'Firebase'],
            links: [
                { type: 'youtube', url: 'https://www.youtube.com/playlist?list=PL4Ti32rTkEYjo2lrlCOck8NIrFguIF8Dj', label: 'Lista de YouTube' }
            ],
            current: true
        },
        {
            id: 'talk-app',
            company: 'Talk (Plataforma de Podcast + Artículos)',
            position: 'Ingeniero Móvil Principal',
            duration: 'Septiembre 2024 - Enero 2025',
            location: 'Contrato Remoto',
            description: 'Arquitectura y entrega de una aplicación completa de podcast y creador - grabación, edición, publicación de audio, video o artículos de texto enriquecido - usando gestión de estado Cubit, Arquitectura Limpia orientada a funciones y una API REST Django documentada con Swagger.',
            highlights: [
                'Implementación de grabación en la aplicación (audio y cámara) y reproducción en segundo plano',
                'Adición de capas sociales (likes, comentarios anidados, compartir vía deep-links y QR)',
                'Desarrollo de canales privados, listas de reproducción y filtrado/búsqueda granular de contenido',
                'Colaboración en equipo ágil de dos personas (móvil + backend)',
                'Automatización de serialización JSON estándar con Dio y auditoría de contratos Swagger'
            ],
            technologies: ['Flutter', 'Cubit', 'Clean Architecture', 'Django REST API', 'just_audio', 'Dio', 'Swagger'],
            links: [],
            achievement: 'Ingeniero Principal'
        },
        {
            id: 'store-app',
            company: 'Store (Inventario)',
            position: 'Desarrollador Móvil',
            duration: 'Diciembre 2022 - Febrero 2023',
            location: 'Híbrido Remoto',
            description: 'Conceptualización, desarrollo y despliegue de una aplicación de inventario multi-rol (gerente/agente de ventas) con Flutter SetState, Firebase Auth, Firestore y backend de Storage, y generación de facturas PDF.',
            highlights: [
                'Los gerentes cargan SKUs, asignan agentes, rastrean inventarios en tiempo real y devoluciones',
                'Dashboards de análisis generados automáticamente para gestión de inventario',
                'Los agentes emiten facturas que actualizan inventarios al instante',
                'Implementación de builds firmados multi-dex y pipeline de lanzamiento Play-Console',
                'Motor de exportación PDF personalizado redujo la preparación de auditorías de horas a minutos'
            ],
            technologies: ['Flutter', 'SetState', 'Firebase Auth', 'Firestore', 'Firebase Storage', 'PDF Generation'],
            links: [
                { type: 'playstore', url: 'https://play.google.com/store/apps/details?id=com.storeblueatom.store', label: 'Google Play' }
            ],
            achievement: 'Publicado'
        },
        {
            id: 'here-app',
            company: 'Here (Comercio Tradicional)',
            position: 'Desarrollador Flutter Junior',
            duration: 'Octubre 2021 - Abril 2022',
            location: 'Remoto',
            description: 'Lanzamiento de un marketplace O2O que permite a los compradores descubrir tiendas cercanas, comparar precios y reservar recogida en tienda; los comerciantes listan productos, descuentos y ofertas geo-específicas.',
            highlights: [
                'Implementación de Google Maps y Geolocator para búsqueda de proximidad',
                'Desarrollo de ofertas conscientes de ubicación y navegación paso a paso a la tienda',
                'Creación de backend Firebase completo incluyendo reglas de seguridad',
                'Construcción de dashboard de comerciante para gestión de productos y ofertas',
                'Integración de gateway de pagos y sistema de gestión de pedidos'
            ],
            technologies: ['Flutter', 'Firebase', 'Google Maps', 'Geolocator', 'Firebase Security Rules'],
            links: [
                { type: 'playstore', url: 'https://play.google.com/store/apps/details?id=com.blueAtom777.here', label: 'Google Play' }
            ],
            achievement: 'Primer Proyecto'
        }
    ],

    // Projects Section
    projects: {
        title: 'Mis Proyectos',
        subtitle: 'Una colección de proyectos en los que he trabajado',
        
        categories: {
            all: 'Todos',
            mobile: 'Aplicaciones Móviles',
            web: 'Aplicaciones Web',
            ui: 'Diseño UI/UX'
        },

        status: {
            completed: 'Completado',
            inProgress: 'En Progreso',
            planning: 'En Planificación'
        },

        buttons: {
            viewDemo: 'Ver Demo',
            sourceCode: 'Código Fuente',
            liveDemo: 'Demo en Vivo',
            caseStudy: 'Caso de Estudio'
        },

        demo: {
            title: 'Mis Aplicaciones Demo',
            subtitle: 'Una colección de aplicaciones demo que he desarrollado',
            totalApps: 'Aplicaciones',
            viewAll: 'Ver Todas',
            backToMain: 'Volver a Proyectos Principales'
        }
    },

    // Skills Section
    skills: {
        title: 'Mis Habilidades',
        subtitle: 'Tecnologías y herramientas que domino',
        
        categories: {
            technical: 'Habilidades Técnicas',
            soft: 'Habilidades Blandas',
            tools: 'Herramientas y Software',
            design: 'Habilidades de Diseño'
        },

        competencies: {
            title: 'Competencias Centrales',
            mobile: 'Desarrollo Móvil',
            architecture: 'Arquitectura Limpia',
            firebase: 'Integración Firebase',
            state: 'Gestión de Estado',
            ui: 'Diseño UI/UX',
            performance: 'Optimización de Rendimiento'
        }
    },

    // Certificates Section
    certificates: {
        title: 'Mis Certificados',
        subtitle: 'Certificados y cursos que he completado',
        
        categories: {
            software: 'Desarrollo de Software',
            entrepreneurship: 'Emprendimiento',
            other: 'Otras Habilidades'
        },

        buttons: {
            view: 'Ver',
            verify: 'Verificar'
        },

        stats: {
            total: 'Certificados Totales',
            categories: 'Categorías',
            latest: 'Último Año',
            completion: 'Tasa de Finalización'
        }
    },

    // Contact Section
    contact: {
        title: 'Contáctame',
        subtitle: 'Hablemos sobre tu próximo proyecto',
        
        info: {
            title: 'Información de Contacto',
            description: 'No dudes en contactarme para discutir tus proyectos o hacer preguntas',
            email: 'Correo electrónico',
            phone: 'Teléfono',
            location: 'Ubicación',
            availability: 'Disponibilidad'
        },

        form: {
            title: 'Enviar Mensaje',
            name: 'Nombre',
            email: 'Correo electrónico',
            phone: 'Teléfono (opcional)',
            subject: 'Asunto',
            message: 'Mensaje',
            send: 'Enviar Mensaje',
            sending: 'Enviando...',
            success: '¡Mensaje enviado exitosamente!',
            error: 'Error al enviar el mensaje. Por favor intenta de nuevo.'
        },

        social: {
            title: 'Sígueme en',
            linkedin: 'LinkedIn',
            github: 'GitHub',
            twitter: 'Twitter',
            telegram: 'Telegram'
        }
    },

    // Footer
    footer: {
        about: {
            title: 'Ahmed Samy Zaky',
            description: 'Desarrollador Flutter especializado en crear aplicaciones móviles innovadoras y eficientes'
        },
        
        links: {
            title: 'Enlaces Rápidos',
            home: 'Inicio',
            about: 'Acerca de',
            projects: 'Proyectos',
            contact: 'Contacto'
        },

        services: {
            title: 'Servicios',
            mobile: 'Desarrollo de Aplicaciones Móviles',
            consultation: 'Consultoría Técnica',
            maintenance: 'Mantenimiento de Aplicaciones',
            optimization: 'Optimización de Rendimiento'
        },

        contact: {
            title: 'Contacto',
            email: 'Correo electrónico',
            phone: 'Teléfono',
            location: 'Ubicación'
        },

        newsletter: {
            title: 'Boletín',
            description: 'Suscríbete para recibir mis últimas noticias y proyectos',
            placeholder: 'Ingresa tu correo',
            subscribe: 'Suscribirse'
        },

        copyright: 'Todos los derechos reservados',
        madeWith: 'Hecho con',
        backToTop: 'Volver arriba'
    },

    // Common
    common: {
        loading: 'Cargando...',
        viewMore: 'Ver más',
        viewLess: 'Ver menos',
        learnMore: 'Aprende más',
        getStarted: 'Comenzar',
        close: 'Cerrar',
        next: 'Siguiente',
        previous: 'Anterior',
        submit: 'Enviar',
        cancel: 'Cancelar',
        confirm: 'Confirmar',
        delete: 'Eliminar',
        edit: 'Editar',
        save: 'Guardar',
        search: 'Buscar',
        filter: 'Filtrar',
        sort: 'Ordenar',
        share: 'Compartir',
        copy: 'Copiar',
        download: 'Descargar',
        upload: 'Subir',
        print: 'Imprimir',
        refresh: 'Actualizar'
    },

    // Notifications
    notifications: {
        success: 'Éxito',
        error: 'Error',
        warning: 'Advertencia',
        info: 'Información',
        copied: 'Texto copiado',
        emailCopied: 'Correo electrónico copiado',
        phoneCopied: 'Teléfono copiado'
    }
};

// Make translations available globally
window.translations_es = translations_es;
