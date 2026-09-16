import Link from "next/link";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TiltCard } from "@/components/ui/TiltCard";
import { GlowField } from "@/components/ui/GlowField";
import { FloatingIcons } from "@/components/ui/FloatingIcons";
import { getBlogPost } from "@/data/blog";

const FEATURED_SLUGS = [
  "about-cmc",
  "how-to-keep-the-winning-streak-in-the-organization",
  "secrets-to-achieving-your-goals",
] as const;

export function BlogPreview() {
  const posts = FEATURED_SLUGS.map(getBlogPost).filter((post) => post !== undefined);

  return (
    <section className="relative overflow-hidden bg-ink-2 py-24 sm:py-32">
      <GlowField />
      <FloatingIcons seed={5} count={3} />
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
          {posts.map((post, i) => (
            <TiltCard key={post.slug} delay={i * 0.08} className="p-0">
              <Link href={`/blogs/${post.slug}`} className="flex h-full flex-col p-6">
                <time className="text-xs font-semibold uppercase tracking-wider text-accent-ink">
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
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-paper/80 group-hover:text-brand-ink">
                  Read now
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    &rarr;
                  </span>
                </span>
              </Link>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
}
