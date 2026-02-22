import type { Language } from "../types";

const ROUTE_SEGMENTS = {
  home: "",
  collection: "collection",
  contact: "contact",
  experience: "experience",
} as const;

export type RouteKey = keyof typeof ROUTE_SEGMENTS;

export function getLocalizedUrl(
  route: RouteKey,
  lang: Language,
  slug?: string
): string {
  const segment = ROUTE_SEGMENTS[route];
  const base = segment ? `/${lang}/${segment}` : `/${lang}`;
  return slug ? `${base}/${slug}` : base;
}

export function getAlternateUrls(
  route: RouteKey,
  slug?: string
): { en: string; es: string } {
  return {
    en: getLocalizedUrl(route, "en", slug),
    es: getLocalizedUrl(route, "es", slug),
  };
}

export function translateUrl(
  currentPath: string,
  fromLang: Language,
  toLang: Language
): string {
  return currentPath.replace(new RegExp(`^/${fromLang}`), `/${toLang}`);
}
