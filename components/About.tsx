"use client";

import { aboutContent, stats } from "@/data/constants";
import StatCard from "./ui/StatCard";
import AnimatedSection from "./ui/AnimatedSection";
import Button from "./ui/Button";

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

      {/* Intro */}
      <AnimatedSection animation="reveal-up" delay={100}>
        <p className="text-gray-300 leading-relaxed mb-6 text-sm sm:text-base md:text-lg font-medium">
          {aboutContent.intro}
        </p>
      </AnimatedSection>

      {/* What I Build */}
      <AnimatedSection animation="reveal-up" delay={150}>
        <div className="mb-6 p-4 sm:p-5 rounded-xl bg-white/5 border border-white/10">
          <h3 className="text-accent font-semibold text-sm sm:text-base mb-2">
            {aboutContent.whatIBuild.title}
          </h3>
          <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
            {aboutContent.whatIBuild.description}
          </p>
        </div>
      </AnimatedSection>

      {/* Strengths Grid */}
      <AnimatedSection animation="reveal-up" delay={200}>
        <div className="mb-6">
          <h3 className="text-accent font-semibold text-sm sm:text-base mb-3">
            {aboutContent.strengths.title}
          </h3>
          <div className="grid grid-cols-2 gap-2 sm:gap-3">
            {aboutContent.strengths.items.map((item, index) => (
              <div
                key={index}
                className="p-3 rounded-lg bg-white/5 border border-white/10 hover:border-accent/30 transition-colors"
              >
                <p className="text-white text-xs sm:text-sm font-medium mb-0.5">
                  {item.label}
                </p>
                <p className="text-gray-500 text-[10px] sm:text-xs">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Looking For */}
      <AnimatedSection animation="reveal-up" delay={250}>
        <div className="mb-6 sm:mb-8 p-4 sm:p-5 rounded-xl bg-accent/10 border border-accent/20">
          <h3 className="text-accent font-semibold text-sm sm:text-base mb-2">
            {aboutContent.lookingFor.title}
          </h3>
          <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
            {aboutContent.lookingFor.description}
          </p>
        </div>
      </AnimatedSection>

      {/* Stats */}
      <AnimatedSection animation="reveal-scale" delay={300}>
        <div className="grid grid-cols-1 gap-4 sm:gap-6 mb-6">
          {stats.map((stat, index) => (
            <StatCard
              key={index}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
            />
          ))}
        </div>
      </AnimatedSection>

      {/* CTA */}
      <AnimatedSection animation="reveal-up" delay={350}>
        <div className="flex flex-wrap gap-3">
          <Button variant="primary" href="/api/resume">
            View Resume
          </Button>
          <Button variant="outline" href="#contact">
            Let&apos;s Talk
          </Button>
        </div>
      </AnimatedSection>
    </div>
  );
}
