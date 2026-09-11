"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ProfileCard } from "@/components/ProfileCard";
import { About } from "@/components/About";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { Experience } from "@/components/Experience";
import { Contact } from "@/components/Contact";
import { User, Briefcase, Code2, GraduationCap, Mail, Sun, HelpCircle } from "lucide-react";
import { AuroraBackground } from "@/components/ui/AuroraBackground";
import { LoadingScreen } from "@/components/ui/LoadingScreen";

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

// Staggered entrance for the grid panes
const paneVariants = {
  hidden: { opacity: 0, y: 25, scale: 0.96 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.55,
      delay: i * 0.08,
      ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
    },
  }),
};

export default function Home() {
  const [tab, setTab] = useState("about");
  const [ok, setOk] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [showUpdates, setShowUpdates] = useState(false);

  useEffect(() => setOk(true), []);

  const handleLoadComplete = useCallback(() => {
    setLoaded(true);
  }, []);

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

  if (!ok) return <div style={{ background: "#050505", height: "100vh" }} />;

  return (
    <>
      {/* Loading Screen */}
      {!loaded && <LoadingScreen onComplete={handleLoadComplete} />}

      {/* Background Effect */}
      <AuroraBackground />

      <div className="grid-shell" style={{ opacity: loaded ? 1 : 0, transition: "opacity 0.3s ease" }}>

        {/* P1: Logo / Home - Yellow Question Button */}
        <motion.div
          className="pane p-logo"
          onClick={() => setShowUpdates(true)}
          custom={0}
          initial="hidden"
          animate={loaded ? "visible" : "hidden"}
          variants={paneVariants}
        >
          <button className="help-trigger-btn" title="Current Updates & Facts">
            <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" style={{ display: "block" }}>
              <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
              <line x1="12" y1="17" x2="12.01" y2="17" />
            </svg>
          </button>
        </motion.div>

        {/* P2: Mode Toggle */}
        <motion.div
          className="pane p-mode"
          custom={1}
          initial="hidden"
          animate={loaded ? "visible" : "hidden"}
          variants={paneVariants}
        >
          <button title="Toggle theme" className="nav-icon" data-label="MODE">
            <Sun size={24} />
          </button>
        </motion.div>

        {/* P3: Nav Icons */}
        <motion.nav
          className="pane p-nav"
          custom={2}
          initial="hidden"
          animate={loaded ? "visible" : "hidden"}
          variants={paneVariants}
        >
          {TABS.map((t, i) => {
            const Icon = t.icon;
            return (
              <motion.button
                key={t.id}
                onClick={() => setTab(t.id)}
                className={`nav-icon ${tab === t.id ? "nav-icon--active" : ""}`}
                title={t.id}
                data-label={t.id.toUpperCase()}
                initial={{ opacity: 0, x: -15 }}
                animate={loaded ? { opacity: 1, x: 0 } : { opacity: 0, x: -15 }}
                transition={{ duration: 0.4, delay: 0.3 + i * 0.07 }}
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.92 }}
              >
                <Icon size={24} />
              </motion.button>
            );
          })}
        </motion.nav>

        {/* P4: Content (changes) */}
        <motion.div
          className="pane p-content"
          custom={3}
          initial="hidden"
          animate={loaded ? "visible" : "hidden"}
          variants={paneVariants}
        >
          <div className="p-content__hero">
            <span className="hero-dot hero-dot--1" />
            <span className="hero-dot hero-dot--2" />
            <AnimatePresence mode="wait">
              <motion.div key={tab + "-h"} initial={{ opacity: 0, y: 12, scale: 0.96, filter: "blur(6px)" }} animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }} exit={{ opacity: 0, y: -10, scale: 0.96, filter: "blur(6px)" }} transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }} style={{ textAlign: "center", zIndex: 5, position: "relative" }}>
                <p className="hero-sub">{h.sub}</p>
                <h1 className="hero-title">{h.title}</h1>
              </motion.div>
            </AnimatePresence>
          </div>
          <div className="p-content__body">
            <AnimatePresence mode="wait">
              <motion.div key={tab} initial={{ opacity: 0, y: 20, scale: 0.98, filter: "blur(4px)" }} animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }} exit={{ opacity: 0, y: -14, scale: 0.98, filter: "blur(4px)" }} transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}>
                {content()}
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>

        {/* P5: Profile (constant) */}
        <motion.aside
          className="pane p-profile"
          custom={4}
          initial="hidden"
          animate={loaded ? "visible" : "hidden"}
          variants={paneVariants}
        >
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
        </motion.aside>

        {/* P6: Footer */}
        <motion.div
          className="pane p-footer"
          custom={5}
          initial="hidden"
          animate={loaded ? "visible" : "hidden"}
          variants={paneVariants}
        >
          <p>© 2026 <span className="hl">Shivanshu</span> · powered by <span className="hl">Next.js</span></p>
        </motion.div>
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

      {/* System Status & Updates Modal */}
      <AnimatePresence>
        {showUpdates && (
          <div className="modal-overlay" onClick={() => setShowUpdates(false)}>
            <motion.div 
              className="hud-modal"
              initial={{ opacity: 0, scale: 0.88, y: 20, filter: "blur(10px)" }}
              animate={{ opacity: 1, scale: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, scale: 0.88, y: 20, filter: "blur(10px)" }}
              transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="hud-header">
                <div className="hud-title-wrap">
                  <span className="hud-glitch-dot" />
                  <span className="hud-code">SYS.LOG // CORE_OPERATIONS</span>
                </div>
                <button className="hud-close" onClick={() => setShowUpdates(false)}>
                  [ ESC_ ]
                </button>
              </div>

              {/* Grid Body */}
              <div className="hud-grid">
                {/* Column 1: Active Operations */}
                <div className="hud-col hud-col--left">
                  <div className="hud-section">
                    <div className="hud-section-header">
                      <span className="hud-section-num">01/</span>
                      <span className="hud-section-title">ACTIVE PIPELINES</span>
                    </div>
                    <div className="hud-activity">
                      <div className="hud-activity-item">
                        <div className="hud-activity-status">
                          <span className="hud-pulse-dot" />
                          <span className="hud-status-tag">DEV_RUNNING</span>
                        </div>
                        <p className="hud-activity-desc">
                          Webhook-based compliance monitor tracking live regulatory changes from <strong>NSE, BSE, MCX, & RBI</strong>. (SunHacks '26)
                        </p>
                      </div>
                      <div className="hud-activity-item">
                        <div className="hud-activity-status">
                          <span className="hud-pulse-dot" />
                          <span className="hud-status-tag">STABLE</span>
                        </div>
                        <p className="hud-activity-desc">
                          TradeFlow terminal integrations: automated position sizing, algorithmic risk controls, and GPT-4 trading execution grader.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="hud-section">
                    <div className="hud-section-header">
                      <span className="hud-section-num">02/</span>
                      <span className="hud-section-title">TECHNOLOGY GRID</span>
                    </div>
                    <div className="hud-tech-tags">
                      <span className="hud-tag">Python</span>
                      <span className="hud-tag">Next.js</span>
                      <span className="hud-tag">FastAPI</span>
                      <span className="hud-tag">ChromaDB</span>
                      <span className="hud-tag">LangChain</span>
                      <span className="hud-tag">Docker</span>
                      <span className="hud-tag">AWS</span>
                      <span className="hud-tag">PostgreSQL</span>
                      <span className="hud-tag">MongoDB</span>
                    </div>
                  </div>
                </div>

                {/* Column 2: Operator Metadata */}
                <div className="hud-col hud-col--right">
                  <div className="hud-section">
                    <div className="hud-section-header">
                      <span className="hud-section-num">03/</span>
                      <span className="hud-section-title">OPERATOR LOG</span>
                    </div>
                    <div className="hud-log-lines">
                      <div className="hud-log-line">
                        <span className="hud-log-label">LOC:</span>
                        <span className="hud-log-value">Varanasi, UP, IN</span>
                      </div>
                      <div className="hud-log-line">
                        <span className="hud-log-label">STATUS:</span>
                        <span className="hud-log-value text-accent">FREELANCE / CONTRACT</span>
                      </div>
                      <div className="hud-log-line">
                        <span className="hud-log-label">AWS AUTH:</span>
                        <span className="hud-log-value">CERTIFIED DEVELOPER</span>
                      </div>
                      <div className="hud-log-line">
                        <span className="hud-log-label">AGILE:</span>
                        <span className="hud-log-value">SCRUM MASTER (CSM)</span>
                      </div>
                    </div>
                  </div>

                  <div className="hud-section">
                    <div className="hud-section-header">
                      <span className="hud-section-num">04/</span>
                      <span className="hud-section-title">ACHIEVEMENT METRICS</span>
                    </div>
                    <div className="hud-metrics">
                      <div className="hud-metric-row">
                        <span className="hud-metric-label">AICTE HACKATHON</span>
                        <span className="hud-metric-badge">WINNER</span>
                      </div>
                      <div className="hud-metric-row">
                        <span className="hud-metric-label">SUNHACKS 24 / 26</span>
                        <span className="hud-metric-badge badge-accent">TOP 10</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Visual Terminal Bar */}
                  <div className="hud-terminal-bar">
                    <div className="hud-terminal-text">&gt; SH_SRV_ONLINE // SECURE</div>
                    <div className="hud-terminal-cursor" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
