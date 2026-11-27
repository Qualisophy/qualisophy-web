import React, { useState, useMemo } from "react";
import type { TarjetaPost } from "@/lib/blog";
import { CATEGORIAS_BLOG } from "@/lib/blog-categorias";


const categories = ["Todos", ...CATEGORIAS_BLOG];

interface BlogGridProps {
  /** Posts del más reciente al más antiguo (getTarjetasPosts() de src/lib/blog.ts) */
  posts: TarjetaPost[];
}

export const BlogGrid: React.FC<BlogGridProps> = ({ posts: allPosts }) => {
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const [searchQuery, setSearchQuery] = useState("");

  // Filtrado en tiempo real
  const filteredPosts = useMemo(() => {
    return allPosts.filter((post) => {
      const matchesCategory =
        selectedCategory === "Todos" || post.category === selectedCategory;
      const matchesSearch =
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [allPosts, selectedCategory, searchQuery]);

  return (
    <section className="py-12 min-h-screen">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* --- BARRA DE CONTROL (Búsqueda y Filtros) --- */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12 bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          {/* Categorías (Botones) */}
          <div className="flex flex-wrap gap-2 justify-center md:justify-start">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-bold transition-all ${
                  selectedCategory === cat
                    ? "bg-primary text-white shadow-md"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Buscador */}
          <div className="relative w-full md:w-80">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
              search
            </span>
            <input
              type="text"
              placeholder="Buscar artículos..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
            />
          </div>
        </div>

        {/* --- GRID DE RESULTADOS --- */}
        {filteredPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <article
                key={post.slug}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col h-full border border-gray-100"
              >
                <a
                  href={`/blog/${post.slug}`}
                  className="h-56 overflow-hidden relative block"
                >
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-secondary text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                    {post.category}
                  </div>
                </a>

                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-2 text-gray-400 text-xs mb-3">
                    <span className="material-symbols-outlined text-sm">
                      calendar_today
                    </span>
                    {post.date}
                  </div>

                  <a
                    href={`/blog/${post.slug}`}
                    className="block group-hover:text-primary transition-colors"
                  >
                    <h3 className="text-xl font-bold text-secondary mb-3 leading-tight line-clamp-2">
                      {post.title}
                    </h3>
                  </a>

                  <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-1 line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="pt-4 border-t border-gray-50 mt-auto">
                    <a
                      href={`/blog/${post.slug}`}
                      className="group inline-flex items-center text-primary font-bold text-sm no-underline mt-auto"
                    >
                      <span className="group-hover:underline">
                        Leer artículo completo
                      </span>
                      <span className="material-symbols-outlined text-sm ml-1 inline-block !no-underline transition-transform group-hover:translate-x-1">
                        arrow_forward
                      </span>
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          /* Estado Vacío */
          <div className="text-center py-20">
            <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="material-symbols-outlined text-4xl text-gray-400">
                sentiment_dissatisfied
              </span>
            </div>
            <h3 className="text-xl font-bold text-gray-600 mb-2">
              No se encontraron artículos
            </h3>
            <p className="text-gray-500">
              Intenta con otra búsqueda o categoría.
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("Todos");
              }}
              className="mt-4 text-primary font-bold hover:underline"
            >
              Limpiar filtros
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
