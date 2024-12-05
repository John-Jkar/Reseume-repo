document.addEventListener('DOMContentLoaded', function() {
    const menuBtn = document.querySelector('.mobile-menu-btn');
    const navMenu = document.querySelector('.nav-menu');

    menuBtn.addEventListener('click', function() {
        this.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!menuBtn.contains(e.target) && !navMenu.contains(e.target)) {
            menuBtn.classList.remove('active');
            navMenu.classList.remove('active');
        }
    });

    // Close menu when clicking a link
    navMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            menuBtn.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Enhanced form handling
    const contactForm = document.querySelector('#contactForm');
    const successMessage = document.querySelector('#successMessage');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const submitBtn = this.querySelector('button[type="submit"]');
            const buttonText = submitBtn.querySelector('.button-text');
            const originalText = buttonText.textContent;
            
            // Show loading state
            submitBtn.disabled = true;
            buttonText.textContent = 'Sending...';
            
            // Simulate form submission (replace with actual form submission)
            setTimeout(() => {
                submitBtn.disabled = false;
                buttonText.textContent = originalText;
                successMessage.classList.add('active');
                contactForm.reset();
            }, 2000);
        });
    }

    // Handle success message close button
    const closeMessageBtn = document.querySelector('.close-message');
    if (closeMessageBtn) {
        closeMessageBtn.addEventListener('click', function() {
            successMessage.classList.remove('active');
        });
    }

    // Close success message when clicking outside
    successMessage?.addEventListener('click', function(e) {
        if (e.target === this) {
            this.classList.remove('active');
        }
    });

    // Add page transition animation
    document.body.classList.add('page-loaded');
}); 