import React from 'react';

export const PhilosophySection: React.FC = () => {
  return (
    <section id="filosofia" className="py-24 px-6 sm:px-12 bg-travertine-100/50 hairline-t hairline-b">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Section Indicator */}
          <div className="lg:col-span-4">
            <span className="text-xs uppercase tracking-architectural text-bronze-500 font-semibold block mb-3 font-mono">
              // 01. FILOSOFÍA & METODOLOGÍA
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-obsidian-900 leading-tight font-normal">
              No decoramos superficies; esculpimos el vacío habitable.
            </h2>
          </div>

          {/* Editorial manifesto */}
          <div className="lg:col-span-8 flex flex-col gap-8 text-obsidian-900/80 leading-relaxed text-base font-light">
            <p className="text-lg sm:text-xl text-obsidian-900 font-normal leading-relaxed">
              En Delpapa Design concebimos el interiorismo como una extensión orgánica de la arquitectura. Cada textura, desde la aspereza noble del travertino romano hasta la calidez táctil del roble aceitado, responde a una cadencia de luz y silencio.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-6 hairline-t">
              <div>
                <span className="font-mono text-xs text-bronze-500 block mb-2">01 // MATERIA HONESTA</span>
                <p className="text-xs text-obsidian-900/70 leading-relaxed">
                  Piedras naturales apomazadas sin brillo sintético, maderas con veta viva y metales que envejecen con dignidad.
                </p>
              </div>

              <div>
                <span className="font-mono text-xs text-bronze-500 block mb-2">02 // LUZ CENITAL & 2700K</span>
                <p className="text-xs text-obsidian-900/70 leading-relaxed">
                  Tratamiento de la iluminación indirecta con luminarias ocultas que revelan volúmenes sin deslumbrar jamás.
                </p>
              </div>

              <div>
                <span className="font-mono text-xs text-bronze-500 block mb-2">03 // VISUALIZACIÓN FOTORREALISTA</span>
                <p className="text-xs text-obsidian-900/70 leading-relaxed">
                  Modelado y renderizado arquitectónico de alta fidelidad para evaluar luz, proporciones y texturas antes de la obra.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
