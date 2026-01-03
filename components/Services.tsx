"use client";

import { services } from "@/data/constants";
import ServiceCard from "./ui/ServiceCard";
import AnimatedSection from "./ui/AnimatedSection";

export default function Services() {
  return (
    <div>
      {/* Services Title - visible on mobile when stacked */}
      <AnimatedSection animation="reveal-left">
        <div className="mb-6 sm:mb-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4">
            Services
          </h2>
          <div className="w-1 h-6 sm:h-8 bg-accent rounded-full" />
        </div>
      </AnimatedSection>

      <div className="space-y-4 sm:space-y-6">
        {services.map((service, index) => (
          <AnimatedSection key={service.id} animation="reveal-right" delay={index * 100}>
            <ServiceCard
              title={service.title}
              description={service.description}
              icon={service.icon}
            />
          </AnimatedSection>
        ))}
      </div>
    </div>
  );
}
