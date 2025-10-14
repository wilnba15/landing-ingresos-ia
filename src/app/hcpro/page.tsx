"use client";

export default function Page() {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main className="bg-white text-gray-800 min-h-screen">
      {/* NAVBAR */}
      <nav className="flex justify-center gap-8 py-6 shadow-sm bg-white sticky top-0 z-50">
        {[
          { name: "Beneficios", id: "beneficios" },
          { name: "Qué incluye", id: "incluye" },
          { name: "Testimonios", id: "testimonios" },
          { name: "FAQ", id: "faq" },
        ].map((item) => (
          <button
            key={item.id}
            onClick={() => scrollTo(item.id)}
            className="text-gray-700 hover:text-emerald-700 font-medium"
          >
            {item.name}
          </button>
        ))}
      </nav>

      {/* HERO */}
      <section className="flex flex-col md:flex-row items-center justify-center px-8 py-20 md:py-28 max-w-7xl mx-auto">
        {/* Texto Izquierdo */}
        <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10 text-left">
          <span className="inline-block bg-emerald-100 text-emerald-700 text-sm font-semibold px-4 py-2 rounded-full mb-4">
            Nueva versión 2025
          </span>
          <h1 className="text-5xl font-bold text-emerald-700 leading-tight mb-6">
            HC-PRO: Tu sistema médico inteligente con agendamiento automático
          </h1>
          <p className="text-lg text-gray-700 mb-8">
            Gestiona historias clínicas, pacientes y citas desde un solo lugar.
            <br />
            Con la nueva función de agendamiento inteligente, HC-PRO organiza tus citas y envía recordatorios automáticos por WhatsApp.
          </p>

          <ul className="text-gray-700 space-y-3 mb-10">
            <li>✅ Historias clínicas digitales seguras</li>
            <li>✅ Calendario visual con recordatorios automáticos</li>
            <li>✅ Comunicación directa por WhatsApp</li>
            <li>✅ 100 % intuitivo y fácil de usar</li>
          </ul>

          <div className="flex flex-wrap gap-4">
            <a
              href="https://wa.me/593986138541?text=Hola%20quiero%20una%20demo%20de%20HC-PRO"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-8 py-4 rounded-2xl shadow-lg transition"
            >
              Probar Demo Gratuita
            </a>
            <a
              href="https://pay.hotmart.com/B100943029R?off=d4yp3h3m"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-emerald-600 text-emerald-700 hover:bg-emerald-50 font-semibold px-8 py-4 rounded-2xl shadow-lg transition"
            >
              Comprar Ahora
            </a>
          </div>

          <p className="mt-6 text-sm text-gray-500">
            Garantía 7 días – Acceso inmediato
          </p>
        </div>

        {/* Imagen Derecha */}
        <div className="md:w-1/2 text-center">
          <div className="bg-gradient-to-b from-emerald-100 via-white to-white p-6 rounded-2xl shadow-lg inline-block">
            <img
              src="/hcpro-portada.png"
              alt="HC-PRO – Sistema médico con agendamiento inteligente"
              className="rounded-2xl shadow-lg max-w-full h-auto"
            />
            <p className="text-emerald-700 font-semibold mt-4">
              Gestión médica y agendamiento de citas automatizado
            </p>
            <p className="text-sm text-gray-500">Academia IA by WV</p>
          </div>
        </div>
      </section>

      {/* BENEFICIOS */}
      <section id="beneficios" className="py-20 bg-emerald-50 text-center">
        <h2 className="text-4xl font-bold text-emerald-700 mb-8">
          Beneficios de usar HC-PRO
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {[
            "Historias clínicas digitales seguras y organizadas",
            "Agendamiento automático con recordatorios",
            "Mensajería WhatsApp integrada",
            "Control de pacientes y estadísticas en tiempo real",
            "Ahorro de tiempo y reducción de errores",
            "Soporte técnico personalizado",
          ].map((b, i) => (
            <div
              key={i}
              className="p-6 bg-white border rounded-2xl shadow-sm hover:shadow-lg"
            >
              <p className="text-gray-700">{b}</p>
            </div>
          ))}
        </div>
      </section>

      {/* QUÉ INCLUYE */}
      <section id="incluye" className="py-20 text-center">
        <h2 className="text-4xl font-bold text-emerald-700 mb-8">
          ¿Qué incluye HC-PRO?
        </h2>
        <ul className="max-w-3xl mx-auto text-left text-lg text-gray-700 space-y-4">
          <li>💾 Módulo de historias clínicas personalizables</li>
          <li>📅 Calendario inteligente con agendamiento y recordatorios</li>
          <li>💬 Integración directa con WhatsApp</li>
          <li>📊 Panel administrativo con estadísticas y reportes</li>
          <li>☁️ Registro y administracion de pacientes</li>
          <li>🔐 Seguridad avanzada y respaldo automático</li>
        </ul>
      </section>

      {/* TESTIMONIOS */}
      <section id="testimonios" className="py-20 bg-emerald-50 text-center">
        <h2 className="text-4xl font-bold text-emerald-700 mb-8">Testimonios</h2>
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10">
          <blockquote className="p-8 bg-white border rounded-2xl shadow-sm">
            “Desde que usamos HC-PRO, nuestras citas se organizan solas.
            Los pacientes reciben recordatorios automáticos y todo fluye mejor.”  
            <br />
            <span className="block mt-4 font-semibold text-emerald-700">
              — Dra. Ana Sotomayor, Clínica Estética Vital
            </span>
          </blockquote>
          <blockquote className="p-8 bg-white border rounded-2xl shadow-sm">
            “El agendamiento inteligente y la interfaz sencilla nos ahorran horas
            cada semana. Lo recomiendo totalmente.”  
            <br />
            <span className="block mt-4 font-semibold text-emerald-700">
              — Dr. Luis Andrade, Fisioterapeuta
            </span>
          </blockquote>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20 text-center">
        <h2 className="text-4xl font-bold text-emerald-700 mb-8">Preguntas Frecuentes</h2>
        <div className="max-w-3xl mx-auto text-left space-y-6">
          <details className="border rounded-2xl p-6">
            <summary className="font-semibold text-lg text-emerald-700 cursor-pointer">
              ¿Que necesito para utilizar el Sistema HC-PRO?
            </summary>
            <p className="mt-3 text-gray-700">
              Necesitas una PC o laptop con Windows, toda la informacion se guarda en tu computador.
            </p>
          </details>
          <details className="border rounded-2xl p-6">
            <summary className="font-semibold text-lg text-emerald-700 cursor-pointer">
              ¿Puedo personalizar las historias clínicas?
            </summary>
            <p className="mt-3 text-gray-700">
              Claro, puedes adaptar los campos y secciones según tu especialidad médica.
            </p>
          </details>
          <details className="border rounded-2xl p-6">
            <summary className="font-semibold text-lg text-emerald-700 cursor-pointer">
              ¿El agendamiento automático tiene costo adicional?
            </summary>
            <p className="mt-3 text-gray-700">
              No, está incluido en el plan HC-PRO Plus. Solo necesitas conectar tu cuenta de WhatsApp.
            </p>
          </details>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-10 text-center text-gray-500 text-sm">
        © 2025 HC-PRO — Desarrollado por{" "}
        <span className="font-semibold text-emerald-700">Academia IA by WV</span>
      </footer>
    </main>
  );
}
