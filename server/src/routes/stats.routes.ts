import { Router } from 'express';
import { getStudioStats } from '../controllers/stats.controller.js';

const router = Router();

router.get('/', getStudioStats);

export default router;
