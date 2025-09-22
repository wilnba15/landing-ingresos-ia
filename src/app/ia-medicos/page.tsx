// app/page.tsx
// Landing de "IA para Médicos" con video corto en el hero y CTA a Hotmart
// Coloca tu video en /public/hero.mp4 y (opcional) una imagen /public/og-cover.jpg y /public/poster.jpg

export const metadata = {
  title: "IA para Médicos – Guía + Checklist | Academia IA by WV",
  description:
    "Guía práctica para médicos: IA aplicada a diagnóstico, notas clínicas y gestión. Incluye mini‑ebook con 10 herramientas de IA para médicos.",
  openGraph: {
    title: "IA para Médicos – Guía + Checklist",
    description:
      "Guía práctica para médicos. Implementa IA hoy mismo en tu consulta.",
    images: [
      {
        url: "/og-cover.jpg",
        width: 1200,
        height: 630,
        alt: "IA para Médicos – Academia IA by WV",
      },
    ],
  },
};

export default function Page() {
  const HOTMART_URL = "https://pay.hotmart.com/L102026137W?checkoutMode=10"; // ⬅️ Reemplaza por tu Hotlink

  return (
    <main className="min-h-screen bg-gray-50 text-gray-900">
      {/* NAV */}
      <header className="sticky top-0 z-30 backdrop-blur bg-white/70 border-b border-gray-100">
        <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-blue-600 text-white font-bold">IA</span>
            <span className="font-semibold tracking-tight">Academia IA by WV</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#beneficios" className="hover:text-blue-700">Beneficios</a>
            <a href="#contenido" className="hover:text-blue-700">Contenido</a>
            <a href="#faq" className="hover:text-blue-700">Preguntas</a>
          </nav>
          <a href={HOTMART_URL} target="_blank" rel="noopener noreferrer" className="rounded-full bg-blue-600 px-4 py-2 text-white text-sm font-semibold hover:bg-blue-700">Comprar</a>
        </div>
      </header>

      {/* HERO */}
      <section className="relative">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-4 py-12 md:grid-cols-2 md:py-20">
          <div className="flex flex-col justify-center">
            <h1 className="text-3xl md:text-5xl font-extrabold leading-tight">
              IA para Médicos
              <span className="block text-blue-700">Guía práctica + Checklist</span>
            </h1>
            <p className="mt-4 text-lg text-gray-700">
              Aprende a usar Inteligencia Artificial para ahorrar tiempo, mejorar tus diagnósticos y ofrecer una atención más humana y eficiente.
            </p>
            <ul className="mt-6 space-y-2 text-gray-700">
              <li>• Casos reales y prompts listos.</li>
              <li>• Mini‑ebook: 10 herramientas de IA para médicos.</li>
              <li>• Implementación paso a paso.</li>
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={HOTMART_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-blue-600 px-6 py-3 text-white font-semibold hover:bg-blue-700"
              >
                Obtener ahora
              </a>
              <a href="#video" className="rounded-full border border-gray-300 px-6 py-3 font-semibold hover:bg-gray-100">
                Ver video (30s)
              </a>
            </div>
            <p className="mt-4 text-xs text-gray-500">📦 Order Bump disponible: "Checklist de 10 herramientas de IA"</p>
          </div>

          <div id="video" className="relative">
            <div className="overflow-hidden rounded-2xl shadow-xl ring-1 ring-black/5">
              <video
                className="w-full h-full"
                playsInline
                autoPlay
                muted
                loop
                controls
                poster="/poster.jpg"
              >
                <source src="/hero.mp4" type="video/mp4" />
                Tu navegador no soporta el video HTML5.
              </video>
            </div>
            <p className="mt-2 text-center text-xs text-gray-500">Video: 30s – Beneficios y CTA</p>
          </div>
        </div>
      </section>

      {/* BENEFICIOS */}
      <section id="beneficios" className="bg-white border-y border-gray-100">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <h2 className="text-2xl md:text-3xl font-bold">Beneficios clave</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {[
              {
                t: "Menos papeleo",
                d: "Reduce hasta 50% el tiempo administrativo con notas clínicas automáticas y plantillas de prompts.",
              },
              {
                t: "Mejores diagnósticos",
                d: "Apóyate en herramientas de IA para imágenes, diferenciales y medicina de precisión.",
              },
              {
                t: "Gestión eficiente",
                d: "Agenda inteligente, recordatorios automatizados y material educativo para pacientes.",
              },
            ].map((b, i) => (
              <div key={i} className="rounded-2xl bg-gray-50 p-6 ring-1 ring-gray-100 hover:shadow-md transition">
                <h3 className="font-semibold text-lg">{b.t}</h3>
                <p className="mt-2 text-gray-600">{b.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTENIDO */}
      <section id="contenido" className="bg-gray-50">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <h2 className="text-2xl md:text-3xl font-bold">¿Qué incluye?</h2>
          <div className="mt-6 grid md:grid-cols-2 gap-8">
            <ul className="space-y-3 text-gray-700">
              <li>• Guía "IA para Médicos" (PDF).</li>
              <li>• Mini‑ebook: 10 herramientas de IA (Order Bump).</li>
              <li>• Prompts clínicos listos para usar.</li>
              <li>• Casos prácticos y mejores prácticas de privacidad.</li>
            </ul>
            <ul className="space-y-3 text-gray-700">
              <li>• Recursos y enlaces de acceso a cada herramienta.</li>
              <li>• Checklist descargable para implementación.</li>
              <li>• Actualizaciones futuras de la guía.</li>
            </ul>
          </div>
          <a
            href={HOTMART_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-block rounded-full bg-blue-600 px-6 py-3 text-white font-semibold hover:bg-blue-700"
          >
            Comprar ahora
          </a>
        </div>
      </section>

      {/* TESTIMONIOS (placeholders) */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <h2 className="text-2xl md:text-3xl font-bold">Lo que dicen los profesionales</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {[
              {
                n: "Dra. S. Andrade",
                t: "Medicina Interna",
                q: "La guía me ayudó a reducir tiempos en notas clínicas y a educar mejor a mis pacientes.",
              },
              {
                n: "Dr. J. Romero",
                t: "Radiología",
                q: "Descubrí herramientas de triage por IA que ahora usamos en guardia.",
              },
              {
                n: "Dra. M. Paredes",
                t: "GP",
                q: "El checklist de 10 herramientas es oro: empecé con 2 y ya veo resultados.",
              },
            ].map((c, i) => (
              <figure key={i} className="rounded-2xl bg-gray-50 p-6 ring-1 ring-gray-100">
                <blockquote className="text-gray-700">“{c.q}”</blockquote>
                <figcaption className="mt-4 text-sm text-gray-500">{c.n} · {c.t}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="bg-gray-50 border-t border-gray-100">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <h2 className="text-2xl md:text-3xl font-bold">Preguntas frecuentes</h2>
          <div className="mt-6 space-y-4">
            {[
              {
                q: "¿Necesito conocimientos técnicos?",
                a: "No. La guía está pensada para médicos; todo es práctico y paso a paso.",
              },
              {
                q: "¿Puedo usarlo en mi especialidad?",
                a: "Sí. Los ejemplos cubren clínica, imágenes, patología, oncología y gestión.",
              },
              {
                q: "¿Incluye el mini‑ebook de 10 herramientas?",
                a: "Sí, como Order Bump opcional al momento de la compra.",
              },
              {
                q: "¿Cómo recibo el material?",
                a: "Acceso inmediato a los archivos descargables en Hotmart una vez confirmada la compra.",
              },
            ].map((f, i) => (
              <details key={i} className="group rounded-2xl bg-white p-5 ring-1 ring-gray-100 open:shadow-md">
                <summary className="flex cursor-pointer list-none items-center justify-between font-semibold">
                  <span>{f.q}</span>
                  <span className="ml-4 text-gray-400 group-open:rotate-180 transition">▼</span>
                </summary>
                <p className="mt-3 text-gray-700">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-white border-t border-gray-100">
        <div className="mx-auto max-w-6xl px-4 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">© {new Date().getFullYear()} Academia IA by WV. Todos los derechos reservados.</p>
          <div className="flex items-center gap-6 text-sm">
            <a href="#" className="hover:text-blue-700">Política de Privacidad</a>
            <a href="#" className="hover:text-blue-700">Términos</a>
            <a href={HOTMART_URL} target="_blank" rel="noopener noreferrer" className="hover:text-blue-700">Comprar</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
