# SENSE — By Stefania Del Papa
### High-End Interior Design & Architectural Scenography

A production-grade, scroll-driven digital portfolio for **SENSE Studio by Stefania Del Papa**, translating an AI-generated architectural camera flight and a 36-page portfolio PDF into an editorial, quiet-luxury web experience.

---

## 1. Quick Start

### Prerequisites
- Node.js 18+ (tested on Node v24)
- npm or pnpm

### Development
```bash
npm install
npm run dev
```
Open [http://localhost:3000](http://localhost:3000).

### Production Build
```bash
npm run build
npm run start
```

---

## 2. Asset Pipeline

All assets follow a non-destructive pipeline under `public/media/`:

```
public/media/
├── source/
│   ├── sense-source.mp4          # Original AI cinematic camera-flight
│   └── portfolio-source.pdf      # 36-page original portfolio PDF
├── video/
│   ├── sense-desktop.mp4         # 1344x768, GOP 8, CRF 20, faststart, muted, audio stripped
│   └── sense-mobile.mp4          # Height 720p, GOP 4 (ultra-fast mobile seeks), CRF 23
├── posters/
│   └── sense-poster.webp         # Crisp full-frame WebP at t=0s
└── images/
    ├── projects/                 # Extracted renders for Aurea, Masseria, Residencia, Showroom
    ├── plans/                    # Architectural floor plans and detail drawings
    ├── moodboards/               # High-res material studies (terracotta, oak, fluted glass)
    └── stefania/                 # Portrait & signature
```

### Video Optimization Commands
Videos are encoded using `ffmpeg` with specific GOP structures tailored for frame-by-frame scrubbing:

- **Desktop Derivative** (GOP 8, CRF 20, unsharp filter, faststart):
  ```bash
  ffmpeg -y -i sense-source.mp4 -an -vf "unsharp=5:5:0.8:5:5:0.0" \
    -c:v libx264 -preset slow -crf 20 -pix_fmt yuv420p \
    -g 8 -keyint_min 8 -sc_threshold 0 -movflags +faststart sense-desktop.mp4
  ```

- **Mobile Derivative** (720p, GOP 4 for low-latency seek decoding on phones):
  ```bash
  ffmpeg -y -i sense-source.mp4 -an -vf "scale=-2:720,unsharp=5:5:0.6:5:5:0.0" \
    -c:v libx264 -preset slow -crf 23 -pix_fmt yuv420p \
    -g 4 -keyint_min 4 -sc_threshold 0 -movflags +faststart sense-mobile.mp4
  ```

- **Poster Extraction**:
  ```bash
  ffmpeg -y -ss 0.05 -i sense-source.mp4 -frames:v 1 -q:v 2 sense-poster.webp
  ```

---

## 3. Scroll Video Engine (`ScrollVideoSection.tsx`)

The scroll engine is implemented in `src/components/cinematic/ScrollVideoSection.tsx` and driven by `useScrollVideo.ts`:

- **GSAP ScrollTrigger**: Pins the viewport for a configurable scroll length (`350vh` by default) and synchronizes scroll progress `[0, 1]` with `video.currentTime`.
- **Seek Coalescing (`video.seeking` Guard)**: Prevents seek queue pileup on rapid trackpad or touch flicks. If the hardware decoder is busy resolving a frame, subsequent seek requests are coalesced until the `seeked` event triggers.
- **Lerp Interpolation**: Frame updates are interpolated (`s.cur += (target - cur) * 0.18`) inside a `requestAnimationFrame` loop, resulting in organic cinema-camera movement.
- **Responsive Video Selection**: Automatically delivers `sense-mobile.mp4` on mobile viewports (`max-width: 768px`) to conserve battery and memory bandwidth.
- **iOS Prime Trigger**: Adds touch and pointer listeners that execute a silent `play() -> pause()` cycle, ensuring mobile Safari unlocks video decoding without user friction.
- **Accessibility & Reduced Motion**: Automatically detects `prefers-reduced-motion: reduce`, disables scrubbing, and presents the high-fidelity poster with static typographic transitions.

---

## 4. Customization Guide

### How to Replace the Cinematic Video
1. Place the new source MP4 into `public/media/source/`.
2. Run the optimization commands above to output `sense-desktop.mp4`, `sense-mobile.mp4`, and `sense-poster.webp`.
3. Pass the paths into `<ScrollVideoSection />` in `src/app/page.tsx`.

### How to Change the Scroll Duration
Adjust the `scrollLength` prop on `ScrollVideoSection`:
```tsx
<ScrollVideoSection
  scrollLength="450vh" // Slower, more deliberate architectural flight
/>
```

### How to Add or Modify Projects
All project data is cleanly decoupled in `src/data/projects.ts`. Each project adheres to the `Project` interface:
```typescript
{
  id: "nuovo-progetto",
  number: "05",
  title: "Villa Monolito",
  subtitle: "Residencia Privada",
  category: "Residencial de Lujo",
  location: "Valencia, España",
  year: "2025",
  surface: "540 mq",
  description: "...",
  concept: "...",
  materials: ["Caliza", "Madera Termotratada", "Bronce"],
  heroImage: "/media/images/projects/villa-hero.webp",
  gallery: [...],
  plans: [...],
  highlights: [...]
}
```

---

## 5. Technology Stack

- **Framework**: Next.js 15+ (App Router, Turbopack)
- **Language**: TypeScript 5
- **Animation**: GSAP 3 + ScrollTrigger
- **Typography**: Cormorant Garamond (Google Fonts) + Plus Jakarta Sans
- **Styling**: Vanilla CSS Variables & Tailored Tokens
- **Icons**: Lucide React
