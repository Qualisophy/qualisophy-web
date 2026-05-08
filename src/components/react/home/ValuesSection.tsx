import React from "react";

interface ValuesSectionProps {
  data: any;
}

export const ValuesSection: React.FC<ValuesSectionProps> = ({ data }) => {
  // Combinamos los iconos fijos que ya tenías con los textos que vienen del JSON/TS
  const icons = ["psychology_alt", "engineering", "handshake", "trending_up"];

  return (
    <section className="bg-gray-50/50 py-20 md:py-28 w-full border-y border-gray-100">
      <div className="flex justify-center w-full">
        <div className="w-full md:max-w-[96%] px-4 md:px-8 lg:px-12 max-w-7xl">
          {/* 1. Cabecera */}
          <div className="text-center mb-16 md:mb-20">
            <h2 className="text-secondary text-3xl md:text-5xl font-bold mb-6 font-heading">
              {data.title}
            </h2>
            <div className="w-20 h-1.5 bg-primary mx-auto rounded-full mb-8"></div>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg md:text-xl font-primary leading-relaxed">
              {data.subtitle1}
              <span className="text-secondary font-bold">
                {data.subtitleHighlight1}
              </span>{" "}
              {data.subtitle2}
              <span className="text-secondary font-bold">
                {data.subtitleHighlight2}
              </span>{" "}
              {data.subtitle3}
            </p>
          </div>

          {/* 2. Ecosistema Horizontal (Línea Temporal) */}
          <div className="relative pt-4">
            <div className="hidden lg:block absolute top-[56px] left-[12.5%] right-[12.5%] h-px bg-gray-200 z-0"></div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 relative z-10">
              {data.items.map((value: any, index: number) => (
                <div
                  key={index}
                  className="flex flex-col items-center text-center group"
                >
                  <div className="size-16 md:size-20 rounded-full bg-white border border-gray-200 text-gray-400 group-hover:text-primary group-hover:border-primary/40 flex items-center justify-center mb-6 shadow-sm transition-all duration-300 group-hover:-translate-y-1">
                    <span className="material-symbols-outlined text-[32px] md:text-[40px] transition-transform duration-300 group-hover:scale-110">
                      {icons[index]}
                    </span>
                  </div>
                  <h3 className="text-secondary text-xl font-bold mb-3 font-heading group-hover:text-primary transition-colors">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed font-primary text-sm md:text-base px-2">
                    {value.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* 3. Banner de Compromiso */}
          <div className="mt-20 md:mt-28 bg-white text-secondary rounded-[2rem] p-8 md:p-12 lg:p-16 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 relative overflow-hidden border border-gray-100 shadow-sm transition-shadow hover:shadow-lg">
            <div className="relative z-10 md:w-2/3 text-center md:text-left">
              <h3 className="text-2xl md:text-3xl font-bold font-heading mb-4 lg:mb-6">
                {data.commitment.title}
              </h3>
              <p className="text-gray-600 text-lg md:text-xl leading-relaxed font-primary">
                {data.commitment.desc}
              </p>
            </div>

            <div className="relative z-10 md:w-1/3 flex justify-center md:justify-end">
              <div className="size-24 md:size-28 rounded-[2rem] bg-gray-50 flex items-center justify-center border border-gray-100 shadow-inner group transition-transform duration-500 hover:scale-105 cursor-default">
                <span className="material-symbols-outlined text-[48px] md:text-[56px] text-primary">
                  workspace_premium
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
