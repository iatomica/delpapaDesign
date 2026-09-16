"use client";

import { useEffect, useRef, useState } from "react";
import { getGSAP } from "@/lib/gsap";

interface UseScrollVideoProps {
  containerRef: React.RefObject<HTMLDivElement | null>;
  videoRef: React.RefObject<HTMLVideoElement | null>;
  scrollLength?: string; // e.g., "350vh"
  reducedMotion?: boolean;
}

export function useScrollVideo({
  containerRef,
  videoRef,
  scrollLength = "350vh",
  reducedMotion = false
}: UseScrollVideoProps) {
  const [progress, setProgress] = useState(0);
  const [isReady, setIsReady] = useState(false);
  const [hasFirstFrame, setHasFirstFrame] = useState(false);
  const [isPinned, setIsPinned] = useState(false);

  // Animation and scrubbing references (no state re-renders during high-frequency raf)
  const targetTimeRef = useRef(0);
  const currentTimeRef = useRef(0);
  const isSeekingRef = useRef(false);
  const rafIdRef = useRef<number | null>(null);
  const progressRef = useRef(0);

  useEffect(() => {
    const video = videoRef.current;
    const container = containerRef.current;
    if (!video || !container) return;

    const { gsap, ScrollTrigger } = getGSAP();

    // Determine device characteristics
    const isMobile = window.matchMedia("(max-width: 860px)").matches || 
      window.matchMedia("(hover: none) and (pointer: coarse)").matches;
    const eps = isMobile ? 0.025 : 0.008; // Seek threshold

    // 1. iOS / Safari video priming on first user interaction
    const primeVideo = () => {
      if (!video) return;
      try {
        const p = video.play();
        if (p && typeof p.then === "function") {
          p.then(() => {
            try { video.pause(); } catch {}
          }).catch(() => {});
        }
      } catch {}
    };

    window.addEventListener("pointerdown", primeVideo, { once: true, passive: true });
    window.addEventListener("touchstart", primeVideo, { once: true, passive: true });

    // 2. Video event listeners
    const handleLoadedMetadata = () => {
      setIsReady(true);
    };

    const handleSeeked = () => {
      isSeekingRef.current = false;
      if (!hasFirstFrame) {
        setHasFirstFrame(true);
      }
    };

    const handleSeeking = () => {
      isSeekingRef.current = true;
    };

    video.addEventListener("loadedmetadata", handleLoadedMetadata);
    video.addEventListener("seeked", handleSeeked);
    video.addEventListener("seeking", handleSeeking);

    if (video.readyState >= 1) {
      setIsReady(true);
    }

    // 3. RAF loop for continuous smooth lerping of currentTime
    const tick = () => {
      if (video && video.duration && !reducedMotion) {
        // Only seek if video decoder is not currently busy
        if (!isSeekingRef.current && !video.seeking) {
          const delta = targetTimeRef.current - currentTimeRef.current;
          currentTimeRef.current += delta * 0.12; // silky luxury easing

          if (Math.abs(video.currentTime - currentTimeRef.current) > eps) {
            try {
              video.currentTime = Math.min(
                Math.max(0, currentTimeRef.current),
                video.duration - 0.01
              );
            } catch {}
          }
        }
      }

      rafIdRef.current = requestAnimationFrame(tick);
    };

    rafIdRef.current = requestAnimationFrame(tick);

    // 4. GSAP ScrollTrigger for pinning and progress tracking
    const st = ScrollTrigger.create({
      trigger: container,
      start: "top top",
      end: `+=${scrollLength}`,
      pin: true,
      anticipatePin: 1,
      scrub: true,
      onToggle: (self) => {
        setIsPinned(self.isActive);
      },
      onUpdate: (self) => {
        const pr = self.progress;
        progressRef.current = pr;
        setProgress(pr);

        if (video && video.duration && !reducedMotion) {
          targetTimeRef.current = pr * video.duration;
        }
      }
    });

    return () => {
      st.kill();
      if (rafIdRef.current) {
        cancelAnimationFrame(rafIdRef.current);
      }
      video.removeEventListener("loadedmetadata", handleLoadedMetadata);
      video.removeEventListener("seeked", handleSeeked);
      video.removeEventListener("seeking", handleSeeking);
      window.removeEventListener("pointerdown", primeVideo);
      window.removeEventListener("touchstart", primeVideo);
    };
  }, [containerRef, videoRef, scrollLength, reducedMotion, hasFirstFrame]);

  return {
    progress,
    isReady,
    hasFirstFrame,
    isPinned
  };
}
