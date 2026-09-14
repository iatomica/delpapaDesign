import React, { useState } from 'react';
import { Project, RenderSpec } from '../../../types/index.js';
import { api } from '../../../services/api.js';
import { Button } from '../../ui/Button.js';
import { Input, TextArea } from '../../ui/Input.js';
import {
  Sparkle,
  FloppyDisk,
  CheckCircle,
  DownloadSimple,
  SlidersHorizontal,
  LightbulbFilament,
  Palette,
  BoundingBox,
  ChatCenteredDots,
} from '@phosphor-icons/react';

interface RenderStudioProps {
  projects: Project[];
  onRenderAdded: (projectId: string, render: RenderSpec) => void;
}

export const RenderStudio: React.FC<RenderStudioProps> = ({
  projects,
  onRenderAdded,
}) => {
  const [selectedProjectId, setSelectedProjectId] = useState(projects[0]?.id || 'proj_alvear_01');
  const [spaceType, setSpaceType] = useState<RenderSpec['spaceType']>('living');
  const [style, setStyle] = useState<RenderSpec['style']>('warm_minimalism');
  const [lighting, setLighting] = useState<RenderSpec['lighting']>('natural_morning');
  const [materials, setMaterials] = useState<string[]>([
    'Mármol Travertino Navona',
    'Roble Europeo Ahumado',
    'Lino Natural Belga',
  ]);
  const [notes, setNotes] = useState('');
  const [aspectRatio, setAspectRatio] = useState<'16:9' | '4:3' | '1:1'>('16:9');

  const [isGenerating, setIsGenerating] = useState(false);
  const [generationStep, setGenerationStep] = useState('');
  const [latestGenerated, setLatestGenerated] = useState<{
    imageUrl: string;
    spaceType: string;
    style: string;
    materials: string[];
    lighting: string;
  } | null>(null);

  const [saveSuccessMessage, setSaveSuccessMessage] = useState('');
  const [renderTitleInput, setRenderTitleInput] = useState('');

  const activeProject = projects.find(p => p.id === selectedProjectId) || projects[0];

  const availableMaterials = [
    'Mármol Travertino Navona',
    'Roble Europeo Ahumado',
    'Lino Natural Belga',
    'Bronce Envejecido',
    'Piedra Piasentina',
    'Nogal Canaletto',
    'Estuco de Cal Natural',
    'Microcemento Marfil',
    'Madera de Hinoki',
    'Acero Inoxidable Mate',
  ];

  const toggleMaterial = (mat: string) => {
    if (materials.includes(mat)) {
      setMaterials(materials.filter(m => m !== mat));
    } else {
      setMaterials([...materials, mat]);
    }
  };

  const handleGenerate = async () => {
    setIsGenerating(true);
    setSaveSuccessMessage('');
    setGenerationStep('Calibrando proporciones espaciales y materiales...');

    try {
      const result = await api.generateRender({
        spaceType,
        style,
        materials,
        lighting,
        aspectRatio,
        notes,
      });

      setLatestGenerated(result);
      setRenderTitleInput(
        `${spaceType.toUpperCase()} — ${style.replace('_', ' ').toUpperCase()}`
      );
    } catch (err: any) {
      console.error('Error generando render:', err);
    } finally {
      setIsGenerating(false);
      setGenerationStep('');
    }
  };

  const handleSaveToProject = async () => {
    if (!latestGenerated || !activeProject) return;

    try {
      const newRender = await api.saveRenderToProject(activeProject.id, {
        title: renderTitleInput || 'Propuesta de Render 3D',
        spaceType,
        style,
        materials,
        lighting,
        palette: materials.slice(0, 3).join(', '),
        imageUrl: latestGenerated.imageUrl,
        aspectRatio,
        status: 'review',
        createdBy: 'Elena Varela (Diseñadora Líder)',
      });

      onRenderAdded(activeProject.id, newRender);
      setSaveSuccessMessage(`Render añadido al proyecto "${activeProject.title}" con éxito.`);
      setTimeout(() => setSaveSuccessMessage(''), 3000);
    } catch (err) {
      console.error('Error guardando render:', err);
    }
  };

  return (
    <div className="flex flex-col gap-10">
      {/* Studio Header */}
      <div className="bg-white p-6 sm:p-8 border border-obsidian-900/10 flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <span className="text-[11px] uppercase tracking-architectural text-bronze-500 font-semibold font-mono">
            // WORKSPACE DE DISEÑADORA • ARQ. ELENA VARELA
          </span>
          <h2 className="font-serif text-3xl text-obsidian-900 font-normal mt-1">
            Estudio de Renders & Visualización
          </h2>
          <p className="text-xs sm:text-sm text-obsidian-900/60 font-light mt-1">
            Gestión y composición de propuestas espaciales de alta fidelidad para proyectos del estudio.
          </p>
        </div>

        {/* Project Selector */}
        <div className="flex items-center gap-3">
          <label className="text-xs uppercase tracking-architectural text-obsidian-900/70 font-mono">
            Proyecto Destino:
          </label>
          <select
            value={selectedProjectId}
            onChange={e => setSelectedProjectId(e.target.value)}
            className="bg-travertine-100 border border-obsidian-900/15 text-xs text-obsidian-900 font-medium px-3.5 py-2 focus:outline-none"
          >
            {projects.map(p => (
              <option key={p.id} value={p.id}>
                {p.title} ({p.code})
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Main Studio Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Spatial Parameters */}
        <div className="lg:col-span-5 bg-white border border-obsidian-900/10 p-6 flex flex-col gap-6">
          <div className="flex items-center justify-between hairline-b pb-4">
            <span className="font-serif text-xl text-obsidian-900 font-normal">
              Parámetros de la Propuesta
            </span>
            <span className="text-[11px] font-mono text-bronze-500 uppercase">
              Visualización 3D
            </span>
          </div>

          {/* Space Type */}
          <div className="flex flex-col gap-2">
            <label className="text-xs uppercase tracking-architectural text-obsidian-900/80 font-medium flex items-center gap-1.5">
              <BoundingBox size={14} className="text-bronze-500" />
              <span>Estancia / Tipología Espacial</span>
            </label>
            <select
              value={spaceType}
              onChange={e => setSpaceType(e.target.value as any)}
              className="bg-travertine-50 border border-obsidian-900/15 p-2.5 text-xs text-obsidian-900 focus:outline-none"
            >
              <option value="living">Gran Salón Principal (Living Room)</option>
              <option value="kitchen">Cocina Monolítica de Autor (Kitchen)</option>
              <option value="master_bedroom">Master Suite & Rincón de Lectura</option>
              <option value="dressing_room">Vestidor Pavillion / Walk-in Closet</option>
              <option value="bathroom">Baño Spa en Piedra Continua</option>
              <option value="terrace">Galería / Terraza Bioclimática</option>
              <option value="workspace">Estudio Ejecutivo & Biblioteca</option>
            </select>
          </div>

          {/* Style Direction */}
          <div className="flex flex-col gap-2">
            <label className="text-xs uppercase tracking-architectural text-obsidian-900/80 font-medium flex items-center gap-1.5">
              <Palette size={14} className="text-bronze-500" />
              <span>Lenguaje Arquitectónico</span>
            </label>
            <select
              value={style}
              onChange={e => setStyle(e.target.value as any)}
              className="bg-travertine-50 border border-obsidian-900/15 p-2.5 text-xs text-obsidian-900 focus:outline-none"
            >
              <option value="warm_minimalism">Minimalismo Cálido (Travertino & Lino)</option>
              <option value="japandi">Japandi Contemporáneo (Madera Clara & Wabi)</option>
              <option value="brutalist_luxury">Lujo Brutalista Refinado (Hormigón & Bronce)</option>
              <option value="contemporary_european">Milanesa Contemporánea de Autor</option>
              <option value="wabi_sabi">Wabi-Sabi Orgánico (Cal Natural & Texturas)</option>
              <option value="neoclassic_modern">Clasicismo Francés Contemporáneo</option>
            </select>
          </div>

          {/* Lighting */}
          <div className="flex flex-col gap-2">
            <label className="text-xs uppercase tracking-architectural text-obsidian-900/80 font-medium flex items-center gap-1.5">
              <LightbulbFilament size={14} className="text-bronze-500" />
              <span>Atmósfera & Luminotecnia</span>
            </label>
            <select
              value={lighting}
              onChange={e => setLighting(e.target.value as any)}
              className="bg-travertine-50 border border-obsidian-900/15 p-2.5 text-xs text-obsidian-900 focus:outline-none"
            >
              <option value="natural_morning">Luz Natural Matutina Rasante</option>
              <option value="golden_hour">Golden Hour (Atardecer Escultural)</option>
              <option value="warm_architectural_2700k">Iluminación Arquitectónica Oculta 2700K</option>
              <option value="dramatic_chiaroscuro">Claroscuro Museográfico</option>
              <option value="soft_diffuse">Difusa Suave Nórdica</option>
            </select>
          </div>

          {/* Materials Tag Selector */}
          <div className="flex flex-col gap-2">
            <label className="text-xs uppercase tracking-architectural text-obsidian-900/80 font-medium flex items-center gap-1.5">
              <SlidersHorizontal size={14} className="text-bronze-500" />
              <span>Materialidad Predominante</span>
            </label>
            <div className="flex flex-wrap gap-1.5 max-h-36 overflow-y-auto p-1 bg-travertine-50 border border-obsidian-900/10">
              {availableMaterials.map(m => {
                const isSelected = materials.includes(m);
                return (
                  <button
                    key={m}
                    type="button"
                    onClick={() => toggleMaterial(m)}
                    className={`text-[11px] px-2.5 py-1 transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-obsidian-900 text-white font-medium'
                        : 'bg-white text-obsidian-900/70 border border-obsidian-900/10 hover:border-obsidian-900/40'
                    }`}
                  >
                    {isSelected ? '✓ ' : '+ '}
                    {m}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Aspect Ratio */}
          <div className="flex flex-col gap-2">
            <label className="text-xs uppercase tracking-architectural text-obsidian-900/80 font-medium">
              Formato de Presentación
            </label>
            <div className="grid grid-cols-3 gap-2">
              {(['16:9', '4:3', '1:1'] as const).map(ratio => (
                <button
                  key={ratio}
                  type="button"
                  onClick={() => setAspectRatio(ratio)}
                  className={`py-1.5 text-xs font-mono uppercase border cursor-pointer ${
                    aspectRatio === ratio
                      ? 'border-obsidian-900 bg-obsidian-900 text-white'
                      : 'border-obsidian-900/15 bg-travertine-50 text-obsidian-900 hover:bg-white'
                  }`}
                >
                  {ratio}
                </button>
              ))}
            </div>
          </div>

          {/* Notes */}
          <TextArea
            label="Notas de Composición y Criterio Espacial"
            placeholder="ej: chimenea en voladizo, ventanales de suelo a techo, sofá esquinero en lino crudo..."
            rows={2}
            value={notes}
            onChange={e => setNotes(e.target.value)}
          />

          {/* Action Generate */}
          <Button
            size="lg"
            variant="bronze"
            onClick={handleGenerate}
            isLoading={isGenerating}
            icon={<Sparkle size={18} />}
            className="w-full mt-2"
          >
            {isGenerating ? 'Componiendo Render Espacial...' : 'Componer Propuesta 3D'}
          </Button>
        </div>

        {/* Right Column: High-Res Viewport */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          <div className="bg-white border border-obsidian-900/10 p-6 flex flex-col">
            <div className="flex items-center justify-between hairline-b pb-4 mb-4">
              <div>
                <span className="font-serif text-xl text-obsidian-900 font-normal">
                  Visor de Salida 3D
                </span>
                <span className="text-xs text-obsidian-900/50 block font-light">
                  {latestGenerated ? 'Visualización Calibrada' : 'Selecciona los parámetros espaciales'}
                </span>
              </div>

              {latestGenerated && (
                <div className="flex items-center gap-2">
                  <a
                    href={latestGenerated.imageUrl}
                    download="delpapa-render.jpg"
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 border border-obsidian-900/15 hover:bg-travertine-100 text-obsidian-900 transition-colors"
                    title="Abrir imagen completa"
                  >
                    <DownloadSimple size={18} />
                  </a>
                </div>
              )}
            </div>

            {/* Display Canvas */}
            <div className="relative aspect-[16/10] bg-obsidian-950 overflow-hidden border border-obsidian-900/10 flex items-center justify-center">
              {latestGenerated ? (
                <img
                  src={latestGenerated.imageUrl}
                  alt="Render de alta fidelidad"
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="flex flex-col items-center gap-3 text-travertine-300/40 p-8 text-center">
                  <Sparkle size={48} weight="light" />
                  <p className="font-serif text-lg text-travertine-200 font-light">
                    Configura la tipología de estancia y pulsa "Componer Propuesta 3D"
                  </p>
                  <p className="text-xs font-mono max-w-sm text-travertine-400/60">
                    Propuestas en travertino, ebanistería noble y luz rasante listas para el cliente.
                  </p>
                </div>
              )}

              {latestGenerated && (
                <div className="absolute top-4 left-4 bg-obsidian-900/80 backdrop-blur-sm text-white px-3 py-1 text-[11px] font-mono uppercase">
                  {spaceType.toUpperCase()} • {style.replace('_', ' ').toUpperCase()}
                </div>
              )}
            </div>

            {/* Save to Project Controls */}
            {latestGenerated && (
              <div className="mt-6 pt-4 hairline-t flex flex-col gap-4">
                {saveSuccessMessage && (
                  <div className="p-3 bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs flex items-center gap-2">
                    <CheckCircle size={16} weight="fill" />
                    <span>{saveSuccessMessage}</span>
                  </div>
                )}

                <div className="flex flex-col sm:flex-row items-center gap-3">
                  <Input
                    placeholder="Título del render (ej: Salón Principal - Travertino y Luz Matutina)"
                    value={renderTitleInput}
                    onChange={e => setRenderTitleInput(e.target.value)}
                    className="flex-1"
                  />
                  <Button
                    size="md"
                    variant="primary"
                    onClick={handleSaveToProject}
                    icon={<FloppyDisk size={16} />}
                  >
                    Guardar en {activeProject?.code}
                  </Button>
                </div>
              </div>
            )}
          </div>

          {/* Client Feedback Feed */}
          <div className="bg-white border border-obsidian-900/10 p-6">
            <div className="flex items-center justify-between hairline-b pb-4 mb-4">
              <div className="flex items-center gap-2">
                <ChatCenteredDots size={20} className="text-bronze-500" />
                <h3 className="font-serif text-xl text-obsidian-900 font-normal">
                  Feedback de Clientes en "{activeProject.title}"
                </h3>
              </div>
              <span className="text-xs font-mono text-obsidian-900/50">
                {activeProject.renders.filter(r => r.feedback && r.feedback.length > 0).length} notas registradas
              </span>
            </div>

            <div className="flex flex-col gap-4 max-h-72 overflow-y-auto">
              {activeProject.renders.flatMap(r =>
                (r.feedback || []).map((fb, idx) => (
                  <div key={`${r.id}-${idx}`} className="p-4 bg-travertine-50 border border-obsidian-900/10">
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-serif text-sm font-medium text-obsidian-900">
                        {fb.author} sobre <em>"{r.title}"</em>
                      </span>
                      <span className="text-[10px] font-mono text-obsidian-900/50">{fb.date}</span>
                    </div>
                    <p className="text-xs text-obsidian-900/80 font-light leading-relaxed">
                      "{fb.comment}"
                    </p>
                  </div>
                ))
              )}

              {activeProject.renders.every(r => !r.feedback || r.feedback.length === 0) && (
                <div className="p-6 text-center text-xs text-obsidian-900/50 font-mono">
                  No hay notas pendientes de revisión de clientes para este proyecto.
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
