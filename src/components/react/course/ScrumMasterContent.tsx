import React from "react";
import { Course } from "@/components/react/course/Course";
import { EnrollButton } from "@/components/react/shared/EnrollButton";
import { Breadcrumbs } from "@/components/react/shared/Breadcrumbs";
import { useTranslations } from "@/hooks/useTranslations";

export const ScrumMasterContent: React.FC<{ pathname: string }> = ({
  pathname,
}) => {
  const t = useTranslations();

  const courseId = "agile-scrum";
  const courseName =
    t("course.agile-scrum.name" as any) ||
    "Agile Mastery: El Camino del Scrum Master";
  const courseDescription =
    t("course.agile-scrum.desc" as any) ||
    "La figura del Scrum Master hace referencia a un profesional especializado...";
  const prerequisites =
    t("course.agile-scrum.prereq" as any) ||
    "No es necesario ningún conocimiento técnico...";

  const modules = [
    {
      id: "1",
      number: 1,
      title:
        t("course.agile-scrum.mod1.title" as any) ||
        "Introducción a Agile y Scrum",
      description:
        t("course.agile-scrum.mod1.desc" as any) ||
        "Comprende por qué la agilidad es vital hoy en día.",
      topics: [
        t("course.agile-scrum.mod1.t1" as any) ||
          "Entender las bases de la agilidad y por qué surge en el desarrollo de proyectos complejos.",
      ],
      icon: "Compass",
    },
    {
      id: "2",
      number: 2,
      title: t("course.agile-scrum.mod2.title" as any) || "Marco Scrum",
      description:
        t("course.agile-scrum.mod2.desc" as any) ||
        "Las reglas del juego del framework más usado.",
      topics: [
        t("course.agile-scrum.mod2.t1" as any) ||
          "Definición del marco de trabajo.",
        t("course.agile-scrum.mod2.t2" as any) ||
          "Pilares y valores fundamentales.",
        t("course.agile-scrum.mod2.t3" as any) ||
          "Roles, artefactos y eventos de Scrum.",
      ],
      icon: "Target",
    },
    {
      id: "3",
      number: 3,
      title: t("course.agile-scrum.mod3.title" as any) || "Herramientas Ágiles",
      description:
        t("course.agile-scrum.mod3.desc" as any) ||
        "Lleva la teoría a la práctica visual.",
      topics: [
        t("course.agile-scrum.mod3.t1" as any) ||
          "Uso de herramientas de gestión que facilitan la transparencia y la inspección.",
        t("course.agile-scrum.mod3.t2" as any) || "Jira y Trello.",
        t("course.agile-scrum.mod3.t3" as any) ||
          "Conjunto de herramientas complementarias para el equipo Scrum.",
      ],
      icon: "Trello",
    },
    {
      id: "4",
      number: 4,
      title:
        t("course.agile-scrum.mod4.title" as any) ||
        "Conociendo el Product Backlog",
      description:
        t("course.agile-scrum.mod4.desc" as any) ||
        "Gestión efectiva de los requisitos del producto.",
      topics: [
        t("course.agile-scrum.mod4.t1" as any) ||
          "Apoyo activo al Product Owner.",
        t("course.agile-scrum.mod4.t2" as any) ||
          "Estrategias para ordenar, desglosar y refinar el Product Backlog.",
      ],
      icon: "List",
    },
    {
      id: "5",
      number: 5,
      title:
        t("course.agile-scrum.mod5.title" as any) || "Métodos de Planificación",
      description:
        t("course.agile-scrum.mod5.desc" as any) ||
        "Organiza los Sprints con éxito.",
      topics: [
        t("course.agile-scrum.mod5.t1" as any) ||
          "Ayudar al equipo a planificar el trabajo de forma iterativa y aumentar la predictibilidad.",
        t("course.agile-scrum.mod5.t2" as any) ||
          "Sistemas de puntuación y estimación.",
        t("course.agile-scrum.mod5.t3" as any) ||
          "Prácticas efectivas de Sprint Planning.",
      ],
      icon: "Calendar",
    },
    {
      id: "6",
      number: 6,
      title:
        t("course.agile-scrum.mod6.title" as any) ||
        "Base de Mejoras Constantes: Retrospectivas",
      description:
        t("course.agile-scrum.mod6.desc" as any) ||
        "El corazón de la mejora continua.",
      topics: [
        t("course.agile-scrum.mod6.t1" as any) ||
          "Bases para realizar una retrospectiva sana y adecuada.",
        t("course.agile-scrum.mod6.t2" as any) ||
          "Métodos de facilitación de una retrospectiva.",
        t("course.agile-scrum.mod6.t3" as any) ||
          "Soft skills de inspección para asegurar que el equipo mejore realmente.",
      ],
      icon: "RefreshCcw",
    },
    {
      id: "7",
      number: 7,
      title:
        t("course.agile-scrum.mod7.title" as any) || "Apoyo a la Organización",
      description:
        t("course.agile-scrum.mod7.desc" as any) ||
        "Escalando la agilidad en la empresa.",
      topics: [
        t("course.agile-scrum.mod7.t1" as any) ||
          "El papel del Scrum Master no solo como líder servicial, sino como agente del cambio.",
        t("course.agile-scrum.mod7.t2" as any) ||
          "Las 3 bandas: Pods, bottom to top, top to bottom.",
        t("course.agile-scrum.mod7.t3" as any) ||
          "Conceptos básicos de Scrum Escalado.",
      ],
      icon: "Users",
    },
  ];

  // El salvavidas (fallback) asegura que si la clave no existe, siempre haya un string válido
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
        // Esta línea es ahora 100% segura contra errores "undefined"
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
