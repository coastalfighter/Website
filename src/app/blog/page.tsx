import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/layout/PageHeader";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";
import { blogPosts } from "@/data/blog";

export const metadata: Metadata = {
  title: "Blog",
  description: "Field-tested lessons on sales, leadership, and growth from the CMC Group team.",
};

export default function BlogIndexPage() {
  const posts = [...blogPosts].sort((a, b) => (a.date < b.date ? 1 : -1));
  const [featured, ...rest] = posts;

  return (
    <>
      <PageHeader
        eyebrow="Blog"
        heading="Field-tested lessons on sales and leadership"
        body="Notes from the field on goal-setting, coaching, and building a career in customer acquisition."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Blog" }]}
      />

      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          {featured ? (
            <Reveal>
              <Link
                href={`/blog/${featured.slug}`}
                className="block rounded-2xl border border-line bg-ink-2 p-8 transition-colors hover:border-brand-400 sm:p-12"
              >
                <p className="text-xs font-semibold uppercase tracking-wider text-brand-600">
                  Latest &middot;{" "}
                  {new Date(featured.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
                </p>
                <h2 className="mt-4 max-w-2xl text-2xl font-bold leading-tight text-text sm:text-3xl">{featured.title}</h2>
                <p className="mt-3 max-w-xl text-base leading-relaxed text-text-dim">{featured.excerpt}</p>
                <span className="mt-4 inline-block text-sm font-semibold text-text-dim">Read the full post &rarr;</span>
              </Link>
            </Reveal>
          ) : null}

          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((post, i) => (
              <Card key={post.slug} delay={(i % 3) * 0.06} className="p-0">
                <Link href={`/blog/${post.slug}`} className="flex h-full flex-col p-6">
                  <time className="text-xs font-semibold uppercase tracking-wider text-brand-600">
                    {new Date(post.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
                  </time>
                  <h3 className="mt-3 text-lg font-semibold leading-snug text-text">{post.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-text-dim">{post.excerpt}</p>
                  <span className="mt-5 text-sm font-semibold text-text-dim">Read now &rarr;</span>
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
