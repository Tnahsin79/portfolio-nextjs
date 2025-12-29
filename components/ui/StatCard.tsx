"use client";

import { useEffect, useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

interface StatCardProps {
  value: string;
  suffix: string;
  label: string;
}

function useCountUp(end: number, duration: number = 2000, start: boolean = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) {
      setCount(0);
      return;
    }
    
    let startTime: number | null = null;
    let animationId: number;
    
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeOutQuart * end));

      if (progress < 1) {
        animationId = requestAnimationFrame(animate);
      }
    };

    animationId = requestAnimationFrame(animate);
    
    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, [end, duration, start]);

  return count;
}

export default function StatCard({ value, suffix, label }: StatCardProps) {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>({ 
    threshold: 0.5,
    triggerOnce: false 
  });
  const numericValue = parseInt(value, 10);
  const count = useCountUp(numericValue, 2000, isVisible);

  return (
    <div 
      ref={ref}
      className="text-center sm:text-left p-3 sm:p-0 rounded-lg sm:rounded-none bg-white/5 sm:bg-transparent hover:bg-white/5 sm:hover:bg-transparent transition-colors group"
    >
      <div className="flex items-baseline justify-center sm:justify-start gap-0.5 sm:gap-1">
        <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-white group-hover:text-accent transition-colors duration-300">
          {count}
        </span>
        <span className="text-xl sm:text-2xl md:text-3xl font-bold text-accent">{suffix}</span>
      </div>
      <p className="text-gray-400 text-xs sm:text-sm mt-1">{label}</p>
    </div>
  );
}
