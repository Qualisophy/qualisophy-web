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

export const SocialImpactContent: React.FC = () => {
  const t = useTranslations();

  const realityStats = [
    {
      value: "26,5%",
      label: t("social.stats.1.label"),
      description: t("social.stats.1.desc"),
      icon: "home_work",
      colorClass: "text-primary",
    },
    {
      value: "13,7%",
      label: t("social.stats.2.label"),
      description: t("social.stats.2.desc"),
      icon: "payments",
      colorClass: "text-primary",
    },
    {
      value: t("social.stats.3.value"),
      label: t("social.stats.3.label"),
      description: t("social.stats.3.desc"),
      icon: "groups",
      colorClass: "text-primary",
    },
  ];

  const barrierList = [
    {
      icon: "lock_clock",
      title: t("social.barriers.1.title"),
      description: t("social.barriers.1.desc"),
    },
    {
      icon: "family_restroom",
      title: t("social.barriers.2.title"),
      description: t("social.barriers.2.desc"),
    },
    {
      icon: "school",
      title: t("social.barriers.3.title"),
      description: t("social.barriers.3.desc"),
    },
  ];

  const impactList = [
    t("social.impact.1"),
    t("social.impact.2"),
    t("social.impact.3"),
    t("social.impact.4"),
  ];

  const legalItems = [
    {
      percentage: 100,
      label: t("social.legal.1.label"),
      description: t("social.legal.1.desc"),
    },
    {
      percentage: 100,
      label: t("social.legal.2.label"),
      description: t("social.legal.2.desc"),
    },
  ];

  const strategySkills = {
    title: t("social.strategy1.title"),
    description: [t("social.strategy1.desc1"), t("social.strategy1.desc2")],
    checks: [
      t("social.strategy1.check1"),
      t("social.strategy1.check2"),
      t("social.strategy1.check3"),
    ],
    imageSrc:
      "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80",
  };

  const strategyAccess = [
    {
      icon: "support",
      title: t("social.strategy2.1.title"),
      description: t("social.strategy2.1.desc"),
    },
    {
      icon: "handshake",
      title: t("social.strategy2.2.title"),
      description: t("social.strategy2.2.desc"),
    },
    {
      icon: "security",
      title: t("social.strategy2.3.title"),
      description: t("social.strategy2.3.desc"),
    },
    {
      icon: "computer",
      title: t("social.strategy2.4.title"),
      description: t("social.strategy2.4.desc"),
    },
  ];

  const itinerarySteps = [
    {
      stepNumber: 1,
      title: t("social.curriculum.1.title"),
      description: t("social.curriculum.1.desc"),
    },
    {
      stepNumber: 2,
      title: t("social.curriculum.2.title"),
      description: t("social.curriculum.2.desc"),
    },
    {
      stepNumber: 3,
      title: t("social.curriculum.3.title"),
      description: t("social.curriculum.3.desc"),
    },
    {
      stepNumber: 4,
      title: t("social.curriculum.4.title"),
      description: t("social.curriculum.4.desc"),
    },
  ];

  const socialPillars = [
    {
      icon: "business",
      title: t("social.quote.p1.title"),
      description: t("social.quote.p1.desc"),
    },
    {
      icon: "handshake",
      title: t("social.quote.p2.title"),
      description: t("social.quote.p2.desc"),
    },
    {
      icon: "public",
      title: t("social.quote.p3.title"),
      description: t("social.quote.p3.desc"),
    },
  ];

  const ctaButtons = [
    {
      label: t("social.cta.btn1"),
      href: "/contact?type=company",
      variant: "solid" as const,
    },
    {
      label: t("social.cta.btn2"),
      href: "/contact?type=candidate",
      variant: "outline" as const,
    },
  ];

  return (
    <>
      <ProgramHero
        title={t("social.hero.title")}
        highlight={t("social.hero.highlight")}
        subtitle={t("social.hero.subtitle")}
        backgroundImage="https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&fit=crop&q=80"
        ctaText={t("social.hero.cta")}
        scrollToId="itinerario"
      />

      <TalentReality
        title={t("social.reality.title")}
        subtitle={t("social.reality.subtitle")}
        description={t("social.reality.desc")}
        stats={realityStats}
      />

      <TalentBarriers
        title={t("social.barriers.title")}
        description={t("social.barriers.desc")}
        barriers={barrierList}
      />

      <TalentImpact
        title={t("social.impact.title")}
        description={t("social.impact.desc")}
        items={impactList}
        imageSrc="https://images.unsplash.com/photo-1455849318743-b2233052fcff?auto=format&fit=crop&q=80"
      />

      <LegalCompliance
        title={t("social.legal.title")}
        items={legalItems}
        footerText={t("social.legal.footer")}
      />

      <ProgramMethodology {...strategySkills} variant="white" />

      <ProgramFeatures
        title={t("social.strategy2.title")}
        subtitle={t("social.strategy2.subtitle")}
        features={strategyAccess}
        variant="dark"
        layout="grid4"
      />

      <div id="itinerario" className="scroll-mt-32">
        <ProgramCurriculum
          title={t("social.curriculum.title")}
          subtitle={t("social.curriculum.subtitle")}
          steps={itinerarySteps}
          variant="white"
        />
      </div>

      <SocialImpactQuote
        title={t("social.quote.title")}
        subtitle={t("social.quote.subtitle")}
        pillars={socialPillars}
        quoteText={t("social.quote.text")}
        quoteHighlight={t("social.quote.highlight")}
        quoteEnd={t("social.quote.end")}
      />

      <div id="program-cta">
        <ProgramCTA
          variant="white"
          title={t("social.cta.title")}
          description={t("social.cta.desc")}
          buttons={ctaButtons}
        />
      </div>
    </>
  );
};
