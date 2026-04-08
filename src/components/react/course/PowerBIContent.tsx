import React from "react";
import { Course } from "@/components/react/course/Course";
import { EnrollButton } from "@/components/react/shared/EnrollButton";
import { Breadcrumbs } from "@/components/react/shared/Breadcrumbs";
import { useTranslations } from "@/hooks/useTranslations";
import instructorImg from "@/assets/instructor/instructor-enrique.jpeg";

export const PowerBIContent: React.FC<{ pathname: string }> = ({
  pathname,
}) => {
  const t = useTranslations();

  const courseId = "data-powerbi";
  const courseName =
    t("course.data-powerbi.name" as any) || "Analítica de Datos con Power BI";
  // CAMBIO AQUÍ: Usamos fullDesc para no pisar la descripción corta del grid
  const courseDescription =
    t("course.data-powerbi.fullDesc" as any) ||
    "Este curso abarca el ciclo de vida completo del Business Intelligence moderno...";
  const prerequisites =
    t("course.data-powerbi.prereq" as any) || "Nivel avanzado de Excel...";

  const instructor = {
    name: "Enrique Román Peláez",
    title:
      t("course.data-powerbi.instructor.role" as any) ||
      "Especialista en Power BI y Analítica de Datos",
    experience:
      t("course.data-powerbi.instructor.exp" as any) ||
      "Más de 8 años de experiencia en Business Intelligence",
    description:
      t("course.data-powerbi.instructor.desc" as any) ||
      "Enrique es un consultor experto que ofrece una formación práctica orientada al negocio...",
    image: instructorImg.src,
    certifications: [
      "Microsoft Data Analyst Associate",
      "Microsoft Certified Trainer (MCT)",
    ],
  };

  const modules = [
    {
      id: "1",
      number: 1,
      title: t("course.data-powerbi.mod1.title" as any) || "Introducción (2h)",
      description:
        t("course.data-powerbi.mod1.desc" as any) ||
        "Este módulo sentará las bases para entender la relevancia del análisis de datos...",
      topics: [
        t("course.data-powerbi.mod1.t1" as any) ||
          "Importancia del análisis de datos en las compañías y el Rol del analista de Datos",
        t("course.data-powerbi.mod1.t2" as any) ||
          "Tipos de informes más utilizados en la actualidad.",
        t("course.data-powerbi.mod1.t3" as any) ||
          "Introducción a la herramienta Power BI",
      ],
      icon: "BookOpen",
    },
    {
      id: "2",
      number: 2,
      title:
        t("course.data-powerbi.mod2.title" as any) ||
        "Toma de contacto con Power BI (40h)",
      description:
        t("course.data-powerbi.mod2.desc" as any) ||
        "En este módulo se recorre el proceso completo de trabajo con Power BI...",
      topics: [
        t("course.data-powerbi.mod2.t1" as any) ||
          "Configurar Orígenes de datos",
        t("course.data-powerbi.mod2.t2" as any) || "Importar datos",
        t("course.data-powerbi.mod2.t3" as any) ||
          "Transformación de datos (Básica, Intermedia y Avanzada)",
        t("course.data-powerbi.mod2.t4" as any) || "Modelado de datos.",
        t("course.data-powerbi.mod2.t5" as any) ||
          "Expresiones para el análisis de datos con DAX",
        t("course.data-powerbi.mod2.t6" as any) ||
          "Visualización de datos y creación de informes",
        t("course.data-powerbi.mod2.t7" as any) || "Publicación de informes",
        t("course.data-powerbi.mod2.t8" as any) ||
          "Configuraciones avanzadas y buenas prácticas",
      ],
      icon: "Database",
    },
    {
      id: "3",
      number: 3,
      title: t("course.data-powerbi.mod3.title" as any) || "Caso Práctico (8h)",
      description:
        t("course.data-powerbi.mod3.desc" as any) ||
        "Este módulo está dedicado a aplicar todo lo aprendido mediante la creación de un informe completo en Power BI...",
      topics: [
        t("course.data-powerbi.mod3.t1" as any) ||
          "Caso práctico: Creación de informe",
        t("course.data-powerbi.mod3.t2" as any) || "Dudas y cierre",
      ],
      icon: "PieChart",
    },
  ];

  const courseDetails = {
    startDate:
      t("course.data-powerbi.details.start" as any) || "Inicio de Octubre",
    duration: t("course.data-powerbi.details.duration" as any) || "50 horas",
    schedule:
      t("course.data-powerbi.details.schedule" as any) ||
      "Martes y Jueves / 18:00 - 21:00",
    regularPrice: t("course.data-powerbi.details.price" as any) || "450 €",
    earlyBirdPrice:
      t("course.data-powerbi.details.earlybird" as any) || "Por definir",
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
        instructor={instructor}
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
