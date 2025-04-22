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

// Slider for activities
(function() {
    const sliderWrapper = document.querySelector('.slider-wrapper');
    const sliderItems = document.querySelectorAll('.slider-item');
    const btnLeft = document.querySelector('.slider-btn-left');
    const btnRight = document.querySelector('.slider-btn-right');
    let current = 0;
    function showSlide(idx) {
        sliderItems.forEach((item, i) => {
            item.classList.toggle('active', i === idx);
        });
    }
    if (btnLeft && btnRight && sliderItems.length > 1) {
        btnLeft.addEventListener('click', () => {
            current = (current - 1 + sliderItems.length) % sliderItems.length;
            showSlide(current);
        });
        btnRight.addEventListener('click', () => {
            current = (current + 1) % sliderItems.length;
            showSlide(current);
        });
    }
})();

