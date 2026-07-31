import type { MetadataRoute } from 'next';
import { projectSlugs } from '@/content/projects';
import { SITE } from '@/content/site';
import { LOCALES } from '@/content/types';
import { noteSlugs } from '@/lib/notes';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const routes: string[] = ['', 'work', 'about', 'cv'];
  const notes = noteSlugs();
  if (notes.length > 0) routes.push('notes');

  const entries: MetadataRoute.Sitemap = [];

  for (const locale of LOCALES) {
    for (const route of routes) {
      entries.push({
        url: `${SITE.url}/${locale}${route ? `/${route}` : ''}/`,
        lastModified: now,
        changeFrequency: route === '' ? 'monthly' : 'yearly',
        priority: route === '' ? 1 : 0.8,
      });
    }
    for (const slug of projectSlugs()) {
      entries.push({
        url: `${SITE.url}/${locale}/work/${slug}/`,
        lastModified: now,
        changeFrequency: 'monthly',
        priority: 0.9,
      });
    }
    for (const slug of notes) {
      entries.push({
        url: `${SITE.url}/${locale}/notes/${slug}/`,
        lastModified: now,
        changeFrequency: 'yearly',
        priority: 0.6,
      });
    }
  }

  return entries;
}
