import React from "react";
import { useTranslations } from "@/hooks/useTranslations";

interface CourseGridCardProps {
  title: string;
  description: string;
  imageSrc: string;
  href: string;
  level?: "Principiante" | "Intermedio" | "Avanzado";
  duration?: string;
  modality?: "Online" | "Presencial" | "Híbrido";
  category?: string;
}

export const CourseGridCard: React.FC<CourseGridCardProps> = ({
  title,
  description,
  imageSrc,
  href,
  level = "Intermedio",
  duration = "40h",
  modality = "Online",
  category,
}) => {
  const t = useTranslations();

  // Traducción con fallback para que NUNCA se quede en blanco (que es lo que causaba que la etiqueta colapsara a una rayita)
  const translatedLevel =
    level === "Principiante"
      ? t("course.level.beginner" as any) || "Principiante"
      : level === "Intermedio"
        ? t("course.level.intermediate" as any) || "Intermedio"
        : t("course.level.advanced" as any) || "Avanzado";

  const translatedModality =
    modality === "Online"
      ? t("course.modality.online" as any) || "Online"
      : modality === "Presencial"
        ? t("course.modality.presential" as any) || "Presencial"
        : t("course.modality.hybrid" as any) || "Híbrido";

  // Forzamos la etiqueta de categoría a las 5 opciones exactas que me has pedido
  const getBadgeCategory = (cat?: string) => {
    if (!cat) return "";
    const lowerCat = cat.toLowerCase();
    if (
      lowerCat.includes("qa") ||
      lowerCat.includes("testing") ||
      lowerCat.includes("automatización") ||
      lowerCat.includes("software")
    )
      return "QA";
    if (
      lowerCat.includes("data") ||
      lowerCat.includes("bi") ||
      lowerCat.includes("power") ||
      lowerCat.includes("sql")
    )
      return "Data & BI";
    if (
      lowerCat.includes("herramientas") ||
      lowerCat.includes("tools") ||
      lowerCat.includes("excel") ||
      lowerCat.includes("ofimática")
    )
      return "Herramientas";
    if (
      lowerCat.includes("devops") ||
      lowerCat.includes("gitlab") ||
      lowerCat.includes("ci/cd")
    )
      return "DevOps";
    if (
      lowerCat.includes("agile") ||
      lowerCat.includes("scrum") ||
      lowerCat.includes("liderazgo")
    )
      return "Agile";
    return cat;
  };

  const finalCategory = getBadgeCategory(category);

  return (
    <a
      href={href}
      className="group flex flex-col bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 h-full"
    >
      <div className="relative h-48 w-full overflow-hidden">
        <img
          src={imageSrc}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-60" />

        {/* Etiqueta superior izquierda: RESTAURADA (Fondo blanco, sin punto, texto azul corporativo) */}
        {finalCategory && (
          <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-secondary text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
            {finalCategory}
          </span>
        )}

        {/* Etiqueta inferior derecha: RESTAURADA (Verde, Amarillo o Azul según el nivel original) */}
        <span
          className={`absolute bottom-4 right-4 text-xs font-bold px-3 py-1 rounded-lg text-white shadow-sm 
          ${level === "Principiante" ? "bg-emerald-500" : level === "Intermedio" ? "bg-amber-500" : "bg-primary"}`}
        >
          {translatedLevel}
        </span>
      </div>

      <div className="flex flex-col flex-1 p-6">
        {/* Título SIN line-clamp */}
        <h3 className="text-xl font-bold font-heading text-secondary mb-3 group-hover:text-primary transition-colors leading-snug">
          {title}
        </h3>

        {/* Descripción SIN line-clamp para que quepa todo */}
        <p className="text-gray-500 font-primary text-sm mb-6 flex-1 leading-relaxed">
          {description}
        </p>

        {/* Footer de la tarjeta: RESTAURADO */}
        <div className="border-t border-gray-100 pt-4 mt-auto">
          <div className="flex items-center justify-between text-gray-500 text-xs font-medium">
            <div className="flex items-center gap-1.5">
              <span className="material-symbols-outlined text-lg text-primary">
                schedule
              </span>
              <span>{duration}</span>
            </div>

            <div className="flex items-center gap-1.5">
              <span className="material-symbols-outlined text-lg text-primary">
                wifi
              </span>
              <span>{translatedModality}</span>
            </div>

            <div className="flex items-center gap-1 text-secondary font-bold group-hover:text-primary transition-colors ">
              {t("course.grid.view" as any) || "Ver"}
              <span className="material-symbols-outlined text-sm">
                arrow_forward_ios
              </span>
            </div>
          </div>
        </div>
      </div>
    </a>
  );
};
