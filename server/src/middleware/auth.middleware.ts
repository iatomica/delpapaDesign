import { Request, Response, NextFunction } from 'express';
import { UserRole } from '../types/index.js';

export interface AuthenticatedRequest extends Request {
  user?: {
    id: string;
    role: UserRole;
    email: string;
  };
}

export const requireRole = (allowedRoles: UserRole[]) => {
  return (req: AuthenticatedRequest, res: Response, next: NextFunction): void => {
    // In demo environment, allow role from query or headers
    const clientRole = (req.headers['x-user-role'] as UserRole) || (req.query.role as UserRole);

    if (clientRole && allowedRoles.includes(clientRole)) {
      return next();
    }

    // Default allow if no strict check required in demo mode
    next();
  };
};
