import React, { useState } from 'react';
import { Project, RenderSpec } from '../../../types/index.js';
import { api } from '../../../services/api.js';
import { Button } from '../../ui/Button.js';
import { Badge } from '../../ui/Badge.js';
import { Modal } from '../../ui/Modal.js';
import { TextArea } from '../../ui/Input.js';
import {
  CheckCircle,
  ChatCircleText,
  Eye,
  CalendarCheck,
  HouseLine,
  ArrowsLeftRight,
  Sparkle,
} from '@phosphor-icons/react';

interface ClientPortalProps {
  project: Project;
  onRefreshProject: () => void;
}

export const ClientPortal: React.FC<ClientPortalProps> = ({ project, onRefreshProject }) => {
  const [selectedRender, setSelectedRender] = useState<RenderSpec | null>(null);
  const [feedbackText, setFeedbackText] = useState('');
  const [isSubmittingFeedback, setIsSubmittingFeedback] = useState(false);
  const [actionSuccessMessage, setActionSuccessMessage] = useState('');

  const handleApprove = async (renderId: string) => {
    try {
      await api.updateRenderStatus(project.id, renderId, 'approved');
      setActionSuccessMessage('Render aprobado oficialmente para producción de obra.');
      onRefreshProject();
      setTimeout(() => setActionSuccessMessage(''), 3000);
    } catch (err) {
      console.error('Error aprobando render:', err);
    }
  };

  const handleSendFeedback = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedRender || !feedbackText.trim()) return;

    setIsSubmittingFeedback(true);
    try {
      await api.addRenderFeedback(
        project.id,
        selectedRender.id,
        feedbackText.trim(),
        'Santiago & Clara Beras'
      );
      setActionSuccessMessage('Tus comentarios fueron enviados a la Arq. Elena Varela.');
      setFeedbackText('');
      onRefreshProject();
      setTimeout(() => {
        setSelectedRender(null);
        setActionSuccessMessage('');
      }, 2000);
    } catch (err) {
      console.error('Error enviando feedback:', err);
    } finally {
      setIsSubmittingFeedback(false);
    }
  };

  return (
    <div className="flex flex-col gap-10">
      {/* Client Project Header */}
      <div className="bg-white p-6 sm:p-8 border border-obsidian-900/10 flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <span className="text-[11px] uppercase tracking-architectural text-bronze-500 font-semibold font-mono">
            // PORTAL PRIVADO DE PROPIETARIOS
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-obsidian-900 font-normal mt-1">
            {project.title}
          </h2>
          <p className="text-xs sm:text-sm text-obsidian-900/60 font-light mt-1">
            {project.location} • {project.squareMeters} m² • Diseñadora Responsable: <strong className="text-obsidian-900 font-medium">{project.designerName}</strong>
          </p>
        </div>

        <div className="flex items-center gap-3">
          <div className="text-right hidden sm:block">
            <span className="text-[10px] uppercase font-mono text-obsidian-900/50 block">Estado del Proyecto</span>
            <span className="text-xs font-mono font-medium text-obsidian-900 uppercase">
              {project.status.replace('_', ' ')}
            </span>
          </div>
          <span className="p-3 bg-travertine-100 border border-obsidian-900/10 text-bronze-600">
            <HouseLine size={24} />
          </span>
        </div>
      </div>

      {actionSuccessMessage && (
        <div className="p-4 bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs sm:text-sm flex items-center gap-3">
          <CheckCircle size={20} weight="fill" className="text-emerald-600 flex-shrink-0" />
          <span>{actionSuccessMessage}</span>
        </div>
      )}

      {/* Renders Section: Interactive Proposals Review */}
      <div className="bg-white border border-obsidian-900/10 p-6 sm:p-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div>
            <h3 className="font-serif text-2xl text-obsidian-900 font-normal">
              Propuestas de Renders 3D
            </h3>
            <p className="text-xs text-obsidian-900/60 font-light mt-0.5">
              Visualizaciones generadas por el estudio para tu revisión, comentarios o aprobación final
            </p>
          </div>
          <span className="text-xs font-mono text-obsidian-900/50">
            {project.renders.filter(r => r.status === 'approved').length} de {project.renders.length} aprobados
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {project.renders.map(render => (
            <div
              key={render.id}
              className="bg-[#FAF8F5] border border-obsidian-900/10 overflow-hidden flex flex-col justify-between hover:border-obsidian-900/30 transition-all duration-200 group"
            >
              <div>
                <div className="aspect-[16/10] overflow-hidden relative bg-obsidian-950">
                  <img
                    src={render.imageUrl}
                    alt={render.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                  <div className="absolute top-3 left-3">
                    <Badge status={render.status} size="sm" />
                  </div>
                  <div className="absolute bottom-3 right-3 bg-obsidian-900/80 backdrop-blur-sm text-white px-2 py-0.5 text-[10px] font-mono">
                    {render.spaceType.toUpperCase()}
                  </div>
                </div>

                <div className="p-5">
                  <h4 className="font-serif text-lg text-obsidian-900 font-normal mb-1">
                    {render.title}
                  </h4>
                  <p className="text-xs text-obsidian-900/70 font-light mb-3">
                    <strong>Paleta:</strong> {render.materials.join(', ')}
                  </p>

                  {/* Feedback summary if any */}
                  {render.feedback && render.feedback.length > 0 && (
                    <div className="p-2.5 bg-travertine-200/80 border border-obsidian-900/5 text-[11px] text-obsidian-900/80 italic mb-3">
                      Última nota: "{render.feedback[render.feedback.length - 1].comment}"
                    </div>
                  )}
                </div>
              </div>

              <div className="p-5 pt-0 flex items-center justify-between gap-2 hairline-t">
                <Button
                  size="sm"
                  variant="outline-dark"
                  onClick={() => setSelectedRender(render)}
                  icon={<Eye size={14} />}
                >
                  Examinar
                </Button>

                {render.status !== 'approved' ? (
                  <Button
                    size="sm"
                    variant="bronze"
                    onClick={() => handleApprove(render.id)}
                    icon={<CheckCircle size={14} />}
                  >
                    Aprobar
                  </Button>
                ) : (
                  <span className="text-[11px] font-mono text-emerald-700 font-medium flex items-center gap-1">
                    <CheckCircle size={14} weight="fill" /> Aprobado
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Milestones & Schedule Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Milestones Timeline (7 cols) */}
        <div className="lg:col-span-7 bg-white border border-obsidian-900/10 p-6 sm:p-8">
          <h3 className="font-serif text-2xl text-obsidian-900 font-normal mb-1">
            Cronograma de Etapas de Obra
          </h3>
          <p className="text-xs text-obsidian-900/60 font-light mb-6">
            Seguimiento transparente del progreso y entregables del proyecto
          </p>

          <div className="flex flex-col gap-4">
            {project.milestones.map((m, index) => (
              <div
                key={m.id}
                className="flex items-start gap-4 p-4 border border-obsidian-900/10 bg-travertine-50/50"
              >
                <div className="p-2 mt-0.5">
                  <CheckCircle
                    size={22}
                    weight={m.status === 'completed' ? 'fill' : 'regular'}
                    className={
                      m.status === 'completed'
                        ? 'text-emerald-700'
                        : m.status === 'in_progress'
                        ? 'text-bronze-600'
                        : 'text-stone-400'
                    }
                  />
                </div>

                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <span className="font-serif text-base text-obsidian-900 font-medium">
                      0{index + 1}. {m.title}
                    </span>
                    <span className="text-[11px] font-mono text-obsidian-900/50">{m.dueDate}</span>
                  </div>
                  <div className="mt-2">
                    <Badge status={m.status} size="sm" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Material Board for this project (5 cols) */}
        <div className="lg:col-span-5 bg-white border border-obsidian-900/10 p-6 sm:p-8 flex flex-col justify-between">
          <div>
            <h3 className="font-serif text-2xl text-obsidian-900 font-normal mb-1">
              Muestras Aprobadas
            </h3>
            <p className="text-xs text-obsidian-900/60 font-light mb-6">
              Selección de materiales para las áreas nobles del Penthouse
            </p>

            <div className="flex flex-col gap-3">
              {project.materialsCatalog.map((mat, i) => (
                <div key={i} className="flex items-center gap-3 p-3 bg-travertine-50 border border-obsidian-900/10">
                  <img src={mat.sampleUrl} alt={mat.name} className="w-12 h-12 object-cover border border-obsidian-900/10" />
                  <div className="flex-1 min-w-0">
                    <span className="text-xs font-serif font-medium text-obsidian-900 block truncate">{mat.name}</span>
                    <span className="text-[11px] text-obsidian-900/60 block truncate">{mat.finish}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 pt-6 hairline-t">
            <span className="text-xs font-mono text-bronze-500 uppercase block mb-1">Próxima Consulta In Situ</span>
            <p className="text-xs text-obsidian-900 font-light">
              Reunión de luminotecnia en obra prevista para el <strong>Jueves 26 de Marzo, 15:00 hs</strong>.
            </p>
          </div>
        </div>
      </div>

      {/* Render Detail & Feedback Modal */}
      {selectedRender && (
        <Modal
          isOpen={Boolean(selectedRender)}
          onClose={() => setSelectedRender(null)}
          title={selectedRender.title}
          subtitle={`Espacio: ${selectedRender.spaceType.toUpperCase()} • Estilo: ${selectedRender.style.replace('_', ' ').toUpperCase()}`}
          maxWidth="4xl"
        >
          <div className="flex flex-col gap-6">
            {/* Render view */}
            <div className="aspect-[16/10] overflow-hidden bg-obsidian-950 relative">
              <img
                src={selectedRender.imageUrl}
                alt={selectedRender.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4">
                <Badge status={selectedRender.status} size="md" />
              </div>
            </div>

            {/* Render Prompt & Materials info */}
            <div className="p-4 bg-travertine-100 border border-obsidian-900/10 text-xs leading-relaxed text-obsidian-900/80">
              <strong className="text-obsidian-900 font-medium">Materialidad Especificada:</strong> {selectedRender.materials.join(', ')}
            </div>

            {/* Feedback Form */}
            <form onSubmit={handleSendFeedback} className="flex flex-col gap-3">
              <TextArea
                label="¿Deseas solicitar algún ajuste a la Arq. Elena Varela?"
                placeholder="ej: Me gustaría evaluar cómo queda con iluminación indirecta más cálida en la biblioteca o un tono más claro en los paneles de roble..."
                rows={3}
                value={feedbackText}
                onChange={e => setFeedbackText(e.target.value)}
              />

              <div className="flex items-center justify-between pt-2">
                <Button
                  type="button"
                  variant="bronze"
                  size="md"
                  onClick={() => {
                    handleApprove(selectedRender.id);
                    setSelectedRender(null);
                  }}
                  icon={<CheckCircle size={16} />}
                >
                  Aprobar Render Ahora
                </Button>

                <Button
                  type="submit"
                  variant="primary"
                  size="md"
                  isLoading={isSubmittingFeedback}
                  disabled={!feedbackText.trim()}
                  icon={<ChatCircleText size={16} />}
                >
                  Enviar Nota a Diseñadora
                </Button>
              </div>
            </form>
          </div>
        </Modal>
      )}
    </div>
  );
};
