"use client";

import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "outline";
  href?: string;
  onClick?: () => void;
  className?: string;
}

export default function Button({
  children,
  variant = "primary",
  href,
  onClick,
  className = "",
}: ButtonProps) {
  const baseStyles =
    "px-6 py-3 rounded-md font-medium transition-all duration-300 inline-flex items-center gap-2 text-sm md:text-base relative overflow-hidden group";

  const variants = {
    primary:
      "bg-accent text-white hover:bg-accent-light hover:shadow-lg hover:shadow-accent/30 hover:-translate-y-0.5",
    outline:
      "border-2 border-white/80 text-white hover:bg-white/10 hover:-translate-y-0.5 hover:border-accent hover:text-accent",
  };

  const combinedStyles = `${baseStyles} ${variants[variant]} ${className}`;

  const content = (
    <>
      {/* Shine effect */}
      <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </>
  );

  if (href) {
    return (
      <a href={href} className={combinedStyles}>
        {content}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={combinedStyles}>
      {content}
    </button>
  );
}
