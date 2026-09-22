import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ScrollVideoSection } from "@/components/cinematic/ScrollVideoSection";
import { HeroStatement } from "@/components/sections/HeroStatement";
import { AboutStefania } from "@/components/sections/AboutStefania";
import { ProjectsCarousel } from "@/components/sections/ProjectsCarousel";
import { HowWeWorkSection } from "@/components/sections/HowWeWorkSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { SectionAnimator } from "@/components/ui/EntranceAnimation";

export default function Home() {
  return (
    <main className="relative w-full min-h-screen bg-[#f5f2ed] text-[#9e918a]">
      {/* Floating Navigation with Language Switcher */}
      <Navbar />

      {/* Hero: Scroll-Scrubbed Cinematic Flight into Architectural Space */}
      <ScrollVideoSection
        desktopSrc="/media/video/sense-desktop.mp4"
        mobileSrc="/media/video/sense-mobile.mp4"
        poster="/media/posters/sense-poster.webp"
        scrollLength="650vh"
        objectPosition="center center"
      />

      {/* Central Radiant Flare & Statement */}
      <HeroStatement />

      {/* ✦ ESTUDIO. — Stefania Del Papa Profile & Architecture / Sensory Comfort */}
      <AboutStefania />

      {/* ✦ PROYECTOS. — Interactive Destudio-Style Carousel with Rounded Borders */}
      <ProjectsCarousel />

      {/* ✦ ¿CÒMO TRABAJAMOS? — 4 Alternating Phases with Circular Gold Highlights */}
      <HowWeWorkSection />

      {/* ✦ CONTACTANOS. — Consultation Inquiries & Studio Coordinates */}
      <ContactSection />

      {/* Editorial Footer with Social Links & Language Switcher */}
      <Footer />

      {/* Subtle Entrance Animation Observer */}
      <SectionAnimator />
    </main>
  );
}
