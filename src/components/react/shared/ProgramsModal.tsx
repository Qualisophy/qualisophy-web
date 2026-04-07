import React, { useEffect } from "react";
import { useTranslations } from "@/hooks/useTranslations"; // Añadimos el hook

interface ProgramsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ProgramsModal: React.FC<ProgramsModalProps> = ({
  isOpen,
  onClose,
}) => {
  const t = useTranslations(); // Inicializamos el traductor

  // Movemos el array dentro del componente para poder usar t()
  const programs = [
    {
      title: t("modal.programs.1.title"),
      description: t("modal.programs.1.desc"),
      icon: "psychology",
      href: "/neurodivergence",
      baseColor: "bg-slate-100 text-secondary",
    },
    {
      title: t("modal.programs.2.title"),
      description: t("modal.programs.2.desc"),
      icon: "public",
      href: "/migrant-talent",
      baseColor: "bg-slate-100 text-secondary",
    },
    {
      title: t("modal.programs.3.title"),
      description: t("modal.programs.3.desc"),
      icon: "volunteer_activism",
      href: "/social-impact",
      baseColor: "bg-slate-100 text-secondary",
    },
    {
      title: t("modal.programs.4.title"),
      description: t("modal.programs.4.desc"),
      icon: "nature_people",
      href: "/rural-area",
      baseColor: "bg-slate-100 text-secondary",
    },
    {
      title: t("modal.programs.5.title"),
      description: t("modal.programs.5.desc"),
      icon: "model_training",
      href: "/reskilling",
      baseColor: "bg-slate-100 text-secondary",
    },
  ];

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [isOpen, onClose]);

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[10000] flex items-center justify-center bg-secondary/80 backdrop-blur-sm animate-in fade-in duration-300 p-4 pt-24 md:pt-32 pb-6 md:pb-8"
      onClick={handleBackdropClick}
      aria-modal="true"
      role="dialog"
    >
      <div className="bg-white rounded-2xl w-full max-w-5xl shadow-2xl relative transform flex flex-col max-h-full overflow-hidden border border-slate-100 animate-in zoom-in-95 duration-200">
        <div className="px-5 md:px-10 pt-12 md:pt-14 pb-4 md:pb-6 text-center shrink-0 border-b border-slate-50 relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 md:top-6 md:right-6 z-10 p-2 rounded-full text-slate-400 hover:bg-slate-100 hover:text-slate-700 transition-colors"
            aria-label="Cerrar modal"
          >
            <span className="material-symbols-outlined text-2xl">close</span>
          </button>

          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-secondary font-heading leading-tight tracking-tight">
            {t("modal.programs.title1")}
            <span className="text-primary underline decoration-primary/20 decoration-2 underline-offset-4">
              {t("modal.programs.title2")}
            </span>
          </h2>
          <p className="text-slate-500 font-primary text-xs md:text-sm lg:text-base max-w-2xl mx-auto leading-relaxed mt-2 md:mt-3 hidden sm:block">
            {t("modal.programs.subtitle")}
          </p>
        </div>

        <div className="p-4 md:p-10 overflow-y-auto custom-scrollbar flex-grow bg-slate-50/30">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-5">
            {programs.map((program) => (
              <a
                key={program.href}
                href={program.href}
                className="group flex flex-col items-start gap-3 p-4 md:p-5 bg-white rounded-xl border border-slate-100 shadow-sm hover:border-primary/40 hover:bg-slate-50 transition-colors duration-200 relative overflow-hidden"
              >
                <div className="flex items-center gap-3.5 w-full">
                  <div
                    className={`shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center shadow-sm ${program.baseColor} group-hover:bg-primary group-hover:text-white transition-colors duration-200`}
                  >
                    <span className="material-symbols-outlined text-xl md:text-2xl">
                      {program.icon}
                    </span>
                  </div>
                  <h3 className="text-base md:text-lg font-bold text-slate-800 font-heading group-hover:text-primary transition-colors flex items-center gap-2">
                    {program.title}
                  </h3>
                </div>

                <p className="text-xs md:text-sm text-slate-500 font-primary leading-relaxed mt-1 flex-grow">
                  {program.description}
                </p>

                <div className="flex items-center gap-1.5 mt-2 text-primary font-bold text-xs md:text-sm font-primary group-hover:gap-2.5 transition-all">
                  {t("modal.programs.details")}
                  <span className="material-symbols-outlined text-base">
                    arrow_forward
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>

        <div className="p-5 md:p-6 md:px-10 bg-white border-t border-slate-100 shrink-0">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-5 md:gap-8">
            <p className="text-sm md:text-base text-slate-600 font-primary text-center md:text-left flex-1">
              <strong className="text-secondary">
                {t("modal.programs.footer.q")}
              </strong>
              {t("modal.programs.footer.desc")}
            </p>
            <a
              href="/contact"
              className="flex items-center justify-center gap-2 w-full md:w-auto px-8 py-3.5 bg-primary hover:bg-secondary text-white font-bold text-base md:text-lg rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 whitespace-nowrap"
            >
              {t("modal.programs.footer.btn")}
              <span className="material-symbols-outlined text-xl transition-transform group-hover:translate-x-1">
                arrow_forward
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
