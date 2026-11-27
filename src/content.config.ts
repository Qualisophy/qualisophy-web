/**
 * Fuente única de datos de la web (QUAL-523).
 *
 * - categorias:  src/content/categorias.yaml          → categorías de cursos B2C
 * - instructores: src/content/instructores/<id>.yaml  → perfil base de cada instructor
 * - cursos:      src/content/cursos/<categoria>/<slug>.yaml → todo lo de un curso B2C
 * - blog:        src/content/blog/<slug>.yaml → un post del blog (el nombre del fichero es su URL)
 *
 * Si falta un campo obligatorio o tiene un valor no válido, `pnpm build` falla e indica el fichero.
 * Las vistas no leen estas colecciones directamente: usan los helpers de `src/lib/cursos.ts` y `src/lib/blog.ts`.
 */
import { defineCollection, reference, z } from "astro:content";
import { file, glob } from "astro/loaders";
import { CATEGORIAS_BLOG } from "@/lib/blog-categorias";

const textoNoVacio = z.string().trim().min(1);

const categorias = defineCollection({
  loader: file("src/content/categorias.yaml"),
  schema: z.object({
    /** Nombre en el catálogo /cursos y en el modal "Ver programas formativos" */
    nombre: textoNoVacio,
    /** Nombre en las migas de pan */
    migas: textoNoVacio,
    /** Etiqueta corta que se muestra en las tarjetas de curso */
    etiqueta: textoNoVacio,
    subtitulo: textoNoVacio,
    /** Icono de Material Symbols */
    icono: textoNoVacio,
    /** Clases de Tailwind de la tarjeta de categoría */
    colores: z.object({
      cabecera: textoNoVacio,
      texto: textoNoVacio,
      bordeHover: textoNoVacio,
      textoHover: textoNoVacio,
    }),
    /** Orden en el catálogo y en el modal */
    orden: z.number().int(),
    /** false = no aparece en el catálogo ni en el modal (sus páginas siguen funcionando) */
    visible: z.boolean().default(true),
  }),
});

const instructores = defineCollection({
  loader: glob({ pattern: "*.yaml", base: "src/content/instructores" }),
  schema: ({ image }) =>
    z.object({
      nombre: textoNoVacio,
      foto: image().optional(),
      cargo: textoNoVacio,
      experiencia: textoNoVacio,
      descripcion: textoNoVacio,
      certificaciones: z.array(textoNoVacio).default([]),
    }),
});

const cursos = defineCollection({
  loader: glob({
    pattern: "**/*.yaml",
    base: "src/content/cursos",
    // El id de la entrada es el id del curso (el que se envía a Make en la inscripción)
    generateId: ({ data }) => String(data.id),
  }),
  schema: ({ image }) =>
    z.object({
      // --- Datos básicos ---
      /** Id del curso: se usa en la inscripción (?course=<id>) y se envía a Make. No cambiar. */
      id: z.string().regex(/^[a-z0-9-]+$/, "solo minúsculas, números y guiones"),
      nombre: textoNoVacio,
      categoria: reference("categorias"),
      /** Último tramo de la URL: /cursos/<categoria>/<slug> */
      slug: z.string().regex(/^[a-z0-9-]+$/, "solo minúsculas, números y guiones"),
      /** false = no aparece en el catálogo, el modal ni el desplegable de inscripción */
      visible: z.boolean().default(true),
      /** Orden dentro de su categoría */
      orden: z.number().int(),
      /** Imagen local (ruta relativa a este fichero) o URL externa */
      imagen: z.union([image(), z.string().url()]),

      // --- Textos ---
      /** Resumen corto: tarjetas del catálogo, modal e inscripción */
      resumen: textoNoVacio,
      /** Descripción de la ficha */
      descripcion: textoNoVacio.optional(),
      /** Meta description. Si no se indica, se usa la descripción (o el resumen) recortada */
      descripcionSeo: textoNoVacio.optional(),
      deQueTrata: textoNoVacio.optional(),
      salidasProfesionales: textoNoVacio.optional(),
      requisitos: textoNoVacio.optional(),

      // --- Tarjeta del catálogo ---
      nivel: z.enum(["Principiante", "Intermedio", "Avanzado"]),
      modalidad: z.enum(["Online", "Presencial", "Híbrido"]).default("Online"),
      /** true = la ficha muestra la modalidad en lugar del horario en la barra superior */
      modalidadEnFicha: z.boolean().default(false),

      // --- Fechas ---
      /** Fecha en texto ("27 de Octubre de 2026"). "Por definir" activa el modo "próximamente" */
      inicio: textoNoVacio,
      /** Duración en la ficha y la inscripción ("36 horas (6 semanas)") */
      duracion: textoNoVacio,
      /** Duración corta en la tarjeta ("36h") */
      duracionCorta: textoNoVacio,
      /** "Días / horas" ("Martes y Jueves / 18:00 - 21:00") o solo horas */
      horario: textoNoVacio,

      // --- Precio ---
      precio: z.object({
        normal: textoNoVacio,
        prontoPago: z
          .object({
            precio: textoNoVacio,
            /** Fecha límite en texto ("13 de octubre de 2026") */
            hasta: textoNoVacio.optional(),
          })
          .optional(),
        /** Si no se indica, se muestra "25% de descuento extra para antiguos alumnos" */
        antiguosAlumnos: textoNoVacio.optional(),
        garantia: textoNoVacio.optional(),
        /** Precio rebajado por tiempo limitado: el precio normal se muestra tachado junto a este */
        oferta: z
          .object({
            precio: textoNoVacio,
            texto: textoNoVacio.default("Oferta exclusiva por tiempo limitado"),
          })
          .optional(),
      }),

      // --- Contenido de la ficha ---
      temario: z
        .array(
          z.object({
            titulo: textoNoVacio,
            descripcion: textoNoVacio,
            temas: z.array(textoNoVacio).min(1),
            /** Icono de lucide-react (ver CourseItinerary) */
            icono: textoNoVacio.default("BookOpen"),
          }),
        )
        .min(1),
      /** Perfil de src/content/instructores; los campos indicados aquí sustituyen a los del perfil en este curso */
      instructor: z
        .object({
          id: reference("instructores"),
          cargo: textoNoVacio.optional(),
          experiencia: textoNoVacio.optional(),
          descripcion: textoNoVacio.optional(),
          certificaciones: z.array(textoNoVacio).optional(),
        })
        .optional(),
      faqs: z.array(z.object({ pregunta: textoNoVacio, respuesta: textoNoVacio })).optional(),
    }),
});

const imagenLocalOUrl = (image: () => z.ZodTypeAny) => z.union([image(), z.string().url()]);

const blog = defineCollection({
  loader: glob({ pattern: "*.yaml", base: "src/content/blog" }),
  schema: ({ image }) =>
    z.object({
      titulo: textoNoVacio,
      categoria: z.enum(CATEGORIAS_BLOG),
      /** Fecha de publicación (AAAA-MM-DD). Ordena el blog y la home; se muestra como "13 Oct, 2026" */
      fecha: z.coerce.date(),
      /** Imagen del post (cabecera). Local (ruta relativa a este fichero) o URL externa */
      imagen: imagenLocalOUrl(image),
      /** Imagen de las tarjetas (listado y home). Si no se indica, se usa `imagen` */
      imagenTarjeta: imagenLocalOUrl(image).optional(),
      /** Resumen de las tarjetas del listado y de la home */
      resumen: textoNoVacio,
      /** Nombre corto en las migas de pan. Si no se indica, se usa el título */
      migas: textoNoVacio.optional(),
      contenido: z.object({
        intro: textoNoVacio,
        /** Imagen de galardón o insignia bajo la introducción */
        insignia: image().optional(),
        secciones: z
          .array(
            z.object({
              titulo: textoNoVacio,
              parrafos: z.array(textoNoVacio).min(1),
              datoClave: z.object({ titulo: textoNoVacio, texto: textoNoVacio }).optional(),
              /** Puntos de la lista. Admiten HTML sencillo (<strong>, <a>) */
              lista: z.array(textoNoVacio).optional(),
              cierre: textoNoVacio.optional(),
            }),
          )
          .min(1),
      }),
    }),
});

export const collections = { categorias, instructores, cursos, blog };
