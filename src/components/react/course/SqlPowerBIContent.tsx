import React from "react";
import { Course } from "@/components/react/course/Course";
import { EnrollButton } from "@/components/react/shared/EnrollButton";
import { Breadcrumbs } from "@/components/react/shared/Breadcrumbs";
import { useTranslations } from "@/hooks/useTranslations";

export const SqlPowerBIContent: React.FC<{ pathname: string }> = ({
  pathname,
}) => {
  const t = useTranslations();

  const courseId = "data-sql";
  const courseName =
    t("course.data-sql.name" as any) || "Introducción a SQL para Power BI";
  // CAMBIO AQUÍ: Usamos fullDesc para no pisar la descripción corta del grid
  const courseDescription =
    t("course.data-sql.fullDesc" as any) ||
    "Power BI es potente, pero enviar millones de filas de datos sucios o innecesarios ralentiza drásticamente los informes...";
  const prerequisites =
    t("course.data-sql.prereq" as any) ||
    "Lógica matemática básica y experiencia previa manejando datos en hojas de cálculo.";

  const modules = [
    {
      id: "1",
      number: 1,
      title:
        t("course.data-sql.mod1.title" as any) ||
        "Bases de Datos Relacionales y Fundamentos SQL",
      description:
        t("course.data-sql.mod1.desc" as any) ||
        "Conoce la arquitectura de bases de datos y el lenguaje de consultas.",
      topics: [
        t("course.data-sql.mod1.t1" as any) ||
          "Entender la arquitectura de bases de datos relacionales y el lenguaje DML/DDL.",
        t("course.data-sql.mod1.t2" as any) ||
          "Sentencias básicas: SELECT, FROM, y filtrado potente con la cláusula WHERE.",
        t("course.data-sql.mod1.t3" as any) ||
          "Búsqueda de patrones (LIKE), operadores lógicos (AND, OR, NOT) y rangos (BETWEEN).",
      ],
      icon: "Database",
    },
    {
      id: "2",
      number: 2,
      title:
        t("course.data-sql.mod2.title" as any) ||
        "Análisis y Agregación de Datos en el Origen",
      description:
        t("course.data-sql.mod2.desc" as any) ||
        "Aprende a agrupar y resumir información eficientemente.",
      topics: [
        t("course.data-sql.mod2.t1" as any) ||
          "Funciones de agregación: SUM, AVG, COUNT, MIN, MAX.",
        t("course.data-sql.mod2.t2" as any) ||
          "Agrupación de datos con GROUP BY y filtrado condicional de grupos con HAVING.",
        t("course.data-sql.mod2.t3" as any) ||
          "Ordenación de resultados (ORDER BY) y limitación de registros (TOP/LIMIT).",
      ],
      icon: "BarChart",
    },
    {
      id: "3",
      number: 3,
      title:
        t("course.data-sql.mod3.title" as any) ||
        "Relacionando Información Compleja (JOINs)",
      description:
        t("course.data-sql.mod3.desc" as any) ||
        "Cruza datos de múltiples tablas como un experto.",
      topics: [
        t("course.data-sql.mod3.t1" as any) ||
          "Diferencias y usos estratégicos de INNER JOIN, LEFT JOIN, y RIGHT JOIN.",
        t("course.data-sql.mod3.t2" as any) ||
          "Subconsultas (Subqueries) para cálculos dinámicos avanzados.",
        t("course.data-sql.mod3.t3" as any) ||
          "Uso de DISTINCT y resolución de redundancias en grandes volúmenes.",
      ],
      icon: "Layers",
    },
    {
      id: "4",
      number: 4,
      title:
        t("course.data-sql.mod4.title" as any) ||
        "Integración Optimizada con Power BI",
      description:
        t("course.data-sql.mod4.desc" as any) ||
        "Conecta tu base de datos optimizada a Power BI.",
      topics: [
        t("course.data-sql.mod4.t1" as any) ||
          "Configuración de conexiones y uso del Método de Consulta Nativa en Power BI.",
        t("course.data-sql.mod4.t2" as any) ||
          "Entendiendo y forzando el Query Folding para maximizar el rendimiento.",
        t("course.data-sql.mod4.t3" as any) ||
          "Casos prácticos: de un esquema SQL complejo a una tabla plana perfecta para análisis.",
      ],
      icon: "Zap",
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
