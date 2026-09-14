import { Router } from 'express';
import { getProjects, getProjectById, getClientActiveProject } from '../controllers/projects.controller.js';

const router = Router();

router.get('/', getProjects);
router.get('/client-active', getClientActiveProject);
router.get('/:id', getProjectById);

export default router;
