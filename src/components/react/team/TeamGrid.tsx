import React from "react";
import { motion } from "framer-motion";
import { ParticleMeshBackground } from "../shared/ParticleMeshBackground";
import { useTranslations } from "@/hooks/useTranslations"; // Añadimos el hook

// Importación de imágenes
import imgFran from "../../../assets/team-fran.png";
import imgElena from "../../../assets/team-elena.png";
import imgJuanpe from "../../../assets/team-juanpe.jpeg";
import imgPatricia from "../../../assets/team-patricia.jpeg";
import imgEnrique from "../../../assets/instructor/instructor-enrique.jpeg";
import imgJavi from "../../../assets/instructor/instructor-javi.jpeg";

export const TeamGrid = () => {
  const t = useTranslations(); // Inicializamos el traductor

  // Metemos el array dentro del componente para que lea de las traducciones
  const teamMembers = [
    {
      name: "Elena Martín",
      role: t("team.elena.role"),
      image: imgElena.src,
      position: "object-top",
      scale: "scale-100",
      highlights: [t("team.elena.h1"), t("team.elena.h2"), t("team.elena.h3")],
    },
    {
      name: "Patricia Beyet",
      role: t("team.patricia.role"),
      image: imgPatricia.src,
      position: "object-top",
      scale: "scale-125",
      hoverScale: "group-hover:scale-[1.35]",
      highlights: [
        t("team.patricia.h1"),
        t("team.patricia.h2"),
        t("team.patricia.h3"),
      ],
    },
    {
      name: "Juan Pedro Gómez",
      role: t("team.juanpe.role"),
      image: imgJuanpe.src,
      position: "object-center",
      scale: "scale-80",
      highlights: [
        t("team.juanpe.h1"),
        t("team.juanpe.h2"),
        t("team.juanpe.h3"),
      ],
    },
    {
      name: "Francisco Guerrero",
      role: t("team.fran.role"),
      image: imgFran.src,
      position: "object-top",
      scale: "scale-100",
      highlights: [t("team.fran.h1"), t("team.fran.h2"), t("team.fran.h3")],
    },
    {
      name: "Javier Flores",
      role: t("team.javi.role"),
      image: imgJavi.src,
      position: "object-center",
      scale: "scale-80",
      highlights: [t("team.javi.h1"), t("team.javi.h2"), t("team.javi.h3")],
    },
    {
      name: "Enrique Román",
      role: t("team.enrique.role"),
      image: imgEnrique.src,
      position: "object-center",
      scale: "scale-80",
      highlights: [
        t("team.enrique.h1"),
        t("team.enrique.h2"),
        t("team.enrique.h3"),
      ],
    },
  ];

  return (
    <section className="py-20 relative overflow-hidden bg-white">
      <div className="absolute inset-0 z-0 opacity-60 pointer-events-none">
        <ParticleMeshBackground />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary font-heading mb-4">
            {t("team.grid.title")}
          </h2>
          <div className="w-20 h-1 bg-primary"></div>
        </div>

        <div className="flex flex-wrap justify-center gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group flex flex-col w-full sm:w-72 bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-b-2xl hover:shadow-xl transition-all duration-300"
            >
              <div className="relative aspect-square overflow-hidden mb-6 bg-gray-50">
                <img
                  src={member.image}
                  alt={member.name}
                  // CAMBIO AQUÍ: Ahora usa member.hoverScale si existe, si no usa el 110 por defecto
                  className={`w-full h-full object-cover ${member.position} ${member.scale || ""} transition-transform duration-700 ${member.hoverScale || "group-hover:scale-110"}`}
                  loading="lazy"
                />

                <div className="absolute inset-0 bg-secondary/0 group-hover:bg-secondary/10 transition-colors duration-300" />
              </div>

              <div className="flex flex-col flex-grow px-5 pb-6">
                <h3 className="text-xl font-bold text-secondary mb-1 font-heading group-hover:text-primary transition-colors">
                  {member.name}
                </h3>
                <span className="text-secondary font-bold text-xs uppercase tracking-wider mb-4 block">
                  {member.role}
                </span>
                <ul className="space-y-2 mt-auto">
                  {member.highlights.map((item, i) => (
                    <li
                      key={i}
                      className="text-xs text-gray-600 leading-relaxed font-primary"
                    >
                      • {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
