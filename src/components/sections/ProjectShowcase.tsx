"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowUpRight, MapPin, Eye } from "lucide-react";
import { PROJECTS, Project } from "@/data/projects";
import { ProjectDetailModal } from "./ProjectDetailModal";

export function ProjectShowcase() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="proyectos" className="relative w-full py-28 md:py-40 bg-[#0D0C0B] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-6 h-[1px] bg-[#C2A77A]" />
              <span className="editorial-mono text-[#C2A77A] text-[11px] tracking-[0.25em]">
                Selección Proyectual
              </span>
            </div>
            <h2 className="editorial-title text-4xl sm:text-6xl md:text-7xl text-[#EDEAE4]">
              Obras & Proyectos
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#A6A095] max-w-md font-light leading-relaxed">
            Una mirada curada a nuestros desarrollos en hospitalidad de lujo, residencias
            privadas y arquitectura corporativa en Italia y España.
          </p>
        </div>

        {/* Projects List */}
        <div className="space-y-32">
          {PROJECTS.map((project, index) => {
            const isEven = index % 2 === 0;

            return (
              <div
                key={project.id}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center ${
                  isEven ? "" : "lg:flex-row-reverse"
                }`}
              >
                {/* Visual Column */}
                <div
                  className={`lg:col-span-7 relative group cursor-pointer ${
                    isEven ? "lg:order-1" : "lg:order-2"
                  }`}
                  onClick={() => setSelectedProject(project)}
                >
                  <div className="relative aspect-[16/11] w-full overflow-hidden rounded-2xl border border-white/10 bg-[#161514]">
                    <Image
                      src={project.heroImage}
                      alt={project.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 60vw"
                      className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80 group-hover:opacity-40 transition-opacity" />

                    {/* Floating Hover Badge */}
                    <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                      <span className="btn-editorial btn-editorial-primary text-[10px] py-2 px-4 shadow-xl">
                        <span>Ver Proyecto</span>
                        <Eye className="w-3.5 h-3.5" />
                      </span>
                    </div>

                    {/* Project Index Overlay */}
                    <span className="absolute top-6 left-6 font-serif text-5xl md:text-6xl text-white/20 font-light select-none">
                      {project.number}
                    </span>
                  </div>
                </div>

                {/* Narrative Column */}
                <div
                  className={`lg:col-span-5 flex flex-col justify-center ${
                    isEven ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  <div className="flex items-center gap-2 text-xs tracking-widest text-[#C2A77A] font-mono uppercase mb-3">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{project.location}</span>
                    <span>·</span>
                    <span>{project.category}</span>
                  </div>

                  <h3
                    className="editorial-title text-3xl sm:text-4xl md:text-5xl text-[#EDEAE4] mb-4 hover:text-[#C2A77A] transition-colors cursor-pointer"
                    onClick={() => setSelectedProject(project)}
                  >
                    {project.title}
                  </h3>

                  <p className="text-sm sm:text-base text-[#D9D2C3]/70 font-light leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Materials tags */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.materials.slice(0, 4).map((m) => (
                      <span
                        key={m}
                        className="px-2.5 py-1 text-[11px] rounded-full border border-white/5 bg-white/[0.02] text-[#A6A095]"
                      >
                        {m}
                      </span>
                    ))}
                  </div>

                  {/* Action button */}
                  <div>
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="btn-editorial btn-editorial-outline group text-xs"
                    >
                      <span>Detalles del Proyecto</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-[#C2A77A] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Project Detail Modal */}
      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
