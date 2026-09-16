import React from "react";
import Image from "next/image";
import { ArrowUpRight, Award, Globe, BookOpen } from "lucide-react";
import { STUDIO_INFO } from "@/data/projects";

export function AboutStefania() {
  return (
    <section id="estudio" className="relative w-full py-28 md:py-40 bg-[#0A0908] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Portrait Column */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[4/5] w-full max-w-md mx-auto rounded-2xl overflow-hidden border border-white/10 bg-[#161514]">
              <Image
                src="/media/images/stefania/portrait.webp"
                alt="Stefania Del Papa — Lead Interior Designer"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

              <div className="absolute bottom-6 left-6 right-6">
                <span className="editorial-mono text-[10px] text-[#C2A77A] tracking-widest block mb-1">
                  Dirección Creativa
                </span>
                <h3 className="font-serif text-2xl text-[#EDEAE4]">
                  Stefania Del Papa
                </h3>
                <p className="text-xs text-[#A6A095] font-light mt-0.5">
                  Valencia · Buenos Aires · Puglia
                </p>
              </div>
            </div>

            {/* Subtle floating quote card */}
            <div className="hidden sm:block absolute -bottom-6 -right-6 p-5 rounded-xl bg-[#1C1B19]/90 backdrop-blur-md border border-white/10 max-w-xs shadow-2xl">
              <p className="font-serif text-sm italic text-[#EDEAE4] leading-snug">
                &ldquo;Traducir conceptos e identidades matéricas en experiencias sensoriales habitables.&rdquo;
              </p>
            </div>
          </div>

          {/* Bio & Credentials Column */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-6 h-[1px] bg-[#C2A77A]" />
              <span className="editorial-mono text-[#C2A77A] text-[11px] tracking-[0.25em]">
                Perfil Profesional
              </span>
            </div>

            <h2 className="editorial-title text-4xl sm:text-5xl md:text-6xl text-[#EDEAE4] mb-6">
              El Estudio & La Visión
            </h2>

            <p className="text-sm sm:text-base text-[#D9D2C3]/80 font-light leading-relaxed mb-6">
              Diseñadora de interiores especializada en espacios de lujo, proyectos comerciales y
              hospitalidad de alto nivel, con una práctica que fusiona una cuidada visión estética
              contemporánea con una sólida disciplina técnica. Mi enfoque se centra en traducir
              conceptos iniciales e identidades matéricas en experiencias sensoriales habitables,
              desarrollando documentación ejecutiva rigurosa, modelado 3D fotorrealista y mediciones
              detalladas (BOQs) que garantizan proyectos funcionales, sofisticados y viables en cada
              detalle constructivo.
            </p>

            <p className="text-sm sm:text-base text-[#A6A095] font-light leading-relaxed mb-8">
              Concibo cada espacio como una propuesta a medida donde convergen la precisión
              arquitectónica, la nobleza de los materiales naturales y la atención minuciosa al
              diseño de mobiliario y carpinterías.
            </p>

            {/* Education & Languages */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t border-white/10 mb-8">
              {/* Education */}
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-xs text-[#C2A77A] font-mono uppercase">
                  <BookOpen className="w-4 h-4" />
                  <span>Formación de Excelencia</span>
                </div>
                {STUDIO_INFO.education.map((edu, idx) => (
                  <div key={idx} className="text-xs">
                    <p className="text-[#EDEAE4] font-medium">{edu.degree}</p>
                    <p className="text-[#A6A095]">{edu.institution} · {edu.year}</p>
                  </div>
                ))}
              </div>

              {/* Languages & Scope */}
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-xs text-[#C2A77A] font-mono uppercase">
                  <Globe className="w-4 h-4" />
                  <span>Idiomas & Consultoría</span>
                </div>
                <div className="flex flex-wrap gap-2 text-xs">
                  {STUDIO_INFO.languages.map((lang, lIdx) => (
                    <span
                      key={lIdx}
                      className="px-2.5 py-1 rounded-full border border-white/10 bg-white/[0.02] text-[#D9D2C3]"
                    >
                      {lang.name} ({lang.level})
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Direct Links */}
            <div className="flex items-center gap-4">
              <a
                href={STUDIO_INFO.linkedin}
                target="_blank"
                rel="noreferrer"
                className="btn-editorial btn-editorial-outline text-xs"
              >
                <span>Perfil en LinkedIn</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#C2A77A]" />
              </a>
              <a
                href={STUDIO_INFO.behance}
                target="_blank"
                rel="noreferrer"
                className="btn-editorial btn-editorial-outline text-xs"
              >
                <span>Portafolio Behance</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#C2A77A]" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
