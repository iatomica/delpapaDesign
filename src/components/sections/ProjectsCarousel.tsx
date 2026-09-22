"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Sparkle } from "@/components/ui/Sparkle";

export interface CarouselProjectItem {
  id: string;
  title: string;
  category: string;
  location: string;
  image: string;
  href: string;
}

const CAROUSEL_PROJECTS: CarouselProjectItem[] = [
  {
    id: "residencia-privada",
    title: "Residencia Privada",
    category: "Interiorismo & Mobiliario a Medida",
    location: "Brindisi, Italia",
    image: "/media/images/projects/residencia-kitchen.webp",
    href: "/proyectos/residencia-privada",
  },
  {
    id: "wellness-suite",
    title: "Wellness & Spa Privado",
    category: "Residencial de Lujo",
    location: "Brindisi, Italia",
    image: "/media/images/projects/residencia-bath.webp",
    href: "/proyectos/residencia-privada",
  },
  {
    id: "hospitality-resort",
    title: "Hospitality & Resort",
    category: "Masseria Contemporánea",
    location: "Brindisi, Italia",
    image: "/media/images/projects/masseria-pool.webp",
    href: "/proyectos/masseria-contemporanea",
  },
  {
    id: "boutique-hotel-aurea",
    title: "Hotel Aurea",
    category: "Boutique Hotel & Identidad Vernácula",
    location: "Matera, Italia",
    image: "/media/images/projects/aurea-hero.webp",
    href: "/proyectos/boutique-hotel-aurea",
  },
];

interface ProjectsCarouselProps {
  title?: string;
  id?: string;
}

export function ProjectsCarousel({ title = "PROYECTOS.", id = "proyectos" }: ProjectsCarouselProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const offset = direction === "left" ? -380 : 380;
      scrollContainerRef.current.scrollBy({ left: offset, behavior: "smooth" });
    }
  };

  return (
    <section id={id} className="relative w-full py-16 md:py-24 bg-[#f5f2ed]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header with Title & Arrow Controls */}
        <div className="flex items-center justify-between mb-8 md:mb-12">
          <div className="flex items-center gap-2">
            <Sparkle size={18} />
            <h2 className="font-serif text-2xl sm:text-3xl text-[#b49775] tracking-wider uppercase font-normal">
              {title}
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => scroll("left")}
              className="p-2.5 rounded-full border border-[#b49775]/40 text-[#b49775] hover:bg-[#b49775] hover:text-white transition-all shadow-sm active:scale-95"
              aria-label="Proyecto anterior"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="p-2.5 rounded-full border border-[#b49775]/40 text-[#b49775] hover:bg-[#b49775] hover:text-white transition-all shadow-sm active:scale-95"
              aria-label="Siguiente proyecto"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Horizontal Carousel Track */}
        <div
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto pb-6 scrollbar-none snap-x snap-mandatory scroll-smooth"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {CAROUSEL_PROJECTS.map((proj) => (
            <Link
              key={proj.id}
              href={proj.href}
              className="group flex-shrink-0 w-[280px] sm:w-[320px] md:w-[340px] snap-start"
            >
              {/* Card Container with Rounded Borders */}
              <div className="relative h-[440px] sm:h-[500px] w-full rounded-[28px] overflow-hidden shadow-sm transition-all duration-500 group-hover:shadow-xl group-hover:-translate-y-1">
                {/* Background Image */}
                <Image
                  src={proj.image}
                  alt={proj.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* White Translucent Hover Overlay */}
                <div className="absolute inset-0 bg-white/75 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex flex-col items-center justify-center p-6 text-center">
                  <span className="font-serif text-xs uppercase tracking-[0.25em] text-[#7a6e67] mb-2">
                    {proj.category}
                  </span>
                  <h3 className="font-serif text-xl sm:text-2xl text-[#b49775] font-normal leading-snug">
                    {proj.title}
                  </h3>
                  <span className="mt-4 text-xs font-sans tracking-widest text-[#9e918a] uppercase">
                    {proj.location}
                  </span>
                  <div className="mt-6 inline-flex items-center gap-1.5 text-xs font-serif text-[#b49775] border-b border-[#b49775] pb-0.5">
                    <span>Ver Proyecto</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
