"use client";

import { skillCategories } from "@/data/constants";
import AnimatedSection from "./ui/AnimatedSection";
import SectionTitle from "./ui/SectionTitle";

// Icon components for each category
const CategoryIcon = ({ type }: { type: string }) => {
  const iconClass = "w-6 h-6 sm:w-8 sm:h-8 text-accent";
  
  switch (type) {
    case "frontend":
      return (
        <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <path d="M9 9l3 3-3 3" />
          <path d="M15 15h-3" />
        </svg>
      );
    case "backend":
      return (
        <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="4" y="4" width="16" height="6" rx="1" />
          <rect x="4" y="14" width="16" height="6" rx="1" />
          <circle cx="8" cy="7" r="1" fill="currentColor" />
          <circle cx="8" cy="17" r="1" fill="currentColor" />
        </svg>
      );
    case "database":
      return (
        <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <ellipse cx="12" cy="5" rx="8" ry="3" />
          <path d="M4 5v14c0 1.66 3.58 3 8 3s8-1.34 8-3V5" />
          <path d="M4 12c0 1.66 3.58 3 8 3s8-1.34 8-3" />
        </svg>
      );
    case "tools":
      return (
        <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
        </svg>
      );
    default:
      return null;
  }
};

export default function Skills() {
  return (
    <section id="skills" className="py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection animation="reveal-up">
          <SectionTitle
            subtitle="My Expertise"
            title="Skills"
          />
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mt-10 md:mt-12">
          {skillCategories.map((category, index) => (
            <AnimatedSection
              key={category.title}
              animation="reveal-up"
              delay={index * 100}
            >
              <div className="group bg-white/5 border border-white/10 rounded-2xl p-5 md:p-6 hover:bg-white/[0.08] hover:border-accent/30 transition-all duration-300 hover-lift h-full">
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-4 md:mb-5">
                  <div className="p-2.5 bg-accent/10 rounded-xl group-hover:bg-accent/20 transition-colors duration-300">
                    <CategoryIcon type={category.icon} />
                  </div>
                  <h3 className="text-lg md:text-xl font-semibold text-white group-hover:text-accent transition-colors duration-300">
                    {category.title}
                  </h3>
                </div>

                {/* Skills List */}
                <ul className="space-y-2.5">
                  {category.skills.map((skill) => (
                    <li
                      key={skill}
                      className="flex items-center gap-2 text-gray-400 group-hover:text-gray-300 transition-colors duration-300"
                    >
                      <span className="w-1.5 h-1.5 bg-accent rounded-full flex-shrink-0" />
                      <span className="text-sm md:text-base">{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
