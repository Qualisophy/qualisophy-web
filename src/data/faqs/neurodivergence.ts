import type { FAQ } from "../../components/react/shared/FAQSection";
import {
    Activity,
    Brain,
    GraduationCap,
    Handshake,
    Scale,
    Settings,
    TrendingUp,
    Users
} from "lucide-react";

export const faqsNeurodivergencia: FAQ[] = [
    {
        question: "¿Qué es un programa de inclusión laboral para personas con autismo o TDAH?",
        answer:
        "Es un programa diseñado para facilitar el acceso al empleo de personas neurodivergentes mediante formación adaptada, acompañamiento especializado y conexión directa con empresas. Combina capacitación técnica con experiencia real para garantizar una inserción laboral sostenible.",
        icon: "Brain",
        popular: true,
    },
    {
        question: "¿Qué perfiles neurodivergentes pueden acceder al programa?",
        answer:
        "El programa está dirigido principalmente a personas con autismo y TDAH, aunque puede adaptarse a otros perfiles neurodivergentes. Se evalúan capacidades, intereses y necesidades de apoyo para diseñar un itinerario personalizado.",
        icon: "Users",
    },
    {
        question: "¿Cómo funciona la formación dual en este programa?",
        answer:
        "La formación dual combina aprendizaje teórico adaptado con experiencia práctica en empresas. Esto permite una adaptación progresiva al entorno laboral y reduce la incertidumbre tanto para el candidato como para la empresa.",
        icon: "GraduationCap",
        popular: true,
    },
    {
        question: "¿Qué es el empleo con apoyo?",
        answer:
        "Es un modelo de inserción laboral en el que el candidato recibe acompañamiento continuo por parte de profesionales especializados, tanto durante la incorporación como en su desarrollo dentro de la empresa.",
        icon: "Handshake",
    },
    {
        question: "¿Cómo ayuda este programa a las empresas a cumplir la LGD?",
        answer:
        "El programa facilita la contratación de personas con discapacidad ayudando a las empresas a cumplir la cuota legal del 2%, además de ofrecer asesoramiento, adaptación de puestos y seguimiento continuo.",
        icon: "Scale",
    },
    {
        question: "¿Qué beneficios tiene contratar talento neurodivergente?",
        answer:
        "Las empresas obtienen perfiles con alta concentración, pensamiento lógico y atención al detalle, además de mejorar su innovación, diversidad y cumplimiento de criterios ESG.",
        icon: "TrendingUp",
    },
    {
        question: "¿Se adapta el puesto de trabajo a la persona?",
        answer:
        "Sí, se realizan adaptaciones técnicas y organizativas del puesto para maximizar el rendimiento del talento y asegurar una integración efectiva.",
        icon: "Settings",
    },
    {
        question: "¿Qué tipo de seguimiento se realiza tras la contratación?",
        answer:
        "Se ofrece acompañamiento continuo tanto al trabajador como a la empresa, ajustando el entorno laboral y resolviendo posibles dificultades para garantizar la estabilidad.",
        icon: "Activity",
    },
];