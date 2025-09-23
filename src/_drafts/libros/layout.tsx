// src/app/libros/layout.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Libros Digitales | Academia IA by WV",
  description: "Catálogo de libros digitales de IA y productividad con enlaces de compra.",
};

export default function LibrosLayout({ children }: { children: React.ReactNode }) {
  return children;
}

