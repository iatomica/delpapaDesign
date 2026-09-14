import { SEED_PROJECTS } from '../data/projects.seed.js';
import { Project, RenderSpec, StudioStats } from '../types/index.js';

export class ProjectsService {
  private projects: Project[] = JSON.parse(JSON.stringify(SEED_PROJECTS));
  private deliveredCount = 24;

  public async getAll(): Promise<Project[]> {
    return this.projects;
  }

  public async getById(id: string): Promise<Project | null> {
    return this.projects.find(p => p.id === id) || null;
  }

  public async getByClientEmail(email: string): Promise<Project | null> {
    return this.projects.find(p => p.clientEmail.toLowerCase() === email.toLowerCase()) || this.projects[0];
  }

  public async addRender(projectId: string, render: Omit<RenderSpec, 'id' | 'createdAt'>): Promise<RenderSpec> {
    const project = this.projects.find(p => p.id === projectId);
    const newRender: RenderSpec = {
      ...render,
      id: `rnd_${Date.now()}_${Math.floor(Math.random() * 1000)}`,
      createdAt: new Date().toISOString(),
    };

    if (project) {
      project.renders.unshift(newRender);
    }

    this.deliveredCount++;
    return newRender;
  }

  public async updateRenderStatus(
    projectId: string,
    renderId: string,
    status: RenderSpec['status']
  ): Promise<RenderSpec | null> {
    const project = this.projects.find(p => p.id === projectId);
    if (!project) return null;

    const render = project.renders.find(r => r.id === renderId);
    if (!render) return null;

    render.status = status;
    return render;
  }

  public async addRenderFeedback(
    projectId: string,
    renderId: string,
    author: string,
    comment: string
  ): Promise<RenderSpec | null> {
    const project = this.projects.find(p => p.id === projectId);
    if (!project) return null;

    const render = project.renders.find(r => r.id === renderId);
    if (!render) return null;

    if (!render.feedback) {
      render.feedback = [];
    }

    render.feedback.push({
      author,
      comment,
      date: new Date().toISOString().split('T')[0],
    });

    render.status = 'revision_requested';
    return render;
  }

  public async getStats(): Promise<StudioStats> {
    const totalRenders = this.projects.reduce((acc, p) => acc + p.renders.length, 0);
    const pendingApprovals = this.projects.reduce(
      (acc, p) => acc + p.renders.filter(r => r.status === 'review' || r.status === 'revision_requested').length,
      0
    );

    return {
      activeProjects: this.projects.length,
      totalClients: 12,
      completedProjects: 18,
      rendersDeliveredThisMonth: this.deliveredCount + totalRenders,
      clientApprovalRate: '98%',
      consultationConversionRate: '68%',
      pendingApprovals,
    };
  }
}

export const projectsService = new ProjectsService();
