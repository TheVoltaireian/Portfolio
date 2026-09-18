const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        const hiddenModifier = Array.from(entry.target.classList).find(c => c.endsWith('--hidden'));
        
        if (hiddenModifier) {
            const visibleModifier = hiddenModifier.replace('--hidden', '--visible');
            
            if (entry.isIntersecting) {
                entry.target.classList.add(visibleModifier);
            } else {
                entry.target.classList.remove(visibleModifier);
            }
        }
    });
});

const hiddenModifiers = document.querySelectorAll('.projects__card--hidden, .projects__header--hidden');
hiddenModifiers.forEach((el) => observer.observe(el));