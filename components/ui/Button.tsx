import type { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLAnchorElement | HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  as?: "a" | "button";
  href?: string;
  children: React.ReactNode;
  className?: string;
}

const base =
  "inline-flex items-center justify-center font-medium transition focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--foreground)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)] disabled:opacity-50";

const variants = {
  primary:
    "rounded-full bg-[var(--foreground)] text-[var(--background)] hover:opacity-90",
  secondary:
    "rounded-full border border-[var(--foreground)] text-[var(--foreground)] hover:bg-[var(--muted)]",
  outline:
    "rounded-full border border-[var(--border)] text-[var(--foreground)] hover:border-[var(--foreground)]",
  ghost: "rounded-full text-[var(--foreground)] hover:bg-[var(--muted)]",
};

const sizes = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-6 text-sm",
  lg: "h-12 px-8 text-sm",
};

export function Button({
  variant = "primary",
  size = "md",
  as: Component = "button",
  href,
  children,
  className = "",
  type,
  ...props
}: ButtonProps) {
  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`.trim();

  if (Component === "a" && href) {
    return (
      <a href={href} className={classes} target="_blank" rel="noopener noreferrer" {...props}>
        {children}
      </a>
    );
  }

  return (
    <button type={type ?? "button"} className={classes} {...props}>
      {children}
    </button>
  );
}
