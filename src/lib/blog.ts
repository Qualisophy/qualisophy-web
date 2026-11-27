/**
 * Acceso a los posts del blog de la fuente única (src/content/blog, ver src/content.config.ts).
 * Convierte cada post a la forma que esperan la página del post, BlogGrid y BlogSection.
 */
import { getCollection, type CollectionEntry } from "astro:content";
import type { ImageMetadata } from "astro";

export type Post = CollectionEntry<"blog">;

const MESES = ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"];

/** "13 Oct, 2026" */
export const formatearFecha = (fecha: Date) =>
  `${fecha.getUTCDate()} ${MESES[fecha.getUTCMonth()]}, ${fecha.getUTCFullYear()}`;

const srcImagen = (imagen: ImageMetadata | string) => (typeof imagen === "string" ? imagen : imagen.src);

/** Posts ordenados del más reciente al más antiguo. */
export async function getPosts(): Promise<Post[]> {
  const posts = await getCollection("blog");
  return posts.sort((a, b) => b.data.fecha.getTime() - a.data.fecha.getTime());
}

/** Datos de la tarjeta del listado del blog y de la sección "Blog". */
export function tarjetaPost(post: Post) {
  const { data } = post;
  return {
    slug: post.id,
    category: data.categoria,
    title: data.titulo,
    excerpt: data.resumen,
    image: srcImagen(data.imagenTarjeta ?? data.imagen),
    date: formatearFecha(data.fecha),
  };
}

export type TarjetaPost = ReturnType<typeof tarjetaPost>;

export async function getTarjetasPosts(limite?: number): Promise<TarjetaPost[]> {
  const posts = await getPosts();
  return posts.slice(0, limite).map(tarjetaPost);
}

/** Datos de la página del post. */
export function paginaPost(post: Post) {
  const { data } = post;
  return {
    slug: post.id,
    title: data.titulo,
    category: data.categoria,
    date: formatearFecha(data.fecha),
    image: srcImagen(data.imagen),
    content: {
      intro: data.contenido.intro,
      badgeImage: data.contenido.insignia?.src,
      sections: data.contenido.secciones.map((s) => ({
        title: s.titulo,
        paragraphs: s.parrafos,
        keyFact: s.datoClave ? { title: s.datoClave.titulo, text: s.datoClave.texto } : undefined,
        list: s.lista,
        closingParagraph: s.cierre,
      })),
    },
  };
}

/** Nombre que muestran las migas de pan para cada post (tramo de URL → nombre). */
export async function getNombresMigasBlog(): Promise<Record<string, string>> {
  const posts = await getCollection("blog");
  return Object.fromEntries(posts.map((p) => [p.id, p.data.migas ?? p.data.titulo]));
}
