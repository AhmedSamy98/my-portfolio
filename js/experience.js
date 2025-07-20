// Experience Section JavaScript - Completely Fixed Version
// This version ensures timeline loads on first page load and handles all language switches correctly

console.log('🚀 Loading Experience Manager - Completely Fixed Version');

// DEBUG: Check if translations are available immediately
console.log('🔍 Initial translation check:');
console.log('🇺🇸 English translations available:', !!window.translations_en);
console.log('🇸🇦 Arabic translations available:', !!window.translations_ar);
if (window.translations_en) {
    console.log('📊 English experience data length:', window.translations_en.experienceData?.length || 0);
    if (window.translations_en.experienceData?.length > 0) {
        console.log('🏢 First English company:', window.translations_en.experienceData[0].company);
    }
}
if (window.translations_ar) {
    console.log('📊 Arabic experience data length:', window.translations_ar.experienceData?.length || 0);
    if (window.translations_ar.experienceData?.length > 0) {
        console.log('🏢 First Arabic company:', window.translations_ar.experienceData[0].company);
    }
}

// Global configuration for experience manager
const EXPERIENCE_CONFIG = {
    DEBUG: true,
    RETRY_ATTEMPTS: 3,
    RETRY_DELAY: 100,
    FORCE_ENGLISH_FALLBACK: false  // Disabled to fix language switching issue
};

// CRITICAL: Ensure English is always the fallback if no language is set
(function() {
    if (!window.currentLanguage && !localStorage.getItem('language')) {
        console.log('🚨 Experience Manager: No language detected, setting English as default');
        window.currentLanguage = 'en';
        localStorage.setItem('language', 'en');
    }
})();

// Fixed function to get experience data with proper language handling
function getExperienceData() {
    if (EXPERIENCE_CONFIG.DEBUG) {
        console.log('=== 🔍 Getting experience data ===');
    }
    
    // Get current language with proper fallback
    let lang = window.currentLanguage || localStorage.getItem('language') || 'en';
    
    // Validate language code
    const supportedLanguages = ['en', 'ar', 'fr', 'de', 'es', 'ja', 'ko'];
    if (!supportedLanguages.includes(lang)) {
        console.warn(`⚠️ Unsupported language: ${lang}, falling back to English`);
        lang = 'en';
    }
    
    if (EXPERIENCE_CONFIG.DEBUG) {
        console.log(`📍 Target language: ${lang}`);
        console.log(`🌍 window.currentLanguage: ${window.currentLanguage}`);
        console.log(`💾 localStorage language: ${localStorage.getItem('language')}`);
        
        // DEBUG: Check all available translation objects
        console.log('🔍 Available translation objects in window:');
        Object.keys(window).filter(key => key.startsWith('translations_')).forEach(key => {
            console.log(`   ${key}: ${!!window[key]} (has experienceData: ${!!window[key]?.experienceData})`);
            if (window[key]?.experienceData) {
                console.log(`      -> ${window[key].experienceData.length} items`);
            }
        });
    }
    
    // Get translations for the current language
    const translationsKey = `translations_${lang}`;
    console.log(`🔍 Looking for translation key: ${translationsKey}`);
    
    // DEBUG: More detailed checking
    console.log(`🔍 window[${translationsKey}] exists:`, !!window[translationsKey]);
    console.log(`🔍 window[${translationsKey}]?.experienceData exists:`, !!window[translationsKey]?.experienceData);
    console.log(`🔍 window[${translationsKey}]?.experienceData length:`, window[translationsKey]?.experienceData?.length || 0);
    
    // Always try to get the correct language data first
    if (window[translationsKey] && window[translationsKey].experienceData) {
        const data = window[translationsKey].experienceData;
        if (data && data.length > 0) {
            if (EXPERIENCE_CONFIG.DEBUG) {
                console.log(`✅ Successfully found ${data.length} items for ${lang}`);
                console.log(`🏢 First item company: ${data[0]?.company || 'N/A'}`);
            }
            return data;
        } else {
            console.warn(`⚠️ ${translationsKey}.experienceData exists but is empty or invalid`);
        }
    } else {
        console.warn(`⚠️ ${translationsKey} or ${translationsKey}.experienceData does not exist`);
    }
    
    // Only fallback to English if the requested language doesn't have data
    if (lang !== 'en') {
        console.log(`⚠️ ${lang} experience data not found, using English fallback...`);
        console.log(`🔍 Checking English fallback: window.translations_en exists:`, !!window.translations_en);
        console.log(`🔍 Checking English fallback: experienceData exists:`, !!window.translations_en?.experienceData);
        console.log(`🔍 Checking English fallback: experienceData length:`, window.translations_en?.experienceData?.length || 0);
        
        if (window.translations_en && window.translations_en.experienceData && window.translations_en.experienceData.length > 0) {
            console.log(`✅ Using English fallback with ${window.translations_en.experienceData.length} items`);
            return window.translations_en.experienceData;
        } else {
            console.error(`❌ English fallback also failed!`);
        }
    } else {
        console.error(`❌ No English experience data available!`);
        console.log(`🔍 Final check - window.translations_en:`, window.translations_en);
        console.log(`🔍 Final check - window.translations_en?.experienceData:`, window.translations_en?.experienceData);
    }
    
    console.error('❌ No experience data available!');
    return [];
}

// Completely Rewritten Experience Manager - More Robust and Reliable
const ExperienceManager = {
    isReady: false,
    isInitialized: false,
    currentData: null,
    renderAttempts: 0,
    maxRenderAttempts: 3,
    
    // Initialize the manager
    init() {
        if (this.isInitialized) {
            console.log('⚠️ ExperienceManager already initialized');
            return;
        }
        
        console.log('🚀 ExperienceManager: Initializing...');
        this.isReady = true;
        this.isInitialized = true;
        
        // Force render immediately
        this.forceRender();
    },
    
    // Force render with retry logic
    forceRender() {
        console.log('💪 ExperienceManager: Force rendering...');
        
        const timeline = document.querySelector('.timeline');
        if (!timeline) {
            console.error('❌ Timeline container not found');
            return false;
        }
        
        // Debug current language state
        const currentLang = window.currentLanguage || localStorage.getItem('language') || 'en';
        console.log(`🌍 Current language for experience render: ${currentLang}`);
        console.log(`📊 Available translation keys: ${Object.keys(window).filter(k => k.startsWith('translations_')).join(', ')}`);
        
        // Get fresh data
        const data = getExperienceData();
        console.log(`📊 Retrieved ${data.length} experience items`);
        
        if (!data || data.length === 0) {
            console.error('❌ No experience data to render');
            
            // Show error message in timeline
            timeline.innerHTML = `
                <div class="timeline-error" style="text-align: center; padding: 40px; color: #ff6b6b;">
                    <i class="fas fa-exclamation-triangle" style="font-size: 2em; margin-bottom: 10px;"></i>
                    <p>Experience data could not be loaded.</p>
                    <p><small>Please refresh the page or try switching languages.</small></p>
                </div>
            `;
            return false;
        }
        
        // Debug first item to verify language
        if (data[0]) {
            console.log(`🏢 First experience item check:`);
            console.log(`   Company: ${data[0].company}`);
            console.log(`   Position: ${data[0].position}`);
            console.log(`   Duration: ${data[0].duration}`);
        }
        
        // Store current data
        this.currentData = data;
        this.renderAttempts++;
        
        // Clear timeline completely
        timeline.innerHTML = '';
        
        // Create document fragment for better performance
        const fragment = document.createDocumentFragment();
        
        // Add each experience item
        data.forEach((exp, index) => {
            const item = this.createItem(exp, index);
            fragment.appendChild(item);
        });
        
        // Add all items at once
        timeline.appendChild(fragment);
        
        console.log(`✅ Successfully rendered ${data.length} experience items (attempt ${this.renderAttempts})`);
        
        // Force visibility and styling
        this.forceTimelineVisibility(timeline);
        
        // Setup animations
        this.setupAnimations();
        
        return true;
    },
    
    // Force timeline visibility
    forceTimelineVisibility(timeline) {
        if (!timeline) return;
        
        // Remove any hiding classes
        timeline.classList.remove('hidden', 'loading');
        
        // Force inline styles to ensure visibility
        timeline.style.display = 'block';
        timeline.style.visibility = 'visible';
        timeline.style.opacity = '1';
        timeline.style.minHeight = '200px';
        
        // Add loaded class for CSS animations
        timeline.classList.add('timeline-loaded', 'timeline-visible');
        
        console.log('👁️ Forced timeline visibility');
    },
    
    // Standard render method
    render() {
        console.log('🎯 ExperienceManager: Standard render...');
        return this.forceRender();
    },

    createItem(experience, index) {
        const item = document.createElement('div');
        item.className = 'timeline-item animate-on-scroll';
        item.style.animationDelay = `${index * 0.2}s`;
        
        // Get current language for UI labels with improved fallback
        const lang = window.currentLanguage || localStorage.getItem('language') || 'en';
        console.log(`Creating item with language: ${lang}`);
        
        const translationsKey = `translations_${lang}`;
        let translations = window[translationsKey] || {};
        
        // Fallback to English if current language translations not available
        if (!translations.experience && window.translations_en) {
            console.log(`No experience translations for ${lang}, using English`);
            translations = window.translations_en;
        }
        
        const achievements = translations.experience?.achievements || 'Key Achievements:';
        const technologies = translations.experience?.technologies || 'Technologies:';
        
        // Create HTML content
        const achievementBadge = experience.achievement ? 
            `<div class="achievement-badge">${experience.achievement}</div>` : '';
            
        const techTags = (experience.technologies || [])
            .map(tech => `<span class="tech-tag">${tech}</span>`)
            .join('');
            
        const highlights = (experience.highlights || [])
            .map(highlight => `<li>${highlight}</li>`)
            .join('');
            
        const links = (experience.links || [])
            .map(link => {
                if (!link.url || !link.label) return '';
                const iconClass = this.getIcon(link.type);
                return `<a href="${link.url}" target="_blank" class="project-link">
                    <i class="${iconClass}"></i> ${link.label}
                </a>`;
            })
            .join('');
        
        item.innerHTML = `
            <div class="timeline-dot"></div>
            <div class="timeline-content">
                ${achievementBadge}
                <div class="experience-header">
                    <div class="experience-title">
                        <h3 class="experience-company">${experience.company || ''}</h3>
                        <h4 class="experience-position">${experience.position || ''}</h4>
                    </div>
                    <div class="experience-duration">${experience.duration || ''}</div>
                </div>
                
                <p class="experience-description">${experience.description || ''}</p>
                
                ${highlights ? `
                <div class="experience-highlights">
                    <h4>${achievements}</h4>
                    <ul class="highlights-list">${highlights}</ul>
                </div>
                ` : ''}
                
                ${techTags ? `
                <div class="tech-stack">
                    <span class="tech-stack-label">${technologies}</span>
                    ${techTags}
                </div>
                ` : ''}
                
                ${links ? `<div class="project-links">${links}</div>` : ''}
            </div>
        `;
        
        if (experience.current) {
            item.classList.add('current');
        }
        
        return item;
    },
    
    getIcon(type) {
        const icons = {
            'playstore': 'fab fa-google-play',
            'appstore': 'fab fa-app-store-ios',
            'github': 'fab fa-github',
            'youtube': 'fab fa-youtube',
            'website': 'fas fa-external-link-alt'
        };
        return icons[type] || 'fas fa-link';
    },
    
    // Simplified and more reliable language update method
    updateLanguage() {
        console.log('🌐 ExperienceManager: Language change detected');
        
        const targetLang = window.currentLanguage || localStorage.getItem('language') || 'en';
        console.log(`🎯 Target language: ${targetLang}`);
        
        // Clear current data to force refresh
        this.currentData = null;
        
        // Small delay to ensure language variables are set properly
        setTimeout(() => {
            console.log('🔄 Executing experience data update for new language...');
            this.forceRender();
        }, 100);
    },
    
    // Setup scroll animations
    setupAnimations() {
        const items = document.querySelectorAll('.timeline-item.animate-on-scroll');
        
        if (this.observer) {
            this.observer.disconnect();
        }
        
        this.observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate');
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });
        
        items.forEach(item => this.observer.observe(item));
    }
};

// =====================================================================
// ROBUST INITIALIZATION STRATEGIES - Multiple Approaches for Maximum Reliability
// =====================================================================

// Strategy 1: Enhanced DOM Content Loaded with better translation checking
document.addEventListener('DOMContentLoaded', function() {
    console.log('📄 DOM loaded - starting experience manager initialization...');
    
    function checkTranslationsAndInit() {
        console.log('🔍 Checking for translations...');
        
        const availableTranslations = Object.keys(window).filter(key => key.startsWith('translations_'));
        console.log(`📚 Found translations: ${availableTranslations.join(', ')}`);
        
        // DETAILED check for English translations
        console.log('🔍 Detailed English translation check:');
        console.log('   - window.translations_en exists:', !!window.translations_en);
        console.log('   - experienceData exists:', !!window.translations_en?.experienceData);
        console.log('   - experienceData is array:', Array.isArray(window.translations_en?.experienceData));
        console.log('   - experienceData length:', window.translations_en?.experienceData?.length || 0);
        
        if (window.translations_en?.experienceData?.length > 0) {
            console.log('   - First item company:', window.translations_en.experienceData[0]?.company);
            console.log('   - First item position:', window.translations_en.experienceData[0]?.position);
        }
        
        // CRITICAL: Check for at least English translations FIRST
        if (window.translations_en?.experienceData?.length > 0) {
            console.log('✅ English translations loaded with experience data, initializing...');
            
            // Ensure language is set to English by default on first load
            if (!window.currentLanguage && !localStorage.getItem('language')) {
                console.log('🚨 First visit detected - setting English as default');
                window.currentLanguage = 'en';
                localStorage.setItem('language', 'en');
            } else if (!window.currentLanguage) {
                // Ensure global variable is set from localStorage
                window.currentLanguage = localStorage.getItem('language') || 'en';
                console.log(`🌍 Set language from localStorage: ${window.currentLanguage}`);
            }
            
            ExperienceManager.init();
            return true;
        }
        
        console.log('⏳ English translations not ready yet...');
        return false;
    }
    
    // Add additional delay to ensure all translation files are loaded
    setTimeout(() => {
        console.log('🔄 Additional delay check for translations...');
        
        // Try immediate initialization
        if (!checkTranslationsAndInit()) {
            let attempts = 0;
            const maxAttempts = 30; // Increased max attempts
            
            const checkInterval = setInterval(() => {
                attempts++;
                console.log(`🔄 Attempt ${attempts}: Waiting for translations...`);
                
                if (checkTranslationsAndInit() || attempts >= maxAttempts) {
                    clearInterval(checkInterval);
                    if (attempts >= maxAttempts) {
                        console.error('❌ Failed to load translations after maximum attempts');
                        // Force initialization anyway with whatever data is available but prefer English
                        if (!window.currentLanguage) {
                            window.currentLanguage = 'en';
                            localStorage.setItem('language', 'en');
                        }
                        
                        // EMERGENCY: Force create mock data if nothing is available
                        if (!window.translations_en?.experienceData) {
                            console.warn('🆘 EMERGENCY: Creating fallback data');
                            if (!window.translations_en) window.translations_en = {};
                            window.translations_en.experienceData = [{
                                id: 'emergency',
                                company: 'Loading...',
                                position: 'Experience data loading...',
                                duration: 'Please wait',
                                description: 'Experience data is being loaded. Please refresh if this persists.',
                                highlights: [],
                                technologies: []
                            }];
                        }
                        
                        ExperienceManager.init();
                    }
                }
            }, 100); // Check more frequently
        }
    }, 500); // Wait 500ms before starting to allow translation files to load
});

// Strategy 2: Enhanced Language change listener
document.addEventListener('languageChanged', function(event) {
    console.log('🌐 === Language change event received ===');
    console.log('📝 Event detail:', event.detail);
    console.log(`🎯 window.currentLanguage: ${window.currentLanguage}`);
    console.log(`💾 localStorage language: ${localStorage.getItem('language')}`);
    
    // Ensure ExperienceManager is initialized
    if (!ExperienceManager.isInitialized) {
        console.log('⚠️ ExperienceManager not initialized, initializing now...');
        ExperienceManager.init();
    } else {
        // Update language with slight delay for language variable propagation
        setTimeout(() => {
            console.log('🔄 Executing language change update...');
            ExperienceManager.updateLanguage();
        }, 100);
    }
});

// Strategy 3: Window load fallback
window.addEventListener('load', function() {
    setTimeout(() => {
        if (!ExperienceManager.isInitialized) {
            console.log('🔄 Window loaded but ExperienceManager not initialized - forcing initialization...');
            ExperienceManager.init();
        }
    }, 500);
});

// Strategy 4: Visibility observer for when section becomes visible
document.addEventListener('DOMContentLoaded', function() {
    const experienceSection = document.getElementById('experience');
    if (!experienceSection) {
        console.warn('⚠️ Experience section not found');
        return;
    }
    
    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                console.log('👁️ Experience section became visible');
                
                const timeline = document.querySelector('.timeline');
                if (timeline && timeline.children.length === 0) {
                    console.log('⚠️ Experience section visible but timeline empty - forcing render...');
                    
                    if (!ExperienceManager.isInitialized) {
                        ExperienceManager.init();
                    } else {
                        setTimeout(() => {
                            ExperienceManager.forceRender();
                        }, 100);
                    }
                }
                
                // Keep observing in case timeline gets cleared
            }
        });
    }, { threshold: 0.1 });
    
    sectionObserver.observe(experienceSection);
});

// Strategy 5: Periodic check and emergency fallback
setTimeout(() => {
    const timeline = document.querySelector('.timeline');
    if (timeline && timeline.children.length === 0) {
        console.warn('🆘 EMERGENCY: Timeline still empty after 3 seconds');
        
        // Force initialization if not done
        if (!ExperienceManager.isInitialized) {
            console.log('🚨 Emergency initialization...');
            
            // Set fallback language to English if none set
            if (!window.currentLanguage) {
                console.log('🚨 Emergency: Setting language to English');
                window.currentLanguage = 'en';
                localStorage.setItem('language', 'en');
            }
            
            ExperienceManager.init();
        } else {
            console.log('🚨 Emergency render...');
            ExperienceManager.forceRender();
        }
    }
}, 3000);

// Strategy 6: Mutation observer on body for dynamically loaded content
document.addEventListener('DOMContentLoaded', function() {
    const bodyObserver = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
            if (mutation.type === 'childList') {
                const timeline = document.querySelector('.timeline');
                if (timeline && timeline.children.length === 0 && ExperienceManager.isInitialized) {
                    console.log('🔄 Timeline detected as empty, attempting render...');
                    setTimeout(() => {
                        ExperienceManager.forceRender();
                    }, 100);
                }
            }
        });
    });
    
    bodyObserver.observe(document.body, { 
        childList: true, 
        subtree: true 
    });
});

// DIAGNOSTIC FUNCTION - For debugging only
function diagnoseProblem() {
    console.log('🔍 === DIAGNOSTIC REPORT ===');
    console.log('Current timestamp:', new Date().toISOString());
    
    // Check window object
    console.log('🌍 Window object checks:');
    console.log('  - window.currentLanguage:', window.currentLanguage);
    console.log('  - localStorage.language:', localStorage.getItem('language'));
    
    // Check all translations
    console.log('📚 Translation objects:');
    Object.keys(window).filter(key => key.startsWith('translations_')).forEach(key => {
        const obj = window[key];
        console.log(`  - ${key}:`, {
            exists: !!obj,
            hasExperienceData: !!obj?.experienceData,
            experienceDataLength: obj?.experienceData?.length || 0,
            type: typeof obj,
            isArray: Array.isArray(obj?.experienceData)
        });
        
        if (obj?.experienceData?.length > 0) {
            console.log(`    -> First item:`, {
                company: obj.experienceData[0]?.company,
                position: obj.experienceData[0]?.position,
                duration: obj.experienceData[0]?.duration
            });
        }
    });
    
    // Check document state
    console.log('📄 Document state:');
    console.log('  - readyState:', document.readyState);
    console.log('  - timeline element:', !!document.querySelector('.timeline'));
    
    // Check ExperienceManager state
    console.log('⚙️ ExperienceManager state:');
    console.log('  - isInitialized:', ExperienceManager.isInitialized);
    console.log('  - isReady:', ExperienceManager.isReady);
    console.log('  - currentData:', ExperienceManager.currentData?.length || 0);
    
    console.log('🔍 === END DIAGNOSTIC REPORT ===');
}

// Call diagnostic function after a delay
setTimeout(() => {
    diagnoseProblem();
}, 2000);

// Export for external access
window.ExperienceManager = ExperienceManager;
window.getExperienceData = getExperienceData;

// MANUAL TESTING FUNCTIONS - Can be called from browser console
window.testExperienceData = function() {
    console.log('🧪 === MANUAL TEST ===');
    const data = getExperienceData();
    console.log('Retrieved data:', data);
    console.log('Data length:', data.length);
    if (data.length > 0) {
        console.log('First item:', data[0]);
    }
    return data;
};

window.forceExperienceRender = function() {
    console.log('🔧 === FORCE RENDER ===');
    return ExperienceManager.forceRender();
};

window.diagnose = diagnoseProblem;

console.log('🔧 Manual testing functions available:');
console.log('  - window.testExperienceData()');
console.log('  - window.forceExperienceRender()');
console.log('  - window.diagnose()');

console.log('✅ Experience Manager (Completely Fixed Version) loaded successfully');

// Final check after script load
setTimeout(() => {
    if (!ExperienceManager.isInitialized) {
        console.log('🔄 Final fallback initialization...');
        
        // Ensure English is set as default if no language is configured
        if (!window.currentLanguage && !localStorage.getItem('language')) {
            console.log('🚨 Final check: No language set, forcing English');
            window.currentLanguage = 'en';
            localStorage.setItem('language', 'en');
        }
        
        ExperienceManager.init();
    }
}, 1000);

// Extra safety net - listen for when experience section becomes visible
document.addEventListener('DOMContentLoaded', function() {
    // Check if timeline is empty after a delay and force English if needed
    setTimeout(() => {
        const timeline = document.querySelector('.timeline');
        if (timeline && timeline.children.length === 0) {
            console.log('🔍 Timeline empty after delay, checking language setup...');
            
            // If no language is set, force English
            if (!window.currentLanguage || !localStorage.getItem('language')) {
                console.log('🚨 No language detected, forcing English as default');
                window.currentLanguage = 'en';
                localStorage.setItem('language', 'en');
                
                // Trigger experience manager
                if (ExperienceManager.isInitialized) {
                    ExperienceManager.forceRender();
                } else {
                    ExperienceManager.init();
                }
            }
        }
    }, 2000);
});

// Additional safety measures for timeline visibility and language handling
document.addEventListener('DOMContentLoaded', function() {
    // Force timeline visibility after all scripts load
    setTimeout(() => {
        const timeline = document.querySelector('.timeline');
        if (timeline) {
            // Ensure timeline and its line are visible
            timeline.style.opacity = '1';
            timeline.style.visibility = 'visible';
            timeline.style.display = 'block';
            
            // Force the timeline line (::before pseudo-element) to be visible
            timeline.classList.add('timeline-loaded');
            
            console.log('✅ Timeline visibility forced');
        }
    }, 1000);
    
    // Listen for language changes and ensure proper experience data loading
    document.addEventListener('languageChanged', function(event) {
        console.log('🌐 Language changed, ensuring timeline visibility and data refresh');
        
        setTimeout(() => {
            const timeline = document.querySelector('.timeline');
            if (timeline) {
                timeline.style.opacity = '1';
                timeline.style.visibility = 'visible';
                timeline.style.display = 'block';
                timeline.classList.add('timeline-loaded');
            }
        }, 200);
    });
});

console.log('✅ Timeline safety measures loaded');
