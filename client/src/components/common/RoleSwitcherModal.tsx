import React from 'react';
import { useAuth } from '../../context/AuthContext.js';
import { Modal } from '../ui/Modal.js';
import { UserGear, CompassTool, User, Globe } from '@phosphor-icons/react';

interface RoleSwitcherModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const RoleSwitcherModal: React.FC<RoleSwitcherModalProps> = ({ isOpen, onClose }) => {
  const { user, role, quickSwitchRole, setActiveView, logout } = useAuth();

  const handleSelectRole = async (targetRole: 'admin' | 'designer' | 'client') => {
    await quickSwitchRole(targetRole);
    onClose();
  };

  const handleSelectPublic = () => {
    logout();
    setActiveView('public');
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Selector de Experiencia de Usuario"
      subtitle="Explora Delpapa Design desde los distintos perfiles del ecosistema"
      maxWidth="lg"
    >
      <div className="flex flex-col gap-3">
        {/* Admin Card */}
        <button
          onClick={() => handleSelectRole('admin')}
          className={`flex items-start gap-4 p-4 text-left transition-all border cursor-pointer ${
            role === 'admin'
              ? 'border-obsidian-900 bg-travertine-200/80 ring-1 ring-obsidian-900'
              : 'border-obsidian-900/10 hover:border-obsidian-900/40 bg-white/70 hover:bg-white'
          }`}
        >
          <div className="p-3 bg-obsidian-900 text-white flex-shrink-0">
            <UserGear size={24} />
          </div>
          <div className="flex-1">
            <div className="flex items-center justify-between">
              <span className="font-serif text-lg text-obsidian-900 font-medium">1. Admin (Directora Martina Delpapa)</span>
              {role === 'admin' && (
                <span className="text-[10px] tracking-architectural uppercase bg-obsidian-900 text-white px-2 py-0.5 font-mono">Activo</span>
              )}
            </div>
            <p className="text-xs text-obsidian-900/70 mt-1 leading-relaxed">
              Supervisión global del estudio: proyectos activos, métricas de consultorías, entregables de diseño y bandeja de consultas entrantes.
            </p>
          </div>
        </button>

        {/* Designer Card */}
        <button
          onClick={() => handleSelectRole('designer')}
          className={`flex items-start gap-4 p-4 text-left transition-all border cursor-pointer ${
            role === 'designer'
              ? 'border-obsidian-900 bg-travertine-200/80 ring-1 ring-obsidian-900'
              : 'border-obsidian-900/10 hover:border-obsidian-900/40 bg-white/70 hover:bg-white'
          }`}
        >
          <div className="p-3 bg-bronze-500 text-white flex-shrink-0">
            <CompassTool size={24} />
          </div>
          <div className="flex-1">
            <div className="flex items-center justify-between">
              <span className="font-serif text-lg text-obsidian-900 font-medium">2. Diseñadora (Arq. Elena Varela)</span>
              {role === 'designer' && (
                <span className="text-[10px] tracking-architectural uppercase bg-bronze-500 text-white px-2 py-0.5 font-mono">Activo</span>
              )}
            </div>
            <p className="text-xs text-obsidian-900/70 mt-1 leading-relaxed">
              Estudio de Renders: composición y asignación de propuestas espaciales 3D, calibración de materiales y revisión de comentarios de los comitentes.
            </p>
          </div>
        </button>

        {/* Client Card */}
        <button
          onClick={() => handleSelectRole('client')}
          className={`flex items-start gap-4 p-4 text-left transition-all border cursor-pointer ${
            role === 'client'
              ? 'border-obsidian-900 bg-travertine-200/80 ring-1 ring-obsidian-900'
              : 'border-obsidian-900/10 hover:border-obsidian-900/40 bg-white/70 hover:bg-white'
          }`}
        >
          <div className="p-3 bg-travertine-400 text-obsidian-900 flex-shrink-0">
            <User size={24} />
          </div>
          <div className="flex-1">
            <div className="flex items-center justify-between">
              <span className="font-serif text-lg text-obsidian-900 font-medium">3. Cliente (Santiago & Clara Beras)</span>
              {role === 'client' && (
                <span className="text-[10px] tracking-architectural uppercase bg-obsidian-900 text-white px-2 py-0.5 font-mono">Activo</span>
              )}
            </div>
            <p className="text-xs text-obsidian-900/70 mt-1 leading-relaxed">
              Portal privado del proyecto *Penthouse Alvear*: visualizador interactivo de renders en alta calidad, aprobación o solicitud de ajustes, muestras de materiales y estado de obra.
            </p>
          </div>
        </button>

        {/* Public Website Card */}
        <button
          onClick={handleSelectPublic}
          className={`flex items-start gap-4 p-4 text-left transition-all border cursor-pointer ${
            role === 'public'
              ? 'border-obsidian-900 bg-travertine-200/80 ring-1 ring-obsidian-900'
              : 'border-obsidian-900/10 hover:border-obsidian-900/40 bg-white/70 hover:bg-white'
          }`}
        >
          <div className="p-3 bg-stone-200 text-obsidian-900 flex-shrink-0">
            <Globe size={24} />
          </div>
          <div className="flex-1">
            <div className="flex items-center justify-between">
              <span className="font-serif text-lg text-obsidian-900 font-medium">Sitio Web Público & Portfolio</span>
              {role === 'public' && (
                <span className="text-[10px] tracking-architectural uppercase bg-obsidian-900 text-white px-2 py-0.5 font-mono">Activo</span>
              )}
            </div>
            <p className="text-xs text-obsidian-900/70 mt-1 leading-relaxed">
              Landing page editorial para visitantes y futuros comitentes: manifiesto espacial, obras seleccionadas, servicios de consultoría y agenda de consulta inicial.
            </p>
          </div>
        </button>
      </div>

      <div className="mt-6 pt-4 hairline-t flex items-center justify-between text-xs text-obsidian-900/60">
        <span>Sesión activa: <strong className="text-obsidian-900 font-medium">{user ? `${user.name} (${user.role})` : 'Visitante Público'}</strong></span>
        <button onClick={onClose} className="hover:text-obsidian-900 uppercase tracking-architectural text-[11px] font-semibold cursor-pointer">
          Cerrar
        </button>
      </div>
    </Modal>
  );
};
