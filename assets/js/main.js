const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        const hiddenModifier = Array.from(entry.target.classList)
            .find((className) => className.endsWith('--hidden'));

        if (!hiddenModifier) return;
        const visibleModifier = hiddenModifier.replace('--hidden', '--visible');
        
        entry.target.classList.add(visibleModifier);
        observer.unobserve(entry.target);
    });
});

const hiddenModifiers = document.querySelectorAll('.projects__card--hidden, .projects__header--hidden');
hiddenModifiers.forEach((element) => observer.observe(element));