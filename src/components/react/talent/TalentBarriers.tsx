import React from "react";

export interface BarrierItem {
  icon: string;
  title: string;
  description: string;
}

interface TalentBarriersProps {
  title?: string;
  description?: string;
  barriers: BarrierItem[];
  layout?: "grid2" | "grid3";
  variant?: "white" | "gray"; // Añadido
}

export const TalentBarriers: React.FC<TalentBarriersProps> = ({
  title = "Barreras en el Sector IT",
  description = "Identificamos y derribamos los obstáculos estructurales que impiden el acceso al empleo.",
  barriers,
  layout = "grid3",
  variant = "gray", // Añadido
}) => {
  const gridClass =
    layout === "grid2" ? "md:grid-cols-2 max-w-4xl mx-auto" : "md:grid-cols-3";

  const bgClass = variant === "gray" ? "bg-slate-50" : "bg-white";

  return (
    <section className={`py-20 ${bgClass}`}>
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-heading sm:text-4xl font-bold text-secondary mb-6">
            {title}
          </h2>
          <p className="text-lg text-slate-600">{description}</p>
        </div>

        <div className={`grid gap-6 sm:grid-cols-2 ${gridClass}`}>
          {barriers.map((item, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100"
            >
              <div className="text-primary mb-4">
                <span className="material-symbols-outlined text-4xl">
                  {item.icon}
                </span>
              </div>
              <h3 className="text-xl font-bold text-secondary mb-3">
                {item.title}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
