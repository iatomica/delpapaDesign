import React from 'react';

export const ArchitecturalMaterialStrip: React.FC = () => {
  const materials = [
    {
      name: 'Travertino Romano Navona',
      category: 'Piedra Natural',
      origin: 'Tívoli, Italia',
      finish: 'Apomazado continuo sin poro visible',
      img: 'https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=600&q=80',
    },
    {
      name: 'Roble Europeo Ahumado',
      category: 'Ebanistería',
      origin: 'Bosques de Baviera',
      finish: 'Aceite vegetal mate 5% de poro abierto',
      img: 'https://images.unsplash.com/photo-1546484396-fb3fc6f95f98?auto=format&fit=crop&w=600&q=80',
    },
    {
      name: 'Bronce Envejecido a la Cera',
      category: 'Metales Nobles',
      origin: 'Artesanía Local Delpapa',
      finish: 'Pátina manual reactiva de tono tabaco',
      img: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=600&q=80',
    },
    {
      name: 'Lino Lavado Pesado 580g',
      category: 'Textil Puro',
      origin: 'Flandes, Bélgica',
      finish: 'Textura orgánica preencogida al agua',
      img: 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=600&q=80',
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
