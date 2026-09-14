import React from 'react';
import { Button } from '../ui/Button.js';
import { ArrowDown, Sparkle } from '@phosphor-icons/react';

interface HeroSectionProps {
  onOpenConsultation: () => void;
  onOpenStudio: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenConsultation,
  onOpenStudio,
}) => {
  return (
    <section className="relative min-h-[calc(100dvh-72px)] flex flex-col justify-between pt-8 pb-12 px-6 sm:px-12 max-w-7xl mx-auto">
      {/* Top Tagline */}
      <div className="flex items-center justify-between">
        <span className="text-xs uppercase tracking-widest text-obsidian-900/60 font-mono">
          Estudio de Arquitectura de Interiores // 2026
        </span>
        <span className="hidden sm:inline-block text-xs uppercase tracking-architectural text-bronze-500 font-medium">
          Buenos Aires • Punta del Este
        </span>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center my-auto">
        {/* Left Column: Focused Headline (<2 lines) and Subtext (<20 words) */}
        <div className="lg:col-span-6 flex flex-col items-start">
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-obsidian-900 leading-[1.08] tracking-tight font-normal">
            Espacios donde la materia y el silencio cobran vida.
          </h1>

          <p className="mt-6 text-base text-obsidian-900/70 font-light leading-relaxed max-w-[48ch]">
            Diseño de interiores de alta gama y consultoría espacial con visualizaciones 3D fotorrealistas de máxima precisión arquitectónica.
          </p>

          {/* Action CTAs */}
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Button
              size="lg"
              variant="primary"
              onClick={onOpenConsultation}
            >
              Iniciar Proyecto
            </Button>
            <Button
              size="lg"
              variant="outline-dark"
              onClick={onOpenStudio}
              icon={<Sparkle size={18} className="text-bronze-500" />}
            >
              Estudio de Renders 3D
            </Button>
          </div>
        </div>

        {/* Right Column: Hero Architectural Photograph */}
        <div className="lg:col-span-6 relative">
          <div className="relative aspect-[4/3] w-full overflow-hidden shadow-2xl bg-travertine-200">
            <img
              src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=85"
              alt="Penthouse Alvear Salón Principal"
              className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700 ease-out"
            />
            {/* Subtle photographic caption badge */}
            <div className="absolute bottom-4 left-4 bg-obsidian-900/85 backdrop-blur-sm text-travertine-50 px-3.5 py-2 text-xs">
              <span className="font-serif block text-sm">Penthouse Alvear</span>
              <span className="text-[10px] text-travertine-300/80 tracking-architectural uppercase">
                Mármol Travertino & Roble Ahumado
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar with Scroll Indicator */}
      <div className="hairline-t pt-6 flex items-center justify-between text-xs text-obsidian-900/60 font-mono">
        <a href="#filosofia" className="flex items-center gap-2 hover:text-obsidian-900 transition-colors uppercase tracking-architectural text-[11px]">
          <ArrowDown size={14} className="animate-bounce" />
          <span>Explorar Manifiesto Espacial</span>
        </a>
        <div className="flex items-center gap-6">
          <span>01 / 04</span>
          <span className="hidden sm:inline">RESIDENCIAL • HOSPITALITY • CONSULTORÍA</span>
        </div>
      </div>
    </section>
  );
};
