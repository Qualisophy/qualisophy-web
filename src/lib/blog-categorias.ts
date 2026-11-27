/** Categorías del blog, en el orden de los filtros del listado. Las valida el esquema de src/content.config.ts. */
export const CATEGORIAS_BLOG = ["Noticias", "Tendencias", "Inclusión", "Casos de Éxito", "Tecnología"] as const;

export type CategoriaBlog = (typeof CATEGORIAS_BLOG)[number];
