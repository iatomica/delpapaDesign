import React from "react";
import Image from "next/image";

export function HeroStatement() {
  return (
    <section className="relative w-full py-20 md:py-28 bg-[#f5f2ed] flex flex-col items-center justify-center text-center px-6 overflow-hidden">
      {/* Central Radiant Lens Flare / Starburst */}
      <div className="relative w-48 sm:w-64 h-24 sm:h-32 mb-4 pointer-events-none select-none">
        <Image
          src="/media/images/sections/statement-flare.png"
          alt="Destello de precisión, materia y sensibilidad"
          fill
          className="object-contain filter brightness-105 mix-blend-multiply"
        />
      </div>

      {/* Editorial Statement */}
      <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#b49775] max-w-2xl leading-relaxed tracking-wide font-normal">
        Detrás de cada proyecto hay una historia <br className="hidden sm:inline" />
        de precisión, materia y sensibilidad.
      </h2>
    </section>
  );
}
