"use client";

import { motion } from "framer-motion";
import { skills } from "@/lib/data";

export function Skills() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
      {Object.entries(skills).map(([category, items]) => (
        <div key={category} className="space-y-6">
          <h3 className="sub-header !mt-0 !mb-10">
            <span>{category.toUpperCase()}</span>
          </h3>
          <div className="grid grid-cols-2 gap-y-4 gap-x-8">
            {items.map((skill) => (
              <div key={skill.name} className="flex items-center gap-3 group">
                <div className="w-1.5 h-1.5 bg-accent rounded-full group-hover:scale-150 transition-transform duration-300" />
                <span className="text-[13px] font-medium text-[#bebebe] uppercase tracking-wider group-hover:text-white transition-colors">
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
