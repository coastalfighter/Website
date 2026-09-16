import { Breadcrumbs } from "./Breadcrumbs";

interface PageHeaderProps {
  eyebrow: string;
  heading: string;
  body?: string;
  breadcrumbs?: readonly { label: string; href?: string }[];
}

/** A plain light header band used at the top of every inner page — no dark
 * band, no background photo. Consistent with the rest of the site. */
export function PageHeader({ eyebrow, heading, body, breadcrumbs }: PageHeaderProps) {
  return (
    <div className="border-b border-line bg-ink-2">
      <div className="mx-auto max-w-6xl px-6 py-14 lg:px-8">
        {breadcrumbs ? <Breadcrumbs items={breadcrumbs} className="mb-4" /> : null}
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-brand-600">{eyebrow}</p>
        <h1 className="max-w-2xl text-balance text-3xl font-bold tracking-tight text-text sm:text-4xl">
          {heading}
        </h1>
        {body ? <p className="mt-4 max-w-xl text-base leading-relaxed text-text-dim">{body}</p> : null}
      </div>
    </div>
  );
}
