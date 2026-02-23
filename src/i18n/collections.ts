import type { Language } from "../types";

export function getCollectionName(
  lang: Language
): "artifacts" | "artefactos" {
  return lang === "es" ? "artefactos" : "artifacts";
}
