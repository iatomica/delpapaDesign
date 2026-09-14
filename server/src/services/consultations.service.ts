import { SEED_CONSULTATIONS } from '../data/projects.seed.js';
import { ConsultationRequest } from '../types/index.js';

export class ConsultationsService {
  private consultations: ConsultationRequest[] = JSON.parse(JSON.stringify(SEED_CONSULTATIONS));

  public async getAll(): Promise<ConsultationRequest[]> {
    return this.consultations;
  }

  public async create(data: Omit<ConsultationRequest, 'id' | 'createdAt' | 'status'>): Promise<ConsultationRequest> {
    const newRequest: ConsultationRequest = {
      ...data,
      id: `csl_${Date.now()}`,
      status: 'pending',
      createdAt: new Date().toISOString(),
    };
    this.consultations.unshift(newRequest);
    return newRequest;
  }

  public async updateStatus(id: string, status: ConsultationRequest['status']): Promise<ConsultationRequest | null> {
    const item = this.consultations.find(c => c.id === id);
    if (!item) return null;
    item.status = status;
    return item;
  }
}

export const consultationsService = new ConsultationsService();
