"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { skills } from "@/lib/data";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

function SkillBar({ skill, delay }: { skill: { name: string; slug: string; level: number }; delay: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-30px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 15 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
      transition={{ duration: 0.4, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="skill-bar-item"
    >
      <div className="skill-bar-icon">
        <img
          src={`https://cdn.simpleicons.org/${skill.slug}/FFB300`}
          alt={skill.name}
          width={16}
          height={16}
          style={{ objectFit: "contain" }}
          onError={(e) => {
            (e.target as HTMLElement).style.display = 'none';
          }}
        />
      </div>
      <div className="skill-bar-info">
        <span className="skill-bar-name">{skill.name}</span>
        <div className="skill-bar-track">
          <motion.div
            className="skill-bar-fill"
            initial={{ width: 0 }}
            animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
            transition={{ duration: 1, delay: delay + 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          />
        </div>
      </div>

      <style jsx>{`
        .skill-bar-item {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 10px 14px;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.04);
          border-radius: 10px;
          transition: all 0.3s ease;
        }
        .skill-bar-item:hover {
          background: rgba(255, 255, 255, 0.04);
          border-color: rgba(255, 179, 0, 0.12);
          transform: translateX(4px);
        }
        .skill-bar-icon {
          width: 32px;
          height: 32px;
          border-radius: 8px;
          background: rgba(255, 179, 0, 0.08);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .skill-bar-info {
          flex: 1;
          min-width: 0;
          display: flex;
          flex-direction: column;
          gap: 5px;
        }
        .skill-bar-name {
          font-family: var(--font-label);
          font-size: 12px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          color: #ddd;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .skill-bar-track {
          width: 100%;
          height: 3px;
          background: rgba(255, 255, 255, 0.06);
          border-radius: 2px;
          overflow: hidden;
        }
      `}</style>
    </motion.div>
  );
}

export function Skills() {
  return (
    <div className="skills-grid">
      {Object.entries(skills).map(([category, items], catIdx) => (
        <div key={category} className="skill-category">
          <ScrollReveal direction="left" delay={catIdx * 0.1} distance={25}>
            <h3 className="sub-header !mt-0 !mb-6">
              <span>{category.toUpperCase()}</span>
            </h3>
          </ScrollReveal>
          <div className="skill-list">
            {items.map((skill, idx) => (
              <SkillBar key={skill.name} skill={skill} delay={0.05 + idx * 0.06} />
            ))}
          </div>
        </div>
      ))}

      <style jsx>{`
        .skills-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2.5rem 3rem;
        }
        .skill-category {
          display: flex;
          flex-direction: column;
        }
        .skill-list {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        @media (max-width: 767px) {
          .skills-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
        }
      `}</style>
    </div>
  );
}
