import { User } from '../types/index.js';

export const SEED_USERS: (User & { passwordHash: string })[] = [
  {
    id: 'usr_admin_01',
    name: 'Stefania Del Papa',
    email: 'admin@delpapadesign.com',
    role: 'admin',
    title: 'Founder & Creative Director // Sense Studio',
    avatar: '/assets/portfolio/brand/p01_img00_x47_696x899.webp',
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
    name: 'Comitente Aurea Hospitality',
    email: 'client@delpapadesign.com',
    role: 'client',
    title: 'Comitente Obra Masseria Contemporánea',
    avatar: '/assets/portfolio/project-01-masseria/p06_img00_x275_1730x1297.webp',
    activeProjectId: 'proj_masseria_01',
    passwordHash: 'client123',
  },
];
