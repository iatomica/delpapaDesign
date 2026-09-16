"use client";

import React, { useState } from "react";
import { Phone, Mail, MapPin, Send, CheckCircle2 } from "lucide-react";
import { STUDIO_INFO } from "@/data/projects";

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    location: "",
    type: "Residencial de Lujo",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contacto" className="relative w-full py-28 md:py-40 bg-[#0D0C0B] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Direct Info */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="w-6 h-[1px] bg-[#C2A77A]" />
                <span className="editorial-mono text-[#C2A77A] text-[11px] tracking-[0.25em]">
                  Iniciar Colaboración
                </span>
              </div>

              <h2 className="editorial-title text-4xl sm:text-6xl text-[#EDEAE4] mb-6">
                Hablemos de su Espacio
              </h2>

              <p className="text-sm sm:text-base text-[#A6A095] font-light leading-relaxed mb-10">
                Aceptamos un número limitado de proyectos por año para asegurar una dirección
                creativa personalizada y un control exhaustivo de cada detalle constructivo.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-white/[0.03] border border-white/10 text-[#C2A77A]">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="editorial-mono text-[10px] text-[#A6A095] tracking-widest uppercase block">
                      Teléfono / WhatsApp
                    </span>
                    <a
                      href={`tel:${STUDIO_INFO.phone.replace(/\s+/g, "")}`}
                      className="text-base text-[#EDEAE4] hover:text-[#C2A77A] transition-colors"
                    >
                      {STUDIO_INFO.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-white/[0.03] border border-white/10 text-[#C2A77A]">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="editorial-mono text-[10px] text-[#A6A095] tracking-widest uppercase block">
                      Correo Electrónico
                    </span>
                    <a
                      href={`mailto:${STUDIO_INFO.email}`}
                      className="text-base text-[#EDEAE4] hover:text-[#C2A77A] transition-colors"
                    >
                      {STUDIO_INFO.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-white/[0.03] border border-white/10 text-[#C2A77A]">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="editorial-mono text-[10px] text-[#A6A095] tracking-widest uppercase block">
                      Estudio & Consultoría
                    </span>
                    <p className="text-sm text-[#EDEAE4]">
                      Valencia, España · Buenos Aires, Argentina · Sur de Italia
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-10 border-t border-white/5 mt-10">
              <span className="editorial-mono text-[10px] text-[#C2A77A] tracking-wider uppercase block mb-1">
                Disponibilidad Proyectual
              </span>
              <p className="text-xs text-[#A6A095] font-light">
                Consultoría técnica remota y presencial activa para desarrollos 2025/2026.
              </p>
            </div>
          </div>

          {/* Right Column: Inquiries Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-12 rounded-2xl bg-[#141312] border border-white/10 shadow-2xl">
              {submitted ? (
                <div className="py-16 text-center flex flex-col items-center justify-center">
                  <div className="w-14 h-14 rounded-full bg-[#C2A77A]/10 border border-[#C2A77A]/30 flex items-center justify-center text-[#C2A77A] mb-4">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h3 className="editorial-title text-3xl text-[#EDEAE4] mb-2">
                    Mensaje Recibido
                  </h3>
                  <p className="text-sm text-[#A6A095] max-w-sm font-light">
                    Gracias por ponerse en contacto con SENSE. Stefania Del Papa revisará su
                    solicitud y le responderá a la brevedad.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="btn-editorial btn-editorial-outline text-xs mt-8"
                  >
                    Enviar otra consulta
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <h3 className="editorial-title text-2xl sm:text-3xl text-[#EDEAE4] mb-2">
                    Consulta Proyectual
                  </h3>
                  <p className="text-xs text-[#A6A095] font-light mb-6">
                    Por favor detalle la tipología, ubicación y alcance del proyecto.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="editorial-mono text-[10px] text-[#A6A095] uppercase block mb-2">
                        Nombre Completo *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Ej. Alessandro Rossi"
                        className="w-full px-4 py-3 rounded-lg bg-white/[0.03] border border-white/10 text-sm text-[#EDEAE4] focus:outline-none focus:border-[#C2A77A] transition-colors"
                      />
                    </div>

                    <div>
                      <label className="editorial-mono text-[10px] text-[#A6A095] uppercase block mb-2">
                        Correo Electrónico *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="ejemplo@dominio.com"
                        className="w-full px-4 py-3 rounded-lg bg-white/[0.03] border border-white/10 text-sm text-[#EDEAE4] focus:outline-none focus:border-[#C2A77A] transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="editorial-mono text-[10px] text-[#A6A095] uppercase block mb-2">
                        Emplazamiento del Proyecto
                      </label>
                      <input
                        type="text"
                        value={formData.location}
                        onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                        placeholder="Ej. Valencia, Matera, Puglia..."
                        className="w-full px-4 py-3 rounded-lg bg-white/[0.03] border border-white/10 text-sm text-[#EDEAE4] focus:outline-none focus:border-[#C2A77A] transition-colors"
                      />
                    </div>

                    <div>
                      <label className="editorial-mono text-[10px] text-[#A6A095] uppercase block mb-2">
                        Tipología
                      </label>
                      <select
                        value={formData.type}
                        onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg bg-[#181715] border border-white/10 text-sm text-[#EDEAE4] focus:outline-none focus:border-[#C2A77A] transition-colors"
                      >
                        <option value="Residencial de Lujo">Residencial de Lujo</option>
                        <option value="Hospitality & Hotel Boutique">Hospitality & Hotel Boutique</option>
                        <option value="Comercial & Showroom">Comercial & Showroom</option>
                        <option value="Consultoría Remota">Consultoría Remota de Interiorismo</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="editorial-mono text-[10px] text-[#A6A095] uppercase block mb-2">
                      Detalles del Proyecto *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Describa el metraje aproximado, plazos estimados y visión deseada..."
                      className="w-full px-4 py-3 rounded-lg bg-white/[0.03] border border-white/10 text-sm text-[#EDEAE4] focus:outline-none focus:border-[#C2A77A] transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full btn-editorial btn-editorial-primary text-center justify-center py-3.5"
                  >
                    <span>Enviar Consulta Proyectual</span>
                    <Send className="w-3.5 h-3.5 ml-1" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
