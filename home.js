document.documentElement.classList.add('js');

const heroCopy = document.querySelectorAll('[data-hero-copy]');
const heroImage = document.querySelector('[data-hero-image]');

requestAnimationFrame(() => {
  heroCopy.forEach((item) => item.classList.add('is-visible'));
  heroImage?.classList.add('is-visible');
});

const revealItems = document.querySelectorAll('[data-reveal]');

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      });
    },
    { rootMargin: '0px 0px -10% 0px', threshold: 0.08 },
  );

  revealItems.forEach((item) => observer.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add('is-visible'));
}
