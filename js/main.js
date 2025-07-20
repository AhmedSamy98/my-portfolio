// Main JavaScript File - Portfolio Website
// Modern, interactive functionality with smooth animations

// Hide loading screen when page is loaded
window.addEventListener('load', function() {
    const loadingScreen = document.querySelector('.loading-screen');
    if (loadingScreen) {
        loadingScreen.classList.add('hidden');
        // Remove it completely after transition
        setTimeout(() => {
            loadingScreen.style.display = 'none';
        }, 600);
    }
});

// Global Variables and Configuration
const CONFIG = {
    // Animation settings
    ANIMATION_DURATION: 300,
    SCROLL_THRESHOLD: 100,
    IMAGE_CHANGE_INTERVAL: 3000,
    
    // Language settings
    DEFAULT_LANGUAGE: 'en',
    SUPPORTED_LANGUAGES: ['en', 'ar', 'fr', 'de', 'es', 'ja', 'ko'],
    
    // Theme settings
    DEFAULT_THEME: 'dark',
    
    // API endpoints and URLs
    CV_BASE_URL: './assets/certificate/CV/',
    IMAGES_BASE_URL: './assets/',
      // Tech icons for background
    TECH_ICONS: [
        // Programming Languages
        'fab fa-js-square', 'fab fa-python', 'fab fa-java', 'fab fa-html5', 'fab fa-css3-alt',
        'fab fa-react', 'fab fa-angular', 'fab fa-vue', 'fab fa-node-js', 'fab fa-php',
        'fab fa-swift', 'fas fa-database', 'fab fa-dart-lang', 'fab fa-flutter',
        
        // Mobile Development
        'fab fa-android', 'fab fa-apple', 'fas fa-mobile-alt', 'fas fa-tablet-alt',
        
        // Cloud & Backend
        'fab fa-aws', 'fab fa-google', 'fab fa-microsoft', 'fab fa-digital-ocean',
        'fab fa-docker', 'fab fa-firebase', 'fas fa-cloud', 'fas fa-server',
        
        // Development Tools
        'fab fa-git-alt', 'fab fa-github', 'fab fa-gitlab', 'fab fa-bitbucket',
        'fab fa-npm', 'fab fa-yarn', 'fas fa-code', 'fas fa-terminal',
        
        // Design & UI
        'fab fa-figma', 'fab fa-sketch', 'fas fa-paint-brush', 'fas fa-palette',
        'fas fa-magic', 'fas fa-eye', 'fas fa-drafting-compass',
        
        // Frameworks & Libraries
        'fab fa-bootstrap', 'fab fa-sass', 'fab fa-less', 'fab fa-wordpress',
        'fab fa-drupal', 'fab fa-joomla',
        
        // Other Tech
        'fas fa-microchip', 'fas fa-robot', 'fas fa-brain', 'fas fa-cogs',
        'fas fa-rocket', 'fas fa-bolt', 'fas fa-wifi', 'fas fa-network-wired'
    ]
};

// Language Configuration
const LANGUAGES = {
    en: {
        code: 'en',
        name: 'English',
        flag: 'flag-us',
        dir: 'ltr',
        font: 'Inter'
    },
    ar: {
        code: 'ar',
        name: 'العربية',
        flag: 'flag-uae',
        dir: 'rtl',
        font: 'Noto Sans Arabic'
    },
    fr: {
        code: 'fr',
        name: 'Français',
        flag: 'flag-fr',
        dir: 'ltr',
        font: 'Inter'
    },
    de: {
        code: 'de',
        name: 'Deutsch',
        flag: 'flag-de',
        dir: 'ltr',
        font: 'Inter'
    },
    es: {
        code: 'es',
        name: 'Español',
        flag: 'flag-es',
        dir: 'ltr',
        font: 'Inter'
    },
    ja: {
        code: 'ja',
        name: '日本語',
        flag: 'flag-jp',
        dir: 'ltr',
        font: 'Inter'
    },
    ko: {
        code: 'ko',
        name: '한국어',
        flag: 'flag-kr',
        dir: 'ltr',
        font: 'Inter'
    }
};

// Application State
let currentLanguage = CONFIG.DEFAULT_LANGUAGE;
let currentTheme = CONFIG.DEFAULT_THEME;
let isScrolling = false;
let profileImageIndex = 0;
let profileImageInterval;

// Utility Functions
const utils = {
    // Debounce function for performance optimization
    debounce: (func, wait) => {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    },

    // Throttle function for scroll events
    throttle: (func, limit) => {
        let lastFunc;
        let lastRan;
        return function() {
            const context = this;
            const args = arguments;
            if (!lastRan) {
                func.apply(context, args);
                lastRan = Date.now();
            } else {
                clearTimeout(lastFunc);
                lastFunc = setTimeout(function() {
                    if ((Date.now() - lastRan) >= limit) {
                        func.apply(context, args);
                        lastRan = Date.now();
                    }
                }, limit - (Date.now() - lastRan));
            }
        };
    },

    // Smooth scroll to element
    scrollToElement: (element, offset = 80) => {
        const elementPosition = element.offsetTop - offset;
        window.scrollTo({
            top: elementPosition,
            behavior: 'smooth'
        });
    },

    // Check if element is in viewport
    isInViewport: (element) => {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    },

    // Add class with animation delay
    addClassWithDelay: (elements, className, delay = 100) => {
        elements.forEach((element, index) => {
            setTimeout(() => {
                element.classList.add(className);
            }, index * delay);
        });
    }
};

// Theme Management
const themeManager = {
    init: () => {
        const savedTheme = localStorage.getItem('theme') || CONFIG.DEFAULT_THEME;
        themeManager.setTheme(savedTheme);
        themeManager.bindEvents();
    },

    setTheme: (theme) => {
        currentTheme = theme;
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
        
        // Update theme toggle buttons
        const themeToggles = document.querySelectorAll('.theme-toggle, .theme-toggle-hero');
        themeToggles.forEach(toggle => {
            const slider = toggle.querySelector('.theme-toggle-slider, .theme-slider');
            if (slider) {
                slider.innerHTML = theme === 'dark' ? '🌙' : '☀️';
            }
        });
        
        // Update scroll-to-top button background
        themeManager.updateScrollButtonTheme();
    },

    toggleTheme: () => {
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        themeManager.setTheme(newTheme);
        
        // Add transition effect
        document.body.style.transition = 'all 0.3s ease';
        setTimeout(() => {
            document.body.style.transition = '';
        }, 300);
    },    updateScrollButtonTheme: () => {
        const scrollButton = document.getElementById('backToTop');
        if (scrollButton && LANGUAGES[currentLanguage]) {
            // Remove any existing language classes
            CONFIG.SUPPORTED_LANGUAGES.forEach(lang => {
                scrollButton.classList.remove(lang);
            });
            // Add current language class
            scrollButton.classList.add(currentLanguage);
        }
    },

    bindEvents: () => {
        const themeToggles = document.querySelectorAll('.theme-toggle, .theme-toggle-hero');
        themeToggles.forEach(toggle => {
            toggle.addEventListener('click', themeManager.toggleTheme);
        });
    }
};

// Language Management
const languageManager = {    init: () => {
        console.log('🌍 Language Manager: Initializing...');
        
        // CRITICAL: Ensure English is the default on first visit
        let savedLanguage = localStorage.getItem('language');
        
        // If no language is saved (first visit), set English as default
        if (!savedLanguage) {
            console.log('🚨 First visit detected - setting English as default language');
            savedLanguage = CONFIG.DEFAULT_LANGUAGE;
            localStorage.setItem('language', savedLanguage);
        }
        
        // Set initial global language variable FIRST
        window.currentLanguage = savedLanguage;
        
        console.log(`📍 Initial language set to: ${savedLanguage}`);
        
        // Then proceed with full initialization
        languageManager.setLanguage(savedLanguage);
        languageManager.bindEvents();
        languageManager.renderLanguageOptions();
        
        console.log('✅ Language Manager initialized successfully');
    },    setLanguage: (langCode) => {
        if (!LANGUAGES[langCode]) {
            console.warn(`⚠️ Unsupported language: ${langCode}, falling back to ${CONFIG.DEFAULT_LANGUAGE}`);
            langCode = CONFIG.DEFAULT_LANGUAGE;
        }
        
        console.log(`🌍 Setting language to: ${langCode}`);
        
        currentLanguage = langCode;
        // Make language available globally
        window.currentLanguage = langCode;
        const language = LANGUAGES[langCode];
        
        // Update document attributes
        document.documentElement.lang = langCode;
        document.documentElement.dir = language.dir;
        document.body.style.fontFamily = `${language.font}, ${document.body.style.fontFamily}`;
        
        // Save to localStorage
        localStorage.setItem('language', langCode);
        
        console.log(`✅ Language set to ${langCode} (${language.name})`);
        
        // Update UI
        languageManager.updateLanguageDisplay();
        languageManager.loadTranslations(langCode);
        languageManager.renderLanguageOptions(); // Re-render options to update active state
        themeManager.updateScrollButtonTheme();
        
        // Update back-to-top button class
        const backToTopBtn = document.getElementById('backToTop');
        if (backToTopBtn) {
            // Remove any existing language classes
            CONFIG.SUPPORTED_LANGUAGES.forEach(lang => {
                backToTopBtn.classList.remove(lang);
            });
            // Add current language class
            backToTopBtn.classList.add(langCode);
        }
        
        // Update CV button
        languageManager.updateCVButton();
        
        // Note: updateDynamicComponents is now called after translations are loaded
    },updateLanguageDisplay: () => {
        // Update both desktop and mobile language switchers
        document.querySelectorAll('.language-current').forEach(currentBtn => {
            const flagElement = currentBtn.querySelector('.language-flag');
            const textElement = currentBtn.querySelector('.language-text');
            
            if (flagElement && textElement) {
                flagElement.className = `language-flag ${LANGUAGES[currentLanguage].flag}`;
                textElement.textContent = LANGUAGES[currentLanguage].name;
            }
        });
    },

    updateCVButton: () => {
        const cvButton = document.querySelector('.cv-button');
        const cvFlag = cvButton?.querySelector('.language-flag');
        
        if (cvFlag) {
            cvFlag.className = `language-flag ${LANGUAGES[currentLanguage].flag}`;
        }
        
        // Update CV link
        const cvLink = cvButton?.getAttribute('href');
        if (cvLink) {
            const newCVLink = `${CONFIG.CV_BASE_URL}AHMED_SAMY_ZAKY_${currentLanguage}.pdf`;
            cvButton.setAttribute('href', newCVLink);
        }
        
        // Update dropdown options
        languageManager.updateCVDropdown();
    },
    
    updateCVDropdown: () => {
        const dropdown = document.querySelector('.cv-dropdown');
        if (!dropdown) return;
        
        dropdown.innerHTML = '';
        
        Object.entries(LANGUAGES).forEach(([code, lang]) => {
            const option = document.createElement('a');
            option.href = `${CONFIG.CV_BASE_URL}AHMED_SAMY_ZAKY_${code}.pdf`;
            option.className = `cv-option ${code === currentLanguage ? 'active' : ''}`;
            option.target = '_blank';            option.innerHTML = `
                <div class="language-flag ${lang.flag}"></div>
                <span>${lang.name}</span>
                <i class="fas fa-external-link-alt"></i>
            `;
            dropdown.appendChild(option);
        });
    },
    
    // Update components that depend on language
    updateDynamicComponents: () => {
        console.log('Updating dynamic components for language:', currentLanguage);
        
        // Update experience timeline with translations if ExperienceManager is available
        if (window.ExperienceManager) {
            console.log('Updating Experience Manager with translations...');
            window.ExperienceManager.updateLanguage();
        }
        
        // Re-render projects if ProjectsManager is available
        if (window.ProjectsManager) {
            console.log('Re-rendering Projects Manager...');
            window.ProjectsManager.renderProjects();
        }
        
        // Dispatch a custom event to notify components of language change
        console.log('=== Dispatching languageChanged event ===');
        console.log('Current language:', currentLanguage);
        console.log('window.currentLanguage:', window.currentLanguage);
        
        const languageEvent = new CustomEvent('languageChanged', { 
            detail: { 
                language: currentLanguage,
                previousLanguage: window.previousLanguage || 'unknown' 
            } 
        });
        
        // Store previous language for debugging
        window.previousLanguage = currentLanguage;
        
        document.dispatchEvent(languageEvent);
        console.log('languageChanged event dispatched');
        
        // Re-setup scroll animations after language change
        setTimeout(() => {
            if (typeof window.setupScrollAnimations === 'function') {
                window.setupScrollAnimations();
            }
        }, 200);
    },renderLanguageOptions: () => {
        // Update both desktop and mobile language dropdowns
        document.querySelectorAll('.language-dropdown').forEach(dropdown => {
            dropdown.innerHTML = '';
            
            Object.entries(LANGUAGES).forEach(([code, lang]) => {
                const option = document.createElement('a');
                option.href = '#';
                option.className = `language-option ${code === currentLanguage ? 'active' : ''}`;
                option.dataset.lang = code;
                option.innerHTML = `
                    <div class="language-flag ${lang.flag}"></div>
                    <span class="language-name">${lang.name}</span>
                    <span class="language-code">${code.toUpperCase()}</span>
                `;
                dropdown.appendChild(option);
            });
        });
    },
    
    loadTranslations: (langCode) => {
        // Get translations from globally loaded translation files
        let translations = null;
        
        switch(langCode) {
            case 'en':
                translations = window.translations_en || translations_en;
                break;
            case 'ar':
                translations = window.translations_ar || translations_ar;
                break;
            case 'fr':
                translations = window.translations_fr || translations_fr;
                break;
            case 'de':
                translations = window.translations_de || translations_de;
                break;
            case 'es':
                translations = window.translations_es || translations_es;
                break;
            case 'ja':
                translations = window.translations_ja || translations_ja;
                break;
            case 'ko':
                translations = window.translations_ko || translations_ko;
                break;
            default:
                console.warn('Translation not found for language:', langCode);
                return;
        }
        
        if (translations) {
            languageManager.applyTranslations(translations);
            
            // Update dynamic components AFTER translations are applied
            setTimeout(() => {
                console.log('🔄 Updating dynamic components after translation load...');
                languageManager.updateDynamicComponents();
            }, 50);
        } else {
            console.warn('Translation file not loaded for language:', langCode);
        }
    },
    
    applyTranslations: (translations) => {
        // Helper function to get nested translation value
        const getTranslation = (obj, path) => {
            return path.split('.').reduce((current, key) => current && current[key], obj);
        };
        
        // Apply translations to elements with data-translate attribute
        document.querySelectorAll('[data-translate]').forEach(element => {
            const key = element.dataset.translate;
            let translatedText = null;

            // First, check if the key contains dots (explicit path notation)
            if (key.includes('.')) {
                translatedText = getTranslation(translations, key);
            }
            // If not found or no dots, try the prefix-based approach
            else if (key.startsWith('nav_')) {
                const navKey = key.replace('nav_', '');
                translatedText = getTranslation(translations, `nav.${navKey}`);
            } else if (key.startsWith('hero_')) {
                const heroKey = key.replace('hero_', '');
                translatedText = getTranslation(translations, `hero.${heroKey}`);
            } else if (key.startsWith('about_')) {
                const aboutKey = key.replace('about_', '');
                translatedText = getTranslation(translations, `about.${aboutKey}`);
            } else if (key.startsWith('experience_')) {
                const expKey = key.replace('experience_', '');
                translatedText = getTranslation(translations, `experience.${expKey}`);
            } else if (key.startsWith('projects_')) {
                const projKey = key.replace('projects_', '');
                translatedText = getTranslation(translations, `projects.${projKey}`);
            } else if (key.startsWith('skills_')) {
                const skillKey = key.replace('skills_', '');
                translatedText = getTranslation(translations, `skills.${skillKey}`);
            } else if (key.startsWith('certificates_')) {
                const certKey = key.replace('certificates_', '');
                translatedText = getTranslation(translations, `certificates.${certKey}`);
            } else if (key.startsWith('contact_')) {
                const contactKey = key.replace('contact_', '');
                translatedText = getTranslation(translations, `contact.${contactKey}`);
            } else if (key.startsWith('footer_')) {
                const footerKey = key.replace('footer_', '');
                translatedText = getTranslation(translations, `footer.${footerKey}`);
            } else {
                // Try direct access first, then fallback to nested paths
                translatedText = translations[key] || getTranslation(translations, key);
            }

            // Apply translation if found
            if (translatedText) {
                if (element.hasAttribute('data-translate-placeholder')) {
                    element.placeholder = translatedText;
                } else if (element.tagName === 'INPUT' && element.type !== 'submit') {
                    element.placeholder = translatedText;
                } else {
                    element.textContent = translatedText;
                }
            }
        });

        // Update document direction for RTL languages
        if (LANGUAGES[currentLanguage] && LANGUAGES[currentLanguage].dir === 'rtl') {
            document.documentElement.setAttribute('dir', 'rtl');
            document.body.classList.add('rtl');
        } else {
            document.documentElement.setAttribute('dir', 'ltr');
            document.body.classList.remove('rtl');
        }
    },
    
    bindEvents: () => {
        // Language switcher toggle (Desktop and Mobile)
        document.querySelectorAll('.language-switcher').forEach(switcher => {
            const langCurrent = switcher.querySelector('.language-current');
            
            if (langCurrent) {
                langCurrent.addEventListener('click', (e) => {
                    e.preventDefault();
                    switcher.classList.toggle('open');
                    
                    // Close other open switchers
                    document.querySelectorAll('.language-switcher').forEach(otherSwitcher => {
                        if (otherSwitcher !== switcher) {
                            otherSwitcher.classList.remove('open');
                        }
                    });
                });
            }
        });
        
        // Language option selection
        document.addEventListener('click', (e) => {
            if (e.target.closest('.language-option')) {
                e.preventDefault();
                const option = e.target.closest('.language-option');
                const langCode = option.dataset.lang;
                languageManager.setLanguage(langCode);
                
                // Close all language switchers
                document.querySelectorAll('.language-switcher').forEach(switcher => {
                    switcher.classList.remove('open');
                });
            } else if (!e.target.closest('.language-switcher')) {
                // Close all language switchers when clicking outside
                document.querySelectorAll('.language-switcher').forEach(switcher => {
                    switcher.classList.remove('open');
                });
            }
        });
    }
};

// Navigation Management
const navigationManager = {
    init: () => {
        navigationManager.bindEvents();
        navigationManager.updateActiveSection();
    },

    bindEvents: () => {
        // Mobile menu toggle
        const mobileToggle = document.querySelector('.mobile-menu-toggle');
        const mobileNav = document.querySelector('.mobile-nav');
        
        if (mobileToggle && mobileNav) {
            mobileToggle.addEventListener('click', () => {
                mobileToggle.classList.toggle('active');
                mobileNav.classList.toggle('open');
                document.body.classList.toggle('mobile-nav-open');
            });
        }
        
        // Navigation links
        document.querySelectorAll('.nav-link, .mobile-nav-link').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    utils.scrollToElement(targetElement);
                    
                    // Close mobile menu
                    mobileToggle?.classList.remove('active');
                    mobileNav?.classList.remove('open');
                    document.body.classList.remove('mobile-nav-open');
                }
            });
        });
        
        // Scroll event for header and active section
        window.addEventListener('scroll', utils.throttle(() => {
            navigationManager.updateHeaderState();
            navigationManager.updateActiveSection();
        }, 100));
    },

    updateHeaderState: () => {
        const header = document.querySelector('.header');
        if (header) {
            if (window.scrollY > CONFIG.SCROLL_THRESHOLD) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        }
    },

    updateActiveSection: () => {
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');
        
        let activeSection = '';
        sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            if (rect.top <= 100 && rect.bottom >= 100) {
                activeSection = section.id;
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${activeSection}`) {
                link.classList.add('active');
            }
        });
    }
};

// Profile Image Carousel
const imageCarousel = {
    images: [
        'Personal_Photo/Ahmed_Samy1.jpg',
        'Personal_Photo/Ahmed_Samy2.jpg',
        'Personal_Photo/Ahmed_Samy3.jpg',
        'Personal_Photo/Ahmed_Samy4.jpg'
    ],

    init: () => {
        imageCarousel.setupImages();
        imageCarousel.startCarousel();
    },

    setupImages: () => {
        const container = document.querySelector('.image-container');
        if (!container) return;
        
        container.innerHTML = '';
        
        imageCarousel.images.forEach((imagePath, index) => {
            const img = document.createElement('img');
            img.src = `${CONFIG.IMAGES_BASE_URL}${imagePath}`;
            img.alt = `Ahmed Samy - Profile ${index + 1}`;
            img.className = `profile-image ${index === 0 ? 'active' : ''}`;
            img.loading = 'lazy';
            container.appendChild(img);
        });
    },

    startCarousel: () => {
        profileImageInterval = setInterval(() => {
            imageCarousel.nextImage();
        }, CONFIG.IMAGE_CHANGE_INTERVAL);
    },

    nextImage: () => {
        const images = document.querySelectorAll('.profile-image');
        if (images.length === 0) return;
        
        images[profileImageIndex].classList.remove('active');
        profileImageIndex = (profileImageIndex + 1) % images.length;
        images[profileImageIndex].classList.add('active');
    },

    pauseCarousel: () => {
        clearInterval(profileImageInterval);
    },

    resumeCarousel: () => {
        imageCarousel.startCarousel();
    }
};

// Scroll to Top Button
const scrollToTopManager = {
    init: () => {
        scrollToTopManager.bindEvents();
    },

    bindEvents: () => {
        const button = document.getElementById('backToTop');
        if (!button) return;
        
        button.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
        
        // Update button class based on current language
        if (LANGUAGES[currentLanguage]) {
            button.classList.add(currentLanguage);
        }
        
        window.addEventListener('scroll', utils.throttle(() => {
            if (window.scrollY > 300) {
                button.classList.add('show');
            } else {
                button.classList.remove('show');
            }
        }, 100));
    }
};

// Background Tech Icons
const techBackground = {
    init: () => {
        // Always create tech icons for about section
        techBackground.createTechIcons();
    },createTechIcons: () => {
        const backgrounds = document.querySelectorAll('.tech-background, .about-tech-bg');
        
        backgrounds.forEach(bg => {
            bg.innerHTML = '';
            
            // Create significantly more icons - 60 for better coverage
            for (let i = 0; i < 60; i++) {
                const icon = document.createElement('i');
                const iconClass = CONFIG.TECH_ICONS[Math.floor(Math.random() * CONFIG.TECH_ICONS.length)];
                icon.className = `tech-icon ${iconClass}`;
                
                // Random positioning
                const top = Math.random() * 100;
                const left = Math.random() * 100;
                
                icon.style.top = `${top}%`;
                icon.style.left = `${left}%`;
                icon.style.animationDelay = `${Math.random() * 15}s`;
                  // Assign different animation types randomly
                const animationType = Math.floor(Math.random() * 4);
                if (animationType === 0) {
                    icon.style.animation = `float ${8 + Math.random() * 6}s ease-in-out infinite`;
                } else if (animationType === 1) {
                    icon.style.animation = `floatRotate ${6 + Math.random() * 8}s ease-in-out infinite`;
                } else if (animationType === 2) {
                    icon.style.animation = `floatScale ${7 + Math.random() * 7}s ease-in-out infinite`;
                } else {
                    icon.style.animation = `float ${8 + Math.random() * 6}s ease-in-out infinite, pulseGlow ${4 + Math.random() * 4}s ease-in-out infinite`;
                }
                
                // Random size variations - slightly larger
                const size = 1.8 + Math.random() * 2.2; // Between 1.8rem and 4.0rem
                icon.style.fontSize = `${size}rem`;
                
                // Enhanced opacity for better visibility
                const opacity = 0.12 + Math.random() * 0.18; // Between 0.12 and 0.30
                icon.style.opacity = opacity;
                
                bg.appendChild(icon);
            }
        });
    }
};

// Animation on Scroll
const scrollAnimations = {
    init: () => {
        scrollAnimations.setupObserver();
    },

    setupObserver: () => {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate');
                    
                    // Trigger specific animations
                    if (entry.target.classList.contains('about')) {
                        scrollAnimations.animateSkillBars();
                        scrollAnimations.animateCounters();
                    }
                }
            });
        }, observerOptions);

        document.querySelectorAll('.animate-on-scroll').forEach(el => {
            observer.observe(el);
        });
    },

    animateSkillBars: () => {
        const skillBars = document.querySelectorAll('.skill-progress-bar');
        skillBars.forEach((bar, index) => {
            setTimeout(() => {
                const skill = bar.dataset.skill;
                bar.style.width = bar.parentElement.dataset.percentage || '0%';
            }, index * 200);
        });
    },

    animateCounters: () => {
        const counters = document.querySelectorAll('.stat-number');
        counters.forEach(counter => {
            const target = parseInt(counter.dataset.target) || parseInt(counter.textContent);
            const duration = 2000;
            const increment = target / (duration / 16);
            let current = 0;

            const updateCounter = () => {
                current += increment;
                if (current < target) {
                    counter.textContent = Math.floor(current) + (counter.textContent.includes('+') ? '+' : '');
                    requestAnimationFrame(updateCounter);
                } else {
                    counter.textContent = target + (counter.textContent.includes('+') ? '+' : '');
                }
            };

            updateCounter();
        });
    }
};

// Loading Screen
const loadingScreen = {
    init: () => {
        window.addEventListener('load', () => {
            setTimeout(() => {
                loadingScreen.hide();
            }, 1000);
        });
    },

    hide: () => {
        const loadingScreen = document.querySelector('.loading-screen');
        if (loadingScreen) {
            loadingScreen.classList.add('fade-out');
            setTimeout(() => {
                loadingScreen.style.display = 'none';
            }, 500);
        }
    }
};

// Modal Management for CV and Contact
const modalManager = {
    init: () => {
        modalManager.bindEvents();
        modalManager.populateCVOptions();
    },

    bindEvents: () => {
        // CV Modal Button
        const cvModalButton = document.getElementById('cvModalButton');
        if (cvModalButton) {
            cvModalButton.addEventListener('click', () => {
                modalManager.openModal('cvModal');
            });
        }

        // Contact Modal Button
        const contactModalButton = document.getElementById('contactModalButton');
        if (contactModalButton) {
            contactModalButton.addEventListener('click', () => {
                modalManager.openModal('contactModal');
            });
        }

        // Modal Close Buttons
        document.querySelectorAll('.modal-close').forEach(closeBtn => {
            closeBtn.addEventListener('click', (e) => {
                const modal = e.target.closest('.modal-overlay');
                if (modal) {
                    modalManager.closeModal(modal.id);
                }
            });
        });

        // Close modal when clicking outside
        document.querySelectorAll('.modal-overlay').forEach(modal => {
            modal.addEventListener('click', (e) => {
                if (e.target === modal) {
                    modalManager.closeModal(modal.id);
                }
            });
        });

        // Escape key to close modals
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                const openModal = document.querySelector('.modal-overlay.active');
                if (openModal) {
                    modalManager.closeModal(openModal.id);
                }
            }
        });
    },

    openModal: (modalId) => {
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
            
            // Update CV options when opening CV modal
            if (modalId === 'cvModal') {
                modalManager.populateCVOptions();
            }
        }
    },

    closeModal: (modalId) => {
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.classList.remove('active');
            document.body.style.overflow = '';
        }
    },

    populateCVOptions: () => {
        const cvOptionsGrid = document.getElementById('cvOptionsGrid');
        if (!cvOptionsGrid) return;

        cvOptionsGrid.innerHTML = '';

        Object.entries(LANGUAGES).forEach(([code, lang]) => {
            const cvOption = document.createElement('a');
            cvOption.href = `${CONFIG.CV_BASE_URL}AHMED_SAMY_ZAKY_${code}.pdf`;
            cvOption.className = 'cv-option';
            cvOption.target = '_blank';
            cvOption.rel = 'noopener';
            
            cvOption.innerHTML = `
                <div class="language-flag ${lang.flag}"></div>
                <h4 class="language-name">${lang.name}</h4>
                <p class="file-size">PDF • ~250KB</p>
            `;

            cvOption.addEventListener('click', () => {
                setTimeout(() => {
                    modalManager.closeModal('cvModal');
                }, 500);
            });

            cvOptionsGrid.appendChild(cvOption);
        });
    }
};

// Global modal functions
window.openModal = (modalId) => {
    modalManager.openModal(modalId);
};

window.closeModal = (modalId) => {
    modalManager.closeModal(modalId);
};

// Initialize Application
document.addEventListener('DOMContentLoaded', () => {
    console.log('🚀 Portfolio website initializing...');
    
    // Initialize all managers
    themeManager.init();
    languageManager.init();
    navigationManager.init();
    imageCarousel.init();
    scrollToTopManager.init();
    techBackground.init();
    scrollAnimations.init();
    loadingScreen.init();
    modalManager.init();
    
    console.log('✅ Portfolio website loaded successfully!');
});

// Handle page visibility change for performance
document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        imageCarousel.pauseCarousel();
    } else {
        imageCarousel.resumeCarousel();
    }
});

// Error handling for images
document.addEventListener('error', (e) => {
    if (e.target.tagName === 'IMG') {
        console.warn('Image failed to load:', e.target.src);
        e.target.style.display = 'none';
    }
}, true);

// ===================================
// SPACE WAR HERO BACKGROUND
// ===================================

const spaceWarGame = {
    asteroids: [],
    explosions: [],
    codeTerms: [
        'class', 'function', 'const', 'let', 'var', 'async', 'await', 
        'return', 'import', 'export', 'default', 'extends', 'super',
        '{}', '[]', '<>', '()', '=>', '&&', '||', '!==', '===',
        'null', 'undefined', 'true', 'false'
    ],
    techLogos: [
        'fab fa-js-square', 'fab fa-python', 'fab fa-java', 'fab fa-react',
        'fab fa-angular', 'fab fa-vue', 'fab fa-node-js', 'fab fa-dart-lang',
        'fab fa-flutter', 'fab fa-android', 'fab fa-apple', 'fab fa-github',
        'fab fa-git-alt', 'fab fa-docker', 'fab fa-aws', 'fab fa-google',
        'fab fa-microsoft', 'fab fa-firebase', 'fab fa-npm', 'fab fa-yarn'
    ],
    
    init: () => {
        spaceWarGame.createCodeTerms();
        spaceWarGame.startAsteroidSpawner();
        spaceWarGame.bindEvents();
    },
    
    createCodeTerms: () => {
        const container = document.querySelector('.code-terms-background');
        if (!container) return;
        
        container.innerHTML = '';
        
        // Create 15 floating code terms
        for (let i = 0; i < 15; i++) {
            const term = document.createElement('div');
            term.className = 'code-term';
            term.textContent = spaceWarGame.codeTerms[Math.floor(Math.random() * spaceWarGame.codeTerms.length)];
            
            // Random positioning
            term.style.top = `${Math.random() * 90}%`;
            term.style.left = `${Math.random() * 90}%`;
            term.style.fontSize = `${1.2 + Math.random() * 1.8}rem`;
            term.style.animationDelay = `${Math.random() * 8}s`;
            term.style.animationDuration = `${6 + Math.random() * 4}s`;
            
            container.appendChild(term);
        }
    },
      startAsteroidSpawner: () => {
        const container = document.querySelector('.asteroids-container');
        if (!container) return;
        
        const spawnAsteroid = () => {
            const asteroid = document.createElement('div');
            
            // Random asteroid type and color
            const asteroidType = Math.floor(Math.random() * 5) + 1;
            asteroid.className = `asteroid type-${asteroidType}`;
            
            // Random tech logo
            const logoClass = spaceWarGame.techLogos[Math.floor(Math.random() * spaceWarGame.techLogos.length)];
            asteroid.innerHTML = `<i class="${logoClass}"></i>`;
            
            // Random positioning (start from right side)
            asteroid.style.top = `${20 + Math.random() * 60}%`;
            asteroid.style.right = '-100px';
            asteroid.style.animationDuration = `${6 + Math.random() * 4}s`;
            
            container.appendChild(asteroid);
            spaceWarGame.asteroids.push(asteroid);
            
            // Check for explosion in the destruction zone (70% to 30% of screen width)
            setTimeout(() => {
                spaceWarGame.checkExplosion(asteroid);
            }, 1500 + Math.random() * 2000);
            
            // Remove asteroid after animation
            setTimeout(() => {
                if (asteroid.parentNode) {
                    asteroid.parentNode.removeChild(asteroid);
                    const index = spaceWarGame.asteroids.indexOf(asteroid);
                    if (index > -1) spaceWarGame.asteroids.splice(index, 1);
                }
            }, 12000);
        };
        
        // Spawn asteroid every 1.5-3 seconds
        const scheduleNext = () => {
            setTimeout(() => {
                spawnAsteroid();
                scheduleNext();
            }, 1500 + Math.random() * 1500);
        };
        
        scheduleNext();
    },
    
    checkExplosion: (asteroid) => {
        // Random explosion in the destruction zone (between 70% and 30% of screen width)
        const shouldExplode = Math.random() < 0.7; // 70% chance of explosion
        
        if (shouldExplode) {
            const asteroidRect = asteroid.getBoundingClientRect();
            const explosionX = asteroidRect.left + asteroidRect.width / 2;
            const explosionY = asteroidRect.top + asteroidRect.height / 2;
            
            spaceWarGame.createExplosion(explosionX, explosionY);
            
            // Remove asteroid with explosion effect
            if (asteroid.parentNode) {
                asteroid.style.transform += ' scale(0)';
                asteroid.style.opacity = '0';
                setTimeout(() => {
                    if (asteroid.parentNode) {
                        asteroid.parentNode.removeChild(asteroid);
                    }
                }, 300);
            }
        }
    },
      createExplosion: (x, y) => {
        const container = document.querySelector('.explosions-container');
        if (!container) return;
        
        const explosion = document.createElement('div');
        explosion.className = 'explosion';
        explosion.style.left = `${x}px`;
        explosion.style.top = `${y}px`;
        
        // Create 12 particles for more dramatic effect
        for (let i = 0; i < 12; i++) {
            const particle = document.createElement('div');
            particle.className = 'explosion-particle';
            
            const angle = (i / 12) * Math.PI * 2;
            const distance = 25 + Math.random() * 35;
            const deltaX = Math.cos(angle) * distance;
            const deltaY = Math.sin(angle) * distance;
            
            particle.style.left = `${deltaX}px`;
            particle.style.top = `${deltaY}px`;
            particle.style.animationDelay = `${Math.random() * 0.3}s`;
            
            // Random particle colors
            const colors = ['#ff6b6b', '#feca57', '#48dbfb', '#ff9ff3', '#54a0ff'];
            particle.style.background = colors[Math.floor(Math.random() * colors.length)];
            
            explosion.appendChild(particle);
        }
        
        // Create 6-8 code fragments scattered in all directions
        const numCodes = 6 + Math.floor(Math.random() * 3);
        for (let i = 0; i < numCodes; i++) {
            const codeFragment = document.createElement('div');
            codeFragment.className = 'explosion-code';
            codeFragment.textContent = spaceWarGame.codeTerms[Math.floor(Math.random() * spaceWarGame.codeTerms.length)];
            
            const angle = Math.random() * Math.PI * 2;
            const distance = 30 + Math.random() * 50;
            const deltaX = Math.cos(angle) * distance;
            const deltaY = Math.sin(angle) * distance;
            
            codeFragment.style.left = `${deltaX}px`;
            codeFragment.style.top = `${deltaY}px`;
            codeFragment.style.animationDelay = `${Math.random() * 0.4}s`;
            
            // Random code fragment colors
            const codeColors = ['#00ff88', '#ff4757', '#3742fa', '#ffa502', '#ff6348'];
            codeFragment.style.color = codeColors[Math.floor(Math.random() * codeColors.length)];
            codeFragment.style.textShadow = `0 0 5px ${codeColors[Math.floor(Math.random() * codeColors.length)]}`;
            
            explosion.appendChild(codeFragment);
        }
        
        container.appendChild(explosion);
        
        // Remove explosion after animation
        setTimeout(() => {
            if (explosion.parentNode) {
                explosion.parentNode.removeChild(explosion);
            }
        }, 2000);
    },
    
    bindEvents: () => {
        // Add click interaction to spaceship
        const spaceship = document.querySelector('.spaceship');
        if (spaceship) {
            spaceship.addEventListener('click', () => {
                // Trigger laser effect
                spaceship.style.animation = 'spaceshipHover 0.5s ease-in-out, spaceshipShoot 0.3s ease-out';
                setTimeout(() => {
                    spaceship.style.animation = 'spaceshipHover 3s ease-in-out infinite';
                }, 800);
            });
        }
        
        // Responsive updates
        window.addEventListener('resize', () => {
            setTimeout(() => {
                spaceWarGame.createCodeTerms();
            }, 100);
        });
    }
};

// Initialize space war when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        if (document.querySelector('.space-war-background')) {
            spaceWarGame.init();
        }
    }, 1000);
    
    // Ensure Experience Manager is initialized
    setTimeout(() => {
        if (window.ExperienceManager && typeof window.ExperienceManager.init === 'function') {
            console.log('Force initializing Experience Manager from main.js...');
            window.ExperienceManager.init();
        }
    }, 1500);
});

// Additional safety check when window is fully loaded
window.addEventListener('load', () => {
    setTimeout(() => {
        const timeline = document.querySelector('.timeline');
        const experienceSection = document.getElementById('experience');
        
        if (timeline && experienceSection) {
            if (timeline.children.length === 0) {
                console.log('Timeline empty on window load, forcing initialization...');
                if (window.ExperienceManager && typeof window.ExperienceManager.init === 'function') {
                    window.ExperienceManager.init();
                }
            }
        }
    }, 2000);
});

// Export for external use
window.Portfolio = {
    themeManager,
    languageManager,
    navigationManager,
    imageCarousel,
    utils,
    spaceWarGame
};
