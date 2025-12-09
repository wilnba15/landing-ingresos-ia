// app/ia-basica/page.tsx
import Image from "next/image";
import Link from "next/link";

export default function IABasicaPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-cyan-500/10 via-slate-950 to-slate-950" />
        <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-10 px-4 pb-20 pt-24 md:flex-row md:gap-16 md:pt-28">
          {/* Texto principal */}
          <div className="max-w-xl space-y-6">
            <p className="text-sm font-semibold tracking-[0.2em] text-cyan-300">
              PRODUCTIVIDAD • INTELIGENCIA ARTIFICIAL • FUTURO
            </p>
            <h1 className="text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
              La forma más simple de empezar a usar{" "}
              <span className="block text-cyan-300">
                Inteligencia Artificial en tu trabajo y en tu vida diaria 🤖⚡
              </span>
            </h1>
            <p className="text-base text-slate-200 sm:text-lg">
              Descubre cómo utilizar{" "}
              <span className="font-semibold text-cyan-300">
                herramientas de IA como ChatGPT
              </span>{" "}
              sin ser programador, para ahorrar tiempo, crear mejores contenidos,
              tomar decisiones más inteligentes y potenciar tu carrera o tu
              negocio… en solo <b>10 horas de práctica guiada</b>.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="https://wa.me/593986138541?text=Hola%20Wilson,%20quiero%20informaci%C3%B3n%20del%20curso%20IA%20B%C3%A1sica%20Pr%C3%A1ctica"
                target="_blank"
                className="rounded-xl bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-400/40 transition hover:bg-cyan-300"
              >
                Quiero información por WhatsApp 📲
              </Link>
              <Link
                href="#programa"
                className="text-xs text-slate-400 underline-offset-2 hover:underline"
              >
                Ver el programa completo del curso
              </Link>
            </div>

            <div className="mt-4 flex flex-wrap gap-3 text-xs text-slate-400">
              <span className="rounded-full border border-slate-700 px-3 py-1">
                Ideal para principiantes ✅
              </span>
              <span className="rounded-full border border-slate-700 px-3 py-1">
                Profesionales y emprendedores 👔
              </span>
              <span className="rounded-full border border-slate-700 px-3 py-1">
                Sin programar • Sin tecnicismos 🧠
              </span>
            </div>
          </div>

{/* Imagen reemplazando tarjeta */}
<div className="relative w-full max-w-xs">
  <Image
    src="/images/portada-ia-basica.png" // ← reemplaza con tu imagen real
    alt="IA Básica Práctica"
    width={600}
    height={800}
    className="rounded-3xl shadow-2xl border border-slate-800"
  />

  {/* (Opcional) mensaje pequeño debajo */}
  <p className="mt-3 text-center text-xs text-slate-400">
    Formación impartida por <span className="font-semibold text-slate-100">
      Ing. Wilson Valencia
    </span>
  </p>
</div>

        </div>
      </section>

      {/* Qué es / por qué es diferente */}
      <section className="border-y border-slate-800 bg-slate-900/40">
        <div className="mx-auto flex max-w-5xl flex-col gap-10 px-4 py-16 md:flex-row md:items-center">
          <div className="flex-1 space-y-4">
            <h2 className="text-2xl font-bold sm:text-3xl">
              ¿Qué es este curso y por qué es diferente? 💥
            </h2>
            <p className="text-sm text-slate-200 sm:text-base">
              No es un curso técnico lleno de fórmulas. Es un entrenamiento
              práctico donde aprendes a usar{" "}
              <span className="font-semibold text-cyan-300">IA real</span> en
              tus tareas diarias: escribir, resumir, planificar, analizar,
              crear ideas y tomar mejores decisiones.
            </p>
            <p className="text-sm text-slate-200 sm:text-base">
              Veremos juntos cómo integrar la IA en tu profesión o negocio, paso
              a paso y con ejemplos adaptados a tu realidad: salud, derecho,
              educación, administración, marketing, ventas, etc.
            </p>
          </div>

          <div className="flex-1 space-y-3 text-sm text-slate-200">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-cyan-300">
              Cuando termines el curso podrás:
            </h3>
            <ul className="space-y-2">
              <li>• Hablar con ChatGPT como un profesional.</li>
              <li>• Crear textos, ideas y contenidos en minutos.</li>
              <li>• Resumir documentos, correos e informes largos.</li>
              <li>• Diseñar prompts claros y potentes.</li>
              <li>• Empezar a automatizar tareas sencillas sin programar.</li>
              <li>• Tener tu propio “sistema IA personal” para tu trabajo.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Bloque beneficios / características */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid gap-10 md:grid-cols-2">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold sm:text-3xl">
              IA explicada en lenguaje humano, aplicada a tu día a día 🧠
            </h2>
            <p className="text-sm text-slate-200 sm:text-base">
              Entenderás qué es la IA, cómo funcionan herramientas como ChatGPT
              y cómo usarlas como un asistente inteligente para escribir,
              analizar, crear, planificar y decidir mejor.
            </p>
            <p className="text-sm text-slate-200 sm:text-base">
              Todo sin fórmulas raras, sin necesidad de programar y sin perderte
              en tecnicismos. Solo lo que realmente necesitas para{" "}
              <span className="font-semibold text-cyan-300">
                usar IA desde el día 1
              </span>
              .
            </p>
          </div>

          <div className="grid gap-4 text-sm text-slate-200 sm:text-base">
            <FeatureCard
              title="Productividad multiplicada ⏱️"
              text="Aprende a delegar a la IA correos, resúmenes, ideas, borradores y revisiones, para enfocarte en lo que realmente importa."
            />
            <FeatureCard
              title="Mejores decisiones 💡"
              text="Utiliza la IA como un apoyo para analizar escenarios, comparar opciones y ver perspectivas que quizá no estabas considerando."
            />
            <FeatureCard
              title="Ventaja profesional 🚀"
              text="Mientras muchos aún ven la IA con miedo, tú la estarás usando de forma práctica para destacar en tu trabajo o negocio."
            />
          </div>
        </div>
      </section>

      {/* Programa del curso */}
      <section className="border-y border-slate-800 bg-slate-900/40" id="programa">
        <div className="mx-auto max-w-5xl px_4 px-4 py-16">
          <h2 className="text-center text-2xl font-bold sm:text-3xl">
            ¿Qué veremos en las 10 horas de formación? 📚
          </h2>
          <p className="mt-3 text-center text-sm text-slate-300 sm:text-base">
            Un recorrido claro para pasar de “no sé por dónde empezar” a
            “tengo un sistema IA funcionando para mi realidad”.
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <BulletBlock
              title="Módulo 1 · Introducción a la IA"
              items={[
                "Qué es realmente la Inteligencia Artificial (sin tecnicismos).",
                "Tipos de IA y ejemplos que ya usas sin saberlo.",
                "Cómo la IA está cambiando profesiones y negocios."
              ]}
            />
            <BulletBlock
              title="Módulo 2 · Domina ChatGPT desde cero"
              items={[
                "Cómo piensa ChatGPT y qué puede (y no puede) hacer.",
                "Estructura de una buena pregunta (prompt).",
                "Ejemplos prácticos aplicados a tu profesión."
              ]}
            />
            <BulletBlock
              title="Módulo 3 · Prompt Engineering básico"
              items={[
                "Rol + contexto + objetivo + formato = respuestas potentes.",
                "Plantillas de prompts para distintas profesiones.",
                "Errores comunes al usar IA y cómo evitarlos."
              ]}
            />
            <BulletBlock
              title="Módulo 4 · IA para productividad"
              items={[
                "Organizar tu semana, tareas y proyectos con IA.",
                "Correos, informes y resúmenes en minutos.",
                "Cómo convertir ideas sueltas en planes de acción."
              ]}
            />
            <BulletBlock
              title="Módulo 5 · IA en negocios y contenido"
              items={[
                "Uso de IA para marketing y ventas.",
                "Generación de ideas y calendarios de contenido.",
                "Mensajes para redes, WhatsApp, email y más."
              ]}
            />
            <BulletBlock
              title="Módulo 6 · Proyecto final / Sistema IA personal"
              items={[
                "Diseñar un flujo IA para tu trabajo o negocio.",
                "Documentar tu sistema para usarlo a diario.",
                "Plan de mejora continua después del curso."
              ]}
            />
          </div>
        </div>
      </section>

      {/* Para quién es */}
      <section className="mx-auto max-w-5xl px-4 py-16">
        <h2 className="text-center text-2xl font-bold sm:text-3xl">
          ¿Para quién es este curso? 🎯
        </h2>
        <p className="mt-3 text-center text-sm text-slate-300 sm:text-base">
          Para cualquier persona que quiera aprovechar la IA en su día a día,
          sin necesidad de ser experta en tecnología.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-3 text-sm text-slate-200">
          <TagCard
            title="Profesionales"
            text="Médicos, abogados, contadores, ingenieros, docentes, etc. Personas que quieren usar IA para trabajar mejor y con menos estrés."
          />
          <TagCard
            title="Emprendedores y negocios"
            text="Dueños de pequeños negocios, freelancers y consultores que quieren usar IA para vender más, atender mejor y diferenciarse."
          />
          <TagCard
            title="Estudiantes y curiosos"
            text="Personas que quieren entender la IA ahora, antes de que sea un requisito obligatorio en el mundo laboral."
          />
        </div>
      </section>

      {/* Testimonios (ejemplos genéricos) */}
      <section className="border-y border-slate-800 bg-slate-900/60">
        <div className="mx-auto max-w-5xl px-4 py-16">
          <h2 className="text-center text-2xl font-bold sm:text-3xl">
            Qué dicen quienes ya han trabajado con Wilson 💬
          </h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3 text-sm text-slate-200">
            <Testimonial
              name="Carolina M."
              text="Pensé que la IA era algo muy técnico. Después de la capacitación ahora uso ChatGPT todos los días para informes, correos y planificación."
            />
            <Testimonial
              name="Estudio Jurídico V."
              text="Aplicamos lo visto en el taller para mejorar la atención a clientes y la redacción de documentos. La IA se volvió parte del equipo."
            />
            <Testimonial
              name="Andrés R."
              text="Como docente, la IA me ayuda a preparar clases, exámenes y materiales mucho más rápido. El curso fue directo, claro y muy práctico."
            />
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="mx-auto max-w-5xl px-4 py-16 text-center">
        <h2 className="text-2xl font-bold sm:text-3xl">
          Estás a una decisión de trabajar con IA todos los días…
          <span className="block text-cyan-300">
            y no quedarte mirando cómo otros la aprovechan. 🚀
          </span>
        </h2>
        <p className="mt-3 text-sm text-slate-300 sm:text-base">
          Si sientes que la Inteligencia Artificial avanza muy rápido y no
          quieres quedarte atrás, este curso es tu punto de partida: cercano,
          práctico y adaptado a tu realidad.
        </p>

        <div className="mt-6 flex flex-col items-center gap-3">
          <Link
            href="https://wa.me/593986138541?text=Hola%20Wilson,%20quiero%20reservar%20mi%20cupo%20en%20el%20curso%20IA%20B%C3%A1sica%20Pr%C3%A1ctica"
            target="_blank"
            className="rounded-xl bg-cyan-400 px-8 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-400/40 transition hover:bg-cyan-300"
          >
            Reservar mi cupo ahora por WhatsApp 💬
          </Link>
          <p className="text-xs text-slate-500">
            Responderás tú directamente, coordinando fechas, lugar y forma de pago.
          </p>
        </div>
      </section>

      {/* Acerca del autor */}
<section className="mx-auto max-w-5xl px-4 py-20">
  <h2 className="text-2xl font-bold sm:text-3xl text-center">
    Acerca del autor 👨‍🏫
  </h2>

  <div className="mt-10 flex flex-col items-center gap-8 md:flex-row md:items-start">
    {/* Foto del autor */}
<div className="flex-shrink-0">
  <div className="h-44 w-36 overflow-hidden rounded-[50%] border border-slate-800 shadow-xl">
    <Image
      src="/images/wilvale.png" // ← coloca aquí tu imagen real
      alt="Wilson Valencia"
      width={600}
      height={600}
      className="h-full w-full object-cover"
    />
  </div>
</div>


    {/* Texto */}
    <div className="max-w-2xl space-y-4 text-slate-300 text-sm sm:text-base">
      <p>
        <span className="font-semibold text-cyan-300">Wilson Valencia</span> es
        Ingeniero en Sistemas, Master en Inteligencia Artificial con más de 25 años 
        de experiencia en tecnología, bases de datos, desarrollo de software y gerencia de TI.
        Consultor en Inteligencia Artificial y creador de herramientas digitales impulsadas por IA. 
        Su misión es que profesionales, emprendedores y empresas puedan aprovechar el poder de la IA para
        mejorar su productividad, innovar y tomar decisiones más inteligentes.
      </p>

      <p>
        Además de su experiencia en proyectos de automatización, sistemas
        inteligentes y chatbots, Wilson es profesor de IA y se dedica a enseñar
        de manera práctica y sencilla cómo integrar la IA en el trabajo diario,
        sin tecnicismos y con enfoque 100% aplicado.
      </p>

      <p>
        Su visión es que cualquier persona, sin importar su profesión o nivel
        técnico, pueda transformar su vida y su negocio usando Inteligencia
        Artificial de forma consciente, estratégica y efectiva. 🚀🤖
      </p>
    </div>
  </div>
</section>


      {/* Footer */}
      <footer className="border-t border-slate-800 bg-slate-950">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-3 px-4 py-6 text-xs text-slate-500 sm:flex-row">
          <p>
            © {new Date().getFullYear()} Academia IA by WV. Curso “IA Básica Práctica”.
          </p>
          <div className="flex gap-4">
            <Link href="https://www.academiaiabywv.com">
              academiaiabywv.com
            </Link>
            <Link href="mailto:info@academiaiabywv.com">
              info@academiaiabywv.com
            </Link>
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
