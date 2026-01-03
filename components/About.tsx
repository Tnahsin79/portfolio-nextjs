"use client";

import { aboutContent, stats } from "@/data/constants";
import AnimatedSection from "./ui/AnimatedSection";
import Button from "./ui/Button";

export default function About() {
  return (
    <div id="about" className="scroll-mt-24">
      {/* About Title */}
      <AnimatedSection animation="reveal-left">
        <div className="mb-4 sm:mb-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2 sm:mb-3">
            About me
          </h2>
          <div className="w-1 h-5 sm:h-6 bg-accent rounded-full" />
        </div>
      </AnimatedSection>

      {/* Intro */}
      <AnimatedSection animation="reveal-up" delay={100}>
        <p className="text-gray-300 leading-relaxed mb-4 text-sm sm:text-base font-medium">
          {aboutContent.intro}
        </p>
      </AnimatedSection>

      {/* What I Build - Compact */}
      <AnimatedSection animation="reveal-up" delay={150}>
        <div className="mb-4 p-3 sm:p-4 rounded-lg bg-white/5 border border-white/10">
          <h3 className="text-accent font-semibold text-xs sm:text-sm mb-1.5">
            {aboutContent.whatIBuild.title}
          </h3>
          <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
            {aboutContent.whatIBuild.description}
          </p>
        </div>
      </AnimatedSection>

      {/* Strengths - Inline Tags */}
      <AnimatedSection animation="reveal-up" delay={200}>
        <div className="mb-4">
          <h3 className="text-accent font-semibold text-xs sm:text-sm mb-2">
            {aboutContent.strengths.title}
          </h3>
          <div className="flex flex-wrap gap-2">
            {aboutContent.strengths.items.map((item, index) => (
              <span
                key={index}
                className="px-2.5 py-1.5 rounded-lg bg-white/5 border border-white/10 hover:border-accent/30 transition-colors text-xs sm:text-sm"
              >
                <span className="text-white font-medium">{item.label}</span>
                <span className="text-gray-500 ml-1.5 hidden sm:inline">• {item.desc}</span>
              </span>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Looking For - Compact */}
      <AnimatedSection animation="reveal-up" delay={250}>
        <div className="mb-4 p-3 sm:p-4 rounded-lg bg-accent/10 border border-accent/20">
          <h3 className="text-accent font-semibold text-xs sm:text-sm mb-1.5">
            {aboutContent.lookingFor.title}
          </h3>
          <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
            {aboutContent.lookingFor.description}
          </p>
        </div>
      </AnimatedSection>

      {/* Stats & CTA Row */}
      <AnimatedSection animation="reveal-up" delay={300}>
        <div className="flex flex-wrap items-center gap-4">
          {/* Inline Stat */}
          {stats.map((stat, index) => (
            <div key={index} className="flex items-baseline gap-1">
              <span className="text-2xl sm:text-3xl font-bold text-white">{stat.value}</span>
              <span className="text-accent font-bold text-lg sm:text-xl">{stat.suffix}</span>
              <span className="text-gray-400 text-xs sm:text-sm ml-1">{stat.label}</span>
            </div>
          ))}
          
          {/* CTAs */}
          <div className="flex flex-wrap gap-2 ml-auto">
            <Button variant="primary" href="/api/resume">
              Resume
            </Button>
            <Button variant="outline" href="#contact">
              Let&apos;s Talk
            </Button>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}
