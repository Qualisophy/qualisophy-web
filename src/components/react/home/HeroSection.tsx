import React, { useState } from "react";
import { ProgramsModal } from "@/components/react/shared/ProgramsModal";

interface HeroSectionProps {
  data: any;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ data }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Imagen de fondo
  const bgImage =
    "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80";

  return (
    <>
      <section className="relative w-full overflow-hidden min-h-[600px] flex items-center">
        {/* 1. Capa de Imagen de Fondo */}
        <div className="absolute inset-0 z-0">
          <img
            src={bgImage}
            alt="Equipo colaborando en tecnología"
            className="w-full h-full object-cover"
            loading="eager"
          />
        </div>

        {/* 2. Capa de Overlay Azul */}
        <div className="absolute inset-0 z-0 bg-secondary/90 mix-blend-multiply" />

        {/* 3. Contenido */}
        <div className="relative z-10 layout-container flex flex-col items-center justify-center w-full px-6 lg:px-8 py-20 mx-auto max-w-7xl">
          <div className="max-w-4xl text-center flex flex-col gap-6">
            <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight font-heading drop-shadow-md whitespace-pre-line">
              {data.title1}
              <span className="text-primary">{data.titleHighlight1}</span>
              {data.title2}
              <span className="text-primary">{data.titleHighlight2}</span>
            </h1>

            <p
              className="text-gray-100 text-lg md:text-xl font-light leading-relaxed max-w-3xl mx-auto font-primary drop-shadow-sm"
              dangerouslySetInnerHTML={{ __html: data.subtitle }}
            />

            <div className="flex flex-wrap justify-center gap-4 mt-4 font-primary">
              <button
                onClick={() => setIsModalOpen(true)}
                className="bg-primary hover:bg-primary/90 text-white font-bold py-3 px-8 rounded-lg shadow-lg transition-all transform text-base border border-transparent cursor-pointer"
              >
                {data.btnPrograms}
              </button>
              <a
                href="/contact"
                className="bg-transparent border-2 border-white hover:bg-white hover:text-secondary text-white font-bold py-3 px-8 rounded-lg transition-all text-base backdrop-blur-sm"
              >
                {data.btnContact}
              </a>
            </div>
          </div>
        </div>
      </section>

      <ProgramsModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};
