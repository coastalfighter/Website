import { cn } from "@/lib/cn";

export function GradientText({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "bg-linear-to-r from-brand-400 to-accent-500 bg-clip-text text-transparent",
        className
      )}
    >
      {children}
    </span>
  );
}
