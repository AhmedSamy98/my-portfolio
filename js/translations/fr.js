// ===================================
// FRENCH TRANSLATIONS
// ===================================

const translations_fr = {
    // Navigation
    nav: {
        home: 'Accueil',
        about: 'À propos',
        experience: 'Expérience',
        projects: 'Projets',
        skills: 'Compétences',
        certificates: 'Certificats',
        contact: 'Contact'
    },

    // Hero Section
    hero: {
        greeting: 'Bonjour, je suis',
        name: 'Ahmed Samy Zaky',
        title: 'Développeur Flutter',
        subtitle: 'Développeur mobile spécialisé en Flutter & Dart avec plus de 3 ans d\'expérience dans la création d\'applications mobiles avancées',
        downloadCV: 'Télécharger CV',
        viewProjects: 'Voir Projets',
        scrollDown: 'Défiler vers le bas'
    },

    // About Section
    about: {        title: 'À propos de moi',
        subtitle: 'Développeur Flutter passionné avec une expérience pratique dans la création d\'applications mobiles',
        description: 'Ingénieur mobile avec plus de 3 ans d\'expérience 💙 dans la conception, construction et livraison d\'applications Flutter de qualité production. Expert en Dart 3 💙, Flutter 3.x 🚀, Firebase 🔥 (Auth, Firestore, Storage) et architectures modulaires modernes - Clean Architecture 🏛️ avec couches basées sur les fonctionnalités, gestion d\'état MVVM et Cubit 📊 - qui gardent le code évolutif et prêt pour les tests.',
        description_2: 'Compétences de bout en bout couvrant l\'analyse des besoins, UI/UX parfaite ✨, intégration d\'API REST 🔄, pipelines CI/CD sur GitHub Actions 🔄, publications automatisées sur Play Store 🚀 et profilage de performance 📈. Capacité éprouvée à publier des applications soignées sur Google Play et à maintenir leur cycle de vie.',
        
        stats: {
            experience: 'Années d\'expérience',
            projects: 'Projets',
            certificates: 'Certificats'
        },

        skills: {
            title: 'Compétences principales',
            flutter: 'Développement Flutter',
            firebase: 'Services Firebase',
            architecture: 'Architecture propre',
            stateManagement: 'Gestion d\'état'
        },        competencies: {
            title: 'Compétences clés',
            flutter: 'Développement Flutter',
            flutter_desc: 'Expert dans la création d\'applications mobiles multiplateformes avec UI/UX parfaite',
            dart: 'Programmation Dart',
            dart_desc: 'Maîtrise avancée du langage Dart avec des modèles de programmation modernes',
            architecture: 'Clean Architecture',
            architecture_desc: 'Clean Architecture, MVVM et modèles de conception modulaires pour un code évolutif',
            firebase: 'Intégration Firebase',
            firebase_desc: 'Auth, Firestore, Storage et fonctionnalités en temps réel',
            cicd: 'Pipelines CI/CD',
            cicd_desc: 'GitHub Actions et flux de travail de déploiement automatisés'
        }
    },

    // Experience Section
    experience: {
        title: 'Mon expérience',
        subtitle: 'Mon parcours dans le développement d\'applications mobiles',
        present: 'Présent',
        
        roles: {
            'senior-flutter': 'Développeur Flutter Senior',
            'flutter-dev': 'Développeur Flutter',
            'mobile-dev': 'Développeur d\'applications mobiles',
            'intern': 'Stagiaire développeur'
        },

        achievements: 'Réalisations',
        technologies: 'Technologies utilisées',
        projectLink: 'Lien du projet',
        viewDetails: 'Voir les détails'
    },

    // Experience Section Data
    experienceData: [
        {
            id: 'languages-arabic',
            company: 'Languages in Arabic - "بالعربى لغات"',
            position: 'Développeur Flutter & Contributeur Clé',
            duration: 'Mai 2025 – Présent',
            location: 'À distance',
            description: 'Rééngineering complet du code en migrant l\'application de l\'utilisation ad-hoc de setState vers une architecture robuste basée sur Cubit, fondée sur les principes de Clean Architecture avec les fonctionnalités en premier, améliorant significativement la gestion d\'état, la maintenabilité, la testabilité et la scalabilité.',
            highlights: [
                'Restructuration de l\'architecture de dossiers du projet avec une séparation claire des préoccupations avec les couches core et features',
                'Implémentation de l\'injection de dépendances avec get_it et développement de tests unitaires',
                'Développement de la fonctionnalité "Favoris" permettant aux utilisateurs de marquer les mots, phrases et règles de grammaire',
                'Collaboration en tant que contributeur clé aux côtés du propriétaire original de l\'app et du développeur principal',
                'L\'application est en ligne et utilisée activement sur Google Play Store et Apple App Store'
            ],
            technologies: ['Flutter', 'Cubit', 'Clean Architecture', 'shared_preferences', 'get_it', 'Unit Testing'],
            links: [
                {
                    type: 'playstore',
                    url: 'https://play.google.com/store/apps/details?id=com.Arabic.Languages',
                    label: 'Google Play'
                },
                {
                    type: 'appstore',
                    url: 'https://apps.apple.com/us/app/%D9%84%D8%BA%D8%A7%D8%AA-%D8%A8%D8%A7%D9%84%D8%B9%D8%B1%D8%A8%D9%89/id6738091599',
                    label: 'App Store'
                }
            ],
            current: true,
            achievement: 'Actuel'
        },
        {
            id: 'freelance-templates',
            company: 'Développeur Flutter Freelance',
            position: 'Portfolio de 28 Applications Templates Prêtes à Marquer',
            duration: 'Fév 2025 – Présent',
            location: 'À distance',
            description: 'Conception d\'une suite de 28 applications de démonstration standards qui permettent aux projets clients de se lancer dans le e-commerce, les services de transport, la livraison de nourriture, le streaming média, la réservation d\'hôtels, l\'éducation, Q&R, les services automobiles et les services à la demande.',
            highlights: [
                'Construction de couches UI orientées fonctionnalités et modèles de vue MobX',
                'Création de sources de données abstraites prêtes à se connecter aux backends REST API / Firebase',
                'Livraison de layouts parfaits au pixel près et entièrement responsives (Material 3 & Cupertino)',
                'Production de démos vidéo continues et démos APK',
                'Maintenance de la base de code avec les migrations Flutter 3.x / Dart 3.x et mises à jour hebdomadaires'
            ],
            technologies: ['Flutter', 'MobX', 'Clean Architecture', 'Material 3', 'Cupertino', 'REST API', 'Firebase'],
            links: [
                {
                    type: 'youtube',
                    url: 'https://www.youtube.com/playlist?list=PL4Ti32rTkEYjo2lrlCOck8NIrFguIF8Dj',
                    label: 'Playlist YouTube'
                }
            ],
            current: true
        },
        {
            id: 'talk-app',
            company: 'Talk (Plateforme Podcast + Articles)',
            position: 'Ingénieur Mobile Principal',
            duration: 'Sep 2024 – Jan 2025',
            location: 'Contrat à Distance',
            description: 'Architecture et livraison d\'une application podcast & créateur complète - enregistrer, éditer, publier audio, vidéo ou articles texte enrichi - utilisant la gestion d\'état Cubit, Clean Architecture avec fonctionnalités en premier et une API Django REST documentée avec Swagger.',
            highlights: [
                'Implémentation de l\'enregistrement in-app (audio & caméra) et lecture en arrière-plan',
                'Ajout de couches sociales (likes, commentaires en fil, partage via liens profonds & codes QR)',
                'Développement de chaînes privées, playlists et filtrage/recherche de contenu granulaire',
                'Coopération en équipe agile à deux personnes (mobile + backend)',
                'Automatisation de la sérialisation JSON avec Dio et révision des contrats Swagger'
            ],
            technologies: ['Flutter', 'Cubit', 'Clean Architecture', 'Django REST API', 'just_audio', 'Dio', 'Swagger'],
            links: [],
            achievement: 'Ingénieur Principal'
        },
        {
            id: 'store-app',
            company: 'Store (Inventaire)',
            position: 'Développeur Mobile',
            duration: 'Déc 2022 – Fév 2023',
            location: 'Hybride à Distance',
            description: 'Conçu, construit et déployé une application d\'inventaire multi-rôles (manager / agent de vente) avec Flutter SetState, Firebase Auth, backend Firestore & Storage et génération de factures PDF.',
            highlights: [
                'Les managers téléchargent les SKU, assignent les agents, suivent le stock en temps réel et les retours',
                'Tableaux de bord analytiques auto-générés pour la gestion d\'inventaire',
                'Les agents émettent des factures qui mettent immédiatement à jour l\'inventaire',
                'Implémentation de builds multi-dex signés et pipeline de publication Play-Console',
                'Moteur d\'export PDF personnalisé a réduit la préparation d\'audit de heures à minutes'
            ],
            technologies: ['Flutter', 'SetState', 'Firebase Auth', 'Firestore', 'Firebase Storage', 'PDF Generation'],
            links: [
                {
                    type: 'playstore',
                    url: 'https://play.google.com/store/apps/details?id=com.storeblueatom.store',
                    label: 'Google Play'
                }
            ],
            achievement: 'Publié'
        },
        {
            id: 'here-app',
            company: 'Here (Commerce Physique)',
            position: 'Développeur Flutter Junior',
            duration: 'Oct 2021 – Avr 2022',
            location: 'À distance',
            description: 'Lancement d\'un marketplace O2O permettant aux acheteurs de découvrir les magasins à proximité, comparer les prix et réserver le retrait en magasin ; les marchands listent produits, remises et offres géo-localisées.',
            highlights: [
                'Implémentation de Google Maps & Geolocator pour la recherche de proximité',
                'Développement d\'offres géo-localisées et navigation détaillée vers les magasins',
                'Création d\'un backend Firebase complet incluant les règles de sécurité',
                'Construction d\'un tableau de bord marchand pour la gestion des produits et offres',
                'Intégration de passerelle de paiement et système de gestion des commandes'
            ],
            technologies: ['Flutter', 'Firebase', 'Google Maps', 'Geolocator', 'Firebase Security Rules'],
            links: [
                {
                    type: 'playstore',
                    url: 'https://play.google.com/store/apps/details?id=com.blueAtom777.here',
                    label: 'Google Play'
                }
            ],
            achievement: 'Premier Projet'
        }
    ],

    // Projects Section
    projects: {
        title: 'Mes projets',
        subtitle: 'Une collection de projets sur lesquels j\'ai travaillé',
        
        categories: {
            all: 'Tous',
            mobile: 'Applications mobiles',
            web: 'Applications web',
            ui: 'Design UI/UX'
        },

        status: {
            completed: 'Terminé',
            inProgress: 'En cours',
            planning: 'En planification'
        },

        buttons: {
            viewDemo: 'Voir la démo',
            sourceCode: 'Code source',
            liveDemo: 'Démo en direct',
            caseStudy: 'Étude de cas'
        },

        demo: {
            title: 'Mes applications de démonstration',
            subtitle: 'Une collection d\'applications de démonstration que j\'ai développées',
            totalApps: 'applications',
            viewAll: 'Voir tout',
            backToMain: 'Retour aux projets principaux'
        }
    },

    // Skills Section
    skills: {
        title: 'Mes compétences',
        subtitle: 'Technologies et outils que je maîtrise',
        
        categories: {
            technical: 'Compétences techniques',
            soft: 'Compétences relationnelles',
            tools: 'Outils et logiciels',
            design: 'Compétences en design'
        },

        competencies: {
            title: 'Compétences clés',
            mobile: 'Développement mobile',
            architecture: 'Architecture propre',
            firebase: 'Intégration Firebase',
            state: 'Gestion d\'état',
            ui: 'Design UI/UX',
            performance: 'Optimisation des performances'
        }
    },

    // Certificates Section
    certificates: {
        title: 'Mes certificats',
        subtitle: 'Certificats et formations que j\'ai obtenus',
        
        categories: {
            software: 'Développement logiciel',
            entrepreneurship: 'Entrepreneuriat',
            other: 'Autres compétences'
        },

        buttons: {
            view: 'Voir',
            verify: 'Vérifier'
        },

        stats: {
            total: 'Total des certificats',
            categories: 'Catégories',
            latest: 'Dernière année',
            completion: 'Taux de réussite'
        }
    },

    // Contact Section
    contact: {
        title: 'Contactez-moi',
        subtitle: 'Parlons de votre prochain projet',
        
        info: {
            title: 'Informations de contact',
            description: 'N\'hésitez pas à me contacter pour discuter de vos projets ou toute question',
            email: 'Email',
            phone: 'Téléphone',
            location: 'Localisation',
            availability: 'Disponibilité'
        },

        form: {
            title: 'Envoyer un message',
            name: 'Nom',
            email: 'Email',
            phone: 'Téléphone (optionnel)',
            subject: 'Sujet',
            message: 'Message',
            send: 'Envoyer le message',
            sending: 'Envoi en cours...',
            success: 'Message envoyé avec succès !',
            error: 'Échec de l\'envoi du message. Veuillez réessayer.'
        },

        social: {
            title: 'Suivez-moi sur',
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
            description: 'Développeur Flutter spécialisé dans la création d\'applications mobiles innovantes et efficaces'
        },
        
        links: {
            title: 'Liens rapides',
            home: 'Accueil',
            about: 'À propos',
            projects: 'Projets',
            contact: 'Contact'
        },

        services: {
            title: 'Services',
            mobile: 'Développement d\'applications mobiles',
            consultation: 'Consultation technique',
            maintenance: 'Maintenance d\'applications',
            optimization: 'Optimisation des performances'
        },

        contact: {
            title: 'Contact',
            email: 'Email',
            phone: 'Téléphone',
            location: 'Localisation'
        },

        newsletter: {
            title: 'Newsletter',
            description: 'Abonnez-vous pour recevoir mes dernières nouvelles et projets',
            placeholder: 'Entrez votre email',
            subscribe: 'S\'abonner'
        },

        copyright: 'Tous droits réservés',
        madeWith: 'Fait avec',
        backToTop: 'Retour en haut'
    },

    // Common
    common: {
        loading: 'Chargement...',
        viewMore: 'Voir plus',
        viewLess: 'Voir moins',
        learnMore: 'En savoir plus',
        getStarted: 'Commencer',
        close: 'Fermer',
        next: 'Suivant',
        previous: 'Précédent',
        submit: 'Soumettre',
        cancel: 'Annuler',
        confirm: 'Confirmer',
        delete: 'Supprimer',
        edit: 'Modifier',
        save: 'Sauvegarder',
        search: 'Rechercher',
        filter: 'Filtrer',
        sort: 'Trier',
        share: 'Partager',
        copy: 'Copier',
        download: 'Télécharger',
        upload: 'Téléverser',
        print: 'Imprimer',
        refresh: 'Actualiser'
    },

    // Notifications
    notifications: {
        success: 'Succès',
        error: 'Erreur',
        warning: 'Attention',
        info: 'Information',
        copied: 'Texte copié',
        emailCopied: 'Email copié',
        phoneCopied: 'Téléphone copié'
    }
};

// Export for use in main application
if (typeof module !== 'undefined' && module.exports) {
    module.exports = translations_fr;
} else if (typeof window !== 'undefined') {
    window.translations_fr = translations_fr;
}
