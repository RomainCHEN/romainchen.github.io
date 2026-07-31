import Link from 'next/link';
import { SITE, SOCIAL, UI, path } from '@/content/site';
import type { Locale } from '@/content/types';

export function Footer({ locale }: { locale: Locale }) {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-32 border-t border-rule py-14">
      <div className="canvas field gap-y-10">
        <div className="col-span-full lg:col-span-5">
          <p className="label">{UI.contact[locale]}</p>
          <a
            href={`mailto:${SITE.email}`}
            className="link-draw mt-3 inline-block font-display text-xl text-ink"
          >
            {SITE.email}
          </a>
        </div>

        <div className="col-span-full sm:col-span-6 lg:col-span-4">
          <p className="label">{UI.elsewhere[locale]}</p>
          <ul className="mt-3 space-y-1.5">
            {SOCIAL.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  rel="me noopener noreferrer"
                  target="_blank"
                  className="group flex items-baseline gap-2 text-sm text-ink-soft transition-colors hover:text-ink"
                >
                  <span className="link-draw">{s.label}</span>
                  <span className="font-mono text-2xs text-muted">{s.handle}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="col-span-full sm:col-span-6 lg:col-span-3">
          <p className="label">{UI.index[locale]}</p>
          <ul className="mt-3 space-y-1.5 text-sm text-ink-soft">
            <li>
              <Link href={path(locale, 'work')} className="link-draw hover:text-ink">
                {UI.nav.work[locale]}
              </Link>
            </li>
            <li>
              <Link href={path(locale, 'about')} className="link-draw hover:text-ink">
                {UI.nav.about[locale]}
              </Link>
            </li>
            <li>
              <Link href={path(locale, 'cv')} className="link-draw hover:text-ink">
                {UI.nav.cv[locale]}
              </Link>
            </li>
          </ul>
        </div>

        <div className="col-span-full mt-4 flex flex-col justify-between gap-2 border-t border-rule pt-6 font-mono text-2xs text-muted sm:flex-row">
          <p>
            © {year} {SITE.name} · {SITE.nameZh}
          </p>
          <p>{UI.builtWith[locale]}</p>
        </div>
      </div>
    </footer>
  );
}
