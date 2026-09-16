import Link from "next/link";

interface Crumb {
  label: string;
  href?: string;
}

export function Breadcrumbs({ items, className }: { items: readonly Crumb[]; className?: string }) {
  return (
    <nav aria-label="Breadcrumb" className={className}>
      <ol className="flex flex-wrap items-center gap-2 text-xs text-text-dim">
        {items.map((item, i) => (
          <li key={item.label} className="flex items-center gap-2">
            {i > 0 ? <span aria-hidden>/</span> : null}
            {item.href ? (
              <Link href={item.href} className="shrink-0 hover:text-text">
                {item.label}
              </Link>
            ) : (
              <span className="max-w-[220px] truncate text-text">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
