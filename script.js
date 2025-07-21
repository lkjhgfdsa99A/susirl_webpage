// Smooth scrolling for anchor links
document.addEventListener('DOMContentLoaded', function() {
    // Add smooth scroll behavior to all anchor links
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Add intersection observer for fade-in animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe all sections and cards for animation
    const animatedElements = document.querySelectorAll('.feature-card, .support-card, .section');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // Enhanced FAQ interaction
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const summary = item.querySelector('summary');
        summary.addEventListener('click', function() {
            // Close other open FAQ items for better UX
            faqItems.forEach(otherItem => {
                if (otherItem !== item && otherItem.open) {
                    otherItem.open = false;
                }
            });
        });
    });

    // Add hover effects for feature cards
    const featureCards = document.querySelectorAll('.feature-card');
    featureCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-4px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    // Enhanced logo hover effect
    const logos = document.querySelectorAll('.logo-main, .footer-logo');
    logos.forEach(logo => {
        logo.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05) rotate(2deg)';
        });
        
        logo.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1) rotate(0deg)';
        });
    });

    // Contact button enhancement
    const contactButton = document.querySelector('.contact-button');
    if (contactButton) {
        contactButton.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px) scale(1.02)';
        });
        
        contactButton.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });

        // Add click analytics
        contactButton.addEventListener('click', function() {
            console.log('📧 Contact support button clicked');
            showToast('Opening email client...');
        });
    }

    // Simple toast notification
    function showToast(message) {
        const toast = document.createElement('div');
        toast.textContent = message;
        toast.style.cssText = `
            position: fixed;
            bottom: 20px;
            right: 20px;
            background: linear-gradient(135deg, #FF3366, #3399FF);
            color: white;
            padding: 12px 20px;
            border-radius: 12px;
            font-size: 14px;
            font-weight: 500;
            z-index: 1000;
            opacity: 0;
            transform: translateY(20px);
            transition: all 0.3s ease;
            cursor: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><text x="4" y="24" font-size="20">😈</text></svg>'), auto;
        `;
        
        document.body.appendChild(toast);
        
        // Trigger animation
        setTimeout(() => {
            toast.style.opacity = '1';
            toast.style.transform = 'translateY(0)';
        }, 100);
        
        // Remove after 3 seconds
        setTimeout(() => {
            toast.style.opacity = '0';
            toast.style.transform = 'translateY(20px)';
            setTimeout(() => {
                if (document.body.contains(toast)) {
                    document.body.removeChild(toast);
                }
            }, 300);
        }, 3000);
    }

    // Footer link animations
    const footerLinks = document.querySelectorAll('.footer-section a');
    footerLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.style.transform = 'translateX(5px)';
        });
        
        link.addEventListener('mouseleave', function() {
            this.style.transform = 'translateX(0)';
        });
    });

    // Preload logo for better performance
    const logo = new Image();
    logo.src = 'susirl_logo-removebg.png';

    // Add keyboard navigation for FAQ items
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            // Close all open FAQ items when escape is pressed
            faqItems.forEach(item => {
                item.open = false;
            });
        }
    });

    // Add parallax effect to background
    let ticking = false;
    
    function updateBackground() {
        const scrolled = window.pageYOffset;
        const parallax = scrolled * 0.5;
        
        document.body.style.backgroundPosition = `center ${parallax}px`;
        ticking = false;
    }
    
    function requestTick() {
        if (!ticking) {
            requestAnimationFrame(updateBackground);
            ticking = true;
        }
    }
    
    window.addEventListener('scroll', requestTick);

    // Add floating animation to feature icons
    const featureIcons = document.querySelectorAll('.feature-icon');
    featureIcons.forEach((icon, index) => {
        // Stagger the animation start times
        setTimeout(() => {
            icon.style.animation = `float 3s ease-in-out infinite`;
        }, index * 200);
    });

    // Add float keyframes dynamically
    const style = document.createElement('style');
    style.textContent = `
        @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
        }
    `;
    document.head.appendChild(style);

    console.log('🚀 susirl support page loaded successfully with enhanced features');
}); 