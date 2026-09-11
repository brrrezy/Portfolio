"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

interface AnimatedCounterProps {
  target: string; // e.g. "12+", "50k", "3+"
  duration?: number;
}

export function AnimatedCounter({ target, duration = 1.8 }: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (!isInView) return;

    // Parse the numeric part and suffix
    const match = target.match(/^([\d.]+)(.*)$/);
    if (!match) {
      setDisplay(target);
      return;
    }

    const numericTarget = parseFloat(match[1]);
    const suffix = match[2]; // e.g. "+", "k", etc.
    const isInteger = Number.isInteger(numericTarget);

    let start: number | null = null;
    let raf: number;

    const animate = (now: number) => {
      if (!start) start = now;
      const elapsed = now - start;
      const t = Math.min(elapsed / (duration * 1000), 1);
      // Ease-out cubic
      const eased = 1 - Math.pow(1 - t, 3);
      const current = eased * numericTarget;

      setDisplay(isInteger ? Math.round(current) + suffix : current.toFixed(1) + suffix);

      if (t < 1) {
        raf = requestAnimationFrame(animate);
      } else {
        setDisplay(target);
      }
    };

    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, [isInView, target, duration]);

  return <span ref={ref}>{display}</span>;
}
