// app/page.tsx (o src/app/page.tsx) – Landing "IA para Médicos"
// Usa TailwindCSS. Reemplaza CHECKOUT_URL con tu Hotlink de Hotmart.
import Image from "next/image";

const CHECKOUT_URL = "https://pay.hotmart.com/F102192125G?off=e37wbvi3&checkoutMode=10"; // TODO: pega tu enlace real

export default function LandingIAMedicos() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-sky-50 via-white to-emerald-50 text-slate-800">
      {/* NAV */}
      <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/70 border-b border-slate-200">
        <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="size-8 rounded-xl bg-emerald-500" />
            <span className="font-semibold">IA para Médicos</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#beneficios" className="hover:text-emerald-700">Beneficios</a>
            <a href="#contenido" className="hover:text-emerald-700">Qué incluye</a>
            <a href="#testimonios" className="hover:text-emerald-700">Testimonios</a>
            <a href="#faq" className="hover:text-emerald-700">FAQ</a>
          </nav>
<a href={CHECKOUT_URL} target="_blank" rel="noopener noreferrer nofollow"
   className="inline-flex items-center rounded-xl bg-emerald-600 px-4 py-2 text-white font-semibold shadow hover:bg-emerald-700">
  Comprar ahora
</a>

        </div>
      </header>

      {/* HERO */}
<section className="relative">
  <div className="mx-auto max-w-6xl px-4 pt-16 pb-10 grid md:grid-cols-2 gap-10 items-center">
    {/* Columna izquierda: título + bullets + CTAs */}
    <div>
      <span className="inline-block text-xs font-semibold tracking-widest text-emerald-700 bg-emerald-100 rounded-full px-3 py-1">
        Nueva edición 2025
      </span>

      <h1 className="mt-4 text-4xl md:text-5xl font-black leading-tight">
        Domina la <span className="text-emerald-700">Inteligencia Artificial</span> <br /> aplicada a la práctica médica
      </h1>

      <p className="mt-4 text-lg text-slate-600">
        Guía práctica con casos reales, prompts clínicos listos, flujos de trabajo y herramientas para diagnósticos, investigación, notas médicas y educación al paciente.
      </p>

      <ul className="mt-6 space-y-2 text-slate-700">
        <li>✅ Prompts listos para <strong>historia clínica, interconsultas y resúmenes</strong></li>
        <li>✅ Flujo paso a paso para <strong>análisis de artículos y guías clínicas</strong></li>
        <li>✅ Plantillas y checklists descargables</li>
      </ul>

      <div className="mt-8 flex flex-wrap items-center gap-3">
<a href={CHECKOUT_URL} target="_blank" rel="noopener noreferrer nofollow"
   className="inline-flex items-center rounded-2xl bg-emerald-600 px-6 py-3 text-white font-semibold shadow-lg hover:bg-emerald-700">
  Comprar ahora
</a>
       <a
  href="#contenido"
  className="inline-flex items-center rounded-2xl border border-slate-300 px-6 py-3 font-semibold hover:border-slate-400"
>
  Ver contenido
</a>

        <div className="text-xs text-slate-500">Garantía 7 días – Acceso inmediato</div>
      </div>
    </div>

    <div className="relative">
      <div className="relative rounded-3xl bg-white p-4 shadow-2xl">
      
        <div className="aspect-[4/5] w-full rounded-2xl bg-gradient-to-br from-emerald-200 via-sky-200 to-white">
          <img
            src="/ia-medicos-mockup.png" 
            alt="IA para Médicos – Guía práctica + Checklists"
            className="h-full w-full object-contain p-3 rounded-2xl"
          />
        </div>
      </div>

      <div className="absolute -bottom-6 -left-6 hidden md:block">
        <div className="rounded-2xl bg-emerald-600 text-white px-4 py-2 shadow-lg text-sm">
          Precio lanzamiento: <span className="font-bold">$27</span>
        </div>
      </div>
    </div>
  </div>
</section>


      {/* BENEFICIOS */}
      <section id="beneficios" className="py-16">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-3xl md:text-4xl font-extrabold">Beneficios clave</h2>
          <p className="mt-2 text-slate-600">Resultados concretos para tu consulta, docencia o residencia.</p>
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                t: "Ahorra tiempo clínico",
                d: "Modelos de notas, resúmenes y cartas médicas en minutos, con verificación médica paso a paso.",
              },
              {
                t: "Mejora decisiones",
                d: "Prompts para revisar guías, evaluar diagnósticos diferenciales y riesgos (siempre con criterio profesional).",
              },
              {
                t: "Docencia eficaz",
                d: "Explica a tus pacientes y alumnos con material claro y adaptado al nivel." ,
              },
              {
                t: "Investigación al día",
                d: "Flujo para leer papers, extraer evidencias y estructurar referencias.",
              },
              {
                t: "Privacidad y ética",
                d: "Buenas prácticas para des-identificar datos y usar IA de forma responsable.",
              },
              {
                t: "Plantillas listas",
                d: "Checklists, formatos y prompts reutilizables (descargables).",
              },
            ].map((b, i) => (
              <div key={i} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="text-emerald-700 font-semibold">{b.t}</div>
                <p className="mt-2 text-slate-600">{b.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTENIDO */}
      <section id="contenido" className="py-16 bg-white">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-3xl md:text-4xl font-extrabold">Qué incluye</h2>
          <div className="mt-8 grid md:grid-cols-2 gap-8">
            <ul className="space-y-3 text-slate-700">
              <li>📘 Guía en PDF (150+ páginas) — fundamentos + práctica</li>
              <li>🧠 80+ prompts clínicos listos por especialidad</li>
              <li>📋 Checklists de consulta y triage</li>
              <li>📝 Plantillas de nota SOAP, Epicrisis e Interconsulta</li>
              <li>🔎 Flujo para análisis de papers y guías clínicas</li>
            
            </ul>
            <div className="rounded-2xl border border-slate-200 p-6 bg-gradient-to-br from-sky-50 to-emerald-50">
              <h3 className="text-xl font-bold">Precio lanzamiento</h3>
              <p className="mt-2 text-slate-600">Acceso inmediato + actualizaciones menores incluidas</p>
              <div className="mt-4 flex items-end gap-3">
                <div className="text-5xl font-black text-emerald-700">$27</div>
                <div className="text-sm line-through text-slate-400">$49</div>
              </div>
              <a href={CHECKOUT_URL} target="_blank" rel="noopener noreferrer nofollow"
   className="inline-flex items-center rounded-2xl bg-emerald-600 px-6 py-3 text-white font-semibold shadow-lg hover:bg-emerald-700">
  Comprar ahora
</a>

              <p className="mt-2 text-xs text-slate-500">Garantía 7 días · Pago seguro</p>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIOS */}
      <section id="testimonios" className="py-16">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-3xl md:text-4xl font-extrabold">Lo que dicen los profesionales</h2>
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            {[
              {
                n: "Dra. P. Andrade",
                r: "Medicina Interna",
                t: "Me ayudó a estructurar notas y educar a mis pacientes con claridad. Ahorro 30–40 min al día.",
              },
              {
                n: "Dr. J. Montalvo",
                r: "Residente Pediatría",
                t: "Los prompts de casos clínicos son oro. Mejoré mis presentaciones y discusiones en guardia.",
              },
              {
                n: "Lic. S. Villacís",
                r: "Docencia Universitaria",
                t: "Material claro para enseñar IA responsable en ciencias de la salud.",
              },
            ].map((c, i) => (
              <figure key={i} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <blockquote className="text-slate-700">“{c.t}”</blockquote>
                <figcaption className="mt-3 text-sm text-slate-500">{c.n} • {c.r}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-16 bg-white">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-3xl md:text-4xl font-extrabold">Preguntas frecuentes</h2>
          <div className="mt-8 divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white">
            {[
              {
                q: "¿Recibo el libro al instante?",
                a: "Sí. Tras el pago, accedes de inmediato al PDF y a los bonos desde Hotmart.",
              },
              {
                q: "¿Puedo usarlo sin experiencia previa en IA?",
                a: "Claro. Inicia desde lo básico y te lleva a flujos prácticos paso a paso.",
              },
              {
                q: "¿Sirve para mi especialidad?",
                a: "Incluye prompts generales y por especialidad + metodología para adaptarlos a tu práctica.",
              },
              {
                q: "¿Qué pasa si no me convence?",
                a: "Tienes 7 días de garantía. Si no te aporta valor, te devolvemos el dinero.",
              },
            ].map((f, i) => (
              <details key={i} className="group p-6">
                <summary className="cursor-pointer list-none font-semibold flex items-center justify-between">
                  {f.q}
                  <span className="transition group-open:rotate-45 text-2xl">+</span>
                </summary>
                <p className="mt-2 text-slate-600">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold">Listo para llevar tu práctica al siguiente nivel</h2>
          <p className="mt-2 text-slate-600">Aplica IA con criterio profesional y ahorra tiempo todos los días.</p>
          <a href={CHECKOUT_URL} target="_blank" rel="noopener noreferrer nofollow"
   className="inline-flex items-center rounded-2xl bg-emerald-600 px-6 py-3 text-white font-semibold shadow-lg hover:bg-emerald-700">
  Comprar ahora
</a>

          <p className="mt-2 text-xs text-slate-500">Pago seguro · Acceso inmediato · Garantía 7 días</p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-slate-200 py-10">
        <div className="mx-auto max-w-6xl px-4 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-500">
          <div>© {new Date().getFullYear()} Academia IA – by WV</div>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-slate-700">Política de Privacidad</a>
            <a href="#" className="hover:text-slate-700">Términos</a>
            <a href="#" className="hover:text-slate-700">Soporte</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
