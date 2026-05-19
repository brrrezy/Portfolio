"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ProfileCard } from "@/components/ProfileCard";
import { About } from "@/components/About";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { Experience } from "@/components/Experience";
import { Contact } from "@/components/Contact";
import { User, Briefcase, Code2, GraduationCap, Mail, Sun, HelpCircle } from "lucide-react";
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
  const [showUpdates, setShowUpdates] = useState(false);
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

        {/* P1: Logo / Home - Yellow Question Button */}
        <div className="pane p-logo" onClick={() => setShowUpdates(true)}>
          <button className="help-trigger-btn" title="Current Updates & Facts">
            <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" style={{ display: "block" }}>
              <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
              <line x1="12" y1="17" x2="12.01" y2="17" />
            </svg>
          </button>
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

      {/* System Status & Updates Modal */}
      <AnimatePresence>
        {showUpdates && (
          <div className="modal-overlay" onClick={() => setShowUpdates(false)}>
            <motion.div 
              className="hud-modal"
              initial={{ opacity: 0, scale: 0.93, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.93, y: 15 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
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
