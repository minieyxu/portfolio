import ReadyPage from './components/ReadyPage.jsx';
import { createRoot } from 'react-dom/client';
import Header from './components/Header.jsx';
import seal from './assets/seal.png';
import painting from './assets/landscape/anni-painting.jpeg';

function Home() {
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
            <br />
            get to know me!
          </p>
        </section>
        <div className="landscape">
          <img
            className="painting"
            src={painting}
            width="6000"
            height="1500"
            fetchPriority="high"
            alt="An ink landscape with a waterfall, dragon, dog, rooster, ox, snake, flowering tree, hanging lantern, and bamboo."
          />
        </div>
      </main>
    </>
  );
}

createRoot(document.getElementById('root')).render(
  <ReadyPage>
    <Home />
  </ReadyPage>,
);
