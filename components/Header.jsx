import { useSyncExternalStore } from 'react';
import lantern from '../assets/lantern.png';
import seal from '../assets/seal.png';

function subscribeToTheme(update) {
  window.addEventListener('minie-theme-change', update);
  return () => window.removeEventListener('minie-theme-change', update);
}

function isDarkTheme() {
  return document.documentElement.dataset.theme === 'dark';
}

export default function Header({ currentPage, as: Container = 'header' }) {
  const dark = useSyncExternalStore(subscribeToTheme, isDarkTheme);
  const themeLabel = `Switch to ${dark ? 'light' : 'dark'} mode`;
  return (
    <Container className="site-header">
      <a className="wordmark" href="index.html" aria-label="Minie Xu, home">
        <img src={seal} width="36" height="36" alt="" />
        <span className="full-name">minie xu</span>
        <span className="short-name">minie</span>
      </a>
      <div className="header-controls">
        <nav aria-label="Main navigation">
          <a
            href="index.html"
            aria-current={currentPage === 'home' ? 'page' : undefined}
          >
            Home
          </a>
          <a
            href="work.html#work"
            aria-current={currentPage === 'projects' ? 'page' : undefined}
          >
            Projects
          </a>
          <a
            href="photo.html"
            aria-current={currentPage === 'gallery' ? 'page' : undefined}
          >
            Gallery
          </a>
          <a
            href="about.html"
            aria-current={currentPage === 'about' ? 'page' : undefined}
          >
            About
          </a>
        </nav>
        <button
          className="theme-switch"
          data-theme-toggle
          type="button"
          aria-label={themeLabel}
          aria-pressed={dark}
          title={themeLabel}
        >
          <span className="theme-switch-thumb">
            <img src={lantern} width="24" height="32" alt="" />
          </span>
        </button>
      </div>
    </Container>
  );
}
