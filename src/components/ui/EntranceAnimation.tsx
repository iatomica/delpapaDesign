"use client";

import React, { useEffect } from "react";

export function SectionAnimator() {
  useEffect(() => {
    const observerCallback: IntersectionObserverCallback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.12,
      rootMargin: "0px 0px -40px 0px",
    });

    const elements = document.querySelectorAll(
      "section, .animate-on-scroll, #estudio, #proyectos, #como-trabajamos, #contacto"
    );
    elements.forEach((el) => {
      el.classList.add("fade-in-section");
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return null;
}
