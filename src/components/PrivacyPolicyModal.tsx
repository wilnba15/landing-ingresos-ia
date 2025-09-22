"use client";
import React, { useEffect } from "react";
import { createPortal } from "react-dom";

export function PrivacyPolicyModal({
  open,
  onClose,
}: { open: boolean; onClose: () => void }) {
  // No render si está cerrado
  if (!open) return null;

  // Bloquear scroll del body mientras el modal está abierto
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = prev; };
  }, []);

  // Cerrar con ESC
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  const modal = (
    <div aria-modal role="dialog" className="fixed inset-0 z-[9999] flex items-center justify-center">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60" onClick={onClose} />
      {/* Contenido */}
      <div className="relative z-10 max-h-[85vh] w-[92vw] max-w-2xl overflow-hidden rounded-2xl border border-slate-800 bg-slate-900">
        <div className="flex items-center justify-between border-b border-slate-800 px-5 py-4">
          <h3 className="text-lg font-semibold text-white">Política de Privacidad</h3>
          <button onClick={onClose} aria-label="Cerrar" className="rounded-full p-2 text-slate-300 hover:bg-slate-800">✕</button>
        </div>
        <div className="max-h-[65vh] overflow-y-auto px-5 py-4 text-slate-300 space-y-4">
          <p>
            En <strong>Academia IA by WV</strong> usamos tu correo para enviarte el ebook gratuito y comunicaciones sobre IA.
            Puedes darte de baja desde nuestros emails o escribiendo a
            <a className="ml-1 underline" href="mailto:tu-email-de-contacto@tudominio.com">tu-email-de-contacto@tudominio.com</a>.
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>No vendemos tus datos; solo usamos proveedores para email/hosting.</li>
            <li>Medimos aperturas y clics para mejorar contenidos.</li>
            <li>Conservamos datos mientras estés suscrito o hasta 24 meses de inactividad.</li>
            <li>Tienes derecho a acceso, rectificación, eliminación, oposición y portabilidad.</li>
          </ul>
          <p>
            Consulta la versión completa en
            <a className="ml-1 underline" href="/politica-de-privacidad" target="_blank" rel="noopener">/politica-de-privacidad</a>.
          </p>
        </div>
        <div className="flex justify-end gap-3 border-t border-slate-800 px-5 py-3">
          <a href="/politica-de-privacidad" target="_blank" rel="noopener"
             className="rounded-lg border border-slate-700 px-4 py-2 text-sm text-slate-200 hover:bg-slate-800">
            Ver versión completa
          </a>
          <button onClick={onClose} className="rounded-lg bg-pink-600 px-4 py-2 text-sm font-medium text-white hover:bg-pink-500">
            Entendido
          </button>
        </div>
      </div>
    </div>
  );

  // 👇 Portal para evitar clipping por contenedores con overflow/transform
  return createPortal(modal, document.body);
}
