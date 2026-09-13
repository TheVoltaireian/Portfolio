const hero = document.querySelector('.hero');

function updateHeroHeight() {
    if (!hero) return;

    const rectHeight = hero.getBoundingClientRect().height;

    const styles = window.getComputedStyle(hero);
    const marginTop = parseFloat(styles.marginTop);
    const marginBottom = parseFloat(styles.marginBottom);

    const totalHeight = rectHeight + marginTop + marginBottom;

    document.documentElement.style.setProperty('--hero-height', `${totalHeight}px`);
}

// Run on load and window resize
updateHeroHeight();
window.addEventListener('resize', updateHeroHeight);