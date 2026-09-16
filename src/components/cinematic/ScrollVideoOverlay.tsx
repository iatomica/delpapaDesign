"use client";

import React from "react";
import { ArrowDown, Compass } from "lucide-react";

interface ScrollVideoOverlayProps {
  progress: number;
  reducedMotion?: boolean;
}

// Hermite smoothstep for velvety, non-linear opacity transitions (eliminates abrupt steps)
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

export function ScrollVideoOverlay({ progress, reducedMotion }: ScrollVideoOverlayProps) {
  // Broad, overlapping, stabilized opacity ranges for 650vh travel
  const op1 = getSmoothOpacity(0.00, 0.05, 0.20, 0.28, progress);
  const op2 = getSmoothOpacity(0.26, 0.35, 0.50, 0.58, progress);
  const op3 = getSmoothOpacity(0.56, 0.65, 0.78, 0.85, progress);
  const op4 = getSmoothOpacity(0.83, 0.89, 0.98, 1.00, progress);

  return (
    <div className="absolute inset-0 pointer-events-none z-20 flex flex-col justify-between p-6 md:p-12 lg:p-16 select-none">
      {/* Top subtle status badge */}
      <div className="flex items-center justify-between text-xs tracking-[0.2em] text-[#EDEAE4]/70 uppercase font-sans">
        <div className="flex items-center gap-2">
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#C2A77A] animate-pulse" />
          <span>Cinematic Walkthrough</span>
        </div>
        <div className="hidden sm:flex items-center gap-4 text-[#A6A095]">
          <span>Matera · Brindisi · Valencia</span>
          <span>·</span>
          <span>{Math.round(progress * 100)}%</span>
        </div>
      </div>

      {/* Main Centered / Perfectly Stabilized Editorial Overlays */}
      <div className="relative w-full max-w-5xl mx-auto my-auto flex items-center justify-center min-h-[360px]">
        {/* Scene 1: Brand Introduction */}
        <div
          className="absolute inset-0 flex flex-col items-center justify-center text-center px-4"
          style={{
            opacity: op1,
            pointerEvents: op1 > 0.3 ? "auto" : "none",
            transform: "translate3d(0, 0, 0)",
            willChange: "opacity",
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
          }}
        >
          <p className="editorial-mono text-[#C2A77A] mb-3 tracking-[0.3em]">
            Studio di Architettura & Interior Design
          </p>
          <h1 className="editorial-title text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-[#EDEAE4] mb-4">
            SENSE
          </h1>
          <p className="text-sm md:text-base tracking-[0.25em] text-[#D9D2C3]/80 uppercase font-sans">
            By Stefania Del Papa
          </p>
        </div>

        {/* Scene 2: Brand Manifesto */}
        <div
          className="absolute inset-0 flex flex-col items-center justify-center text-center max-w-3xl mx-auto px-4"
          style={{
            opacity: op2,
            pointerEvents: op2 > 0.3 ? "auto" : "none",
            transform: "translate3d(0, 0, 0)",
            willChange: "opacity",
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
          }}
        >
          <span className="editorial-mono text-[#C2A77A] mb-4 tracking-[0.25em]">
            Filosofía Proyectual
          </span>
          <blockquote className="editorial-title text-3xl sm:text-5xl md:text-6xl text-[#EDEAE4] leading-[1.15] font-light">
            &ldquo;Transformamos el espacio en una experiencia sensorial a medida.&rdquo;
          </blockquote>
          <p className="mt-6 text-xs sm:text-sm text-[#A6A095] max-w-lg tracking-wider font-light leading-relaxed">
            Arquitectura interior de alta gama, lujo silencioso y balance biofílico en hospitalidad y residencias exclusivas.
          </p>
        </div>

        {/* Scene 3: Materiality & Spatial Geometry */}
        <div
          className="absolute inset-0 flex flex-col items-center justify-center text-center max-w-2xl mx-auto px-4"
          style={{
            opacity: op3,
            pointerEvents: op3 > 0.3 ? "auto" : "none",
            transform: "translate3d(0, 0, 0)",
            willChange: "opacity",
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
          }}
        >
          <div className="flex items-center gap-2 mb-4 text-[#C2A77A]">
            <Compass className="w-4 h-4" />
            <span className="editorial-mono tracking-[0.2em]">Nobleza Matérica</span>
          </div>
          <h2 className="editorial-title text-3xl sm:text-4xl md:text-5xl text-[#EDEAE4] mb-4 font-light">
            La pureza de la cal, la roca calcárea y el roble sereno
          </h2>
          <p className="text-xs sm:text-sm text-[#A6A095] tracking-wide max-w-md font-light">
            Diálogo entre arquitectura vernácula mediterránea y rigor técnico contemporáneo.
          </p>
        </div>

        {/* Scene 4: Exploration / Continuation */}
        <div
          className="absolute inset-0 flex flex-col items-center justify-center text-center px-4"
          style={{
            opacity: op4,
            pointerEvents: op4 > 0.3 ? "auto" : "none",
            transform: "translate3d(0, 0, 0)",
            willChange: "opacity",
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
          }}
        >
          <span className="editorial-mono text-[#C2A77A] mb-3 tracking-[0.25em]">
            Portafolio Proyectual
          </span>
          <h2 className="editorial-title text-4xl sm:text-6xl text-[#EDEAE4] mb-6">
            Colección de Espacios
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-3 text-xs tracking-wider text-[#D9D2C3]">
            <span className="px-3.5 py-1.5 rounded-full border border-white/10 bg-black/50 backdrop-blur-md shadow-lg">
              01. Masseria Contemporánea
            </span>
            <span className="px-3.5 py-1.5 rounded-full border border-white/10 bg-black/50 backdrop-blur-md shadow-lg">
              02. Residencia Privada
            </span>
            <span className="px-3.5 py-1.5 rounded-full border border-white/10 bg-black/50 backdrop-blur-md shadow-lg">
              03. Boutique Hotel Aurea
            </span>
            <span className="px-3.5 py-1.5 rounded-full border border-white/10 bg-black/50 backdrop-blur-md shadow-lg">
              04. Showroom Corporativo
            </span>
          </div>
        </div>
      </div>

      {/* Bottom status & scroll indicator */}
      <div className="flex items-end justify-between text-xs text-[#A6A095] tracking-widest font-sans uppercase">
        <div className="flex items-center gap-3">
          <div className="w-20 sm:w-32 h-[2px] bg-white/10 overflow-hidden rounded-full">
            <div
              className="h-full bg-[#C2A77A] transition-transform duration-100 ease-out origin-left"
              style={{ transform: `scaleX(${Math.max(0.04, progress)})` }}
            />
          </div>
          <span className="text-[10px] text-[#C2A77A] font-mono">
            {progress < 0.98 ? "SCROLL DOWN" : "CONTINUE EXPLORING"}
          </span>
        </div>

        <div className="flex items-center gap-2 text-white/50 text-[10px]">
          <span>SCROLL TO EXPLORE</span>
          <ArrowDown className="w-3.5 h-3.5 animate-bounce text-[#C2A77A]" />
        </div>
      </div>
    </div>
  );
}
