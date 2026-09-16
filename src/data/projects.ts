export interface Project {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  category: string;
  location: string;
  year: string;
  surface?: string;
  levels?: string;
  description: string;
  concept: string;
  materials: string[];
  heroImage: string;
  gallery: {
    src: string;
    caption: string;
    type?: "render" | "moodboard" | "plan" | "detail";
  }[];
  plans?: {
    src: string;
    title: string;
    subtitle?: string;
  }[];
  highlights: string[];
}

export const PROJECTS: Project[] = [
  {
    id: "masseria-contemporanea",
    number: "01",
    title: "Masseria Contemporánea",
    subtitle: "Hospitality & Resort — Identidad Pugliese",
    category: "Hospitality & Resort",
    location: "Brindisi, Italia",
    year: "2024",
    surface: "1.200 mq exterior + suites",
    description:
      "Proyecto integral de arquitectura interior, paisajismo y hospitalidad concebido como una relectura contemporánea de la masseria tradicional pugliese, articulando dos programas funcionales independientes para equilibrar la actividad pública con el reposo privado.",
    concept:
      "Al frente se implanta el sector gastronómico biofílico con pérgolas suspendidas de vegetación natural e iluminación rasante cálida. En la parte posterior, desacopladas para asegurar privacidad acústica, se desarrollan suites boutique con panelados alistonados, celosías de esterilla y bañeras exentas. El patio exterior articula solárium en piedra abujardada, piscina de líneas puras y spa privado.",
    materials: ["Estucos de cal", "Roble natural", "Piedra seca local", "Piedra abujardada", "Cañizo"],
    heroImage: "/media/images/projects/masseria-hero.webp",
    gallery: [
      {
        src: "/media/images/projects/masseria-hero.webp",
        caption: "Vista principal de acceso y arquitectura vernacular en estuco blanco.",
        type: "render"
      },
      {
        src: "/media/images/projects/masseria-terrace.webp",
        caption: "Terraza gastronómica exterior bajo pérgola perimetral de madera con cortinados etéreos.",
        type: "render"
      },
      {
        src: "/media/images/projects/masseria-pool.webp",
        caption: "Piscina sobreelevada y solárium en piedra abujardada con sector lounge y fuegos.",
        type: "render"
      },
      {
        src: "/media/images/moodboards/masseria-materials.webp",
        caption: "Estudio matérico y moodboard: piedras locales, esterilla tejida y textiles neutros.",
        type: "moodboard"
      }
    ],
    plans: [
      {
        src: "/media/images/plans/masseria-siteplan.webp",
        title: "Masterplan Funcional",
        subtitle: "Zonificación: Suites Hospitality, Terraza Gastronómica, Solárium y Wellness Spa"
      }
    ],
    highlights: [
      "Separación acústica entre restaurante y suites residenciales",
      "Pérgolas bioclimáticas con vegetación natural suspendida",
      "Piscina de hormigón enrasado con borde infinito a cota cero",
      "Pavimentos continuos minerales aptos para intemperie mediterránea"
    ]
  },
  {
    id: "residencia-privada",
    number: "02",
    title: "Residencia Privada",
    subtitle: "Interiorismo & Mobiliario a Medida",
    category: "Residencial de Alta Gama",
    location: "Brindisi, Italia",
    year: "2024",
    surface: "240 mq",
    description:
      "Este proyecto residencial equilibra la elegancia atemporal con la funcionalidad contemporánea para crear un refugio de calma y sofisticación. A través de una paleta neutra enriquecida con acentos cálidos y texturas nobles, los espacios fluyen de manera continua bajo un solado unificador de madera clara.",
    concept:
      "Explora el lujo silencioso contemporáneo a través de un diálogo entre arquitectura clásica, líneas depuradas y una atmósfera de calma envolvente. Cerramientos de vidrio estriado con arcos sutiles articulan la transición entre la cocina con isla de mármol y el comedor, permitiendo el paso fluido de la luz natural. En el estar y la suite, molduras contemporáneas tipo boiserie y vestidores retroiluminados completan una atmósfera íntima.",
    materials: ["Mármol Calacatta", "Vidrio estriado / canelado", "Madera de roble claro", "Boiserie contemporánea", "Lino natural"],
    heroImage: "/media/images/projects/residencia-hero.webp",
    gallery: [
      {
        src: "/media/images/projects/residencia-hero.webp",
        caption: "Salón principal con boiserie contemporánea, solado de roble e iluminación indirecta.",
        type: "render"
      },
      {
        src: "/media/images/projects/residencia-kitchen.webp",
        caption: "Cocina con isla monolítica de mármol y divisorias de vidrio estriado.",
        type: "render"
      },
      {
        src: "/media/images/projects/residencia-bedroom.webp",
        caption: "Dormitorio principal con cabecero tapizado a medida y panelados acústicos.",
        type: "render"
      },
      {
        src: "/media/images/projects/residencia-closet.webp",
        caption: "Vestidor a medida con iluminación LED lineal integrada y cristal ahumado.",
        type: "render"
      },
      {
        src: "/media/images/projects/residencia-bath.webp",
        caption: "Baño en suite con lavabos en piedra natural y grifería empotrada en latón cepillado.",
        type: "render"
      },
      {
        src: "/media/images/moodboards/residencia-materials.webp",
        caption: "Moodboard matérico: texturas de maderas, estucos texturados y muestras de piedra.",
        type: "moodboard"
      }
    ],
    highlights: [
      "Solado continuo de roble claro en espiga sin juntas de dilatación visibles",
      "Cerramientos acristalados curvos en hierro negro con vidrio acanalado acústico",
      "Mobiliario de cocina integrado 'bespoke' con herrajes ocultos y electrodomésticos enrasados",
      "Estudio lumínico con temperaturas de color de 2700K para un ambiente nocturno relajante"
    ]
  },
  {
    id: "boutique-hotel-aurea",
    number: "03",
    title: "Boutique Hotel Aurea",
    subtitle: "Hospitalidad de Lujo & Identidad Vernácula",
    category: "Boutique Hotel & Spa",
    location: "Matera, Italia",
    year: "2024",
    surface: "1.205 mq (3 niveles)",
    levels: "Planta baja (415 mq), 1º piso (395 mq), 2º piso (395 mq)",
    description:
      "Emplazado en una ubicación privilegiada con vistas panorámicas a las colinas del norte de Matera, este proyecto de interiorismo de lujo reinterpreta la identidad vernácula y la arquitectura excavada en roca de la región en clave contemporánea.",
    concept:
      "El edificio, estructurado en tres niveles escalonados, maximiza la privacidad con suites provistas de piscinas privadas en roca en planta baja, y apartamentos con cocina y jacuzzi en los niveles superiores. La paleta cromática se nutre directamente de la tierra: el terracota abraza los espacios en diálogo con estucos minerales, mármol claro, roble y acero negro.",
    materials: ["Toba calcárea de Matera", "Terracota artesanal", "Estucos de cal mineral", "Mármol claro", "Acero negro"],
    heroImage: "/media/images/projects/aurea-hero.webp",
    gallery: [
      {
        src: "/media/images/projects/aurea-hero.webp",
        caption: "Suite panorámica con vistas a las colinas de Matera y tonos terracota envolventes.",
        type: "render"
      },
      {
        src: "/media/images/projects/aurea-suite.webp",
        caption: "Habitación principal con bañera exenta integrada y bóveda de inspiración rupestre.",
        type: "render"
      },
      {
        src: "/media/images/projects/aurea-terrace.webp",
        caption: "Terraza privada con solárium y vistas al paisaje de toba lucana.",
        type: "render"
      },
      {
        src: "/media/images/projects/aurea-bath.webp",
        caption: "Zona de baño con hornacinas excavadas y grifería mural en acabado antracita.",
        type: "render"
      },
      {
        src: "/media/images/moodboards/aurea-terracotta.webp",
        caption: "Moodboard de tonalidades terracota, toba calcárea, cerámicas vidriadas y maderas cálidas.",
        type: "moodboard"
      }
    ],
    plans: [
      {
        src: "/media/images/plans/aurea-floorplan-1.webp",
        title: "Planta Baja (415 mq)",
        subtitle: "Suites de acceso directo con piscinas privadas en roca"
      },
      {
        src: "/media/images/plans/aurea-floorplan-2.webp",
        title: "Primer Piso (395 mq)",
        subtitle: "Habitaciones dobles de lujo y suites con terraza"
      },
      {
        src: "/media/images/plans/aurea-floorplan-3.webp",
        title: "Segundo Piso (395 mq)",
        subtitle: "Apartamentos exclusivos con jacuzzi y cocina integrada"
      },
      {
        src: "/media/images/plans/aurea-detail-plan.webp",
        title: "Plano de Detalle Constructivo",
        subtitle: "Despiece de carpinterías, encuentros de piedra y hornacinas retroiluminadas"
      }
    ],
    highlights: [
      "Piscinas privadas interiores excavadas con revestimiento hidrófugo continuo",
      "Aislamiento higrotérmico específico para arquitectura excavada en toba",
      "Control domótico de confort sensorial: iluminación circadiana y control térmico",
      "Mobiliario escultórico diseñado en exclusiva para las suites del hotel"
    ]
  },
  {
    id: "showroom-corporativo",
    number: "04",
    title: "Showroom Corporativo & Pabellón",
    subtitle: "Arquitectura Comercial & Movilidad Sostenible",
    category: "Arquitectura Comercial & Corporativa",
    location: "Via La Martella, Matera, Italia",
    year: "2024",
    surface: "850 mq",
    description:
      "Emplazado en una parcela de perímetro vegetal y vistas abiertas hacia el paisaje campestre, este proyecto integral se concibe como un pabellón contemporáneo de líneas puras que fusiona la actividad terciaria con la infraestructura para la movilidad sostenible.",
    concept:
      "El planteamiento volumétrico se resuelve a través de cuerpos geométricos ortogonales en planta baja y subsuelo, complementados por una pérgola técnica apergolada que cobija estaciones de recarga para vehículos eléctricos. Paños ciegos revestidos en hormigón visto y piedra clara texturizada contrastan con volúmenes acentuados en negro antracita y celosías verticales de alistonado de madera.",
    materials: ["Hormigón visto", "Piedra clara texturada", "Alistonado de madera vertical", "Negro antracita", "Vidrio de suelo a techo"],
    heroImage: "/media/images/projects/showroom-hero.webp",
    gallery: [
      {
        src: "/media/images/projects/showroom-hero.webp",
        caption: "Pabellón nocturno con pérgola técnica, iluminación perimetral y estaciones de recarga.",
        type: "render"
      },
      {
        src: "/media/images/projects/showroom-facade.webp",
        caption: "Fachada diurna: alternancia de hormigón visto, celosías de madera y grandes ventanales.",
        type: "render"
      },
      {
        src: "/media/images/projects/showroom-meeting.webp",
        caption: "Sala de reuniones ejecutiva abierta al jardín circundante con mesa de reunión en nogal.",
        type: "render"
      },
      {
        src: "/media/images/projects/showroom-lounge.webp",
        caption: "Espacio de atención a clientes y lounge corporativo con diseño biofílico.",
        type: "render"
      },
      {
        src: "/media/images/projects/showroom-workspace.webp",
        caption: "Zona de trabajo colaborativo con iluminación técnica rasante antideslumbramiento.",
        type: "render"
      },
      {
        src: "/media/images/moodboards/showroom-materials.webp",
        caption: "Moodboard corporativo: acero antracita, hormigón arquitectónico, madera y vegetación.",
        type: "moodboard"
      }
    ],
    highlights: [
      "Integración de marquesina solar y puntos de carga ultrarrápida para vehículos eléctricos",
      "Vidrios de baja emisividad con control solar selectivo y carpinterías ocultas",
      "Paisajismo biofílico que tamiza las vistas a la vía pública e integra especies autóctonas",
      "Gestión energética BMS inteligente para reducción de huella de carbono"
    ]
  }
];

export const STUDIO_INFO = {
  name: "SENSE Studio",
  founder: "Stefania Del Papa",
  tagline: "Transformamos el espacio en una experiencia sensorial a medida.",
  role: "Interior Designer & Creative Director",
  locations: ["Valencia, España", "Buenos Aires, Argentina", "Puglia & Basilicata, Italia"],
  phone: "(+34) 603 502 985",
  email: "sense.studiodesign@gmail.com",
  linkedin: "https://www.linkedin.com/in/stefania-del-papa-interior-designer",
  behance: "https://www.behance.net/stefaniadelpapa-sens",
  education: [
    {
      degree: "Master en Interior Design Luxury",
      institution: "Italian Design Institute (IDI)",
      year: "2025"
    },
    {
      degree: "Licenciatura en Diseño de Interiores (4 años)",
      institution: "Universidad Argentina de la Empresa (UADE)",
      year: "2020"
    }
  ],
  languages: [
    { name: "Español", level: "Nativo" },
    { name: "Italiano", level: "C2 (Bilingüe / Fluido)" },
    { name: "Inglés", level: "B2 (Profesional)" }
  ],
  skills: [
    "Diseño y desarrollo integral de proyectos de interiorismo de lujo",
    "Planos técnicos, documentación ejecutiva y expedientes de licencias",
    "Modelado 3D de alta gama y visualización fotorrealista",
    "Prescripción matérica, selección de marcas exclusivas y BOQ",
    "Diseño de mobiliario 'bespoke' y carpintería a medida",
    "Coordinación integral de proveedores, constructores y dirección de obra"
  ]
};
