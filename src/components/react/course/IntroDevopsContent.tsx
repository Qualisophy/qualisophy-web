import React from "react";
import { Course } from "@/components/react/course/Course";
import { EnrollButton } from "@/components/react/shared/EnrollButton";
import { Breadcrumbs } from "@/components/react/shared/Breadcrumbs";
import { useTranslations } from "@/hooks/useTranslations";

export const IntroDevopsContent: React.FC<{ pathname: string }> = ({
  pathname,
}) => {
  const t = useTranslations();

  const courseId = "devops-intro";
  const courseName =
    t("course.devops-intro.name" as any) ||
    "DevOps, Continuous Testing y CI/CD";
  const courseDescription =
    t("course.devops-intro.fullDesc" as any) ||
    "La filosofía DevOps ha transformado la manera en que se construye...";
  const prerequisites =
    t("course.devops-intro.prereq" as any) ||
    "Conocimientos básicos sobre el ciclo de vida del desarrollo...";

  const modules = [
    {
      id: "1",
      number: 1,
      title:
        t("course.devops-intro.mod1.title" as any) || "Fundamentos de DevOps",
      description:
        t("course.devops-intro.mod1.desc" as any) ||
        "Descubre la cultura que une desarrollo y operaciones.",
      topics: [
        t("course.devops-intro.mod1.t1" as any) ||
          "Introducción a la cultura DevOps: integración de procesos, prácticas y herramientas clave.",
        t("course.devops-intro.mod1.t2" as any) ||
          "Beneficios tangibles de adoptar DevOps en el ciclo de vida del desarrollo de software (SDLC).",
        t("course.devops-intro.mod1.t3" as any) ||
          "El rol crítico del Continuous Testing (Pruebas Continuas) dentro del ecosistema DevOps.",
      ],
      icon: "Users",
    },
    {
      id: "2",
      number: 2,
      title:
        t("course.devops-intro.mod2.title" as any) ||
        "Herramientas de Gestión y Configuración",
      description:
        t("course.devops-intro.mod2.desc" as any) ||
        "Domina las bases del control de versiones y entornos.",
      topics: [
        t("course.devops-intro.mod2.t1" as any) ||
          "Sistemas de Control de Versiones: dominio fundamental de Git.",
        t("course.devops-intro.mod2.t2" as any) ||
          "Gestión de la configuration para estandarizar y automatizar la infraestructura y los entornos de desarrollo.",
      ],
      icon: "Settings",
    },
    {
      id: "3",
      number: 3,
      title:
        t("course.devops-intro.mod3.title" as any) ||
        "Integración Continua (CI)",
      description:
        t("course.devops-intro.mod3.desc" as any) ||
        "Automatiza la construcción y pruebas de tu código.",
      topics: [
        t("course.devops-intro.mod3.t1" as any) ||
          "Conceptos básicos y arquitectura de la Integración Continua.",
        t("course.devops-intro.mod3.t2" as any) ||
          "Exploración de las herramientas de CI más demandadas del mercado (Jenkins, GitLab CI, entre otras).",
        t("course.devops-intro.mod3.t3" as any) ||
          "Creación y configuración paso a paso de pipelines de CI efectivos.",
      ],
      icon: "GitMerge",
    },
    {
      id: "4",
      number: 4,
      title:
        t("course.devops-intro.mod4.title" as any) ||
        "Entrega y Despliegue Continuo (CD)",
      description:
        t("course.devops-intro.mod4.desc" as any) ||
        "Lleva tu código a producción de forma segura.",
      topics: [
        t("course.devops-intro.mod4.t1" as any) ||
          "Diferencias estructurales y estratégicas entre Entrega Continua y Despliegue Continuo.",
        t("course.devops-intro.mod4.t2" as any) ||
          "Técnicas para la automatización segura de despliegues en distintos entornos.",
        t("course.devops-intro.mod4.t3" as any) ||
          "Implementación de estrategias avanzadas de despliegue para mitigar riesgos (Despliegues Blue/Green, Canary Releases).",
      ],
      icon: "Send",
    },
    {
      id: "5",
      number: 5,
      title:
        t("course.devops-intro.mod5.title" as any) ||
        "Testing Continuo y Monitorización",
      description:
        t("course.devops-intro.mod5.desc" as any) ||
        "Cierra el ciclo asegurando calidad y observabilidad.",
      topics: [
        t("course.devops-intro.mod5.t1" as any) ||
          "Integración estratégica de pruebas automatizadas directamente en los pipelines de CI/CD.",
        t("course.devops-intro.mod5.t2" as any) ||
          "Implementación de herramientas de monitorización y logging para lograr una observabilidad total.",
        t("course.devops-intro.mod5.t3" as any) ||
          "Gestión del ciclo de retroalimentación (Feedback Loop) para asegurar la mejora continua.",
      ],
      icon: "Activity",
    },
  ];

  const courseDetails = {
    startDate: t("course.details.tbd" as any) || "Por definir",
    duration: t("course.details.tbd" as any) || "Por definir",
    schedule: t("course.details.tbd" as any) || "Por definir",
    regularPrice: t("course.details.tbd" as any) || "Por definir",
    earlyBirdPrice: t("course.details.tbd" as any) || "Por definir",
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-6">
        <Breadcrumbs pathname={pathname} />
      </div>
      <h1 className="text-center text-2xl md:text-3xl font-bold text-slate-800 mb-8 md:mb-16">
        {courseName}
      </h1>
      <Course
        modules={modules as any}
        instructor={null}
        courseDetails={courseDetails}
        courseId={courseId}
        courseDescription={courseDescription}
        prerequisites={prerequisites}
      />
      <EnrollButton
        courseId={courseId}
        courseName={courseName}
        isComingSoon={
          (courseDetails.startDate || "Por definir")
            .toLowerCase()
            .includes("definir") ||
          (courseDetails.startDate || "À définir")
            .toLowerCase()
            .includes("définir")
        }
      />
    </div>
  );
};
