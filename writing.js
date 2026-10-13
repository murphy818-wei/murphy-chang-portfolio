(() => {
  const posts = document.querySelectorAll('.writing-post, .note-card, .notebook-hero, .case-grid .project-card--featured');
  if (!posts.length) return;
  document.documentElement.classList.add('motion-ready');
  if (!('IntersectionObserver' in window)) {
    posts.forEach((post) => post.classList.add('is-visible'));
    return;
  }
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduce) {
    posts.forEach((post) => post.classList.add('is-visible'));
    return;
  }
  posts.forEach((post, index) => { post.style.setProperty('--post-delay', `${index * 90}ms`); });
  const observer = new IntersectionObserver((entries, io) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.16 });
  posts.forEach((post) => observer.observe(post));
})();
