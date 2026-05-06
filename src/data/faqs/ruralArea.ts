import type { FAQ } from "../../components/react/shared/FAQSection";
import {
  Map,
  Laptop,
  GraduationCap,
  Home,
  TrendingUp,
  WifiOff,
  Landmark
} from "lucide-react";

export const faqsEntornoRural: FAQ[] = [
    {
      question: "¿Qué es el programa de talento rural tecnológico?",
      answer:
        "Es un programa que conecta a profesionales de zonas rurales con oportunidades digitales mediante formación tecnológica y acceso a empleo remoto o híbrido.",
      icon: "Map",
      popular: true,
    },
    {
      question: "¿Puedo trabajar en tecnología sin salir de mi pueblo?",
      answer:
        "Sí, el programa está diseñado para facilitar el acceso a empleos digitales que pueden desarrollarse en remoto, evitando la necesidad de migrar a grandes ciudades.",
      icon: "Laptop",
    },
    {
      question: "¿Qué formación se ofrece en zonas rurales?",
      answer:
        "Se ofrecen programas de capacitación tecnológica adaptados al mercado laboral, incluyendo especializaciones digitales y prácticas en empresas.",
      icon: "GraduationCap",
    },
    {
      question: "¿Cómo ayuda el programa a reducir la despoblación?",
      answer:
        "Generando oportunidades laborales en el entorno rural, fijando población y fomentando el desarrollo económico local.",
      icon: "Home",
    },
    {
      question: "¿Qué ventajas tiene contratar talento rural?",
      answer:
        "Las empresas acceden a profesionales cualificados, reducen costes y diversifican sus equipos con talento fuera de entornos urbanos.",
      icon: "TrendingUp",
    },
    {
      question: "¿El programa ayuda con la brecha digital?",
      answer:
        "Sí, incluye formación, acceso a herramientas digitales y apoyo para superar limitaciones tecnológicas.",
      icon: "WifiOff",
    },
    {
      question: "¿Existen ayudas para empresas en zonas rurales?",
      answer:
        "Sí, hay subvenciones públicas y programas que pueden financiar hasta un alto porcentaje de proyectos en entornos rurales.",
      icon: "Landmark",
    },
];