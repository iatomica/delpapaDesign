import { Request, Response } from 'express';
import { visualizationService } from '../services/visualization.service.js';
import { projectsService } from '../services/projects.service.js';

export const generateRender = async (req: Request, res: Response): Promise<void> => {
  try {
    const { spaceType, style, materials, lighting, aspectRatio, notes } = req.body;

    if (!spaceType || !style) {
      res.status(400).json({ success: false, error: 'spaceType y style son obligatorios' });
      return;
    }

    const result = await visualizationService.getRenderProposal({
      spaceType,
      style,
      materials: materials || [],
      lighting: lighting || 'natural_morning',
      aspectRatio: aspectRatio || '16:9',
      notes,
    });

    res.json({
      success: true,
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({ success: false, error: error.message });
  }
};

export const saveRenderToProject = async (req: Request, res: Response): Promise<void> => {
  try {
    const { projectId } = req.params;
    const renderData = req.body;

    if (!projectId || !renderData.imageUrl) {
      res.status(400).json({ success: false, error: 'projectId y datos de render son requeridos' });
      return;
    }

    const saved = await projectsService.addRender(projectId, renderData);
    res.json({
      success: true,
      data: saved,
    });
  } catch (error: any) {
    res.status(500).json({ success: false, error: error.message });
  }
};

export const updateRenderStatus = async (req: Request, res: Response): Promise<void> => {
  try {
    const { projectId, renderId } = req.params;
    const { status } = req.body;

    if (!status) {
      res.status(400).json({ success: false, error: 'Nuevo estado requerido' });
      return;
    }

    const updated = await projectsService.updateRenderStatus(projectId, renderId, status);
    if (!updated) {
      res.status(404).json({ success: false, error: 'Proyecto o render no encontrado' });
      return;
    }

    res.json({ success: true, data: updated });
  } catch (error: any) {
    res.status(500).json({ success: false, error: error.message });
  }
};

export const addRenderFeedback = async (req: Request, res: Response): Promise<void> => {
  try {
    const { projectId, renderId } = req.params;
    const { author, comment } = req.body;

    if (!comment) {
      res.status(400).json({ success: false, error: 'Comentario requerido' });
      return;
    }

    const updated = await projectsService.addRenderFeedback(projectId, renderId, author || 'Cliente', comment);
    if (!updated) {
      res.status(404).json({ success: false, error: 'Proyecto o render no encontrado' });
      return;
    }

    res.json({ success: true, data: updated });
  } catch (error: any) {
    res.status(500).json({ success: false, error: error.message });
  }
};
