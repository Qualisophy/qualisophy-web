import { expect, type Page } from "@playwright/test";

// PNG gris de 1×1 que sustituye a las imágenes externas (Unsplash) para que las capturas sean estables.
const PLACEHOLDER = Buffer.from(
  "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8/5+hHgAHggJ/PchI7wAAAABJRU5ErkJggg==",
  "base64",
);

/** CSS que se aplica solo durante la captura: oculta elementos ajenos a la tarea que cambian entre ejecuciones. */
export const CSS_CAPTURA = `
  astro-dev-toolbar,
  [class*="fixed"][class*="z-50"][class*="right-0"],
  .cky-consent-container, .cky-btn-revisit-wrapper { display: none !important; }
  html { scroll-behavior: auto !important; }
  *, *::before, *::after { transition: none !important; animation: none !important; caret-color: transparent !important; }
`;

/** Bloquea terceros (cookies, analítica) y sustituye las imágenes externas por un placeholder. */
export async function prepararPagina(page: Page) {
  await page.route(/cdn-cookieyes\.com|vercel-insights|_vercel\/(insights|speed-insights)|va\.vercel-scripts/, (r) =>
    r.abort(),
  );
  await page.route(/images\.unsplash\.com/, (r) =>
    r.fulfill({ status: 200, contentType: "image/png", body: PLACEHOLDER }),
  );
}

/**
 * Abre una ruta y espera a que esté lista; devuelve el código HTTP final.
 * Falla si algún recurso local responde 5xx o si aparece el overlay de error de Vite,
 * para que nunca se guarde una línea base con la página rota.
 */
export async function abrir(page: Page, ruta: string) {
  await prepararPagina(page);
  const errores: string[] = [];
  page.on("response", (r) => {
    if (r.status() >= 500 && r.url().startsWith("http://localhost")) errores.push(`${r.status()} ${r.url()}`);
  });
  const respuesta = await page.goto(ruta, { waitUntil: "networkidle" });
  await page.evaluate(() => document.fonts.ready);
  expect(errores, "recursos con error 5xx").toEqual([]);
  await expect(page.locator("vite-error-overlay"), "overlay de error de Vite").toHaveCount(0);
  return respuesta?.status() ?? 0;
}

/** Recorre la página hasta abajo para disparar las animaciones de entrada (framer-motion whileInView). */
export async function recorrer(page: Page) {
  await page.evaluate(async () => {
    const paso = window.innerHeight / 2;
    for (let y = 0; y < document.body.scrollHeight; y += paso) {
      window.scrollTo({ top: y, behavior: "instant" });
      await new Promise((r) => setTimeout(r, 120));
    }
    window.scrollTo({ top: 0, behavior: "instant" });
  });
  // La web usa scroll suave: esperamos a estar arriba del todo antes de capturar.
  await page.waitForFunction(() => window.scrollY === 0);
  await page.waitForTimeout(800);
}
