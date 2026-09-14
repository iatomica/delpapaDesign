import { Request, Response } from 'express';
import { consultationsService } from '../services/consultations.service.js';

export const listConsultations = async (req: Request, res: Response): Promise<void> => {
  try {
    const data = await consultationsService.getAll();
    res.json({ success: true, data });
  } catch (error: any) {
    res.status(500).json({ success: false, error: error.message });
  }
};

export const createConsultation = async (req: Request, res: Response): Promise<void> => {
  try {
    const { clientName, email, phone, propertyType, location, budgetRange, message, preferredDate } = req.body;

    if (!clientName || !email) {
      res.status(400).json({ success: false, error: 'Nombre y correo electrónico son requeridos' });
      return;
    }

    const created = await consultationsService.create({
      clientName,
      email,
      phone: phone || '',
      propertyType: propertyType || 'Residencial de Lujo',
      location: location || '',
      budgetRange: budgetRange || 'A convenir',
      message: message || '',
      preferredDate,
    });

    res.status(201).json({ success: true, data: created });
  } catch (error: any) {
    res.status(500).json({ success: false, error: error.message });
  }
};

export const updateConsultationStatus = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    const updated = await consultationsService.updateStatus(id, status);
    if (!updated) {
      res.status(404).json({ success: false, error: 'Consulta no encontrada' });
      return;
    }

    res.json({ success: true, data: updated });
  } catch (error: any) {
    res.status(500).json({ success: false, error: error.message });
  }
};
