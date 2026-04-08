import React from "react";
import { ProgramHero } from "@/components/react/programs/ProgramHero";
import { CourseGridCard } from "@/components/react/course/CourseGridCard";
import { Breadcrumbs } from "@/components/react/shared/Breadcrumbs";
import { courseCategories } from "@/data/courseCatalog";
import { useTranslations } from "@/hooks/useTranslations";

export const DevopsIndexContent: React.FC<{ pathname: string }> = ({
  pathname,
}) => {
  const t = useTranslations();

  const categoryData = courseCategories.find((c) => c.id === "devops");
  const courses = categoryData?.courses || [];

  // Traducción "al vuelo" de las tarjetas
  const translatedCourses = courses.map((course) => {
    const transTitle = t(`course.${course.id}.title` as any);
    const transDesc = t(`course.${course.id}.desc` as any);
    const transCategory = t("cat.devops.title" as any);
    return {
      ...course,
      title:
        transTitle && transTitle !== `course.${course.id}.title`
          ? transTitle
          : course.title,
      description:
        transDesc && transDesc !== `course.${course.id}.desc`
          ? transDesc
          : course.description,
      categoryName:
        transCategory && transCategory !== "cat.devops.title"
          ? transCategory
          : course.categoryName,
    };
  });

  return (
    <>
      <ProgramHero
        title={t("devops.index.hero.title1" as any) || "Formación en"}
        highlight={t("devops.index.hero.title2" as any) || "DevOps & Gestión"}
        subtitle={
          t("devops.index.hero.subtitle" as any) ||
          "Rompe los silos entre desarrollo y operaciones. Aprende integración continua, automatización de despliegues y observabilidad."
        }
        backgroundImage="https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?auto=format&fit=crop&q=80"
        ctaText={t("devops.index.hero.cta" as any) || "Ver Itinerarios"}
        scrollToId="courses-grid"
      />

      <div className="bg-gray-50/50 min-h-screen">
        <div className="container mx-auto px-6 pt-8 pb-4">
          <Breadcrumbs pathname={pathname} />
        </div>

        <section id="courses-grid" className="py-12 pb-24">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4 border-b border-gray-200 pb-6">
              <div className="max-w-2xl">
                <h2 className="text-3xl font-bold font-heading text-secondary mb-2">
                  {t("devops.index.section.title" as any) ||
                    "Cultura e Integración Continua"}
                </h2>
                <p className="text-gray-600 font-primary">
                  {t("devops.index.section.subtitle" as any) ||
                    "Domina las herramientas que aceleran la entrega de software de alta calidad."}
                </p>
              </div>
              <div className="hidden md:block text-sm text-gray-400 font-medium">
                {t("devops.index.showing" as any) || "Mostrando"}{" "}
                {courses.length} {t("devops.index.courses" as any) || "cursos"}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {translatedCourses.map((course) => (
                <CourseGridCard
                  key={course.id}
                  title={course.title}
                  description={course.description}
                  imageSrc={course.image}
                  href={course.href}
                  level={course.level as any}
                  duration={course.duration}
                  modality={course.modality as any}
                  category={course.categoryName}
                />
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
