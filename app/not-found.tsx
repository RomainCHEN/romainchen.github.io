import Link from 'next/link';
import { UI, path } from '@/content/site';

/**
 * A static export produces a single 404 document, so this page cannot know the
 * visitor's locale. It shows both languages rather than guessing.
 */
export default function NotFound() {
  return (
    <div className="canvas flex min-h-dvh flex-col justify-center py-24">
      <p className="label">404</p>
      <h1 className="mt-4 font-display text-4xl text-ink sm:text-5xl">
        {UI.notFoundTitle.en}
        <span className="mt-1 block text-muted">{UI.notFoundTitle.zh}</span>
      </h1>
      <p className="mt-6 max-w-xl font-display text-lg text-ink-soft">{UI.notFoundBody.en}</p>
      <p className="mt-2 max-w-xl font-display text-lg text-muted">{UI.notFoundBody.zh}</p>

      <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 font-mono text-2xs uppercase tracking-[0.14em]">
        <Link href={path('en')} className="link-draw text-ink">
          Home
        </Link>
        <Link href={path('en', 'work')} className="link-draw text-ink">
          Work
        </Link>
        <Link href={path('en', 'about')} className="link-draw text-ink">
          About
        </Link>
        <Link href={path('zh')} className="link-draw text-muted">
          中文
        </Link>
      </div>
    </div>
  );
}
