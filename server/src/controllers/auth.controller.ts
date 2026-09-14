import { Request, Response } from 'express';
import { authService } from '../services/auth.service.js';
import { UserRole } from '../types/index.js';

export const login = async (req: Request, res: Response): Promise<void> => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      res.status(400).json({ success: false, error: 'Email y contraseña requeridos' });
      return;
    }

    const result = await authService.login(email, password);
    if (!result) {
      res.status(401).json({ success: false, error: 'Credenciales inválidas. Revisa usuario y contraseña.' });
      return;
    }

    res.json({
      success: true,
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({ success: false, error: error.message });
  }
};

export const switchRole = async (req: Request, res: Response): Promise<void> => {
  try {
    const { role } = req.body as { role: UserRole };
    if (!role || !['admin', 'designer', 'client'].includes(role)) {
      res.status(400).json({ success: false, error: 'Rol no válido' });
      return;
    }

    const user = await authService.getQuickRoleUser(role);
    res.json({
      success: true,
      data: {
        user,
        token: `dp_token_quick_${role}_${Date.now()}`,
      },
    });
  } catch (error: any) {
    res.status(500).json({ success: false, error: error.message });
  }
};

export const getCurrentUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const userId = req.query.id as string;
    if (!userId) {
      const defaultUser = await authService.getQuickRoleUser('admin');
      res.json({ success: true, data: defaultUser });
      return;
    }

    const user = await authService.getUserById(userId);
    if (!user) {
      res.status(404).json({ success: false, error: 'Usuario no encontrado' });
      return;
    }

    res.json({ success: true, data: user });
  } catch (error: any) {
    res.status(500).json({ success: false, error: error.message });
  }
};

export const listUsers = async (req: Request, res: Response): Promise<void> => {
  try {
    const users = await authService.getAllUsers();
    res.json({ success: true, data: users });
  } catch (error: any) {
    res.status(500).json({ success: false, error: error.message });
  }
};
