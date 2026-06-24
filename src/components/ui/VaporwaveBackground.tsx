"use client";

import React, { useEffect, useRef } from 'react';

export const VaporwaveBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl = canvas.getContext('webgl2', { antialias: false }) as WebGL2RenderingContext | null;
    if (!gl) return;

    /* ── Vertex Shader ── */
    const vsSource = `#version 300 es
      in vec2 position;
      out vec2 vUv;
      void main() {
        vUv = position * 0.5 + 0.5;
        gl_Position = vec4(position, 0.0, 1.0);
      }
    `;

    /* ── Fragment Shader ── */
    const fsSource = `#version 300 es
      precision highp float;
      uniform float uTime;
      uniform vec2 uRes;
      out vec4 fragColor;

      // Simple, reliable grid — no fwidth, no branching
      float gridLine(float coord, float thickness) {
        float halfT = thickness * 0.5;
        float d = abs(fract(coord) - 0.5);  // distance to nearest grid line (0..0.5)
        return smoothstep(halfT + 0.01, halfT, d);
      }

      float hash(float n) { return fract(sin(n) * 43758.5453); }
      float hash2(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }

      float noise1D(float x) {
        float i = floor(x); float f = fract(x);
        f = f * f * (3.0 - 2.0 * f);
        return mix(hash(i), hash(i + 1.0), f);
      }

      float noise2D(vec2 p) {
        vec2 i = floor(p); vec2 f = fract(p);
        f = f * f * (3.0 - 2.0 * f);
        float a = hash2(i);
        float b = hash2(i + vec2(1.0, 0.0));
        float c = hash2(i + vec2(0.0, 1.0));
        float d = hash2(i + vec2(1.0, 1.0));
        return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
      }

      // Terrain height at world position (x, z)
      float terrain(float wx, float wz) {
        float road = smoothstep(0.5, 2.5, abs(wx));
        float h = 0.0;
        h += noise2D(vec2(wx * 0.2, wz * 0.2)) * 1.8;
        h += noise2D(vec2(wx * 0.5, wz * 0.4 + 3.0)) * 0.8;
        return h * road;
      }

      float mountain(float x) {
        return noise1D(x * 1.2) * 0.18 + noise1D(x * 2.5 + 3.7) * 0.10;
      }

      void main() {
        vec2 uv = gl_FragCoord.xy / uRes;
        float aspect = uRes.x / uRes.y;

        float camH = 2.5;
        float scroll = uTime * 0.5;

        vec3 ro = vec3(0.0, camH, 0.0);
        // Point camera downward so grid fills most of the screen
        vec3 rd = normalize(vec3((uv.x - 0.5) * aspect, uv.y - 0.75, 1.0));

        // ── Ray-march against terrain ──
        float t = 0.1;
        bool hit = false;
        vec3 hitPos = vec3(0.0);

        for (int i = 0; i < 60; i++) {
          vec3 p = ro + rd * t;
          float wz = p.z + scroll;
          float h = terrain(p.x, wz);
          if (p.y < h) {
            // Binary refine for sharper hit
            float tBack = t - max(0.05, t * 0.05);
            for (int j = 0; j < 3; j++) {
              float tMid = (tBack + t) * 0.5;
              vec3 pm = ro + rd * tMid;
              float hm = terrain(pm.x, pm.z + scroll);
              if (pm.y < hm) { t = tMid; } else { tBack = tMid; }
            }
            vec3 pFinal = ro + rd * t;
            hitPos = pFinal;
            hitPos.z = pFinal.z + scroll;
            hit = true;
            break;
          }
          t += max(0.05, t * 0.05);
          if (t > 70.0) break;
        }

        if (!hit) {
          // ── Sky ──
          float skyT = clamp((rd.y + 0.1) / 0.5, 0.0, 1.0);
          vec3 skyBot = vec3(0.06, 0.05, 0.04);
          vec3 skyTop = vec3(0.0, 0.0, 0.0);
          vec3 color = mix(skyBot, skyTop, skyT);

          float mBack = mountain(uv.x * 6.0 + 2.0) * 0.22;
          float mFront = mountain(uv.x * 8.0 + 10.0) * 0.14;
          float ha = max(rd.y * 2.0, 0.0);

          if (ha < mBack) color = vec3(0.09, 0.08, 0.07);
          if (ha < mFront) color = vec3(0.04, 0.035, 0.03);

          // Warm amber horizon glow
          float glow = exp(-max(rd.y, 0.0) * 12.0) * 0.22;
          color += vec3(0.28, 0.20, 0.08) * glow;

          fragColor = vec4(color, 1.0);
          return;
        }

        // ── Grid on terrain ──
        float dist = length(hitPos - ro);
        float lineW = 0.02 + dist * 0.001;

        float gx = gridLine(hitPos.x, lineW);
        float gz = gridLine(hitPos.z, lineW);
        float grid = max(gx, gz);

        float fog = 1.0 - smoothstep(20.0, 65.0, dist);

        vec3 bgColor   = vec3(0.0, 0.0, 0.0);
        vec3 lineColor = vec3(0.32, 0.30, 0.26);
        vec3 color = mix(bgColor, lineColor, grid * fog);

        // Warm ambient glow near ground
        float glow = exp(-max(hitPos.y, 0.0) * 2.0) * 0.10;
        color += vec3(0.20, 0.16, 0.10) * glow * fog;

        fragColor = vec4(color, 1.0);
      }
    `;

    /* ── Compile helpers ── */
    const mkShader = (type: number, src: string) => {
      const s = gl.createShader(type)!;
      gl.shaderSource(s, src);
      gl.compileShader(s);
      if (!gl.getShaderParameter(s, gl.COMPILE_STATUS)) {
        console.error('Shader error:', gl.getShaderInfoLog(s));
        return null;
      }
      return s;
    };

    const vs = mkShader(gl.VERTEX_SHADER, vsSource);
    const fs = mkShader(gl.FRAGMENT_SHADER, fsSource);
    if (!vs || !fs) return;

    const prog = gl.createProgram()!;
    gl.attachShader(prog, vs);
    gl.attachShader(prog, fs);
    gl.linkProgram(prog);
    if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) {
      console.error('Link error:', gl.getProgramInfoLog(prog));
      return;
    }

    /* ── Geometry ── */
    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1,-1, 1,-1, -1,1, -1,1, 1,-1, 1,1]), gl.STATIC_DRAW);

    const posLoc = gl.getAttribLocation(prog, 'position');
    const timeLoc = gl.getUniformLocation(prog, 'uTime');
    const resLoc  = gl.getUniformLocation(prog, 'uRes');

    /* ── Render loop ── */
    let rafId: number;
    const t0 = performance.now();

    const render = (now: number) => {
      const t = (now - t0) / 1000;

      gl.viewport(0, 0, canvas.width, canvas.height);
      gl.useProgram(prog);

      gl.enableVertexAttribArray(posLoc);
      gl.bindBuffer(gl.ARRAY_BUFFER, buf);
      gl.vertexAttribPointer(posLoc, 2, gl.FLOAT, false, 0, 0);

      gl.uniform1f(timeLoc, t);
      gl.uniform2f(resLoc, canvas.width, canvas.height);

      gl.drawArrays(gl.TRIANGLES, 0, 6);
      rafId = requestAnimationFrame(render);
    };

    const resize = () => {
      // Adaptive scale: lower on mobile for performance, higher on desktop for clarity
      const isMobile = window.innerWidth < 768;
      const scale = isMobile ? 0.45 : 0.6;
      canvas.width  = window.innerWidth * scale;
      canvas.height = window.innerHeight * scale;
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
