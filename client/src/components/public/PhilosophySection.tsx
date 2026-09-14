import React from 'react';

export const PhilosophySection: React.FC = () => {
  return (
    <section id="filosofia" className="py-24 px-6 sm:px-12 bg-travertine-100/50 hairline-t hairline-b">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Section Indicator */}
          <div className="lg:col-span-4">
            <span className="text-xs uppercase tracking-architectural text-terracotta-600 font-semibold block mb-3 font-mono">
              // 01. FILOSOFÍA & METODOLOGÍA PROYECTUAL
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-obsidian-900 leading-tight font-normal">
              Traducir identidades matéricas en experiencias sensoriales habitables.
            </h2>
          </div>

          {/* Editorial manifesto */}
          <div className="lg:col-span-8 flex flex-col gap-8 text-obsidian-900/80 leading-relaxed text-base font-light">
            <p className="text-lg sm:text-xl text-obsidian-900 font-normal leading-relaxed">
              En Sense Studio, fundado y dirigido por Stefania Del Papa, concebimos cada espacio como una propuesta a medida donde convergen la precisión arquitectónica, la nobleza de los materiales naturales y la atención minuciosa al diseño de mobiliario y carpinterías bespoke.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-6 hairline-t">
              <div>
                <span className="font-mono text-xs text-terracotta-600 block mb-2">01 // MATERIA & IDENTIDAD</span>
                <p className="text-xs text-obsidian-900/70 leading-relaxed">
                  Toba calcárea de Matera, estucos de cal pugliese, roble de poro abierto y lino belga, creando atmósferas atemporales con profundo impacto vivencial.
                </p>
              </div>

              <div>
                <span className="font-mono text-xs text-terracotta-600 block mb-2">02 // BIENESTAR BIOFÍLICO</span>
                <p className="text-xs text-obsidian-900/70 leading-relaxed">
                  Lujo silencioso que equilibra sombra vegetal, pérgolas de cañizo, solados continuos en travertino y luz rasante cálida a 2700K.
                </p>
              </div>

              <div>
                <span className="font-mono text-xs text-terracotta-600 block mb-2">03 // RIGOR EJECUTIVO (BOQs)</span>
                <p className="text-xs text-obsidian-900/70 leading-relaxed">
                  Documentación técnica minuciosa, mediciones cuantitativas precisas, cocinas bespoke y modelado 3D fotorrealista para una ejecución impecable.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
