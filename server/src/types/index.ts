export type UserRole = 'admin' | 'designer' | 'client';

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  avatar?: string;
  title?: string;
  activeProjectId?: string;
}

export interface RenderSpec {
  id: string;
  projectId: string;
  title: string;
  spaceType:
    | 'living'
    | 'kitchen'
    | 'master_bedroom'
    | 'bedroom'
    | 'dressing_room'
    | 'bathroom'
    | 'terrace'
    | 'outdoor'
    | 'workspace'
    | 'office'
    | 'commercial'
    | 'facade'
    | 'technical_plan';
  style:
    | 'japandi'
    | 'warm_minimalism'
    | 'brutalist_luxury'
    | 'contemporary_european'
    | 'wabi_sabi'
    | 'neoclassic_modern'
    | 'mediterranean_luxury'
    | 'quiet_luxury'
    | 'biophilic_cave_luxury'
    | 'sustainable_brutalist'
    | 'architectural_drawing';
  materials: string[];
  lighting:
    | 'natural_morning'
    | 'golden_hour'
    | 'warm_architectural_2700k'
    | 'dramatic_chiaroscuro'
    | 'soft_diffuse'
    | 'natural_noon_3000k'
    | 'rasante_indirecta'
    | 'neutral_daylight'
    | 'night_architectural';
  palette: string;
  prompt?: string;
  imageUrl: string;
  aspectRatio: '16:9' | '4:3' | '1:1' | '9:16';
  status: 'draft' | 'review' | 'approved' | 'revision_requested';
  createdAt: string;
  createdBy: string;
  feedback?: {
    author: string;
    comment: string;
    date: string;
  }[];
}

export interface ProjectMilestone {
  id: string;
  title: string;
  status: 'completed' | 'in_progress' | 'pending';
  dueDate: string;
  deliverables?: string[];
}

export interface Project {
  id: string;
  code: string;
  title: string;
  clientName: string;
  clientEmail: string;
  designerName: string;
  designerId: string;
  location: string;
  squareMeters: number;
  budgetEstimated: string;
  status: 'concept' | '3d_renders' | 'material_selection' | 'execution' | 'delivered';
  coverImage: string;
  description: string;
  milestones: ProjectMilestone[];
  renders: RenderSpec[];
  materialsCatalog: {
    name: string;
    category: 'stone' | 'wood' | 'metal' | 'textile' | 'plaster' | 'glass';
    finish: string;
    supplier: string;
    sampleUrl: string;
  }[];
  createdAt: string;
}

export interface ConsultationRequest {
  id: string;
  clientName: string;
  email: string;
  phone: string;
  propertyType: string;
  location: string;
  budgetRange: string;
  message: string;
  status: 'pending' | 'contacted' | 'scheduled' | 'closed';
  preferredDate?: string;
  createdAt: string;
}

export interface StudioStats {
  activeProjects: number;
  totalClients: number;
  completedProjects: number;
  rendersDeliveredThisMonth: number;
  clientApprovalRate: string;
  consultationConversionRate: string;
  pendingApprovals: number;
}
