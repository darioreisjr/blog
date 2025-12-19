import { useParams, Link, useLocation } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, User } from "lucide-react";
import { posts } from "@/data/posts";
import { TagChip } from "@/components/blog/TagChip";
import { MarkdownContent } from "@/components/blog/MarkdownContent";
import { useSEO } from "@/hooks/useSEO";

export default function BlogPost() {
  const location = useLocation();
  const { slug } = useParams<{ slug: string }>();
  const post = posts.find((p) => p.slug === slug);

  // SEO para compartilhamento em redes sociais
  useSEO({
    title: post ? post.title : "Post não encontrado",
    description: post?.excerpt,
    url: window.location.origin + location.pathname,
  });

  if (!post) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Post não encontrado</h1>
          <Link to="/blog" className="text-primary hover:underline">
            Voltar ao blog
          </Link>
        </div>
      </div>
    );
  }

  const formattedDate = new Date(post.publishedAt).toLocaleDateString("pt-BR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  return (
    <div className="min-h-screen bg-background">
      <div className="container max-w-3xl py-16 px-4">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Voltar ao blog
        </Link>

        <article className="animate-fade-in">
          <header className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-6">
              <span className="flex items-center gap-1.5">
                <User className="w-4 h-4" />
                {post.author.name}
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4" />
                {formattedDate}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4" />
                {post.readingTimeMinutes} min de leitura
              </span>
            </div>

            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <TagChip key={tag} tag={tag} asLink />
              ))}
            </div>
          </header>

          <div className="border-t border-border pt-8">
            <MarkdownContent content={post.content} />
          </div>
        </article>
      </div>
    </div>
  );
}
