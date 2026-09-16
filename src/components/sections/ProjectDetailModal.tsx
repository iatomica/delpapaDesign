"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { X, MapPin, Calendar, Maximize2, CheckCircle2 } from "lucide-react";
import { Project } from "@/data/projects";

interface ProjectDetailModalProps {
  project: Project | null;
  onClose: () => void;
}

export function ProjectDetailModal({ project, onClose }: ProjectDetailModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/85 backdrop-blur-xl animate-fadeIn">
      {/* Backdrop click */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Modal Content */}
      <div className="relative w-full max-w-6xl max-h-[90vh] overflow-y-auto bg-[#141312] border border-white/10 rounded-2xl shadow-2xl p-6 sm:p-10 text-[#EDEAE4] z-10 custom-scrollbar">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="sticky top-0 float-right z-20 p-2.5 rounded-full bg-[#1C1B19] border border-white/10 text-[#EDEAE4] hover:text-[#C2A77A] hover:border-[#C2A77A] transition-colors"
          aria-label="Cerrar ventana de proyecto"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header Information */}
        <div className="max-w-3xl mb-10">
          <div className="flex items-center gap-3 text-xs tracking-widest text-[#C2A77A] font-mono mb-2 uppercase">
            <span>Proyecto {project.number}</span>
            <span>·</span>
            <span className="flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5" />
              {project.location}
            </span>
            <span>·</span>
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5" />
              {project.year}
            </span>
          </div>
          <h2 className="editorial-title text-4xl sm:text-5xl md:text-6xl text-[#EDEAE4] mb-3">
            {project.title}
          </h2>
          <p className="text-base text-[#D9D2C3]/80 font-light tracking-wide">
            {project.subtitle}
          </p>
        </div>

        {/* Project Metrics / Badges */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-6 rounded-xl bg-white/[0.02] border border-white/5 mb-12 text-xs">
          <div>
            <span className="text-[#A6A095] block mb-1 uppercase tracking-wider font-mono text-[10px]">
              Tipología
            </span>
            <span className="text-[#EDEAE4] font-medium">{project.category}</span>
          </div>
          <div>
            <span className="text-[#A6A095] block mb-1 uppercase tracking-wider font-mono text-[10px]">
              Emplazamiento
            </span>
            <span className="text-[#EDEAE4] font-medium">{project.location}</span>
          </div>
          {project.surface && (
            <div>
              <span className="text-[#A6A095] block mb-1 uppercase tracking-wider font-mono text-[10px]">
                Superficie
              </span>
              <span className="text-[#EDEAE4] font-medium">{project.surface}</span>
            </div>
          )}
          <div>
            <span className="text-[#A6A095] block mb-1 uppercase tracking-wider font-mono text-[10px]">
              Dirección
            </span>
            <span className="text-[#C2A77A] font-medium">Stefania Del Papa</span>
          </div>
        </div>

        {/* Architectural Concept Narrative */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16 pb-12 border-b border-white/10">
          <div className="lg:col-span-2 space-y-4 text-sm sm:text-base text-[#A6A095] font-light leading-relaxed">
            <h3 className="editorial-mono text-xs text-[#C2A77A] tracking-[0.2em] uppercase">
              Memoria Proyectual
            </h3>
            <p>{project.description}</p>
            <p>{project.concept}</p>
          </div>

          <div className="space-y-6">
            <div>
              <h4 className="editorial-mono text-xs text-[#C2A77A] tracking-[0.2em] mb-3 uppercase">
                Paleta Matérica
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.materials.map((m) => (
                  <span
                    key={m}
                    className="px-3 py-1 text-xs rounded-full border border-white/10 bg-white/[0.03] text-[#D9D2C3]"
                  >
                    {m}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h4 className="editorial-mono text-xs text-[#C2A77A] tracking-[0.2em] mb-3 uppercase">
                Puntos Clave
              </h4>
              <ul className="space-y-2 text-xs text-[#A6A095]">
                {project.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#C2A77A] shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Gallery Renders */}
        <div className="mb-16">
          <h3 className="editorial-title text-2xl sm:text-3xl text-[#EDEAE4] mb-8 font-light">
            Galería de Renders & Vistas
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {project.gallery.map((item, idx) => (
              <div
                key={idx}
                className="group relative overflow-hidden rounded-xl border border-white/5 bg-black/40"
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden">
                  <Image
                    src={item.src}
                    alt={item.caption}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-4 bg-[#181715]/90 border-t border-white/5">
                  <p className="text-xs text-[#D9D2C3] font-light">{item.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Plans Section if present */}
        {project.plans && project.plans.length > 0 && (
          <div className="pt-8 border-t border-white/10">
            <h3 className="editorial-title text-2xl sm:text-3xl text-[#EDEAE4] mb-8 font-light">
              Documentación Arquitectónica & Planos
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {project.plans.map((plan, pIdx) => (
                <div
                  key={pIdx}
                  className="rounded-xl overflow-hidden border border-white/10 bg-[#1A1918] p-4 flex flex-col justify-between"
                >
                  <div className="relative aspect-[4/3] w-full mb-4 bg-white/[0.02] rounded-lg overflow-hidden flex items-center justify-center">
                    <Image
                      src={plan.src}
                      alt={plan.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-contain p-2"
                    />
                  </div>
                  <div>
                    <h4 className="font-serif text-lg text-[#EDEAE4] font-medium">
                      {plan.title}
                    </h4>
                    {plan.subtitle && (
                      <p className="text-xs text-[#A6A095] mt-1 font-light">
                        {plan.subtitle}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
