import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { posts, categoryLabels } from "@/data/posts";
import { PostCard } from "@/components/blog/PostCard";
import type { Category } from "@/types/blog";

export default function BlogByCategory() {
  const { category } = useParams<{ category: string }>();
  const filteredPosts = posts.filter((p) => p.category === category);
  const categoryLabel = categoryLabels[category as Category] || category;

  return (
    <div className="min-h-screen bg-background">
      <div className="container max-w-5xl py-16 px-4">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Voltar ao blog
        </Link>

        <header className="mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
            Categoria: <span className="text-primary">{categoryLabel}</span>
          </h1>
          <p className="text-muted-foreground">
            {filteredPosts.length} post{filteredPosts.length !== 1 ? "s" : ""} encontrado{filteredPosts.length !== 1 ? "s" : ""}
          </p>
        </header>

        {filteredPosts.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-muted-foreground">Nenhum post encontrado nessa categoria.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredPosts.map((post, index) => (
              <PostCard key={post.id} post={post} index={index} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
