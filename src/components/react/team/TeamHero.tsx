import React from "react";
import { useTranslations } from "@/hooks/useTranslations";

export const TeamHero: React.FC = () => {
  const t = useTranslations();
  const heroBg =
    "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80";

  return (
    <section className="relative w-full overflow-hidden min-h-[600px] flex items-center justify-center">
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="Equipo Qualisophy trabajando"
          className="w-full h-full object-cover"
          loading="eager"
        />
      </div>
      <div className="absolute inset-0 z-0 bg-secondary/90 mix-blend-multiply"></div>

      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto flex flex-col gap-6">
          <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight font-heading drop-shadow-md">
            {t("team.hero.title1")}{" "}
            <span className="text-primary">{t("team.hero.title2")}</span>
          </h1>
          <p className="text-gray-100 text-lg md:text-xl font-light leading-relaxed font-primary drop-shadow-sm max-w-2xl mx-auto">
            {t("team.hero.subtitle")}
          </p>
        </div>
      </div>
    </section>
  );
};
