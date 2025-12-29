"use client";

import { ReactNode } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

interface AnimatedSectionProps {
  children: ReactNode;
  animation?: "reveal-up" | "reveal-left" | "reveal-right" | "reveal-scale";
  delay?: number;
  className?: string;
  triggerOnce?: boolean;
}

export default function AnimatedSection({
  children,
  animation = "reveal-up",
  delay = 0,
  className = "",
  triggerOnce = false,
}: AnimatedSectionProps) {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>({
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
    triggerOnce,
  });

  return (
    <div
      ref={ref}
      className={`scroll-animate ${animation} ${isVisible ? "is-visible" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
