import Link from "next/link";
import { cn } from "@/lib/cn";

interface ButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "onDark";
  className?: string;
}

export function Button({ href, children, variant = "primary", className }: ButtonProps) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center gap-2 rounded-md px-5 py-3 text-sm font-semibold transition-colors",
        variant === "primary" && "bg-brand-500 text-white hover:bg-brand-600",
        variant === "secondary" && "border border-line text-text hover:border-brand-400 hover:text-brand-600",
        variant === "onDark" && "border border-white/25 text-white hover:border-white/50",
        className
      )}
    >
      {children}
      <span aria-hidden>&rarr;</span>
    </Link>
  );
}
