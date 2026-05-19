"use client";

import { personalInfo, services, skills } from "@/lib/data";

export function About() {
  return (
    <div>
      {/* Top Section: Hero & Detailed Info */}
      <div className="grid grid-cols-1 md:grid-cols-[1fr_1.1fr] gap-12 items-start">
        {/* Left Column: Bio */}
        <div className="max-w-[420px]">
          <h3 className="sub-header !mt-0"><div><span className="text-accent">HEY,</span> THERE 👋</div></h3>

          <p className="text-muted leading-relaxed text-[15px] font-medium" style={{ textAlign: 'justify' }}>
            I'm Shivanshu, a full-stack developer focused on AI-powered financial systems, quantitative trading infrastructure, and intelligent productivity platforms. I emphasize automation, low-latency architectures, and high-fidelity product design using modern AI tooling.
          </p>
        </div>

        {/* Right Column: Key-Value Details & Skills */}
        <div className="flex flex-col gap-8 md:pl-10">
          {/* Detailed Info Rows */}
          <div className="flex flex-col gap-4">
            {[
              { label: "FREELANCE:", value: "AVAILABLE" },
              { label: "LOCATION:", value: "VARANASI, IN" },
              { label: "LANGUAGES:", value: "EN, HI" },
            ].map((item) => (
              <div key={item.label} className="flex justify-between items-center gap-6">
                <div className="bg-accent text-black text-[11px] font-black uppercase tracking-widest px-3 py-2.5 text-center shrink-0 min-w-[110px] rounded-none">
                  {item.label}
                </div>
                <div className="text-right text-[14px] font-black text-white/90 tracking-widest uppercase">
                  {item.value}
                </div>
              </div>
            ))}
          </div>

          {/* Skills Section - Icons start in the same row as key */}
          <div className="flex justify-between items-start pt-4 border-t border-white/5">
            <div className="bg-accent text-black text-[11px] font-black uppercase tracking-widest px-3 py-2.5 text-center shrink-0 min-w-[110px] rounded-none">
              SKILLS:
            </div>

            <div className="grid grid-cols-4 gap-3">
              {Object.values(skills).flat().slice(0, 8).map((skill, idx) => (
                <div
                  key={idx}
                  className="skill-icon"
                  data-label={skill.name.toUpperCase()}
                >
                  <img
                    src={`https://cdn.simpleicons.org/${skill.slug}/black`}
                    alt={skill.name}
                    className="w-4 h-4 object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="mt-32">
        <h3 className="sub-header !mb-8">
          <div><span className="text-accent">S</span>ERVICES</div>
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {services.map((svc) => (
            <div key={svc.id} className="svc-card">
              <h4 className="svc-card__heading">
                <span>{svc.id}.</span> {svc.title}
              </h4>
              <p className="svc-card__desc" style={{ flex: 1 }}>
                {svc.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Fun Facts Section */}
      <div className="mt-32">
        <h3 className="sub-header !mb-8">
          <div><span className="text-accent">F</span>UN FACTS</div>
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-4">
          {[
            { num: "12+", label: "Projects Completed" },
            { num: "3+", label: "Years Experience" },
            { num: "50k", label: "Lines of Code" },
            { num: "10+", label: "Happy Clients" },
          ].map((fact) => (
            <div key={fact.label} className="svc-card flex flex-col items-center justify-center text-center">
              <h4 className="text-[28px] md:text-[36px] font-black text-accent mb-1 md:mb-2 leading-none">{fact.num}</h4>
              <p className="text-[#a1a1a1] text-[9px] md:text-[11px] font-bold tracking-widest uppercase mt-2">{fact.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
