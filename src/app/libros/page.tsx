// app/libros/page.tsx
// Página de catálogo de libros (Next.js App Router)
// Usa Tailwind + shadcn/ui (Button, Card). Añade tus portadas en /public/books/

"use client";

import React, { useMemo, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

// ---- Tipos ----
export type Book = {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  price: number; // USD
  category: "IA" | "Salud" | "Productividad" | "Educación" | "Negocios" | string;
  level?: "Básico" | "Intermedio" | "Avanzado";
  cover?: string; // ruta pública, e.g. "/books/guia-ia-cover.png"
  link: string; // Gumroad/Hotmart/otro
};

// ---- Data de ejemplo (reemplaza con tus productos reales) ----
const BOOKS: Book[] = [
  {
    id: "guia-ia-emprendedores",
    title: "Guía de IA para Emprendedores",
    subtitle: "10 ideas prácticas para implementar IA",
    description:
      "Aprende a detectar oportunidades de automatización, crear flujos rápidos con IA y lanzar tu primer experimento en 7 días.",
    price: 7,
    category: "IA",
    level: "Básico",
    cover: "/books/guia-ia-cover.png", // TODO: coloca tu imagen en public/books/
    link: "http://localhost:3000/ebooks/guia-ia.pdf", // TODO
  },
  {
    id: "prompts-elite",
    title: "Prompts Élite para Negocios",
    subtitle: "Más de 300 prompts listos para vender y ejecutar",
    description:
      "Colección curada para marketing, ventas, atención al cliente y análisis. Incluye plantillas y casos reales.",
    price: 12,
    category: "Negocios",
    level: "Intermedio",
    cover: "/books/guia-ia-cover.png",
    link: "https://wsvch.gumroad.com/l/vvtzq",
  },
  {
    id: "salud-habitos-ia",
    title: "Hábitos Inteligentes con IA",
    subtitle: "Plan semanal de salud y productividad",
    description:
      "Diseña rutinas saludables asistidas por IA: alimentación, sueño, enfoque y micro‑hábitos sostenibles.",
    price: 9,
    category: "Salud",
    level: "Básico",
    cover: "/books/habitos-ia.png",
    link: "https://tu-link-de-venta.com/habitos-ia",
  },
  {
    id: "ia-educacion",
    title: "IA para Educación",
    subtitle: "Guía docente y plantillas de clase",
    description:
      "Planifica clases, evalúa con rúbricas y genera material interactivo con IA, paso a paso.",
    price: 14,
    category: "Educación",
    level: "Intermedio",
    cover: "/books/ia-educacion.png",
    link: "https://tu-link-de-venta.com/ia-educacion",
  },
  {
    id: "productividad-pro",
    title: "Productividad PRO con IA",
    subtitle: "Automatiza tu día a día",
    description:
      "Sistemas personales de organización, escritura y analítica con IA para profesionales ocupados.",
    price: 17,
    category: "Productividad",
    level: "Avanzado",
    cover: "/books/productividad-pro.png",
    link: "https://tu-link-de-venta.com/productividad-pro",
  },
  {
    id: "copilotos-negocio",
    title: "Copilotos de Negocio",
    subtitle: "Mini‑apps de IA listas para usar",
    description:
      "Colección de copilotos (chatbots y asistentes) con instrucciones para adaptarlos a tu negocio.",
    price: 19,
    category: "IA",
    level: "Intermedio",
    cover: "/books/copilotos-negocio.png",
    link: "https://tu-link-de-venta.com/copilotos-negocio",
  },
];

// ---- Utilidades ----
function formatUSD(n: number) {
  return n.toLocaleString("es-EC", { style: "currency", currency: "USD", minimumFractionDigits: 2 });
}

const ALL_CATEGORIES = ["Todos", ...Array.from(new Set(BOOKS.map((b) => b.category)))];

export default function BooksPage() {
  const [q, setQ] = useState("");
  const [cat, setCat] = useState<string>("Todos");
  const [sort, setSort] = useState<"popular" | "price-asc" | "price-desc">("popular");

  const items = useMemo(() => {
    let arr = BOOKS.filter((b) =>
      [b.title, b.subtitle, b.description, b.category].join(" ").toLowerCase().includes(q.toLowerCase())
    );
    if (cat !== "Todos") arr = arr.filter((b) => b.category === cat);
    if (sort === "price-asc") arr = [...arr].sort((a, b) => a.price - b.price);
    if (sort === "price-desc") arr = [...arr].sort((a, b) => b.price - a.price);
    return arr;
  }, [q, cat, sort]);

  return (
    <main className="mx-auto max-w-6xl px-6 py-12 text-slate-200">
      {/* Header */}
      <header className="mb-8 text-center">
        <h1 className="text-3xl md:text-4xl font-extrabold text-white">📚 Libros Digitales</h1>
        <p className="mt-2 text-slate-200">
          Aprende y aplica inteligencia artificial, productividad y negocios con material práctico y directo al grano.
        </p>
      </header>

      {/* Filtros */}
      <section className="mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-1 items-center gap-3">
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Buscar por título, categoría..."
            className="w-full rounded-xl border border-slate-700 bg-slate-900/60 px-4 py-2 text-slate-100 placeholder:text-slate-300 focus:border-slate-500 focus:outline-none"
          />
          <select
            value={cat}
            onChange={(e) => setCat(e.target.value)}
            className="rounded-xl border border-slate-700 bg-slate-900/60 px-3 py-2 text-slate-100"
          >
            {ALL_CATEGORIES.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value as any)}
            className="rounded-xl border border-slate-700 bg-slate-900/60 px-3 py-2 text-slate-100"
            title="Ordenar"
          >
            <option value="popular">Ordenar: Relevancia</option>
            <option value="price-asc">Precio: menor a mayor</option>
            <option value="price-desc">Precio: mayor a menor</option>
          </select>
        </div>
        <div className="text-sm text-slate-400">{items.length} resultado(s)</div>
      </section>

      {/* Grid */}
      {items.length === 0 ? (
        <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-8 text-center text-slate-300">
          No encontramos resultados. Intenta con otra búsqueda o categoría.
        </div>
      ) : (
        <section className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((b) => (
            <Card key={b.id} className="group overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/50 transition hover:border-slate-600 hover:shadow-xl">
              <div className="relative h-44 w-full bg-gradient-to-br from-slate-800 to-slate-900">
                {b.cover ? (
                  // Usa <img> simple para evitar dependencias
                  // Coloca la imagen en /public/books/
                  <img
                    src={b.cover}
                    alt={`Portada de ${b.title}`}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center text-5xl">📘</div>
                )}
              </div>
              <CardContent className="p-5">
                <div className="mb-2 flex items-center justify-between">
                  <span className="rounded-full border border-slate-700 bg-slate-800/60 px-3 py-1 text-xs text-slate-300">
                    {b.category}{b.level ? ` · ${b.level}` : ""}
                  </span>
                  <span className="text-lg font-bold text-white">{formatUSD(b.price)}</span>
                </div>
                <h3 className="text-xl font-semibold text-white">{b.title}</h3>
                {b.subtitle && <p className="text-slate-200">{b.subtitle}</p>}
                <p className="mt-2 line-clamp-3 text-slate-200">{b.description}</p>

                <div className="mt-4 flex gap-3">
                  <a href={b.link} target="_blank" rel="noopener"
                     className="flex-1">
                    <Button className="w-full bg-pink-600 hover:bg-pink-500">Comprar</Button>
                  </a>
                  {b.cover && (
                    <Link href={b.cover} target="_blank" className="flex-1">
                      <Button variant="secondary" className="w-full border-slate-700 bg-slate-800 text-slate-200 hover:bg-slate-700">
                        Ver portada
                      </Button>
                    </Link>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </section>
      )}

      {/* CTA final */}
      <section className="mt-12 rounded-2xl border border-slate-800 bg-slate-900/40 p-6 text-center">
        <h2 className="text-2xl font-bold text-white">¿Tienes dudas sobre qué libro elegir?</h2>
        <p className="mt-2 text-slate-200">
          Escríbeme y te recomiendo la mejor opción según tu objetivo.
        </p>
        <a href="mailto:hola@tu-dominio.com" className="mt-4 inline-block">
          <Button className="bg-green-600 hover:bg-green-500">Quiero una recomendación</Button>
        </a>
      </section>
    </main>
  );
}
