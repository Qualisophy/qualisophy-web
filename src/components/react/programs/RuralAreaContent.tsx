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
import { SpainMap } from "@/components/react/talent/SpainMap";

interface RuralAreaContentProps {
  impactImgSrc: string;
}

export const RuralAreaContent: React.FC<RuralAreaContentProps> = ({
  impactImgSrc,
}) => {
  const t = useTranslations();

  const realityStats = [
    {
      value: "15,5%",
      label: t("rural.stats.1.label"),
      description: t("rural.stats.1.desc"),
      icon: "trending_down",
      colorClass: "text-primary",
    },
    {
      value: "83,8%",
      label: t("rural.stats.2.label"),
      description: t("rural.stats.2.desc"),
      icon: "public",
      colorClass: "text-primary",
    },
    {
      value: "13",
      label: t("rural.stats.3.label"),
      description: t("rural.stats.3.desc"),
      icon: "location_off",
      colorClass: "text-primary",
    },
  ];

  const espanaVaciadaFeatures = [
    {
      icon: "push_pin",
      title: t("rural.vaciada.f1.title"),
      description: t("rural.vaciada.f1.desc"),
    },
    {
      icon: "holiday_village",
      title: t("rural.vaciada.f2.title"),
      description: t("rural.vaciada.f2.desc"),
    },
    {
      icon: "trending_down",
      title: t("rural.vaciada.f3.title"),
      description: t("rural.vaciada.f3.desc"),
    },
    {
      icon: "computer",
      title: t("rural.vaciada.f4.title"),
      description: t("rural.vaciada.f4.desc"),
    },
  ];

  const barrierList = [
    {
      icon: "wifi_off",
      title: t("rural.barriers.1.title"),
      description: t("rural.barriers.1.desc"),
    },
    {
      icon: "business_center",
      title: t("rural.barriers.2.title"),
      description: t("rural.barriers.2.desc"),
    },
    {
      icon: "school",
      title: t("rural.barriers.3.title"),
      description: t("rural.barriers.3.desc"),
    },
    {
      icon: "location_city",
      title: t("rural.barriers.4.title"),
      description: t("rural.barriers.4.desc"),
    },
  ];

  const impactList = [
    t("rural.impact.1"),
    t("rural.impact.2"),
    t("rural.impact.3"),
    t("rural.impact.4"),
    t("rural.impact.5"),
  ];

  const legalItems = [
    {
      percentage: 90,
      label: t("rural.legal.1.label"),
      description: t("rural.legal.1.desc"),
    },
    {
      percentage: 30,
      label: t("rural.legal.2.label"),
      description: t("rural.legal.2.desc"),
    },
  ];

  const strategy1Data = {
    title: t("rural.strategy1.title"),
    description: [t("rural.strategy1.desc1"), t("rural.strategy1.desc2")],
    checks: [
      t("rural.strategy1.check1"),
      t("rural.strategy1.check2"),
      t("rural.strategy1.check3"),
      t("rural.strategy1.check4"),
    ],
    imageSrc:
      "https://images.unsplash.com/photo-1544377193-33dcf4d68fb5?q=80&w=2000&auto=format&fit=crop",
  };

  const strategy2Features = [
    {
      icon: "handshake",
      title: t("rural.strategy2.1.title"),
      description: t("rural.strategy2.1.desc"),
    },
    {
      icon: "groups",
      title: t("rural.strategy2.2.title"),
      description: t("rural.strategy2.2.desc"),
    },
    {
      icon: "hub",
      title: t("rural.strategy2.3.title"),
      description: t("rural.strategy2.3.desc"),
    },
    {
      icon: "computer",
      title: t("rural.strategy2.4.title"),
      description: t("rural.strategy2.4.desc"),
    },
  ];

  const itinerarySteps = [
    {
      stepNumber: 1,
      title: t("rural.curriculum.1.title"),
      description: t("rural.curriculum.1.desc"),
    },
    {
      stepNumber: 2,
      title: t("rural.curriculum.2.title"),
      description: t("rural.curriculum.2.desc"),
    },
    {
      stepNumber: 3,
      title: t("rural.curriculum.3.title"),
      description: t("rural.curriculum.3.desc"),
    },
    {
      stepNumber: 4,
      title: t("rural.curriculum.4.title"),
      description: t("rural.curriculum.4.desc"),
    },
  ];

  const socialImpactPillars = [
    {
      icon: "business",
      title: t("rural.quote.p1.title"),
      description: t("rural.quote.p1.desc"),
    },
    {
      icon: "public",
      title: t("rural.quote.p2.title"),
      description: t("rural.quote.p2.desc"),
    },
    {
      icon: "diversity_3",
      title: t("rural.quote.p3.title"),
      description: t("rural.quote.p3.desc"),
    },
  ];

  const ctaButtons = [
    {
      label: t("rural.cta.btn1"),
      href: "/contact?type=company-rural",
      variant: "solid" as const,
    },
    {
      label: t("rural.cta.btn2"),
      href: "/contact?type=candidate-rural",
      variant: "outline" as const,
    },
  ];

  return (
    <>
      <ProgramHero
        title={t("rural.hero.title")}
        highlight={t("rural.hero.highlight")}
        subtitle={t("rural.hero.subtitle")}
        backgroundImage="https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2000&auto=format&fit=crop"
        ctaText={t("rural.hero.cta")}
        scrollToId="realidad-territorial"
      />

      <div id="realidad-territorial" className="scroll-mt-20">
        <TalentReality
          title={t("rural.reality.title")}
          subtitle={t("rural.reality.subtitle")}
          description={t("rural.reality.desc")}
          stats={realityStats}
        />
      </div>

      {/* SECCIÓN CUSTOM: LA ESPAÑA VACIADA */}
      <section className="py-24 bg-gray-50 border-t border-gray-100">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-stretch">
            <div className="flex flex-col gap-8 h-full justify-center">
              <div>
                <h2 className="text-3xl font-heading sm:text-4xl font-bold text-secondary mb-6">
                  {t("rural.vaciada.title")}
                </h2>
                <p className="text-lg text-slate-600 font-primary leading-relaxed mb-4">
                  {t("rural.vaciada.p1")}
                </p>
                <p className="text-lg text-slate-600 font-primary leading-relaxed">
                  {t("rural.vaciada.p2")}
                </p>
              </div>
              <div className="grid sm:grid-cols-2 gap-6 mt-4">
                {espanaVaciadaFeatures.map((item, index) => (
                  <div
                    key={index}
                    className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="text-3xl mb-3 text-primary">
                      <span className="material-symbols-outlined">
                        {item.icon}
                      </span>
                    </div>
                    <h4 className="font-bold text-secondary text-lg mb-2">
                      {item.title}
                    </h4>
                    <p className="text-sm text-slate-600">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="w-full h-full flex flex-col justify-center min-h-[500px]">
              <SpainMap />
            </div>
          </div>
        </div>
      </section>

      <div className="bg-white">
        <TalentBarriers
          title={t("rural.barriers.title")}
          description={t("rural.barriers.desc")}
          barriers={barrierList}
          layout="grid2"
        />
      </div>
      <TalentImpact
        title={t("rural.impact.title")}
        description={t("rural.impact.desc")}
        items={impactList}
        imageSrc={impactImgSrc}
      />

      <div className="bg-white border-t border-gray-50">
        <LegalCompliance
          title={t("rural.legal.title")}
          items={legalItems}
          footerText={t("rural.legal.footer")}
          footerSize="large"
        />
      </div>

      <ProgramMethodology {...strategy1Data} variant="blue" />

      <ProgramFeatures
        title={t("rural.strategy2.title")}
        subtitle={t("rural.strategy2.subtitle")}
        features={strategy2Features}
        variant="light"
        layout="grid4"
      />

      <ProgramCurriculum
        title={t("rural.curriculum.title")}
        subtitle={t("rural.curriculum.subtitle")}
        steps={itinerarySteps}
        variant="blue"
      />

      <div className="bg-white border-b border-gray-100">
        <SocialImpactQuote
          title={t("rural.quote.title")}
          subtitle={t("rural.quote.subtitle")}
          pillars={socialImpactPillars}
          quoteText={t("rural.quote.text")}
          quoteHighlight={t("rural.quote.highlight")}
          quoteEnd={t("rural.quote.end")}
        />
      </div>

      <div id="program-cta">
        <ProgramCTA
          variant="white"
          title={t("rural.cta.title")}
          description={t("rural.cta.desc")}
          buttons={ctaButtons}
        />
      </div>
    </>
  );
};
