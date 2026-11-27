/**
 * Acceso a los cursos B2C de la fuente única (src/content, ver src/content.config.ts).
 * Convierte cada curso a la forma que esperan los componentes existentes
 * (Course, CourseGridCard, CourseCatalogGrid, CourseTreeModal, inscripción, migas de pan),
 * para que ninguna vista tenga datos de cursos escritos a mano.
 */
import { getCollection, getEntry, type CollectionEntry } from "astro:content";
import type { ImageMetadata } from "astro";

export type Curso = CollectionEntry<"cursos">["data"];
export type Categoria = CollectionEntry<"categorias">["data"] & { id: string };

const DESCUENTO_ANTIGUOS_ALUMNOS = "25% de descuento extra para antiguos alumnos";

const srcImagen = (imagen: ImageMetadata | string) => (typeof imagen === "string" ? imagen : imagen.src);

export const esProximamente = (curso: Curso) => curso.inicio.toLowerCase().includes("por definir");

export const urlCurso = (curso: Curso) => `/cursos/${curso.categoria.id}/${curso.slug}`;

/** Categorías ordenadas. Por defecto, solo las visibles. */
export async function getCategorias({ incluirOcultas = false } = {}): Promise<Categoria[]> {
  const categorias = await getCollection("categorias");
  return categorias
    .map((c) => ({ ...c.data, id: c.id }))
    .filter((c) => incluirOcultas || c.visible)
    .sort((a, b) => a.orden - b.orden);
}

/** Cursos ordenados por categoría y por su orden dentro de ella. Por defecto, solo los visibles. */
export async function getCursos({ incluirOcultos = false } = {}): Promise<Curso[]> {
  const [cursos, categorias] = await Promise.all([getCollection("cursos"), getCategorias({ incluirOcultas: true })]);
  const ordenCategoria = new Map(categorias.map((c) => [c.id, c.orden]));
  return cursos
    .map((c) => c.data)
    .filter((c) => incluirOcultos || c.visible)
    .sort(
      (a, b) =>
        (ordenCategoria.get(a.categoria.id) ?? 0) - (ordenCategoria.get(b.categoria.id) ?? 0) || a.orden - b.orden,
    );
}

export async function getCurso(id: string): Promise<Curso | undefined> {
  return (await getEntry("cursos", id))?.data;
}

// ---------- Tarjetas (catálogo /cursos, páginas de categoría, modal) ----------

export function tarjetaCurso(curso: Curso, categoria: Categoria) {
  return {
    id: curso.id,
    title: curso.nombre,
    description: curso.resumen,
    image: srcImagen(curso.imagen),
    duration: curso.duracionCorta,
    level: curso.nivel,
    modality: curso.modalidad,
    categoryName: categoria.etiqueta,
    href: urlCurso(curso),
  };
}

export type TarjetaCurso = ReturnType<typeof tarjetaCurso>;

/** Tarjetas de los cursos de una categoría (incluidos los ocultos: su página de categoría los sigue mostrando). */
export async function getTarjetasCategoria(categoriaId: string): Promise<TarjetaCurso[]> {
  const categorias = await getCategorias({ incluirOcultas: true });
  const categoria = categorias.find((c) => c.id === categoriaId);
  if (!categoria) throw new Error(`Categoría de cursos desconocida: ${categoriaId}`);
  const cursos = await getCursos({ incluirOcultos: true });
  return cursos.filter((c) => c.categoria.id === categoriaId).map((c) => tarjetaCurso(c, categoria));
}

/** Catálogo completo de categorías visibles con sus cursos visibles (CourseCatalogGrid y CourseTreeModal). */
export async function getCatalogo() {
  const [categorias, cursos] = await Promise.all([getCategorias(), getCursos()]);
  return categorias.map((categoria) => ({
    id: categoria.id,
    title: categoria.nombre,
    subtitle: categoria.subtitulo,
    icon: categoria.icono,
    headerColor: categoria.colores.cabecera,
    textColor: categoria.colores.texto,
    hoverBorder: categoria.colores.bordeHover,
    hoverText: categoria.colores.textoHover,
    link: `/cursos/${categoria.id}`,
    courses: cursos.filter((c) => c.categoria.id === categoria.id).map((c) => tarjetaCurso(c, categoria)),
  }));
}

export type CategoriaCatalogo = Awaited<ReturnType<typeof getCatalogo>>[number];

// ---------- Ficha del curso ----------

export async function fichaCurso(curso: Curso) {
  const { precio } = curso;

  let instructor = null;
  if (curso.instructor) {
    const perfil = (await getEntry(curso.instructor.id))?.data;
    if (!perfil) throw new Error(`Instructor desconocido en ${curso.id}: ${curso.instructor.id.id}`);
    instructor = {
      name: perfil.nombre,
      title: curso.instructor.cargo ?? perfil.cargo,
      experience: curso.instructor.experiencia ?? perfil.experiencia,
      description: curso.instructor.descripcion ?? perfil.descripcion,
      image: perfil.foto?.src,
      certifications: curso.instructor.certificaciones ?? perfil.certificaciones,
    };
  }

  const textoBase = curso.descripcion ?? curso.resumen;
  const textoSeo = curso.descripcionSeo ?? (textoBase.length > 160 ? `${textoBase.substring(0, 160)}...` : textoBase);

  return {
    courseId: curso.id,
    courseName: curso.nombre,
    seo: { title: `${curso.nombre} - Qualisophy`, description: textoSeo, image: srcImagen(curso.imagen) },
    isComingSoon: esProximamente(curso),
    courseDescription: curso.descripcion,
    whatIsAbout: curso.deQueTrata,
    job: curso.salidasProfesionales,
    prerequisites: curso.requisitos,
    faqs: curso.faqs?.map((f) => ({ question: f.pregunta, answer: f.respuesta })),
    modules: curso.temario.map((m, i) => ({
      id: String(i + 1),
      number: i + 1,
      title: m.titulo,
      description: m.descripcion,
      topics: m.temas,
      icon: m.icono,
    })),
    instructor,
    courseDetails: {
      startDate: curso.inicio,
      duration: curso.duracion,
      schedule: curso.horario,
      regularPrice: precio.normal,
      earlyBirdPrice: precio.prontoPago
        ? precio.prontoPago.hasta
          ? `${precio.prontoPago.precio} (antes del ${precio.prontoPago.hasta})`
          : precio.prontoPago.precio
        : "",
      oldStudentsDiscount: precio.antiguosAlumnos,
      modality: curso.modalidadEnFicha ? curso.modalidad : undefined,
      offerPrice: precio.oferta?.precio,
      guarantee: precio.garantia,
      offerText: precio.oferta?.texto,
    },
  };
}

// ---------- Inscripción ----------

export async function datosInscripcion(curso: Curso) {
  const { precio } = curso;
  const categoria = (await getCategorias({ incluirOcultas: true })).find((c) => c.id === curso.categoria.id);
  const proximamente = esProximamente(curso);
  return {
    id: curso.id,
    name: curso.nombre,
    description: curso.resumen,
    image: srcImagen(curso.imagen),
    startDate: curso.inicio,
    duration: curso.duracion,
    modality: curso.modalidad === "Online" ? "Online en vivo" : curso.modalidad,
    price: precio.prontoPago?.precio ?? precio.oferta?.precio ?? precio.normal,
    /** Precio normal tachado, solo cuando hay oferta (el pronto pago se explica en priceSubtext) */
    previousPrice: precio.oferta ? precio.normal : undefined,
    priceSubtext: precio.prontoPago
      ? precio.prontoPago.hasta
        ? `reservando antes del ${precio.prontoPago.hasta} (precio original: ${precio.normal})`
        : `precio original: ${precio.normal}`
      : precio.oferta?.texto,
    formerStudentDiscount: proximamente ? undefined : (precio.antiguosAlumnos ?? DESCUENTO_ANTIGUOS_ALUMNOS),
    categoryUrl: `/cursos/${curso.categoria.id}`,
    categoryName: categoria?.migas ?? curso.categoria.id,
    courseUrl: urlCurso(curso),
  };
}

// ---------- Migas de pan ----------

/** Nombre que muestran las migas de pan para cada tramo de URL de categoría o curso. */
export async function getNombresMigas(): Promise<Record<string, string>> {
  const [categorias, cursos] = await Promise.all([
    getCategorias({ incluirOcultas: true }),
    getCursos({ incluirOcultos: true }),
  ]);
  return {
    ...Object.fromEntries(categorias.map((c) => [c.id, c.migas])),
    ...Object.fromEntries(cursos.map((c) => [c.slug, c.nombre])),
  };
}
