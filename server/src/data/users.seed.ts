import { User } from '../types/index.js';

export const SEED_USERS: (User & { passwordHash: string })[] = [
  {
    id: 'usr_admin_01',
    name: 'Martina Delpapa',
    email: 'admin@delpapadesign.com',
    role: 'admin',
    title: 'Founder & Principal Architect',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80',
    passwordHash: 'admin123',
  },
  {
    id: 'usr_designer_01',
    name: 'Elena Varela',
    email: 'designer@delpapadesign.com',
    role: 'designer',
    title: 'Senior Interior Architect & 3D Lead',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80',
    passwordHash: 'design123',
  },
  {
    id: 'usr_client_01',
    name: 'Santiago & Clara Beras',
    email: 'client@delpapadesign.com',
    role: 'client',
    title: 'Propietarios - Penthouse Alvear',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80',
    activeProjectId: 'proj_alvear_01',
    passwordHash: 'client123',
  },
];
