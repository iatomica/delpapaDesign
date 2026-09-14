import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext.js';
import { BrandLogo } from '../common/BrandLogo.js';
import { Button } from '../ui/Button.js';
import { RoleSwitcherModal } from '../common/RoleSwitcherModal.js';
import {
  UserGear,
  CompassTool,
  User,
  ArrowsLeftRight,
  SignOut,
  House,
  Sparkle,
} from '@phosphor-icons/react';

interface PortalLayoutProps {
  children: React.ReactNode;
  activeTab: string;
  setActiveTab: (tab: string) => void;
  tabs: { id: string; label: string; icon?: React.ReactNode }[];
}

export const PortalLayout: React.FC<PortalLayoutProps> = ({
  children,
  activeTab,
  setActiveTab,
  tabs,
}) => {
  const { user, role, setActiveView, logout } = useAuth();
  const [isSwitcherOpen, setIsSwitcherOpen] = useState(false);

  const getRoleIcon = () => {
    switch (role) {
      case 'admin':
        return <UserGear size={20} className="text-white" />;
      case 'designer':
        return <CompassTool size={20} className="text-white" />;
      case 'client':
        return <User size={20} className="text-white" />;
      default:
        return null;
    }
  };

  const getRoleBadgeColor = () => {
    switch (role) {
      case 'admin':
        return 'bg-obsidian-900 text-white';
      case 'designer':
        return 'bg-bronze-500 text-white';
      case 'client':
        return 'bg-stone-800 text-white';
      default:
        return 'bg-stone-200 text-black';
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5]">
      {/* Portal Top Bar */}
      <header className="sticky top-0 z-40 h-[68px] bg-white border-b border-obsidian-900/10 px-4 sm:px-8 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <div onClick={() => setActiveView('public')} className="cursor-pointer">
            <BrandLogo size="sm" />
          </div>

          <div className="hidden md:flex items-center gap-2 pl-4 border-l border-obsidian-900/10">
            <span className={`flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-widest px-2.5 py-1 ${getRoleBadgeColor()}`}>
              {getRoleIcon()}
              <span>PORTAL {role.toUpperCase()}</span>
            </span>
            <span className="text-xs text-obsidian-900/60 font-medium">
              {user?.name} {user?.title ? `— ${user.title}` : ''}
            </span>
          </div>
        </div>

        {/* Top actions */}
        <div className="flex items-center gap-3">
          {/* Fast Switch Role Button */}
          <button
            onClick={() => setIsSwitcherOpen(true)}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-travertine-100 hover:bg-travertine-200 border border-obsidian-900/15 text-xs text-obsidian-900 transition-colors"
            title="Cambiar a vista de otro usuario"
          >
            <ArrowsLeftRight size={14} className="text-bronze-500" />
            <span className="text-[11px] font-mono uppercase">Cambiar Perfil</span>
          </button>

          <Button
            size="sm"
            variant="outline-dark"
            onClick={() => setActiveView('public')}
            icon={<House size={15} />}
          >
            <span className="hidden sm:inline">Web Pública</span>
          </Button>

          <button
            onClick={logout}
            className="p-2 text-obsidian-900/60 hover:text-obsidian-900 transition-colors"
            title="Cerrar sesión"
            aria-label="Cerrar sesión"
          >
            <SignOut size={18} />
          </button>
        </div>
      </header>

      {/* Navigation Sub-Tabs */}
      <div className="bg-travertine-100 hairline-b px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex items-center gap-1 overflow-x-auto py-1">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-4 py-2.5 text-xs uppercase tracking-architectural font-medium transition-all whitespace-nowrap cursor-pointer ${
                activeTab === tab.id
                  ? 'bg-white text-obsidian-900 border-t-2 border-bronze-500 shadow-sm'
                  : 'text-obsidian-900/60 hover:text-obsidian-900 hover:bg-white/40'
              }`}
            >
              {tab.icon && <span>{tab.icon}</span>}
              <span>{tab.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Portal Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto p-4 sm:p-8">
        {children}
      </main>

      <RoleSwitcherModal
        isOpen={isSwitcherOpen}
        onClose={() => setIsSwitcherOpen(false)}
      />
    </div>
  );
};
