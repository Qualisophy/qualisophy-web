// Rutas cubiertas por los tests de regresión de QUAL-523.

export const fichasCurso = [
  "/cursos/agile/scrum-master",
  "/cursos/data/analitica-powerbi",
  "/cursos/data/sql-powerbi",
  "/cursos/desarrollo/backend-node",
  "/cursos/desarrollo/frontend-react",
  "/cursos/desarrollo/fullstack",
  "/cursos/desarrollo/java-spring",
  "/cursos/devops/git",
  "/cursos/devops/gitlab-cicd",
  "/cursos/devops/introduccion-devops",
  "/cursos/herramientas/chatbots",
  "/cursos/herramientas/excel-advanced",
  "/cursos/herramientas/excel-experto",
  "/cursos/herramientas/ofimatica-integral",
  "/cursos/herramientas/productividad-make",
  "/cursos/ia/claude",
  "/cursos/qa/bootcamp-cypress",
  "/cursos/qa/calidad-software",
  "/cursos/qa/pruebas-agiles",
  "/cursos/qa/pruebas-api",
  "/cursos/qa/pruebas-ia-generativa",
  "/cursos/qa/pruebas-junit",
  "/cursos/reconversion-laboral/triunfa-en-tu-reconversion-laboral",
];

export const categorias = [
  "/cursos",
  "/cursos/agile",
  "/cursos/data",
  "/cursos/desarrollo",
  "/cursos/devops",
  "/cursos/herramientas",
  "/cursos/ia",
  "/cursos/qa",
  "/cursos/reconversion-laboral",
];

export const posts = [
  "/blog/sello-empresa-solidaria",
  "/blog/qualisophy-top-50",
  "/blog/impacto-ia-testing",
  "/blog/neurodivergencia-ventaja",
  "/blog/caso-exito-maria",
  "/blog/powerbi-negocios",
  "/blog/diversidad-equipos-agiles",
];

/** Ids de curso con los que se llega a la inscripción (los de las fichas y los del catálogo de inscripción). */
export const idsInscripcion = [
  "agile-scrum", "data-powerbi", "data-sql", "devops-git", "devops-gitlab", "devops-intro",
  "ia-claude", "qa-agile", "qa-api", "qa-cypress", "qa-genai", "qa-junit", "qa-software",
  "reconversion-triunfa", "tools-chatbots", "tools-excel", "tools-make", "tools-office",
  "individual-excel", "individual-fullstack", "individual-java", "individual-node", "individual-react",
  "dev-fullstack", "dev-frontend", "dev-backend", "dev-java",
];

export const inscripciones = [
  "/course-enrollment",
  ...idsInscripcion.map((id) => `/course-enrollment?course=${id}`),
  "/course-enrollment?course=ia-claude&type=interest",
];

/** Páginas con captura visual: una de cada plantilla y variante. */
export const visuales = [
  "/",
  "/cursos",
  "/cursos/qa",
  "/cursos/desarrollo",
  "/cursos/reconversion-laboral",
  "/cursos/qa/bootcamp-cypress", // con instructor y pronto pago
  "/cursos/qa/calidad-software", // con "a qué te dedicarás" y "de qué trata"
  "/cursos/reconversion-laboral/triunfa-en-tu-reconversion-laboral", // garantía, oferta, FAQ
  "/cursos/ia/claude", // "por definir"
  "/cursos/agile/scrum-master", // sin instructor
  "/cursos/desarrollo/fullstack",
  "/course-enrollment?course=qa-cypress",
  "/course-enrollment?course=reconversion-triunfa",
  "/course-enrollment?course=ia-claude&type=interest",
  "/blog",
  "/blog/sello-empresa-solidaria",
  "/blog/impacto-ia-testing",
  "/team", // sección "Blog" con los 3 últimos posts
];

/** Convierte una ruta en un nombre de fichero de snapshot. */
export const nombre = (ruta: string) =>
  ruta === "/" ? "home" : ruta.replace(/^\//, "").replace(/[/?=&]/g, "_");
