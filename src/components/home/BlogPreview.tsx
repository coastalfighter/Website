import Link from "next/link";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { getBlogPost } from "@/data/blog";

const FEATURED_SLUGS = [
  "about-cmc",
  "how-to-keep-the-winning-streak-in-the-organization",
  "secrets-to-achieving-your-goals",
] as const;

export function BlogPreview() {
  const posts = FEATURED_SLUGS.map(getBlogPost).filter((post) => post !== undefined);

  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading eyebrow="From the Blog" heading="Field-tested lessons on sales and leadership" />
          <Link href="/blog" className="link-underline text-sm font-semibold text-text-dim hover:text-text">
            View all posts &rarr;
          </Link>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {posts.map((post, i) => (
            <Card key={post.slug} delay={i * 0.06} className="p-0">
              <Link href={`/blog/${post.slug}`} className="flex h-full flex-col p-6">
                <time className="text-xs font-semibold uppercase tracking-wider text-brand-400">
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
  );
}
