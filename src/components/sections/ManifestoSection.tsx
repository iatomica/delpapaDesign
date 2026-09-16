import React from "react";
import { Sparkles, Compass, Layers } from "lucide-react";

export function ManifestoSection() {
  return (
    <section id="manifiesto" className="relative w-full py-28 md:py-40 bg-[#0D0C0B] overflow-hidden">
      {/* Subtle architectural background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:6rem_6rem] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6 md:px-12">
        {/* Section Tag */}
        <div className="flex items-center gap-3 mb-8">
          <span className="w-6 h-[1px] bg-[#C2A77A]" />
          <span className="editorial-mono text-[#C2A77A] text-[11px] tracking-[0.25em]">
            Manifiesto & Dirección Creativa
          </span>
        </div>

        {/* Hero Quote */}
        <div className="mb-20 max-w-4xl">
          <h2 className="editorial-title text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-[#EDEAE4] font-light leading-[1.12]">
            &ldquo;Transformamos el espacio en una{" "}
            <span className="editorial-italic text-[#C2A77A]">experiencia sensorial</span> a
            medida.&rdquo;
          </h2>
          <p className="mt-8 text-base md:text-lg text-[#A6A095] font-light leading-relaxed max-w-2xl">
            La arquitectura no es sólo volumen y superficie; es la atmósfera envolvente que
            despierta los sentidos. Concebimos cada proyecto como una obra artesanal donde
            la pureza de las líneas depuradas convive con la nobleza de la materia viva y una
            disciplina constructiva rigurosa.
          </p>
        </div>

        {/* Three Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12 border-t border-white/10">
          {/* Pillar 1 */}
          <div className="flex flex-col gap-4 p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-[#C2A77A]/30 transition-all duration-500 group">
            <div className="w-10 h-10 rounded-full bg-[#C2A77A]/10 flex items-center justify-center text-[#C2A77A] group-hover:scale-110 transition-transform">
              <Sparkles className="w-5 h-5" />
            </div>
            <span className="editorial-mono text-[10px] text-[#C2A77A] tracking-[0.2em]">01 / ESTÉTICA</span>
            <h3 className="font-serif text-2xl text-[#EDEAE4] font-light">
              Lujo Silencioso & Calma
            </h3>
            <p className="text-xs sm:text-sm text-[#A6A095] font-light leading-relaxed">
              Espacios que trascienden las tendencias efímeras. Paletas minerales cálidas, luz natural
              filtrada y ausencia de artificios visuales para crear refugios de serenidad atemporal.
            </p>
          </div>

          {/* Pillar 2 */}
          <div className="flex flex-col gap-4 p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-[#C2A77A]/30 transition-all duration-500 group">
            <div className="w-10 h-10 rounded-full bg-[#C2A77A]/10 flex items-center justify-center text-[#C2A77A] group-hover:scale-110 transition-transform">
              <Compass className="w-5 h-5" />
            </div>
            <span className="editorial-mono text-[10px] text-[#C2A77A] tracking-[0.2em]">02 / MATERIA</span>
            <h3 className="font-serif text-2xl text-[#EDEAE4] font-light">
              Identidad Vernácula
            </h3>
            <p className="text-xs sm:text-sm text-[#A6A095] font-light leading-relaxed">
              Arraigo a la geología mediterránea: estucos de cal, toba calcárea de Matera, roble natural y
              terracota lucana. El entorno moldea la piel de cada interiorismo.
            </p>
          </div>

          {/* Pillar 3 */}
          <div className="flex flex-col gap-4 p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-[#C2A77A]/30 transition-all duration-500 group">
            <div className="w-10 h-10 rounded-full bg-[#C2A77A]/10 flex items-center justify-center text-[#C2A77A] group-hover:scale-110 transition-transform">
              <Layers className="w-5 h-5" />
            </div>
            <span className="editorial-mono text-[10px] text-[#C2A77A] tracking-[0.2em]">03 / TÉCNICA</span>
            <h3 className="font-serif text-2xl text-[#EDEAE4] font-light">
              Rigor Ejecutivo & BOQ
            </h3>
            <p className="text-xs sm:text-sm text-[#A6A095] font-light leading-relaxed">
              Cada propuesta estética está respaldada por planos técnicos constructivos, modelado 3D
              fotorrealista, expedientes de licencias y mediciones cuantitativas detalladas.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
