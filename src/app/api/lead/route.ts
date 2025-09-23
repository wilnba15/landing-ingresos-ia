// src/app/api/lead/route.ts
import type { NextRequest } from "next/server";

// Recomendado para llamadas externas en App Router
export const runtime = "nodejs";
export const dynamic = "force-dynamic";

type BrevoError = {
  code?: number | string;
  message?: string;
  [key: string]: unknown;
};

export async function POST(req: NextRequest) {
  try {
    const { email, name, source, listId } = (await req.json()) as {
      email?: string;
      name?: string;
      source?: string;
      listId?: number;
    };

    if (!email || typeof email !== "string" || !email.includes("@")) {
      return new Response(JSON.stringify({ ok: false, error: "Email inválido" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    // ENV
    const apiKey = process.env.BREVO_API_KEY || process.env.SENDINBLUE_API_KEY;
    const defaultListId =
      process.env.BREVO_LIST_ID && !Number.isNaN(Number(process.env.BREVO_LIST_ID))
        ? Number(process.env.BREVO_LIST_ID)
        : undefined;

    const senderEmail = process.env.EMAIL_SENDER || "no-reply@example.com";
    const senderName = process.env.EMAIL_SENDER_NAME || "Academia IA by WV";
    const downloadUrl =
      process.env.LEAD_DOWNLOAD_URL || "https://tu-dominio/descarga/ia-para-medicos.pdf";

    if (!apiKey) {
      return new Response(
        JSON.stringify({ ok: false, error: "Falta BREVO_API_KEY en variables de entorno" }),
        { status: 500, headers: { "Content-Type": "application/json" } }
      );
    }

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
        listIds: listId ? [listId] : defaultListId ? [defaultListId] : undefined,
        attributes: { SOURCE: source || "landing-ingresos-ia", NAME: name || undefined },
      }),
    });

    if (!contactRes.ok) {
      const data = (await contactRes.json().catch(() => ({}))) as BrevoError;
      const code = data?.code ? String(data.code).toLowerCase() : "";
      const isDuplicate = contactRes.status === 400 && code.includes("duplicate_parameter");
      if (!isDuplicate) {
        console.error("Brevo contacts error", { status: contactRes.status, data });
        return new Response(
          JSON.stringify({ ok: false, error: "No se pudo registrar el contacto" }),
          { status: 500, headers: { "Content-Type": "application/json" } }
        );
      }
    }

    // 2) Enviar email con link de descarga
    const emailPayload = {
      sender: { email: senderEmail, name: senderName },
      replyTo: { email: senderEmail, name: senderName },
      to: [{ email, name }],
      subject: "Tu guía: IA para Médicos",
      htmlContent: `
        <div style="font-family:system-ui,-apple-system,Segoe UI,Roboto,Arial,sans-serif;line-height:1.5;">
          <h2>¡Gracias por tu interés!</h2>
          <p>Aquí tienes tu acceso a <strong>IA para Médicos – Guía práctica + Checklist</strong>.</p>
          <p>👉 <a href="${downloadUrl}" target="_blank" rel="noopener">Descargar ahora</a></p>
          <hr style="border:none;border-top:1px solid #eee;margin:16px 0" />
          <p style="color:#666;font-size:13px;">Si no solicitaste este recurso, ignora este mensaje.</p>
        </div>
      `,
    };

    const emailRes = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        "api-key": apiKey,
        "Content-Type": "application/json",
        accept: "application/json",
      },
      body: JSON.stringify(emailPayload),
    });

    if (!emailRes.ok) {
      const data = (await emailRes.json().catch(() => ({}))) as BrevoError;
      console.error("Brevo email error", { status: emailRes.status, data });
      return new Response(JSON.stringify({ ok: false, error: "No se pudo enviar el email" }), {
        status: 500,
        headers: { "Content-Type": "application/json" },
      });
    }

    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("Lead API error", err);
    return new Response(JSON.stringify({ ok: false, error: "Error del servidor" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
