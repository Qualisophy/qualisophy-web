import { defineConfig, devices } from "@playwright/test";

/**
 * Tests de regresión (QUAL-523): comprueban que la migración de cursos y posts
 * a una fuente única no cambia las URLs, el contenido visible ni el diseño.
 *
 * Se ejecutan contra `pnpm dev` (localhost:4321). Si ya está arrancado, lo reutilizan.
 *   pnpm test:e2e          → compara con la línea base
 *   pnpm test:e2e:update   → regenera la línea base (solo tras revisar las diferencias)
 *   pnpm test:e2e:report   → abre el informe HTML con las diferencias
 */
export default defineConfig({
  testDir: "./tests/e2e",
  snapshotPathTemplate: "tests/e2e/__snapshots__/{testFileName}/{projectName}/{arg}{ext}",
  fullyParallel: true,
  workers: 4,
  retries: 0,
  timeout: 60_000,
  reporter: [["list"], ["html", { open: "never" }]],
  expect: {
    toHaveScreenshot: { maxDiffPixelRatio: 0.002, animations: "disabled", caret: "hide" },
  },
  use: {
    baseURL: "http://localhost:4321",
    locale: "es-ES",
    timezoneId: "Europe/Madrid",
    trace: "retain-on-failure",
  },
  projects: [
    { name: "escritorio", use: { ...devices["Desktop Chrome"], viewport: { width: 1280, height: 800 } } },
    { name: "movil", use: { ...devices["Pixel 7"] } },
  ],
  webServer: {
    command: "pnpm dev",
    url: "http://localhost:4321",
    reuseExistingServer: true,
    timeout: 120_000,
  },
});
