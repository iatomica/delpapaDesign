import { Request, Response } from 'express';
import { projectsService } from '../services/projects.service.js';

export const getProjects = async (req: Request, res: Response): Promise<void> => {
  try {
    const projects = await projectsService.getAll();
    res.json({ success: true, data: projects });
  } catch (error: any) {
    res.status(500).json({ success: false, error: error.message });
  }
};

export const getProjectById = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const project = await projectsService.getById(id);
    if (!project) {
      res.status(404).json({ success: false, error: 'Proyecto no encontrado' });
      return;
    }
    res.json({ success: true, data: project });
  } catch (error: any) {
    res.status(500).json({ success: false, error: error.message });
  }
};

export const getClientActiveProject = async (req: Request, res: Response): Promise<void> => {
  try {
    const email = (req.query.email as string) || 'client@delpapadesign.com';
    const project = await projectsService.getByClientEmail(email);
    if (!project) {
      res.status(404).json({ success: false, error: 'No se encontró proyecto para este cliente' });
      return;
    }
    res.json({ success: true, data: project });
  } catch (error: any) {
    res.status(500).json({ success: false, error: error.message });
  }
};
