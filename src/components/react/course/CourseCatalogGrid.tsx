import React, { useState, useMemo } from "react";
import { courseCategories, allCoursesList } from "@/data/courseCatalog";
import { CourseGridCard } from "./CourseGridCard";
import { useTranslations } from "@/hooks/useTranslations";

export const CourseCatalogGrid = () => {
  const [selectedCategoryId, setSelectedCategoryId] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const t = useTranslations();

  // Funciones de ayuda para obtener la traducción dinámica
  const getTranslatedCategoryTitle = (id: string, fallback: string) => {
    const key = `cat.${id}.title`;
    const translated = t(key as any);
    return translated && translated !== key ? translated : fallback;
  };

  const getTranslatedCourseTitle = (id: string, fallback: string) => {
    const key = `course.${id}.title`;
    const translated = t(key as any);
    return translated && translated !== key ? translated : fallback;
  };

  const getTranslatedCourseDesc = (id: string, fallback: string) => {
    const key = `course.${id}.desc`;
    const translated = t(key as any);
    return translated && translated !== key ? translated : fallback;
  };

  // Preparamos el array de categorías para los botones con sus IDs y traducciones
  const categories = [
    { id: "all", label: t("courses.grid.cat.all") },
    ...courseCategories.map((cat) => ({
      id: cat.id,
      label: getTranslatedCategoryTitle(cat.id, cat.title),
    })),
  ];

  // Traducimos los cursos "al vuelo" para que el buscador encuentre los textos en francés
  const translatedCourses = useMemo(() => {
    return allCoursesList.map((course) => {
      const parentCategory = courseCategories.find((c) =>
        c.courses.some((cc) => cc.id === course.id),
      );

      return {
        ...course,
        parentCategoryId: parentCategory?.id || "",
        translatedTitle: getTranslatedCourseTitle(course.id, course.title),
        translatedDesc: getTranslatedCourseDesc(course.id, course.description),
        translatedCategoryName: parentCategory
          ? getTranslatedCategoryTitle(parentCategory.id, parentCategory.title)
          : course.categoryName,
      };
    });
  }, [t]);

  // Filtrado final utilizando los cursos traducidos
  const filteredCourses = useMemo(() => {
    return translatedCourses.filter((course) => {
      const matchesCategory =
        selectedCategoryId === "all" ||
        course.parentCategoryId === selectedCategoryId;

      const matchesSearch =
        course.translatedTitle
          .toLowerCase()
          .includes(searchQuery.toLowerCase()) ||
        course.translatedDesc.toLowerCase().includes(searchQuery.toLowerCase());

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategoryId, searchQuery, translatedCourses]);

  const activeCategoryLabel = categories.find(
    (c) => c.id === selectedCategoryId,
  )?.label;

  return (
    <section className="py-12 min-h-screen bg-gray-50/30">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* --- BARRA DE CONTROL --- */}
        <div className="mb-8 bg-white p-4 md:p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col lg:flex-row gap-6 items-start justify-between">
          {/* Contenedor de Botones (Flex Wrap) */}
          <div className="flex flex-wrap gap-2 flex-1">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategoryId(cat.id)}
                className={`px-5 py-2.5 rounded-full text-sm font-bold transition-all ${
                  selectedCategoryId === cat.id
                    ? "bg-primary text-white shadow-md"
                    : "bg-gray-50 text-gray-600 hover:bg-gray-100 border border-gray-100 hover:border-gray-200"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Buscador redondeado a la derecha */}
          <div className="relative w-full lg:w-80 shrink-0">
            <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
              search
            </span>
            <input
              type="text"
              placeholder={t("courses.grid.search.placeholder")}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-2.5 rounded-full border border-gray-200 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all bg-gray-50/50 hover:bg-white text-sm"
            />
          </div>
        </div>

        {/* --- CABECERA DE RESULTADOS (Mostrando X cursos) --- */}
        <div className="flex justify-between items-end mb-6 px-2">
          <h2 className="text-2xl font-bold font-heading text-secondary">
            {selectedCategoryId === "all"
              ? t("courses.grid.allCourses")
              : activeCategoryLabel}
          </h2>
          <div className="text-sm text-gray-500 font-medium">
            {t("courses.grid.showing")} {filteredCourses.length}{" "}
            {filteredCourses.length === 1
              ? t("courses.grid.course")
              : t("courses.grid.courses")}
          </div>
        </div>

        {/* --- GRID DE RESULTADOS --- */}
        {filteredCourses.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCourses.map((course) => (
              <CourseGridCard
                key={course.id}
                title={course.translatedTitle}
                description={course.translatedDesc}
                imageSrc={course.image}
                href={course.href}
                level={course.level as any}
                duration={course.duration}
                modality={course.modality as any}
                category={course.translatedCategoryName}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white rounded-2xl border border-gray-100 shadow-sm">
            <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="material-symbols-outlined text-4xl text-gray-400">
                sentiment_dissatisfied
              </span>
            </div>
            <h3 className="text-xl font-bold text-gray-600 mb-2">
              {t("courses.grid.empty.title")}
            </h3>
            <p className="text-gray-500">{t("courses.grid.empty.desc")}</p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategoryId("all");
              }}
              className="mt-4 text-primary font-bold hover:underline px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors"
            >
              {t("courses.grid.empty.clear")}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
