import React from "react";
import { useTranslations } from "@/hooks/useTranslations";

import { ProgramHero } from "@/components/react/programs/ProgramHero";
import { ProgramMethodology } from "@/components/react/programs/ProgramMethodology";
import { ProgramFeatures } from "@/components/react/programs/ProgramFeatures";
import { ProgramCurriculum } from "@/components/react/programs/ProgramCurriculum";
import { ProgramCTA } from "@/components/react/programs/ProgramCTA";

import { TalentReality } from "@/components/react/talent/TalentReality";
import { TalentBarriers } from "@/components/react/talent/TalentBarriers";
import { TalentImpact } from "@/components/react/talent/TalentImpact";
import { LegalCompliance } from "@/components/react/talent/LegalCompliance";
import { SocialImpactQuote } from "@/components/react/talent/SocialImpactQuote";

export const MigrantTalentContent: React.FC = () => {
  const t = useTranslations();

  const realityStats = [
    {
      value: "54%",
      label: t("migrant.stats.1.label"),
      description: t("migrant.stats.1.desc"),
      icon: "school",
      colorClass: "text-primary",
    },
    {
      value: "12,7%",
      label: t("migrant.stats.2.label"),
      description: t("migrant.stats.2.desc"),
      icon: "work_off",
      colorClass: "text-primary",
    },
    {
      value: "1%",
      label: t("migrant.stats.3.label"),
      description: t("migrant.stats.3.desc"),
      icon: "savings",
      colorClass: "text-primary",
    },
  ];

  const barrierList = [
    {
      icon: "gavel",
      title: t("migrant.barriers.1.title"),
      description: t("migrant.barriers.1.desc"),
    },
    {
      icon: "description",
      title: t("migrant.barriers.2.title"),
      description: t("migrant.barriers.2.desc"),
    },
    {
      icon: "trending_down",
      title: t("migrant.barriers.3.title"),
      description: t("migrant.barriers.3.desc"),
    },
  ];

  const impactList = [
    t("migrant.impact.1"),
    t("migrant.impact.2"),
    t("migrant.impact.3"),
    t("migrant.impact.4"),
  ];

  const legalItems = [
    {
      percentage: 0,
      label: t("migrant.legal.1.label"),
      description: t("migrant.legal.1.desc"),
    },
    {
      percentage: 100,
      label: t("migrant.legal.2.label"),
      description: t("migrant.legal.2.desc"),
    },
  ];

  const strategyTraining = {
    title: t("migrant.strategy1.title"),
    description: [t("migrant.strategy1.desc1"), t("migrant.strategy1.desc2")],
    checks: [
      t("migrant.strategy1.check1"),
      t("migrant.strategy1.check2"),
      t("migrant.strategy1.check3"),
    ],
    imageSrc:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80",
  };

  const strategyAccess = [
    {
      icon: "verified",
      title: t("migrant.strategy2.1.title"),
      description: t("migrant.strategy2.1.desc"),
    },
    {
      icon: "psychology",
      title: t("migrant.strategy2.2.title"),
      description: t("migrant.strategy2.2.desc"),
    },
    {
      icon: "hub",
      title: t("migrant.strategy2.3.title"),
      description: t("migrant.strategy2.3.desc"),
    },
    {
      icon: "translate",
      title: t("migrant.strategy2.4.title"),
      description: t("migrant.strategy2.4.desc"),
    },
  ];

  const itinerarySteps = [
    {
      stepNumber: 1,
      title: t("migrant.curriculum.1.title"),
      description: t("migrant.curriculum.1.desc"),
    },
    {
      stepNumber: 2,
      title: t("migrant.curriculum.2.title"),
      description: t("migrant.curriculum.2.desc"),
    },
    {
      stepNumber: 3,
      title: t("migrant.curriculum.3.title"),
      description: t("migrant.curriculum.3.desc"),
    },
    {
      stepNumber: 4,
      title: t("migrant.curriculum.4.title"),
      description: t("migrant.curriculum.4.desc"),
    },
  ];

  const socialPillars = [
    {
      icon: "business",
      title: t("migrant.quote.p1.title"),
      description: t("migrant.quote.p1.desc"),
    },
    {
      icon: "handshake",
      title: t("migrant.quote.p2.title"),
      description: t("migrant.quote.p2.desc"),
    },
    {
      icon: "public",
      title: t("migrant.quote.p3.title"),
      description: t("migrant.quote.p3.desc"),
    },
  ];

  const ctaButtons = [
    {
      label: t("migrant.cta.btn1"),
      href: "/contact?type=company",
      variant: "solid" as const,
    },
    {
      label: t("migrant.cta.btn2"),
      href: "/contact?type=candidate",
      variant: "outline" as const,
    },
  ];

  return (
    <>
      <ProgramHero
        title={t("migrant.hero.title")}
        highlight={t("migrant.hero.highlight")}
        subtitle={t("migrant.hero.subtitle")}
        backgroundImage="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80"
        ctaText={t("migrant.hero.cta")}
        scrollToId="itinerario"
      />

      <TalentReality
        title={t("migrant.reality.title")}
        subtitle={t("migrant.reality.subtitle")}
        description={t("migrant.reality.desc")}
        stats={realityStats}
      />

      <TalentBarriers
        title={t("migrant.barriers.title")}
        description={t("migrant.barriers.desc")}
        barriers={barrierList}
      />

      <TalentImpact
        title={t("migrant.impact.title")}
        description={t("migrant.impact.desc")}
        items={impactList}
        imageSrc="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80"
      />

      <LegalCompliance
        title={t("migrant.legal.title")}
        items={legalItems}
        footerText={t("migrant.legal.footer")}
      />

      <ProgramMethodology {...strategyTraining} variant="white" />

      <ProgramFeatures
        title={t("migrant.strategy2.title")}
        subtitle={t("migrant.strategy2.subtitle")}
        features={strategyAccess}
        variant="dark"
        layout="grid4"
      />

      <div id="itinerario" className="scroll-mt-32">
        <ProgramCurriculum
          title={t("migrant.curriculum.title")}
          subtitle={t("migrant.curriculum.subtitle")}
          steps={itinerarySteps}
          variant="white"
        />
      </div>

      <SocialImpactQuote
        title={t("migrant.quote.title")}
        subtitle={t("migrant.quote.subtitle")}
        pillars={socialPillars}
        quoteText={t("migrant.quote.text")}
        quoteHighlight={t("migrant.quote.highlight")}
        quoteEnd={t("migrant.quote.end")}
      />

      <div id="program-cta">
        <ProgramCTA
          title={t("migrant.cta.title")}
          description={t("migrant.cta.desc")}
          buttons={ctaButtons}
          variant="white"
        />
      </div>
    </>
  );
};
