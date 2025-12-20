export type BlogPost = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  cover?: {
    type: "icon" | "image";
    icon?: string;
    imageUrl?: string;
    tint?: "blue" | "green" | "purple" | "orange";
  };
  ogImage?: string; // URL da imagem para Open Graph (compartilhamento)
  publishedAt: string;
  readingTimeMinutes: number;
  tags: string[];
  category: "frontend" | "backend" | "carreira" | "produtividade";
  author: {
    name: string;
    avatarUrl?: string;
  };
};

export type Category = BlogPost["category"];
