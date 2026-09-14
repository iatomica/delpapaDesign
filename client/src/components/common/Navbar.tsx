import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext.js';
import { BrandLogo } from './BrandLogo.js';
import { Button } from '../ui/Button.js';
import { RoleSwitcherModal } from './RoleSwitcherModal.js';
import { UserCircle, Sparkle, House, ArrowsLeftRight, SignOut } from '@phosphor-icons/react';

interface NavbarProps {
  onOpenConsultation?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenConsultation }) => {
  const { user, role, activeView, setActiveView, setIsLoginModalOpen, logout } = useAuth();
  const [isSwitcherOpen, setIsSwitcherOpen] = useState(false);

  const getRoleLabel = () => {
    switch (role) {
      case 'admin':
        return 'Admin • Martina Delpapa';
      case 'designer':
        return 'Diseñadora • Elena Varela';
      case 'client':
        return 'Cliente • Beras (Penthouse)';
      default:
        return 'Visitante';
    }
  };

  return (
    <>
      <header className="sticky top-0 z-40 h-[72px] bg-[#FAF8F5]/90 backdrop-blur-md hairline-b px-4 sm:px-8 flex items-center justify-between">
        {/* Brand */}
        <div onClick={() => setActiveView('public')}>
          <BrandLogo size="md" />
        </div>

        {/* Center / Navigation items (Public mode) */}
        {activeView === 'public' ? (
          <nav className="hidden lg:flex items-center gap-8 text-xs uppercase tracking-architectural text-obsidian-900/80 font-medium">
            <a href="#filosofia" className="hover:text-obsidian-900 transition-colors">Filosofía</a>
            <a href="#obras" className="hover:text-obsidian-900 transition-colors">Obras Seleccionadas</a>
            <a href="#consultoria" className="hover:text-obsidian-900 transition-colors">Consultoría</a>
            <a href="#materialidad" className="hover:text-obsidian-900 transition-colors">Materialidad</a>
          </nav>
        ) : (
          <div className="hidden sm:flex items-center gap-2 px-3 py-1 bg-travertine-200 text-obsidian-900 text-xs tracking-architectural font-mono">
            <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
            <span>PORTAL PRIVADO // {role.toUpperCase()}</span>
          </div>
        )}

        {/* Right Actions */}
        <div className="flex items-center gap-3">
          {/* Quick Role Switcher Pill */}
          <button
            onClick={() => setIsSwitcherOpen(true)}
            className="flex items-center gap-2 px-3 py-1.5 bg-travertine-100 hover:bg-travertine-200 border border-obsidian-900/15 text-xs text-obsidian-900 transition-all cursor-pointer select-none"
            title="Cambiar vista de rol (Admin, Diseñadora, Cliente)"
          >
            <ArrowsLeftRight size={14} className="text-bronze-500" />
            <span className="hidden md:inline font-medium text-[11px] uppercase tracking-wider">{getRoleLabel()}</span>
            <span className="md:hidden font-mono uppercase text-[10px]">{role}</span>
          </button>

          {/* Primary View Toggle or Login */}
          {user ? (
            <div className="flex items-center gap-2">
              {activeView === 'public' ? (
                <Button
                  size="sm"
                  variant="primary"
                  onClick={() => setActiveView('portal')}
                  icon={<Sparkle size={14} />}
                >
                  Entrar al Portal
                </Button>
              ) : (
                <Button
                  size="sm"
                  variant="outline-dark"
                  onClick={() => setActiveView('public')}
                  icon={<House size={14} />}
                >
                  Ver Web Pública
                </Button>
              )}

              <button
                onClick={logout}
                className="p-2 text-obsidian-900/60 hover:text-obsidian-900 transition-colors"
                title="Cerrar Sesión"
                aria-label="Cerrar sesión"
              >
                <SignOut size={18} />
              </button>
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <Button
                size="sm"
                variant="outline-dark"
                onClick={() => setIsLoginModalOpen(true)}
                icon={<UserCircle size={16} />}
              >
                Acceso
              </Button>
              {onOpenConsultation && (
                <Button
                  size="sm"
                  variant="bronze"
                  onClick={onOpenConsultation}
                >
                  Agendar Consulta
                </Button>
              )}
            </div>
          )}
        </div>
      </header>

      {/* Switcher Modal */}
      <RoleSwitcherModal
        isOpen={isSwitcherOpen}
        onClose={() => setIsSwitcherOpen(false)}
      />
    </>
  );
};
