"use client";

import { services } from "@/data/constants";
import ServiceCard from "./ui/ServiceCard";
import AnimatedSection from "./ui/AnimatedSection";

export default function Services() {
  return (
    <div>
      {/* Services Title */}
      <AnimatedSection animation="reveal-left">
        <div className="mb-4 sm:mb-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2 sm:mb-3">
            Services
          </h2>
          <div className="w-1 h-5 sm:h-6 bg-accent rounded-full" />
        </div>
      </AnimatedSection>

      <div className="space-y-3 sm:space-y-4">
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
