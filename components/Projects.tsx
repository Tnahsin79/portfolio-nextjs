"use client";

import { projects } from "@/data/constants";
import SectionTitle from "./ui/SectionTitle";
import ProjectCard from "./ui/ProjectCard";
import AnimatedSection from "./ui/AnimatedSection";

export default function Projects() {
  return (
    <section id="projects" className="py-12 sm:py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection animation="reveal-up">
          <SectionTitle
            title="Projects"
            subtitle="A selection of my recent work and personal projects"
          />
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <AnimatedSection
              key={project.id}
              animation="reveal-scale"
              delay={index * 100}
            >
              <ProjectCard
                title={project.title}
                description={project.description}
                image={project.image}
                tags={project.tags}
                liveUrl={project.liveUrl}
                githubUrl={project.githubUrl}
              />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
