document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenuTop = document.querySelector('.nav-menu-top');

    navToggle.addEventListener('click', () => {
        navMenuTop.classList.toggle('active');
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const fadeInSections = document.querySelectorAll('.fade-in');

    const observerOptions = {
        root: null, // 使用视口作为根
        threshold: 0.1, // 元素有 10% 出现在视口时触发
    };

    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // 动画完成后停止观察
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    fadeInSections.forEach(section => {
        observer.observe(section); // 观察每个具有 .fade-in 的元素
    });
});

