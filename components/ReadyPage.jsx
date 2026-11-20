import { useEffect, useRef, useState } from 'react';

// Keep layout measurable, then show text and decoded images in one render.
export default function ReadyPage({ children }) {
  const pageRef = useRef(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let cancelled = false;
    let frame;
    const images = [...pageRef.current.querySelectorAll('img')];
    const resources = images.map((image) => image.decode());
    if (document.fonts) resources.push(document.fonts.ready);

    void Promise.allSettled(resources).then(() => {
      frame = requestAnimationFrame(() => {
        if (!cancelled) setReady(true);
      });
    });

    return () => {
      cancelled = true;
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div
      ref={pageRef}
      style={{ display: 'contents', visibility: ready ? 'visible' : 'hidden' }}
      aria-busy={!ready}
    >
      {children}
    </div>
  );
}
