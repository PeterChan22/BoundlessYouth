document.addEventListener('DOMContentLoaded', () => {
    // Navigation Toggle
    const navToggle = document.querySelector('.nav-toggle');
    const navMenuTop = document.querySelector('.nav-menu-top');

    if (navToggle && navMenuTop) {
        navToggle.addEventListener('click', () => {
            navMenuTop.classList.toggle('active');
        });

        // Close menu when clicking outside
        document.addEventListener('click', (event) => {
            const isClickInsideNav = navToggle.contains(event.target) || navMenuTop.contains(event.target);
            if (!isClickInsideNav && navMenuTop.classList.contains('active')) {
                navMenuTop.classList.remove('active');
            }
        });
    }

    // Fade In Animation
    const fadeInSections = document.querySelectorAll('.fade-in');
    const observerOptions = {
        root: null,
        threshold: 0.1,
    };

    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    fadeInSections.forEach(section => observer.observe(section));
});

