import React from "react";
import { useTranslations } from "@/hooks/useTranslations";

import { ProgramHero } from "@/components/react/programs/ProgramHero";
import { ProgramMethodology } from "@/components/react/programs/ProgramMethodology";
import { ProgramFeatures } from "@/components/react/programs/ProgramFeatures";
import { ReskillingCourses } from "@/components/react/programs/ReskillingCourses";

export const ReskillingContent: React.FC = () => {
  const t = useTranslations();

  const experienceToInnovationData = {
    title: t("reskilling.methodology1.title"),
    description: [
      t("reskilling.methodology1.desc1"),
      t("reskilling.methodology1.desc2"),
    ],
    checks: [
      t("reskilling.methodology1.check1"),
      t("reskilling.methodology1.check2"),
      t("reskilling.methodology1.check3"),
    ],
    imageSrc:
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80",
  };

  const transitionSupportData = {
    title: t("reskilling.methodology2.title"),
    description: [
      t("reskilling.methodology2.desc1"),
      t("reskilling.methodology2.desc2"),
    ],
    checks: [
      t("reskilling.methodology2.check1"),
      t("reskilling.methodology2.check2"),
      t("reskilling.methodology2.check3"),
    ],
    imageSrc:
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80",
  };

  const pillarsData = [
    {
      icon: "supervisor_account",
      title: t("reskilling.pillars.1.title"),
      description: t("reskilling.pillars.1.desc"),
    },
    {
      icon: "terminal",
      title: t("reskilling.pillars.2.title"),
      description: t("reskilling.pillars.2.desc"),
    },
    {
      icon: "domain",
      title: t("reskilling.pillars.3.title"),
      description: t("reskilling.pillars.3.desc"),
    },
    {
      icon: "hub",
      title: t("reskilling.pillars.4.title"),
      description: t("reskilling.pillars.4.desc"),
    },
  ];

  const transformationRoutes = [
    {
      icon: "analytics",
      title: t("reskilling.routes.1.title"),
      description: t("reskilling.routes.1.desc"),
    },
    {
      icon: "campaign",
      title: t("reskilling.routes.2.title"),
      description: t("reskilling.routes.2.desc"),
    },
    {
      icon: "bug_report",
      title: t("reskilling.routes.3.title"),
      description: t("reskilling.routes.3.desc"),
    },
    {
      icon: "view_kanban",
      title: t("reskilling.routes.4.title"),
      description: t("reskilling.routes.4.desc"),
    },
  ];

  return (
    <>
      <ProgramHero
        title={t("reskilling.hero.title")}
        highlight={t("reskilling.hero.highlight")}
        subtitle={t("reskilling.hero.subtitle")}
        backgroundImage="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80"
        ctaText={t("reskilling.hero.cta")}
        hasCourseTree={true}
      />

      <ProgramMethodology
        {...experienceToInnovationData}
        reverse={false}
        variant="white"
      />

      <ProgramMethodology
        {...transitionSupportData}
        reverse={true}
        variant="blue"
      />

      <ProgramFeatures
        title={t("reskilling.pillars.title")}
        subtitle={t("reskilling.pillars.subtitle")}
        features={pillarsData}
        variant="light"
        layout="cards"
      />

      <ProgramFeatures
        title={t("reskilling.routes.title")}
        subtitle={t("reskilling.routes.subtitle")}
        features={transformationRoutes}
        variant="dark"
        layout="grid4"
      />

      {/* Si ReskillingCourses tiene textos hardcodeados, recuerda que habrá que añadirles el hook useTranslations por dentro de ese componente en el futuro */}
      <ReskillingCourses />
    </>
  );
};
