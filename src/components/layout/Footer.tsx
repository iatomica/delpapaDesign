import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { STUDIO_INFO } from "@/data/projects";

export function Footer() {
  return (
    <footer className="w-full bg-[#080706] text-[#A6A095] border-t border-white/5 pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Col 1: Brand & Tagline */}
          <div className="flex flex-col gap-4">
            <Link href="/" className="inline-block">
              <span className="font-serif text-3xl text-[#EDEAE4] tracking-widest">
                SENSE
              </span>
              <p className="editorial-mono text-[9px] tracking-[0.25em] text-[#C2A77A]">
                By Stefania Del Papa
              </p>
            </Link>
            <p className="text-sm font-light text-[#A6A095] leading-relaxed max-w-sm mt-2">
              Transformamos el espacio en una experiencia sensorial a medida. Lujo silencioso, arquitectura interior de alto nivel y hospitalidad.
            </p>
          </div>

          {/* Col 2: Studio Locations */}
          <div className="flex flex-col gap-3">
            <h3 className="editorial-mono text-[11px] text-[#EDEAE4] tracking-[0.2em] uppercase">
              Presencia Proyectual
            </h3>
            <ul className="text-sm space-y-2 font-light">
              <li className="text-[#EDEAE4]">Valencia, España</li>
              <li>Buenos Aires, Argentina</li>
              <li>Puglia & Basilicata, Italia</li>
              <li className="text-xs text-[#C2A77A] pt-1 font-mono">
                Consultoría Internacional Presencial & Remota
              </li>
            </ul>
          </div>

          {/* Col 3: Navigation */}
          <div className="flex flex-col gap-3">
            <h3 className="editorial-mono text-[11px] text-[#EDEAE4] tracking-[0.2em] uppercase">
              Navegación
            </h3>
            <ul className="text-sm space-y-2 font-light">
              <li>
                <a href="#cinematic-experience" className="hover:text-[#C2A77A] transition-colors">
                  Experiencia Cinemática
                </a>
              </li>
              <li>
                <a href="#manifiesto" className="hover:text-[#C2A77A] transition-colors">
                  Manifiesto & Enfoque
                </a>
              </li>
              <li>
                <a href="#proyectos" className="hover:text-[#C2A77A] transition-colors">
                  Colección de Proyectos
                </a>
              </li>
              <li>
                <a href="#materialidad" className="hover:text-[#C2A77A] transition-colors">
                  Estudio Matérico
                </a>
              </li>
              <li>
                <a href="#planos" className="hover:text-[#C2A77A] transition-colors">
                  Documentación Técnica
                </a>
              </li>
              <li>
                <a href="#estudio" className="hover:text-[#C2A77A] transition-colors">
                  Stefania Del Papa
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Social */}
          <div className="flex flex-col gap-3">
            <h3 className="editorial-mono text-[11px] text-[#EDEAE4] tracking-[0.2em] uppercase">
              Contacto Directo
            </h3>
            <p className="text-sm text-[#EDEAE4] font-light">
              {STUDIO_INFO.phone}
            </p>
            <p className="text-sm text-[#A6A095] hover:text-[#C2A77A] transition-colors">
              <a href={`mailto:${STUDIO_INFO.email}`}>{STUDIO_INFO.email}</a>
            </p>
            <div className="flex items-center gap-4 mt-2 pt-2 border-t border-white/5">
              <a
                href={STUDIO_INFO.linkedin}
                target="_blank"
                rel="noreferrer"
                className="text-xs uppercase tracking-wider text-[#C2A77A] hover:text-white flex items-center gap-1"
              >
                <span>LinkedIn</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
              <a
                href={STUDIO_INFO.behance}
                target="_blank"
                rel="noreferrer"
                className="text-xs uppercase tracking-wider text-[#C2A77A] hover:text-white flex items-center gap-1"
              >
                <span>Behance</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#6B665E] font-mono">
          <p>© {new Date().getFullYear()} SENSE Studio. Stefania Del Papa. Todos los derechos reservados.</p>
          <p className="mt-2 sm:mt-0">Quiet Luxury · Architectural Scenography · Editorial Portfolio</p>
        </div>
      </div>
    </footer>
  );
}
