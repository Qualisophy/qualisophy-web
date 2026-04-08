import React from "react";
import { Course } from "@/components/react/course/Course";
import { EnrollButton } from "@/components/react/shared/EnrollButton";
import { Breadcrumbs } from "@/components/react/shared/Breadcrumbs";
import { useTranslations } from "@/hooks/useTranslations";

export const GitlabCicdContent: React.FC<{ pathname: string }> = ({
  pathname,
}) => {
  const t = useTranslations();

  const courseId = "devops-gitlab";
  const courseName =
    t("course.devops-gitlab.name" as any) ||
    "Gestión Avanzada y CI/CD con GitLab";
  const courseDescription =
    t("course.devops-gitlab.fullDesc" as any) ||
    "El desarrollo moderno exige plataformas integrales...";
  const prerequisites =
    t("course.devops-gitlab.prereq" as any) ||
    "Conocimientos sólidos de Git y control de versiones...";

  const modules = [
    {
      id: "1",
      number: 1,
      title:
        t("course.devops-gitlab.mod1.title" as any) ||
        "Gestión de Proyectos, Equipos y Planificación Ágil",
      description:
        t("course.devops-gitlab.mod1.desc" as any) ||
        "Organiza el trabajo y los equipos dentro de GitLab.",
      topics: [
        t("course.devops-gitlab.mod1.t1" as any) ||
          "Uso avanzado de GitLab Boards, Milestones e Issues para seguimiento de trabajo.",
        t("course.devops-gitlab.mod1.t2" as any) ||
          "Configuración de repositorios, roles de acceso y ramificaciones estratégicas (Git Flow).",
        t("course.devops-gitlab.mod1.t3" as any) ||
          "Integración bidireccional con herramientas de comunicación como Slack o Microsoft Teams.",
      ],
      icon: "Layout",
    },
    {
      id: "2",
      number: 2,
      title:
        t("course.devops-gitlab.mod2.title" as any) ||
        "Integración y Despliegue Continuo (CI/CD)",
      description:
        t("course.devops-gitlab.mod2.desc" as any) ||
        "Automatiza tu ciclo de vida de desarrollo.",
      topics: [
        t("course.devops-gitlab.mod2.t1" as any) ||
          "Arquitectura del archivo .gitlab-ci.yml: stages, jobs y runners.",
        t("course.devops-gitlab.mod2.t2" as any) ||
          "Automatización de pruebas unitarias y de calidad integradas en cada commit.",
        t("course.devops-gitlab.mod2.t3" as any) ||
          "Estrategias de despliegue automatizado, manejo de entornos (staging/production) y simulaciones de rollback.",
      ],
      icon: "RefreshCw",
    },
    {
      id: "3",
      number: 3,
      title:
        t("course.devops-gitlab.mod3.title" as any) ||
        "Seguridad, Auditoría y Compliance (DevSecOps)",
      description:
        t("course.devops-gitlab.mod3.desc" as any) ||
        "Protege tu código y cumple las normativas.",
      topics: [
        t("course.devops-gitlab.mod3.t1" as any) ||
          "Configuración de análisis estático (SAST) y dinámico (DAST) del código fuente.",
        t("course.devops-gitlab.mod3.t2" as any) ||
          "Integración de escaneo de vulnerabilidades y revisión de dependencias.",
        t("course.devops-gitlab.mod3.t3" as any) ||
          "Implementación de políticas de compliance, auditorías de acciones y registros de actividad.",
      ],
      icon: "Shield",
    },
    {
      id: "4",
      number: 4,
      title:
        t("course.devops-gitlab.mod4.title" as any) ||
        "Monitorización, Mantenimiento y Casos Prácticos",
      description:
        t("course.devops-gitlab.mod4.desc" as any) ||
        "Observabilidad y proyectos a gran escala.",
      topics: [
        t("course.devops-gitlab.mod4.t1" as any) ||
          "Integración de métricas de salud del proyecto con herramientas como Prometheus.",
        t("course.devops-gitlab.mod4.t2" as any) ||
          "Configuración de alertas de rendimiento y generación de reportes personalizados.",
        t("course.devops-gitlab.mod4.t3" as any) ||
          "Taller Práctico Integrador: despliegue, securización y monitorización de un proyecto monolítico y su transición a microservicios.",
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
