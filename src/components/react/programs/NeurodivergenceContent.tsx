import React from "react";
import { useTranslations } from "@/hooks/useTranslations";

// Importación de Componentes
import { ProgramHero } from "@/components/react/programs/ProgramHero";
import { ProgramMethodology } from "@/components/react/programs/ProgramMethodology";
import { ProgramFeatures } from "@/components/react/programs/ProgramFeatures";
import { ProgramCurriculum } from "@/components/react/programs/ProgramCurriculum";
import { ProgramCTA } from "@/components/react/programs/ProgramCTA";

// Componentes de Talento
import { TalentReality } from "@/components/react/talent/TalentReality";
import { TalentBarriers } from "@/components/react/talent/TalentBarriers";
import { TalentImpact } from "@/components/react/talent/TalentImpact";
import { LegalCompliance } from "@/components/react/talent/LegalCompliance";
import { SocialImpactQuote } from "@/components/react/talent/SocialImpactQuote";

export const NeurodivergenceContent: React.FC = () => {
  const t = useTranslations();

  const realityStats = [
    {
      value: "85%",
      label: t("neuro.stats.1.label"),
      description: t("neuro.stats.1.desc"),
      icon: "trending_down",
      colorClass: "text-primary",
    },
    {
      value: "34%",
      label: t("neuro.stats.2.label"),
      description: t("neuro.stats.2.desc"),
      icon: "person_off",
      colorClass: "text-primary",
    },
    {
      value: "50%",
      label: t("neuro.stats.3.label"),
      description: t("neuro.stats.3.desc"),
      icon: "gavel",
      colorClass: "text-primary",
    },
  ];

  const barrierList = [
    {
      icon: "block",
      title: t("neuro.barriers.1.title"),
      description: t("neuro.barriers.1.desc"),
    },
    {
      icon: "engineering",
      title: t("neuro.barriers.2.title"),
      description: t("neuro.barriers.2.desc"),
    },
    {
      icon: "trending_flat",
      title: t("neuro.barriers.3.title"),
      description: t("neuro.barriers.3.desc"),
    },
  ];

  const impactList = [
    t("neuro.impact.1"),
    t("neuro.impact.2"),
    t("neuro.impact.3"),
    t("neuro.impact.4"),
  ];

  const legalItems = [
    {
      percentage: 2,
      label: t("neuro.legal.1.label"),
      description: t("neuro.legal.1.desc"),
    },
    {
      percentage: 50,
      label: t("neuro.legal.2.label"),
      description: t("neuro.legal.2.desc"),
    },
  ];

  const dualTrainingData = {
    title: t("neuro.strategy1.title"),
    description: [t("neuro.strategy1.desc1"), t("neuro.strategy1.desc2")],
    checks: [
      t("neuro.strategy1.check1"),
      t("neuro.strategy1.check2"),
      t("neuro.strategy1.check3"),
    ],
    imageSrc:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop",
  };

  const strategyFeatures = [
    {
      icon: "handshake",
      title: t("neuro.strategy2.1.title"),
      description: t("neuro.strategy2.1.desc"),
    },
    {
      icon: "compass_calibration",
      title: t("neuro.strategy2.2.title"),
      description: t("neuro.strategy2.2.desc"),
    },
    {
      icon: "diversity_3",
      title: t("neuro.strategy2.3.title"),
      description: t("neuro.strategy2.3.desc"),
    },
    {
      icon: "psychology",
      title: t("neuro.strategy2.4.title"),
      description: t("neuro.strategy2.4.desc"),
    },
  ];

  const itinerarySteps = [
    {
      stepNumber: 1,
      title: t("neuro.curriculum.1.title"),
      description: t("neuro.curriculum.1.desc"),
    },
    {
      stepNumber: 2,
      title: t("neuro.curriculum.2.title"),
      description: t("neuro.curriculum.2.desc"),
    },
    {
      stepNumber: 3,
      title: t("neuro.curriculum.3.title"),
      description: t("neuro.curriculum.3.desc"),
    },
    {
      stepNumber: 4,
      title: t("neuro.curriculum.4.title"),
      description: t("neuro.curriculum.4.desc"),
    },
  ];

  const socialPillars = [
    {
      icon: "business",
      title: t("neuro.quote.p1.title"),
      description: t("neuro.quote.p1.desc"),
    },
    {
      icon: "handshake",
      title: t("neuro.quote.p2.title"),
      description: t("neuro.quote.p2.desc"),
    },
    {
      icon: "public",
      title: t("neuro.quote.p3.title"),
      description: t("neuro.quote.p3.desc"),
    },
  ];

  const ctaButtons = [
    {
      label: t("neuro.cta.btn1"),
      href: "/contact?type=company",
      variant: "solid" as const,
    },
    {
      label: t("neuro.cta.btn2"),
      href: "/contact?type=candidate",
      variant: "outline" as const,
    },
  ];

  return (
    <>
      <ProgramHero
        title={t("neuro.hero.title")}
        highlight={t("neuro.hero.highlight")}
        subtitle={t("neuro.hero.subtitle")}
        backgroundImage="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2069&auto=format&fit=crop"
        ctaText={t("neuro.hero.cta")}
        scrollToId="itinerario"
      />

      <TalentReality
        title={t("neuro.reality.title")}
        subtitle={t("neuro.reality.subtitle")}
        description={t("neuro.reality.desc")}
        stats={realityStats}
      />

      <TalentBarriers
        title={t("neuro.barriers.title")}
        description={t("neuro.barriers.desc")}
        barriers={barrierList}
      />

      <TalentImpact
        title={t("neuro.impact.title")}
        description={t("neuro.impact.desc")}
        items={impactList}
      />

      <LegalCompliance
        title={t("neuro.legal.title")}
        items={legalItems}
        footerText={t("neuro.legal.footer")}
      />

      <ProgramMethodology {...dualTrainingData} variant="white" />

      <ProgramFeatures
        title={t("neuro.strategy2.title")}
        subtitle={t("neuro.strategy2.subtitle")}
        features={strategyFeatures}
        variant="dark"
        layout="grid4"
      />

      <div id="itinerario" className="scroll-mt-32">
        <ProgramCurriculum
          title={t("neuro.curriculum.title")}
          subtitle={t("neuro.curriculum.subtitle")}
          steps={itinerarySteps}
          variant="white"
        />
      </div>

      <SocialImpactQuote
        title={t("neuro.quote.title")}
        subtitle={t("neuro.quote.subtitle")}
        pillars={socialPillars}
        quoteText={t("neuro.quote.text")}
        quoteHighlight={t("neuro.quote.highlight")}
        quoteEnd={t("neuro.quote.end")}
      />

      <div id="program-cta">
        <ProgramCTA
          variant="white"
          title={t("neuro.cta.title")}
          description={t("neuro.cta.desc")}
          buttons={ctaButtons}
        />
      </div>
    </>
  );
};
