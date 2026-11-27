import { test, expect } from "@playwright/test";
import { abrir } from "./helpers";

// Comprueba que el formulario envía los mismos datos que ahora. El envío se intercepta:
// no llega a /api/enroll-course ni, por tanto, a Make.
test.beforeEach(({}, info) => test.skip(info.project.name !== "escritorio", "solo escritorio"));

const casos = [
  "/course-enrollment?course=qa-cypress",
  "/course-enrollment?course=reconversion-triunfa",
  "/course-enrollment?course=ia-claude&type=interest",
];

for (const ruta of casos) {
  test(`envío del formulario ${ruta}`, async ({ page }) => {
    let enviado: unknown = null;
    await page.route("**/api/enroll-course", async (r) => {
      enviado = r.request().postDataJSON();
      await r.fulfill({ status: 200, contentType: "application/json", body: '{"success":true}' });
    });
    await abrir(page, ruta);

    const form = page.locator("main form");
    await form.locator('[name="firstName"]').fill("Ana");
    await form.locator('[name="lastName"]').fill("Prueba");
    await form.locator('[name="email"]').fill("ana.prueba@example.com");
    await form.locator('[name="phone"]').fill("600000000");
    await form.locator('[name="dni"]').fill("12345678Z");
    await form.locator('[name="zipCode"]').fill("29001");
    await form.locator('[name="address"]').fill("Calle Prueba 1");
    await form.locator('[name="city"]').fill("Málaga");
    await form.locator('select[name="province"]').selectOption({ label: "Málaga" });
    await form.locator('[name="privacyAccepted"]').check();
    await form.locator('button[type="submit"]').click();

    await expect.poll(() => enviado, { message: "el formulario no llegó a enviarse" }).not.toBeNull();
    expect(JSON.stringify(enviado, null, 2)).toMatchSnapshot(`${ruta.replace(/\W+/g, "_")}.payload.json`);
  });
}
