// src/app/terminos/page.tsx
export const metadata = {
  title: "Términos y Condiciones | IA para Médicos",
  description:
    "Términos de uso, licencias y políticas del producto IA para Médicos.",
};

export default function TerminosPage() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-10 space-y-8">
      <header className="space-y-2">
        <h1 className="text-3xl font-bold">Términos y Condiciones</h1>
        <p className="text-muted-foreground">
          Al comprar o usar nuestros contenidos aceptas estos Términos.
        </p>
      </header>

      <section className="space-y-2">
        <h2 className="text-xl font-semibold">1. Objeto</h2>
        <p className="text-sm text-muted-foreground">
          Este documento regula el acceso y uso de los materiales digitales de
          “IA para Médicos”, incluyendo guía, bonos y actualizaciones.
        </p>
      </section>

      <section className="space-y-2">
        <h2 className="text-xl font-semibold">2. Licencia de uso</h2>
        <p className="text-sm text-muted-foreground">
          Se otorga una licencia personal, intransferible y no exclusiva para
          uso profesional del comprador. Queda prohibida la redistribución,
          reventa, publicación o compartición pública de los contenidos.
        </p>
      </section>

      <section className="space-y-2">
        <h2 className="text-xl font-semibold">3. Acceso y actualizaciones</h2>
        <p className="text-sm text-muted-foreground">
          El acceso se realiza a través de Hotmart con
          el email de compra. Podremos publicar mejoras o correcciones sin
          previo aviso para mantener la calidad del producto.
        </p>
      </section>

      <section className="space-y-2">
        <h2 className="text-xl font-semibold">4. Propiedad intelectual</h2>
        <p className="text-sm text-muted-foreground">
          Todo el contenido es propiedad de Academia IA by WV. Queda prohibido
          el copiado total o parcial con fines comerciales sin autorización
          expresa por escrito.
        </p>
      </section>

      <section className="space-y-2">
        <h2 className="text-xl font-semibold">5. Limitación de responsabilidad</h2>
        <p className="text-sm text-muted-foreground">
          Los materiales son de apoyo educativo y no sustituyen el criterio
          clínico. El uso de la información es responsabilidad del profesional
          usuario y debe adecuarse a guías y normativas locales vigentes.
        </p>
      </section>

      <section className="space-y-2">
        <h2 className="text-xl font-semibold">6. Reembolsos</h2>
        <p className="text-sm text-muted-foreground">
          Las políticas de reembolso se rigen por Hotmart. Si tienes un
          inconveniente con tu compra, contáctanos en{" "}
          <a className="underline" href="mailto:soporte@tusitio.com">
            info@academiaiabywv.com
          </a>
          .
        </p>
      </section>

      <section className="space-y-2">
        <h2 className="text-xl font-semibold">7. Contacto</h2>
        <p className="text-sm text-muted-foreground">
          Para consultas legales:{" "}
          <a className="underline" href="mailto:legal@tusitio.com">
            info@academiaiabywv.com
          </a>
          .
        </p>
      </section>

      <footer className="text-sm text-muted-foreground">
        Vigente desde {new Date().getFullYear()}
      </footer>
    </main>
  );
}
