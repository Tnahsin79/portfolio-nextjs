import { personalInfo, navLinks, socialLinks } from "@/data/constants";
import { GitHubIcon, LinkedInIcon, TwitterIcon } from "./ui/Icons";

const socialIcons: Record<string, React.FC<{ className?: string }>> = {
  github: GitHubIcon,
  linkedin: LinkedInIcon,
  twitter: TwitterIcon,
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 sm:py-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-6 sm:gap-8 md:flex-row md:justify-between">
          {/* Logo & Copyright */}
          <div className="text-center md:text-left order-3 md:order-1">
            <a href="#home" className="text-white font-bold text-base sm:text-lg">
              {personalInfo.fullName}
            </a>
            <p className="text-gray-500 text-xs sm:text-sm mt-1">
              © {currentYear} All rights reserved.
            </p>
          </div>

          {/* Navigation */}
          <nav className="flex flex-wrap justify-center gap-4 sm:gap-6 order-1 md:order-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-gray-400 hover:text-accent transition-colors text-xs sm:text-sm"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Social Links */}
          <div className="flex gap-3 sm:gap-4 order-2 md:order-3">
            {socialLinks.map((link) => {
              const Icon = socialIcons[link.icon];
              return (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-accent transition-colors"
                  aria-label={link.name}
                >
                  <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}
