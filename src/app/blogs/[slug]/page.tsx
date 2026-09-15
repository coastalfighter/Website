import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts, getBlogPost } from "@/data/blog";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  return (
    <article className="bg-ink pb-24 pt-32 sm:pb-32">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <Link
          href="/blogs"
          className="inline-flex items-center gap-2 text-sm font-semibold text-paper/60 hover:text-paper"
        >
          &larr; Back to blog
        </Link>

        <time className="mt-8 block text-xs font-semibold uppercase tracking-wider text-accent-400">
          {new Date(post.date).toLocaleDateString("en-US", {
            month: "long",
            day: "numeric",
            year: "numeric",
          })}
        </time>
        <h1 className="mt-3 text-balance font-display text-3xl font-medium leading-tight tracking-tight text-paper sm:text-4xl">
          {post.title}
        </h1>

        <div className="mt-10 space-y-6 border-t border-line/70 pt-10">
          {post.paragraphs.map((paragraph, i) => (
            <p key={i} className="text-base leading-relaxed text-paper/75">
              {paragraph}
            </p>
          ))}
        </div>

        <div className="mt-14 border-t border-line/70 pt-8">
          <Link
            href="/blogs"
            className="inline-flex items-center gap-2 rounded-full border border-line/80 px-5 py-2.5 text-sm font-semibold text-paper transition-colors duration-300 hover:border-brand-400 hover:text-brand-300"
          >
            &larr; All posts
          </Link>
        </div>
      </div>
    </article>
  );
}
