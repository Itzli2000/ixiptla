import es from "./languages/es.json";
import en from "./languages/en.json";

const defaultLang = "es";

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split("/");
  if (["en", "es"].includes(lang)) return lang;
  return defaultLang;
}

export function useTranslations(lang: "en" | "es") {
  const translations = lang === "es" ? es : en;

  return function t(key: string) {
    const keys = key.split(".");
    let value: any = translations;
    for (const k of keys) {
      value = value[k];
      if (value === undefined) return key;
    }

    return value as string;
  };
}
