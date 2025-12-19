import { Link } from "react-router-dom";
import { Globe, Layers, Server, Smartphone, ArrowRight, Calendar, Clock } from "lucide-react";
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

interface PostCardProps {
  post: BlogPost;
  index?: number;
}

export function PostCard({ post, index = 0 }: PostCardProps) {
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
      to={`/${post.slug}`}
      className="group block animate-fade-in"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <article className="h-full bg-card border border-border rounded-xl p-6 card-hover">
        <div className={cn("w-10 h-10 rounded-lg flex items-center justify-center mb-4", colors.bg)}>
          <Icon className={cn("w-5 h-5", colors.text)} />
        </div>

        <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
          {post.title}
        </h3>

        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
          {post.excerpt}
        </p>

        <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
          <span className="flex items-center gap-1">
            <Calendar className="w-3.5 h-3.5" />
            {formattedDate}
          </span>
          <span className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5" />
            {post.readingTimeMinutes} min
          </span>
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          {post.tags.slice(0, 3).map((tag) => (
            <span key={tag} className="text-xs px-2 py-0.5 rounded-full bg-secondary text-muted-foreground">
              {tag}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-2 text-sm font-medium text-primary group-hover:gap-3 transition-all">
          Ler post
          <ArrowRight className="w-4 h-4" />
        </div>
      </article>
    </Link>
  );
}
