import type { Project } from './types';
import { papercraft } from './projects/papercraft';
import { transcreation } from './projects/transcreation';
import { ieltsCoach } from './projects/ielts-coach';

/** Reading order, not chronological order. */
export const PROJECTS: Project[] = [papercraft, transcreation, ieltsCoach];

export function getProject(slug: string): Project | undefined {
  return PROJECTS.find((p) => p.slug === slug);
}

export function projectSlugs(): string[] {
  return PROJECTS.map((p) => p.slug);
}

/** Neighbours for the case-study footer, wrapping around the list. */
export function projectNeighbours(slug: string): { prev: Project; next: Project } | null {
  const i = PROJECTS.findIndex((p) => p.slug === slug);
  if (i === -1 || PROJECTS.length < 2) return null;
  return {
    prev: PROJECTS[(i - 1 + PROJECTS.length) % PROJECTS.length],
    next: PROJECTS[(i + 1) % PROJECTS.length],
  };
}
