import { useEffect, useRef, useSyncExternalStore } from 'react';
import { createRoot } from 'react-dom/client';
import Header from './components/Header.jsx';
import seal from './assets/seal.png';
import portrait from './assets/home/ascii-portrait.png';
import animals from './assets/landscape/animals.jpg';
import painting from './assets/landscape/anni-painting.jpeg';

function subscribeToTheme(update) {
  window.addEventListener('minie-theme-change', update);
  return () => window.removeEventListener('minie-theme-change', update);
}

function isDarkTheme() {
  return document.documentElement.dataset.theme === 'dark';
}

function Home() {
  const dialog = useRef(null);
  const dark = useSyncExternalStore(subscribeToTheme, isDarkTheme);
  const themeLabel = `Switch to ${dark ? 'light' : 'dark'} mode`;

  useEffect(() => {
    let visited = false;
    try {
      visited = sessionStorage.getItem('minie-welcome') === 'seen';
    } catch {
      // Show the welcome dialog when session storage is unavailable.
    }
    if (!visited) dialog.current.showModal();
  }, []);

  function rememberWelcome() {
    try {
      sessionStorage.setItem('minie-welcome', 'seen');
    } catch {
      // The dialog can still close when session storage is unavailable.
    }
  }

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Header currentPage="home" />
      <main id="main" className="welcome">
        <section className="introduction" aria-labelledby="welcome-title">
          <h1 id="welcome-title">hello, world.</h1>
          <p className="name">
            i’m minie!
            <img
              src={seal}
              width="54"
              height="54"
              alt="Minie’s Chinese name seal"
            />
          </p>
          <p className="greeting">
            feel free to browse around and
            <br />
            get to know me!
          </p>
          <img
            className="ascii-portrait"
            src={portrait}
            width="566"
            height="327"
            alt=""
          />
        </section>
        <div className="landscape">
          <picture>
            <source
              media="(max-width: 650px), (max-width: 950px) and (max-height: 440px)"
              srcSet={animals}
            />
            <img
              className="painting"
              src={painting}
              width="6000"
              height="1500"
              fetchPriority="high"
              alt="An ink painting with a dragon, a dog, a rooster, an ox, and a snake."
            />
          </picture>
          <button
            className="lantern"
            data-theme-toggle
            type="button"
            aria-label={themeLabel}
            aria-pressed={dark}
            title="Toggle the lantern for dark mode"
          ></button>
        </div>
        <button
          className="mobile-theme"
          data-theme-toggle
          type="button"
          aria-label={themeLabel}
          aria-pressed={dark}
        >
          Toggle theme
        </button>
      </main>
      <dialog
        ref={dialog}
        className="welcome-dialog"
        aria-labelledby="dialog-title"
        aria-describedby="dialog-description"
        onClose={rememberWelcome}
      >
        <h2 id="dialog-title">
          hi! feel free to explore and browse around!
          <br />
          ive designed this website to be both
          <br />
          interactive and for quick navigation
        </h2>
        <p id="dialog-description">
          Switch between light and dark mode using the lantern or the theme
          button.
        </p>
        <form method="dialog">
          <button>Lets go!</button>
        </form>
      </dialog>
    </>
  );
}

createRoot(document.getElementById('root')).render(<Home />);
