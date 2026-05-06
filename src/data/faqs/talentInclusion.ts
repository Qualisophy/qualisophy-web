import type { FAQ } from "../../components/react/shared/FAQSection";
import {
    HeartHandshake,
    Users,
    GraduationCap,
    LifeBuoy,
    PiggyBank,
    Activity,
    TrendingUp
} from "lucide-react";

export const faqsRiesgoExclusion: FAQ[] = [
    {
      question: "¿Qué es un programa de inserción laboral para colectivos vulnerables?",
      answer:
        "Es un servicio que facilita el acceso al empleo digno mediante formación, acompañamiento social y conexión con empresas comprometidas.",
      icon: "HeartHandshake",
      popular: true,
    },
    {
      question: "¿Quién puede acceder a este programa?",
      answer:
        "Personas en situación de desempleo prolongado, precariedad laboral o riesgo de exclusión social, incluyendo mayores de 45 años o colectivos vulnerables.",
      icon: "Users",
    },
    {
      question: "¿Se necesita experiencia previa?",
      answer:
        "No, el programa incluye formación desde niveles básicos, especialmente en competencias digitales y habilidades blandas.",
      icon: "GraduationCap",
    },
    {
      question: "¿Qué tipo de apoyo se ofrece?",
      answer:
        "Se proporciona acompañamiento social, psicológico y laboral para garantizar estabilidad personal y profesional.",
      icon: "LifeBuoy",
    },
    {
      question: "¿Qué beneficios tiene contratar estos perfiles?",
      answer:
        "Las empresas acceden a bonificaciones económicas, mejoran su RSC y contribuyen a la inclusión social.",
      icon: "PiggyBank",
    },
    {
      question: "¿Se realiza seguimiento tras la contratación?",
      answer:
        "Sí, se ofrece seguimiento continuo para evitar abandono laboral y garantizar la estabilidad del empleo.",
      icon: "Activity",
    },
    {
      question: "¿Qué impacto tiene el empleo en la inclusión social?",
      answer:
        "El acceso a empleo estable mejora la autonomía, reduce la dependencia de ayudas y favorece la integración social.",
      icon: "TrendingUp",
    },
];