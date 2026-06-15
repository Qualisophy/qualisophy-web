import React from "react";
// Importamos el fondo Mesh reutilizable
import { ParticleMeshBackground } from "@/components/react/shared/ParticleMeshBackground";

export interface CTAButton {
  label: string;
  href: string;
  // 1. Añadimos la nueva variante a la interfaz
  variant: "solid" | "outline" | "solid-secondary";
}

interface ProgramCTAProps {
  variant?: "white" | "blue";
  title?: string;
  description?: string;
  buttons?: CTAButton[];
}

export const ProgramCTA: React.FC<ProgramCTAProps> = ({
  variant = "white",
  title = "¿Listo para dar el siguiente paso?",
  description = "Explora nuestros programas detallados o agenda una consulta personalizada con nuestro equipo de orientación.",
  buttons,
}) => {
  const isGrayVariant = variant === "blue";

  // Botones por defecto si no se pasan
  const defaultButtons: CTAButton[] = [
    { label: "Agendar Consulta", href: "/contact", variant: "solid" },
    { label: "Ver Programas Arriba", href: "#", variant: "outline" },
  ];

  const activeButtons = buttons || defaultButtons;

  // 2. Función auxiliar para manejar las clases de cada variante de forma más limpia
  const getVariantClasses = (btnVariant: CTAButton["variant"]) => {
    switch (btnVariant) {
      case "solid-secondary":
        return "bg-secondary text-white shadow-lg hover:bg-secondary/90";
      case "solid":
        return "bg-primary text-white shadow-lg hover:bg-primary/90";
      case "outline":
      default:
        return "border-2 border-gray-300 text-secondary hover:border-primary hover:text-primary bg-white/50 backdrop-blur-sm";
    }
  };

  return (
    <section
      className={`
        px-6 py-24 lg:px-12 flex justify-center text-center w-full transition-colors duration-300 relative overflow-hidden
        ${isGrayVariant ? "bg-gray-50 border-t border-gray-100" : "bg-white"}
      `}
    >
      {/* FONDO MESH: Solo si el fondo es blanco */}
      {!isGrayVariant && (
        <div className="absolute inset-0 z-0 opacity-60 pointer-events-none">
          <ParticleMeshBackground />
        </div>
      )}

      <div className="max-w-4xl w-full flex flex-col items-center gap-8 relative z-10">
        <h2 className="text-3xl font-bold leading-tight md:text-4xl lg:text-5xl font-heading text-secondary">
          {title}
        </h2>

        <p className="text-lg lg:text-xl font-normal leading-relaxed font-primary text-gray-600">
          {description}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mt-4 w-full sm:w-auto flex-wrap justify-center">
          {activeButtons.map((btn, idx) =>
            btn.href === "#" ? (
              <button
                key={idx}
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                // 3. Aplicamos la función auxiliar aquí
                className={`flex items-center justify-center rounded-xl h-14 px-8 text-lg font-bold transition-all min-w-[200px] ${getVariantClasses(btn.variant)}`}
              >
                {btn.label}
              </button>
            ) : (
              <a
                key={idx}
                href={btn.href}
                // 4. Y aplicamos la función auxiliar también aquí
                className={`flex items-center justify-center rounded-xl h-14 px-8 text-lg font-bold transition-all min-w-[200px] ${getVariantClasses(btn.variant)}`}
              >
                {btn.label}
              </a>
            ),
          )}
        </div>
      </div>
    </section>
  );
};
