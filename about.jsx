import { createRoot } from 'react-dom/client';
import seal from './assets/seal.png';

function About() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <header className="site-header">
        <a className="wordmark" href="index.html" aria-label="Minie Xu, home">
          <span className="full-name">minie xu</span>
          <span className="short-name">mx</span>
          <img src={seal} width="36" height="36" alt="" />
        </a>
        <nav aria-label="Main navigation">
          <a href="index.html">Home</a>
          <a href="work.html#work">Projects</a>
          <a href="photo.html">Photo</a>
          <a href="about.html" aria-current="page">About</a>
        </nav>
      </header>
      <main id="main" className="about-page" tabIndex="-1">
        <section id="about" className="about" aria-labelledby="about-heading">
          <h1 id="about-heading">A little about me</h1>
          <div>
            <p className="about-lead">-----</p>
            <div className="about-copy">
              <p>I’m a junior at the University of Michigan studying Biopsychology, Cognition, &amp; Neuroscience (BCN) and Cognitive Science. My broader interests include decision making, cognitive aging, and AI governance, with a growing interest in human-computer interaction and theory of mind.</p>
              <p>My experiences have given me the opportunity to explore questions about people and technology from different perspectives. I’m continuing to explore where those interests lead me—and what other questions I might discover along the way.</p>
            </div>
            <div className="resume" id="resume"><strong>Resume</strong> coming soon.</div>
          </div>
        </section>
      </main>
      <footer id="contact" aria-label="Contact">
        <div className="footer-top"></div>
        <div><p className="section-note">Contact links coming soon.</p></div>
        <div className="socials" aria-label="Social profiles and email placeholders">
          <span>GitHub · coming soon</span>
          <span>LinkedIn · coming soon</span>
          <span>Email · coming soon</span>
        </div>
        <div className="footer-bottom"><span>© Minie Xu - 2026.</span></div>
      </footer>
    </>
  );
}

createRoot(document.getElementById('root')).render(<About />);
