import React from 'react';
import { CompassTool, Sparkle, PaintBrushBroad } from '@phosphor-icons/react';
import { Button } from '../ui/Button.js';

interface ServicesMatrixProps {
  onOpenConsultation: () => void;
}

export const ServicesMatrix: React.FC<ServicesMatrixProps> = ({ onOpenConsultation }) => {
  const services = [
    {
      id: '01',
      icon: <CompassTool size={28} className="text-terracotta-600" />,
      title: 'Interiorismo Residencial & Hospitalidad',
      badge: 'Dirección Integral',
      desc: 'Desarrollo proyectual integral para residencias de lujo, hoteles boutique y masserias en España e Italia. Presencial o consultoría técnica remota.',
      deliverables: ['Distribución espacial y zonificación de flujos', 'Plantas ejecutivas y documentación de obra', 'Coordinación con ingeniería y licencias', 'Dirección estética y supervisión in situ'],
    },
    {
      id: '02',
      icon: <PaintBrushBroad size={28} className="text-terracotta-600" />,
      title: 'Carpintería Bespoke, Cocinas & BOQs',
      badge: 'Detalle Constructivo',
      desc: 'Diseño técnico de carpinterías a medida, cocinas de alta complejidad, elaboración de mediciones cuantitativas rigurosas (BOQs) y prescripción de acabados nobles.',
      deliverables: ['Planos constructivos 1:10 / 1:20', 'Despiece y herrajes bespoke millwork', 'Mediciones cuantitativas y presupuestos', 'Homologación de proveedores artesanales'],
    },
    {
      id: '03',
      icon: <Sparkle size={28} className="text-terracotta-600" />,
      title: 'Visualización 3D & Simulación Lumínica',
      badge: 'Fotorrealismo 3D',
      desc: 'Modelado 3D arquitectónico fotorrealista de alta fidelidad y diseño de iluminación rasante para evaluar luz, materialidad y proporciones antes de construir.',
      deliverables: ['Renders fotorrealistas de alta definición', 'Simulación de luz rasante cálida a 2700K', 'Moodboards táctiles físicos y digitales', 'Catálogo de prescripción de mobiliario'],
    },
  ];

  return (
    <section id="consultoria" className="py-24 px-6 sm:px-12 bg-travertine-100/70 hairline-t hairline-b">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-xs uppercase tracking-architectural text-bronze-500 font-semibold block mb-2 font-mono">
              // 03. CONSULTORÍA & SERVICIOS
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl text-obsidian-900 font-normal">
              Modalidades de Colaboración
            </h2>
          </div>
          <Button variant="bronze" size="md" onClick={onOpenConsultation}>
            Solicitar Diagnóstico Espacial
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map(s => (
            <div
              key={s.id}
              className="bg-white p-8 border border-obsidian-900/10 flex flex-col justify-between hover:border-obsidian-900/30 transition-all duration-200"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3 bg-travertine-100 border border-obsidian-900/5">
                    {s.icon}
                  </div>
                  <span className="text-[10px] uppercase font-mono tracking-architectural bg-travertine-200 px-2 py-1 text-obsidian-900">
                    {s.badge}
                  </span>
                </div>

                <span className="text-xs text-obsidian-900/40 font-mono block mb-1">SERVICIO {s.id}</span>
                <h3 className="font-serif text-2xl text-obsidian-900 font-normal mb-3">
                  {s.title}
                </h3>
                <p className="text-xs sm:text-sm text-obsidian-900/70 font-light leading-relaxed mb-6">
                  {s.desc}
                </p>
              </div>

              <div className="hairline-t pt-4">
                <span className="text-[10px] uppercase tracking-architectural text-obsidian-900/50 block mb-2 font-mono">
                  Entregables Principales:
                </span>
                <ul className="flex flex-col gap-1.5 text-xs text-obsidian-900/80 font-light">
                  {s.deliverables.map((item, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-bronze-500 rounded-full" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
