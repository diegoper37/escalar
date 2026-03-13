document.addEventListener('DOMContentLoaded', () => {
    // ======== NAVBAR SCROLL EFFECT ========
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // ======== FAQ ACCORDION ========
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const header = item.querySelector('.faq-header');
        
        header.addEventListener('click', () => {
            const isActive = item.classList.contains('active');
            
            // Close all items
            faqItems.forEach(faq => {
                faq.classList.remove('active');
                faq.querySelector('.faq-content').style.maxHeight = null;
            });
            
            // Open clicked item if it wasn't already open
            if (!isActive) {
                item.classList.add('active');
                const content = item.querySelector('.faq-content');
                content.style.maxHeight = content.scrollHeight + 'px';
            }
        });
    });

    // ======== SMOOTH SCROLL FOR ANCHOR LINKS ========
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            // Mobile menu close on click (optional logic for future)
            const targetId = this.getAttribute('href');
            if(targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const navHeight = navbar.offsetHeight;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.scrollY - navHeight;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ======== MOBILE MENU (Simple Toggle) ========
    const mobileBtn = document.querySelector('.menu-mobile');
    const navLinks = document.querySelector('.nav-links');
    
    if (mobileBtn && navLinks) {
        mobileBtn.addEventListener('click', () => {
            if (navLinks.style.display === 'flex') {
                navLinks.style.display = 'none';
            } else {
                navLinks.style.display = 'flex';
                navLinks.style.flexDirection = 'column';
                navLinks.style.position = 'absolute';
                navLinks.style.top = '100%';
                navLinks.style.left = '0';
                navLinks.style.width = '100%';
                navLinks.style.background = 'rgba(4, 10, 24, 0.95)';
                navLinks.style.padding = '20px';
                navLinks.style.gap = '20px';
                navLinks.style.alignItems = 'center';
            }
        });
    }
});
