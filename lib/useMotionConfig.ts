"use client";

import { useEffect, useState } from "react";

/**
 * Custom hook to detect if user prefers reduced motion or is on mobile
 * Returns optimized animation configuration for Framer Motion
 */
export function useMotionConfig() {
  const [isMobile, setIsMobile] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    // Check if mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768); // md breakpoint
    };

    // Check if prefers reduced motion
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);

    checkMobile();
    window.addEventListener("resize", checkMobile);
    mediaQuery.addEventListener("change", (e) => setPrefersReducedMotion(e.matches));

    return () => {
      window.removeEventListener("resize", checkMobile);
      mediaQuery.removeEventListener("change", (e) => setPrefersReducedMotion(e.matches));
    };
  }, []);

  // Disable animations on mobile or if prefers reduced motion
  const shouldReduceMotion = isMobile || prefersReducedMotion;

  return {
    isMobile,
    prefersReducedMotion,
    shouldReduceMotion,
    // Optimized animation configs
    fadeIn: shouldReduceMotion
      ? { initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { duration: 0 } }
      : { initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { duration: 0.3 } },

    slideUp: shouldReduceMotion
      ? { initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { duration: 0 } }
      : { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.3 } },

    slideDown: shouldReduceMotion
      ? { initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { duration: 0 } }
      : { initial: { opacity: 0, y: -20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.3 } },

    slideLeft: shouldReduceMotion
      ? { initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { duration: 0 } }
      : { initial: { opacity: 0, x: -20 }, animate: { opacity: 1, x: 0 }, transition: { duration: 0.3 } },

    slideRight: shouldReduceMotion
      ? { initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { duration: 0 } }
      : { initial: { opacity: 0, x: 20 }, animate: { opacity: 1, x: 0 }, transition: { duration: 0.3 } },

    scaleIn: shouldReduceMotion
      ? { initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { duration: 0 } }
      : { initial: { opacity: 0, scale: 0.95 }, animate: { opacity: 1, scale: 1 }, transition: { duration: 0.3 } },

    // For whileInView animations (only on desktop/non-reduced motion)
    whileInViewConfig: shouldReduceMotion
      ? {}
      : { whileInView: { opacity: 1 }, viewport: { once: true } },
  };
}
