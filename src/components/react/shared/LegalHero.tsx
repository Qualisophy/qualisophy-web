import React from "react";

interface LegalHeroProps {
  title1: string;
  titleHighlight: string;
  date: string;
}

export const LegalHero: React.FC<LegalHeroProps> = ({ title1, titleHighlight, date }) => {
  // Misma imagen que en HeroSection.tsx
  const bgImage =
    "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80";

  return (
    <section className="relative w-full overflow-hidden min-h-[600px] flex items-center">
      {/* 1. Capa de Imagen de Fondo */}
      <div className="absolute inset-0 z-0">
        <img
          src={bgImage}
          alt="Fondo legal"
          className="w-full h-full object-cover"
          loading="eager"
        />
      </div>

      {/* 2. Capa de Overlay Azul (Idéntico a la homepage) */}
      <div className="absolute inset-0 z-0 bg-secondary/90 mix-blend-multiply" />

      {/* 3. Contenido */}
      <div className="relative z-10 layout-container flex flex-col items-center justify-center w-full px-6 lg:px-8 py-20 mx-auto max-w-7xl">
        <div className="max-w-4xl text-center flex flex-col gap-6">
          <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight font-heading drop-shadow-md capitalize">
            {title1} <span className="text-primary">{titleHighlight}</span>
          </h1>

          <p className="text-gray-100 text-lg md:text-xl font-light leading-relaxed max-w-2xl mx-auto font-primary drop-shadow-sm italic">
            Fecha de última actualización: {date}
          </p>
        </div>
      </div>
    </section>
  );
};