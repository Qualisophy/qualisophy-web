import { ChevronDown } from "lucide-react";

export interface CourseFaqItem {
  question: string;
  answer: string;
}

interface CourseFaqProps {
  faqs: CourseFaqItem[];
}

/**
 * Preguntas frecuentes propias de un curso.
 * Mismo estilo de tarjeta desplegable que los módulos de CourseItinerary.
 * Usa <details> nativo: el contenido está en el HTML (SEO) y es accesible por teclado.
 */
export const CourseFaq = ({ faqs }: CourseFaqProps) => {
  return (
    <section id="faq" className="scroll-mt-28 space-y-4">
      <h3 className="text-lg font-bold text-slate-800 flex items-center gap-2">
        <span className="material-symbols-outlined text-primary">help</span>
        Preguntas frecuentes
      </h3>

      {faqs.map((faq) => (
        <details
          key={faq.question}
          className="group bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden"
        >
          <summary className="cursor-pointer list-none [&::-webkit-details-marker]:hidden w-full p-4 flex items-center justify-between gap-4 hover:bg-gray-50 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary">
            <span className="font-bold text-slate-800 text-sm text-left">
              {faq.question}
            </span>
            <ChevronDown className="w-5 h-5 text-slate-400 transition-transform duration-500 ease-in-out flex-shrink-0 group-open:rotate-180" />
          </summary>
          <div className="px-4 pb-4 border-t border-gray-100">
            <p className="text-slate-700 text-sm leading-relaxed mt-4">
              {faq.answer}
            </p>
          </div>
        </details>
      ))}
    </section>
  );
};
