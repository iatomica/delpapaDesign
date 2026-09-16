import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ScrollVideoSection } from "@/components/cinematic/ScrollVideoSection";
import { ManifestoSection } from "@/components/sections/ManifestoSection";
import { ProjectShowcase } from "@/components/sections/ProjectShowcase";
import { MaterialityGallery } from "@/components/sections/MaterialityGallery";
import { TechnicalPlansSection } from "@/components/sections/TechnicalPlansSection";
import { AboutStefania } from "@/components/sections/AboutStefania";
import { ContactSection } from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <main className="relative w-full min-h-screen bg-[#0D0C0B] text-[#EDEAE4]">
      {/* Floating Navigation */}
      <Navbar />

      {/* Hero: Scroll-Scrubbed Cinematic Flight into Architectural Space */}
      <ScrollVideoSection
        desktopSrc="/media/video/sense-desktop.mp4"
        mobileSrc="/media/video/sense-mobile.mp4"
        poster="/media/posters/sense-poster.webp"
        scrollLength="350vh"
        objectPosition="center center"
      />

      {/* Brand Manifesto & Spatial Philosophy */}
      <ManifestoSection />

      {/* Featured Architectural Projects */}
      <ProjectShowcase />

      {/* Materiality Study & Moodboard Research */}
      <MaterialityGallery />

      {/* Technical Rigor & Architectural Plans */}
      <TechnicalPlansSection />

      {/* Stefania Del Papa — Creative Director Profile */}
      <AboutStefania />

      {/* Inquiries & Studio Coordinates */}
      <ContactSection />

      {/* Architectural Quiet Luxury Footer */}
      <Footer />
    </main>
  );
}
