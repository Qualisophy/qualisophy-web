import type { FAQ } from "../../components/react/shared/FAQSection";
import {
    Clock,
    Award,
    CheckCircle2,
    CreditCard,
    Briefcase,
    GraduationCap,
    RefreshCcw,
    Rocket,
    UserCheck,
    Users
} from "lucide-react";

export const faqsReconversionLaboral: FAQ[] = [
    {
      question: "¿Los cursos son en vivo o grabados?",
      answer:
        "Todos nuestros cursos son EN VIVO con instructores certificados. Tendrás sesiones interactivas donde podrás hacer preguntas en tiempo real. Además, todas las clases quedan grabadas y disponibles durante 6 meses para que puedas repasarlas cuando quieras.",
      icon: "Clock",
      popular: true,
    },
    {
      question: "¿Obtengo certificación al finalizar?",
      answer:
        "Sí, al completar el curso recibes un certificado oficial reconocido por empresas tech. Además, el programa incluye proyectos prácticos que podrás añadir a tu portfolio profesional.",
      icon: "Award",
      popular: true,
    },
    {
      question: "¿Qué pasa si no puedo asistir a una clase en vivo?",
      answer:
        "No te preocupes. Todas las sesiones quedan grabadas y las tienes disponibles en menos de 24 horas. También ofrecemos tutorías de recuperación semanales sin coste adicional para resolver dudas.",
      icon: "CheckCircle2",
    },
    {
      question: "¿Ofrecen facilidades de pago?",
      answer:
        "Sí, ofrecemos planes de pago a plazos sin intereses. También tenemos descuentos por pronto pago (hasta 20% OFF) y packs para empresas con condiciones especiales.",
      icon: "CreditCard",
    },
    {
      question: "¿El curso incluye prácticas en empresas?",
      answer:
        "Nuestros cursos incluyen proyectos basados en casos reales de empresas. Además, tenemos un programa de partnerships donde conectamos a nuestros mejores alumnos con empresas que buscan talento tech.",
      icon: "Briefcase",
    },
    {
      question: "¿Necesito conocimientos previos?",
      answer:
        "Depende del curso. Los cursos de nivel básico no requieren experiencia previa. Para cursos avanzados, te indicamos los requisitos específicos en la página de cada curso. Si tienes dudas, contáctanos y te asesoramos.",
      icon: "GraduationCap",
    },

    {
      question: "¿Qué es la reconversión laboral en tecnología?",
      answer:
        "Es el proceso de adquirir nuevas competencias digitales para cambiar de sector profesional y acceder a empleos tecnológicos con alta demanda.",
      icon: "RefreshCcw",
      popular: true,
    },
    {
      question: "¿Puedo cambiar al sector tecnológico sin experiencia previa?",
      answer:
        "Sí, el programa está diseñado para partir de tus habilidades actuales y transformarlas en competencias digitales mediante formación práctica y acompañamiento.",
      icon: "Rocket",
    },
    {
      question: "¿Qué salidas laborales tiene el programa?",
      answer:
        "Podrás acceder a roles como Data Analyst, QA Tester, Digital Marketing o IT Project Manager, entre otros perfiles tecnológicos.",
      icon: "Briefcase",
    },
    {
      question: "¿Incluye mentoring personalizado?",
      answer:
        "Sí, tendrás sesiones individuales con mentores expertos que te guiarán durante todo el proceso de transición profesional.",
      icon: "UserCheck",
    },
    {
      question: "¿Se ayuda a encontrar empleo después del curso?",
      answer:
        "Sí, el programa incluye orientación laboral, mejora de CV, preparación de entrevistas y acceso a oportunidades con empresas.",
      icon: "Users",
    },
];