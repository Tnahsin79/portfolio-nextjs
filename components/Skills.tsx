import { skills } from "@/data/constants";

export default function Skills() {
  // Duplicate skills for seamless infinite scroll
  const duplicatedSkills = [...skills, ...skills];

  return (
    <section className="py-8 border-y border-white/10 overflow-hidden bg-white/[0.02]">
      <div className="relative">
        {/* Gradient Masks */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-primary to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-primary to-transparent z-10" />

        {/* Scrolling Skills */}
        <div className="flex animate-scroll">
          {duplicatedSkills.map((skill, index) => (
            <div
              key={`${skill}-${index}`}
              className="flex-shrink-0 px-8 md:px-12"
            >
              <span className="text-gray-400 text-sm md:text-base font-medium whitespace-nowrap hover:text-accent transition-colors duration-300 cursor-default">
                {skill}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

