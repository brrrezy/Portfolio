"use client";

import React, { useEffect, useRef } from 'react';

export const AuroraBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let rafId: number;
    const t0 = performance.now();

    // Aurora blob definitions — soft, organic shapes
    const blobs = [
      { x: 0.25, y: 0.3, rx: 0.35, ry: 0.25, hue: 260, sat: 70, light: 18, speed: 0.15, phase: 0 },
      { x: 0.7,  y: 0.2, rx: 0.3,  ry: 0.2,  hue: 200, sat: 80, light: 14, speed: 0.12, phase: 1.2 },
      { x: 0.5,  y: 0.6, rx: 0.4,  ry: 0.3,  hue: 280, sat: 60, light: 12, speed: 0.1,  phase: 2.5 },
      { x: 0.15, y: 0.7, rx: 0.3,  ry: 0.25, hue: 220, sat: 75, light: 10, speed: 0.18, phase: 3.8 },
      { x: 0.8,  y: 0.65, rx: 0.25, ry: 0.2, hue: 310, sat: 50, light: 10, speed: 0.14, phase: 5.0 },
    ];

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      const scale = window.innerWidth < 768 ? 0.35 : 0.5;
      canvas.width = window.innerWidth * scale * dpr;
      canvas.height = window.innerHeight * scale * dpr;
      canvas.style.width = '100vw';
      canvas.style.height = '100vh';
    };

    const render = (now: number) => {
      const t = (now - t0) / 1000;
      const w = canvas.width;
      const h = canvas.height;

      // Deep dark base
      ctx.fillStyle = '#050505';
      ctx.fillRect(0, 0, w, h);

      // Draw each aurora blob
      ctx.globalCompositeOperation = 'screen';

      for (const b of blobs) {
        const cx = (b.x + Math.sin(t * b.speed + b.phase) * 0.08) * w;
        const cy = (b.y + Math.cos(t * b.speed * 0.7 + b.phase) * 0.06) * h;
        const rx = b.rx * w;
        const ry = b.ry * h;

        // Pulsating alpha
        const alpha = 0.35 + Math.sin(t * b.speed * 1.5 + b.phase) * 0.15;

        const grad = ctx.createRadialGradient(cx, cy, 0, cx, cy, Math.max(rx, ry));
        grad.addColorStop(0, `hsla(${b.hue}, ${b.sat}%, ${b.light + 8}%, ${alpha})`);
        grad.addColorStop(0.4, `hsla(${b.hue}, ${b.sat}%, ${b.light}%, ${alpha * 0.5})`);
        grad.addColorStop(1, `hsla(${b.hue}, ${b.sat}%, ${b.light}%, 0)`);

        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.ellipse(cx, cy, rx, ry, 0, 0, Math.PI * 2);
        ctx.fill();
      }

      // Subtle warm accent — ties in with the amber accent color
      const accentX = (0.55 + Math.sin(t * 0.08) * 0.1) * w;
      const accentY = (0.35 + Math.cos(t * 0.06) * 0.08) * h;
      const accentR = 0.2 * w;
      const accentAlpha = 0.12 + Math.sin(t * 0.2) * 0.04;
      const accentGrad = ctx.createRadialGradient(accentX, accentY, 0, accentX, accentY, accentR);
      accentGrad.addColorStop(0, `hsla(35, 90%, 20%, ${accentAlpha})`);
      accentGrad.addColorStop(1, `hsla(35, 90%, 10%, 0)`);
      ctx.fillStyle = accentGrad;
      ctx.beginPath();
      ctx.ellipse(accentX, accentY, accentR, accentR * 0.7, 0, 0, Math.PI * 2);
      ctx.fill();

      ctx.globalCompositeOperation = 'source-over';

      // Film grain overlay for texture
      const grainAlpha = 0.025;
      const imageData = ctx.getImageData(0, 0, w, h);
      const data = imageData.data;
      for (let i = 0; i < data.length; i += 16) { // sparse grain for performance
        const noise = (Math.random() - 0.5) * 255 * grainAlpha;
        data[i] = Math.min(255, Math.max(0, data[i] + noise));
        data[i + 1] = Math.min(255, Math.max(0, data[i + 1] + noise));
        data[i + 2] = Math.min(255, Math.max(0, data[i + 2] + noise));
      }
      ctx.putImageData(imageData, 0, 0);

      rafId = requestAnimationFrame(render);
    };

    window.addEventListener('resize', resize);
    resize();
    rafId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 0,
        width: '100vw',
        height: '100vh',
        display: 'block',
        pointerEvents: 'none',
      }}
    />
  );
};
