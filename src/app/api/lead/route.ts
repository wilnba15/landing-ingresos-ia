// src/app/api/lead/route.ts
import type { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();
    if (!email || !email.includes("@")) {
      return new Response(JSON.stringify({ error: "Email inválido" }), { status: 400 });
    }

    const apiKey = process.env.BREVO_API_KEY!;
    const listId = process.env.BREVO_LIST_ID ? parseInt(process.env.BREVO_LIST_ID) : undefined;
    const senderEmail = process.env.BREVO_SENDER_EMAIL!;
    const senderName = process.env.BREVO_SENDER_NAME || "Academia IA by WV";
    const downloadUrl = process.env.DOWNLOAD_URL!;

    // 1) Crear/actualizar contacto
    const contactRes = await fetch("https://api.brevo.com/v3/contacts", {
      method: "POST",
      headers: {
        "api-key": apiKey,
        "Content-Type": "application/json",
        accept: "application/json",
      },
      body: JSON.stringify({
        email,
        updateEnabled: true,
        listIds: listId ? [listId] : undefined,
        attributes: { SOURCE: "landing-ingresos-ia" },
      }),
    });

    // Ignora “duplicate_parameter” (ya existe) y continúa
    if (!contactRes.ok) {
      const data = await contactRes.json().catch(() => ({}));
      const code = (data as any)?.code?.toString() || "";
      if (contactRes.status !== 400 || !code.includes("duplicate_parameter")) {
        console.error("Brevo contacts error", data);
      }
    }

    // 2) Enviar email con link de descarga
    const emailRes = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        "api-key": apiKey,
        "Content-Type": "application/json",
        accept: "application/json",
      },
      body: JSON.stringify({
        sender: { email: senderEmail, name: senderName },
        to: [{ email }],
        subject: "Tu guía gratuita de IA 🚀",
        htmlContent: `
          <p>¡Hola!</p>
          <p>Gracias por suscribirte a <strong>${senderName}</strong>. Aquí tienes tu ebook:</p>
          <p><a href="${downloadUrl}" target="_blank" rel="noopener">📥 Descargar la Guía de IA</a></p>
          <hr/>
          <p>Si no fuiste tú, puedes ignorar este mensaje.</p>
        `,
      }),
    });

    if (!emailRes.ok) {
      const data = await emailRes.json().catch(() => ({}));
      console.error("Brevo email error", data);
      return new Response(JSON.stringify({ error: "No se pudo enviar el email" }), { status: 500 });
    }

    return new Response(JSON.stringify({ ok: true }), { status: 200 });
  } catch (err) {
    console.error(err);
    return new Response(JSON.stringify({ error: "Error del servidor" }), { status: 500 });
  }
}
