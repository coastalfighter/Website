import Link from "next/link";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { getBlogPost } from "@/data/blog";

const FEATURED_SLUGS = [
  "about-cmc",
  "how-to-keep-the-winning-streak-in-the-organization",
  "secrets-to-achieving-your-goals",
] as const;

export function BlogPreview() {
  const posts = FEATURED_SLUGS.map(getBlogPost).filter((post) => post !== undefined);

  return (
    <section className="bg-ink-2 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading eyebrow="From the Blog" heading="Field-tested lessons on sales and leadership" />
          <Link
            href="/blogs"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-paper/80 hover:text-paper"
          >
            View all posts
            <span className="transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
          </Link>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
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
              <h3 className="mt-3 font-display text-lg font-semibold leading-snug text-paper">
                {post.title}
              </h3>
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
  );
}
