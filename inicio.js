document.addEventListener('DOMContentLoaded', () => {
    const items = document.querySelectorAll('.timeline-item');
    
    const observerOptions = {
        root: null,
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    };

    const timelineObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('active');
                }, index * 150);
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    items.forEach(item => timelineObserver.observe(item));
});

