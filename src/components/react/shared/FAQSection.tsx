import { useState } from "react";
import {
  ChevronDown,
  Clock,
  Award,
  CheckCircle2,
  CreditCard,
  Briefcase,
  GraduationCap,
  MessageCircle,
} from "lucide-react";
import { ProgramCTA } from "@/components/react/programs/ProgramCTA";
import { useTranslations } from "@/hooks/useTranslations";

interface FAQ {
  question: string;
  answer: string;
  icon: any;
  popular?: boolean;
}

interface FAQSectionProps {
  alwaysExpanded?: boolean;
}

export const FAQSection = ({ alwaysExpanded = false }: FAQSectionProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(
    alwaysExpanded ? 0 : null,
  );

  const t = useTranslations();

  const faqs: FAQ[] = [
    {
      question: t("faq.q1.q"),
      answer: t("faq.q1.a"),
      icon: Clock,
      popular: true,
    },
    {
      question: t("faq.q2.q"),
      answer: t("faq.q2.a"),
      icon: Award,
      popular: true,
    },
    {
      question: t("faq.q3.q"),
      answer: t("faq.q3.a"),
      icon: CheckCircle2,
    },
    {
      question: t("faq.q4.q"),
      answer: t("faq.q4.a"),
      icon: CreditCard,
    },
    {
      question: t("faq.q5.q"),
      answer: t("faq.q5.a"),
      icon: Briefcase,
    },
    {
      question: t("faq.q6.q"),
      answer: t("faq.q6.a"),
      icon: GraduationCap,
    },
  ];

  const toggleFAQ = (index: number) => {
    if (!alwaysExpanded) {
      setOpenIndex(openIndex === index ? null : index);
    }
  };

  return (
    <>
      <section className="pt-24 pb-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          {/* Cabecera de la sección */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-secondary mb-6">
              {t("faq.section.title")}
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto font-primary leading-relaxed">
              {t("faq.section.subtitle")}
            </p>

            {/* Estadísticas rápidas integradas */}
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <div className="flex items-center gap-2 bg-gray-50 px-5 py-2.5 rounded-full border border-gray-200 text-sm text-gray-700">
                <MessageCircle className="w-5 h-5 text-primary" />
                <span>
                  <span className="font-bold text-secondary">
                    {t("faq.stats.queries")}
                  </span>{" "}
                  {t("faq.stats.queriesText")}
                </span>
              </div>
              <div className="flex items-center gap-2 bg-gray-50 px-5 py-2.5 rounded-full border border-gray-200 text-sm text-gray-700">
                <Clock className="w-5 h-5 text-primary" />
                <span>
                  {t("faq.stats.response")}{" "}
                  <span className="font-bold text-secondary">
                    {t("faq.stats.responseTime")}
                  </span>
                </span>
              </div>
            </div>
          </div>

          {/* Contenedor del Acordeón */}
          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const IconComponent = faq.icon;
              const isOpen = openIndex === index;

              return (
                <div
                  key={index}
                  className={`border rounded-2xl transition-all duration-300 overflow-hidden ${
                    isOpen
                      ? "border-primary/30 bg-gray-50/50 shadow-sm"
                      : "border-gray-200 bg-white hover:border-gray-300 hover:shadow-sm"
                  }`}
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full text-left p-6 md:p-8 flex items-center justify-between gap-6"
                  >
                    <div className="flex items-center gap-5">
                      <div
                        className={`flex-shrink-0 p-3 rounded-xl transition-colors duration-300 ${
                          isOpen
                            ? "bg-primary text-white"
                            : "bg-primary/10 text-primary"
                        }`}
                      >
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                        <span className="font-bold text-lg text-secondary">
                          {faq.question}
                        </span>
                        {faq.popular && (
                          <span className="inline-block bg-blue-100 text-blue-700 text-xs px-3 py-1 rounded-full font-bold uppercase tracking-wider self-start sm:self-auto">
                            {t("faq.badge.popular")}
                          </span>
                        )}
                      </div>
                    </div>
                    <ChevronDown
                      className={`w-6 h-6 text-gray-400 flex-shrink-0 transition-transform duration-300 ${
                        isOpen ? "rotate-180 text-primary" : ""
                      }`}
                    />
                  </button>

                  <div
                    className={`grid transition-all duration-300 ease-in-out ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="px-6 md:px-8 pb-6 md:pb-8 pt-0 ml-0 md:ml-[76px]">
                        <p className="text-gray-600 text-lg leading-relaxed border-t border-gray-200 pt-6">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA final con fondo blanco y botones estratégicos */}
      <ProgramCTA
        variant="white"
        title={t("faq.cta.title")}
        description={t("faq.cta.desc")}
        buttons={[
          {
            label: t("faq.cta.btn1"),
            href: "/contact",
            variant: "solid",
          },
          {
            label: t("faq.cta.btn2"),
            href: "/cursos",
            variant: "outline",
          },
        ]}
      />
    </>
  );
};
