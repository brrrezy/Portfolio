"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

type Direction = "up" | "down" | "left" | "right" | "none";

interface ScrollRevealProps {
  children: React.ReactNode;
  direction?: Direction;
  delay?: number;
  duration?: number;
  distance?: number;
  once?: boolean;
  className?: string;
  style?: React.CSSProperties;
  scale?: number;
  rotate?: number;
  blur?: number;
}

const getInitial = (direction: Direction, distance: number, scale: number, rotate: number, blur: number) => {
  const base: Record<string, number> = { opacity: 0 };
  if (scale !== 1) base.scale = scale;
  if (rotate !== 0) base.rotate = rotate;

  switch (direction) {
    case "up":    base.y = distance; break;
    case "down":  base.y = -distance; break;
    case "left":  base.x = distance; break;
    case "right": base.x = -distance; break;
  }

  return base;
};

export function ScrollReveal({
  children,
  direction = "up",
  delay = 0,
  duration = 0.6,
  distance = 40,
  once = true,
  className,
  style,
  scale = 1,
  rotate = 0,
  blur = 0,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, margin: "-60px 0px" });

  const initial = getInitial(direction, distance, scale, rotate, blur);
  const filterInitial = blur > 0 ? `blur(${blur}px)` : undefined;

  return (
    <motion.div
      ref={ref}
      initial={{ ...initial, filter: filterInitial }}
      animate={isInView ? { opacity: 1, x: 0, y: 0, scale: 1, rotate: 0, filter: blur > 0 ? "blur(0px)" : undefined } : { ...initial, filter: filterInitial }}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
}

/* Staggered children wrapper — each child gets a sequential delay */
interface StaggerProps {
  children: React.ReactNode;
  staggerDelay?: number;
  baseDelay?: number;
  direction?: Direction;
  distance?: number;
  className?: string;
  style?: React.CSSProperties;
}

export function StaggerReveal({
  children,
  staggerDelay = 0.08,
  baseDelay = 0,
  direction = "up",
  distance = 30,
  className,
  style,
}: StaggerProps) {
  const items = React.Children.toArray(children);
  return (
    <div className={className} style={style}>
      {items.map((child, i) => (
        <ScrollReveal key={i} direction={direction} delay={baseDelay + i * staggerDelay} distance={distance}>
          {child}
        </ScrollReveal>
      ))}
    </div>
  );
}
