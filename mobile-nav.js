(() => {
  const nav = document.querySelector('.mobile-nav');
  if (!nav) return;

  const toggle = nav.querySelector('.mobile-nav-toggle');
  const panel = nav.querySelector('nav');
  const overlay = nav.querySelector('.mobile-nav-overlay');
  if (!toggle || !panel || !overlay) return;

  const setOpen = (open) => {
    nav.classList.toggle('is-open', open);
    toggle.setAttribute('aria-expanded', String(open));
    toggle.textContent = open ? 'Close' : 'Menu';
    panel.hidden = !open;
    overlay.hidden = !open;
    document.documentElement.classList.toggle('menu-is-open', open);
  };

  toggle.addEventListener('click', () => setOpen(!nav.classList.contains('is-open')));
  overlay.addEventListener('click', () => setOpen(false));
  panel.addEventListener('click', (event) => {
    if (event.target.closest('a')) setOpen(false);
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && nav.classList.contains('is-open')) {
      setOpen(false);
      toggle.focus();
    }
  });
  window.addEventListener('resize', () => {
    if (window.matchMedia('(min-width: 921px)').matches) setOpen(false);
  });
  setOpen(false);
})();
