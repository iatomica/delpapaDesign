"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { useScrollVideo } from "@/hooks/useScrollVideo";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { ScrollVideoOverlay } from "./ScrollVideoOverlay";
import { ScrollVideoLoader } from "./ScrollVideoLoader";

export interface ScrollVideoSectionProps {
  desktopSrc?: string;
  mobileSrc?: string;
  poster: string;
  scrollLength?: string; // e.g. "350vh"
  objectPosition?: string;
  className?: string;
}

export function ScrollVideoSection({
  desktopSrc = "/media/video/sense-desktop.mp4",
  mobileSrc = "/media/video/sense-mobile.mp4",
  poster = "/media/posters/sense-poster.webp",
  scrollLength = "350vh",
  objectPosition = "center center",
  className = ""
}: ScrollVideoSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const reducedMotion = useReducedMotion();

  // Pick device video source based on screen size
  const [activeSrc, setActiveSrc] = useState(desktopSrc);

  useEffect(() => {
    const isSmall = window.matchMedia("(max-width: 768px)").matches;
    if (isSmall && mobileSrc) {
      setActiveSrc(mobileSrc);
    } else {
      setActiveSrc(desktopSrc);
    }
  }, [desktopSrc, mobileSrc]);

  const { progress, isReady, hasFirstFrame, isPinned } = useScrollVideo({
    containerRef,
    videoRef,
    scrollLength,
    reducedMotion
  });

  return (
    <div
      ref={containerRef}
      className={`relative w-full h-screen overflow-hidden bg-[#0D0C0B] ${className}`}
      id="cinematic-experience"
    >
      {/* 1. High-fidelity Poster Frame (Stays visible until video has painted first frame) */}
      <div
        className={`absolute inset-0 z-10 transition-opacity duration-700 pointer-events-none ${
          hasFirstFrame && !reducedMotion ? "opacity-0" : "opacity-100"
        }`}
      >
        <Image
          src={poster}
          alt="SENSE Architecture Cinematic View"
          fill
          priority
          sizes="100vw"
          className="object-cover"
          style={{ objectPosition }}
        />
        {/* Cinematic subtle vignette and gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D0C0B] via-transparent to-[#0D0C0B]/60" />
      </div>

      {/* 2. Scroll-Scrubbed Video Element (Muted, PlaysInline, Controlled by GSAP) */}
      {!reducedMotion && (
        <video
          ref={videoRef}
          src={activeSrc}
          muted
          playsInline
          preload="auto"
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 z-0 ${
            hasFirstFrame ? "opacity-100" : "opacity-0"
          }`}
          style={{ objectPosition }}
        />
      )}

      {/* Ambient Darkened Overlay for Text Contrast */}
      <div className="absolute inset-0 z-10 bg-black/35 pointer-events-none" />

      {/* 3. Typographic Storytelling Overlays */}
      <ScrollVideoOverlay progress={progress} reducedMotion={reducedMotion} />

      {/* 4. Loader indicator during initial warm-up */}
      <ScrollVideoLoader isReady={isReady || reducedMotion} />

      {/* 5. Minimal Pin status indicator for accessibility */}
      <span className="sr-only">
        {isPinned ? "Cinematic video section is pinned." : "Cinematic section unpinned."}
      </span>
    </div>
  );
}
