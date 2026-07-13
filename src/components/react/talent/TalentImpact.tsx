import React from "react";
import { ParticleMeshBackground } from "@/components/react/shared/ParticleMeshBackground";

interface TalentImpactProps {
  title?: string;
  subtitle?: string;
  items: string[];
  imageSrc?: string;
  variant?: "white" | "gray"; // Añadido
}

export const TalentImpact: React.FC<TalentImpactProps> = ({
  title = "Impacto en Equipos Tech",
  subtitle = "El empleo no es solo un salario. Es la llave para la autonomía y la participación social plena.",
  items,
  imageSrc = "https://images.unsplash.com/photo-1531545514256-b1400bc00f31?auto=format&fit=crop&q=80",
  variant = "white", // Añadido
}) => {
  const bgClass = variant === "gray" ? "bg-slate-50" : "bg-white";

  return (
    <section className={`py-20 relative overflow-hidden ${bgClass}`}>
      {/* FONDO MESH */}
      <div className="absolute inset-0 z-0 opacity-60 pointer-events-none">
        <ParticleMeshBackground />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-heading sm:text-4xl font-bold text-secondary mb-6">
              {title}
            </h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              {subtitle}
            </p>

            <ul className="space-y-6">
              {items.map((item, i) => (
                <li key={i} className="flex items-center gap-4">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-sm">
                    ✓
                  </span>
                  <span className="text-slate-700 font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-secondary/5 rounded-3xl -z-10 transform rotate-3"></div>
            <img
              src={imageSrc}
              alt={title}
              className="rounded-3xl shadow-xl w-full object-cover h-[400px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
