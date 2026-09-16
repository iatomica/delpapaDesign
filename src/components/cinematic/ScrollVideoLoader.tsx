"use client";

import React from "react";

interface ScrollVideoLoaderProps {
  isReady: boolean;
}

export function ScrollVideoLoader({ isReady }: ScrollVideoLoaderProps) {
  if (isReady) return null;

  return (
    <div className="absolute inset-0 z-30 flex flex-col items-center justify-center bg-[#0D0C0B]/60 backdrop-blur-md transition-opacity duration-700 pointer-events-none">
      <div className="relative w-12 h-12 mb-4">
        <div className="absolute inset-0 border border-white/10 rounded-full" />
        <div className="absolute inset-0 border-t border-[#C2A77A] rounded-full animate-spin" />
      </div>
      <p className="editorial-mono text-[10px] tracking-[0.25em] text-[#C2A77A]">
        Cargando Experiencia Espacial...
      </p>
    </div>
  );
}
