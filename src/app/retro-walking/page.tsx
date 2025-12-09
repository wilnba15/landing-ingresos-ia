// app/retro-walking-english/page.tsx
import Image from "next/image";
import Link from "next/link";

export default function RetroWalkingEnglishPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-cyan-500/10 via-slate-950 to-slate-950" />
        <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-10 px-4 pb-20 pt-24 md:flex-row md:gap-16 md:pt-28">
          {/* Main text */}
          <div className="max-w-xl space-y-6">
            <p className="text-sm font-semibold tracking-[0.2em] text-cyan-300">
              HEALTH • MOBILITY • BALANCE
            </p>
            <h1 className="text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
              The simplest movement that can transform
              <span className="block text-cyan-300">
                your body and your mind 🧠🦵
              </span>
            </h1>
            <p className="text-base text-slate-200 sm:text-lg">
              Discover why{" "}
              <span className="font-semibold text-cyan-300">
                walking backwards
              </span>{" "}
              is one of the most accessible and science-backed methods to
              improve your health, posture, balance and overall well-being…
              at any age. 🚶‍♂️⬅️
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="#buy"
                className="rounded-xl bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-400/40 transition hover:bg-cyan-300"
              >
                Download Book + Mini eBook 📥
              </Link>
              <p className="text-xs text-slate-400">
                Digital PDF version • Instant access ⚡
              </p>
            </div>

            <div className="mt-4 flex flex-wrap gap-3 text-xs text-slate-400">
              <span className="rounded-full border border-slate-700 px-3 py-1">
                Perfect 40+ 👵🧓
              </span>
              <span className="rounded-full border border-slate-700 px-3 py-1">
                Beginner friendly ✅
              </span>
              <span className="rounded-full border border-slate-700 px-3 py-1">
                No gym • No equipment 🏡
              </span>
            </div>
          </div>

          {/* Book cover */}
          <div className="relative w-full max-w-xs">
            <div className="absolute -inset-4 -z-10 rounded-3xl bg-cyan-500/20 blur-2xl" />
            <div className="overflow-hidden rounded-3xl border border-slate-700 bg-slate-900/70 shadow-2xl">
              <Image
                src="/images/portada-retro-walking." // 👉 final English cover here
                alt="Retro Walking book cover"
                width={700}
                height={1000}
                className="h-auto w-full object-cover"
                priority
              />
            </div>
            <p className="mt-3 text-center text-xs text-slate-400">
              Author:{" "}
              <span className="font-semibold text-slate-100">
                Wilson Valencia
              </span>
            </p>
          </div>
        </div>
      </section>

      {/* What is it / why it works */}
      <section className="border-y border-slate-800 bg-slate-900/40">
        <div className="mx-auto flex max-w-5xl flex-col gap-10 px-4 py-16 md:flex-row md:items-center">
          <div className="flex-1 space-y-4">
            <h2 className="text-2xl font-bold sm:text-3xl">
              What is this method and why is it so powerful? 💥
            </h2>
            <p className="text-sm text-slate-200 sm:text-base">
              This book shows you how a movement as simple as{" "}
              <span className="font-semibold text-cyan-300">
                walking backwards
              </span>{" "}
              can activate stabilizing muscles, improve balance, relieve your
              knees and wake up your brain — without complicated routines or
              extreme workouts.
            </p>
            <p className="text-sm text-slate-200 sm:text-base">
              You don&apos;t need a gym, machines or hours of training. You only
              need a small safe space and a clear guide to move in a smarter
              way. 🧭
            </p>
          </div>

          <div className="flex-1 space-y-3 text-sm text-slate-200">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-cyan-300">
              When you practice this method, you:
            </h3>
            <ul className="space-y-2">
              <li>• Protect and strengthen your knees 🦵</li>
              <li>• Regain balance and confidence when walking 🚶‍♀️</li>
              <li>• Improve your posture almost without noticing 💺</li>
              <li>• Activate your brain and mental clarity 🧠</li>
              <li>• Reduce stiffness in hips, back and ankles 🌀</li>
              <li>• Feel more agile, stable and youthful ✨</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Science & benefits */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid gap-10 md:grid-cols-2">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold sm:text-3xl">
              Real science, explained in simple language 🔬
            </h2>
            <p className="text-sm text-slate-200 sm:text-base">
              Throughout the book you&apos;ll see how retro walking has been
              studied in universities and rehab centers: less pressure on the
              knee, higher muscle activation, better balance and increased brain
              activity.
            </p>
            <p className="text-sm text-slate-200 sm:text-base">
              You don&apos;t need to be an expert to understand it — everything
              is explained in a clear, practical way, focused on what you can
              apply in your daily life. 📚
            </p>
          </div>

          <div className="grid gap-4 text-sm text-slate-200 sm:text-base">
            <FeatureCard
              title="Stronger, safer knees 🛡️"
              text="Reduces patellofemoral stress, strengthens the quadriceps and improves patellar alignment through smooth, controlled movements."
            />
            <FeatureCard
              title="Better balance & confidence ⚖️"
              text="Activates the vestibular system, proprioception and stabilizing muscles that help prevent falls and trips."
            />
            <FeatureCard
              title="A more awake brain ⚡"
              text="Walking backwards activates the prefrontal cortex and cerebellum, improving attention, memory and mental clarity."
            />
          </div>
        </div>
      </section>

      {/* What the book includes */}
      <section className="border-y border-slate-800 bg-slate-900/40">
        <div className="mx-auto max-w-5xl px-4 py-16">
          <h2 className="text-center text-2xl font-bold sm:text-3xl">
            What will you find inside the book? 📖
          </h2>
          <p className="mt-3 text-center text-sm text-slate-300 sm:text-base">
            Direct content, no fluff — divided into chapters designed so you can
            understand, apply and feel results.
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <BulletBlock
              title="Part 1 · Understanding the body 🧬"
              items={[
                "What time and habits do to your joints.",
                "Why you lose balance and mobility over the years.",
                "My story as a former athlete and the discovery of retro walking.",
              ]}
            />
            <BulletBlock
              title="Part 2 · The science of movement 🧪"
              items={[
                "How the body 'reprograms' when you change movement direction.",
                "Posture, muscle chains and neuroplasticity.",
                "The relationship between knees, hips, ankles and brain.",
              ]}
            />
            <BulletBlock
              title="Part 3 · Practical application 🛠️"
              items={[
                "Perfect technique step by step.",
                "Risks, precautions and adaptations.",
                "How to integrate it into your daily routine without feeling that you're 'working out'.",
              ]}
            />
            <BulletBlock
              title="Part 4 · Full well-being 💚"
              items={[
                "Emotional and mental benefits.",
                "Scientific studies explained in simple terms.",
                "Frequently asked questions when starting.",
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
                🎁 BONUS · 4-week Progressions Mini eBook
              </h2>
              <p className="text-sm text-slate-200 sm:text-base">
                Together with the main book you&apos;ll receive a mini ebook
                with a 4-week guided training plan: from basic level to advanced
                control, with clear times, progressions and variations.
              </p>
              <ul className="text-sm text-slate-200 sm:text-base space-y-1">
                <li>• Week 1: fundamentals & safety.</li>
                <li>• Week 2: strength & control.</li>
                <li>• Week 3: advanced balance.</li>
                <li>• Week 4: mastery & maintenance.</li>
              </ul>
              <p className="text-sm font-semibold text-cyan-300">
                Real value: $19 · Today it&apos;s included for FREE with your
                purchase. 🎉
              </p>
            </div>

            <div className="flex-1">
              <div className="rounded-2xl border border-cyan-500/30 bg-slate-900/70 p-4 text-sm text-slate-200">
                <p className="font-semibold text-slate-100">Perfect if:</p>
                <ul className="mt-2 space-y-1">
                  <li>• You want to know exactly what to do each day.</li>
                  <li>• You don&apos;t want endless or complicated routines.</li>
                  <li>
                    • You&apos;re looking for a safe progression, especially if
                    you&apos;re 40+.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who is it for */}
      <section className="border-y border-slate-800 bg-slate-900/40">
        <div className="mx-auto max-w-5xl px-4 py-16">
          <h2 className="text-center text-2xl font-bold sm:text-3xl">
            Who is this book for? 🎯
          </h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3 text-sm text-slate-200">
            <TagCard
              title="Adults 40+"
              text="If you feel your body doesn't respond the way it used to, this method helps you recover mobility, balance and confidence when walking."
            />
            <TagCard
              title="Former athletes"
              text="If you left your youth on the court or at the gym and now feel wear and tear, you'll find a smart way to take care of your body."
            />
            <TagCard
              title="People with mild knee pain"
              text="If stairs, slopes or long walks bother you, retro walking can become your best ally."
            />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="mx-auto max-w-5xl px-4 py-16">
        <h2 className="text-center text-2xl font-bold sm:text-3xl">
          What people who practice it say 💬
        </h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3 text-sm text-slate-200">
          <Testimonial
            name="Luis G."
            text="In one week my knees stopped complaining every time I went up the stairs. It's amazing that something so simple works so well."
          />
          <Testimonial
            name="Andrea R."
            text="I work sitting all day. With just 3 minutes of walking backwards I feel my back looser and my mind clearer."
          />
          <Testimonial
            name="Marcelo T."
            text="I was an athlete and today this is the only 'exercise' I can do daily without pain. It feels therapeutic."
          />
        </div>
      </section>

      {/* Author */}
      <section className="border-y border-slate-800 bg-slate-900/60">
        <div className="mx-auto flex max-w-5xl flex-col gap-8 px-4 py-16 md:flex-row md:items-center">
          <div className="h-28 w-28 overflow-hidden rounded-full border border-slate-700 bg-slate-800">
            {/* Optional: your photo here */}
            <Image
              src="/images/wilson-valencia.jpg"
              alt="Wilson Valencia"
              width={200}
              height={200}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="space-y-3 text-sm text-slate-200 sm:text-base">
            <h2 className="text-xl font-bold sm:text-2xl">About the author 👨‍🏫</h2>
            <p>
              <span className="font-semibold text-slate-100">
                Wilson Valencia
              </span>{" "}
              is a former basketball player and a passionate advocate of smart
              movement. After years of sports training and the natural
              consequences of physical wear, he discovered in walking backwards
              a simple yet transformative tool to regain mobility, balance and
              vitality.
            </p>
            <p>
              Today he combines sports discipline, scientific curiosity and a
              human vision of movement to help people reconnect with their body
              and move toward a stronger, more conscious life. 🌱
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section
        className="mx-auto max-w-5xl px-4 py-16 text-center"
        id="buy"
      >
        <h2 className="text-2xl font-bold sm:text-3xl">
          Take your first step backwards today…
          <span className="block text-cyan-300">
            so you can move forward in your life. 🚀
          </span>
        </h2>
        <p className="mt-3 text-sm text-slate-300 sm:text-base">
          Download the full book + the progressions mini ebook and start
          practicing a simple, safe and deeply transformative movement.
        </p>

        <div className="mt-6 flex flex-col items-center gap-3">
          <Link
            href="https://wsvch.gumroad.com/l/nbkrz" // 👉 replace with English checkout if needed
            className="rounded-xl bg-cyan-400 px-8 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-400/40 transition hover:bg-cyan-300"
          >
            I want the Book + Mini eBook now 💳
          </Link>
          <p className="text-xs text-slate-500">
            Instant access • Digital format • Read it on any device 📲
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 bg-slate-950">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-3 px-4 py-6 text-xs text-slate-500 sm:flex-row">
          <p>
            © {new Date().getFullYear()} Academia IA by WV. All rights
            reserved.
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

/* ---------- Helper components ---------- */

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
