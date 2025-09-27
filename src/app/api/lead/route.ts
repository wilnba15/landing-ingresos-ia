import type { NextRequest } from "next/server";
export const runtime = "nodejs";
export const dynamic = "force-dynamic";

type BrevoError = {
  code?: number | string;
  message?: string;
  [k: string]: unknown;
};

const DEBUG = process.env.DEBUG_LEAD === "1";

export async function POST(req: NextRequest) {
  try {
    const { email, name, source, listId } = (await req.json()) as {
      email?: string;
      name?: string;
      source?: string;
      listId?: number;
    };

    if (!email || !email.includes("@")) {
      return json({ ok: false, error: "Email inválido" }, 400);
    }

    const apiKey = process.env.BREVO_API_KEY || process.env.SENDINBLUE_API_KEY;
    const defaultListId =
      process.env.BREVO_LIST_ID && !Number.isNaN(Number(process.env.BREVO_LIST_ID))
        ? Number(process.env.BREVO_LIST_ID)
        : undefined;

    const senderEmail = process.env.EMAIL_SENDER;
    const senderName = process.env.EMAIL_SENDER_NAME || "Academia IA by WV";
    const downloadUrl = process.env.LEAD_DOWNLOAD_URL;

    // Validaciones de env
    if (!apiKey) return json(errEnv("BREVO_API_KEY"), 500);
    if (!senderEmail) return json(errEnv("EMAIL_SENDER"), 500);
    if (!downloadUrl) return json(errEnv("LEAD_DOWNLOAD_URL"), 500);

    // 1) Contacto
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
      const code = String(data?.code ?? "").toLowerCase();
      const msg = String(data?.message ?? "").toLowerCase();
      const isDuplicate =
        contactRes.status === 400 &&
        (code.includes("duplicate_parameter") ||
          msg.includes("duplicate parameter") ||
          msg.includes("already exist"));

      if (!isDuplicate) {
        console.error("Brevo contacts error", { status: contactRes.status, data });
        return json(
          DEBUG
            ? { ok: false, step: "contact", status: contactRes.status, data }
            : { ok: false, error: "No se pudo registrar el contacto" },
          500
        );
      }
    }

    // 2) Email
    const emailRes = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        "api-key": apiKey,
        "Content-Type": "application/json",
        accept: "application/json",
      },
      body: JSON.stringify({
        sender: { email: senderEmail, name: senderName },
        replyTo: { email: senderEmail, name: senderName },
        to: [{ email, name }],
        subject: "Tu guía: IA para Emprendedores",
        htmlContent: `
          <div style="font-family:system-ui,-apple-system,Segoe UI,Roboto,Arial,sans-serif;line-height:1.5;">
            <h2>¡Gracias por tu interés!</h2>
            <p>Aquí tienes tu acceso gratuito a <strong>IA para Emprendedores</strong>.</p>
            <p>👉 <a href="${downloadUrl}" target="_blank" rel="noopener">Descargar ahora</a></p>
            <hr style="border:none;border-top:1px solid #eee;margin:16px 0" />
            <p style="color:#666;font-size:13px;">Si no solicitaste este recurso, ignora este mensaje.</p>
          </div>
        `,
      }),
    });

    if (!emailRes.ok) {
      const data = (await emailRes.json().catch(() => ({}))) as BrevoError;
      console.error("Brevo email error", { status: emailRes.status, data });
      return json(
        DEBUG
          ? { ok: false, step: "email", status: emailRes.status, data }
          : { ok: false, error: "No se pudo enviar el email" },
        500
      );
    }

    return json({ ok: true }, 200);
  } catch (e) {
    console.error("Lead API error", e);
    return json(
      DEBUG ? { ok: false, step: "catch", error: String(e) } : { ok: false, error: "Error del servidor" },
      500
    );
  }
}

function json(body: unknown, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json" },
  });
}

function errEnv(name: string) {
  return { ok: false, error: `Falta variable de entorno: ${name}` };
}
