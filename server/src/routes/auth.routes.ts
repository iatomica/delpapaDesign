import { Router } from 'express';
import { login, switchRole, getCurrentUser, listUsers } from '../controllers/auth.controller.js';

const router = Router();

router.post('/login', login);
router.post('/switch-role', switchRole);
router.get('/current-user', getCurrentUser);
router.get('/users', listUsers);

export default router;
