import { experiences } from "@/data/constants";
import SectionTitle from "./ui/SectionTitle";

export default function Experience() {
  return (
    <section id="experience" className="py-16 lg:py-24 bg-white/[0.02]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Experience"
          subtitle="My professional journey and work experience"
        />

        <div className="relative">
          {/* Timeline Line - hidden on mobile, shown from md */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-accent/30 transform -translate-x-1/2" />

          <div className="space-y-8 md:space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={exp.id}
                className={`relative flex flex-col md:flex-row gap-4 md:gap-8 ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Timeline Dot - only visible on md+ */}
                <div className="hidden md:block absolute left-1/2 w-4 h-4 bg-accent rounded-full transform -translate-x-1/2 mt-6">
                  <div className="absolute inset-0 bg-accent rounded-full animate-ping opacity-20" />
                </div>

                {/* Content */}
                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}>
                  <div className="bg-white/5 rounded-xl p-4 sm:p-6 border border-white/10 hover:border-accent/50 transition-all duration-300 hover:-translate-y-1">
                    {/* Duration Badge */}
                    <span className="inline-block px-3 py-1 text-xs font-medium text-accent bg-accent/10 rounded-full mb-3 sm:mb-4">
                      {exp.duration}
                    </span>

                    {/* Role & Company */}
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-1">
                      {exp.role}
                    </h3>
                    <p className="text-accent font-medium text-sm sm:text-base mb-1">{exp.company}</p>
                    <p className="text-gray-500 text-xs sm:text-sm mb-3 sm:mb-4">{exp.location}</p>

                    {/* Description */}
                    <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4">
                      {exp.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 sm:py-1 text-[10px] sm:text-xs text-gray-300 bg-white/5 rounded border border-white/10"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block md:w-1/2" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
