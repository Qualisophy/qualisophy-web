import React from "react";
import type { TarjetaPost } from "@/lib/blog";


interface BlogSectionProps {
  /** Últimos posts, del más reciente al más antiguo (getTarjetasPosts(3) de src/lib/blog.ts) */
  posts: TarjetaPost[];
}

export const BlogSection: React.FC<BlogSectionProps> = ({ posts }) => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary font-heading mb-4">
            Nuestro Blog
          </h2>
          <p className="text-gray-600 font-primary max-w-2xl mx-auto">
            Conoce las últimas tendencias en tecnología, inclusión y crecimiento
            profesional.
          </p>
        </div>

        {/* Grid de 3 Post Destacados */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {posts.slice(0, 3).map((post, idx) => (
            <article
              key={idx}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col h-full border border-gray-100"
            >
              {/* Enlace en la imagen */}
              <a
                href={`/blog/${post.slug}`}
                className="h-48 overflow-hidden relative block"
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
                <span className="text-gray-400 text-xs mb-3 block">
                  {post.date}
                </span>

                {/* Enlace en el título */}
                <a
                  href={`/blog/${post.slug}`}
                  className="block group-hover:text-primary transition-colors"
                >
                  <h3 className="text-xl font-bold text-secondary mb-3 leading-tight">
                    {post.title}
                  </h3>
                </a>

                <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-1">
                  {post.excerpt}
                </p>

                {/* Enlace en el botón - FIX: Flecha sin subrayado */}
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
            </article>
          ))}
        </div>

        {/* Botón Ver Todos */}
        <div className="text-center">
          <a
            href="/blog"
            className="inline-flex items-center gap-2 bg-white border border-gray-300 text-secondary hover:text-primary hover:border-primary font-bold py-3 px-8 rounded-lg transition-all shadow-sm hover:shadow-md"
          >
            Ver todos los artículos
            <span className="material-symbols-outlined text-sm">grid_view</span>
          </a>
        </div>
      </div>
    </section>
  );
};
