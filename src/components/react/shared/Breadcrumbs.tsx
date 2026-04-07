import React, { useEffect, useState } from "react";
import { useTranslations } from "@/hooks/useTranslations";

interface BreadcrumbsProps {
  className?: string;
  pathname?: string;
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({
  className = "",
  pathname = "",
}) => {
  const t = useTranslations();
  const [paths, setPaths] = useState<string[]>([]);

  useEffect(() => {
    // Tomamos la ruta del servidor (Astro) o del navegador si falla
    const currentPath = pathname || window.location.pathname;
    setPaths(currentPath.split("/").filter(Boolean));
  }, [pathname]);

  const formatName = (slug: string) => {
    const key = `route.${slug}`;
    const translated = t(key as any);

    if (translated && translated !== key) {
      return translated;
    }

    return slug.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase());
  };

  let accumulatePath = "";

  return (
    <nav
      aria-label="Breadcrumb"
      className={`text-sm text-slate-500 w-full ${className}`}
    >
      <ol className="list-none p-0 inline-flex items-center flex-wrap gap-2">
        {/* Home */}
        <li className="flex items-center">
          <a
            href="/"
            className="hover:text-primary transition-colors flex items-center gap-1"
            aria-label="Ir al inicio"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
              <polyline points="9 22 9 12 15 12 15 22"></polyline>
            </svg>
          </a>
        </li>

        {/* Dynamic Paths */}
        {paths.map((path, index) => {
          accumulatePath += `/${path}`;
          const isLast = index === paths.length - 1;
          const name = formatName(path);

          return (
            <li key={path} className="flex items-center">
              <span className="text-slate-400 mx-2">/</span>

              {isLast ? (
                <span
                  className="text-secondary font-medium"
                  aria-current="page"
                >
                  {name}
                </span>
              ) : (
                <a
                  href={accumulatePath}
                  className="hover:text-primary transition-colors"
                >
                  {name}
                </a>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};
