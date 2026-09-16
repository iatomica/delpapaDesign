"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Compass, FileText, CheckCircle2 } from "lucide-react";

const TECHNICAL_DOCS = [
  {
    id: "aurea-pb",
    title: "Planta Baja — Boutique Hotel Aurea",
    surface: "Superficie útil: 415 mq",
    description: "Distribución de suites en cueva con piscinas privadas integradas, accesos y zonas de servicio.",
    image: "/media/images/plans/aurea-floorplan-1.webp"
  },
  {
    id: "aurea-p1",
    title: "Primer Piso — Boutique Hotel Aurea",
    surface: "Superficie útil: 395 mq",
    description: "Habitaciones dobles premium y suites con solárium privado conectado al paisaje lucano.",
    image: "/media/images/plans/aurea-floorplan-2.webp"
  },
  {
    id: "aurea-p2",
    title: "Segundo Piso — Boutique Hotel Aurea",
    surface: "Superficie útil: 395 mq",
    description: "Apartamentos exclusivos con jacuzzi panorámico exterior y cocina de integración completa.",
    image: "/media/images/plans/aurea-floorplan-3.webp"
  },
  {
    id: "aurea-detail",
    title: "Plano de Detalle Constructivo & Carpinterías",
    surface: "Detalle 1:20 / 1:10",
    description: "Encuentros de piedra toba, carpinterías a medida, perfiles empotrados e iluminación oculta.",
    image: "/media/images/plans/aurea-detail-plan.webp"
  },
  {
    id: "masseria-masterplan",
    title: "Masterplan Funcional — Masseria Contemporánea",
    surface: "1.200 mq exterior",
    description: "Articulación dual: sector gastronómico exterior y módulo residencial boutique independiente.",
    image: "/media/images/plans/masseria-siteplan.webp"
  }
];

export function TechnicalPlansSection() {
  const [activePlanIdx, setActivePlanIdx] = useState(0);

  return (
    <section id="planos" className="relative w-full py-28 md:py-40 bg-[#0D0C0B] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-6 h-[1px] bg-[#C2A77A]" />
            <span className="editorial-mono text-[#C2A77A] text-[11px] tracking-[0.25em]">
              Precisión Constructiva
            </span>
          </div>
          <h2 className="editorial-title text-4xl sm:text-6xl text-[#EDEAE4] mb-4">
            Rigor Técnico & Planimetría
          </h2>
          <p className="text-sm text-[#A6A095] font-light leading-relaxed">
            Nuestra práctica garantiza el control total del proceso: desde el modelado BIM y planos
            constructivos hasta la elaboración de mediciones (BOQ), presupuestos y coordinación de licencias
            según normativa europea.
          </p>
        </div>

        {/* Plan Viewer Interface */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Navigation selector */}
          <div className="lg:col-span-4 flex flex-col gap-3">
            <span className="editorial-mono text-[10px] text-[#A6A095] tracking-widest uppercase mb-1">
              Documentación Ejecutiva
            </span>
            {TECHNICAL_DOCS.map((doc, idx) => {
              const isSelected = activePlanIdx === idx;

              return (
                <button
                  key={doc.id}
                  onClick={() => setActivePlanIdx(idx)}
                  className={`text-left p-4 rounded-xl border transition-all duration-300 ${
                    isSelected
                      ? "bg-[#181715] border-[#C2A77A] text-[#EDEAE4]"
                      : "bg-white/[0.01] border-white/5 text-[#A6A095] hover:text-[#EDEAE4] hover:border-white/20"
                  }`}
                >
                  <div className="flex items-center justify-between text-xs mb-1">
                    <span className="editorial-mono text-[9px] text-[#C2A77A]">
                      PLANO 0{idx + 1}
                    </span>
                    <span className="font-mono text-[10px] text-white/40">
                      {doc.surface}
                    </span>
                  </div>
                  <h4 className="font-serif text-base text-[#EDEAE4] font-medium">
                    {doc.title}
                  </h4>
                </button>
              );
            })}

            {/* Technical Checklist */}
            <div className="p-6 rounded-xl border border-white/5 bg-white/[0.01] mt-4 space-y-3">
              <h5 className="editorial-mono text-[10px] text-[#C2A77A] tracking-wider uppercase">
                Capacidades Técnicas
              </h5>
              <ul className="text-xs text-[#A6A095] space-y-2 font-light">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#C2A77A]" />
                  <span>Expedientes técnicos de licencias municipales</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#C2A77A]" />
                  <span>Despiece de carpinterías y mobiliario a medida</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#C2A77A]" />
                  <span>Cómputos métricos y especificaciones BOQ</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Large Architectural Plan Display */}
          <div className="lg:col-span-8 p-6 rounded-2xl border border-white/10 bg-[#161514] flex flex-col justify-between min-h-[500px]">
            <div className="relative aspect-[4/3] w-full bg-[#0D0C0B] rounded-xl overflow-hidden border border-white/5 p-4 flex items-center justify-center">
              <Image
                src={TECHNICAL_DOCS[activePlanIdx].image}
                alt={TECHNICAL_DOCS[activePlanIdx].title}
                fill
                sizes="(max-width: 1024px) 100vw, 65vw"
                className="object-contain p-4 transition-all duration-500"
              />
            </div>

            <div className="pt-6 border-t border-white/5 mt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h3 className="font-serif text-xl sm:text-2xl text-[#EDEAE4]">
                  {TECHNICAL_DOCS[activePlanIdx].title}
                </h3>
                <p className="text-xs sm:text-sm text-[#A6A095] font-light mt-1">
                  {TECHNICAL_DOCS[activePlanIdx].description}
                </p>
              </div>
              <span className="editorial-mono text-xs text-[#C2A77A] font-mono shrink-0">
                {TECHNICAL_DOCS[activePlanIdx].surface}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
