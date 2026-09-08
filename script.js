(() => {
  const menuButton = document.querySelector('[data-menu-toggle]');
  const nav = document.querySelector('[data-nav]');
  const header = document.querySelector('[data-header]');
  const yearNode = document.querySelector('[data-year]');

  if (yearNode) yearNode.textContent = new Date().getFullYear();

  const setMenu = (open) => {
    if (!menuButton || !nav) return;
    menuButton.setAttribute('aria-expanded', String(open));
    menuButton.querySelector('.sr-only').textContent = open ? 'Close navigation' : 'Open navigation';
    nav.classList.toggle('is-open', open);
    document.body.classList.toggle('nav-open', open);

    if (open) {
      window.setTimeout(() => nav.querySelector('a')?.focus(), 120);
    }
  };

  menuButton?.addEventListener('click', () => {
    setMenu(menuButton.getAttribute('aria-expanded') !== 'true');
  });

  nav?.addEventListener('click', (event) => {
    if (event.target.closest('a')) setMenu(false);
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && menuButton?.getAttribute('aria-expanded') === 'true') {
      setMenu(false);
      menuButton.focus();
    }
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 820) setMenu(false);
  });

  const syncHeaderState = () => {
    header?.classList.toggle('is-scrolled', window.scrollY > 10);
  };

  syncHeaderState();
  window.addEventListener('scroll', syncHeaderState, { passive: true });
})();
