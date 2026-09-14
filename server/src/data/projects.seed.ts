import { Project, ConsultationRequest } from '../types/index.js';

export const SEED_PROJECTS: Project[] = [
  {
    id: 'proj_alvear_01',
    code: 'DP-2026-ALV',
    title: 'Penthouse Alvear',
    clientName: 'Santiago & Clara Beras',
    clientEmail: 'client@delpapadesign.com',
    designerName: 'Elena Varela',
    designerId: 'usr_designer_01',
    location: 'Avenida Alvear, Recoleta',
    squareMeters: 380,
    budgetEstimated: '$240,000 USD',
    status: '3d_renders',
    coverImage: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=85',
    description: 'Reconversión integral de piso señorial francés en un santuario contemporáneo de líneas puras, mármol travertino romano y roble ahumado con luz cenital rasante.',
    milestones: [
      { id: 'm1', title: 'Análisis Espacial & Briefing Estructural', status: 'completed', dueDate: '15 Feb 2026' },
      { id: 'm2', title: 'Moodboard & Paleta de Materiales Primarios', status: 'completed', dueDate: '28 Feb 2026' },
      { id: 'm3', title: 'Renders Fotorrealistas 3D (Estudio Delpapa)', status: 'in_progress', dueDate: '20 Mar 2026' },
      { id: 'm4', title: 'Selección de Mobiliario de Autor & Luminotecnia', status: 'pending', dueDate: '10 Abr 2026' },
      { id: 'm5', title: 'Dirección de Obra & Montaje Final', status: 'pending', dueDate: '30 Jun 2026' },
    ],
    renders: [
      {
        id: 'rnd_01',
        projectId: 'proj_alvear_01',
        title: 'Gran Salón Principal - Travertino y Roble',
        spaceType: 'living',
        style: 'warm_minimalism',
        materials: ['Mármol Travertino Navona', 'Roble Europeo Ahumado', 'Lino Natural Belga', 'Bronce Cepillado'],
        lighting: 'natural_morning',
        palette: 'Crudo, Roble Tostado, Acento Bronce',
        imageUrl: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=85',
        aspectRatio: '16:9',
        status: 'approved',
        createdAt: '2026-03-02T14:30:00Z',
        createdBy: 'Elena Varela',
        feedback: [
          { author: 'Clara Beras', comment: 'La textura del travertino y la entrada de luz matutina quedaron espectaculares. Aprobado.', date: '2026-03-03' }
        ]
      },
      {
        id: 'rnd_02',
        projectId: 'proj_alvear_01',
        title: 'Cocina Monolítica & Bar de Degustación',
        spaceType: 'kitchen',
        style: 'brutalist_luxury',
        materials: ['Piedra Piasentina', 'Acero Inoxidable Mate', 'Nogal Canaletto'],
        lighting: 'warm_architectural_2700k',
        palette: 'Gris Carbón, Nogal y Acero Cepillado',
        imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=85',
        aspectRatio: '16:9',
        status: 'review',
        createdAt: '2026-03-05T18:00:00Z',
        createdBy: 'Elena Varela',
        feedback: [
          { author: 'Santiago Beras', comment: '¿Podríamos visualizar cómo se vería si la isla tuviese una esquina en voladizo para banquetas?', date: '2026-03-06' }
        ]
      },
      {
        id: 'rnd_03',
        projectId: 'proj_alvear_01',
        title: 'Master Suite & Espacio de Lectura',
        spaceType: 'master_bedroom',
        style: 'japandi',
        materials: ['Estuco de Cal Natural', 'Madera de Hinoki', 'Lana Bouclé'],
        lighting: 'golden_hour',
        palette: 'Lino Cálido, Tierra Seca, Marfil',
        imageUrl: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1600&q=85',
        aspectRatio: '16:9',
        status: 'draft',
        createdAt: '2026-03-08T11:15:00Z',
        createdBy: 'Elena Varela',
      }
    ],
    materialsCatalog: [
      { name: 'Travertino Romano Navona', category: 'stone', finish: 'Apomazado al agua sin poro', supplier: 'Marmolería Ragno Italia', sampleUrl: 'https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=400&q=80' },
      { name: 'Roble Europeo Seleccionado', category: 'wood', finish: 'Aceite vegetal mate 5%', supplier: 'Timber Atelier', sampleUrl: 'https://images.unsplash.com/photo-1546484396-fb3fc6f95f98?auto=format&fit=crop&w=400&q=80' },
      { name: 'Bronce Envejecido a Mano', category: 'metal', finish: 'Patina encerada custom', supplier: 'Ferronnerie Delpapa', sampleUrl: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=400&q=80' },
      { name: 'Lino Lavado Puro 580g', category: 'textile', finish: 'Textura orgánica cruda', supplier: 'Maison D’Artisans', sampleUrl: 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=400&q=80' }
    ],
    createdAt: '2026-02-10T10:00:00Z'
  },
  {
    id: 'proj_costa_02',
    code: 'DP-2026-PIE',
    title: 'Villa Las Piedras',
    clientName: 'Rodrigo & Valentina Peixoto',
    clientEmail: 'peixoto@estates.com',
    designerName: 'Elena Varela',
    designerId: 'usr_designer_01',
    location: 'La Barra, Punta del Este',
    squareMeters: 520,
    budgetEstimated: '$450,000 USD',
    status: 'material_selection',
    coverImage: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=85',
    description: 'Residencia costera en roca y hormigón visto. Conexión visual perimetral con las dunas y vegetación autóctona mediante paños vidriados continuos.',
    milestones: [
      { id: 'm1', title: 'Anteproyecto & Estudio Bioclimático', status: 'completed', dueDate: '10 Ene 2026' },
      { id: 'm2', title: 'Simulación 3D de Luz y Viento (Estudio Delpapa)', status: 'completed', dueDate: '15 Feb 2026' },
      { id: 'm3', title: 'Muestreo de Materiales In Situ', status: 'in_progress', dueDate: '25 Mar 2026' },
      { id: 'm4', title: 'Ejecución de Carpinterías Ocultas', status: 'pending', dueDate: '15 May 2026' },
    ],
    renders: [
      {
        id: 'rnd_04',
        projectId: 'proj_costa_02',
        title: 'Galería Semicubierta y Espejo de Agua',
        spaceType: 'terrace',
        style: 'wabi_sabi',
        materials: ['Hormigón Visto Encofrado en Pino', 'Piedra de Cantera Local', 'Lapacho'],
        lighting: 'soft_diffuse',
        palette: 'Gris Cemento, Arena Húmeda, Madera Salinizada',
        imageUrl: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=85',
        aspectRatio: '16:9',
        status: 'approved',
        createdAt: '2026-02-14T16:00:00Z',
        createdBy: 'Elena Varela',
      }
    ],
    materialsCatalog: [],
    createdAt: '2026-01-05T09:00:00Z'
  },
  {
    id: 'proj_palermo_03',
    code: 'DP-2026-MAN',
    title: 'Atelier Mansilla',
    clientName: 'Familia Von Benckendorff',
    clientEmail: 'benckendorff@collectors.de',
    designerName: 'Martina Delpapa',
    designerId: 'usr_admin_01',
    location: 'Palermo Chico, Buenos Aires',
    squareMeters: 290,
    budgetEstimated: '$185,000 USD',
    status: 'concept',
    coverImage: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1600&q=85',
    description: 'Espacio residencial curado para coleccionismo de arte contemporáneo con iluminación museográfica oculta y envolventes monolíticas de microcemento marfil.',
    milestones: [
      { id: 'm1', title: 'Curaduría de Colección & Guion Espacial', status: 'in_progress', dueDate: '30 Mar 2026' },
      { id: 'm2', title: 'Generación de Variaciones Lumínicas 3D', status: 'pending', dueDate: '15 Abr 2026' },
    ],
    renders: [],
    materialsCatalog: [],
    createdAt: '2026-02-25T15:00:00Z'
  }
];

export const SEED_CONSULTATIONS: ConsultationRequest[] = [
  {
    id: 'csl_01',
    clientName: 'Lucía Méndez Casares',
    email: 'lucia.mendez@casares.com',
    phone: '+54 11 4455-8900',
    propertyType: 'Piso residencial en torre histórica',
    location: 'Barrio Norte, CABA',
    budgetRange: '$100k - $200k USD',
    message: 'Buscamos rediseñar completamente el área social de 160m² incorporando una cava de vinos climatizada en vidrio bronce y revestimientos continuos en piedra.',
    status: 'scheduled',
    preferredDate: '2026-03-24',
    createdAt: '2026-03-10T12:00:00Z'
  },
  {
    id: 'csl_02',
    clientName: 'Ignacio Larreta',
    email: 'larreta@holding.com.ar',
    phone: '+54 11 6788-1234',
    propertyType: 'Oficinas corporativas boutique / Private Family Office',
    location: 'Puerto Madero',
    budgetRange: '$250k+ USD',
    message: 'Proyecto de arquitectura interior para sede de 320m2 con salas de directorio silenciosas y acabados de nogal natural.',
    status: 'pending',
    createdAt: '2026-03-12T09:30:00Z'
  }
];
