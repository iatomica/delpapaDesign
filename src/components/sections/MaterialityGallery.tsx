"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Sparkles, Layers } from "lucide-react";

const MATERIALS_DATA = [
  {
    title: "Terracota Lucana & Toba Calcárea",
    project: "Boutique Hotel Aurea — Matera",
    image: "/media/images/moodboards/aurea-terracotta.webp",
    description:
      "Pigmentos terrosos, cerámicas artesanales y bloques de toba calcárea tallada que dialogan con la arquitectura excavada de Matera.",
    aspects: ["Textura porosa", "Inercia térmica", "Tonalidad cálida envolvente"]
  },
  {
    title: "Mármol Calacatta & Vidrio Estriado",
    project: "Residencia Privada — Brindisi",
    image: "/media/images/moodboards/residencia-materials.webp",
    description:
      "Veteado gris sobre fondo níveo combinado con cerramientos canelados que refractan la luz natural manteniendo la privacidad visual.",
    aspects: ["Acabado apomazado", "Translucidez acústica", "Elegancia atemporal"]
  },
  {
    title: "Estucos de Cal & Piedra Seca",
    project: "Masseria Contemporánea — Brindisi",
    image: "/media/images/moodboards/masseria-materials.webp",
    description:
      "Tradición constructiva pugliese reelaborada: estucos de cal transpirables, pavimentos abujardados y cañizo natural para sombra tamizada.",
    aspects: ["Bioclimática vernácula", "Confort táctil", "Reflexión solar"]
  },
  {
    title: "Hormigón Visto & Celosías de Roble",
    project: "Showroom Corporativo — Matera",
    image: "/media/images/moodboards/showroom-materials.webp",
    description:
      "Equilibrio entre la solidez geométrica del hormigón desencofrado y la calidez rítmica de los listones verticales de madera tratada.",
    aspects: ["Filtro solar dinámico", "Sostenibilidad", "Acero antracita"]
  }
];

export function MaterialityGallery() {
  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <section id="materialidad" className="relative w-full py-28 md:py-40 bg-[#0A0908] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-6 h-[1px] bg-[#C2A77A]" />
            <span className="editorial-mono text-[#C2A77A] text-[11px] tracking-[0.25em]">
              Investigación Táctil
            </span>
          </div>
          <h2 className="editorial-title text-4xl sm:text-6xl text-[#EDEAE4] mb-4">
            Nobleza Matérica & Moodboards
          </h2>
          <p className="text-sm text-[#A6A095] font-light leading-relaxed">
            Cada atmósfera nace del diálogo directo con la materia viva. Seleccionamos acabados
            minerales nobles y maderas sostenibles que maduran con autenticidad con el paso del tiempo.
          </p>
        </div>

        {/* Interactive Materiality Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Main Visual Preview */}
          <div className="lg:col-span-8 relative aspect-[16/10] rounded-2xl overflow-hidden border border-white/10 bg-[#161514]">
            <Image
              src={MATERIALS_DATA[activeIdx].image}
              alt={MATERIALS_DATA[activeIdx].title}
              fill
              sizes="(max-width: 1024px) 100vw, 65vw"
              className="object-cover transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

            <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div>
                <span className="editorial-mono text-[10px] text-[#C2A77A] tracking-widest block mb-1">
                  {MATERIALS_DATA[activeIdx].project}
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl text-[#EDEAE4]">
                  {MATERIALS_DATA[activeIdx].title}
                </h3>
              </div>
              <div className="flex gap-2">
                {MATERIALS_DATA[activeIdx].aspects.map((a, i) => (
                  <span
                    key={i}
                    className="px-2.5 py-1 text-[10px] rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-[#D9D2C3]"
                  >
                    {a}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Interactive Material Tabs */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            {MATERIALS_DATA.map((item, idx) => {
              const isActive = activeIdx === idx;

              return (
                <div
                  key={idx}
                  onClick={() => setActiveIdx(idx)}
                  className={`p-5 rounded-xl border transition-all duration-400 cursor-pointer ${
                    isActive
                      ? "bg-[#1C1B19] border-[#C2A77A] shadow-lg shadow-[#C2A77A]/5"
                      : "bg-white/[0.01] border-white/5 hover:border-white/20"
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="editorial-mono text-[10px] text-[#C2A77A] tracking-wider">
                      MUESTRA 0{idx + 1}
                    </span>
                    {isActive && <Sparkles className="w-3.5 h-3.5 text-[#C2A77A]" />}
                  </div>
                  <h4 className="font-serif text-lg text-[#EDEAE4] mb-1">
                    {item.title}
                  </h4>
                  <p className="text-xs text-[#A6A095] font-light line-clamp-2">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
