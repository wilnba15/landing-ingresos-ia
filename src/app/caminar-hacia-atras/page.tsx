// app/caminar-hacia-atras/page.tsx
import Image from "next/image";
import Link from "next/link";

export default function CaminarHaciaAtrasPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-cyan-500/10 via-slate-950 to-slate-950" />
        <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-10 px-4 pb-20 pt-24 md:flex-row md:gap-16 md:pt-28">
          {/* Texto principal */}
          <div className="max-w-xl space-y-6">
            <p className="text-sm font-semibold tracking-[0.2em] text-cyan-300">
              SALUD • MOVILIDAD • EQUILIBRIO
            </p>
            <h1 className="text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
              El movimiento más simple que puede transformar
              <span className="block text-cyan-300">
                tu cuerpo y tu mente
              </span>
            </h1>
            <p className="text-base text-slate-200 sm:text-lg">
              Descubre por qué{" "}
              <span className="font-semibold text-cyan-300">
                caminar hacia atrás
              </span>{" "}
              es el método más accesible y científicamente respaldado para
              mejorar tu salud, postura, equilibrio y bienestar… a cualquier edad.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="#comprar"
                className="rounded-xl bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-400/40 transition hover:bg-cyan-300"
              >
                Descargar libro + mini-ebook
              </Link>
              <p className="text-xs text-slate-400">
                Versión digital en PDF • Acceso inmediato
              </p>
            </div>

            <div className="mt-4 flex flex-wrap gap-3 text-xs text-slate-400">
              <span className="rounded-full border border-slate-700 px-3 py-1">
                Ideal 40+ años
              </span>
              <span className="rounded-full border border-slate-700 px-3 py-1">
                Apto para principiantes
              </span>
              <span className="rounded-full border border-slate-700 px-3 py-1">
                Sin gimnasio ni equipos
              </span>
            </div>
          </div>

          {/* Portada libro */}
          <div className="relative w-full max-w-xs">
            <div className="absolute -inset-4 -z-10 rounded-3xl bg-cyan-500/20 blur-2xl" />
            <div className="overflow-hidden rounded-3xl border border-slate-700 bg-slate-900/70 shadow-2xl">
              <Image
                src="/images/retro-walking.png" // 👉 pon aquí la portada final
                alt="Portada del libro Caminar Hacia Atrás"
                width={700}
                height={1000}
                className="h-auto w-full object-cover"
                priority
              />
            </div>
            <p className="mt-3 text-center text-xs text-slate-400">
              Autor: <span className="font-semibold text-slate-100">Wilson Valencia</span>
            </p>
          </div>
        </div>
      </section>

      {/* Qué es / por qué funciona */}
      <section className="border-y border-slate-800 bg-slate-900/40">
        <div className="mx-auto flex max-w-5xl flex-col gap-10 px-4 py-16 md:flex-row md:items-center">
          <div className="flex-1 space-y-4">
            <h2 className="text-2xl font-bold sm:text-3xl">
              ¿Qué es este método y por qué es tan potente?
            </h2>
            <p className="text-sm text-slate-200 sm:text-base">
              Este libro te muestra cómo un movimiento tan simple como{" "}
              <span className="font-semibold text-cyan-300">
                caminar hacia atrás
              </span>{" "}
              puede activar músculos estabilizadores, mejorar el equilibrio,
              aliviar rodillas y despertar tu cerebro, sin rutinas complicadas
              ni entrenamientos extremos.
            </p>
            <p className="text-sm text-slate-200 sm:text-base">
              No necesitas gimnasio, ni máquinas, ni horas de ejercicio. Solo
              necesitas un pequeño espacio y una guía clara para moverte de
              forma inteligente.
            </p>
          </div>

          <div className="flex-1 space-y-3 text-sm text-slate-200">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-cyan-300">
              Al practicar este método:
            </h3>
            <ul className="space-y-2">
              <li>• Proteges y fortaleces tus rodillas.</li>
              <li>• Recuperas equilibrio y seguridad al caminar.</li>
              <li>• Mejoras tu postura casi sin darte cuenta.</li>
              <li>• Activas tu cerebro y claridad mental.</li>
              <li>• Disminuyes rigidez en caderas, espalda y tobillos.</li>
              <li>• Te sientes más ágil, estable y joven.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Ciencia y beneficios */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid gap-10 md:grid-cols-2">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold sm:text-3xl">
              Basado en ciencia real, explicado en lenguaje sencillo
            </h2>
            <p className="text-sm text-slate-200 sm:text-base">
              A lo largo del libro verás cómo el retro-walking ha sido estudiado
              en universidades y centros de rehabilitación: menos presión en la
              rodilla, mayor activación muscular, mejor equilibrio y más
              actividad cerebral.
            </p>
            <p className="text-sm text-slate-200 sm:text-base">
              No necesitas ser experto para entenderlo: todo está explicado
              de forma clara, práctica y enfocada en lo que puedes aplicar
              en tu día a día.
            </p>
          </div>

          <div className="grid gap-4 text-sm text-slate-200 sm:text-base">
            <FeatureCard
              title="Rodillas más protegidas"
              text="Reduce el estrés patelofemoral, fortalece el cuádriceps y mejora la alineación de la rótula con movimientos suaves y controlados."
            />
            <FeatureCard
              title="Equilibrio y confianza"
              text="Activa el sistema vestibular, la propriocepción y los músculos estabilizadores que evitan caídas y tropiezos."
            />
            <FeatureCard
              title="Cerebro más despierto"
              text="Caminar hacia atrás activa corteza prefrontal y cerebelo, mejorando atención, memoria y claridad mental."
            />
          </div>
        </div>
      </section>

      {/* Qué incluye el libro */}
      <section className="border-y border-slate-800 bg-slate-900/40">
        <div className="mx-auto max-w-5xl px-4 py-16">
          <h2 className="text-center text-2xl font-bold sm:text-3xl">
            ¿Qué vas a encontrar dentro del libro?
          </h2>
          <p className="mt-3 text-center text-sm text-slate-300 sm:text-base">
            Un contenido directo, sin relleno, dividido en capítulos pensados
            para que entiendas, apliques y sientas resultados.
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <BulletBlock
              title="Parte 1 · Entender el cuerpo"
              items={[
                "Qué le hace el tiempo a tus articulaciones.",
                "Por qué pierdes equilibrio y movilidad.",
                "Mi historia como exdeportista y el descubrimiento del retro-walking."
              ]}
            />
            <BulletBlock
              title="Parte 2 · La ciencia del movimiento"
              items={[
                "Cómo se reprograma el cuerpo al cambiar la dirección del movimiento.",
                "Postura, cadenas musculares y neuroplasticidad.",
                "Relación entre rodillas, cadera, tobillos y cerebro."
              ]}
            />
            <BulletBlock
              title="Parte 3 · Aplicación práctica"
              items={[
                "Técnica perfecta paso a paso.",
                "Riesgos, precauciones y adaptaciones.",
                "Cómo integrarlo en tu rutina diaria sin sentir que ‘estás entrenando’."
              ]}
            />
            <BulletBlock
              title="Parte 4 · Bienestar completo"
              items={[
                "Beneficios emocionales y mentales.",
                "Estudios científicos explicados fácil.",
                "Preguntas frecuentes que muchas personas se hacen al empezar."
              ]}
            />
          </div>
        </div>
      </section>

      {/* Bonus mini-ebook */}
      <section className="mx-auto max-w-5xl px-4 py-16" id="bonus">
        <div className="rounded-3xl border border-cyan-500/40 bg-gradient-to-br from-cyan-500/10 via-slate-900 to-slate-950 p-6 sm:p-8">
          <div className="flex flex-col gap-8 md:flex-row md:items-center">
            <div className="flex-1 space-y-3">
              <h2 className="text-xl font-bold sm:text-2xl text-cyan-300">
                🎁 BONUS · Mini-ebook de progresiones (4 semanas)
              </h2>
              <p className="text-sm text-slate-200 sm:text-base">
                Junto al libro recibirás un mini-ebook con un plan de
                entrenamiento guiado para 4 semanas: desde nivel básico hasta
                dominio avanzado, con tiempos, progresiones y variaciones
                claras.
              </p>
              <ul className="text-sm text-slate-200 sm:text-base space-y-1">
                <li>• Semana 1: fundamentos y seguridad.</li>
                <li>• Semana 2: fuerza y control.</li>
                <li>• Semana 3: equilibrio avanzado.</li>
                <li>• Semana 4: dominio y mantenimiento.</li>
              </ul>
              <p className="text-sm font-semibold text-cyan-300">
                Valor real: $19 · Hoy va incluido GRATIS con tu compra.
              </p>
            </div>

            <div className="flex-1">
              <div className="rounded-2xl border border-cyan-500/30 bg-slate-900/70 p-4 text-sm text-slate-200">
                <p className="font-semibold text-slate-100">
                  Ideal si:
                </p>
                <ul className="mt-2 space-y-1">
                  <li>• Quieres que te digan exactamente qué hacer cada día.</li>
                  <li>• No quieres rutinas eternas ni complicadas.</li>
                  <li>• Buscas una progresión segura, especialmente 40+ años.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Para quién es */}
      <section className="border-y border-slate-800 bg-slate-900/40">
        <div className="mx-auto max-w-5xl px-4 py-16">
          <h2 className="text-center text-2xl font-bold sm:text-3xl">
            ¿Para quién es este libro?
          </h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3 text-sm text-slate-200">
            <TagCard
              title="Adultos 40+"
              text="Si sientes que tu cuerpo ya no responde igual, este método te ayuda a recuperar movilidad, equilibrio y seguridad al caminar."
            />
            <TagCard
              title="Exdeportistas"
              text="Si dejaste tu juventud en la cancha o el gimnasio y hoy sientes desgaste, encontrarás una forma inteligente de cuidar tu cuerpo."
            />
            <TagCard
              title="Personas con dolor leve de rodillas"
              text="Si subir gradas, bajar cuestas o caminar mucho te molesta, el retro-walking puede convertirse en tu mejor aliado."
            />
          </div>
        </div>
      </section>

      {/* Testimonios (placeholder) */}
      <section className="mx-auto max-w-5xl px-4 py-16">
        <h2 className="text-center text-2xl font-bold sm:text-3xl">
          Lo que dicen quienes ya lo practican
        </h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3 text-sm text-slate-200">
          <Testimonial
            name="Luis G."
            text="En una semana mis rodillas dejaron de protestar cada vez que subía gradas. Es increíble que algo tan simple funcione tanto."
          />
          <Testimonial
            name="Andrea R."
            text="Trabajo sentada todo el día. Con solo 3 minutos de caminar hacia atrás siento la espalda más suelta y la mente más clara."
          />
          <Testimonial
            name="Marcelo T."
            text="Fui deportista y hoy este es el único ‘ejercicio’ que puedo hacer diario sin dolor. Se siente terapéutico."
          />
        </div>
      </section>

      {/* Autor */}
      <section className="border-y border-slate-800 bg-slate-900/60">
        <div className="mx-auto flex max-w-5xl flex-col gap-8 px-4 py-16 md:flex-row md:items-center">
          <div className="h-28 w-28 overflow-hidden rounded-full border border-slate-700 bg-slate-800">
            {/* Puedes poner tu foto aquí */}
            <Image
              src="/images/wilson-valencia.jpg"
              alt="Wilson Valencia"
              width={200}
              height={200}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="space-y-3 text-sm text-slate-200 sm:text-base">
            <h2 className="text-xl font-bold sm:text-2xl">
              Acerca del autor
            </h2>
            <p>
              <span className="font-semibold text-slate-100">
                Wilson Valencia
              </span>{" "}
              es exjugador de baloncesto y un apasionado del movimiento
              inteligente. Tras años de entrenamiento deportivo y las
              consecuencias naturales del desgaste físico, descubrió en caminar
              hacia atrás una herramienta simple pero transformadora para
              recuperar movilidad, equilibrio y vitalidad.
            </p>
            <p>
              Hoy combina disciplina deportiva, curiosidad científica y una
              visión humana del movimiento para ayudar a miles de personas a
              reconectar con su cuerpo y avanzar hacia una vida más fuerte y
              consciente.
            </p>
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section
        className="mx-auto max-w-5xl px-4 py-16 text-center"
        id="comprar"
      >
        <h2 className="text-2xl font-bold sm:text-3xl">
          Da hoy tu primer paso hacia atrás…
          <span className="block text-cyan-300">
            para avanzar en tu vida.
          </span>
        </h2>
        <p className="mt-3 text-sm text-slate-300 sm:text-base">
          Descarga ahora el libro completo + el mini-ebook de progresiones y
          empieza a practicar un movimiento simple, seguro y profundamente
          transformador.
        </p>

        <div className="mt-6 flex flex-col items-center gap-3">
          <Link
            href="https://pay.hotmart.com/E103032317X" // 👉 cambia por tu checkout real
            className="rounded-xl bg-cyan-400 px-8 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-400/40 transition hover:bg-cyan-300"
          >
            Quiero el libro + mini-ebook ahora
          </Link>
          <p className="text-xs text-slate-500">
            Acceso inmediato • Formato digital • Puedes leerlo en cualquier
            dispositivo
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 bg-slate-950">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-3 px-4 py-6 text-xs text-slate-500 sm:flex-row">
          <p>© {new Date().getFullYear()} Academia IA by WV. Todos los derechos reservados.</p>
          <div className="flex gap-4">
            <Link href="https://www.academiaiabywv.com">academiaiabywv.com</Link>
            <Link href="mailto:info@academiaiabywv.com">info@academiaiabywv.com</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

/* ---------- Componentes auxiliares ---------- */

type FeatureProps = {
  title: string;
  text: string;
};

function FeatureCard({ title, text }: FeatureProps) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4">
      <h3 className="text-sm font-semibold text-cyan-300">{title}</h3>
      <p className="mt-2 text-xs text-slate-200 sm:text-sm">{text}</p>
    </div>
  );
}

type BulletBlockProps = {
  title: string;
  items: string[];
};

function BulletBlock({ title, items }: BulletBlockProps) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4">
      <h3 className="text-sm font-semibold text-cyan-300">{title}</h3>
      <ul className="mt-2 space-y-1 text-xs text-slate-200 sm:text-sm">
        {items.map((item) => (
          <li key={item}>• {item}</li>
        ))}
      </ul>
    </div>
  );
}

type TagCardProps = {
  title: string;
  text: string;
};

function TagCard({ title, text }: TagCardProps) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4">
      <h3 className="text-sm font-semibold text-cyan-300">{title}</h3>
      <p className="mt-2 text-xs text-slate-200 sm:text-sm">{text}</p>
    </div>
  );
}

type TestimonialProps = {
  name: string;
  text: string;
};

function Testimonial({ name, text }: TestimonialProps) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4">
      <p className="text-xs text-slate-200 sm:text-sm">“{text}”</p>
      <p className="mt-2 text-[11px] font-semibold text-cyan-300">— {name}</p>
    </div>
  );
}
