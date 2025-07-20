// ===================================
// CERTIFICATES SECTION JAVASCRIPT
// ===================================

class CertificatesManager {
    constructor() {
        this.certificates = {
            software: [
                {
                    id: 'alx-se',
                    title: 'ALX Software Engineering',
                    issuer: 'ALX Africa',
                    date: '2024',
                    image: 'assets/certificate/Certificate_Software/ALXSE_Ahmed Samy{12-07-2024}.png',
                    verifyUrl: 'https://savanna.alxafrica.com/certificates/J5xsZPrBnh',
                    description: 'Comprehensive software engineering program covering full-stack development.'
                },
                {
                    id: 'flutter-advanced',
                    title: 'Flutter Advanced Course - Bloc & MVVM',
                    issuer: 'Udemy',
                    date: '2023',
                    image: 'assets/certificate/Certificate_Software/Flutter_Advanced_Course_Bloc_and_MVVM_Pattern[Arabic][2023].jpg',
                verifyUrl: 'https://www.udemy.com/certificate/UC-c2447616-b95c-45e8-bd31-cc755d6168ed/',
                    description: 'Advanced Flutter development with Bloc pattern and MVVM architecture.'
                },
                {
                    id: 'flutter-complete',
                    title: 'Flutter & Dart - The Complete Guide',
                    issuer: 'Udemy',
                    date: '2023',
                    image: 'assets/certificate/Certificate_Software/Flutter&Dart - The_Complete Guide[2023 Edition].jpg',
                    verifyUrl: 'https://www.udemy.com/certificate/UC-23f461b2-be5a-4496-b7ab-d57b3abc8c99/',
                    description: 'Comprehensive Flutter and Dart development course.'
                },
                {
                    id: 'dart-complete',
                    title: 'The Complete Dart Learning Guide',
                    issuer: 'Udemy',
                    date: '2023',
                    image: 'assets/certificate/Certificate_Software/The_Complete_Dart_Learning_Guide[U].jpg',
                    verifyUrl: 'https://www.udemy.com/certificate/UC-a083acda-2a85-4fea-88bc-ba89607ceb10/',
                    description: 'Complete guide to Dart programming language fundamentals.'
                },
                {
                    id: 'alx-aice',
                    title: 'ALX AiCE Program',
                    issuer: 'ALX Africa',
                    date: '2024',
                    image: 'assets/certificate/Certificate_Software/ALX_AiCE.png',
                    verifyUrl: 'https://savanna.alxafrica.com/certificates/LfPmnrCR69',
                    description: 'Artificial Intelligence Career Essentials program covering AI fundamentals and applications.'
                },
                {
                    id: 'github',
                    title: 'GitHub Fundamentals',
                    issuer: 'GitHub',
                    date: '2023',
                    image: 'assets/certificate/Certificate_Software/GitHub.png',
                    verifyUrl: 'https://drive.google.com/file/d/14_wIKPVaUt5Sv-1LsKY0hp5lYjcN8lRu/view',
                    description: 'Version control and collaboration using Git and GitHub.'
                },
                {
                    id: 'ccna',
                    title: 'CCNA Security',
                    issuer: 'Cisco',
                    date: '2023',
                    image: 'assets/certificate/Certificate_Software/CCNA-CCN_ASeurity.jpg',
                    verifyUrl: 'https://drive.google.com/file/d/1g02D1mIByJrZdwuZ1vy1ThKtgzmbQsTf/view',
                    description: 'Network security fundamentals and Cisco security solutions.'
                },
            ],
            entrepreneurship: [
                {
                    id: 'alx-founder',
                    title: 'ALX Founder Academy',
                    issuer: 'ALX Africa',
                    date: '2024',
                    image: 'assets/certificate/Certificate_Entrepreneurship/ALX_founder-academy.png',
                    verifyUrl: 'https://savanna.alxafrica.com/certificates/97hCST2NRL',
                    description: 'Entrepreneurship and startup fundamentals program.'
                },
                {
                    id: 'alx-professional',
                    title: 'ALX Professional Foundations',
                    issuer: 'ALX Africa',
                    date: '2024',
                    image: 'assets/certificate/Certificate_Entrepreneurship/ALX_professional-foundations.png',
                    verifyUrl: 'https://savanna.alxafrica.com/certificates/zp5sMF86GY',
                    description: 'Professional skills and career development foundations.'
                },
                {
                    id: 'alx-va',
                    title: 'ALX Virtual Assistant',
                    issuer: 'ALX Africa',
                    date: '2024',
                    image: 'assets/certificate/Certificate_Entrepreneurship/ALX_virtual-assistant.png',
                    verifyUrl: 'https://savanna.alxafrica.com/certificates/86HGxsp9Ym',
                    description: 'Virtual assistant skills and remote work fundamentals.'
                },
                {
                    id: 'mckinsey',
                    title: 'McKinsey Forward Program',
                    issuer: 'McKinsey & Company',
                    date: '2023',
                    image: 'assets/certificate/Certificate_Entrepreneurship/mickensy.png',
                    verifyUrl: 'https://www.credly.com/badges/dcbc264a-f4ee-4c26-be74-b8d92c06ce2d',
                    description: 'Leadership and business strategy development program.'
                }
            ],
            other: [
                {
                    id: 'english',
                    title: 'English Language Proficiency',
                    issuer: 'Language Institute',
                    date: '2023',
                    image: 'assets/certificate/Certificate_Other/English.jpg',
                    verifyUrl: 'https://drive.google.com/file/d/1g7mG-xGG4visCx1ty6n29ivOFIVlP8t4/view',
                    description: 'Advanced English language certification.'
                },
                {
                    id: 'figma',
                    title: 'Figma for UX Design',
                    issuer: 'Design Academy',
                    date: '2023',
                    image: 'assets/certificate/Certificate_Other/Figma_for_UX_Design.jpg',
                    verifyUrl: 'https://www.linkedin.com/learning/certificates/0b64992bf1c8bfa40289eb2d2e1a55eeaddfcb473fcc69c6d838b36c2ade9abc',
                    description: 'User experience design using Figma tools and techniques.'
                },
                {
                    id: 'icdl',
                    title: 'ICDL (International Computer Driving License)',
                    issuer: 'ICDL Foundation',
                    date: '2022',
                    image: 'assets/certificate/Certificate_Other/ICDL.jpg',
                    verifyUrl: 'https://drive.google.com/file/d/1gA3xqLExFzUuXPB2-9qsgTHHq6UH2Zq2/view',
                    description: 'International certification for computer skills and digital literacy.'
                },
                {
                    id: 'photoshop',
                    title: 'Adobe Photoshop Certification',
                    issuer: 'Adobe',
                    date: '2023',
                    image: 'assets/certificate/Certificate_Other/Photoshop.jpg',
                    verifyUrl: 'https://drive.google.com/file/d/1g0QPOxFwHqvlhtmSRxtS1TDhTzxaHdAF/view',
                    description: 'Professional image editing and design using Adobe Photoshop.'
                }
            ]
        };

        this.modal = null;
        this.init();
    }    init() {
        this.renderCertificates();
        this.setupIntersectionObserver();
    }

    renderCertificates() {
        // Render Software Certificates
        const softwareContainer = document.getElementById('software-certs');
        if (softwareContainer) {
            softwareContainer.innerHTML = this.createCategoryHTML(this.certificates.software, 'Software Development');
        }

        // Render Entrepreneurship Certificates
        const entrepreneurshipContainer = document.getElementById('entrepreneurship-certs');
        if (entrepreneurshipContainer) {
            entrepreneurshipContainer.innerHTML = this.createCategoryHTML(this.certificates.entrepreneurship, 'Entrepreneurship');
        }

        // Render Other Certificates
        const otherContainer = document.getElementById('other-certs');
        if (otherContainer) {
            otherContainer.innerHTML = this.createCategoryHTML(this.certificates.other, 'Other Skills');
        }
    }

    createCategoryHTML(certificates, categoryName) {
        return `
            <div class="category-header">
                <div class="category-icon">
                    ${this.getCategoryIcon(categoryName)}
                </div>
                <div class="category-info">
                    <h3>${categoryName}</h3>
                    <p class="category-count">${certificates.length} Certificates</p>
                </div>
            </div>
            <div class="certificates-grid">
                ${certificates.map(cert => this.createCertificateCard(cert)).join('')}
            </div>
        `;
    }

    getCategoryIcon(categoryName) {
        const icons = {
            'Software Development': '💻',
            'Entrepreneurship': '🚀',
            'Other Skills': '🎯'
        };
        return icons[categoryName] || '📜';
    }    createCertificateCard(certificate) {
        return `
            <div class="certificate-item" data-certificate-id="${certificate.id}">
                <img src="${certificate.image}" alt="${certificate.title}" class="certificate-image" loading="lazy" onerror="this.src='assets/placeholder-image.png'">
                <div class="certificate-info">
                    <h4>${certificate.title}</h4>
                    <p class="certificate-issuer">${certificate.issuer}</p>
                    <p class="certificate-date">${certificate.date}</p>
                    <div class="certificate-actions">
                        <a href="${certificate.verifyUrl}" 
                           class="cert-btn verify-btn full-width" 
                           target="_blank" 
                           rel="noopener noreferrer" 
                           aria-label="Verify ${certificate.title} certificate">
                            <i class="fas fa-check-circle"></i> Verify
                        </a>
                    </div>
                </div>
            </div>
        `;
    }    // Modal and view functionality removed as per request

    findCertificateById(id) {
        for (const category in this.certificates) {
            const cert = this.certificates[category].find(c => c.id === id);
            if (cert) return cert;
        }
        return null;    }
    
    setupIntersectionObserver() {
        if ('IntersectionObserver' in window) {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        // Animation removed as per request
                        observer.disconnect();
                    }
                });
            }, { threshold: 0.3 });

            const certificatesSection = document.querySelector('.certificates');
            if (certificatesSection) {
                observer.observe(certificatesSection);
            }
        }
    }

    // Utility methods
    getTotalCertificatesCount() {
        return Object.values(this.certificates).reduce((total, category) => total + category.length, 0);
    }    getLatestCertificationYear() {
        let latestYear = 0;
        Object.values(this.certificates).forEach(category => {
            category.forEach(cert => {
                const year = parseInt(cert.date);
                if (!isNaN(year) && year > latestYear) latestYear = year;
            });
        });
        return latestYear;
    }

    getCertificatesByCategory(category) {
        return this.certificates[category] || [];
    }

    getCertificatesByIssuer(issuer) {
        const results = [];
        Object.values(this.certificates).forEach(category => {
            category.forEach(cert => {
                if (cert.issuer.toLowerCase().includes(issuer.toLowerCase())) {
                    results.push(cert);
                }
            });
        });
        return results;
    }

    searchCertificates(query) {
        const results = [];
        const searchTerm = query.toLowerCase();
        
        Object.values(this.certificates).forEach(category => {
            category.forEach(cert => {
                if (cert.title.toLowerCase().includes(searchTerm) ||
                    cert.issuer.toLowerCase().includes(searchTerm) ||
                    cert.description.toLowerCase().includes(searchTerm)) {
                    results.push(cert);
                }
            });
        });
        return results;
    }
}

// Initialize Certificates Manager when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Initialize only if certificates section exists
    if (document.querySelector('.certificates')) {
        window.certificatesManager = new CertificatesManager();
    }
});

// Export for module usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CertificatesManager;
}
