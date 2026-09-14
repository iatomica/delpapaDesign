import React from 'react';

export const ArchitecturalMaterialStrip: React.FC = () => {
  const materials = [
    {
      name: 'Toba Calcárea & Travertino',
      category: 'Piedra Natural Vernácula',
      origin: 'Matera & Puglia, Italia',
      finish: 'Corte artesanal, apomazado continuo y textura mineral viva',
      img: '/assets/portfolio/project-03-hotel-aurea/p22_img02_x401_397x402.webp',
    },
    {
      name: 'Roble Europeo de Poro Abierto',
      category: 'Ebanistería Bespoke',
      origin: 'Atelier de Carpintería Sense Studio',
      finish: 'Aceite vegetal mate 5%, veta preservada sin brillos sintéticos',
      img: '/assets/portfolio/project-02-residencia/p14_img05_x401_397x402.webp',
    },
    {
      name: 'Vidrio Estriado Acanalado',
      category: 'Cerramientos & Filtros Solares',
      origin: 'Vetreria di Puglia',
      finish: 'Divisorias con arcos sutiles y perfilería en acero negro mate',
      img: '/assets/portfolio/project-02-residencia/p14_img08_x418_667x405.webp',
    },
    {
      name: 'Terciopelo Verde Bosque & Lino',
      category: 'Textil Puro Sensorial',
      origin: 'Flandes / Tessitura Italiana',
      finish: 'Tacto envolvente, tapizados curvos orgánicos y cortinados etéreos',
      img: '/assets/portfolio/project-02-residencia/p14_img09_x423_433x533.webp',
    },
  ];

  return (
    <section id="materialidad" className="py-24 px-6 sm:px-12 max-w-7xl mx-auto">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 gap-6">
        <div>
          <span className="text-xs uppercase tracking-architectural text-bronze-500 font-semibold block mb-2 font-mono">
            // 04. LABORATORIO TÁCTIL
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl text-obsidian-900 font-normal">
            La Paleta de Materiales
          </h2>
        </div>
        <p className="text-xs sm:text-sm text-obsidian-900/60 font-mono uppercase tracking-architectural max-w-xs">
          Muestrario físico disponible para cada comitente en nuestro atelier
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {materials.map((m, i) => (
          <div
            key={i}
            className="group bg-white border border-obsidian-900/10 overflow-hidden flex flex-col hover:border-obsidian-900/40 transition-all duration-300"
          >
            <div className="aspect-[4/3] overflow-hidden bg-travertine-200 relative">
              <img
                src={m.img}
                alt={m.name}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
              />
              <span className="absolute top-3 left-3 bg-obsidian-900/80 backdrop-blur-sm text-white text-[9px] uppercase font-mono px-2 py-0.5">
                {m.category}
              </span>
            </div>

            <div className="p-5 flex flex-col justify-between flex-1">
              <div>
                <span className="text-[10px] text-obsidian-900/50 uppercase font-mono block mb-1">
                  Origen: {m.origin}
                </span>
                <h3 className="font-serif text-lg text-obsidian-900 font-normal group-hover:text-bronze-600 transition-colors">
                  {m.name}
                </h3>
                <p className="text-xs text-obsidian-900/70 font-light mt-2 leading-relaxed">
                  {m.finish}
                </p>
              </div>

              <div className="mt-4 pt-3 hairline-t text-[10px] text-bronze-500 uppercase tracking-widest font-mono">
                Muestra Calibrada #0{i + 1}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
