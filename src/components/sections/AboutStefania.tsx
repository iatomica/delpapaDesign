import React from "react";
import Image from "next/image";
import { Sparkle } from "@/components/ui/Sparkle";

export function AboutStefania() {
  return (
    <section id="estudio" className="relative w-full py-16 md:py-24 bg-[#f5f2ed] text-[#9e918a]">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        {/* Section Title */}
        <div className="flex items-center gap-2 mb-10">
          <Sparkle size={18} />
          <h2 className="font-serif text-2xl sm:text-3xl text-[#b49775] tracking-wider uppercase font-normal">
            ESTUDIO.
          </h2>
        </div>

        {/* Top Two Columns: Bio & Portrait */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-16 items-center mb-16 md:mb-24">
          {/* Left: Bio Paragraphs */}
          <div className="md:col-span-7 space-y-6 text-sm sm:text-[15px] font-sans font-light leading-relaxed text-[#7a6e67]">
            <p>
              Al frente del estudio, combino una sólida formación académica internacional, Licenciatura en Diseño de Interiores en Buenos Aires y un Máster en Diseño de Interiores de Lujo en Italia, con años de experiencia en estudios de arquitectura técnica y showrooms de alta gama europeos.
            </p>
            <p>
              Mi labor no se limita a proyectar; coordino cada fase de la obra asegurando que la intención estética se traduzca con exactitud técnica en la realidad constructiva. Desde el modelado 3D fotorrealista hasta la gestión integral de proveedores, presupuestos y dirección en obra, cada encargo se gestiona con la cercanía, la precisión y la exclusividad que requiere un proyecto a medida.
            </p>
          </div>

          {/* Right: Circular Portrait with Double Ring */}
          <div className="md:col-span-5 flex flex-col items-center justify-center text-center">
            <div className="relative w-48 h-48 sm:w-56 sm:h-56 mb-4">
              <div className="w-full h-full rounded-full p-2 border-2 border-[#dfd3c3] relative shadow-md">
                <div className="w-full h-full rounded-full overflow-hidden relative border border-[#b49775]">
                  <Image
                    src="/media/images/stefania/portrait.webp"
                    alt="Stefania Del Papa"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
            <h3 className="font-serif text-lg sm:text-xl text-[#7a6e67] font-normal">
              Stefania Del Papa
            </h3>
            <p className="text-xs sm:text-sm font-serif italic text-[#b49775] tracking-wide mt-1">
              Fundadora & Directora Creativa
            </p>
          </div>
        </div>

        {/* Photographic & Architectural Collage */}
        <div className="space-y-6 sm:space-y-8">
          {/* Top Row: Two Parallel Vertical Images */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
            <div className="relative h-[340px] sm:h-[480px] overflow-hidden rounded-xl shadow-sm">
              <Image
                src="/media/images/sections/collage-bath.png"
                alt="Detalle de interiorismo y baño noble"
                fill
                className="object-cover hover:scale-102 transition-transform duration-700"
              />
            </div>
            <div className="relative h-[340px] sm:h-[480px] overflow-hidden rounded-xl shadow-sm">
              <Image
                src="/media/images/sections/collage-living.png"
                alt="Salón residencial con confort sensorial"
                fill
                className="object-cover hover:scale-102 transition-transform duration-700"
              />
            </div>
          </div>

          {/* Bottom Row: Niche Image on Left + Text Block on Right */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 items-center">
            <div className="relative h-[340px] sm:h-[480px] overflow-hidden rounded-xl shadow-sm">
              <Image
                src="/media/images/sections/collage-niche.png"
                alt="Rincón de diseño y materias nobles"
                fill
                className="object-cover hover:scale-102 transition-transform duration-700"
              />
            </div>

            <div className="flex flex-col justify-center px-4 sm:px-8 py-6 space-y-6">
              <h3 className="font-serif text-xl sm:text-2xl md:text-3xl text-[#b49775] tracking-wide leading-snug font-normal">
                ARQUITECTURA INTERIOR & <br />
                CONFORT SENSORIAL
              </h3>
              <div className="space-y-4 text-xs sm:text-[14px] font-sans font-light leading-relaxed text-[#7a6e67]">
                <p>
                  En SENSE, concebimos cada espacio como un santuario táctil y visual, concebido para perdurar más allá de las modas efímeras. Nuestra práctica fusiona la sensibilidad del diseño mediterráneo contemporáneo con un estándar técnico riguroso: desarrollamos proyectos integrales que abarcan desde el concepto inicial y la distribución espacial hasta el diseño minucioso de carpinterías a medida, la iluminación escenográfica y la documentación ejecutiva de obra.
                </p>
                <p>
                  Especializados en interiorismo residencial de alto nivel, reformas complejas y proyectos de hospitality, apostamos por la nobleza de la materia prima —la piedra natural, el roble, los estucos a la cal y las texturas orgánicas— para crear atmósferas equilibradas, cálidas y profundamente habitables.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
