"use client";

import { personalInfo, stats } from "@/data/constants";
import StatCard from "./ui/StatCard";
import AnimatedSection from "./ui/AnimatedSection";

export default function About() {
  return (
    <div id="about" className="scroll-mt-24">
      {/* About Title */}
      <AnimatedSection animation="reveal-left">
        <div className="mb-6 sm:mb-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4">
            About me
          </h2>
          <div className="w-1 h-6 sm:h-8 bg-accent rounded-full" />
        </div>
      </AnimatedSection>

      <AnimatedSection animation="reveal-up" delay={100}>
        <p className="text-gray-400 leading-relaxed mb-8 sm:mb-10 text-sm sm:text-base md:text-lg">
          {personalInfo.bio}
        </p>
      </AnimatedSection>

      {/* Stats - responsive grid */}
      <div className="grid grid-cols-1 xs:grid-cols-3 sm:grid-cols-3 gap-4 sm:gap-6">
        {stats.map((stat, index) => (
          <AnimatedSection key={index} animation="reveal-scale" delay={200 + index * 100}>
            <StatCard
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
            />
          </AnimatedSection>
        ))}
      </div>
    </div>
  );
}
