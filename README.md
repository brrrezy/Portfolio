# Shivanshu Srivastava — Portfolio

Personal portfolio and resume built with **Next.js 16**, **Framer Motion**, and a custom WebGL background.

## Stack

- **Framework:** Next.js 16 (App Router)
- **Styling:** Vanilla CSS with CSS variables
- **Animations:** Framer Motion + custom WebGL shader
- **Fonts:** Poppins, Space Grotesk, Oxanium (Google Fonts via `next/font`)
- **Resume:** LaTeX → PDF (auto-compiled via GitHub Actions)

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Resume Pipeline

The resume source lives in `resume/`. On every push to `master`, a GitHub Action compiles `main.tex` and commits the PDF to `public/Shivanshu_Srivastava_CV.pdf`.

## Deployment

Deployed on [Vercel](https://shivanshusr.vercel.app).
