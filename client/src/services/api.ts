import { Project, RenderSpec, StudioStats, User, UserRole, ConsultationRequest } from '../types/index.js';

const API_BASE = '/api';

export const api = {
  // Auth
  async login(email: string, password: string): Promise<{ user: User; token: string }> {
    const res = await fetch(`${API_BASE}/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });
    const json = await res.json();
    if (!json.success) throw new Error(json.error || 'Error al iniciar sesión');
    return json.data;
  },

  async switchRole(role: UserRole): Promise<{ user: User; token: string }> {
    const res = await fetch(`${API_BASE}/auth/switch-role`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ role }),
    });
    const json = await res.json();
    if (!json.success) throw new Error(json.error || 'Error al cambiar de rol');
    return json.data;
  },

  async listUsers(): Promise<User[]> {
    const res = await fetch(`${API_BASE}/auth/users`);
    const json = await res.json();
    return json.data || [];
  },

  // Projects
  async getProjects(): Promise<Project[]> {
    const res = await fetch(`${API_BASE}/projects`);
    const json = await res.json();
    return json.data || [];
  },

  async getProjectById(id: string): Promise<Project> {
    const res = await fetch(`${API_BASE}/projects/${id}`);
    const json = await res.json();
    if (!json.success) throw new Error(json.error || 'Proyecto no encontrado');
    return json.data;
  },

  async getClientActiveProject(email?: string): Promise<Project> {
    const query = email ? `?email=${encodeURIComponent(email)}` : '';
    const res = await fetch(`${API_BASE}/projects/client-active${query}`);
    const json = await res.json();
    if (!json.success) throw new Error(json.error || 'No se encontró proyecto');
    return json.data;
  },

  // Architectural Renders
  async generateRender(params: {
    spaceType: string;
    style: string;
    materials: string[];
    lighting: string;
    palette?: string;
    aspectRatio?: string;
    notes?: string;
  }): Promise<{
    imageUrl: string;
    spaceType: string;
    style: string;
    materials: string[];
    lighting: string;
  }> {
    const res = await fetch(`${API_BASE}/renders/generate`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(params),
    });
    const json = await res.json();
    if (!json.success) throw new Error(json.error || 'Error generando render');
    return json.data;
  },

  async saveRenderToProject(projectId: string, renderData: Partial<RenderSpec>): Promise<RenderSpec> {
    const res = await fetch(`${API_BASE}/renders/project/${projectId}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(renderData),
    });
    const json = await res.json();
    if (!json.success) throw new Error(json.error || 'Error al guardar render');
    return json.data;
  },

  async updateRenderStatus(projectId: string, renderId: string, status: RenderSpec['status']): Promise<RenderSpec> {
    const res = await fetch(`${API_BASE}/renders/project/${projectId}/${renderId}/status`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ status }),
    });
    const json = await res.json();
    if (!json.success) throw new Error(json.error || 'Error al actualizar estado');
    return json.data;
  },

  async addRenderFeedback(projectId: string, renderId: string, comment: string, author: string): Promise<RenderSpec> {
    const res = await fetch(`${API_BASE}/renders/project/${projectId}/${renderId}/feedback`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ comment, author }),
    });
    const json = await res.json();
    if (!json.success) throw new Error(json.error || 'Error al registrar feedback');
    return json.data;
  },

  // Stats
  async getStudioStats(): Promise<StudioStats> {
    const res = await fetch(`${API_BASE}/stats`);
    const json = await res.json();
    return json.data;
  },

  // Consultations
  async createConsultation(data: Partial<ConsultationRequest>): Promise<ConsultationRequest> {
    const res = await fetch(`${API_BASE}/consultations`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    const json = await res.json();
    if (!json.success) throw new Error(json.error || 'Error al enviar consulta');
    return json.data;
  },

  async listConsultations(): Promise<ConsultationRequest[]> {
    const res = await fetch(`${API_BASE}/consultations`);
    const json = await res.json();
    return json.data || [];
  },
};
