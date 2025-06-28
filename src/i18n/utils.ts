import es from "./languages/es.json";
import en from "./languages/en.json";

export type Language = "en" | "es";
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
        return key; // Return key if path doesn't exist
      }
    }

    return typeof value === 'string' ? value : key;
  };
}

export function detectBrowserLanguage(): Language {
  if (typeof window === 'undefined') return defaultLang;
  const browserLang = navigator.language?.split('-')[0] || '';
  return supportedLangs.includes(browserLang as Language) ? browserLang as Language : defaultLang;
}

export function redirectToLanguagePath(path: string, lang: string): string {
  const pathWithoutLang = path.replace(/^\/(en|es)/, '');
  return `/${lang}${pathWithoutLang}`;
}
