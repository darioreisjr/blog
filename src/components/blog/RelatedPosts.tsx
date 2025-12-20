import { Link } from "react-router-dom";
import { Globe, Layers, Server, Smartphone, Calendar, Clock } from "lucide-react";
import type { BlogPost } from "@/types/blog";
import { cn } from "@/lib/utils";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  globe: Globe,
  layers: Layers,
  server: Server,
  smartphone: Smartphone,
};

const tintClasses: Record<string, { bg: string; text: string }> = {
  blue: { bg: "bg-tint-blue/15", text: "text-tint-blue" },
  green: { bg: "bg-tint-green/15", text: "text-tint-green" },
  purple: { bg: "bg-tint-purple/15", text: "text-tint-purple" },
  orange: { bg: "bg-tint-orange/15", text: "text-tint-orange" },
};

interface RelatedPostsProps {
  posts: BlogPost[];
}

export function RelatedPosts({ posts }: RelatedPostsProps) {
  if (posts.length === 0) {
    return null;
  }

  return (
    <section className="mt-16 pt-12 border-t border-border">
      <h2 className="text-2xl font-bold text-foreground mb-6">Posts Relacionados</h2>
      <div className="flex flex-col gap-4">
        {posts.map((post) => {
          const Icon = post.cover?.icon ? iconMap[post.cover.icon] : Globe;
          const tint = post.cover?.tint || "blue";
          const colors = tintClasses[tint];

          const formattedDate = new Date(post.publishedAt).toLocaleDateString("pt-BR", {
            day: "numeric",
            month: "short",
            year: "numeric",
          });

          return (
            <Link
              key={post.id}
              to={`/${post.slug}`}
              className="group block"
            >
              <article className="h-full bg-card border border-border rounded-xl p-5 card-hover">
                <div className={cn("w-9 h-9 rounded-lg flex items-center justify-center mb-3", colors.bg)}>
                  <Icon className={cn("w-4.5 h-4.5", colors.text)} />
                </div>

                <h3 className="text-base font-semibold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                  {post.title}
                </h3>

                <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                  {post.excerpt}
                </p>

                <div className="flex items-center gap-3 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {formattedDate}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {post.readingTimeMinutes} min
                  </span>
                </div>
              </article>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
