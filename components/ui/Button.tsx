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
    "px-6 py-3 rounded-md font-medium transition-all duration-300 inline-flex items-center gap-2 text-sm md:text-base";

  const variants = {
    primary:
      "bg-accent text-white hover:bg-accent-light hover:shadow-lg hover:shadow-accent/30 hover:-translate-y-0.5",
    outline:
      "border-2 border-white/80 text-white hover:bg-white/10 hover:-translate-y-0.5",
  };

  const combinedStyles = `${baseStyles} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={combinedStyles}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={combinedStyles}>
      {children}
    </button>
  );
}

