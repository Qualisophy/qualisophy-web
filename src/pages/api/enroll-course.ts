import type { APIRoute } from "astro";
import Stripe from "stripe";

// 1. Inicializamos Stripe
const stripe = new Stripe(import.meta.env.STRIPE_SECRET_KEY, {
  apiVersion: "2026-04-22.dahlia",
});

const escapeHTML = (str: string) => {
  if (typeof str !== "string") return str;
  return str.replace(/[&<>"'/]/g, (match) => {
    const escapeMap: Record<string, string> = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#x27;",
      "/": "&#x2F;",
    };
    return escapeMap[match];
  });
};

export const POST: APIRoute = async ({ request, url }) => {
  try {
    const data = await request.json();

    // 2. Sanitización contra XSS
    const sanitizedData: Record<string, any> = {};
    for (const key in data) {
      if (Object.prototype.hasOwnProperty.call(data, key)) {
        sanitizedData[key] =
          typeof data[key] === "string" ? escapeHTML(data[key]) : data[key];
      }
    }

    const {
      firstName,
      lastName,
      email,
      phone,
      dni,
      address,
      city,
      province,
      postalCode,
      course,
      courseName,
      discountCode,
      privacyAccepted,
    } = sanitizedData;

    // 3. Validación básica
    if (!firstName || !email || !course || !privacyAccepted) {
      return new Response(
        JSON.stringify({ message: "Faltan campos obligatorios." }),
        { status: 400 },
      );
    }

    // 4. Abstract API (Seguridad de email)
    const abstractApiKey = import.meta.env.ABSTRACT_API_KEY;
    if (abstractApiKey) {
      try {
        const validationResponse = await fetch(
          `https://emailreputation.abstractapi.com/v1/?api_key=${abstractApiKey}&email=${encodeURIComponent(email)}`,
        );
        const validationData = await validationResponse.json();
        if (
          validationData.email_deliverability?.status === "undeliverable" ||
          validationData.email_quality?.is_disposable === true ||
          validationData.email_deliverability?.is_format_valid === false
        ) {
          return new Response(JSON.stringify({ message: "Correo inválido." }), {
            status: 400,
          });
        }
      } catch (e) {
        console.error("Abstract API falló en silencio", e);
      }
    }

    // =====================================================================
    // 6. LÓGICA DE INSCRIPCIÓN (RESERVA DE PLAZA FIJA)
    // =====================================================================

    // El catálogo ahora solo sirve para tener el nombre oficial
    const courseCatalog: Record<string, { name: string }> = {
      "qa-software": { name: "Calidad de Software (QA) y Testing" },
      "qa-cypress": { name: "Cypress Automation Bootcamp" },
    };

    const selectedCourse = courseCatalog[course] || {
      name: courseName || course,
    };
    const code = discountCode
      ? String(discountCode).trim().toUpperCase()
      : "Sin código";

    // Precio FIJO de reserva: 50€ (5000 céntimos)
    const RESERVA_FEE = 5000;

    // =====================================================================

    // 7. CREAR LA SESIÓN DE PAGO EN STRIPE
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      customer_email: email,
      line_items: [
        {
          price_data: {
            currency: "eur",
            product_data: {
              name: `Reserva de plaza: ${selectedCourse.name}`,
              description:
                code !== "Sin código"
                  ? `Código a aplicar en el pago final: ${code}`
                  : "Inscripción inicial.",
            },
            unit_amount: RESERVA_FEE,
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: `${url.origin}/pago-exitoso`,
      cancel_url: `${url.origin}/pago-cancelado`,

      // 8. METADATA: Mochila de datos para Make.com
      // Aquí guardamos el código de descuento introducido para que lo tengas en Excel
      metadata: {
        nombre: String(firstName || ""),
        apellidos: String(lastName || ""),
        email: String(email || ""),
        telefono: String(phone || ""),
        dni: String(dni || ""),
        direccion: String(address || ""),
        ciudad: String(city || ""),
        provincia: String(province || ""),
        cp: String(postalCode || ""),
        cursoId: String(course || ""),
        cursoNombre: String(selectedCourse.name || ""),
        codigoDescuento: code,
        precioPagado: "50.00€ (Reserva)",
        fechaInscripcion: new Date().toISOString(),
      },
    });

    return new Response(JSON.stringify({ url: session.url }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error procesando la inscripción con Stripe:", error);
    return new Response(
      JSON.stringify({ message: "Error al generar la pasarela de pago." }),
      { status: 500, headers: { "Content-Type": "application/json" } },
    );
  }
};
