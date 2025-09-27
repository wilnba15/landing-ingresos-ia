// src/app/politica-de-privacidad/page.tsx
export const metadata = {
  title: "Política de Privacidad | IA para Médicos",
  description: "Política de privacidad y tratamiento de datos.",
};

export default function PoliticaDePrivacidadPage() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-10 space-y-6">
      <h1 className="text-3xl font-bold">Política de Privacidad</h1>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">1. Responsable</h2>
        <p>
          Academia IA by WV. Contacto: info@academiaiabywv.com
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">2. Datos que recopilamos</h2>
        <ul className="list-disc pl-6">
          <li>Nombre y correo electrónico</li>
          <li>Datos de compra y facturación</li>
          <li>Uso básico del sitio (cookies/analítica)</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">3. Finalidades</h2>
        <ul className="list-disc pl-6">
          <li>Entrega de contenidos y soporte</li>
          <li>Mejoras del producto y comunicaciones</li>
          <li>Cumplimiento legal</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">4. Derechos del usuario</h2>
        <p>
          Puedes acceder, rectificar y eliminar tus datos escribiendo a
          soporte@tusitio.com.
        </p>
      </section>

      <p className="text-sm text-muted-foreground">
        Última actualización: {new Date().getFullYear()}
      </p>
    </main>
  );
}
