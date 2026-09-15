import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/layout/PageHeader";
import { blogPosts } from "@/data/blog";

export const metadata: Metadata = {
  title: "Blog",
  description: "Field-tested lessons on sales, leadership, and growth from the CMC Group team.",
};

export default function BlogIndexPage() {
  const posts = [...blogPosts].sort((a, b) => (a.date < b.date ? 1 : -1));

  return (
    <>
      <PageHeader
        eyebrow="Blog"
        heading="Field-tested lessons on sales and leadership"
        body="Notes from the field on goal-setting, coaching, and building a career in customer acquisition."
        image={{
          src: "/images/photos/section-2.jpg",
          alt: "A \"Success — go get it\" chalkboard from the CMC office",
        }}
      />

      <section className="bg-ink py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blogs/${post.slug}`}
                className="group flex flex-col rounded-2xl border border-line/80 bg-surface/40 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand-400/40"
              >
                <time className="text-xs font-semibold uppercase tracking-wider text-accent-400">
                  {new Date(post.date).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  })}
                </time>
                <h2 className="mt-3 font-display text-lg font-semibold leading-snug text-paper">
                  {post.title}
                </h2>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-paper/60">{post.excerpt}</p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-paper/80 group-hover:text-brand-300">
                  Read now
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    &rarr;
                  </span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
