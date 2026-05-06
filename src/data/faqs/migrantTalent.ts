import type { FAQ } from "../../components/react/shared/FAQSection";
import { 
    Globe,
    FileCheck,
    Briefcase,
    Link,
    TrendingUp,
    PiggyBank,
    MessageCircle,
    Users
} from "lucide-react";

export const faqsTalentoMigrante: FAQ[] = [
    {
      question: "¿Qué es un programa de integración laboral para talento migrante?",
      answer:
        "Es un servicio que facilita la incorporación de profesionales extranjeros al mercado laboral español mediante formación puente, asesoramiento legal y conexión con empresas.",
      icon: "Globe",
      popular: true,
    },
    {
      question: "¿Cómo homologar un título extranjero en España?",
      answer:
        "El proceso de homologación requiere presentar la titulación, documentación académica y cumplir los requisitos del Ministerio de Educación. El programa te guía para acelerar este proceso y reducir errores.",
      icon: "FileCheck",
    },
    {
      question: "¿Se puede trabajar sin tener el título homologado?",
      answer:
        "Sí, dependiendo del sector. Muchos profesionales pueden acceder a empleos mientras completan la homologación, especialmente en áreas tecnológicas o digitales.",
      icon: "Briefcase",
    },
    {
      question: "¿Qué es la formación puente?",
      answer:
        "Es un proceso de adaptación que conecta el conocimiento adquirido en el país de origen con las herramientas, normativa y cultura laboral del mercado español.",
      icon: "Link",
      popular: true,
    },
    {
      question: "¿Qué beneficios tiene contratar talento migrante?",
      answer:
        "Las empresas acceden a perfiles cualificados, diversidad cultural, nuevas perspectivas y capacidad de expansión a mercados internacionales.",
      icon: "TrendingUp",
    },
    {
      question: "¿Existen ayudas para contratar talento extranjero?",
      answer:
        "Sí, existen bonificaciones económicas y ventajas en licitaciones públicas relacionadas con diversidad y criterios ESG.",
      icon: "PiggyBank",
    },
    {
      question: "¿Qué es la mediación cultural en el empleo?",
      answer:
        "Es un proceso que facilita la adaptación entre empresa y trabajador, traduciendo diferencias culturales y mejorando la comunicación y expectativas laborales.",
      icon: "MessageCircle",
    },
    {
      question: "¿Cómo ayuda el programa a conseguir la primera experiencia laboral en España?",
      answer:
        "A través de prácticas en empresas, networking y validación de competencias, eliminando la barrera de la falta de experiencia local.",
      icon: "Users",
    },
];