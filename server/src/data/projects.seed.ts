import { Project, ConsultationRequest } from '../types/index.js';

export const SEED_PROJECTS: Project[] = [
  {
    id: 'proj_masseria_01',
    code: 'SDP-2025-MAS',
    title: 'Hospitality & Resort: Masseria Contemporánea',
    clientName: 'Aurea Hospitality & Comitente Privado',
    clientEmail: 'client@delpapadesign.com',
    designerName: 'Stefania Del Papa',
    designerId: 'usr_stefania_01',
    location: 'Brindisi, Puglia, Italia',
    squareMeters: 850,
    budgetEstimated: '€480,000 EUR',
    status: '3d_renders',
    coverImage: '/assets/portfolio/project-01-masseria/p07_img00_x290_3300x2475.webp',
    description: 'Relectura contemporánea de la masseria tradicional pugliese, articulando dos programas independientes: sector gastronómico biofílico con pérgolas de cañizo y solado en piedra clara, y sector residencial boutique de suites con panelados alistonados y baños exentos. Patio exterior con solárium en piedra abujardada, piscina de líneas puras y spa privado.',
    milestones: [
      { id: 'm1', title: 'Relevamiento Topográfico & Memoria de Masseria', status: 'completed', dueDate: '15 Ene 2025' },
      { id: 'm2', title: 'Moodboard Táctil & Selección Matérica', status: 'completed', dueDate: '10 Feb 2025' },
      { id: 'm3', title: 'Renders Fotorrealistas 3D & Simulación Solar', status: 'in_progress', dueDate: '25 Mar 2025' },
      { id: 'm4', title: 'Documentación Ejecutiva & Mediciones (BOQs)', status: 'pending', dueDate: '15 May 2025' },
      { id: 'm5', title: 'Pérgolas Bioclimáticas & Montaje Final', status: 'pending', dueDate: '30 Jul 2025' },
    ],
    renders: [
      {
        id: 'rnd_mas_01',
        projectId: 'proj_masseria_01',
        title: 'Solárium de Piedra Abujardada & Piscina de Líneas Puras',
        spaceType: 'outdoor',
        style: 'mediterranean_luxury',
        materials: ['Piedra Seca Local', 'Estuco de Cal Natural', 'Roble Natural', 'Cañizo'],
        lighting: 'natural_noon_3000k',
        palette: 'Toba Clara, Blanco Cal, Roble Dorado',
        imageUrl: '/assets/portfolio/project-01-masseria/p07_img00_x290_3300x2475.webp',
        aspectRatio: '16:9',
        status: 'approved',
        createdAt: '2025-02-20T14:30:00Z',
        createdBy: 'Stefania Del Papa',
        feedback: [
          { author: 'Comitente Aurea', comment: 'La pureza de la piscina contra el estuco blanco y la textura de la piedra es exactamente la serenidad que buscábamos.', date: '2025-02-22' }
        ]
      },
      {
        id: 'rnd_mas_02',
        projectId: 'proj_masseria_01',
        title: 'Terraza Gastronómica - Oasis Mediterráneo al Aire Libre',
        spaceType: 'terrace',
        style: 'mediterranean_luxury',
        materials: ['Travertino Apomazado', 'Pérgola de Madera y Cañizo', 'Cortinados Etéreos', 'Terracota'],
        lighting: 'golden_hour',
        palette: 'Lino Neutro, Arena Cálida, Olivo Natural',
        imageUrl: '/assets/portfolio/project-01-masseria/p06_img00_x275_1730x1297.webp',
        aspectRatio: '16:9',
        status: 'approved',
        createdAt: '2025-02-25T17:00:00Z',
        createdBy: 'Stefania Del Papa',
        feedback: [
          { author: 'Comitente Aurea', comment: 'Las mesas circulares con bases cilíndricas y las jardineras perimetrales crean una circulación perfecta.', date: '2025-02-27' }
        ]
      },
      {
        id: 'rnd_mas_03',
        projectId: 'proj_masseria_01',
        title: 'Suites Hospitality & Galería de Reposo',
        spaceType: 'master_bedroom',
        style: 'warm_minimalism',
        materials: ['Panelado Alistonado', 'Celosía de Esterilla', 'Bañera Exenta'],
        lighting: 'warm_architectural_2700k',
        palette: 'Roble Aceitado, Estuco Neutro',
        imageUrl: '/assets/portfolio/project-01-masseria/p09_img01_x307_2250x1267.webp',
        aspectRatio: '16:9',
        status: 'review',
        createdAt: '2025-03-01T11:15:00Z',
        createdBy: 'Stefania Del Papa',
        feedback: [
          { author: 'Comitente Aurea', comment: 'Revisando la altura de los cortinados para maximizar el paso de la brisa marina.', date: '2025-03-03' }
        ]
      },
      {
        id: 'rnd_mas_04',
        projectId: 'proj_masseria_01',
        title: 'Plano Técnico Master: Zonificación Gastronomía & Hospitality',
        spaceType: 'technical_plan',
        style: 'architectural_drawing',
        materials: ['Documentación Técnica de Distribución', 'Zonificación de Flujos'],
        lighting: 'neutral_daylight',
        palette: 'Planos Técnicos Cad / 3D',
        imageUrl: '/assets/portfolio/project-01-masseria/p10_img00_x320_948x2813.webp',
        aspectRatio: '16:9',
        status: 'approved',
        createdAt: '2025-03-05T09:00:00Z',
        createdBy: 'Stefania Del Papa'
      }
    ],
    materialsCatalog: [
      { name: 'Piedra Seca Tradicional de Puglia', category: 'stone', finish: 'Corte rústico y abujardado manual', supplier: 'Canteras de Brindisi', sampleUrl: '/assets/portfolio/project-03-hotel-aurea/p22_img02_x401_397x402.webp' },
      { name: 'Roble Natural de Poro Abierto', category: 'wood', finish: 'Aceite vegetal mate 5%', supplier: 'Sense Studio Bespoke Millwork', sampleUrl: '/assets/portfolio/project-02-residencia/p14_img05_x401_397x402.webp' },
      { name: 'Estuco Mineral a la Cal Tradicional', category: 'plaster', finish: 'Aplicación a llana con pigmento natural', supplier: 'Calce Lucana', sampleUrl: '/assets/portfolio/project-03-hotel-aurea/p22_img04_x573_279x342.webp' },
      { name: 'Fibras Vegetales & Cañizo de Sombra', category: 'textile', finish: 'Esterilla trenzada y lino puro', supplier: 'Atelier Textil Mediterráneo', sampleUrl: '/assets/portfolio/project-02-residencia/p14_img09_x423_433x533.webp' }
    ],
    createdAt: '2025-01-10T09:00:00Z'
  },
  {
    id: 'proj_residencia_02',
    code: 'SDP-2025-RES',
    title: 'Residencia Privada: Interiorismo y Mobiliario a Medida',
    clientName: 'Familia Valenti',
    clientEmail: 'valenti@private.it',
    designerName: 'Stefania Del Papa',
    designerId: 'usr_stefania_01',
    location: 'Brindisi, Italia',
    squareMeters: 320,
    budgetEstimated: '€290,000 EUR',
    status: '3d_renders',
    coverImage: '/assets/portfolio/project-02-residencia/p12_img00_x378_2389x1346.webp',
    description: 'Equilibrio de elegancia atemporal y funcionalidad contemporánea para crear un refugio de calma y sofisticación. Espacios continuos bajo un solado unificador de roble claro, cerramientos de vidrio estriado con arcos sutiles que conectan la cocina con isla de mármol y el comedor. En el estar, molduras contemporáneas tipo boiserie, sofá curvo en terciopelo verde bosque, vestidor retroiluminado y chimenea integrada.',
    milestones: [
      { id: 'm1', title: 'Concepto Espacial & Zonificación Fluida', status: 'completed', dueDate: '05 Feb 2025' },
      { id: 'm2', title: 'Diseño de Carpinterías & Divisorias Acristaladas', status: 'completed', dueDate: '28 Feb 2025' },
      { id: 'm3', title: 'Renders Fotorrealistas & Estudio de Iluminación 2700K', status: 'in_progress', dueDate: '20 Mar 2025' },
      { id: 'm4', title: 'Desarrollo de Mobiliario a Medida & BOQ', status: 'pending', dueDate: '15 Abr 2025' }
    ],
    renders: [
      {
        id: 'rnd_res_01',
        projectId: 'proj_residencia_02',
        title: 'Gran Salón con Chimenea Integrada & Cerramientos en Arco',
        spaceType: 'living',
        style: 'quiet_luxury',
        materials: ['Suelo de Roble Claro', 'Vidrio Estriado con Perfilería Negra', 'Molduras Boiserie'],
        lighting: 'warm_architectural_2700k',
        palette: 'Marfil, Roble Tostado, Acero Negro',
        imageUrl: '/assets/portfolio/project-02-residencia/p12_img00_x378_2389x1346.webp',
        aspectRatio: '16:9',
        status: 'approved',
        createdAt: '2025-02-28T16:00:00Z',
        createdBy: 'Stefania Del Papa',
        feedback: [
          { author: 'Familia Valenti', comment: 'El paso de luz a través de las mamparas arqueadas con vidrio acanalado es simplemente perfecto.', date: '2025-03-02' }
        ]
      },
      {
        id: 'rnd_res_02',
        projectId: 'proj_residencia_02',
        title: 'Cocina Monolítica con Isla de Mármol & Muebles a Medida',
        spaceType: 'kitchen',
        style: 'quiet_luxury',
        materials: ['Mármol Calacatta Claro', 'Laca Mate Neutra', 'Bronce Latonado'],
        lighting: 'rasante_indirecta',
        palette: 'Blanco Cálido, Veta Gris, Acento Latón',
        imageUrl: '/assets/portfolio/project-02-residencia/p13_img00_x385_2332x1313.webp',
        aspectRatio: '16:9',
        status: 'approved',
        createdAt: '2025-03-03T10:00:00Z',
        createdBy: 'Stefania Del Papa'
      },
      {
        id: 'rnd_res_03',
        projectId: 'proj_residencia_02',
        title: 'Zona de Estar & Sofá Curvo en Terciopelo Verde Bosque',
        spaceType: 'living',
        style: 'warm_minimalism',
        materials: ['Terciopelo Verde Bosque', 'Roble Claro', 'Hierro Negro'],
        lighting: 'golden_hour',
        palette: 'Verde Bosque, Roble, Negro Antracita',
        imageUrl: '/assets/portfolio/project-02-residencia/p15_img00_x456_1434x1452.webp',
        aspectRatio: '16:9',
        status: 'review',
        createdAt: '2025-03-06T15:30:00Z',
        createdBy: 'Stefania Del Papa'
      },
      {
        id: 'rnd_res_04',
        projectId: 'proj_residencia_02',
        title: 'Master Suite & Vestidor Retroiluminado a Medida',
        spaceType: 'master_bedroom',
        style: 'quiet_luxury',
        materials: ['Boiserie Ranurada', 'Luminarias LED Ocultas 2700K', 'Lino Gris Perla'],
        lighting: 'warm_architectural_2700k',
        palette: 'Arena Suave, Moka, Gris Perla',
        imageUrl: '/assets/portfolio/project-02-residencia/p17_img00_x512_1381x1408.webp',
        aspectRatio: '16:9',
        status: 'approved',
        createdAt: '2025-03-08T12:00:00Z',
        createdBy: 'Stefania Del Papa'
      }
    ],
    materialsCatalog: [
      { name: 'Mármol Veteado Claro', category: 'stone', finish: 'Apomazado satinado', supplier: 'Marmolería Carrara', sampleUrl: '/assets/portfolio/project-03-hotel-aurea/p22_img02_x401_397x402.webp' },
      { name: 'Roble Claro Escandinavo', category: 'wood', finish: 'Aceite mate 0% brillo', supplier: 'Wood Sense Atelier', sampleUrl: '/assets/portfolio/project-02-residencia/p14_img05_x401_397x402.webp' },
      { name: 'Vidrio Estriado Acanalado', category: 'glass', finish: 'Perfilería de aluminio anodizado negro', supplier: 'Vetreria di Puglia', sampleUrl: '/assets/portfolio/project-02-residencia/p14_img08_x418_667x405.webp' },
      { name: 'Terciopelo Verde Bosque Táctil', category: 'textile', finish: 'Pelo corto anti-mancha de alta resistencia', supplier: 'Tessitura Italiana', sampleUrl: '/assets/portfolio/project-02-residencia/p14_img09_x423_433x533.webp' }
    ],
    createdAt: '2025-01-25T11:00:00Z'
  },
  {
    id: 'proj_hotel_aurea_03',
    code: 'SDP-2025-AUR',
    title: 'Boutique Hotel Aurea: Hospitalidad de Lujo & Identidad Mediterránea',
    clientName: 'Aurea Luxury Resorts',
    clientEmail: 'resorts@aurea-matera.it',
    designerName: 'Stefania Del Papa',
    designerId: 'usr_stefania_01',
    location: 'Colinas de Matera, Basilicata, Italia',
    squareMeters: 1205,
    budgetEstimated: '€850,000 EUR',
    status: '3d_renders',
    coverImage: '/assets/portfolio/project-03-hotel-aurea/p21_img00_x562_2457x1383.webp',
    description: 'Emplazado en una ubicación privilegiada con vistas panorámicas a las colinas de Matera, este proyecto reinterpreta la arquitectura en roca y toba calcárea de la región en clave contemporánea. Edificio de tres plantas (PB 415 m², P1 395 m², P2 395 m²). Suites con piscinas privadas en PB, apartamentos con jacuzzi en niveles superiores. Paleta terracota que rinde homenaje a la tierra lucana, en diálogo con estucos minerales, mármol claro, roble y acero negro.',
    milestones: [
      { id: 'm1', title: 'Análisis Geológico de Toba & Memoria Arcaica', status: 'completed', dueDate: '10 Ene 2025' },
      { id: 'm2', title: 'Distribución en 3 Niveles (1205 m² Útiles)', status: 'completed', dueDate: '15 Feb 2025' },
      { id: 'm3', title: 'Renders Fotorrealistas de Suites & Piscinas de Roca', status: 'in_progress', dueDate: '30 Mar 2025' },
      { id: 'm4', title: 'Diseño de Mobiliario a Medida & Sanitarios Monolíticos', status: 'pending', dueDate: '20 May 2025' }
    ],
    renders: [
      {
        id: 'rnd_aur_01',
        projectId: 'proj_hotel_aurea_03',
        title: 'Suite Excavada en Toba con Piscina Privada Integrada',
        spaceType: 'master_bedroom',
        style: 'biophilic_cave_luxury',
        materials: ['Toba Calcárea', 'Estuco Terracota', 'Roble Natural', 'Acero Negro'],
        lighting: 'warm_architectural_2700k',
        palette: 'Terracota Lucano, Toba Mineral, Agua Esmeralda',
        imageUrl: '/assets/portfolio/project-03-hotel-aurea/p21_img00_x562_2457x1383.webp',
        aspectRatio: '16:9',
        status: 'approved',
        createdAt: '2025-02-15T18:00:00Z',
        createdBy: 'Stefania Del Papa'
      },
      {
        id: 'rnd_aur_02',
        projectId: 'proj_hotel_aurea_03',
        title: 'Lobby & Salón de Bienvenida Biofílico',
        spaceType: 'living',
        style: 'biophilic_cave_luxury',
        materials: ['Roca Natural Vista', 'Luz Cenital Rasante', 'Piedra Pulida'],
        lighting: 'rasante_indirecta',
        palette: 'Tierra Cálida, Arcilla, Acero',
        imageUrl: '/assets/portfolio/project-03-hotel-aurea/p22_img00_x567_2457x1134.webp',
        aspectRatio: '16:9',
        status: 'approved',
        createdAt: '2025-02-18T11:00:00Z',
        createdBy: 'Stefania Del Papa'
      },
      {
        id: 'rnd_aur_03',
        projectId: 'proj_hotel_aurea_03',
        title: 'Doble Dormitorio en Tonos Terracota Lucanos',
        spaceType: 'bedroom',
        style: 'quiet_luxury',
        materials: ['Estuco de Cal Terracota', 'Panelados de Roble', 'Mármol Claro'],
        lighting: 'warm_architectural_2700k',
        palette: 'Terracota, Crema, Madera Viva',
        imageUrl: '/assets/portfolio/project-03-hotel-aurea/p23_img00_x594_2457x1383.webp',
        aspectRatio: '16:9',
        status: 'approved',
        createdAt: '2025-02-22T14:00:00Z',
        createdBy: 'Stefania Del Papa'
      },
      {
        id: 'rnd_aur_04',
        projectId: 'proj_hotel_aurea_03',
        title: 'Baño Escultural Monolítico con Tina de Roca',
        spaceType: 'bathroom',
        style: 'biophilic_cave_luxury',
        materials: ['Microcemento Mineral', 'Grifería Empotrada en Negro Mate'],
        lighting: 'warm_architectural_2700k',
        palette: 'Toba Beige, Negro Mate',
        imageUrl: '/assets/portfolio/project-03-hotel-aurea/p24_img00_x597_1280x720.webp',
        aspectRatio: '16:9',
        status: 'approved',
        createdAt: '2025-02-24T16:30:00Z',
        createdBy: 'Stefania Del Papa'
      }
    ],
    materialsCatalog: [],
    createdAt: '2025-01-05T08:00:00Z'
  },
  {
    id: 'proj_showroom_04',
    code: 'SDP-2025-SHO',
    title: 'Arquitectura Comercial & Movilidad Sostenible: Showroom Corporativo',
    clientName: 'Holding E-Mobility Matera',
    clientEmail: 'info@emobility-matera.it',
    designerName: 'Stefania Del Papa',
    designerId: 'usr_stefania_01',
    location: 'Via La Martella, Matera, Italia',
    squareMeters: 640,
    budgetEstimated: '€420,000 EUR',
    status: 'material_selection',
    coverImage: '/assets/portfolio/project-04-showroom/p30_img00_x700_1919x1079.webp',
    description: 'Pabellón contemporáneo de líneas puras que fusiona actividad terciaria con infraestructura para movilidad eléctrica sobre una parcela campestre de perímetro vegetal. Envolvente en hormigón visto, piedra clara texturizada, volúmenes en negro antracita, celosías de alistonado de madera como filtros solares y carpintería oculta en color negro que abren las salas de reuniones ejecutivas hacia el paisaje.',
    milestones: [
      { id: 'm1', title: 'Plan Masa & Pérgola Solar de Carga', status: 'completed', dueDate: '15 Ene 2025' },
      { id: 'm2', title: 'Diseño de Celosías de Alistonado & Envolvente', status: 'completed', dueDate: '20 Feb 2025' },
      { id: 'm3', title: 'Renders Fotorrealistas & Simulación Diurna/Nocturna', status: 'completed', dueDate: '10 Mar 2025' },
      { id: 'm4', title: 'Documentación Ejecutiva de Fachada y Espacio Corporativo', status: 'in_progress', dueDate: '30 Abr 2025' }
    ],
    renders: [
      {
        id: 'rnd_sho_01',
        projectId: 'proj_showroom_04',
        title: 'Fachada Principal, Celosías de Alistonado & Pabellón Vidriado',
        spaceType: 'facade',
        style: 'sustainable_brutalist',
        materials: ['Hormigón Visto', 'Piedra Texturizada Clara', 'Alistonado de Madera', 'Acero Negro'],
        lighting: 'natural_noon_3000k',
        palette: 'Hormigón, Madera Natural, Negro Antracita',
        imageUrl: '/assets/portfolio/project-04-showroom/p30_img00_x700_1919x1079.webp',
        aspectRatio: '16:9',
        status: 'approved',
        createdAt: '2025-02-28T10:00:00Z',
        createdBy: 'Stefania Del Papa'
      },
      {
        id: 'rnd_sho_02',
        projectId: 'proj_showroom_04',
        title: 'Sala de Reuniones Ejecutiva Panorámica',
        spaceType: 'office',
        style: 'quiet_luxury',
        materials: ['Paños Vidriados Suelo a Techo', 'Mesa Monolítica en Roble', 'Páneles Acústicos'],
        lighting: 'soft_diffuse',
        palette: 'Gris Cemento, Roble Oscuro, Vidrio Cristal',
        imageUrl: '/assets/portfolio/project-04-showroom/p31_img00_x706_2459x1383.webp',
        aspectRatio: '16:9',
        status: 'approved',
        createdAt: '2025-03-02T15:00:00Z',
        createdBy: 'Stefania Del Papa'
      },
      {
        id: 'rnd_sho_03',
        projectId: 'proj_showroom_04',
        title: 'Showroom Comercial & Zona de Atención al Cliente',
        spaceType: 'commercial',
        style: 'sustainable_brutalist',
        materials: ['Piedra Clara Piasentina', 'Luminarias Lineales Ocultas'],
        lighting: 'warm_architectural_2700k',
        palette: 'Piedra Clara, Madera Cálida',
        imageUrl: '/assets/portfolio/project-04-showroom/p32_img00_x710_2343x1319.webp',
        aspectRatio: '16:9',
        status: 'approved',
        createdAt: '2025-03-05T12:00:00Z',
        createdBy: 'Stefania Del Papa'
      },
      {
        id: 'rnd_sho_04',
        projectId: 'proj_showroom_04',
        title: 'Pabellón Nocturno & Pérgola Apergolada de Recarga E-Mobility',
        spaceType: 'outdoor',
        style: 'sustainable_brutalist',
        materials: ['Pérgola Metálica Apergolada', 'Iluminación Escénica Rasante'],
        lighting: 'night_architectural',
        palette: 'Negro Antracita, Iluminación Dorada 2700K',
        imageUrl: '/assets/portfolio/project-04-showroom/p34_img00_x722_2458x1383.webp',
        aspectRatio: '16:9',
        status: 'approved',
        createdAt: '2025-03-08T20:00:00Z',
        createdBy: 'Stefania Del Papa'
      }
    ],
    materialsCatalog: [],
    createdAt: '2025-01-15T10:00:00Z'
  }
];

export const SEED_CONSULTATIONS: ConsultationRequest[] = [
  {
    id: 'csl_01',
    clientName: 'Matteo Rinaldi',
    email: 'm.rinaldi@pugliainvest.it',
    phone: '+39 080 554 991',
    propertyType: 'Masseria histórica para conversión en Hotel Boutique',
    location: 'Ostuni, Valle d’Itria, Italia',
    budgetRange: '€300k - €600k EUR',
    message: 'Deseamos desarrollar el proyecto integral de interiorismo y paisajismo para una masseria del siglo XVIII con 8 suites, restaurante exterior y piscina.',
    status: 'scheduled',
    preferredDate: '2025-04-10',
    createdAt: '2025-03-10T12:00:00Z'
  },
  {
    id: 'csl_02',
    clientName: 'Carla & Gonzalo Fernández',
    email: 'gonzalo.fernandez@inversiones.es',
    phone: '+34 612 889 004',
    propertyType: 'Ático duplex de lujo con terraza panorámica',
    location: 'Valencia / Ensanche, España',
    budgetRange: '€180k - €300k EUR',
    message: 'Reconversión completa de vivienda con salón diáfano, cocina con isla de mármol, carpinterías a medida en roble y suite principal con vestidor.',
    status: 'pending',
    createdAt: '2025-03-12T09:30:00Z'
  }
];
