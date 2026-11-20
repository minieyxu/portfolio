import ReadyPage from './components/ReadyPage.jsx';
import { useLayoutEffect, useRef } from 'react';
import { createRoot } from 'react-dom/client';
import Header from './components/Header.jsx';
import portrait from './assets/about-portrait.jpg';

function About() {
  const mainRef = useRef(null);
  const contentRef = useRef(null);

  useLayoutEffect(() => {
    const main = mainRef.current;
    const content = contentRef.current;
    const fitContent = () => {
      const styles = getComputedStyle(main);
      const availableHeight =
        main.clientHeight -
        parseFloat(styles.paddingTop) -
        parseFloat(styles.paddingBottom);
      const scale = Math.min(
        1,
        Math.max(0, availableHeight) / content.offsetHeight,
      );
      content.style.setProperty('--about-scale', scale);
    };
    const observer = new ResizeObserver(fitContent);
    observer.observe(main);
    observer.observe(content);
    fitContent();
    return () => observer.disconnect();
  }, []);
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Header currentPage="about" />
      <main ref={mainRef} id="main" className="about-page" tabIndex="-1">
        <section
          ref={contentRef}
          id="about"
          className="about"
          aria-labelledby="about-heading"
        >
          <div className="about-intro">
            <img
              className="about-portrait"
              src={portrait}
              width="200"
              height="200"
              alt="Minie Xu smiling in a scarf and white jacket"
            />
            <div className="about-titles">
              <h1 id="about-heading">a little about me</h1>
              <p className="about-name" lang="zh-Hant">
                徐妍翎
              </p>
            </div>
          </div>
          <div className="about-copy">
            <p>
              Hello, I’m Minie! At 18, I left home in Texas for the University
              of Michigan. I’m now a junior studying Cognitive Science, focusing
              on decision-making and human cognition. Research has been a big
              part of my time here, and I’m exploring how I can bring what I’ve
              learned into product management and user experience.
            </p>
            <p>
              Texas still has my heart, though there’s a lot of the world I want
              to see. Switzerland, Italy, and France are at the top of my list,
              and food will absolutely be part of the itinerary. I’m a huge
              foodie—if there’s something good to eat, count me in.
            </p>
            <p>
              As I think about where I want to go next, my Chinese name,{' '}
              <span className="about-inline-name" lang="zh-Hant">
                妍翎
              </span>
              , has taken on a new meaning for me. My parents gave it to me with
              the meaning “beautiful feather.” I’ve come to see it as a reminder
              to explore the world and take flight in my own direction.
            </p>
          </div>
        </section>
      </main>
      <footer id="contact" aria-label="Contact">
        <div>
          <p className="section-note">Feel free to reach out for any reason.</p>
        </div>
        <div className="socials" aria-label="Social profiles">
          <a href="https://www.linkedin.com/in/minieyxu">LinkedIn</a>
          <span aria-hidden="true">|</span>
          <a href="https://open.spotify.com/user/zwdvz08up261gn5ujsw1id4kl?si=9b5cb8985e9442ea">
            Spotify
          </a>
        </div>
        <div className="footer-spacer" aria-hidden="true" />
      </footer>
    </>
  );
}

createRoot(document.getElementById('root')).render(
  <ReadyPage>
    <About />
  </ReadyPage>,
);
