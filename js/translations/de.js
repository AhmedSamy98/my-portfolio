// ===================================
// GERMAN TRANSLATIONS
// ===================================

const translations_de = {
    // Navigation
    nav: {
        home: 'Startseite',
        about: 'Über mich',
        experience: 'Erfahrung',
        projects: 'Projekte',
        skills: 'Fähigkeiten',
        certificates: 'Zertifikate',
        contact: 'Kontakt'
    },

    // Hero Section
    hero: {
        greeting: 'Hallo, ich bin',
        name: 'Ahmed Samy Zaky',
        title: 'Flutter Entwickler',
        subtitle: 'Mobiler Entwickler spezialisiert auf Flutter & Dart mit über 3 Jahren Erfahrung in der Entwicklung fortschrittlicher mobiler Anwendungen',
        downloadCV: 'Lebenslauf herunterladen',
        viewProjects: 'Projekte ansehen',
        scrollDown: 'Nach unten scrollen'
    },

    // About Section
    about: {
        title: 'Über mich',
        subtitle: 'Leidenschaftlicher Flutter-Entwickler mit praktischer Erfahrung in der Entwicklung mobiler Anwendungen',
        description: 'Ich bin ein spezialisierter Flutter-Entwickler mit über 3 Jahren Erfahrung in der plattformübergreifenden mobilen App-Entwicklung. Ich beherrsche Dart, Firebase und Clean Architecture-Muster zur Erstellung hochwertiger und wartbarer Anwendungen.',
        
        stats: {
            experience: 'Jahre Erfahrung',
            projects: 'Abgeschlossene Projekte',
            clients: 'Zufriedene Kunden',
            apps: 'Veröffentlichte Apps'
        },

        skills: {
            title: 'Kernfähigkeiten',
            flutter: 'Flutter-Entwicklung',
            firebase: 'Firebase-Services',
            architecture: 'Clean Architecture',
            stateManagement: 'State Management'
        },

        competencies: {
            title: 'Kernkompetenzen',
            mobile: 'Mobile Entwicklung',
            backend: 'Backend-Integration',
            ui: 'UI/UX Design',
            performance: 'Performance-Optimierung'
        }
    },

    // Experience Section
    experience: {
        title: 'Meine Erfahrung',
        subtitle: 'Meine Reise in der mobilen App-Entwicklung',
        present: 'Gegenwart',
        
        roles: {
            'senior-flutter': 'Senior Flutter Entwickler',
            'flutter-dev': 'Flutter Entwickler',
            'mobile-dev': 'Mobile App Entwickler',
            'intern': 'Entwicklungspraktikant'
        },

        achievements: 'Erfolge',
        technologies: 'Verwendete Technologien',        projectLink: 'Projekt-Link',
        viewDetails: 'Details anzeigen'
    },

    // Experience Section Data
    experienceData: [
        {
            id: 'languages-arabic',
            company: 'Sprachen auf Arabisch - "بالعربى لغات"',
            position: 'Flutter-Entwickler & Hauptbeiträger',
            duration: 'Mai 2025 – Gegenwart',
            location: 'Remote',
            description: 'Komplette Neuentwicklung der Codebasis durch Migration der App von ad-hoc setState-Nutzung zu einer robusten, Cubit-gesteuerten Architektur basierend auf funktionsorientierten Clean Architecture-Prinzipien, was State-Management, Wartbarkeit, Testbarkeit und Skalierbarkeit signifikant verbessert.',
            highlights: [
                'Neugestaltung der Projektordnerstruktur mit Fokus auf klare Trennung von Zuständigkeiten mit Core- und Feature-Ebenen',
                'Implementierung von Dependency Injection mit get_it und Entwicklung von Unit-Tests',
                'Entwicklung der "Favoriten"-Funktion, die Benutzern das Speichern von Wörtern, Sätzen und Grammatikregeln ermöglicht',
                'Zusammenarbeit als Hauptbeiträger neben dem ursprünglichen App-Besitzer und Lead-Entwickler',
                'Die App ist aktiv und wird sowohl im Google Play Store als auch im Apple App Store genutzt'
            ],
            technologies: ['Flutter', 'Cubit', 'Clean Architecture', 'shared_preferences', 'get_it', 'Unit Testing'],
            links: [
                { type: 'playstore', url: 'https://play.google.com/store/apps/details?id=com.Arabic.Languages', label: 'Google Play' },
                { type: 'appstore', url: 'https://apps.apple.com/us/app/%D9%84%D8%BA%D8%A7%D8%AA-%D8%A8%D8%A7%D9%84%D8%B9%D8%B1%D8%A8%D9%89/id6738091599', label: 'App Store' }
            ],
            current: true,
            achievement: 'Aktuell'
        },
        {
            id: 'freelance-templates',
            company: 'Freiberuflicher Flutter-Entwickler',
            position: 'Portfolio von 28 Marken-fähigen Vorlagen-Apps',
            duration: 'Feb 2025 – Gegenwart',
            location: 'Remote',
            description: 'Entwicklung einer Suite von 28 Standard-Demo-Apps, die es Kundenprojekten ermöglichen, in den Bereichen E-Commerce, Fahrdienste, Essenslieferung, Medien-Streaming, Hotelbuchung, Bildung, Q&A, Auto-Services und On-Demand-Dienste zu starten.',
            highlights: [
                'Entwicklung feature-orientierter UI-Schichten und MobX View-Models',
                'Erstellung abstrakter Datenquellen, die zur Verbindung mit REST-API / Firebase-Backends bereit sind',
                'Lieferung pixel-perfekter, vollständig responsiver Layouts (Material 3 & Cupertino)',
                'Erstellung kontinuierlicher Video-Walkthroughs und APK-Demos',
                'Pflege des Codebases mit Flutter 3.x / Dart 3.x Migrationen und wöchentlichen Updates'
            ],
            technologies: ['Flutter', 'MobX', 'Clean Architecture', 'Material 3', 'Cupertino', 'REST API', 'Firebase'],
            links: [
                { type: 'youtube', url: 'https://www.youtube.com/playlist?list=PL4Ti32rTkEYjo2lrlCOck8NIrFguIF8Dj', label: 'YouTube Playlist' }
            ],
            current: true
        },
        {
            id: 'talk-app',
            company: 'Talk (Podcast + Artikel Plattform)',
            position: 'Lead Mobile Engineer',
            duration: 'Sep 2024 – Jan 2025',
            location: 'Remote Vertrag',
            description: 'Entwicklung und Veröffentlichung einer vollwertigen Podcast- und Creator-App - Aufnahme, Bearbeitung, Veröffentlichung von Audio, Video oder Rich-Text-Artikeln - unter Verwendung von Cubit State-Management, Feature-First Clean Architecture und einer Swagger-dokumentierten Django REST API.',
            highlights: [
                'Implementierung von In-App-Aufnahme (Audio & Kamera) und Hintergrund-Wiedergabe',
                'Hinzufügen sozialer Ebenen (Likes, threaded Kommentare, Teilen via Deep-Links & QR-Codes)',
                'Entwicklung privater Kanäle, Playlists und granularer Inhaltsfilterung/Suche',
                'Zusammenarbeit in einem agilen Zweier-Team (Mobile + Backend)',
                'Automatisierung der JSON-Serialisierung mit Dio und Überprüfung von Swagger-Verträgen'
            ],
            technologies: ['Flutter', 'Cubit', 'Clean Architecture', 'Django REST API', 'just_audio', 'Dio', 'Swagger'],
            links: [],
            achievement: 'Lead Engineer'
        },
        {
            id: 'store-app',
            company: 'Store (Inventar)',
            position: 'Mobile Entwickler',
            duration: 'Dez 2022 – Feb 2023',
            location: 'Hybrid Remote',
            description: 'Konzeption, Entwicklung und Bereitstellung einer Multi-Rollen-Inventar-App (Manager / Verkaufsagent) mit Flutter SetState, Firebase Auth, Firestore & Storage Backend und PDF-Rechnungsgenerierung.',
            highlights: [
                'Manager laden SKUs hoch, weisen Agenten zu, verfolgen Echtzeit-Bestände und Rücksendungen',
                'Automatisch generierte Analytics-Dashboards für Bestandsverwaltung',
                'Agenten erstellen Rechnungen, die Bestände sofort aktualisieren',
                'Implementierung von Multi-Dex-signierten Builds und Play-Console Release-Pipeline',
                'Benutzerdefinierte PDF-Export-Engine verkürzte Audit-Vorbereitung von Stunden auf Minuten'
            ],
            technologies: ['Flutter', 'SetState', 'Firebase Auth', 'Firestore', 'Firebase Storage', 'PDF Generation'],
            links: [
                { type: 'playstore', url: 'https://play.google.com/store/apps/details?id=com.storeblueatom.store', label: 'Google Play' }
            ],
            achievement: 'Veröffentlicht'
        },
        {
            id: 'here-app',
            company: 'Here (Stationärer Handel)',
            position: 'Junior Flutter Entwickler',
            duration: 'Okt 2021 – Apr 2022',
            location: 'Remote',
            description: 'Einführung eines O2O-Marktplatzes, der es Käufern ermöglicht, nahegelegene Geschäfte zu entdecken, Preise zu vergleichen und Abholung im Laden zu reservieren; Händler können Produkte, Rabatte und Geo-Angebote einstellen.',
            highlights: [
                'Implementierung von Google Maps & Geolocator für Umgebungssuche',
                'Entwicklung standortbewusster Angebote und Turn-by-Turn-Geschäftsnavigation',
                'Erstellung eines kompletten Firebase-Backends einschließlich Sicherheitsregeln',
                'Entwicklung eines Händler-Dashboards für Produkt- und Angebotsverwaltung',
                'Integration von Zahlungs-Gateway und Bestellverwaltungssystem'
            ],
            technologies: ['Flutter', 'Firebase', 'Google Maps', 'Geolocator', 'Firebase Security Rules'],
            links: [
                { type: 'playstore', url: 'https://play.google.com/store/apps/details?id=com.blueAtom777.here', label: 'Google Play' }
            ],
            achievement: 'Erstes Projekt'
        }
    ],

    // Projects Section
    projects: {
        title: 'Meine Projekte',
        subtitle: 'Eine Sammlung von Projekten, an denen ich gearbeitet habe',
        
        categories: {
            all: 'Alle',
            mobile: 'Mobile Apps',
            web: 'Web-Anwendungen',
            ui: 'UI/UX Design'
        },

        status: {
            completed: 'Abgeschlossen',
            inProgress: 'In Bearbeitung',
            planning: 'In Planung'
        },

        buttons: {
            viewDemo: 'Demo ansehen',
            sourceCode: 'Quellcode',
            liveDemo: 'Live-Demo',
            caseStudy: 'Fallstudie'
        },

        demo: {
            title: 'Meine Demo-Anwendungen',
            subtitle: 'Eine Sammlung von Demo-Anwendungen, die ich entwickelt habe',
            totalApps: 'Anwendungen',
            viewAll: 'Alle anzeigen',
            backToMain: 'Zurück zu Hauptprojekten'
        }
    },

    // Skills Section
    skills: {
        title: 'Meine Fähigkeiten',
        subtitle: 'Technologien und Tools, die ich beherrsche',
        
        categories: {
            technical: 'Technische Fähigkeiten',
            soft: 'Soft Skills',
            tools: 'Tools und Software',
            design: 'Design-Fähigkeiten'
        },

        competencies: {
            title: 'Kernkompetenzen',
            mobile: 'Mobile Entwicklung',
            architecture: 'Clean Architecture',
            firebase: 'Firebase-Integration',
            state: 'State Management',
            ui: 'UI/UX Design',
            performance: 'Performance-Optimierung'
        }
    },

    // Certificates Section
    certificates: {
        title: 'Meine Zertifikate',
        subtitle: 'Zertifikate und Kurse, die ich absolviert habe',
        
        categories: {
            software: 'Software-Entwicklung',
            entrepreneurship: 'Unternehmertum',
            other: 'Andere Fähigkeiten'
        },

        buttons: {
            view: 'Anzeigen',
            verify: 'Verifizieren'
        },

        stats: {
            total: 'Gesamte Zertifikate',
            categories: 'Kategorien',
            latest: 'Neuestes Jahr',
            completion: 'Abschlussrate'
        }
    },

    // Contact Section
    contact: {
        title: 'Kontaktieren Sie mich',
        subtitle: 'Lassen Sie uns über Ihr nächstes Projekt sprechen',
        
        info: {
            title: 'Kontaktinformationen',
            description: 'Zögern Sie nicht, mich zu kontaktieren, um Ihre Projekte zu besprechen oder Fragen zu stellen',
            email: 'E-Mail',
            phone: 'Telefon',
            location: 'Standort',
            availability: 'Verfügbarkeit'
        },

        form: {
            title: 'Nachricht senden',
            name: 'Name',
            email: 'E-Mail',
            phone: 'Telefon (optional)',
            subject: 'Betreff',
            message: 'Nachricht',
            send: 'Nachricht senden',
            sending: 'Wird gesendet...',
            success: 'Nachricht erfolgreich gesendet!',
            error: 'Nachrichtensendung fehlgeschlagen. Bitte versuchen Sie es erneut.'
        },

        social: {
            title: 'Folgen Sie mir auf',
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
            description: 'Flutter-Entwickler spezialisiert auf die Entwicklung innovativer und effizienter mobiler Anwendungen'
        },
        
        links: {
            title: 'Schnelllinks',
            home: 'Startseite',
            about: 'Über mich',
            projects: 'Projekte',
            contact: 'Kontakt'
        },

        services: {
            title: 'Dienstleistungen',
            mobile: 'Mobile App-Entwicklung',
            consultation: 'Technische Beratung',
            maintenance: 'App-Wartung',
            optimization: 'Performance-Optimierung'
        },

        contact: {
            title: 'Kontakt',
            email: 'E-Mail',
            phone: 'Telefon',
            location: 'Standort'
        },

        newsletter: {
            title: 'Newsletter',
            description: 'Abonnieren Sie, um meine neuesten Nachrichten und Projekte zu erhalten',
            placeholder: 'E-Mail eingeben',
            subscribe: 'Abonnieren'
        },

        copyright: 'Alle Rechte vorbehalten',
        madeWith: 'Gemacht mit',
        backToTop: 'Nach oben'
    },

    // Common
    common: {
        loading: 'Lädt...',
        viewMore: 'Mehr anzeigen',
        viewLess: 'Weniger anzeigen',
        learnMore: 'Mehr erfahren',
        getStarted: 'Loslegen',
        close: 'Schließen',
        next: 'Weiter',
        previous: 'Zurück',
        submit: 'Senden',
        cancel: 'Abbrechen',
        confirm: 'Bestätigen',
        delete: 'Löschen',
        edit: 'Bearbeiten',
        save: 'Speichern',
        search: 'Suchen',
        filter: 'Filtern',
        sort: 'Sortieren',
        share: 'Teilen',
        copy: 'Kopieren',
        download: 'Herunterladen',
        upload: 'Hochladen',
        print: 'Drucken',
        refresh: 'Aktualisieren'
    },

    // Notifications
    notifications: {
        success: 'Erfolg',
        error: 'Fehler',        warning: 'Warnung',
        info: 'Information',
        copied: 'Text kopiert',
        emailCopied: 'E-Mail kopiert',
        phoneCopied: 'Telefon kopiert'
    }
};

// Make translations available globally
window.translations_de = translations_de;
