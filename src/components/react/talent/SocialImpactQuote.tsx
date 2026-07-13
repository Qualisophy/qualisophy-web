import React from "react";
import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/react/shared/AnimatedSection";

export interface SocialPillar {
  icon: string;
  title: string;
  description: string;
}

interface SocialImpactQuoteProps {
  title?: string;
  subtitle?: string;
  pillars?: SocialPillar[];
  quoteText?: string;
  quoteHighlight?: string;
  quoteEnd?: string;

  // Vídeo opcional
  videoTitle?: string;
  videoSubtitle?: string;
  videoDescription?: string;
  embedUrl?: string;

  variant?: "white" | "gray";
}

const defaultPillars: SocialPillar[] = [
  {
    icon: "business",
    title: "Compromiso Empresarial",
    description:
      "Cumplimiento efectivo de la legislación y creación de entornos verdaderamente inclusivos y productivos.",
  },
  {
    icon: "handshake",
    title: "Apoyo Institucional",
    description:
      "Políticas públicas que promuevan y faciliten activamente la inclusión laboral de personas con autismo.",
  },
  {
    icon: "public",
    title: "Transformación Social",
    description:
      "Una sociedad más justa, diversa y competitiva que aproveche todo el talento disponible.",
  },
];

export const SocialImpactQuote: React.FC<SocialImpactQuoteProps> = ({
  title = "Hacia la Inclusión Real",
  subtitle = "Construimos un futuro donde el talento no tiene etiquetas.",
  pillars = defaultPillars,
  quoteText = "“La formación tradicional deja fuera a mentes brillantes. ",
  quoteHighlight = "En Qualisophy conectamos las capacidades únicas del talento neurodiverso ",
  quoteEnd = " con las vacantes tecnológicas mediante metodologías adaptadas e IA.”",

  videoTitle,
  videoSubtitle,
  videoDescription,
  embedUrl,

  variant = "gray",
}) => {
  const bgClass = variant === "gray" ? "bg-slate-50" : "bg-white";

  return (
    <AnimatedSection className={`py-24 ${bgClass}`}>
      <div className="container mx-auto px-6">
        {/* 1. TÍTULO */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-secondary mb-6">
            {title}
          </h2>
          <p className="text-lg text-slate-600 font-primary">{subtitle}</p>
        </div>

        {/* 2. PILARES */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {pillars.map((pillar, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-5">
                <span className="material-symbols-outlined text-2xl">
                  {pillar.icon}
                </span>
              </div>

              <h4 className="font-heading font-bold text-secondary text-xl mb-3">
                {pillar.title}
              </h4>

              <p className="text-sm text-slate-600 leading-relaxed font-primary">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
        {/* 4. VÍDEO (Opcional) */}
        {embedUrl && (
          <div className="mt-24 mb-20">
            {/* Cabecera */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            ></motion.div>
            {/* Contenedor del vídeo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative aspect-video max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-xl border border-gray-100 bg-secondary"
            >
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src={embedUrl}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </motion.div>
          </div>
        )}

        {/* 3. CITA */}
        <div className="max-w-4xl mx-auto">
          <div className="relative pl-8 md:pl-12 border-l-4 border-primary">
            <blockquote className="text-xl md:text-2xl font-primary italic text-slate-700 leading-relaxed">
              {quoteText}
              <span className="text-primary font-bold not-italic">
                {quoteHighlight}
              </span>{" "}
              {quoteEnd}
            </blockquote>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};
