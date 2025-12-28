"use client";

import { motion } from "framer-motion";
import { useMotionConfig } from "@/lib/useMotionConfig";
import React from "react";

interface MobileOptimizedMotionProps {
  children: React.ReactNode;
  variant?: "fadeIn" | "slideUp" | "slideDown" | "slideLeft" | "slideRight" | "scaleIn";
  delay?: number;
  whileInView?: boolean;
  [key: string]: any;
}

/**
 * Mobile-optimized Motion component that automatically disables/reduces animations on mobile
 */
export function MobileOptimizedMotion({
  children,
  variant = "slideUp",
  delay = 0,
  whileInView = false,
  ...props
}: MobileOptimizedMotionProps) {
  const motionConfig = useMotionConfig();

  // Get the animation config based on variant
  const getAnimationConfig = () => {
    const baseConfig = motionConfig[variant] || motionConfig.slideUp;

    return {
      ...baseConfig,
      transition: {
        ...baseConfig.transition,
        delay: delay,
      },
    };
  };

  const animationConfig = getAnimationConfig();

  // If whileInView is enabled and not reduced motion, add whileInView
  const finalProps = whileInView && !motionConfig.shouldReduceMotion
    ? {
        ...animationConfig,
        whileInView: animationConfig.whileInView,
        viewport: { once: true },
      }
    : animationConfig;

  return (
    <motion.div {...finalProps} {...props}>
      {children}
    </motion.div>
  );
}
