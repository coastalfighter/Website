import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { SignalBarsIcon } from "@/components/ui/TelecomIcons";
import type { BlogPost } from "@/data/blog";

interface FeaturedPostCardProps {
  post: BlogPost;
}

/** The lead post gets a much larger treatment than the grid below it — the "front page" story. */
export function FeaturedPostCard({ post }: FeaturedPostCardProps) {
  return (
    <Reveal>
      <Link
        href={`/blogs/${post.slug}`}
        className="group relative block overflow-hidden rounded-3xl border border-line/80 bg-surface/60 p-8 transition-colors duration-300 hover:border-brand-400/50 sm:p-12"
      >
        <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-brand-500/10 blur-[100px]" />
        <div className="relative flex flex-col gap-4">
          <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-wider text-accent-ink">
            <SignalBarsIcon className="h-4 w-4" />
            Latest from the field
            <span className="text-paper/40">&middot;</span>
            <time>
              {new Date(post.date).toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
                year: "numeric",
              })}
            </time>
          </div>
          <h2 className="max-w-3xl text-balance font-display text-2xl font-semibold leading-tight text-paper sm:text-4xl">
            {post.title}
          </h2>
          <p className="max-w-2xl text-base leading-relaxed text-paper/65">{post.excerpt}</p>
          <span className="mt-2 inline-flex w-fit items-center gap-2 text-sm font-semibold text-paper/80 group-hover:text-brand-ink">
            Read the full post
            <span className="transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
          </span>
        </div>
      </Link>
    </Reveal>
  );
}
