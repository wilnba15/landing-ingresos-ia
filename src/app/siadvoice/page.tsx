"use client";

import Image from "next/image";

export default function SiadvoiceLandingPage() {
  const whatsappNumber = "593986138541";
  const whatsappMessage = encodeURIComponent(
    "Hola, vi su anuncio y quiero una demo de SIADVOICE para mi clínica."
  );

  const goWhatsApp = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  const benefits = [
    "Agenda citas automáticamente por WhatsApp",
    "Organiza pacientes e historias clínicas en un solo lugar",
    "Visualiza KPIs y control operativo en tiempo real",
    "Reduce carga administrativa en recepción",
    "Ofrece una imagen moderna y profesional a tu clínica",
    "Mejora el seguimiento y la experiencia del paciente",
  ];

  const modules = [
    {
      title: "Agendamiento por WhatsApp",
      description:
        "Tus pacientes pueden solicitar citas de forma rápida y ordenada desde WhatsApp.",
      icon: "💬",
    },
    {
      title: "Historia Clínica Digital",
      description:
        "Gestiona datos del paciente, evolución médica y seguimiento clínico desde una sola plataforma.",
      icon: "🩺",
    },
    {
      title: "Panel con KPIs",
      description:
        "Consulta citas del día, próximas atenciones, cancelaciones y métricas clave para tomar decisiones.",
      icon: "📊",
    },
  ];

  const idealFor = [
    "Clínicas estéticas",
    "Consultorios médicos",
    "Centros odontológicos",
    "Oftalmología",
    "Centros de salud",
    "Especialistas independientes",
  ];

  return (
    <main className="min-h-screen bg-white text-slate-800">

      {/* HERO */}
      <section className="bg-gradient-to-br from-slate-950 via-slate-900 to-cyan-950 text-white">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-2 md:px-10 lg:px-12 lg:py-24">
          <div className="flex flex-col justify-center">
            <div className="mb-5 inline-flex w-fit rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-sm font-semibold text-cyan-200">
              SIADVOICE + HCPRO
            </div>

            <h1 className="text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
              Automatiza tu clínica con IA y controla citas, pacientes e
              historias clínicas desde un solo sistema.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              SIADVOICE te ayuda a captar citas por WhatsApp y HCPRO te permite
              gestionar pacientes, agenda e historia clínica digital en una
              plataforma profesional, moderna y lista para vender.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href={goWhatsApp}
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl bg-cyan-400 px-8 py-4 text-center text-base font-semibold text-slate-950 shadow-lg transition hover:scale-[1.02] hover:bg-cyan-300"
              >
                Probar demo gratuita
              </a>

              <a
                href="#beneficios"
                className="rounded-2xl border border-white/15 bg-white/5 px-8 py-4 text-center text-base font-semibold text-white transition hover:bg-white/10"
              >
                Ver beneficios
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-3 text-sm text-slate-300">
              <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2">
                ✅ Agenda por WhatsApp
              </span>
              <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2">
                ✅ Historia clínica digital
              </span>
              <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2">
                ✅ Dashboard con KPIs
              </span>
            </div>
          </div>

            <div className="flex items-center justify-center">
            <div className="relative w-full max-w-sm overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 shadow-2xl backdrop-blur">
                <video
                className="w-full rounded-[2rem]"
                controls
                playsInline
                preload="metadata"
                >
                <source src="/siadvoice-demo.mp4" type="video/mp4" />
                Tu navegador no soporta video.
                </video>
            </div>
            </div>
        </div>
      </section>

      {/* BENEFICIOS */}
      <section id="beneficios" className="bg-slate-50 py-16">
        <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-12">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-700">
              Beneficios
            </p>
            <h2 className="mt-4 text-3xl font-bold text-slate-900 md:text-4xl">
              Una solución pensada para clínicas que quieren atender mejor y
              vender una imagen profesional.
            </h2>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit) => (
              <div
                key={benefit}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <p className="text-lg font-medium text-slate-700">✅ {benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MODULOS */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-12">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">
              Qué incluye
            </p>
            <h2 className="mt-4 text-3xl font-bold text-slate-900 md:text-4xl">
              Lo más importante para operar tu clínica desde un solo lugar.
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {modules.map((module) => (
              <div
                key={module.title}
                className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm"
              >
                <div className="text-4xl">{module.icon}</div>
                <h3 className="mt-4 text-2xl font-semibold text-slate-900">
                  {module.title}
                </h3>
                <p className="mt-4 leading-7 text-slate-600">
                  {module.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MOCKUPS */}
      <section className="bg-slate-950 py-16 text-white">
        <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-12">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
              Lo que verá tu cliente
            </p>
            <h2 className="mt-4 text-3xl font-bold md:text-4xl">
              Una experiencia clara, moderna y profesional desde el primer
              contacto.
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <div className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/5">
              <Image
                src="/mockup-whatsapp.jpg"
                alt="Agendamiento por WhatsApp"
                width={900}
                height={900}
                className="h-72 w-full object-cover"
              />
              <div className="p-5">
                <h3 className="text-xl font-semibold">WhatsApp</h3>
                <p className="mt-2 leading-7 text-slate-300">
                  El paciente solicita su cita de forma rápida y organizada.
                </p>
              </div>
            </div>

            <div className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/5">
              <Image
                src="/mockup-dashboard.jpg"
                alt="Panel con KPIs"
                width={900}
                height={900}
                className="h-72 w-full object-cover"
              />
              <div className="p-5">
                <h3 className="text-xl font-semibold">Dashboard</h3>
                <p className="mt-2 leading-7 text-slate-300">
                  La clínica visualiza métricas, citas y control operativo en tiempo real.
                </p>
              </div>
            </div>

            <div className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/5">
              <Image
                src="/mockup-hc.jpg"
                alt="Historia Clínica Digital"
                width={900}
                height={900}
                className="h-72 w-full object-cover"
              />
              <div className="p-5">
                <h3 className="text-xl font-semibold">Historia Clínica</h3>
                <p className="mt-2 leading-7 text-slate-300">
                  Información del paciente, evolución y seguimiento centralizado.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* IDEAL PARA */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-12">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-700">
                Ideal para
              </p>
              <h2 className="mt-4 text-3xl font-bold text-slate-900 md:text-4xl">
                Clínicas y consultorios que quieren organizarse mejor y atender
                más pacientes.
              </h2>
              <p className="mt-6 text-lg leading-8 text-slate-600">
                SIADVOICE PRO está pensado para negocios de salud que dependen
                de citas, seguimiento y una atención rápida al paciente.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {idealFor.map((item) => (
                <div
                  key={item}
                  className="rounded-3xl border border-slate-200 bg-slate-50 p-5 text-center font-medium text-slate-700"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="bg-gradient-to-r from-cyan-700 to-emerald-700 px-6 py-16 text-white md:px-10 lg:px-12">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-100">
            Demo
          </p>
          <h2 className="mt-4 text-3xl font-bold md:text-5xl">
            ¿Quieres ver cómo funcionaría en tu clínica?
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-cyan-50">
            Escríbenos por WhatsApp y te mostramos una demo real del sistema
            funcionando con citas, pacientes e historia clínica.
          </p>

          <div className="mt-8">
            <a
              href={goWhatsApp}
              target="_blank"
              rel="noreferrer"
              className="inline-block rounded-2xl bg-white px-8 py-4 text-base font-semibold text-slate-900 shadow-lg transition hover:scale-[1.02]"
            >
              Solicitar demo por WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-slate-950 py-6 text-center text-sm text-slate-400">
        © 2026 SIADVOICE + HCPRO — Desarrollado por Academia IA by WV
      </footer>

    </main>
  );
}