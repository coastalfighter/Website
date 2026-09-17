import type { Metadata } from "next";
import Image from "next/image";
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
        image={{
          src: "/images/placeholders/blog-header.jpg",
          alt: "Placeholder — replace with your own photo at public/images/placeholders/blog-header.jpg",
        }}
      />

      <section className="relative overflow-hidden bg-ink py-20 sm:py-28">
        <div className="glow-field" />
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          {featured ? (
            <Reveal>
              <Link
                href={`/blog/${featured.slug}`}
                className="group block overflow-hidden rounded-2xl border border-line bg-ink-2 transition-colors hover:border-brand-400"
              >
                <div className="relative aspect-12/5 w-full overflow-hidden">
                  <Image
                    src="/images/placeholders/blog-featured-banner.jpg"
                    alt="Placeholder — replace with your own photo at public/images/placeholders/blog-featured-banner.jpg"
                    fill
                    sizes="100vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </div>
                <div className="p-8 sm:p-12">
                  <p className="text-xs font-semibold uppercase tracking-wider text-brand-400">
                    Latest &middot;{" "}
                    {new Date(featured.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
                  </p>
                  <h2 className="mt-4 max-w-2xl text-2xl font-bold leading-tight text-text sm:text-3xl">{featured.title}</h2>
                  <p className="mt-3 max-w-xl text-base leading-relaxed text-text-dim">{featured.excerpt}</p>
                  <span className="mt-4 inline-block text-sm font-semibold text-text-dim">Read the full post &rarr;</span>
                </div>
              </Link>
            </Reveal>
          ) : null}

          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((post, i) => (
              <Card key={post.slug} delay={(i % 3) * 0.06} className="p-0">
                <Link href={`/blog/${post.slug}`} className="group flex h-full flex-col">
                  <div className="relative aspect-video w-full overflow-hidden">
                    <Image
                      src="/images/placeholders/blog-card-thumb.jpg"
                      alt="Placeholder — replace with your own photo at public/images/placeholders/blog-card-thumb.jpg"
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <time className="text-xs font-semibold uppercase tracking-wider text-brand-400">
                      {new Date(post.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
                    </time>
                    <h3 className="mt-3 text-lg font-semibold leading-snug text-text">{post.title}</h3>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-text-dim">{post.excerpt}</p>
                    <span className="mt-5 text-sm font-semibold text-text-dim">Read now &rarr;</span>
                  </div>
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
