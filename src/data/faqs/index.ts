import { faqsNeurodivergencia } from "./neurodivergence";
import { faqsEntornoRural } from "./ruralArea";
import { faqsTalentoMigrante } from "./migrantTalent";
import { faqsRiesgoExclusion } from "./talentInclusion";
import { faqsReconversionLaboral } from "./reskilling";

export const faqMap = {
    "neurodivergencia": faqsNeurodivergencia,
    "entorno-rural": faqsEntornoRural,
    "talento-migrante": faqsTalentoMigrante,
    "riesgo-exclusion": faqsRiesgoExclusion,
    "reconversion-laboral": faqsReconversionLaboral,
} as const;

export type FaqSlug = keyof typeof faqMap;

export const faqTitles: Record<FaqSlug, string> = {
  "neurodivergencia": "FAQ Neurodivergencia",
  "talento-migrante": "FAQ Talento Migrante",
  "entorno-rural": "FAQ Entorno Rural",
  "riesgo-exclusion": "FAQ Riesgo de Exclusión",
  "reconversion-laboral": "FAQ Reconversión Laboral",
};