import { useState, useMemo } from "react";
import { BlogHeader } from "@/components/blog/BlogHeader";
import { PostCard } from "@/components/blog/PostCard";
import { posts, allTags } from "@/data/posts";

export default function Blog() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTag, setActiveTag] = useState<string | undefined>();

  const filteredPosts = useMemo(() => {
    return posts.filter((post) => {
      const matchesSearch =
        !searchQuery ||
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()));

      const matchesTag = !activeTag || post.tags.includes(activeTag);

      return matchesSearch && matchesTag;
    });
  }, [searchQuery, activeTag]);

  return (
    <div className="min-h-screen bg-background">
      <div className="container max-w-5xl py-16 px-4">
        <BlogHeader
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          tags={allTags}
          activeTag={activeTag}
          onTagClick={setActiveTag}
        />

        {filteredPosts.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-muted-foreground">Nenhum post encontrado.</p>
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
