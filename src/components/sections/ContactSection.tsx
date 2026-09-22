"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Sparkle } from "@/components/ui/Sparkle";

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    tipoProyecto: "",
    ubicacion: "",
    mensaje: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contacto" className="relative w-full py-16 md:py-24 bg-[#f5f2ed]">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-2">
            <Sparkle size={18} />
            <h2 className="font-serif text-2xl sm:text-3xl text-[#b49775] tracking-wider uppercase font-normal">
              CONTACTANOS.
            </h2>
          </div>
          <p className="text-xs sm:text-sm font-sans font-light text-[#7a6e67]">
            Cada gran proyecto comienza con una conversación. Hablemos sobre cómo transformar tu espacio.
          </p>
        </div>

        {/* Two Columns Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Form */}
          <div className="lg:col-span-7">
            {submitted ? (
              <div className="bg-[#ede5da] p-8 rounded-2xl border border-[#b49775]/30 text-center space-y-3 animate-fadeIn">
                <h3 className="font-serif text-2xl text-[#b49775]">¡Gracias por contactarnos!</h3>
                <p className="text-xs sm:text-sm text-[#7a6e67] font-light">
                  Hemos recibido tu consulta con éxito. Te responderemos en un plazo máximo de 24 a 48 horas laborables.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-sans text-[#7a6e67] mb-1.5 font-light">
                    Nombre y Apellidos
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.nombre}
                    onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                    className="w-full bg-[#dfd3c3]/70 border-none rounded-sm px-4 py-2.5 text-xs sm:text-sm text-[#5c5550] focus:outline-none focus:ring-1 focus:ring-[#b49775] transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-sans text-[#7a6e67] mb-1.5 font-light">
                    Correo electrónico
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-[#dfd3c3]/70 border-none rounded-sm px-4 py-2.5 text-xs sm:text-sm text-[#5c5550] focus:outline-none focus:ring-1 focus:ring-[#b49775] transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-sans text-[#7a6e67] mb-1.5 font-light">
                    Teléfono (opcional recomendado)
                  </label>
                  <input
                    type="tel"
                    value={formData.telefono}
                    onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
                    className="w-full bg-[#dfd3c3]/70 border-none rounded-sm px-4 py-2.5 text-xs sm:text-sm text-[#5c5550] focus:outline-none focus:ring-1 focus:ring-[#b49775] transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-sans text-[#7a6e67] mb-1.5 font-light">
                    Tipo de proyecto
                  </label>
                  <input
                    type="text"
                    placeholder="Ej. Residencia privada, Reforma integral, Hospitality..."
                    value={formData.tipoProyecto}
                    onChange={(e) => setFormData({ ...formData, tipoProyecto: e.target.value })}
                    className="w-full bg-[#dfd3c3]/70 border-none rounded-sm px-4 py-2.5 text-xs sm:text-sm text-[#5c5550] placeholder:text-[#9e918a]/60 focus:outline-none focus:ring-1 focus:ring-[#b49775] transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-sans text-[#7a6e67] mb-1.5 font-light">
                    Ubicación del inmueble
                  </label>
                  <input
                    type="text"
                    placeholder="Ciudad o región"
                    value={formData.ubicacion}
                    onChange={(e) => setFormData({ ...formData, ubicacion: e.target.value })}
                    className="w-full bg-[#dfd3c3]/70 border-none rounded-sm px-4 py-2.5 text-xs sm:text-sm text-[#5c5550] placeholder:text-[#9e918a]/60 focus:outline-none focus:ring-1 focus:ring-[#b49775] transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-sans text-[#7a6e67] mb-1.5 font-light">
                    Cuéntanos sobre tu espacio
                  </label>
                  <textarea
                    rows={4}
                    value={formData.mensaje}
                    onChange={(e) => setFormData({ ...formData, mensaje: e.target.value })}
                    className="w-full bg-[#dfd3c3]/70 border-none rounded-sm px-4 py-2.5 text-xs sm:text-sm text-[#5c5550] focus:outline-none focus:ring-1 focus:ring-[#b49775] transition-all resize-none"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="btn-gold w-full sm:w-auto"
                  >
                    SOLICITAR CONSULTA
                  </button>
                </div>

                <p className="text-[11px] font-sans font-light text-[#9e918a] leading-relaxed pt-2">
                  Respondemos habitualmente en un plazo de 24 a 48 horas laborables. Si tu proyecto se encuentra fuera de Valencia, disponemos de servicio de consultoría y desarrollo técnico en remoto.
                </p>
              </form>
            )}
          </div>

          {/* Right Column: Studio Information & Monogram */}
          <div className="lg:col-span-5 flex flex-col items-center text-center pt-4 lg:pt-8 space-y-6">
            {/* Monogram */}
            <div className="relative w-28 h-32 select-none">
              <Image
                src="/media/images/sections/sense-monogram.png"
                alt="SENSE Monograma"
                fill
                className="object-contain"
              />
            </div>

            <div className="space-y-2">
              <h3 className="font-serif text-lg text-[#7a6e67] font-normal tracking-wide">
                SENSE · Interior Design Studio
              </h3>
              <p className="text-xs font-sans text-[#9e918a] font-light">
                Proyectos presenciales y consultoría internacional
              </p>
              <p className="text-xs font-sans text-[#7a6e67]">
                Email:{" "}
                <a
                  href="mailto:sense.studiodesign@gmail.com"
                  className="hover:text-[#b49775] transition-colors underline underline-offset-4"
                >
                  sense.studiodesign@gmail.com
                </a>
              </p>
              <p className="text-xs font-sans text-[#7a6e67]">
                Teléfono / WhatsApp:{" "}
                <a
                  href="https://wa.me/34603502985"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#b49775] transition-colors"
                >
                  (+34) 603 502 985
                </a>
              </p>
            </div>

            <div className="pt-2 space-y-1.5">
              <p className="text-xs font-serif italic text-[#b49775]">Redes & Enlaces:</p>
              <p className="text-xs font-sans text-[#7a6e67]">
                LinkedIn:{" "}
                <a
                  href="https://www.linkedin.com/in/stefania-del-papa-interior-designer"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#b49775] transition-colors"
                >
                  stefania-del-papa-interior-design
                </a>
              </p>
              <p className="text-xs font-sans text-[#7a6e67]">
                Behance:{" "}
                <a
                  href="https://www.behance.net/stefaniadelpapa-sens"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#b49775] transition-colors"
                >
                  stefaniadelpapa-sens
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
