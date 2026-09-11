"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "@/lib/data";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { ArrowUpRight, GitFork } from "lucide-react";

export function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");

  const categories = ["All", ...Array.from(new Set(projects.flatMap(p => p.tags)))].slice(0, 5);

  const filtered = activeFilter === "All"
    ? projects
    : projects.filter(p => p.tags.includes(activeFilter));

  return (
    <div>
      {/* Filter Tabs */}
      <ScrollReveal direction="down" delay={0} distance={15}>
        <div className="filter-tabs">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`filter-tab ${activeFilter === cat ? "filter-tab--active" : ""}`}
            >
              {cat}
            </button>
          ))}
        </div>
      </ScrollReveal>

      {/* Project Cards */}
      <div className="proj-grid">
        <AnimatePresence mode="popLayout">
          {filtered.map((project, idx) => {
            const isGithub = project.link.includes("github.com");

            return (
              <motion.a
                key={project.title}
                href={project.link}
                target="_blank"
                rel="noreferrer"
                layout
                initial={{ opacity: 0, y: 25, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.4, delay: idx * 0.05, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="proj-card group"
              >
                {/* Header: Title + Link Icon */}
                <div className="proj-card__header">
                  <h3 className="proj-card__title">
                    <span className="proj-card__dot" />
                    {project.title}
                  </h3>
                  <div className="proj-card__link-icon group-hover:bg-white/10 group-hover:text-white transition-colors">
                    {isGithub ? <GitFork size={14} /> : <ArrowUpRight size={14} />}
                  </div>
                </div>

                {/* Body: Description */}
                <p className="proj-card__desc">{project.description}</p>

                {/* Footer: Tags */}
                <div className="proj-card__tags">
                  {project.tags.map(tag => (
                    <span key={tag} className="proj-card__tag">{tag}</span>
                  ))}
                </div>
              </motion.a>
            );
          })}
        </AnimatePresence>
      </div>

      <style jsx>{`
        .proj-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }

        .proj-card {
          padding: 20px 22px;
          border-radius: 12px;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.04);
          display: flex;
          flex-direction: column;
          gap: 12px;
          text-decoration: none;
          color: inherit;
          transition: all 0.3s ease;
        }

        .proj-card:hover {
          background: rgba(255, 255, 255, 0.04);
          border-color: rgba(255, 179, 0, 0.2);
          transform: translateY(-3px);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
        }

        .proj-card__header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 12px;
        }

        .proj-card__title {
          font-family: var(--font-display);
          font-size: 15px;
          font-weight: 700;
          letter-spacing: 0.03em;
          color: #fff;
          margin: 0;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .proj-card__dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--color-accent);
          flex-shrink: 0;
          opacity: 0.7;
          transition: opacity 0.3s ease;
        }

        .proj-card:hover .proj-card__dot {
          opacity: 1;
          box-shadow: 0 0 8px var(--color-accent);
        }

        .proj-card__link-icon {
          width: 28px;
          height: 28px;
          border-radius: 6px;
          background: rgba(255, 255, 255, 0.03);
          color: rgba(255, 255, 255, 0.4);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .proj-card__desc {
          font-family: var(--font-body);
          font-size: 13px;
          line-height: 1.6;
          color: rgba(255, 255, 255, 0.5);
          margin: 0;
          flex: 1;
        }

        .proj-card__tags {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
          margin-top: 4px;
        }

        .proj-card__tag {
          font-family: var(--font-label);
          font-size: 10px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          color: rgba(255, 255, 255, 0.4);
          background: rgba(255, 255, 255, 0.03);
          padding: 4px 8px;
          border-radius: 4px;
          transition: all 0.3s ease;
        }

        .proj-card:hover .proj-card__tag {
          color: rgba(255, 255, 255, 0.7);
          background: rgba(255, 255, 255, 0.06);
        }

        @media (max-width: 767px) {
          .proj-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
}
