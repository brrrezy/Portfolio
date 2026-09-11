"use client";

import { experience, achievements } from "@/lib/data";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function Experience() {
  return (
    <div>
      <ScrollReveal direction="left" delay={0}>
        <h3 className="sub-header">Experience</h3>
      </ScrollReveal>

      {experience.map((item, i) => (
        <ScrollReveal key={i} direction="up" delay={0.1 + i * 0.12} distance={40} blur={3}>
          <div className="exp-card">
            <div>
              <p className="exp-card__company">{item.company}</p>
              <h4 className="exp-card__role">{item.title}</h4>
              <p className="exp-card__location">{item.location}</p>
              <span className="exp-card__date">{item.date}</span>
            </div>
            <div>
              <ul className="exp-card__bullets">
                {item.description.map((bullet, idx) => (
                  <li key={idx} className="exp-card__desc">{bullet}</li>
                ))}
              </ul>
            </div>
          </div>
        </ScrollReveal>
      ))}

      <ScrollReveal direction="left" delay={0}>
        <h3 className="sub-header" style={{ marginTop: '2.5rem' }}>Achievements</h3>
      </ScrollReveal>

      {achievements.map((item, i) => (
        <ScrollReveal key={i} direction="up" delay={0.1 + i * 0.12} distance={35}>
          <div className="exp-card">
            <div>
              <h4 className="exp-card__role">{item.title}</h4>
              <p className="exp-card__location">{item.organization}</p>
            </div>
            <div>
              <p className="exp-card__desc">{item.description}</p>
            </div>
          </div>
        </ScrollReveal>
      ))}
    </div>
  );
}
