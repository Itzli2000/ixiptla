import type { CultureInfo } from '../types/home';

/**
 * Get culture link based on language
 */
export function getCultureLink(culture: CultureInfo, lang: 'en' | 'es'): string {
  return `/${lang}/collection?culture=${culture.slug}`;
}

/**
 * Format artifact count for display
 */
export function formatArtifactCount(count: number, lang: 'en' | 'es'): string {
  const suffix = lang === 'es' ? 'artefactos' : 'artifacts';
  return `${count} ${suffix}`;
}
