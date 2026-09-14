import React, { useState, useEffect } from 'react';
import { Project, StudioStats, ConsultationRequest } from '../../../types/index.js';
import { api } from '../../../services/api.js';
import { Button } from '../../ui/Button.js';
import { Badge } from '../../ui/Badge.js';
import {
  ChartLineUp,
  Buildings,
  CheckCircle,
  CalendarCheck,
  HouseLine,
} from '@phosphor-icons/react';

interface AdminDashboardProps {
  projects: Project[];
  onRefreshProjects: () => void;
}

export const AdminDashboard: React.FC<AdminDashboardProps> = ({ projects, onRefreshProjects }) => {
  const [stats, setStats] = useState<StudioStats | null>(null);
  const [consultations, setConsultations] = useState<ConsultationRequest[]>([]);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      const [statsData, consultationsData] = await Promise.all([
        api.getStudioStats(),
        api.listConsultations(),
      ]);
      setStats(statsData);
      setConsultations(consultationsData);
    } catch (err) {
      console.error('Error cargando datos de admin:', err);
    }
  };

  const handleUpdateConsultationStatus = async (id: string, status: ConsultationRequest['status']) => {
    try {
      await api.createConsultation({ ...consultations.find(c => c.id === id), status });
      const updated = await api.listConsultations();
      setConsultations(updated);
    } catch (err) {
      console.error('Error actualizando consulta:', err);
    }
  };

  return (
    <div className="flex flex-col gap-10">
      {/* Studio Banner */}
      <div className="bg-white p-6 sm:p-8 border border-obsidian-900/10 flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <span className="text-[11px] uppercase tracking-architectural text-terracotta-600 font-semibold font-mono">
            // PANEL DE DIRECCIÓN GENERAL • STEFANIA DEL PAPA
          </span>
          <h2 className="font-serif text-3xl text-obsidian-900 font-normal mt-1">
            Métricas del Estudio & Operaciones
          </h2>
          <p className="text-xs sm:text-sm text-obsidian-900/60 font-light mt-1">
            Supervisión integral de proyectos activos, entregables de diseño, mediciones BOQs y comisiones.
          </p>
        </div>

        <div className="flex items-center gap-3 bg-travertine-100 p-4 border border-obsidian-900/10">
          <div className="p-2.5 bg-obsidian-900 text-bronze-400">
            <Buildings size={24} />
          </div>
          <div className="flex flex-col">
            <span className="text-[10px] uppercase font-mono tracking-wider text-obsidian-900/60">
              Sede Central
            </span>
            <span className="text-xs font-semibold text-obsidian-900">
              Sense Studio • Valencia & Italia
            </span>
            <span className="text-[10px] text-obsidian-900/50 font-mono mt-0.5">
              Estado: Operativo 100%
            </span>
          </div>
        </div>
      </div>

      {/* KPI Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-6 border border-obsidian-900/10 flex flex-col justify-between">
          <span className="text-xs uppercase font-mono text-obsidian-900/50">Proyectos en Curso</span>
          <div className="my-4">
            <span className="font-serif text-4xl text-obsidian-900 font-normal">
              {stats?.activeProjects || projects.length}
            </span>
            <span className="text-xs text-emerald-700 ml-2 font-medium">100% a tiempo</span>
          </div>
          <span className="text-[11px] text-obsidian-900/60 font-light">
            En Brindisi, Matera y Valencia
          </span>
        </div>

        <div className="bg-white p-6 border border-obsidian-900/10 flex flex-col justify-between">
          <span className="text-xs uppercase font-mono text-obsidian-900/50">Renders 3D Entregados</span>
          <div className="my-4">
            <span className="font-serif text-4xl text-bronze-600 font-normal">
              {stats?.rendersDeliveredThisMonth || 24}
            </span>
            <span className="text-xs text-obsidian-900/50 ml-2 font-mono">este mes</span>
          </div>
          <span className="text-[11px] text-obsidian-900/60 font-light">
            Visualizaciones de alta definición
          </span>
        </div>

        <div className="bg-white p-6 border border-obsidian-900/10 flex flex-col justify-between">
          <span className="text-xs uppercase font-mono text-obsidian-900/50">Aprobación de Clientes</span>
          <div className="my-4">
            <span className="font-serif text-4xl text-obsidian-900 font-normal">
              {stats?.clientApprovalRate || '98%'}
            </span>
            <span className="text-xs text-emerald-700 ml-2 font-medium">Excelente</span>
          </div>
          <span className="text-[11px] text-obsidian-900/60 font-light">
            Satisfacción con propuestas espaciales
          </span>
        </div>

        <div className="bg-white p-6 border border-obsidian-900/10 flex flex-col justify-between">
          <span className="text-xs uppercase font-mono text-obsidian-900/50">Conversión de Consultorías</span>
          <div className="my-4">
            <span className="font-serif text-4xl text-obsidian-900 font-normal">
              {stats?.consultationConversionRate || '68%'}
            </span>
            <span className="text-xs text-emerald-700 ml-2 font-medium">+14% vs 2025</span>
          </div>
          <span className="text-[11px] text-obsidian-900/60 font-light">
            {consultations.length} solicitudes registradas
          </span>
        </div>
      </div>

      {/* Projects Overview Table */}
      <div className="bg-white border border-obsidian-900/10 p-6 sm:p-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="font-serif text-2xl text-obsidian-900 font-normal">
              Proyectos en Cartera
            </h3>
            <p className="text-xs text-obsidian-900/60 font-light mt-0.5">
              Estado de ejecución, diseñadora asignada y renders aprobados
            </p>
          </div>
          <span className="text-xs font-mono text-obsidian-900/50 uppercase">
            Total: {projects.length} obras
          </span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse text-xs">
            <thead>
              <tr className="hairline-b bg-travertine-100/60 font-mono text-[11px] text-obsidian-900/70 uppercase">
                <th className="py-3 px-4">Código / Proyecto</th>
                <th className="py-3 px-4">Cliente</th>
                <th className="py-3 px-4">Diseñadora Líder</th>
                <th className="py-3 px-4">Ubicación & M²</th>
                <th className="py-3 px-4">Presupuesto</th>
                <th className="py-3 px-4">Renders</th>
                <th className="py-3 px-4">Fase Actual</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-obsidian-900/5">
              {projects.map(p => (
                <tr key={p.id} className="hover:bg-travertine-50 transition-colors">
                  <td className="py-4 px-4">
                    <span className="font-serif text-sm font-medium text-obsidian-900 block">{p.title}</span>
                    <span className="font-mono text-[10px] text-obsidian-900/50">{p.code}</span>
                  </td>
                  <td className="py-4 px-4 font-light text-obsidian-900/80">{p.clientName}</td>
                  <td className="py-4 px-4 font-medium text-obsidian-900">{p.designerName}</td>
                  <td className="py-4 px-4 text-obsidian-900/70">{p.location} • {p.squareMeters} m²</td>
                  <td className="py-4 px-4 font-mono font-medium text-obsidian-900">{p.budgetEstimated}</td>
                  <td className="py-4 px-4 font-mono">
                    <span className="text-bronze-600 font-semibold">{p.renders.length}</span> renders
                  </td>
                  <td className="py-4 px-4">
                    <span className="inline-block px-2.5 py-1 text-[10px] uppercase font-mono bg-travertine-200 text-obsidian-900">
                      {p.status.replace('_', ' ')}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Consultations Inbox */}
      <div className="bg-white border border-obsidian-900/10 p-6 sm:p-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="font-serif text-2xl text-obsidian-900 font-normal">
              Consultorías Espaciales Recibidas
            </h3>
            <p className="text-xs text-obsidian-900/60 font-light mt-0.5">
              Leads calificados que solicitaron diagnóstico a través de la web
            </p>
          </div>
          <span className="text-xs font-mono text-obsidian-900/50">
            {consultations.length} contactos
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {consultations.map(c => (
            <div key={c.id} className="p-5 border border-obsidian-900/10 bg-travertine-50/50 flex flex-col justify-between">
              <div>
                <div className="flex items-start justify-between">
                  <div>
                    <h4 className="font-serif text-lg text-obsidian-900 font-medium">{c.clientName}</h4>
                    <span className="text-xs text-obsidian-900/60 font-light">{c.email} • {c.phone}</span>
                  </div>
                  <span className={`text-[10px] uppercase font-mono px-2 py-0.5 ${
                    c.status === 'scheduled' ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800'
                  }`}>
                    {c.status}
                  </span>
                </div>

                <div className="my-3 text-xs text-obsidian-900/80 font-light bg-white p-3 border border-obsidian-900/5">
                  <p className="font-medium text-obsidian-900 mb-1">
                    {c.propertyType} // {c.location} ({c.budgetRange})
                  </p>
                  <p className="italic leading-relaxed">"{c.message}"</p>
                </div>
              </div>

              <div className="hairline-t pt-3 flex items-center justify-between text-xs">
                <span className="text-[10px] text-obsidian-900/50 font-mono">
                  Recibido: {new Date(c.createdAt).toLocaleDateString()}
                </span>
                <div className="flex gap-2">
                  <button
                    onClick={() => handleUpdateConsultationStatus(c.id, 'scheduled')}
                    className="px-2.5 py-1 bg-obsidian-900 text-white text-[10px] font-mono uppercase hover:bg-black cursor-pointer"
                  >
                    Marcar Agendado
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
