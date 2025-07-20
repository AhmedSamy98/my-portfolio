// ===================================
// ENGLISH TRANSLATIONS
// ===================================

console.log('🇺🇸 Loading English translations...');

const translations_en = {
    // Navigation
    nav: {
        home: 'Home',
        about: 'About',
        experience: 'Experience',
        projects: 'Projects',
        skills: 'Skills',
        certificates: 'Certificates',
        contact: 'Contact'
    },

    // Hero Section
    hero: {
        greeting: 'Welcome, I\'m',
        name: 'Ahmed Samy Zaky',
        title: 'Flutter Developer',
        subtitle: 'Mobile engineer with 3+ years of experience designing, building and shipping production-grade Flutter applications',
        downloadCV: 'Download CV',
        viewProjects: 'View Projects',
        scrollDown: 'Scroll down'
    },

    // About Section
        about: {
            title: 'About Me',
            subtitle: 'Passionate Flutter developer with hands-on experience in creating mobile applications',
            description: 'Mobile engineer with 3+ years of experience designing, building and shipping production-grade Flutter applications. Expert in Dart 3 💙, Flutter 3.x 🚀, Firebase 🔥 (Auth, Firestore, Storage) and modern, modular architectures - Clean Architecture 🏛️ with feature-based layers, MVVM and Cubit state-management 📊 - that keep code scalable and test-ready.',
            description_2: 'End-to-end skills span requirement analysis, pixel-perfect UI/UX ✨, REST-ful API integration 🔄, CI/CD pipelines on GitHub Actions 🔄, automated Play-Console releases 🚀 and performance profiling 📈. Proven ability to publish polished apps to Google Play and maintain their lifecycle.',
          stats: {
            experience: 'Years Experience',
            projects: 'Projects',
            certificates: 'Certificates'
        },

        skills: {
            title: 'Core Skills',
            flutter: 'Flutter Development',
            firebase: 'Firebase Services',
            architecture: 'Clean Architecture',
            stateManagement: 'State Management'
        },        competencies: {
            title: 'Core Competencies',
            flutter: 'Flutter Development',
            flutter_desc: 'Expert in building cross-platform mobile applications with pixel-perfect UI/UX',
            dart: 'Dart Programming',
            dart_desc: 'Advanced proficiency in Dart language with modern programming patterns',
            architecture: 'Clean Architecture',
            architecture_desc: 'Clean Architecture, MVVM, and modular design patterns for scalable code',
            firebase: 'Firebase Integration',
            firebase_desc: 'Auth, Firestore, Storage, and real-time features implementation',
            cicd: 'CI/CD Pipelines',
            cicd_desc: 'GitHub Actions and automated deployment workflows'
        }
    },

    // Experience Data in English
    experienceData: [
        {
            id: 'languages-arabic',
            company: 'Languages in Arabic - "بالعربى لغات"',
            position: 'Flutter Developer & Key Contributor',
            duration: 'May 2025 – Present',
            location: 'Remote',
            description: 'Completely re-engineered the codebase by migrating the app from ad-hoc setState usage to a robust, Cubit-driven architecture based on feature-first Clean Architecture principles, significantly improving state management, maintainability, testability, and scalability.',
            highlights: [
                'Redesigned project folder structure focusing on clear separation of concerns with core and features layers',
                'Implemented dependency injection using get_it and developing unit tests',
                'Developed "Favorites" feature allowing users to bookmark words, sentences, and grammar rules',
                'Collaborated as key contributor alongside original app owner and lead developer',
                'App is live and actively used on both Google Play Store and Apple App Store'
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
            achievement: 'Current'
        },
        {
            id: 'freelance-templates',
            company: 'Freelance Flutter Developer',
            position: 'Portfolio of 28 Ready-to-brand Template Apps',
            duration: 'Feb 2025 – Present',
            location: 'Remote',
            description: 'Designed a suite of 28 standard demo apps that enable customer projects to launch in e-commerce, ride-hailing, food delivery, media streaming, hotel booking, education, Q&A, car services, and on-demand services.',
            highlights: [
                'Built feature-oriented UI layers and MobX view-models',
                'Created abstracted data sources ready to connect to REST API / Firebase back-ends',
                'Delivered pixel-perfect, fully responsive layouts (Material 3 & Cupertino)',
                'Produced continuous video walk-throughs and APK demos',
                'Maintain codebase with Flutter 3.x / Dart 3.x migrations and weekly updates'
            ],
            technologies: ['Flutter', 'MobX', 'Clean Architecture', 'Material 3', 'Cupertino', 'REST API', 'Firebase'],
            links: [
                {
                    type: 'youtube',
                    url: 'https://www.youtube.com/playlist?list=PL4Ti32rTkEYjo2lrlCOck8NIrFguIF8Dj',
                    label: 'YouTube Playlist'
                }
            ],
            current: true
        },
        {
            id: 'talk-app',
            company: 'Talk (Podcast + Article Platform)',
            position: 'Lead Mobile Engineer',
            duration: 'Sep 2024 – Jan 2025',
            location: 'Remote Contract',
            description: 'Architected and shipped a full-feature podcast & creator app - record, edit, publish audio, video or rich-text articles - using Cubit state-management, Feature-first Clean Architecture and a Swagger-documented Django REST API.',
            highlights: [
                'Implemented in-app recording (audio & camera) and background playbook',
                'Added social layers (likes, threaded comments, share via deep-links & QR-codes)',
                'Developed private channels, playlists, and granular content filtering/search',
                'Cooperated in agile two-person squad (mobile + back-end)',
                'Automated JSON serialization with Dio and reviewed Swagger contracts'
            ],
            technologies: ['Flutter', 'Cubit', 'Clean Architecture', 'Django REST API', 'just_audio', 'Dio', 'Swagger'],
            links: [],
            achievement: 'Lead Engineer'
        },
        {
            id: 'store-app',
            company: 'Store (Inventory)',
            position: 'Mobile Developer',
            duration: 'Dec 2022 – Feb 2023',
            location: 'Hybrid Remote',
            description: 'Conceived, built and deployed a multi-role inventory app (manager / sales-agent) with Flutter SetState, Firebase Auth, Firestore & Storage back-end and PDF invoice generation.',
            highlights: [
                'Managers upload SKUs, assign agents, track real-time stock and returns',
                'Auto-generated analytics dashboards for inventory management',
                'Agents issue invoices that immediately update inventory',
                'Implemented multi-dex-signed builds and Play-Console release pipeline',
                'Custom PDF export engine shortened audit prep from hours to minutes'
            ],
            technologies: ['Flutter', 'SetState', 'Firebase Auth', 'Firestore', 'Firebase Storage', 'PDF Generation'],
            links: [
                {
                    type: 'playstore',
                    url: 'https://play.google.com/store/apps/details?id=com.storeblueatom.store',
                    label: 'Google Play'
                }
            ],
            achievement: 'Published'
        },
        {
            id: 'here-app',
            company: 'Here (Brick-and-Mortar Commerce)',
            position: 'Junior Flutter Developer',
            duration: 'Oct 2021 – Apr 2022',
            location: 'Remote',
            description: 'Launched an O2O marketplace allowing shoppers to discover nearby stores, compare prices & book in-store pickup; merchants can list products, discounts & geo-targeted offers.',
            highlights: [
                'Implemented Google Maps & Geolocator for proximity search',
                'Developed location-aware offers and turn-by-turn store navigation',
                'Built full Firebase backend including security rules',
                'Created merchant dashboard for product & offers management',
                'Integrated payment gateway and order management system'
            ],
            technologies: ['Flutter', 'Firebase', 'Google Maps', 'Geolocator', 'Firebase Security Rules'],
            links: [
                {
                    type: 'playstore',
                    url: 'https://play.google.com/store/apps/details?id=com.blueAtom777.here',
                    label: 'Google Play'
                }
            ],
            achievement: 'First Project'
        }
    ],

    // Experience Section
    experience: {
        title: 'Professional Experience',
        subtitle: 'My career journey',
        viewDetails: 'View Details',
        hideDetails: 'Hide Details',
        present: 'Present',
        achievements: 'Key Achievements:',
        technologies: 'Technologies:',
        
        companies: {
            freelance: {
                title: 'Flutter Developer',
                company: 'Freelance',
                duration: '2024 - Present',
                description: 'Developing custom Flutter applications for various clients, focusing on e-commerce, social media, and utility apps.',
                achievements: [
                    'Built 10+ Flutter applications for different industries',
                    'Implemented complex UI/UX designs with custom animations',
                    'Integrated various APIs and third-party services',
                    'Maintained 98% client satisfaction rate'
                ]
            },
            previous: {
                title: 'Mobile Developer',
                company: 'Previous Companies',
                duration: '2021 - 2024',
                description: 'Worked on various mobile development projects using Flutter and native technologies.',
                achievements: [
                    'Developed and maintained multiple mobile applications',
                    'Collaborated with cross-functional teams',
                    'Improved app performance and user experience',
                    'Mentored junior developers'
                ]
            }
        },

        // Experience Data in English
        experienceData: [
            {
                id: 'languages-arabic',
                company: 'Languages in Arabic - "بالعربى لغات"',
                position: 'Flutter Developer & Key Contributor',
                duration: 'May 2025 – Present',
                location: 'Remote',
                description: 'Completely re-engineered the codebase by migrating the app from ad-hoc setState usage to a robust, Cubit-driven architecture based on feature-first Clean Architecture principles, significantly improving state management, maintainability, testability, and scalability.',
                highlights: [
                    'Redesigned project folder structure focusing on clear separation of concerns with core and features layers',
                    'Implemented dependency injection using get_it and developing unit tests',
                    'Developed "Favorites" feature allowing users to bookmark words, sentences, and grammar rules',
                    'Collaborated as key contributor alongside original app owner and lead developer',
                    'App is live and actively used on both Google Play Store and Apple App Store'
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
                achievement: 'Current'
            },
            {
                id: 'freelance-templates',
                company: 'Freelance Flutter Developer',
                position: 'Portfolio of 28 Ready-to-brand Template Apps',
                duration: 'Feb 2025 – Present',
                location: 'Remote',
                description: 'Designed a suite of 28 standard demo apps that enable customer projects to launch in e-commerce, ride-hailing, food delivery, media streaming, hotel booking, education, Q&A, car services, and on-demand services.',
                highlights: [
                    'Built feature-oriented UI layers and MobX view-models',
                    'Created abstracted data sources ready to connect to REST API / Firebase back-ends',
                    'Delivered pixel-perfect, fully responsive layouts (Material 3 & Cupertino)',
                    'Produced continuous video walk-throughs and APK demos',
                    'Maintain codebase with Flutter 3.x / Dart 3.x migrations and weekly updates'
                ],
                technologies: ['Flutter', 'MobX', 'Clean Architecture', 'Material 3', 'Cupertino', 'REST API', 'Firebase'],
                links: [
                    {
                        type: 'youtube',
                        url: 'https://www.youtube.com/playlist?list=PL4Ti32rTkEYjo2lrlCOck8NIrFguIF8Dj',
                        label: 'YouTube Playlist'
                    }
                ],
                current: true
            },
            {
                id: 'talk-app',
                company: 'Talk (Podcast + Article Platform)',
                position: 'Lead Mobile Engineer',
                duration: 'Sep 2024 – Jan 2025',
                location: 'Remote Contract',
                description: 'Architected and shipped a full-feature podcast & creator app - record, edit, publish audio, video or rich-text articles - using Cubit state-management, Feature-first Clean Architecture and a Swagger-documented Django REST API.',
                highlights: [
                    'Implemented in-app recording (audio & camera) and background playbook',
                    'Added social layers (likes, threaded comments, share via deep-links & QR-codes)',
                    'Developed private channels, playlists, and granular content filtering/search',
                    'Cooperated in agile two-person squad (mobile + back-end)',
                    'Automated JSON serialization with Dio and reviewed Swagger contracts'
                ],
                technologies: ['Flutter', 'Cubit', 'Clean Architecture', 'Django REST API', 'just_audio', 'Dio', 'Swagger'],
                links: [],
                achievement: 'Lead Engineer'
            },
            {
                id: 'store-app',
                company: 'Store (Inventory)',
                position: 'Mobile Developer',
                duration: 'Dec 2022 – Feb 2023',
                location: 'Hybrid Remote',
                description: 'Conceived, built and deployed a multi-role inventory app (manager / sales-agent) with Flutter SetState, Firebase Auth, Firestore & Storage back-end and PDF invoice generation.',
                highlights: [
                    'Managers upload SKUs, assign agents, track real-time stock and returns',
                    'Auto-generated analytics dashboards for inventory management',
                    'Agents issue invoices that immediately update inventory',
                    'Implemented multi-dex-signed builds and Play-Console release pipeline',
                    'Custom PDF export engine shortened audit prep from hours to minutes'
                ],
                technologies: ['Flutter', 'SetState', 'Firebase Auth', 'Firestore', 'Firebase Storage', 'PDF Generation'],
                links: [
                    {
                        type: 'playstore',
                        url: 'https://play.google.com/store/apps/details?id=com.storeblueatom.store',
                        label: 'Google Play'
                    }
                ],
                achievement: 'Published'
            },
            {
                id: 'here-app',
                company: 'Here (Brick-and-Mortar Commerce)',
                position: 'Junior Flutter Developer',
                duration: 'Oct 2021 – Apr 2022',
                location: 'Remote',
                description: 'Launched an O2O marketplace that lets shoppers discover nearby stores, compare prices and reserve in-store pickup; merchants list products, discounts and geo-offers.',
                highlights: [
                    'Implemented Google Maps & Geolocator for proximity search',
                    'Developed location-aware offers and turn-by-turn shop navigation',
                    'Created complete Firebase back-end including security rules',
                    'Built merchant dashboard for product and offer management',
                    'Integrated payment gateway and order management system'
                ],
                technologies: ['Flutter', 'Firebase', 'Google Maps', 'Geolocator', 'Firebase Security Rules'],
                links: [
                    {
                        type: 'playstore',
                        url: 'https://play.google.com/store/apps/details?id=com.blueAtom777.here',
                        label: 'Google Play'
                    }
                ],
                achievement: 'First Project'
            }
        ],
    },

    // Projects Section
    projects: {
        title: 'Featured Projects',
        subtitle: 'Some of my notable work',
        viewMore: 'View More',
        viewLess: 'View Less',
        visitSite: 'Visit Site',
        sourceCode: 'Source Code',
        demoApps: 'Demo Applications',
        
        featured: {
            chatApp: {
                title: 'Real-time Chat Application',
                description: 'A feature-rich messaging app with real-time communication, file sharing, and group chats.',
                tech: ['Flutter', 'Firebase', 'WebRTC']
            },
            ecommerce: {
                title: 'E-commerce Mobile App',
                description: 'Complete shopping experience with cart management, payment integration, and order tracking.',
                tech: ['Flutter', 'Stripe', 'REST API']
            },
            social: {
                title: 'Social Media Platform',
                description: 'Instagram-like social platform with photo sharing, stories, and social interactions.',
                tech: ['Flutter', 'Firebase', 'Image Processing']
            },
            utility: {
                title: 'Productivity Suite',
                description: 'All-in-one productivity app with task management, notes, and calendar integration.',
                tech: ['Flutter', 'SQLite', 'Cloud Sync']
            }
        }
    },

    // Skills Section
    skills: {
        title: 'Technical Skills',
        subtitle: 'My technical expertise and proficiencies',
        
        categories: {
            technical: 'Technical Skills',
            soft: 'Soft Skills',
            tools: 'Tools & Technologies',
            design: 'Design & UI/UX'
        },

        technical: {
            title: 'Programming & Frameworks',
            flutter: 'Flutter',
            dart: 'Dart',
            firebase: 'Firebase',
            restApi: 'REST APIs',
            stateManagement: 'State Management',
            architecture: 'Clean Architecture'
        },

        soft: {
            title: 'Soft Skills',
            problemSolving: 'Problem Solving',
            teamwork: 'Teamwork',
            communication: 'Communication',
            leadership: 'Leadership',
            timeManagement: 'Time Management',
            adaptability: 'Adaptability'
        },

        tools: {
            title: 'Development Tools',
            androidStudio: 'Android Studio',
            vscode: 'VS Code',
            git: 'Git & GitHub',
            figma: 'Figma',
            postman: 'Postman',
            firebase: 'Firebase Console'
        },

        design: {
            title: 'Design Skills',
            uiux: 'UI/UX Design',
            prototyping: 'Prototyping',
            wireframing: 'Wireframing',
            responsive: 'Responsive Design',
            animation: 'Animation',
            branding: 'Brand Design'
        }
    },

    // Certificates Section
    certificates: {
        title: 'Certifications & Courses',
        subtitle: 'My learning journey and professional development',
        viewCertificate: 'View Certificate',
        
        categories: {
            software: 'Software Development',
            business: 'Business & Entrepreneurship',
            other: 'Other Certifications'
        },

        stats: {
            total: 'Total Certificates',
            software: 'Software Dev',
            business: 'Business',
            other: 'Other'
        }
    },    // Contact Section
    contact: {
        title: 'Get In Touch',
        subtitle: 'Let\'s work together on your next project',
        
        info: {
            title: 'Contact Information',
            email: 'Email',
            phone: 'Phone',
            location: 'Location',
            availability: 'Available for projects'
        },

        social: {
            title: 'Follow Me',
            github: 'GitHub',
            linkedin: 'LinkedIn',
            twitter: 'Twitter',
            instagram: 'Instagram'
        }
    },

    // Footer Section
    footer: {
        copyright: '© 2025 Ahmed Samy Zaky. All rights reserved.',
        note: 'Built with HTML, CSS & JavaScript. Please contact me before copying or using this code.',
        
        links: {
            about: 'About',
            experience: 'Experience',
            projects: 'Projects',
            contact: 'Contact'
        },

        newsletter: {
            title: 'Stay Updated',
            description: 'Subscribe to get notified about new projects',
            placeholder: 'Enter your email',
            subscribe: 'Subscribe'
        }
    },

    // Common UI Elements
    ui: {
        loading: 'Loading...',
        error: 'Something went wrong',
        retry: 'Try Again',
        close: 'Close',
        open: 'Open',
        download: 'Download',
        view: 'View',
        edit: 'Edit',
        delete: 'Delete',
        save: 'Save',
        cancel: 'Cancel',
        confirm: 'Confirm',
        yes: 'Yes',
        no: 'No',
        back: 'Back',
        next: 'Next',
        previous: 'Previous',
        more: 'More',
        less: 'Less',
        all: 'All',
        none: 'None',
        search: 'Search',
        filter: 'Filter',
        sort: 'Sort',
        scrollToTop: 'Scroll to top'
    },

    // Accessibility
    a11y: {
        skipToMain: 'Skip to main content',
        toggleTheme: 'Toggle theme',
        toggleMenu: 'Toggle menu',
        closeModal: 'Close modal',
        openModal: 'Open modal',
        previousImage: 'Previous image',
        nextImage: 'Next image',
        scrollToTop: 'Scroll to top of page'
    }
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = translations_en;
} else if (typeof window !== 'undefined') {
    window.translations_en = translations_en;
    console.log('✅ English translations loaded successfully');
    console.log(`📊 English experience data: ${translations_en.experienceData?.length || 0} items`);
    
    // Additional verification
    if (translations_en.experienceData && translations_en.experienceData.length > 0) {
        console.log(`🏢 English experience - First company: ${translations_en.experienceData[0].company}`);
        console.log(`👤 English experience - First position: ${translations_en.experienceData[0].position}`);
        console.log(`🗓️ English experience - First duration: ${translations_en.experienceData[0].duration}`);
    } else {
        console.error('❌ English experience data is empty or missing!');
    }
}
