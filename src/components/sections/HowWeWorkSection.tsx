import React from "react";
import Image from "next/image";
import { Sparkle } from "@/components/ui/Sparkle";

export function HowWeWorkSection() {
  return (
    <section id="como-trabajamos" className="relative w-full py-16 md:py-24 bg-[#f5f2ed]">
      {/* Title */}
      <div className="max-w-6xl mx-auto px-6 md:px-12 mb-12 md:mb-16">
        <div className="flex items-center gap-2">
          <Sparkle size={18} />
          <h2 className="font-serif text-2xl sm:text-3xl text-[#b49775] tracking-wider uppercase font-normal">
            ¿CÒMO TRABAJAMOS?
          </h2>
        </div>
      </div>

      {/* Step 1: Light Background */}
      <div className="w-full bg-[#f5f2ed] py-12 md:py-16">
        <div className="max-w-5xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-8 md:gap-16">
          {/* Circle Graphic Left */}
          <div className="relative w-44 h-44 sm:w-52 sm:h-52 flex-shrink-0">
            <div className="w-full h-full rounded-full p-2 border-2 border-[#dfd3c3] shadow-sm relative">
              <div className="w-full h-full rounded-full overflow-hidden relative border border-[#b49775]">
                <Image
                  src="/media/images/sections/step1-sketch.png"
                  alt="Croquis y primer encuentro"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Text Right */}
          <div className="flex-1 text-center md:text-left">
            <div className="flex items-baseline justify-center md:justify-start gap-3 mb-2">
              <span className="font-serif text-3xl sm:text-4xl text-[#b49775] font-light">01.</span>
              <h3 className="font-serif text-xl sm:text-2xl text-[#b49775] font-normal">
                Primer Encuentro.
              </h3>
            </div>
            <p className="font-serif italic text-xs sm:text-sm text-[#7a6e67] mb-3">
              Conexión, Hábitos y Diagnóstico
            </p>
            <p className="text-xs sm:text-[14px] font-sans font-light leading-relaxed text-[#7a6e67] max-w-2xl">
              En esta primera fase profundizamos en tus necesidades, ritmo de vida y aspiraciones estéticas. Analizamos el espacio existente mediante relevamiento métrico y fotográfico, definiendo las pautas funcionales, el alcance del proyecto y las expectativas de inversión para trazar una hoja de ruta personalizada y transparente.
            </p>
          </div>
        </div>
      </div>

      {/* Step 2: Warm Sand Banner */}
      <div className="w-full bg-[#ded4c5] py-12 md:py-16 shadow-inner">
        <div className="max-w-5xl mx-auto px-6 md:px-12 flex flex-col-reverse md:flex-row items-center gap-8 md:gap-16">
          {/* Text Left */}
          <div className="flex-1 text-center md:text-right">
            <div className="flex items-baseline justify-center md:justify-end gap-3 mb-2">
              <h3 className="font-serif text-xl sm:text-2xl text-[#f5f2ed] font-normal drop-shadow-sm">
                Concepto & Anteproyecto
              </h3>
              <span className="font-serif text-3xl sm:text-4xl text-[#f5f2ed] font-light">02.</span>
            </div>
            <p className="font-serif italic text-xs sm:text-sm text-[#8c7b6e] mb-3">
              La Identidad Sensorial
            </p>
            <p className="text-xs sm:text-[14px] font-sans font-light leading-relaxed text-[#5c5550] max-w-2xl ml-auto">
              Desarrollamos la propuesta de distribución espacial, zonificación y lenguaje estético. A través de moodboards matéricos (paleta de materiales, textiles, iluminación y acabados nobles) y primeras visualizaciones espaciales, definimos juntos la dirección del diseño, asegurando que cada rincón responda a la armonía visual y al confort sensorial que buscas.
            </p>
          </div>

          {/* Circle Graphic Right */}
          <div className="relative w-44 h-44 sm:w-52 sm:h-52 flex-shrink-0">
            <div className="w-full h-full rounded-full p-2 border-2 border-[#f5f2ed] shadow-md relative">
              <div className="w-full h-full rounded-full overflow-hidden relative border border-[#b49775]">
                <Image
                  src="/media/images/sections/step2-marble.png"
                  alt="Muestra de mármol y materiales"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Step 3: Light Background */}
      <div className="w-full bg-[#f5f2ed] py-12 md:py-16">
        <div className="max-w-5xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-8 md:gap-16">
          {/* Circle Graphic Left */}
          <div className="relative w-44 h-44 sm:w-52 sm:h-52 flex-shrink-0">
            <div className="w-full h-full rounded-full p-2 border-2 border-[#dfd3c3] shadow-sm relative">
              <div className="w-full h-full rounded-full overflow-hidden relative border border-[#b49775]">
                <Image
                  src="/media/images/sections/step3-blueprint.png"
                  alt="Plano técnico y render 3D"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Text Right */}
          <div className="flex-1 text-center md:text-left">
            <div className="flex items-baseline justify-center md:justify-start gap-3 mb-2">
              <span className="font-serif text-3xl sm:text-4xl text-[#b49775] font-light">03.</span>
              <h3 className="font-serif text-xl sm:text-2xl text-[#b49775] font-normal">
                Proyecto Ejecutivo & 3D
              </h3>
            </div>
            <p className="font-serif italic text-xs sm:text-sm text-[#7a6e67] mb-3">
              Precisión Técnica y Realismo
            </p>
            <p className="text-xs sm:text-[14px] font-sans font-light leading-relaxed text-[#7a6e67] max-w-2xl">
              Definimos cada espacio al milímetro antes de entrar a obra. Desarrollamos modelado 3D fotorrealista para que visualices el resultado final con total certeza, junto a la planimetría constructiva completa, diseño de carpintería y mobiliario a medida, iluminación y especificación detallada de materiales y acabados nobles para asegurar una ejecución impecable.
            </p>
          </div>
        </div>
      </div>

      {/* Step 4: Warm Sand Banner */}
      <div className="w-full bg-[#ded4c5] py-12 md:py-16 shadow-inner">
        <div className="max-w-5xl mx-auto px-6 md:px-12 flex flex-col-reverse md:flex-row items-center gap-8 md:gap-16">
          {/* Text Left */}
          <div className="flex-1 text-center md:text-right">
            <div className="flex items-baseline justify-center md:justify-end gap-3 mb-2">
              <h3 className="font-serif text-xl sm:text-2xl text-[#f5f2ed] font-normal drop-shadow-sm">
                Coordinación & Ejecución
              </h3>
              <span className="font-serif text-3xl sm:text-4xl text-[#f5f2ed] font-light">04.</span>
            </div>
            <p className="font-serif italic text-xs sm:text-sm text-[#8c7b6e] mb-3">
              Del Plano a la Realidad
            </p>
            <p className="text-xs sm:text-[14px] font-sans font-light leading-relaxed text-[#5c5550] max-w-2xl ml-auto">
              Nos encargamos de la gestión y tramitación de pedidos con proveedores y firmas exclusivas, así como de la coordinación y supervisión directa con los gremios y técnicos en obra. Cuidamos cada encuentro de materiales y detalle constructivo para garantizar que el resultado final sea fiel reflejo del diseño proyectado, listo para ser disfrutado.
            </p>
          </div>

          {/* Circle Graphic Right */}
          <div className="relative w-44 h-44 sm:w-52 sm:h-52 flex-shrink-0">
            <div className="w-full h-full rounded-full p-2 border-2 border-[#f5f2ed] shadow-md relative">
              <div className="w-full h-full rounded-full overflow-hidden relative border border-[#b49775]">
                <Image
                  src="/media/images/sections/step4-finished.png"
                  alt="Ejecución de obra terminada"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
