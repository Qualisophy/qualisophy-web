import React from "react";
import { ProgramHero } from "../programs/ProgramHero";
import { useTranslations } from "@/hooks/useTranslations"; // Añadimos el hook

export const PartnershipHero: React.FC = () => {
  const t = useTranslations(); // Inicializamos el traductor

  return (
    <ProgramHero
      title={t("partnership.hero.title")}
      highlight={t("partnership.hero.highlight")}
      subtitle={t("partnership.hero.subtitle")}
      backgroundImage="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80"
      ctaText={t("partnership.hero.cta")}
      onCtaClick={() =>
        window.open(
          "https://calendar.app.google/CJSbUs95RLyvXCJZ7",
          "_blank",
          "noopener,noreferrer",
        )
      }
    />
  );
};
