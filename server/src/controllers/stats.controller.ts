import { Request, Response } from 'express';
import { projectsService } from '../services/projects.service.js';

export const getStudioStats = async (req: Request, res: Response): Promise<void> => {
  try {
    const stats = await projectsService.getStats();
    res.json({ success: true, data: stats });
  } catch (error: any) {
    res.status(500).json({ success: false, error: error.message });
  }
};
