// ===================================
// SKILLS SECTION JAVASCRIPT
// ===================================

class SkillsManager {
    constructor() {
        this.skillsData = {
            technical: [
                { name: 'Flutter & Dart', level: 95, category: 'mobile' },
                { name: 'Firebase', level: 90, category: 'backend' },
                { name: 'REST API Integration', level: 88, category: 'backend' },
                { name: 'State Management (Bloc/Cubit)', level: 92, category: 'mobile' },
                { name: 'Clean Architecture', level: 85, category: 'architecture' },
                { name: 'MVVM Pattern', level: 88, category: 'architecture' },
                { name: 'Git & Version Control', level: 90, category: 'tools' },
                { name: 'SQLite & Hive', level: 82, category: 'database' }
            ],
            soft: [
                { name: 'Problem Solving', level: 95 },
                { name: 'Team Collaboration', level: 88 },
                { name: 'Communication', level: 85 },
                { name: 'Project Management', level: 80 },
                { name: 'Time Management', level: 90 },
                { name: 'Leadership', level: 78 }
            ],
            tools: [
                { name: 'Android Studio', level: 90 },
                { name: 'VS Code', level: 95 },
                { name: 'Figma', level: 75 },
                { name: 'Swagger', level: 70 },
                { name: 'Postman', level: 85 },
                { name: 'GitHub', level: 88 },
            ],
            design: [
                { name: 'UI/UX Design', level: 78 },
                { name: 'Material Design', level: 85 },
                { name: 'Responsive Design', level: 82 },
                { name: 'Color Theory', level: 75 },
                { name: 'Typography', level: 70 },
                { name: 'Wireframing', level: 80 }
            ]
        };

        this.competencies = [
            {
                icon: '📱',
                title: 'Mobile Development',
                description: 'Expert in Flutter development with 3+ years of experience building cross-platform mobile applications.'
            },
            {
                icon: '🏗️',
                title: 'Clean Architecture',
                description: 'Proficient in implementing clean architecture patterns and SOLID principles for maintainable code.'
            },
            {
                icon: '🔥',
                title: 'Firebase Integration',
                description: 'Experienced in Firebase services including Authentication, Firestore, Cloud Functions, and Storage.'
            },
            {
                icon: '⚡',
                title: 'State Management',
                description: 'Advanced skills in Bloc/Cubit pattern and other state management solutions for Flutter apps.'
            },
            {
                icon: '🎨',
                title: 'UI/UX Design',
                description: 'Strong design skills with ability to create beautiful and intuitive user interfaces.'
            },
            {
                icon: '🔧',
                title: 'Performance Optimization',
                description: 'Expert in optimizing app performance, reducing build size, and improving user experience.'
            }
        ];

        this.init();
    }

    init() {
        this.setupIntersectionObserver();
        this.renderSkills();
        this.renderCompetencies();
    }    setupIntersectionObserver() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    this.animateCounters();
                }
            });
        }, { threshold: 0.3 });

        const skillsSection = document.querySelector('.skills');
        if (skillsSection) {
            observer.observe(skillsSection);
        }
    }

    renderSkills() {
        this.renderSkillCategory('tech-skills', this.skillsData.technical, 'Technical Skills', '💻');
        this.renderSkillCategory('soft-skills', this.skillsData.soft, 'Soft Skills', '🧠');
        this.renderSkillCategory('tools-skills', this.skillsData.tools, 'Tools & Software', '🛠️');
        this.renderSkillCategory('design-skills', this.skillsData.design, 'Design Skills', '🎨');
    }

    renderSkillCategory(containerId, skills, title, icon) {
        const container = document.getElementById(containerId);
        if (!container) return;

        container.innerHTML = `
            <div class="category-header">
                <div class="category-icon">${icon}</div>
                <div class="category-info">
                    <h3 class="category-title">${title}</h3>
                    <p class="category-count">${skills.length} Skills</p>
                </div>
            </div>
            <ul class="skills-list">
                ${skills.map(skill => this.createSkillItem(skill)).join('')}
            </ul>
        `;
    }    createSkillItem(skill) {
        return `
            <li class="skill-item">
                <div class="skill-header">
                    <span class="skill-name">${skill.name}</span>
                </div>
            </li>
        `;
    }

    renderCompetencies() {
        const container = document.querySelector('.competencies-grid');
        if (!container) return;

        container.innerHTML = this.competencies.map(competency => `
            <div class="competency-card">
                <div class="competency-icon">${competency.icon}</div>
                <h3 class="competency-title">${competency.title}</h3>
                <p class="competency-description">${competency.description}</p>
            </div>
        `).join('');
    }    // Skill bars animation removed

    animateCounters() {
        const counters = document.querySelectorAll('.stat-number');
        counters.forEach(counter => {
            const target = parseInt(counter.getAttribute('data-count') || counter.textContent);
            const duration = 2000;
            const increment = target / (duration / 16);
            let current = 0;

            const timer = setInterval(() => {
                current += increment;
                if (current >= target) {
                    current = target;
                    clearInterval(timer);
                }
                counter.textContent = Math.floor(current);
            }, 16);
        });
    }

    // Public methods for external use
    getSkillsByCategory(category) {
        return this.skillsData[category] || [];
    }

    getSkillLevel(skillName) {
        for (const category in this.skillsData) {
            const skill = this.skillsData[category].find(s => s.name.toLowerCase() === skillName.toLowerCase());
            if (skill) return skill.level;
        }
        return 0;
    }

    addSkill(category, skill) {
        if (this.skillsData[category]) {
            this.skillsData[category].push(skill);
            this.renderSkills();
        }
    }

    updateSkillLevel(skillName, newLevel) {
        for (const category in this.skillsData) {
            const skillIndex = this.skillsData[category].findIndex(s => s.name.toLowerCase() === skillName.toLowerCase());
            if (skillIndex !== -1) {
                this.skillsData[category][skillIndex].level = newLevel;
                this.renderSkills();
                return true;
            }
        }
        return false;
    }
}

// Initialize Skills Manager when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Initialize only if skills section exists
    if (document.querySelector('.skills')) {
        window.skillsManager = new SkillsManager();
    }
});

// Export for module usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = SkillsManager;
}
