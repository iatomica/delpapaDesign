import { Router } from 'express';
import {
  listConsultations,
  createConsultation,
  updateConsultationStatus,
} from '../controllers/consultations.controller.js';

const router = Router();

router.get('/', listConsultations);
router.post('/', createConsultation);
router.patch('/:id/status', updateConsultationStatus);

export default router;
