import React from 'react';
import { BrandLogo } from './BrandLogo.js';
import { useAuth } from '../../context/AuthContext.js';

export const Footer: React.FC = () => {
  const { quickSwitchRole } = useAuth();

  return (
    <footer className="bg-obsidian-900 text-travertine-100 hairline-t border-white/10 pt-16 pb-12 px-6 sm:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
        {/* Brand & Statement */}
        <div className="md:col-span-5 flex flex-col justify-between">
          <div>
            <BrandLogo light size="lg" />
            <p className="mt-6 text-sm text-travertine-300/70 font-light leading-relaxed max-w-sm">
              "Transformamos el espacio en una experiencia sensorial a medida". Interiorismo de alta gama, hospitalidad y visualizaciones 3D con documentación técnica rigurosa.
            </p>
          </div>
          <div className="mt-6 flex flex-col gap-2 text-xs text-travertine-300">
            <a href="tel:+34603502985" className="hover:text-white transition-colors flex items-center gap-2">
              <span className="text-bronze-300 font-mono">TEL:</span> (+34) 603 502 985
            </a>
            <a href="mailto:sense.studiodesign@gmail.com" className="hover:text-white transition-colors flex items-center gap-2">
              <span className="text-bronze-300 font-mono">EMAIL:</span> sense.studiodesign@gmail.com
            </a>
            <div className="flex items-center gap-4 mt-2">
              <a href="https://www.linkedin.com/in/stefania-del-papa-interior-designer" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors underline decoration-bronze-500/50">LinkedIn</a>
              <a href="https://www.behance.net/stefaniadelpapa-sens" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors underline decoration-bronze-500/50">Behance</a>
              <a href="https://wa.me/34603502985" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors underline decoration-bronze-500/50">WhatsApp</a>
            </div>
          </div>
          <div className="mt-6 text-xs text-travertine-400/50 font-mono tracking-wider">
            VALENCIA (ESPAÑA) • BUENOS AIRES • PUGLIA & MATERA (ITALIA)
          </div>
        </div>

        {/* Studio Sections */}
        <div className="md:col-span-3 flex flex-col gap-4">
          <span className="text-xs uppercase tracking-architectural text-bronze-300 font-medium">Estudio</span>
          <ul className="flex flex-col gap-2.5 text-xs text-travertine-300/80">
            <li><a href="#filosofia" className="hover:text-white transition-colors">Manifiesto & Filosofía</a></li>
            <li><a href="#obras" className="hover:text-white transition-colors">Obras de Hospitalidad & Residencial</a></li>
            <li><a href="#consultoria" className="hover:text-white transition-colors">Metodología de Consultoría & BOQs</a></li>
            <li><a href="#materialidad" className="hover:text-white transition-colors">Laboratorio de Materialidad</a></li>
          </ul>
        </div>

        {/* Fast Access Roles */}
        <div className="md:col-span-4 flex flex-col gap-4">
          <span className="text-xs uppercase tracking-architectural text-bronze-300 font-medium">Acceso a Portales de Ecosistema</span>
          <div className="flex flex-col gap-2">
            <button
              onClick={() => quickSwitchRole('admin')}
              className="text-left text-xs p-2.5 bg-white/5 hover:bg-white/10 border border-white/10 transition-colors flex justify-between items-center text-travertine-200 cursor-pointer"
            >
              <span>1. Panel de Dirección (Admin)</span>
              <span className="text-[10px] text-bronze-300 font-mono">Stefania Del Papa →</span>
            </button>
            <button
              onClick={() => quickSwitchRole('designer')}
              className="text-left text-xs p-2.5 bg-white/5 hover:bg-white/10 border border-white/10 transition-colors flex justify-between items-center text-travertine-200 cursor-pointer"
            >
              <span>2. Estudio de Renders (Diseñadora)</span>
              <span className="text-[10px] text-bronze-300 font-mono">Elena Varela →</span>
            </button>
            <button
              onClick={() => quickSwitchRole('client')}
              className="text-left text-xs p-2.5 bg-white/5 hover:bg-white/10 border border-white/10 transition-colors flex justify-between items-center text-travertine-200 cursor-pointer"
            >
              <span>3. Portal Privado de Obra (Cliente)</span>
              <span className="text-[10px] text-bronze-300 font-mono">Masseria Contemporánea →</span>
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-8 hairline-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-travertine-400/50">
        <p>© {new Date().getFullYear()} Stefania Del Papa • Sense Studio. Todos los derechos reservados.</p>
        <p className="mt-2 sm:mt-0 font-mono text-[11px]">Arquitectura de Interiores & Consultoría Espacial • Valencia / Buenos Aires / Italia</p>
      </div>
    </footer>
  );
};
