/* ========================================
   PORTFOLIO WEBSITE - JAVASCRIPT
   ======================================== */

/**
 * MOBILE MENU TOGGLE
 * Handles opening/closing mobile navigation menu
 */
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const navMenu = document.getElementById('navMenu');

if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', function () {
        mobileMenuBtn.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
}

/**
 * CLOSE MOBILE MENU ON LINK CLICK
 * Automatically close menu when user clicks a navigation link
 */
const navLinks = document.querySelectorAll('.nav-menu a');
navLinks.forEach(link => {
    link.addEventListener('click', function () {
        mobileMenuBtn.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

/**
 * SMOOTH SCROLL ENHANCEMENT
 * Browser's native smooth scroll is already enabled via CSS,
 * but this ensures better compatibility across browsers
 */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        // Skip if it's a "#" only link
        if (href === '#') return;
        
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

/**
 * CONTACT FORM HANDLING
 * Demo form with basic validation and user feedback
 */
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();
        
        // Get form values
        const formData = new FormData(contactForm);
        const name = contactForm.querySelector('input[type="text"]').value.trim();
        const email = contactForm.querySelector('input[type="email"]').value.trim();
        const message = contactForm.querySelector('textarea').value.trim();
        
        // Basic validation
        if (!name || !email || !message) {
            showNotification('Please fill in all fields', 'error');
            return;
        }
        
        // Email validation
        if (!isValidEmail(email)) {
            showNotification('Please enter a valid email address', 'error');
            return;
        }
        
        // Success message
        showNotification('Thank you for your message! I\'ll get back to you soon.', 'success');
        
        // Reset form
        contactForm.reset();
        
        /**
         * NOTE: This is a demo form. To actually send emails, you would need:
         * 1. FormSubmit.co (free service) - https://formsubmit.co
         * 2. Netlify Forms (if hosting on Netlify)
         * 3. Firebase or a backend API
         * 
         * For FormSubmit integration, update the form action:
         * <form action="https://formsubmit.co/your.email@gmail.com" method="POST">
         */
    });
}

/**
 * EMAIL VALIDATION HELPER
 * @param {string} email - Email address to validate
 * @returns {boolean} - True if email is valid
 */
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

/**
 * NOTIFICATION DISPLAY
 * Shows temporary notification messages to user
 * @param {string} message - Message to display
 * @param {string} type - Type of notification ('success' or 'error')
 */
function showNotification(message, type = 'success') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    // Add styles dynamically
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background-color: ${type === 'success' ? '#10b981' : '#ef4444'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 0.5rem;
        z-index: 1000;
        animation: slideIn 0.3s ease;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        max-width: 300px;
        word-wrap: break-word;
    `;
    
    // Add to page
    document.body.appendChild(notification);
    
    // Remove after 4 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 4000);
}

/**
 * ADD ANIMATION STYLES
 * Inject CSS animations for notifications
 */
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

/**
 * SCROLL ANIMATION (Optional Enhancement)
 * Add animation to elements as they come into view
 */
function initScrollAnimation() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function (entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe all cards and content sections
    const animatableElements = document.querySelectorAll(
        '.project-card, .skill-category, .learning-card, .contact-method'
    );
    
    animatableElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(element);
    });
}

// Initialize scroll animations when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initScrollAnimation);
} else {
    initScrollAnimation();
}

/**
 * ACTIVE NAV LINK HIGHLIGHTING
 * Highlight the current section in navigation
 */
function highlightActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-menu a[href^="#"]');
    
    const observerOptions = {
        threshold: 0.3,
        rootMargin: '-50px 0px -66%'
    };
    
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');
                navLinks.forEach(link => {
                    link.style.color = '';
                    if (link.getAttribute('href') === `#${id}`) {
                        link.style.color = 'var(--primary-color)';
                        link.style.fontWeight = '600';
                    }
                });
            }
        });
    }, observerOptions);
    
    sections.forEach(section => observer.observe(section));
}

highlightActiveNavLink();

/**
 * SCROLL TO TOP BUTTON (Optional Enhancement)
 * Could be added later for better UX on long pages
 */
function initScrollToTopButton() {
    // Create button
    const scrollButton = document.createElement('button');
    scrollButton.id = 'scrollToTop';
    scrollButton.innerHTML = '↑';
    scrollButton.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        background-color: var(--primary-color);
        color: white;
        border: none;
        border-radius: 50%;
        width: 50px;
        height: 50px;
        font-size: 24px;
        cursor: pointer;
        display: none;
        z-index: 999;
        transition: all 0.3s ease;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    `;
    
    document.body.appendChild(scrollButton);
    
    // Show/hide button based on scroll position
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            scrollButton.style.display = 'block';
        } else {
            scrollButton.style.display = 'none';
        }
    });
    
    // Scroll to top on click
    scrollButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // Hover effects
    scrollButton.addEventListener('mouseover', () => {
        scrollButton.style.backgroundColor = 'var(--primary-dark)';
        scrollButton.style.transform = 'scale(1.1)';
    });
    
    scrollButton.addEventListener('mouseout', () => {
        scrollButton.style.backgroundColor = 'var(--primary-color)';
        scrollButton.style.transform = 'scale(1)';
    });
}

// Uncomment the line below to enable scroll-to-top button
// initScrollToTopButton();

/**
 * CONSOLE MESSAGE
 * A friendly message for developers who inspect the source
 */
console.log('%c🚀 Welcome to My Portfolio!', 'font-size: 20px; font-weight: bold; color: #2563eb;');
console.log('This is a clean, professional QA Automation portfolio built with HTML, CSS, and JavaScript.');
console.log('Feel free to explore the code and get in touch!');
console.log('%cEmail: your.email@gmail.com | GitHub: https://github.com', 'color: #2563eb; font-weight: bold;');
