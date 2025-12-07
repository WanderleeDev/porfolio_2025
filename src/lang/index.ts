import en from "./en.json";
import es from "./es.json";

export type Language = "en" | "es";

export const translations = {
  en,
  es,
} as const;

export type Translations = typeof en;

/**
 * Get translations for a specific language
 * @param lang - Language code ('en' or 'es')
 * @returns Translation object for the specified language
 */
export function getTranslations(lang: Language = "en"): Translations {
  return translations[lang] || translations.en;
}

/**
 * Get the current language from the URL or default to 'en'
 * @returns Current language code
 */
export function getCurrentLanguage(): Language {
  if (typeof window === "undefined") return "en";

  const path = window.location.pathname;
  if (path.startsWith("/es")) return "es";
  return "en";
}

export default translations;
