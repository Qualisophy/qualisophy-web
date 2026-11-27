import { test, expect } from "@playwright/test";
import { abrir, prepararPagina } from "./helpers";
import { fichasCurso, categorias, posts, inscripciones, nombre } from "./rutas";

// El contenido es el mismo en móvil y escritorio: se comprueba solo en escritorio.
test.beforeEach(({}, info) => test.skip(info.project.name !== "escritorio", "solo escritorio"));

const rutas = ["/", "/blog", "/team", ...categorias, ...fichasCurso, ...posts, ...inscripciones];

for (const ruta of rutas) {
  test(`contenido ${ruta}`, async ({ page }) => {
    expect(await abrir(page, ruta), "código HTTP").toBe(200);

    // Datos SEO de la cabecera
    const seo = await page.evaluate(() => {
      const meta = (sel: string) => document.querySelector(sel)?.getAttribute("content") ?? null;
      return {
        title: document.title,
        description: meta('meta[name="description"]'),
        ogTitle: meta('meta[property="og:title"]'),
        ogDescription: meta('meta[property="og:description"]'),
        ogImage: meta('meta[property="og:image"]'),
        canonical: document.querySelector('link[rel="canonical"]')?.getAttribute("href") ?? null,
      };
    });
    expect(JSON.stringify(seo, null, 2)).toMatchSnapshot(`${nombre(ruta)}.seo.json`);

    // Imágenes del contenido (src sin parámetros de Vite + alt)
    const imagenes = await page.locator("main img").evaluateAll((imgs) =>
      imgs.map((i) => `${(i.getAttribute("src") ?? "").split("?")[0]} | ${i.getAttribute("alt") ?? ""}`),
    );
    expect(imagenes.join("\n")).toMatchSnapshot(`${nombre(ruta)}.imagenes.txt`);

    // Texto visible exacto (el snapshot ARIA generaliza los números como \d+: este no)
    expect(await page.locator("main").innerText()).toMatchSnapshot(`${nombre(ruta)}.texto.txt`);

    // Encabezados, enlaces (con su URL) y estructura visibles
    await expect(page.locator("main")).toMatchAriaSnapshot({ name: `${nombre(ruta)}.aria.yml` });
  });
}

test("la redirección de la campaña de Cypress sigue funcionando", async ({ page }) => {
  await prepararPagina(page);
  const respuesta = await page.request.get("/learning/qa/cypress-bootcamp", { maxRedirects: 0 });
  expect(respuesta.status()).toBe(301);
  expect(respuesta.headers()["location"]).toBe("/cursos/qa/bootcamp-cypress");
});

test("catálogo /cursos: cada filtro de categoría", async ({ page }) => {
  await abrir(page, "/cursos");
  const filtros = page.locator("main button.rounded-full");
  const nombres = await filtros.allInnerTexts();
  expect(nombres.join("\n")).toMatchSnapshot("catalogo.filtros.txt");
  for (let i = 0; i < nombres.length; i++) {
    await filtros.nth(i).click();
    await expect(page.locator("main")).toMatchAriaSnapshot({ name: `catalogo.filtro-${i}.aria.yml` });
  }
});

test('modal "Ver programas formativos": cada área', async ({ page }) => {
  await abrir(page, "/reskilling");
  await page.getByRole("button", { name: "Ver Programas Formativos" }).click();
  const modal = page.locator("div.fixed.inset-0").filter({ hasText: "Áreas de Formación" });
  await expect(modal).toBeVisible();
  const areas = modal.locator("button.rounded-xl");
  const total = await areas.count();
  for (let i = 0; i < total; i++) {
    await areas.nth(i).click();
    await expect(modal).toMatchAriaSnapshot({ name: `modal.area-${i}.aria.yml` });
  }
});

test("blog: cada filtro de categoría", async ({ page }) => {
  await abrir(page, "/blog");
  const filtros = page.locator("main section button.rounded-full");
  const nombres = await filtros.allInnerTexts();
  expect(nombres.join("\n")).toMatchSnapshot("blog.filtros.txt");
  for (let i = 0; i < nombres.length; i++) {
    await filtros.nth(i).click();
    expect(await page.locator("main").innerText()).toMatchSnapshot(`blog.filtro-${i}.texto.txt`);
  }
});
