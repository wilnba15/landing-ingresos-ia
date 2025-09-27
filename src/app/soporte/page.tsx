// src/app/soporte/page.tsx
export const metadata = {
  title: "Soporte | IA para Médicos",
  description:
    "Centro de ayuda y soporte: contacto, preguntas frecuentes y políticas de atención.",
};

export default function SoportePage() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-10 space-y-8">
      <header className="space-y-2">
        <h1 className="text-3xl font-bold">Soporte</h1>
        <p className="text-muted-foreground">
          ¿Necesitas ayuda? Aquí encuentras cómo contactarnos y las preguntas
          frecuentes de los usuarios.
        </p>
      </header>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Contacto</h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>
            Email:{" "}
            <a
              className="underline"
              href="mailto:soporte@tusitio.com"
              rel="noopener"
            >
              info@academiaiabywv.com
            </a>
          </li>
          <li>Horario de atención: L–V, 09:00–18:00 (GMT-5)</li>
          <li>Tiempo promedio de respuesta: 24–48 h hábiles</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">¿Cómo abrir un ticket?</h2>
        <ol className="list-decimal pl-6 space-y-1">
          <li>Escríbenos desde el correo con el que realizaste la compra.</li>
          <li>Incluye número de pedido o comprobante.</li>
          <li>Describe el problema (pasos, capturas si es posible).</li>
        </ol>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Preguntas frecuentes</h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-medium">No recibí el email con el material</h3>
            <p className="text-sm text-muted-foreground">
              Revisa spam/promociones. Si no aparece en 10 minutos, escríbenos
              con tu comprobante para reactivar el acceso.
            </p>
          </div>
          <div>
            <h3 className="font-medium">¿Cómo accedo a los bonos?</h3>
            <p className="text-sm text-muted-foreground">
              Los bonos están en la última pagina del
              libro “IA para Médicos”. Ingresa con el mismo email de compra.
            </p>
          </div>
          <div>
            <h3 className="font-medium">Problemas de descarga</h3>
            <p className="text-sm text-muted-foreground">
              Prueba en otro navegador o dispositivo. Si persiste, envíanos
              captura del error para enviarte un enlace alterno.
            </p>
          </div>
          <div>
            <h3 className="font-medium">Facturación</h3>
            <p className="text-sm text-muted-foreground">
              Las facturas se generan desde Hotmart con los datos de tu compra.
              Si necesitas corrección, contáctanos por email.
            </p>
          </div>
        </div>
      </section>

      <footer className="text-sm text-muted-foreground">
        Última actualización: {new Date().getFullYear()}
      </footer>
    </main>
  );
}
