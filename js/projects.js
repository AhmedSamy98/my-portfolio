// Projects Section JavaScript
// Handles project display, gallery modal, and demo apps showcase

// Projects Data
const PROJECTS_DATA = [
    {
        id: 'languages-arabic',
        title: 'Languages in Arabic - "بالعربى لغات"',
        type: 'Education App',
        description: 'A comprehensive Arabic language learning application featuring Clean Architecture with Cubit state management. The app includes favorites functionality, word bookmarking, and personalized learning paths.',
        features: [
            'Feature-first Clean Architecture implementation',
            'Cubit-driven state management',
            'Favorites and bookmarking system',
            'Offline data persistence with shared_preferences',
            'Personalized learning paths',
            'Available on both iOS and Android'
        ],
        technologies: ['Flutter', 'Cubit', 'Clean Architecture', 'shared_preferences', 'get_it'],
        images: [
            'projects/Languages_in_Arabic/1.webp',
            'projects/Languages_in_Arabic/2.webp',
            'projects/Languages_in_Arabic/3.webp',
            'projects/Languages_in_Arabic/4.webp'
        ],
        mainImage: 'projects/Languages_in_Arabic/1.webp',
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
        status: 'live'
    },
    {
        id: 'talk-app',
        title: 'Talk - Podcast & Creator Platform',
        type: 'Media App',
        description: 'A comprehensive podcast and content creation platform with recording, editing, and publishing capabilities. Features social interactions, playlists, and real-time content management.',
        features: [
            'In-app audio and video recording',
            'Background audio playback',
            'Social features (likes, comments, sharing)',
            'Private channels and playlists',
            'Content filtering and search',
            'QR code and deep-link sharing'
        ],
        technologies: ['Flutter', 'Cubit', 'Clean Architecture', 'Django REST API', 'just_audio', 'Dio'],
        images: [
            'projects/TALK/1.jpg',
            'projects/TALK/2.jpg',
            'projects/TALK/3.png'
        ],
        mainImage: 'projects/TALK/1.jpg',
        links: [],
        status: 'demo'
    },
    {
        id: 'store-app',
        title: 'Store - Inventory Management',
        type: 'Business App',
        description: 'Multi-role inventory management system for managers and sales agents. Features real-time stock tracking, PDF invoice generation, and analytics dashboard.',
        features: [
            'Multi-role user management (Manager/Agent)',
            'Real-time inventory tracking',
            'PDF invoice generation',
            'Analytics dashboard',
            'Stock returns management',
            'Automated Play Console releases'
        ],
        technologies: ['Flutter', 'SetState', 'Firebase Auth', 'Firestore', 'PDF Generation'],
        images: [
            'projects/STORE/1.png',
            'projects/STORE/2.png',
            'projects/STORE/3.png',
            'projects/STORE/4.png',
            'projects/STORE/5.png',
            'projects/STORE/6.png'
        ],
        mainImage: 'projects/STORE/1.png',
        links: [
            {
                type: 'playstore',
                url: 'https://play.google.com/store/apps/details?id=com.storeblueatom.store',
                label: 'Google Play'
            }
        ],
        status: 'live'
    },
    {
        id: 'here-app',
        title: 'Here - O2O Marketplace',
        type: 'E-commerce App',
        description: 'O2O marketplace connecting shoppers with nearby stores. Features location-based search, price comparison, and in-store pickup reservations.',
        features: [
            'Google Maps integration for store discovery',
            'Location-aware offers and discounts',
            'Turn-by-turn navigation to stores',
            'Price comparison across merchants',
            'In-store pickup reservations',
            'Merchant dashboard for product management'
        ],
        technologies: ['Flutter', 'Firebase', 'Google Maps', 'Geolocator', 'Firebase Security Rules'],
        images: [
            'projects/HERE/1.jpeg',
            'projects/HERE/2.jpeg',
            'projects/HERE/3.jpeg',
            'projects/HERE/4.jpeg',
            'projects/HERE/5.webp',
            'projects/HERE/6.jpeg',
            'projects/HERE/7.jpeg',
            'projects/HERE/8.jpeg',
            'projects/HERE/9.jpeg',
            'projects/HERE/10.jpeg',
            'projects/HERE/11.jpeg'
        ],
        mainImage: 'projects/HERE/1.jpeg',
        links: [
            {
                type: 'playstore',
                url: 'https://play.google.com/store/apps/details?id=com.blueAtom777.here',
                label: 'Google Play'
            }
        ],
        status: 'live'
    }
];

// Demo Apps Data
const DEMO_APPS = [
    'Adoptify', 'banking', 'beauty_master', 'carea', 'ev_spot', 'flix',
    'grocery', 'hair_salon', 'home_service', 'juber_car', 'laundry_service',
    'learner', 'medilab', 'medium', 'Moviea', 'newsblog', 'orapay', 'Potea',
    'qi_bus', 'quiz', 'recipe', 'relix', 'room_finder', 'scribblr',
    'shop_hop', 'smart_deck', 'smart_home', 'social'
];

// Projects Manager
const projectsManager = {
    init: () => {
        projectsManager.renderProjects();
        projectsManager.renderDemoAppsSection();
        projectsManager.setupGalleryModal();
        projectsManager.setupAnimations();
    },

    renderProjects: () => {
        const projectsGrid = document.querySelector('.projects-grid');
        if (!projectsGrid) return;

        projectsGrid.innerHTML = '';

        PROJECTS_DATA.forEach((project, index) => {
            const projectCard = projectsManager.createProjectCard(project, index);
            projectsGrid.appendChild(projectCard);
        });
    },

    createProjectCard: (project, index) => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';
        projectCard.style.animationDelay = `${index * 0.1}s`;

        // Create features list
        const featuresList = project.features.map(feature => 
            `<li>${feature}</li>`
        ).join('');

        // Create tech badges
        const techBadges = project.technologies.map(tech => 
            `<span class="tech-badge">${tech}</span>`
        ).join('');

        // Create action buttons
        const actionButtons = project.links.map(link => {
            const iconClass = projectsManager.getLinkIcon(link.type);
            return `
                <a href="${link.url}" target="_blank" class="project-btn btn-primary-project">
                    <i class="${iconClass}"></i>
                    ${link.label}
                </a>
            `;
        }).join('');

        // Add gallery button if project has multiple images
        const galleryButton = project.images.length > 1 ? 
            `<button class="project-btn btn-secondary-project" onclick="projectsManager.openGallery('${project.id}')">
                <i class="fas fa-images"></i>
                View Gallery
            </button>` : '';

        projectCard.innerHTML = `
            <div class="project-image-container">
                <img src="./assets/${project.mainImage}" alt="${project.title}" class="project-image" loading="lazy">
                <div class="project-overlay">
                    ${project.images.length > 1 ? 
                        `<button class="view-gallery-btn" onclick="projectsManager.openGallery('${project.id}')">
                            <i class="fas fa-images"></i>
                            View Gallery
                        </button>` : ''
                    }
                </div>
                <div class="project-status ${project.status}">${project.status.toUpperCase()}</div>
            </div>
            
            <div class="project-content">
                <div class="project-header">
                    <div>
                        <h3 class="project-title">${project.title}</h3>
                    </div>
                    <div class="project-type">${project.type}</div>
                </div>
                
                <p class="project-description">${project.description}</p>
                
                <div class="project-features">
                    <h4>Key Features:</h4>
                    <ul class="features-list">
                        ${featuresList}
                    </ul>
                </div>
                
                <div class="project-tech">
                    ${techBadges}
                </div>
                
                <div class="project-actions">
                    ${actionButtons}
                    ${galleryButton}
                </div>
            </div>
        `;

        return projectCard;
    },

    renderDemoAppsSection: () => {
        const projectsGrid = document.querySelector('.projects-grid');
        if (!projectsGrid) return;

        const demoSection = document.createElement('div');
        demoSection.className = 'demo-apps-section';
        demoSection.innerHTML = `
            <div class="demo-apps-content">
                <h3 class="demo-apps-title">28 Demo Template Apps</h3>
                <p class="demo-apps-description">
                    A comprehensive suite of ready-to-brand template applications covering various industries 
                    including e-commerce, ride-hailing, food delivery, media streaming, hotel booking, 
                    education, Q&A, car services, and on-demand services.
                </p>
                
                <div class="demo-apps-stats">
                    <div class="demo-stat">
                        <span class="demo-stat-number">28</span>
                        <span class="demo-stat-label">Template Apps</span>
                    </div>
                    <div class="demo-stat">
                        <span class="demo-stat-number">10+</span>
                        <span class="demo-stat-label">Industries</span>
                    </div>
                    <div class="demo-stat">
                        <span class="demo-stat-number">100%</span>
                        <span class="demo-stat-label">Flutter & Dart</span>
                    </div>
                    <div class="demo-stat">
                        <span class="demo-stat-number">3.x</span>
                        <span class="demo-stat-label">Flutter Version</span>
                    </div>
                </div>
                
                <button class="view-all-demos-btn" onclick="projectsManager.openDemoAppsModal()">
                    <i class="fas fa-mobile-alt"></i>
                    Explore All Demo Apps
                </button>
                
                <div style="margin-top: 1.5rem;">
                    <a href="https://www.youtube.com/playlist?list=PL4Ti32rTkEYjo2lrlCOck8NIrFguIF8Dj" 
                       target="_blank" class="project-btn btn-outline-project">
                        <i class="fab fa-youtube"></i>
                        Watch Demo Videos
                    </a>
                </div>
            </div>
        `;

        projectsGrid.appendChild(demoSection);
    },

    getLinkIcon: (linkType) => {
        const iconMap = {
            'playstore': 'fab fa-google-play',
            'appstore': 'fab fa-app-store-ios',
            'github': 'fab fa-github',
            'website': 'fas fa-external-link-alt',
            'youtube': 'fab fa-youtube',
            'demo': 'fas fa-play-circle'
        };
        return iconMap[linkType] || 'fas fa-link';
    },

    setupGalleryModal: () => {
        // Create gallery modal if it doesn't exist
        if (!document.getElementById('galleryModal')) {
            const modal = document.createElement('div');
            modal.id = 'galleryModal';
            modal.className = 'gallery-modal';
            modal.innerHTML = `
                <div class="gallery-content">
                    <div class="gallery-header">
                        <h3 class="gallery-title">Project Gallery</h3>
                        <button class="gallery-close" onclick="projectsManager.closeGallery()">
                            <i class="fas fa-times"></i>
                        </button>
                    </div>
                    <div class="gallery-images" id="galleryImages">
                        <!-- Images will be populated here -->
                    </div>
                </div>
            `;
            document.body.appendChild(modal);

            // Close modal when clicking outside
            modal.addEventListener('click', (e) => {
                if (e.target === modal) {
                    projectsManager.closeGallery();
                }
            });
        }
    },

    openGallery: (projectId) => {
        const project = PROJECTS_DATA.find(p => p.id === projectId);
        if (!project) return;

        const modal = document.getElementById('galleryModal');
        const galleryImages = document.getElementById('galleryImages');
        const galleryTitle = modal.querySelector('.gallery-title');

        galleryTitle.textContent = `${project.title} - Gallery`;
        galleryImages.innerHTML = '';

        project.images.forEach((imagePath, index) => {
            const img = document.createElement('img');
            img.src = `./assets/${imagePath}`;
            img.alt = `${project.title} - Image ${index + 1}`;
            img.className = 'gallery-image';
            img.loading = 'lazy';
            
            img.addEventListener('click', () => {
                projectsManager.openImageLightbox(img.src, project.title);
            });

            galleryImages.appendChild(img);
        });

        modal.classList.add('open');
        document.body.style.overflow = 'hidden';
    },

    closeGallery: () => {
        const modal = document.getElementById('galleryModal');
        modal.classList.remove('open');
        document.body.style.overflow = '';
    },

    openImageLightbox: (imageSrc, title) => {
        // Create a simple lightbox for full-size image viewing
        const lightbox = document.createElement('div');
        lightbox.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.95);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 10000;
            cursor: pointer;
        `;

        const img = document.createElement('img');
        img.src = imageSrc;
        img.alt = title;
        img.style.cssText = `
            max-width: 95%;
            max-height: 95%;
            object-fit: contain;
            border-radius: 10px;
        `;

        lightbox.appendChild(img);
        document.body.appendChild(lightbox);

        lightbox.addEventListener('click', () => {
            document.body.removeChild(lightbox);
        });
    },

    openDemoAppsModal: () => {
        // Create and show demo apps modal
        const modal = document.createElement('div');
        modal.className = 'gallery-modal';
        modal.style.zIndex = '10001';
        
        const demoAppsGrid = DEMO_APPS.map(appName => `
            <div class="demo-app-item" onclick="projectsManager.viewDemoApp('${appName}')">
                <div class="demo-app-icon">
                    <i class="fas fa-mobile-alt"></i>
                </div>
                <h4>${appName.replace(/_/g, ' ').replace(/([A-Z])/g, ' $1').trim()}</h4>
                <p>Flutter Demo App</p>
            </div>
        `).join('');

        modal.innerHTML = `
            <div class="gallery-content" style="max-width: 80vw;">
                <div class="gallery-header">
                    <h3 class="gallery-title">28 Demo Template Apps</h3>
                    <button class="gallery-close" onclick="this.closest('.gallery-modal').remove(); document.body.style.overflow = '';">
                        <i class="fas fa-times"></i>
                    </button>
                </div>
                <div style="padding: 1.5rem; max-height: 70vh; overflow-y: auto;">
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem;">
                        ${demoAppsGrid}
                    </div>
                    <div style="text-align: center; margin-top: 2rem;">
                        <a href="https://www.youtube.com/playlist?list=PL4Ti32rTkEYjo2lrlCOck8NIrFguIF8Dj" 
                           target="_blank" class="project-btn btn-primary-project">
                            <i class="fab fa-youtube"></i>
                            Watch All Demo Videos
                        </a>
                    </div>
                </div>
            </div>
        `;

        // Add styles for demo app items
        const style = document.createElement('style');
        style.textContent = `
            .demo-app-item {
                background: var(--bg-secondary);
                border: 1px solid rgba(19, 185, 253, 0.2);
                border-radius: 10px;
                padding: 1rem;
                text-align: center;
                cursor: pointer;
                transition: all var(--transition-medium);
            }
            .demo-app-item:hover {
                transform: translateY(-3px);
                border-color: var(--accent-color);
                box-shadow: var(--shadow-medium);
            }
            .demo-app-icon {
                font-size: 2rem;
                color: var(--primary-color);
                margin-bottom: 0.5rem;
            }
            .demo-app-item h4 {
                font-size: 0.9rem;
                font-weight: 600;
                color: var(--text-primary);
                margin-bottom: 0.3rem;
                text-transform: capitalize;
            }
            .demo-app-item p {
                font-size: 0.8rem;
                color: var(--text-secondary);
                margin: 0;
            }
        `;
        document.head.appendChild(style);

        document.body.appendChild(modal);
        modal.classList.add('open');
        document.body.style.overflow = 'hidden';

        // Close modal when clicking outside
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.remove();
                document.body.style.overflow = '';
            }
        });
    },

    viewDemoApp: (appName) => {
        // This could open a gallery of the specific demo app
        // For now, redirect to the YouTube playlist
        window.open('https://www.youtube.com/playlist?list=PL4Ti32rTkEYjo2lrlCOck8NIrFguIF8Dj', '_blank');
    },

    setupAnimations: () => {
        // Intersection Observer for project cards
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -100px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                    
                    // Animate tech badges
                    const techBadges = entry.target.querySelectorAll('.tech-badge');
                    techBadges.forEach((badge, index) => {
                        setTimeout(() => {
                            badge.style.transform = 'scale(1.05)';
                            setTimeout(() => {
                                badge.style.transform = 'scale(1)';
                            }, 200);
                        }, index * 100);
                    });
                }
            });
        }, observerOptions);

        // Observe project cards
        document.querySelectorAll('.project-card').forEach(card => {
            observer.observe(card);
        });
    },

    // Method to get project statistics
    getStats: () => {
        const totalProjects = PROJECTS_DATA.length;
        const liveProjects = PROJECTS_DATA.filter(p => p.status === 'live').length;
        const totalDemoApps = DEMO_APPS.length;
        const allTechnologies = [...new Set(PROJECTS_DATA.flatMap(p => p.technologies))];
        
        return {
            totalProjects,
            liveProjects,
            totalDemoApps,
            totalApps: totalProjects + totalDemoApps,
            technologiesUsed: allTechnologies.length,
            technologies: allTechnologies
        };
    }
};

// Initialize projects section when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        projectsManager.init();
        
        // Log project statistics for debugging
        console.log('Projects Statistics:', projectsManager.getStats());
    }, 500);
});

// Global functions for onclick handlers
window.projectsManager = projectsManager;

// Export for external use
window.ProjectsManager = projectsManager;
