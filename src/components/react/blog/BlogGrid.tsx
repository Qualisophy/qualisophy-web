import React, { useState, useMemo } from "react";
import { useTranslations } from "@/hooks/useTranslations";

export const BlogGrid = () => {
  const t = useTranslations();

  // IDs internos para el filtrado (No se traducen, aseguran que la lógica no se rompa)
  const [selectedCategoryId, setSelectedCategoryId] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  // Categorías con su ID y su traducción
  const categories = [
    { id: "all", label: t("blog.grid.cat.all") },
    { id: "trends", label: t("blog.grid.cat.trends") },
    { id: "inclusion", label: t("blog.grid.cat.inclusion") },
    { id: "success", label: t("blog.grid.cat.success") },
    { id: "tech", label: t("blog.grid.cat.tech") },
  ];

  // Posts movidos dentro del componente para que lean t()
  const allPosts = [
    {
      slug: "impacto-ia-testing",
      categoryId: "trends",
      category: t("blog.post1.cat"),
      title: t("blog.post1.title"),
      excerpt: t("blog.post1.desc"),
      image:
        "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=600",
      date: t("blog.post1.date"),
    },
    {
      slug: "neurodivergencia-ventaja",
      categoryId: "inclusion",
      category: t("blog.post2.cat"),
      title: t("blog.post2.title"),
      excerpt: t("blog.post2.desc"),
      image:
        "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=600",
      date: t("blog.post2.date"),
    },
    {
      slug: "caso-exito-maria",
      categoryId: "success",
      category: t("blog.post3.cat"),
      title: t("blog.post3.title"),
      excerpt: t("blog.post3.desc"),
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=600",
      date: t("blog.post3.date"),
    },
    {
      slug: "powerbi-negocios",
      categoryId: "tech",
      category: t("blog.post4.cat"),
      title: t("blog.post4.title"),
      excerpt: t("blog.post4.desc"),
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=600",
      date: t("blog.post4.date"),
    },
    {
      slug: "diversidad-equipos-agiles",
      categoryId: "inclusion",
      category: t("blog.post5.cat"),
      title: t("blog.post5.title"),
      excerpt: t("blog.post5.desc"),
      image:
        "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=600",
      date: t("blog.post5.date"),
    },
  ];

  // Filtrado en tiempo real usando IDs
  const filteredPosts = useMemo(() => {
    return allPosts.filter((post) => {
      const matchesCategory =
        selectedCategoryId === "all" || post.categoryId === selectedCategoryId;
      const matchesSearch =
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategoryId, searchQuery, allPosts]);

  return (
    <section className="py-12 min-h-screen">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* --- BARRA DE CONTROL (Búsqueda y Filtros) --- */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12 bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          {/* Categorías (Botones) */}
          <div className="flex flex-wrap gap-2 justify-center md:justify-start">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategoryId(cat.id)}
                className={`px-4 py-2 rounded-full text-sm font-bold transition-all ${
                  selectedCategoryId === cat.id
                    ? "bg-primary text-white shadow-md"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {cat.label}
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
              placeholder={t("blog.grid.search.placeholder")}
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
                      className="inline-flex items-center text-primary font-bold text-sm hover:underline"
                    >
                      {t("blog.readMore")}
                      <span className="material-symbols-outlined text-sm ml-1">
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
              {t("blog.grid.empty.title")}
            </h3>
            <p className="text-gray-500">{t("blog.grid.empty.desc")}</p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategoryId("all");
              }}
              className="mt-4 text-primary font-bold hover:underline"
            >
              {t("blog.grid.empty.clear")}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
