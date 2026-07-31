'use client';

import { useEffect, useState } from 'react';

/**
 * A one-pixel rule under the masthead that fills as the article is read.
 *
 * Long case studies need some sense of extent. This is the least intrusive
 * version: no percentage readout, no floating widget, and it is purely
 * decorative so it is hidden from assistive technology.
 */
export function ReadingProgress() {
  const [ratio, setRatio] = useState(0);

  useEffect(() => {
    let frame = 0;

    const update = () => {
      frame = 0;
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      setRatio(scrollable > 0 ? Math.min(1, Math.max(0, window.scrollY / scrollable)) : 0);
    };

    const onScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div aria-hidden="true" className="sticky at-masthead z-30 h-px w-full bg-transparent">
      <div
        className="h-px origin-left bg-accent"
        style={{ transform: `scaleX(${ratio})`, transition: 'transform 90ms linear' }}
      />
    </div>
  );
}
