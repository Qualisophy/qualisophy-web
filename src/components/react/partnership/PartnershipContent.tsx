import React from "react";
import { useTranslations } from "@/hooks/useTranslations";

import { ProgramMethodology } from "@/components/react/programs/ProgramMethodology";
import { ProgramFeatures } from "@/components/react/programs/ProgramFeatures";
import { ProgramCurriculum } from "@/components/react/programs/ProgramCurriculum";

import { PartnershipHero } from "@/components/react/partnership/PartnershipHero";
import { PartnershipCTA } from "@/components/react/partnership/PartnershipCTA";

export const PartnershipContent: React.FC = () => {
  const t = useTranslations();

  const valuePropData = {
    title: t("partnership.value.title"),
    description: [t("partnership.value.desc1"), t("partnership.value.desc2")],
    checks: [
      t("partnership.value.check1"),
      t("partnership.value.check2"),
      t("partnership.value.check3"),
    ],
    imageSrc:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80",
  };

  const collaborationModels = [
    {
      icon: "person_search",
      title: t("partnership.models.1.title"),
      description: t("partnership.models.1.desc"),
    },
    {
      icon: "corporate_fare",
      title: t("partnership.models.2.title"),
      description: t("partnership.models.2.desc"),
    },
    {
      icon: "volunteer_activism",
      title: t("partnership.models.3.title"),
      description: t("partnership.models.3.desc"),
    },
    {
      icon: "domain",
      title: t("partnership.models.4.title"),
      description: t("partnership.models.4.desc"),
    },
  ];

  const partnershipProcess = [
    {
      stepNumber: 1,
      title: t("partnership.roadmap.1.title"),
      description: t("partnership.roadmap.1.desc"),
    },
    {
      stepNumber: 2,
      title: t("partnership.roadmap.2.title"),
      description: t("partnership.roadmap.2.desc"),
    },
    {
      stepNumber: 3,
      title: t("partnership.roadmap.3.title"),
      description: t("partnership.roadmap.3.desc"),
    },
  ];

  return (
    <>
      <PartnershipHero />

      <ProgramMethodology {...valuePropData} reverse={false} variant="white" />

      <ProgramFeatures
        title={t("partnership.models.title")}
        subtitle={t("partnership.models.subtitle")}
        features={collaborationModels}
        variant="dark"
        layout="pillars"
      />

      <ProgramCurriculum
        title={t("partnership.roadmap.title")}
        subtitle={t("partnership.roadmap.subtitle")}
        steps={partnershipProcess}
        variant="white"
      />

      <PartnershipCTA variant="gray" />
    </>
  );
};
