import { useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import Header from './components/Header.jsx';
import lotus from './assets/projects/lotus.jpg';
import comingSoon from './assets/ui/coming-soon.png';

function Projects() {
  useEffect(() => {
    function openOldAboutLink() {
      if (['#about', '#resume', '#contact'].includes(window.location.hash)) {
        window.location.replace('about.html' + window.location.hash);
      }
    }

    openOldAboutLink();
    window.addEventListener('hashchange', openOldAboutLink);
    return () => window.removeEventListener('hashchange', openOldAboutLink);
  }, []);

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Header currentPage="projects" />
      <main id="main" className="projects-page" tabIndex="-1">
        <div id="work" className="projects-heading">
          <h1>Projects</h1>
          <p>some things i’ve been up to</p>
        </div>
        <div className="projects-grid">
          <a
            className="project-card"
            href="feeling_in_between_warm_editorial.html"
            aria-labelledby="between-title"
          >
            <div className="project-frame">
              <img
                src={lotus}
                width="1600"
                height="2400"
                alt="A pink lotus blooming among broad green leaves"
                fetchPriority="high"
              />
            </div>
            <h2 id="between-title">feeling in between</h2>
          </a>
          <article className="project-card" aria-labelledby="scent-title">
            <div className="project-frame project-placeholder">
              <img
                className="coming-soon-icon"
                src={comingSoon}
                width="192"
                height="192"
                alt=""
              />
              <p>coming soon</p>
            </div>
            <h2 id="scent-title">project scent</h2>
          </article>
        </div>
      </main>
    </>
  );
}

createRoot(document.getElementById('root')).render(<Projects />);
