"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "@/lib/data";

export function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");

  const categories = ["All", ...Array.from(new Set(projects.flatMap(p => p.tags)))].slice(0, 5);

  const filtered = activeFilter === "All"
    ? projects
    : projects.filter(p => p.tags.includes(activeFilter));

  return (
    <div>
      {/* Filter Tabs */}
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

      {/* Two-column Card Grid */}
      <div className="card-grid">
        <AnimatePresence mode="popLayout">
          {filtered.map((project) => (
            <motion.div
              key={project.title}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
              className="lesson-card"
            >
              <div className="lesson-card__img">
                <img src={project.image} alt={project.title} />
                {project.link !== "#" && (
                  <a href={project.link} target="_blank" rel="noreferrer" className="lesson-card__badge">Live ↗</a>
                )}
              </div>
              <div className="lesson-card__body">
                <div className="mb-2">
                  <h3 className="lesson-card__title !mb-0">{project.title}</h3>
                </div>
                <p className="lesson-card__desc">{project.description}</p>
                
                <div className="mt-auto pt-4 flex flex-col gap-2">
                  <div className="text-[10px] font-black uppercase tracking-[.2em] text-accent mb-1">Tech Stack</div>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-[11px] font-bold text-[#eee] bg-white/5 border border-white/10 px-3 py-1.5 uppercase tracking-widest">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}
