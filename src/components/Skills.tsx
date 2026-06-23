"use client";

import { motion } from "framer-motion";
import { skills } from "@/lib/data";

export function Skills() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
      {Object.entries(skills).map(([category, items]) => (
        <div key={category} className="space-y-6">
          <h3 className="sub-header !mt-0 !mb-8">
            <span>{category.toUpperCase()}</span>
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {items.map((skill) => (
              <div key={skill.name} className="flex items-center gap-4 group bg-white/[0.02] border border-white/[0.04] p-3 rounded-lg hover:bg-white/[0.04] hover:border-white/[0.08] transition-all duration-300">
                <div className="w-8 h-8 rounded bg-white/[0.03] flex items-center justify-center shrink-0 group-hover:bg-accent/10 transition-colors duration-300">
                  <img
                    src={`https://cdn.simpleicons.org/${skill.slug}/ffffff`}
                    alt={skill.name}
                    className="w-4 h-4 object-contain group-hover:scale-115 group-hover:hidden transition-all duration-300"
                    onError={(e) => {
                      (e.target as HTMLElement).style.display = 'none';
                    }}
                  />
                  <img
                    src={`https://cdn.simpleicons.org/${skill.slug}/FFB300`}
                    alt={skill.name}
                    className="w-4 h-4 object-contain scale-115 hidden group-hover:block transition-all duration-300"
                    onError={(e) => {
                      (e.target as HTMLElement).style.display = 'none';
                    }}
                  />
                </div>
                <span className="text-[13px] font-bold text-[#bebebe] uppercase tracking-wider group-hover:text-white transition-colors duration-300">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
