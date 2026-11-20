import ReadyPage from './components/ReadyPage.jsx';
import { createRoot } from 'react-dom/client';
import Header from './components/Header.jsx';
import comingSoon from './assets/ui/coming-soon.png';

function Gallery() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Header currentPage="gallery" />
      <main id="main" className="photo-page">
        <h1>Gallery</h1>
        <div className="photo-placeholder">
          <img
            className="coming-soon-icon"
            src={comingSoon}
            width="192"
            height="192"
            alt=""
          />
          <p>coming soon</p>
        </div>
      </main>
    </>
  );
}

createRoot(document.getElementById('root')).render(
  <ReadyPage>
    <Gallery />
  </ReadyPage>,
);
