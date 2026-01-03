"use client";

import { projects, socialLinks } from "@/data/constants";
import SectionTitle from "./ui/SectionTitle";
import ProjectCard from "./ui/ProjectCard";
import AnimatedSection from "./ui/AnimatedSection";
import Button from "./ui/Button";

export default function Projects() {
  const githubLink = socialLinks.find(link => link.icon === "github");
  
  return (
    <section id="projects" className="py-12 sm:py-16 lg:py-24 border-y border-white/10 bg-white/[0.01]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection animation="reveal-up">
          <SectionTitle
            title="Featured Projects"
            subtitle="Real-world applications I've built that serve thousands of users"
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

        {/* CTA */}
        <AnimatedSection animation="reveal-up" delay={400}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10 md:mt-12">
            {githubLink && (
              <Button variant="outline" href={githubLink.url}>
                View More on GitHub →
              </Button>
            )}
            <Button variant="primary" href="#contact">
              Discuss Your Project
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
