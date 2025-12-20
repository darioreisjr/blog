import type { BlogPost } from "@/types/blog";

/**
 * Obtém posts relacionados baseado em tags e data
 * @param currentPost - Post atual
 * @param allPosts - Todos os posts disponíveis
 * @param limit - Número máximo de posts relacionados (padrão: 3)
 * @returns Array de posts relacionados
 *
 * Lógica:
 * 1. Busca até 2 posts com a mesma tag, priorizando os mais recentes
 * 2. Se não houver 3 posts ainda, adiciona o post mais recente independente da tag
 */
export function getRelatedPosts(
  currentPost: BlogPost,
  allPosts: BlogPost[],
  limit = 3
): BlogPost[] {
  const relatedPosts: BlogPost[] = [];

  // Remove o post atual da lista
  const otherPosts = allPosts.filter((post) => post.id !== currentPost.id);

  // 1. Buscar posts com tags em comum (máximo 2)
  const postsWithSameTags = otherPosts
    .filter((post) => {
      // Verifica se há pelo menos uma tag em comum
      return post.tags.some((tag) => currentPost.tags.includes(tag));
    })
    .sort((a, b) => {
      // Ordena por data (mais recente primeiro)
      return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime();
    })
    .slice(0, 2); // Máximo 2 posts

  relatedPosts.push(...postsWithSameTags);

  // 2. Se ainda não temos 3 posts, adicionar o post mais recente
  if (relatedPosts.length < limit) {
    const remainingSlots = limit - relatedPosts.length;
    const alreadyAddedIds = new Set(relatedPosts.map((p) => p.id));

    const mostRecentPosts = otherPosts
      .filter((post) => !alreadyAddedIds.has(post.id))
      .sort((a, b) => {
        return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime();
      })
      .slice(0, remainingSlots);

    relatedPosts.push(...mostRecentPosts);
  }

  return relatedPosts.slice(0, limit);
}
