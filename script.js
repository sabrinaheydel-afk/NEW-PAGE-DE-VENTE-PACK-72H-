/* ========================================
   PACK LANCEMENT 72H++ - JAVASCRIPT
   Interactions & Animations
======================================== */

// ========== FAQ ACCORDÉON ==========
document.addEventListener('DOMContentLoaded', function() {
    
    // FAQ Accordion
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    faqQuestions.forEach(question => {
        question.addEventListener('click', function() {
            const faqItem = this.parentElement;
            const isActive = faqItem.classList.contains('active');
            
            // Close all FAQ items
            document.querySelectorAll('.faq-item').forEach(item => {
                item.classList.remove('active');
            });
            
            // Open clicked item if it wasn't active
            if (!isActive) {
                faqItem.classList.add('active');
            }
        });
    });
    
    // ========== SMOOTH SCROLL ==========
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const headerOffset = 80;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // ========== HEADER SCROLL EFFECT ==========
    const header = document.querySelector('.site-header');
    let lastScroll = 0;
    
    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 100) {
            header.style.boxShadow = '0 2px 20px rgba(18, 18, 18, 0.1)';
        } else {
            header.style.boxShadow = 'none';
        }
        
        lastScroll = currentScroll;
    });
    
    // ========== ANIMATIONS ON SCROLL ==========
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };
    
    const animateOnScrollObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);
    
    // Observe all sections
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        animateOnScrollObserver.observe(section);
    });
    
    // ========== CTA STICKY HIDE ON PRICING ==========
    const stickyButton = document.querySelector('.cta-sticky');
    const pricingSection = document.querySelector('#paiement');
    
    if (stickyButton && pricingSection) {
        const pricingObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    stickyButton.style.opacity = '0';
                    stickyButton.style.pointerEvents = 'none';
                } else {
                    stickyButton.style.opacity = '1';
                    stickyButton.style.pointerEvents = 'auto';
                }
            });
        }, {
            root: null,
            rootMargin: '-100px',
            threshold: 0
        });
        
        pricingObserver.observe(pricingSection);
    }
    
    // ========== PREVENT DEFAULT ON PLACEHOLDER LINKS ==========
    const placeholderLinks = document.querySelectorAll('a[href="#paiement"]');
    placeholderLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Si le lien pointe vers #paiement (placeholder), scroller vers la section pricing
            e.preventDefault();
            const pricingSection = document.querySelector('#paiement');
            if (pricingSection) {
                const headerOffset = 80;
                const elementPosition = pricingSection.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
            
            // TODO: Remplacer par ton vrai lien Stripe
            // window.location.href = 'https://buy.stripe.com/ton-lien-produit';
        });
    });
    
});

// ========== CONSOLE MESSAGE ==========
console.log('%c🚀 Pack Lancement 72H++ ', 'background: #3d2a52; color: #d4a65a; font-size: 20px; padding: 10px;');
console.log('%cPage de vente chargée avec succès!', 'color: #3d2a52; font-size: 14px;');
