"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState<"loading" | "reveal" | "done">("loading");

  useEffect(() => {
    // Simulate loading with acceleration
    let raf: number;
    let start: number;
    const duration = 1800; // 1.8s total load time

    const tick = (now: number) => {
      if (!start) start = now;
      const elapsed = now - start;
      const t = Math.min(elapsed / duration, 1);
      // Ease-out curve for natural feel
      const eased = 1 - Math.pow(1 - t, 3);
      setProgress(Math.round(eased * 100));

      if (t < 1) {
        raf = requestAnimationFrame(tick);
      } else {
        setPhase("reveal");
        setTimeout(() => {
          setPhase("done");
          onComplete();
        }, 600);
      }
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {phase !== "done" && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 10000,
            background: "#050505",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "2rem",
          }}
        >
          {/* Logo / Name */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(1.4rem, 3vw, 2.2rem)",
              fontWeight: 800,
              textTransform: "uppercase",
              letterSpacing: "0.15em",
              color: "#fff",
            }}
          >
            <span style={{ color: "#FFB300" }}>S</span>HIVANSHU
          </motion.div>

          {/* Progress bar container */}
          <div style={{
            width: "min(260px, 60vw)",
            display: "flex",
            flexDirection: "column",
            gap: "0.75rem",
            alignItems: "center",
          }}>
            {/* Track */}
            <div style={{
              width: "100%",
              height: "2px",
              background: "rgba(255,255,255,0.06)",
              borderRadius: "2px",
              overflow: "hidden",
            }}>
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.1 }}
                style={{
                  height: "100%",
                  background: "linear-gradient(90deg, #FFB300, #FFD54F)",
                  borderRadius: "2px",
                  boxShadow: "0 0 12px rgba(255,179,0,0.4)",
                }}
              />
            </div>

            {/* Progress label */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              style={{
                fontFamily: "var(--font-label)",
                fontSize: "10px",
                fontWeight: 700,
                letterSpacing: "0.15em",
                color: "rgba(255,255,255,0.25)",
                textTransform: "uppercase",
              }}
            >
              {phase === "reveal" ? "READY" : `INITIALIZING · ${progress}%`}
            </motion.div>
          </div>

          {/* Decorative dots */}
          <div style={{ display: "flex", gap: "6px", marginTop: "0.5rem" }}>
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                animate={{
                  opacity: [0.2, 0.8, 0.2],
                  scale: [0.8, 1.2, 0.8],
                }}
                transition={{
                  duration: 1.2,
                  repeat: Infinity,
                  delay: i * 0.2,
                  ease: "easeInOut",
                }}
                style={{
                  width: "4px",
                  height: "4px",
                  borderRadius: "50%",
                  background: "#FFB300",
                }}
              />
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
