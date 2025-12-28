interface SectionTitleProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}

export default function SectionTitle({
  title,
  subtitle,
  align = "center",
  className = "",
}: SectionTitleProps) {
  return (
    <div className={`mb-8 sm:mb-12 ${align === "center" ? "text-center" : "text-left"} ${className}`}>
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-gray-400 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto px-4 sm:px-0">{subtitle}</p>
      )}
      <div
        className={`mt-3 sm:mt-4 w-1 h-6 sm:h-8 bg-accent rounded-full ${
          align === "center" ? "mx-auto" : ""
        }`}
      />
    </div>
  );
}
