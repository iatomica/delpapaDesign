import { Router } from 'express';
import {
  generateRender,
  saveRenderToProject,
  updateRenderStatus,
  addRenderFeedback,
} from '../controllers/renders.controller.js';

const router = Router();

router.post('/generate', generateRender);
router.post('/project/:projectId', saveRenderToProject);
router.patch('/project/:projectId/:renderId/status', updateRenderStatus);
router.post('/project/:projectId/:renderId/feedback', addRenderFeedback);

export default router;
