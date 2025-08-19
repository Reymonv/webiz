// Simple scroll animation effect
window.addEventListener("scroll", () => {
    const hero = document.querySelector(".hero-text");
    const pos = hero.getBoundingClientRect().top;
    const screenPos = window.innerHeight / 1.3;

    if (pos < screenPos) {
        hero.style.opacity = "1";
        hero.style.transform = "translateY(0)";
    }
});
