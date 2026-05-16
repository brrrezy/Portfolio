"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ProfileCard } from "@/components/ProfileCard";
import { About } from "@/components/About";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { Experience } from "@/components/Experience";
import { Contact } from "@/components/Contact";
import { User, Briefcase, Code2, GraduationCap, Mail, Sun } from "lucide-react";
import { VaporwaveBackground } from "@/components/ui/VaporwaveBackground";

const TABS = [
  { id: "about", icon: User },
  { id: "experience", icon: GraduationCap },
  { id: "projects", icon: Briefcase },
  { id: "skills", icon: Code2 },
  { id: "contact", icon: Mail },
] as const;

const HERO: Record<string, { sub: string; title: string }> = {
  about: { sub: "Who I Am", title: "About Me" },
  experience: { sub: "What I Do", title: "Resume" },
  projects: { sub: "My Work", title: "Projects" },
  skills: { sub: "My Talent", title: "Skills" },
  contact: { sub: "Get In Touch", title: "Contact" },
};

export default function Home() {
  const [tab, setTab] = useState("about");
  const [ok, setOk] = useState(false);
  useEffect(() => setOk(true), []);

  const h = HERO[tab] || HERO.about;

  const content = () => {
    switch (tab) {
      case "about": return <About />;
      case "experience": return <Experience />;
      case "projects": return <Projects />;
      case "skills": return <Skills />;
      case "contact": return <Contact />;
      default: return <About />;
    }
  };

  if (!ok) return <div style={{ background: "#000", height: "100vh" }} />;

  return (
    <>
      {/* Background Effect */}
      <VaporwaveBackground />

      <div className="grid-shell">

        {/* P1: Logo / Home */}
        <div className="pane p-logo" onClick={() => setTab("about")}>
          <span>SR</span>
        </div>

        {/* P2: Mode Toggle */}
        <div className="pane p-mode">
          <button title="Toggle theme" className="nav-icon" data-label="MODE">
            <Sun size={24} />
          </button>
        </div>

        {/* P3: Nav Icons */}
        <nav className="pane p-nav">
          {TABS.map((t) => {
            const Icon = t.icon;
            return (
              <button key={t.id} onClick={() => setTab(t.id)}
                className={`nav-icon ${tab === t.id ? "nav-icon--active" : ""}`}
                title={t.id}
                data-label={t.id.toUpperCase()}
              >
                <Icon size={24} />
              </button>
            );
          })}
        </nav>

        {/* P4: Content (changes) */}
        <div className="pane p-content">
          <div className="p-content__hero">
            <span className="hero-dot hero-dot--1" />
            <span className="hero-dot hero-dot--2" />
            <AnimatePresence mode="wait">
              <motion.div key={tab + "-h"} initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -6 }} transition={{ duration: 0.2 }} style={{ textAlign: "center", zIndex: 5, position: "relative" }}>
                <p className="hero-sub">{h.sub}</p>
                <h1 className="hero-title">{h.title}</h1>
              </motion.div>
            </AnimatePresence>
          </div>
          <div className="p-content__body">
            <AnimatePresence mode="wait">
              <motion.div key={tab} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.22 }}>
                {content()}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* P5: Profile (constant) */}
        <aside className="pane p-profile">
          <div className="p-profile__hero">
            {/* Same height as content hero */}
          </div>
          <div className="p-profile__body">
            <ProfileCard onContact={() => setTab("contact")} />
          </div>
          <div className="prof-actions">
            <a href="/assets/docs/Shivanshu_Srivastava_cv.pdf" download="Shivanshu_Srivastava_CV.pdf" target="_blank" rel="noreferrer" className="prof-btn">
              <span className="prof-btn__icon">⤓</span> Download CV
            </a>
            <button onClick={() => setTab("contact")} className="prof-btn">
              <span className="prof-btn__icon">@</span> Contact Me
            </button>
          </div>
        </aside>

        {/* P6: Footer */}
        <div className="pane p-footer">
          <p>© 2026 <span className="hl">Shivanshu</span> · powered by <span className="hl">Next.js</span></p>
        </div>
      </div>

      {/* Mobile Bottom Nav - visible only on small screens */}
      <nav className="mobile-nav">
        {TABS.map((t) => {
          const Icon = t.icon;
          return (
            <button
              key={t.id}
              onClick={() => setTab(t.id)}
              className={`mobile-nav__btn ${tab === t.id ? "mobile-nav__btn--active" : ""}`}
            >
              <Icon size={20} />
              <span>{t.id}</span>
            </button>
          );
        })}
      </nav>
    </>
  );
}
