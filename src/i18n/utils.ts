import es from "./languages/es.json";
import en from "./languages/en.json";

export type { Language } from '../types';
import type { Language } from '../types';

export { getLocalizedUrl, getAlternateUrls, translateUrl } from './routes';
export { getCollectionName } from './collections';

export type TranslationValue = string | Record<string, unknown>;
export type TranslationFunction = (key: string) => string;

const defaultLang: Language = "es";
const supportedLangs: readonly Language[] = ["en", "es"] as const;

export function getLangFromUrl(url: URL): Language {
  const [, lang] = url.pathname.split("/");
  if (lang && supportedLangs.includes(lang as Language)) return lang as Language;
  return defaultLang;
}

export function useTranslations(lang: Language): TranslationFunction {
  const translations = lang === "es" ? es : en;

  return function t(key: string): string {
    const keys = key.split(".");
    let value: TranslationValue = translations;
    for (const k of keys) {
      if (typeof value === 'object' && value !== null && k in value) {
        value = (value as Record<string, unknown>)[k] as TranslationValue;
      } else {
        return key;
      }
    }

    return typeof value === 'string' ? value : key;
  };
}
