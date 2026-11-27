import { test, expect } from "@playwright/test";
import { abrir, recorrer, CSS_CAPTURA } from "./helpers";
import { visuales, nombre } from "./rutas";

for (const ruta of visuales) {
  test(`captura ${ruta}`, async ({ page }) => {
    expect(await abrir(page, ruta)).toBe(200);
    await recorrer(page);
    await page.addStyleTag({ content: CSS_CAPTURA });
    await expect(page).toHaveScreenshot(`${nombre(ruta)}.png`, { fullPage: true });
  });
}

test("captura del modal de programas formativos", async ({ page }) => {
  await abrir(page, "/reskilling");
  await page.getByRole("button", { name: "Ver Programas Formativos" }).click();
  await page.addStyleTag({ content: CSS_CAPTURA });
  await page.waitForTimeout(400);
  await expect(page).toHaveScreenshot("modal-programas.png");
});
