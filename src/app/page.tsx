"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { useState } from "react";

// 👇 Importa el modal (asegúrate de que exista en src/components/PrivacyPolicyModal.tsx)
import dynamic from "next/dynamic";
const PrivacyPolicyModal = dynamic(
  () => import("@/components/PrivacyPolicyModal").then(m => m.PrivacyPolicyModal),
  { ssr: false }
);

export default function LandingIA() {
  const [email, setEmail] = useState("");
  const [agree, setAgree] = useState(false);
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState<string | null>(null);
  const [openPolicy, setOpenPolicy] = useState(false); // 👈 nuevo estado para el modal

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setMsg(null);
    if (!email || email.indexOf("@") === -1) {
      setMsg("Por favor ingresa un correo válido.");
      return;
    }
    if (!agree) {
      setMsg("Debes aceptar la política de privacidad.");
      return;
    }
    setLoading(true);
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, source: "landing-ingresos-ia" })
      });
      if (res.ok) {
        setMsg("¡Listo! Revisa tu correo para descargar el ebook.");
        setEmail("");
        setAgree(false);
      } else {
        setMsg("No se pudo enviar. Intenta nuevamente.");
      }
    } catch (err) {
      setMsg("Error de conexión. Intenta más tarde.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white flex flex-col items-center justify-center p-6">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-bold text-center mb-6 text-yellow-400 drop-shadow-lg"
      >
        💡 Genera Ingresos Constantes con IA
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="text-lg md:text-xl text-gray-200 text-center max-w-2xl mb-10"
      >
        Aprende a monetizar tu conocimiento y herramientas de Inteligencia Artificial. Libros, cursos y soluciones automatizadas para empresas.
      </motion.p>

      {/* Lead Capture */}
      <div className="w-full max-w-3xl mt-4">
        <Card className="bg-gray-700 shadow-2xl rounded-2xl border border-yellow-400">
          <CardContent className="p-6 text-center">
            <h3 className="text-2xl font-bold mb-2 text-pink-400">📩 Descarga Gratis: "IA en Acción – 10 Ideas para Generar Ingresos"</h3>
            <p className="text-gray-200 mb-4">Ingresa tu correo y recibe el ebook gratuito</p>

            <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4 items-center">
              <input
                type="email"
                placeholder="Tu correo electrónico"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 p-3 rounded-xl bg-white text-black focus:outline-none focus:ring-4 focus:ring-pink-400"
                required
              />
              <Button type="submit" className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-xl" disabled={loading}>
                {loading ? "Enviando..." : "Enviar"}
              </Button>
            </form>

{/* ✅ Checkbox SOLO dentro del label */}
<div className="mt-3 text-sm text-gray-300">
  <label htmlFor="agree" className="inline-flex items-center gap-2">
    <input
      id="agree"
      type="checkbox"
      checked={agree}
      onChange={(e) => setAgree(e.target.checked)}
      className="h-4 w-4"
      required
    />
    <span>Acepto la</span>
  </label>

  {/* ✅ Botón fuera del label + stopPropagation */}
  <button
    type="button"
    className="ml-1 underline text-pink-300 underline-offset-4"
    onClick={(e) => {
      e.preventDefault();
      e.stopPropagation();
      setOpenPolicy(true);
    }}
  >
    política de privacidad
  </button>

  {/* opcional: link a versión completa */}
  <a
    href="/politica-de-privacidad"
    target="_blank"
    rel="noopener"
    className="ml-2 underline text-pink-300"
    onClick={(e) => e.stopPropagation()}
  >
    Ver versión completa
  </a>
</div>


            {msg && <p className="text-center text-sm text-yellow-300 mt-2">{msg}</p>}
          </CardContent>
        </Card>
      </div>

      {/* Productos */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl mt-12">
        <Card className="bg-gray-800 shadow-lg rounded-2xl border border-blue-400 hover:shadow-blue-400/40 hover:scale-105 transition-transform">
          <CardContent className="p-6 flex flex-col items-center text-center">
            <h2 className="text-2xl font-bold mb-2 text-blue-400">📚 Libros Digitales</h2>
            <p className="text-gray-300 mb-4">Aprende IA, mejora tu salud y productividad con nuestros libros digitales. Desde $7.</p>
            
            <Button asChild className="bg-blue-500 hover:bg-blue-600 text-white">
              <Link href="/libros">Ver Libros</Link>
            </Button>
          </CardContent>
        </Card>

        <Card className="bg-gray-800 shadow-lg rounded-2xl border border-green-400 hover:shadow-green-400/40 hover:scale-105 transition-transform">
          <CardContent className="p-6 flex flex-col items-center text-center">
            <h2 className="text-2xl font-bold mb-2 text-green-400">🎓 Mini-Cursos</h2>
            <p className="text-gray-300 mb-4">Capacitación práctica en IA para emprendedores y profesionales. Desde $47.</p>
            <Button className="bg-green-500 hover:bg-green-600 text-white">Ver Cursos</Button>
          </CardContent>
        </Card>

        <Card className="bg-gray-800 shadow-lg rounded-2xl border border-purple-400 hover:shadow-purple-400/40 hover:scale-105 transition-transform">
          <CardContent className="p-6 flex flex-col items-center text-center">
            <h2 className="text-2xl font-bold mb-2 text-purple-400">🤖 Consultoría IA</h2>
            <p className="text-gray-300 mb-4">Automatiza procesos de tu empresa con chatbots y sistemas inteligentes.</p>
            <Button className="bg-purple-500 hover:bg-purple-600 text-white">Solicitar Demo</Button>
          </CardContent>
        </Card>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 1 }}
        className="mt-12 text-center"
      >
        <p className="text-gray-300 font-medium">🚀 Empieza hoy mismo y construye tu independencia financiera con IA.</p>
      </motion.div>
    {/* 👇 Modal montado al final para evitar issues de stacking */}
      {openPolicy && (
  <PrivacyPolicyModal open={openPolicy} onClose={() => setOpenPolicy(false)} />
)}
      
    </div>

  );
}
