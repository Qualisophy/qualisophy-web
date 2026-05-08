// Language configuration
import es from "./translations/es";
import fr from "./translations/fr";

export const languages = {
  es: "Español",
  fr: "Français",
} as const;

export const defaultLang = "es";

export type Language = keyof typeof languages;
export type TranslationKeys = keyof typeof es;

// EL TRUCO PARA TYPESCRIPT:
// Convertimos los diccionarios estrictos en objetos genéricos de texto.
// Así no se quejará de que el texto en francés es diferente al texto en español.
const esTranslations: Record<string, string> = es;
const frTranslations: Record<string, string> = fr;

export const ui = {
  es: esTranslations,
  fr: frTranslations,
};

// Helper function to get translations
export function useTranslations(lang: Language) {
  return function t(key: TranslationKeys): string {
    return ui[lang][key] || ui[defaultLang][key] || key;
  };
}

// RESTAURADO Y MEJORADO: Ahora lee primero de la URL (para SEO) y si no, usa localStorage
export function getCurrentLanguage(): Language {
  if (typeof window === "undefined") return defaultLang;

  // 1. Intentar obtener el idioma de la URL (ej: /fr/contacto)
  const pathParts = window.location.pathname.split("/");
  const urlLang = pathParts[1];

  if (urlLang === "es" || urlLang === "fr") {
    return urlLang as Language;
  }

  // 2. Fallback al localStorage (para mantener compatibilidad con tu código actual)
  const stored = localStorage.getItem("language");
  return stored === "es" || stored === "fr" ? stored : defaultLang;
}

// Helper to set language
export function setLanguage(lang: Language): void {
  if (typeof window === "undefined") return;
  localStorage.setItem("language", lang);
  // Despachar evento para que los componentes React y Astro se enteren
  window.dispatchEvent(new Event("languageChanged"));
}

// RESTAURADO: Necesario para el script de tu Header.astro
export function getTranslations(lang: Language) {
  return ui[lang];
}

// NUEVO: Para obtener el idioma en el servidor (Astro) desde la URL limpia
export function getLangFromUrl(url: URL): Language {
  const [, lang] = url.pathname.split("/");
  if (lang && lang in languages) {
    return lang as Language;
  }
  return defaultLang;
}
