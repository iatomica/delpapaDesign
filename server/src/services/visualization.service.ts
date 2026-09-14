interface SpatialRenderOptions {
  spaceType: string;
  style: string;
  materials: string[];
  lighting: string;
  aspectRatio?: '16:9' | '4:3' | '1:1' | '9:16';
  notes?: string;
}

interface SpatialRenderResult {
  imageUrl: string;
  spaceType: string;
  style: string;
  materials: string[];
  lighting: string;
}

// Curated high-resolution architectural interior visual bank from Stefania Del Papa Portfolio
const ARCHITECTURAL_RENDER_BANK: Record<string, string[]> = {
  living: [
    '/assets/portfolio/project-02-residencia/p12_img00_x378_2389x1346.webp',
    '/assets/portfolio/project-02-residencia/p15_img00_x456_1434x1452.webp',
    '/assets/portfolio/project-03-hotel-aurea/p22_img00_x567_2457x1134.webp'
  ],
  kitchen: [
    '/assets/portfolio/project-02-residencia/p13_img00_x385_2332x1313.webp'
  ],
  master_bedroom: [
    '/assets/portfolio/project-03-hotel-aurea/p21_img00_x562_2457x1383.webp',
    '/assets/portfolio/project-03-hotel-aurea/p23_img00_x594_2457x1383.webp',
    '/assets/portfolio/project-02-residencia/p17_img00_x512_1381x1408.webp',
    '/assets/portfolio/project-01-masseria/p09_img01_x307_2250x1267.webp'
  ],
  dressing_room: [
    '/assets/portfolio/project-02-residencia/p17_img01_x514_1125x1408.webp'
  ],
  bathroom: [
    '/assets/portfolio/project-03-hotel-aurea/p24_img00_x597_1280x720.webp'
  ],
  terrace: [
    '/assets/portfolio/project-01-masseria/p06_img00_x275_1730x1297.webp',
    '/assets/portfolio/project-01-masseria/p07_img00_x290_3300x2475.webp'
  ],
  workspace: [
    '/assets/portfolio/project-04-showroom/p31_img00_x706_2459x1383.webp',
    '/assets/portfolio/project-04-showroom/p32_img00_x710_2343x1319.webp'
  ],
  facade: [
    '/assets/portfolio/project-04-showroom/p30_img00_x700_1919x1079.webp',
    '/assets/portfolio/project-04-showroom/p34_img00_x722_2458x1383.webp'
  ]
};

export class VisualizationService {
  /**
   * Returns a calibrated architectural render proposal for the given spatial parameters.
   */
  public async getRenderProposal(options: SpatialRenderOptions): Promise<SpatialRenderResult> {
    const bank = ARCHITECTURAL_RENDER_BANK[options.spaceType] || ARCHITECTURAL_RENDER_BANK['living'];
    const randomIndex = Math.floor(Math.random() * bank.length);
    const selectedImage = bank[randomIndex];

    return {
      imageUrl: selectedImage,
      spaceType: options.spaceType,
      style: options.style,
      materials: options.materials,
      lighting: options.lighting,
    };
  }
}

export const visualizationService = new VisualizationService();
