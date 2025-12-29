"use client";

import { services } from "@/data/constants";
import ServiceCard from "./ui/ServiceCard";
import AnimatedSection from "./ui/AnimatedSection";

export default function Services() {
  return (
    <div className="space-y-6">
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
  );
}
