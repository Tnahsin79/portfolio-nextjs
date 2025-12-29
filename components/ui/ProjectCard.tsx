"use client";

import { GitHubIcon, ExternalLinkIcon } from "./Icons";
import Card3D from "./Card3D";

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
    <Card3D className="h-full" tiltAmount={8}>
      <div className="group relative bg-white/5 rounded-lg sm:rounded-xl overflow-hidden border border-white/10 hover:border-accent/50 transition-all duration-500 h-full">
        {/* Image Container */}
        <div className="relative h-36 sm:h-48 overflow-hidden bg-gradient-to-br from-accent/20 to-primary/20">
          <div className="absolute inset-0 bg-gradient-to-t from-primary to-transparent z-10" />
          {/* Animated gradient background */}
          <div className="w-full h-full bg-gradient-to-br from-accent/30 via-primary to-accent/10 group-hover:scale-110 transition-transform duration-700" />
          
          {/* Shimmer effect on hover */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-shimmer" />
          
          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-all duration-300 z-20 flex items-center justify-center gap-3 sm:gap-4">
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 sm:p-3 bg-accent rounded-full hover:bg-accent-light hover:scale-110 transition-all duration-300 hover:shadow-lg hover:shadow-accent/30"
              aria-label="View live site"
            >
              <ExternalLinkIcon className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
            </a>
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 sm:p-3 bg-white/20 rounded-full hover:bg-white/30 hover:scale-110 transition-all duration-300"
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
                className="px-1.5 sm:px-2 py-0.5 sm:py-1 text-[10px] sm:text-xs font-medium text-accent bg-accent/10 rounded-md hover:bg-accent/20 transition-colors"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Card3D>
  );
}
