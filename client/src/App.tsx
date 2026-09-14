import React, { useState, useEffect } from 'react';
import { useAuth } from './context/AuthContext.js';
import { Project, RenderSpec } from './types/index.js';
import { api } from './services/api.js';

// Common
import { Navbar } from './components/common/Navbar.js';
import { Footer } from './components/common/Footer.js';

// Public view
import { HeroSection } from './components/public/HeroSection.js';
import { PhilosophySection } from './components/public/PhilosophySection.js';
import { SelectedWorksGallery } from './components/public/SelectedWorksGallery.js';
import { ServicesMatrix } from './components/public/ServicesMatrix.js';
import { ArchitecturalMaterialStrip } from './components/public/ArchitecturalMaterialStrip.js';
import { ConsultationBookingModal } from './components/public/ConsultationBookingModal.js';

// Auth
import { LoginForm } from './components/auth/LoginForm.js';

// Portals
import { PortalLayout } from './components/portal/PortalLayout.js';
import { AdminDashboard } from './components/portal/admin/AdminDashboard.js';
import { RenderStudio } from './components/portal/designer/RenderStudio.js';
import { ClientPortal } from './components/portal/client/ClientPortal.js';

export const App: React.FC = () => {
  const { role, activeView, setActiveView, quickSwitchRole } = useAuth();
  const [projects, setProjects] = useState<Project[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [portalTab, setPortalTab] = useState('main');

  useEffect(() => {
    loadProjects();
  }, []);

  const loadProjects = async () => {
    try {
      const data = await api.getProjects();
      setProjects(data);
    } catch (err) {
      console.error('Error cargando proyectos:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleRenderAdded = (projectId: string, newRender: RenderSpec) => {
    setProjects(prev =>
      prev.map(p => {
        if (p.id === projectId) {
          return {
            ...p,
            renders: [newRender, ...p.renders],
          };
        }
        return p;
      })
    );
  };

  const handleOpenStudio = async () => {
    await quickSwitchRole('designer');
    setActiveView('portal');
  };

  const clientProject = projects[0] || null;

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5]">
      {activeView === 'public' ? (
        <>
          <Navbar onOpenConsultation={() => setIsConsultationOpen(true)} />
          <main className="flex-1">
            <HeroSection
              onOpenConsultation={() => setIsConsultationOpen(true)}
              onOpenStudio={handleOpenStudio}
            />
            <PhilosophySection />
            <SelectedWorksGallery projects={projects} />
            <ServicesMatrix onOpenConsultation={() => setIsConsultationOpen(true)} />
            <ArchitecturalMaterialStrip />
          </main>
          <Footer />

          <ConsultationBookingModal
            isOpen={isConsultationOpen}
            onClose={() => setIsConsultationOpen(false)}
          />
        </>
      ) : (
        /* Portal View */
        <PortalLayout
          activeTab={portalTab}
          setActiveTab={setPortalTab}
          tabs={
            role === 'admin'
              ? [
                  { id: 'main', label: 'Panel de Dirección' },
                  { id: 'projects', label: 'Proyectos & Obras' },
                ]
              : role === 'designer'
              ? [
                  { id: 'main', label: 'Estudio de Renders' },
                  { id: 'proposals', label: 'Entregas & Planos' },
                ]
              : [
                  { id: 'main', label: 'Mi Proyecto (Penthouse Alvear)' },
                  { id: 'renders', label: 'Renders 3D & Feedback' },
                ]
          }
        >
          {role === 'admin' && (
            <AdminDashboard
              projects={projects}
              onRefreshProjects={loadProjects}
            />
          )}

          {role === 'designer' && (
            <RenderStudio
              projects={projects}
              onRenderAdded={handleRenderAdded}
            />
          )}

          {role === 'client' && clientProject && (
            <ClientPortal
              project={clientProject}
              onRefreshProject={loadProjects}
            />
          )}
        </PortalLayout>
      )}

      {/* Global Auth Modal */}
      <LoginForm />
    </div>
  );
};
