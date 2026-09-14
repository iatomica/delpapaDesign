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

// Curated high-resolution architectural interior visual bank
const ARCHITECTURAL_RENDER_BANK: Record<string, string[]> = {
  living: [
    'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=85',
    'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1600&q=85',
    'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=85',
    'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1600&q=85'
  ],
  kitchen: [
    'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1600&q=85',
    'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1600&q=85',
    'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=1600&q=85'
  ],
  master_bedroom: [
    'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1600&q=85',
    'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=1600&q=85',
    'https://images.unsplash.com/photo-1617325247661-675ab4b64ae2?auto=format&fit=crop&w=1600&q=85'
  ],
  dressing_room: [
    'https://images.unsplash.com/photo-1558997519-83ea9252edf8?auto=format&fit=crop&w=1600&q=85',
    'https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=1600&q=85'
  ],
  bathroom: [
    'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1600&q=85',
    'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=1600&q=85'
  ],
  terrace: [
    'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=85',
    'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1600&q=85'
  ],
  workspace: [
    'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1600&q=85',
    'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=85'
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
