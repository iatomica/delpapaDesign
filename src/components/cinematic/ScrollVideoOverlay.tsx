"use client";

import React from "react";
import Image from "next/image";
import { ArrowDown } from "lucide-react";

interface ScrollVideoOverlayProps {
  progress: number;
  reducedMotion?: boolean;
}

function smoothstep(min: number, max: number, val: number): number {
  const x = Math.max(0, Math.min(1, (val - min) / (max - min)));
  return x * x * (3 - 2 * x);
}

function getSmoothOpacity(start: number, peakIn: number, peakOut: number, end: number, p: number): number {
  if (p <= start || p >= end) return 0;
  if (p >= peakIn && p <= peakOut) return 1;
  if (p < peakIn) {
    return smoothstep(start, peakIn, p);
  }
  return 1 - smoothstep(peakOut, end, p);
}

export function ScrollVideoOverlay({ progress }: ScrollVideoOverlayProps) {
  // Broad, stabilized opacity ranges
  const op1 = getSmoothOpacity(0.00, 0.05, 0.28, 0.38, progress);
  const op2 = getSmoothOpacity(0.36, 0.48, 0.68, 0.78, progress);
  const op3 = getSmoothOpacity(0.76, 0.85, 0.98, 1.00, progress);

  return (
    <div className="absolute inset-0 pointer-events-none z-20 flex flex-col justify-between p-6 md:p-12 lg:p-16 select-none">
      {/* Top status indicator */}
      <div className="flex items-center justify-between text-xs tracking-[0.2em] text-[#EDEAE4]/70 uppercase font-sans">
        <div className="flex items-center gap-2">
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#b49775] animate-pulse" />
          <span className="tracking-widest text-[10px] text-[#b49775]">Estudio de Diseño Interior</span>
        </div>
        <div className="hidden sm:flex items-center gap-4 text-[#EDEAE4]/80 text-[10px]">
          <span>Valencia · Brindisi · Buenos Aires</span>
          <span>·</span>
          <span>{Math.round(progress * 100)}%</span>
        </div>
      </div>

      {/* Main Centered Overlays */}
      <div className="relative w-full max-w-5xl mx-auto my-auto flex items-center justify-center min-h-[360px]">
        {/* Scene 1: Brand Introduction with Official Logo */}
        <div
          className="absolute inset-0 flex flex-col items-center justify-center text-center px-4"
          style={{
            opacity: op1,
            pointerEvents: op1 > 0.3 ? "auto" : "none",
            transform: "translate3d(0, 0, 0)",
            willChange: "opacity",
          }}
        >
          <p className="font-serif text-[#b49775] mb-4 text-xs md:text-sm tracking-[0.3em] uppercase">
            Estudio de diseño interior
          </p>
          <div className="relative w-[300px] sm:w-[460px] md:w-[580px] h-[120px] sm:h-[160px] md:h-[200px] mb-2 drop-shadow-2xl">
            <Image
              src="/media/images/brand/logo.png"
              alt="SENSE by Stefania Del Papa"
              fill
              priority
              className="object-contain filter drop-shadow-[0_4px_24px_rgba(0,0,0,0.5)]"
            />
          </div>
        </div>

        {/* Scene 2: Brand Manifesto */}
        <div
          className="absolute inset-0 flex flex-col items-center justify-center text-center max-w-3xl mx-auto px-4"
          style={{
            opacity: op2,
            pointerEvents: op2 > 0.3 ? "auto" : "none",
            transform: "translate3d(0, 0, 0)",
            willChange: "opacity",
          }}
        >
          <span className="font-serif text-[#b49775] mb-5 tracking-[0.25em] text-xs uppercase">
            Filosofía Proyectual
          </span>
          <blockquote className="font-serif text-2xl sm:text-4xl md:text-5xl text-[#f5f2ed] leading-[1.2] font-normal drop-shadow-lg">
            &ldquo;Transformamos el espacio en una experiencia sensorial a medida.&rdquo;
          </blockquote>
          <p className="mt-6 text-xs sm:text-sm text-[#d9d2c3] max-w-lg tracking-wider font-light leading-relaxed drop-shadow">
            Residencias privadas de alto nivel y proyectos de hospitalidad en Valencia e Italia.
          </p>
        </div>

        {/* Scene 3: Projects Preview */}
        <div
          className="absolute inset-0 flex flex-col items-center justify-center text-center px-4"
          style={{
            opacity: op3,
            pointerEvents: op3 > 0.3 ? "auto" : "none",
            transform: "translate3d(0, 0, 0)",
            willChange: "opacity",
          }}
        >
          <span className="font-serif text-[#b49775] mb-3 tracking-[0.25em] text-xs uppercase">
            Portafolio
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl text-[#f5f2ed] mb-6 font-normal drop-shadow-lg">
            Colección de Espacios
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-3 text-xs tracking-wider text-[#f5f2ed]">
            <span className="px-4 py-2 rounded-full border border-white/20 bg-black/40 backdrop-blur-md shadow-lg">
              Residencia Privada
            </span>
            <span className="px-4 py-2 rounded-full border border-white/20 bg-black/40 backdrop-blur-md shadow-lg">
              Hospitality & Resort
            </span>
            <span className="px-4 py-2 rounded-full border border-white/20 bg-black/40 backdrop-blur-md shadow-lg">
              Boutique Hotel Aurea
            </span>
          </div>
        </div>
      </div>

      {/* Bottom scroll cue */}
      <div className="flex items-end justify-between text-xs text-[#EDEAE4]/80 tracking-widest font-sans uppercase">
        <div className="flex items-center gap-3">
          <div className="w-20 sm:w-32 h-[2px] bg-white/20 overflow-hidden rounded-full">
            <div
              className="h-full bg-[#b49775] transition-transform duration-100 ease-out origin-left"
              style={{ transform: `scaleX(${Math.max(0.04, progress)})` }}
            />
          </div>
          <span className="text-[10px] text-[#b49775] font-sans">
            {progress < 0.98 ? "SCROLL DOWN" : "DESCUBRIR ESTUDIO"}
          </span>
        </div>

        <div className="flex items-center gap-2 text-[#f5f2ed]/80 text-[10px]">
          <span>SCROLL</span>
          <ArrowDown className="w-3.5 h-3.5 animate-bounce text-[#b49775]" />
        </div>
      </div>
    </div>
  );
}
