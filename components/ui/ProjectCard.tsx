import { GitHubIcon, ExternalLinkIcon } from "./Icons";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl: string;
  githubUrl: string;
}

export default function ProjectCard({
  title,
  description,
  tags,
  liveUrl,
  githubUrl,
}: ProjectCardProps) {
  return (
    <div className="group relative bg-white/5 rounded-lg sm:rounded-xl overflow-hidden border border-white/10 hover:border-accent/50 transition-all duration-500 hover:-translate-y-1 sm:hover:-translate-y-2">
      {/* Image Container */}
      <div className="relative h-36 sm:h-48 overflow-hidden bg-gradient-to-br from-accent/20 to-primary/20">
        <div className="absolute inset-0 bg-gradient-to-t from-primary to-transparent z-10" />
        {/* Placeholder gradient for image */}
        <div className="w-full h-full bg-gradient-to-br from-accent/30 via-primary to-accent/10" />
        
        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 flex items-center justify-center gap-3 sm:gap-4">
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 sm:p-3 bg-accent rounded-full hover:bg-accent-light transition-colors"
            aria-label="View live site"
          >
            <ExternalLinkIcon className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
          </a>
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 sm:p-3 bg-white/20 rounded-full hover:bg-white/30 transition-colors"
            aria-label="View source code"
          >
            <GitHubIcon className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
          </a>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 sm:p-5">
        <h3 className="text-white font-semibold text-base sm:text-lg mb-1.5 sm:mb-2 group-hover:text-accent transition-colors">
          {title}
        </h3>
        <p className="text-gray-400 text-xs sm:text-sm mb-3 sm:mb-4 line-clamp-2">{description}</p>
        
        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 sm:gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-1.5 sm:px-2 py-0.5 sm:py-1 text-[10px] sm:text-xs font-medium text-accent bg-accent/10 rounded-md"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
