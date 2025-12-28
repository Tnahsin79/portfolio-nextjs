import { CodeIcon, AppIcon, HostingIcon } from "./Icons";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
}

const iconMap: Record<string, React.FC<{ className?: string }>> = {
  code: CodeIcon,
  app: AppIcon,
  hosting: HostingIcon,
};

export default function ServiceCard({ title, description, icon }: ServiceCardProps) {
  const IconComponent = iconMap[icon] || CodeIcon;

  return (
    <div className="flex items-start gap-3 sm:gap-4 group">
      <div className="flex items-center gap-2 sm:gap-3">
        <div className="w-0.5 sm:w-1 h-10 sm:h-12 bg-accent rounded-full opacity-80 group-hover:h-12 sm:group-hover:h-16 transition-all duration-300" />
        <div className="p-2 sm:p-3 rounded-lg bg-white/5 border border-white/10 group-hover:border-accent/50 transition-colors duration-300">
          <IconComponent className="w-5 h-5 sm:w-6 sm:h-6 text-accent" />
        </div>
      </div>
      <div className="pt-0.5 sm:pt-1">
        <h3 className="text-white font-semibold text-base sm:text-lg mb-0.5 sm:mb-1 group-hover:text-accent transition-colors duration-300">
          {title}
        </h3>
        <p className="text-gray-400 text-xs sm:text-sm leading-relaxed hidden sm:block">
          {description}
        </p>
      </div>
    </div>
  );
}
