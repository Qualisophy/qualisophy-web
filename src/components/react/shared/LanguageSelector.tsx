import React from "react";
import { languages, type Language } from "@/i18n/ui";

// 1. Le decimos a TypeScript que vamos a recibir currentLang desde el Header
interface LanguageSelectorProps {
  currentLang: string;
}

export const LanguageSelector: React.FC<LanguageSelectorProps> = ({
  currentLang,
}) => {
  const handleLanguageChange = (lang: Language) => {
    // Si elige el idioma en el que ya está, no hacemos nada
    if (lang === currentLang) return;

    const currentPath = window.location.pathname;
    const pathParts = currentPath.split("/");

    // 2. Lógica SEO para cambiar la URL física (/es/ruta -> /fr/ruta)
    if (
      pathParts.length > 1 &&
      (pathParts[1] === "es" || pathParts[1] === "fr")
    ) {
      pathParts[1] = lang;
      window.location.href = pathParts.join("/") + window.location.search;
    } else {
      // Si está en la raíz sin idioma, lo mandamos al nuevo idioma
      window.location.href = `/${lang}${currentPath === "/" ? "" : currentPath}`;
    }
  };

  // Asegurarnos de que currentLang es un código válido para el diccionario 'languages'
  const currentLangCode = (
    currentLang in languages ? currentLang : "es"
  ) as Language;

  return (
    <div className="relative group h-full flex items-center">
      {/* Current Language Button */}
      <button
        className="flex items-center justify-center space-x-1 transition-colors hover:text-primary focus:outline-none text-secondary h-full px-2 w-full"
        aria-label="Select language"
      >
        {/* Globe Icon */}
        <svg
          className="w-4 h-4"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="10" />
          <line x1="2" y1="12" x2="22" y2="12" />
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>

        <span className="text-[15px] font-medium">
          {languages[currentLangCode]}
        </span>

        {/* Flecha unificada */}
        <span className="transform transition-transform duration-300 group-hover:rotate-180 text-[10px] mt-0.5 ml-1">
          ▼
        </span>
      </button>

      {/* Dropdown Menu Unificado */}
      <div className="absolute top-full right-0 w-full min-w-[120px] bg-white rounded-b-xl rounded-t-none shadow-xl border border-gray-100 border-t-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-0 p-0 z-50 -mt-[1px] overflow-hidden">
        <div className="flex flex-col">
          {Object.entries(languages).map(([code, name]) => (
            <button
              key={code}
              onClick={() => handleLanguageChange(code as Language)}
              className={`w-full text-left px-5 py-3 transition-all duration-200 text-sm border-l-4 ${
                currentLang === code
                  ? "text-primary bg-blue-50 font-bold border-transparent"
                  : "text-gray-600 hover:text-primary hover:bg-gray-50  border-transparent"
              }`}
            >
              {name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
