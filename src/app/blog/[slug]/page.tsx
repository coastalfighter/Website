import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHeader } from "@/components/layout/PageHeader";
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
  return { title: post.title, description: post.excerpt };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <article className="pb-20 sm:pb-28">
      <PageHeader eyebrow={formattedDate} heading={post.title} />

      <div className="mx-auto max-w-3xl px-6 pt-12 lg:px-8">
        <Link href="/blog" className="text-sm font-semibold text-text-dim hover:text-text">
          &larr; Back to blog
        </Link>

        <div className="mt-8 space-y-6 border-t border-line pt-10">
          {post.paragraphs.map((paragraph, i) => (
            <p key={i} className="text-base leading-relaxed text-text-dim">
              {paragraph}
            </p>
          ))}
        </div>

        <div className="mt-14 border-t border-line pt-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 rounded-md border border-line px-5 py-2.5 text-sm font-semibold text-text hover:border-brand-400"
          >
            &larr; All posts
          </Link>
        </div>
      </div>
    </article>
  );
}
