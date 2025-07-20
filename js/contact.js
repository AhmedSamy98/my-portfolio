// ===================================
// CONTACT SECTION JAVASCRIPT
// ===================================

class ContactManager {
    constructor() {
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.renderContactInfo();
        this.setupSocialLinks();
    }

    setupEventListeners() {
        // Copy email functionality
        const emailElements = document.querySelectorAll('[data-copy="email"]');
        emailElements.forEach(element => {
            element.addEventListener('click', () => this.copyToClipboard('ahmed1samy1998@gmail.com', 'Email'));
        });

        // Copy phone functionality
        const phoneElements = document.querySelectorAll('[data-copy="phone"]');
        phoneElements.forEach(element => {
            element.addEventListener('click', () => this.copyToClipboard('+201005538792', 'Phone'));
        });
    }

    renderContactInfo() {
        const contactInfo = {
            email: 'ahmed1samy1998@gmail.com',
            phone: '+201005538792',
            location: 'Cairo, Egypt',
            availability: 'Available for freelance projects or full/part-time remote work'
        };

        // Update contact items if they exist
        const emailElement = document.querySelector('[data-contact="email"]');
        if (emailElement) emailElement.textContent = contactInfo.email;

        const phoneElement = document.querySelector('[data-contact="phone"]');
        if (phoneElement) phoneElement.textContent = contactInfo.phone;

        const locationElement = document.querySelector('[data-contact="location"]');
        if (locationElement) locationElement.textContent = contactInfo.location;

        const availabilityElement = document.querySelector('[data-contact="availability"]');
        if (availabilityElement) availabilityElement.textContent = contactInfo.availability;
    }

    setupSocialLinks() {
        const socialLinks = {
            linkedin: 'https://www.linkedin.com/in/ahmed-samy98',
            github: 'https://github.com/AhmedSamy98',
            twitter: 'https://x.com/AhmedSamy_98',
            telegram: 'http://t.me/AhmedSamy_98',
            whatsapp: 'https://wa.me/201005538792'
        };

        // Update social links
        Object.entries(socialLinks).forEach(([platform, url]) => {
            const link = document.querySelector(`[data-social="${platform}"]`);
            if (link) {
                link.href = url;
                link.setAttribute('target', '_blank');
                link.setAttribute('rel', 'noopener noreferrer');
            }
        });
    }

    showNotification(message, type = 'info') {
        // Create notification element
        const notification = document.createElement('div');
        notification.className = `notification ${type}`;
        notification.innerHTML = `
            <div class="notification-header">
                <span class="notification-title">${this.getNotificationTitle(type)}</span>
                <button class="notification-close" onclick="this.parentElement.parentElement.remove()">×</button>
            </div>
            <div class="notification-message">${message}</div>
        `;

        // Add to page
        document.body.appendChild(notification);

        // Show notification
        setTimeout(() => notification.classList.add('show'), 100);

        // Auto remove after 5 seconds
        setTimeout(() => {
            notification.classList.remove('show');
            setTimeout(() => notification.remove(), 300);
        }, 5000);
    }

    getNotificationTitle(type) {
        const titles = {
            success: 'Success',
            error: 'Error',
            warning: 'Warning',
            info: 'Info'
        };
        return titles[type] || 'Notification';
    }

    async copyToClipboard(text, label) {
        try {
            await navigator.clipboard.writeText(text);
            this.showNotification(`${label} copied to clipboard!`, 'success');
        } catch (err) {
            // Fallback for older browsers
            const textArea = document.createElement('textarea');
            textArea.value = text;
            document.body.appendChild(textArea);
            textArea.select();
            document.execCommand('copy');
            document.body.removeChild(textArea);
            this.showNotification(`${label} copied to clipboard!`, 'success');
        }
    }
}

// Newsletter subscription functionality
class NewsletterManager {
    constructor() {
        this.form = document.querySelector('.newsletter-form');
        this.init();
    }

    init() {
        if (!this.form) return;
        
        this.form.addEventListener('submit', (e) => this.handleSubmit(e));
    }

    async handleSubmit(e) {
        e.preventDefault();
        
        const input = this.form.querySelector('.newsletter-input');
        const email = input.value.trim();
        
        if (!email || !this.validateEmail(email)) {
            this.showMessage('Please enter a valid email address', 'error');
            return;
        }

        try {
            // Simulate subscription (replace with actual implementation)
            await this.subscribeEmail(email);
            this.showMessage('Successfully subscribed to newsletter!', 'success');
            input.value = '';
        } catch (error) {
            this.showMessage('Subscription failed. Please try again.', 'error');
        }
    }

    validateEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    async subscribeEmail(email) {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000));
        console.log('Newsletter subscription:', email);
        return { success: true };
    }

    showMessage(message, type) {
        // Use the same notification system as ContactManager
        const notification = document.createElement('div');
        notification.className = `notification ${type}`;
        notification.innerHTML = `
            <div class="notification-header">
                <span class="notification-title">${type === 'success' ? 'Success' : 'Error'}</span>
                <button class="notification-close" onclick="this.parentElement.parentElement.remove()">×</button>
            </div>
            <div class="notification-message">${message}</div>
        `;

        document.body.appendChild(notification);
        setTimeout(() => notification.classList.add('show'), 100);
        setTimeout(() => {
            notification.classList.remove('show');
            setTimeout(() => notification.remove(), 300);
        }, 4000);
    }
}

// Initialize Contact Manager when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Initialize only if contact section exists
    if (document.querySelector('.contact')) {
        window.contactManager = new ContactManager();
    }
    
    // Initialize newsletter manager
    if (document.querySelector('.newsletter-form')) {
        window.newsletterManager = new NewsletterManager();
    }
});

// Export for module usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { ContactManager, NewsletterManager };
}
