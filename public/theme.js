(() => {
  const key = 'minie-theme';
  const root = document.documentElement;
  let mode = 'light';
  let transitionTimer;

  function updateControls() {
    const dark = mode === 'dark';
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.content = dark ? '#24211e' : '#f9f6f0';

    document.querySelectorAll('[data-theme-toggle]').forEach((control) => {
      control.setAttribute(
        'aria-label',
        `Switch to ${dark ? 'light' : 'dark'} mode`,
      );
      control.setAttribute('aria-pressed', String(dark));
    });
  }

  function applyTheme(value, animate = false) {
    if (
      animate &&
      !window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      clearTimeout(transitionTimer);
      root.classList.add('theme-changing');
      // Establish the transition on the current colors before changing themes.
      void root.offsetWidth;
      transitionTimer = setTimeout(() => {
        root.classList.remove('theme-changing');
      }, 380);
    }
    mode = value === 'dark' ? 'dark' : 'light';
    root.dataset.theme = mode;
    updateControls();
    window.dispatchEvent(new Event('minie-theme-change'));
  }

  function restoreTheme() {
    try {
      applyTheme(localStorage.getItem(key));
    } catch {
      applyTheme(mode);
    }
  }

  restoreTheme();
  document.addEventListener('DOMContentLoaded', updateControls, { once: true });
  window.addEventListener('pageshow', restoreTheme);
  window.addEventListener('storage', (event) => {
    if (event.key === key || event.key === null) restoreTheme();
  });

  document.addEventListener('click', (event) => {
    if (
      !(event.target instanceof Element) ||
      !event.target.closest('[data-theme-toggle]')
    )
      return;
    const next = mode === 'dark' ? 'light' : 'dark';
    try {
      localStorage.setItem(key, next);
    } catch {
      // The current page can still switch themes when storage is unavailable.
    }
    applyTheme(next, true);
  });
})();
