import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  robots: { index: false, follow: true },
};

/**
 * The site has no language-neutral home. Rather than picking one, this page
 * sends a Chinese-locale browser to /zh/ and everyone else to /en/, then gets
 * out of the way. Both links are real, so it works without JavaScript too.
 */
const routeScript = `(function(){try{
var l=(navigator.language||'en').toLowerCase();
var zh=l.indexOf('zh')===0;
location.replace(zh?'/zh/':'/en/');
}catch(e){location.replace('/en/');}})();`;

export default function LocaleGate() {
  return (
    <>
      <script dangerouslySetInnerHTML={{ __html: routeScript }} />
      <noscript>
        <meta httpEquiv="refresh" content="0; url=/en/" />
      </noscript>
      <main className="canvas flex min-h-dvh flex-col justify-center gap-6 py-24">
        <p className="label">Zeming (Romain) Chen</p>
        <nav className="flex gap-8 font-display text-2xl">
          <Link href="/en/" className="link-draw">
            English
          </Link>
          <Link href="/zh/" className="link-draw">
            中文
          </Link>
        </nav>
      </main>
    </>
  );
}
