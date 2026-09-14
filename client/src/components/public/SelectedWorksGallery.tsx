import React, { useState } from 'react';
import { Project } from '../../types/index.js';
import { Modal } from '../ui/Modal.js';
import { Button } from '../ui/Button.js';
import { ArrowUpRight, CheckCircle } from '@phosphor-icons/react';

interface SelectedWorksGalleryProps {
  projects: Project[];
  onSelectProjectForPortal?: (project: Project) => void;
}

export const SelectedWorksGallery: React.FC<SelectedWorksGalleryProps> = ({ projects }) => {
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  return (
    <section id="obras" className="py-24 px-6 sm:px-12 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 gap-6">
        <div>
          <span className="text-xs uppercase tracking-architectural text-terracotta-600 font-semibold block mb-2 font-mono">
            // 02. OBRAS SELECCIONADAS
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl text-obsidian-900 font-normal">
            Proyectos & Obras de Autor
          </h2>
        </div>
        <p className="text-xs sm:text-sm text-obsidian-900/60 font-mono uppercase tracking-architectural max-w-xs">
          Hospitalidad de lujo, residencias privadas y arquitectura corporativa en Italia y España
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        {projects.map((project, idx) => {
          const colSpan = idx === 0 ? 'md:col-span-7' : idx === 1 ? 'md:col-span-5' : 'md:col-span-12 lg:col-span-6';

          return (
            <article
              key={project.id}
              className={`${colSpan} group cursor-pointer flex flex-col bg-white border border-obsidian-900/10 hover:border-obsidian-900/30 transition-all duration-300`}
              onClick={() => setActiveModalProject(project)}
            >
              {/* Image Frame */}
              <div className="relative aspect-[16/10] overflow-hidden bg-travertine-200">
                <img
                  src={project.coverImage}
                  alt={project.title}
                  className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute top-4 right-4 bg-obsidian-900/80 backdrop-blur-sm text-white p-2.5 opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowUpRight size={18} />
                </div>
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 text-[11px] font-mono tracking-wider text-obsidian-900 uppercase">
                  {project.location}
                </div>
              </div>

              {/* Meta information */}
              <div className="p-6 flex flex-col justify-between flex-1">
                <div>
                  <div className="flex items-center justify-between text-xs text-obsidian-900/50 font-mono mb-2">
                    <span>{project.code}</span>
                    <span>{project.squareMeters} m² • {project.renders.length} RENDERS 3D</span>
                  </div>
                  <h3 className="font-serif text-2xl text-obsidian-900 font-normal group-hover:text-bronze-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-obsidian-900/70 font-light line-clamp-2 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 hairline-t flex items-center justify-between text-xs">
                  <span className="text-bronze-500 uppercase tracking-architectural font-medium text-[11px]">
                    Ver Especificaciones & Renders →
                  </span>
                  <span className="text-[10px] uppercase font-mono px-2 py-0.5 bg-travertine-200 text-obsidian-900">
                    {project.status.replace('_', ' ')}
                  </span>
                </div>
              </div>
            </article>
          );
        })}
      </div>

      {/* Project Detail Modal */}
      {activeModalProject && (
        <Modal
          isOpen={Boolean(activeModalProject)}
          onClose={() => setActiveModalProject(null)}
          title={activeModalProject.title}
          subtitle={`${activeModalProject.location} • ${activeModalProject.squareMeters} m² • ${activeModalProject.budgetEstimated}`}
          maxWidth="4xl"
        >
          <div className="flex flex-col gap-6">
            <p className="text-sm text-obsidian-900/80 leading-relaxed font-light">
              {activeModalProject.description}
            </p>

            {/* Renders Showcase */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-serif text-lg text-obsidian-900 font-normal">
                  Visualizaciones 3D del Proyecto
                </h4>
                <span className="text-xs text-obsidian-900/50 font-mono">
                  {activeModalProject.renders.length} perspectivas
                </span>
              </div>

              {activeModalProject.renders.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {activeModalProject.renders.map(render => (
                    <div key={render.id} className="border border-obsidian-900/10 overflow-hidden bg-white">
                      <div className="aspect-[16/10] overflow-hidden relative">
                        <img
                          src={render.imageUrl}
                          alt={render.title}
                          className="w-full h-full object-cover"
                        />
                        <span className="absolute bottom-2 right-2 bg-obsidian-900/80 text-white text-[10px] font-mono px-2 py-0.5">
                          {render.spaceType.toUpperCase()}
                        </span>
                      </div>
                      <div className="p-3">
                        <span className="text-xs font-serif font-normal text-obsidian-900 block">{render.title}</span>
                        <span className="text-[11px] text-obsidian-900/60 font-light block mt-1">
                          Materiales: {render.materials.join(', ')}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="p-8 text-center bg-travertine-100 text-xs text-obsidian-900/60 font-mono">
                  No hay renders cargados para este proyecto todavía.
                </div>
              )}
            </div>

            {/* Milestones timeline summary */}
            <div className="hairline-t pt-4">
              <h4 className="font-serif text-base text-obsidian-900 mb-3">Estado de Avance</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                {activeModalProject.milestones.map(m => (
                  <div key={m.id} className="flex items-center gap-2 p-2 bg-travertine-100/70 border border-obsidian-900/5">
                    <CheckCircle
                      size={16}
                      weight={m.status === 'completed' ? 'fill' : 'regular'}
                      className={m.status === 'completed' ? 'text-emerald-700' : 'text-stone-400'}
                    />
                    <span className="flex-1 truncate">{m.title}</span>
                    <span className="text-[10px] text-obsidian-900/50 font-mono">{m.dueDate}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Modal>
      )}
    </section>
  );
};
