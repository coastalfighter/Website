import Link from "next/link";

interface Crumb {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: readonly Crumb[];
  className?: string;
}

export function Breadcrumbs({ items, className }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className={className}>
      <ol className="flex flex-wrap items-center gap-2 text-xs text-white/50">
        {items.map((item, i) => (
          <li key={item.label} className="flex items-center gap-2">
            {i > 0 ? <span aria-hidden>/</span> : null}
            {item.href ? (
              <Link href={item.href} className="shrink-0 transition-colors hover:text-white">
                {item.label}
              </Link>
            ) : (
              <span className="max-w-[200px] truncate text-white/80 sm:max-w-xs">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
