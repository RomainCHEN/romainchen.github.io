import type { Metadata } from 'next';
import { Newsreader, Instrument_Sans, IBM_Plex_Mono } from 'next/font/google';
import { SITE, TAGLINE } from '@/content/site';
import './globals.css';

const newsreader = Newsreader({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-newsreader',
  axes: ['opsz'],
});

const instrumentSans = Instrument_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-instrument-sans',
});

const plexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  display: 'swap',
  variable: '--font-plex-mono',
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} · learning tools as research objects`,
    template: `%s · ${SITE.name}`,
  },
  description: TAGLINE.en,
  authors: [{ name: SITE.name, url: SITE.url }],
  openGraph: {
    type: 'website',
    siteName: SITE.name,
    title: SITE.name,
    description: TAGLINE.en,
    images: [{ url: '/og.png', width: 1200, height: 630, alt: SITE.name }],
  },
  twitter: {
    card: 'summary_large_image',
  },
  icons: {
    icon: [
      { url: '/icon.svg', type: 'image/svg+xml' },
      { url: '/icon-32.png', sizes: '32x32', type: 'image/png' },
      { url: '/icon-192.png', sizes: '192x192', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
  },
  alternates: {
    canonical: '/',
    languages: {
      en: '/en/',
      zh: '/zh/',
    },
  },
};

/**
 * Applied before first paint so a dark-mode visitor never sees a white flash.
 * Explicit user choice wins over the OS preference; absent a choice we follow
 * the OS and keep following it if it changes mid-session.
 */
const themeScript = `(function(){try{
var s=localStorage.getItem('theme');
var d=window.matchMedia('(prefers-color-scheme: dark)');
var on=s==='dark'||(!s&&d.matches);
document.documentElement.classList.toggle('dark',on);
document.documentElement.style.colorScheme=on?'dark':'light';
if(!s&&d.addEventListener)d.addEventListener('change',function(e){
document.documentElement.classList.toggle('dark',e.matches);
document.documentElement.style.colorScheme=e.matches?'dark':'light';});
}catch(e){}})();`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        {/* Without JavaScript the IntersectionObserver never runs, so make sure
            every revealed element is simply visible. */}
        <noscript>
          <style>{'.reveal{opacity:1 !important;transform:none !important}'}</style>
        </noscript>
        {SITE.analytics.plausibleDomain ? (
          <script
            defer
            data-domain={SITE.analytics.plausibleDomain}
            src={`${SITE.analytics.plausibleHost}/js/script.js`}
          />
        ) : null}
      </head>
      <body
        className={`${newsreader.variable} ${instrumentSans.variable} ${plexMono.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
