import React from "react";
import { motion } from "framer-motion";

interface TalentVideoProps {
  title: string;
  subtitle?: string;
  description: string;
  embedUrl: string;
  variant?: "white" | "gray"; // Añadido
}

export const TalentVideo: React.FC<TalentVideoProps> = ({
  title,
  subtitle,
  description,
  embedUrl,
  variant = "gray", // Añadido con valor por defecto
}) => {
  const bgClass = variant === "gray" ? "bg-slate-50" : "bg-white";

  return (
    <section className={`py-20 ${bgClass}`}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Cabecera de la sección */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-secondary mb-4">
            {title}
          </h2>
          {subtitle && (
            <p className="text-xl text-primary font-semibold mb-4">
              {subtitle}
            </p>
          )}
          <p className="text-gray-600 max-w-2xl mx-auto font-primary text-lg leading-relaxed">
            {description}
          </p>
        </motion.div>

        {/* Contenedor del Vídeo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative aspect-video rounded-2xl overflow-hidden shadow-xl border border-gray-100 bg-secondary"
        >
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src={embedUrl}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </motion.div>
      </div>
    </section>
  );
};
