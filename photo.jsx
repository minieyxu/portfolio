import { createRoot } from 'react-dom/client';
import Header from './components/Header.jsx';
import comingSoon from './assets/ui/coming-soon.png';

function Photo() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Header currentPage="photo" />
      <main id="main" className="photo-page">
        <h1>Photo</h1>
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

createRoot(document.getElementById('root')).render(<Photo />);
