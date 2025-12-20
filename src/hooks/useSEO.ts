import { useEffect, useState } from "react";
import { generateOGImage } from "@/utils/generateOGImage";

interface SEOProps {
  title: string;
  description?: string;
  image?: string;
  url?: string;
  generateImage?: boolean;
}

export function useSEO({ title, description, image, url, generateImage = true }: SEOProps) {
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);

  useEffect(() => {
    // Gera imagem OG automaticamente se não houver imagem fornecida
    if (generateImage && !image && description) {
      generateOGImage(title, description)
        .then((dataUrl) => {
          setGeneratedImage(dataUrl);
        })
        .catch((error) => {
          console.error("Erro ao gerar imagem OG:", error);
        });
    }
  }, [title, description, image, generateImage]);

  useEffect(() => {
    // Update document title
    document.title = title;

    // Update or create meta tags
    const updateMeta = (property: string, content: string, isName = false) => {
      const attr = isName ? "name" : "property";
      let meta = document.querySelector(`meta[${attr}="${property}"]`) as HTMLMetaElement;
      if (!meta) {
        meta = document.createElement("meta");
        meta.setAttribute(attr, property);
        document.head.appendChild(meta);
      }
      meta.content = content;
    };

    if (description) {
      updateMeta("description", description, true);
      updateMeta("og:description", description);
      updateMeta("twitter:description", description);
    }

    updateMeta("og:title", title);
    updateMeta("twitter:title", title);
    updateMeta("og:type", "article");
    updateMeta("twitter:card", "summary_large_image");

    // Usa a imagem fornecida, ou a gerada, ou uma padrão
    const ogImage = image || generatedImage || `${window.location.origin}/og-image.png`;
    updateMeta("og:image", ogImage);
    updateMeta("twitter:image", ogImage);

    if (url) {
      updateMeta("og:url", url);
      updateMeta("twitter:url", url);
    }

    return () => {
      document.title = "Blog";
    };
  }, [title, description, image, url, generatedImage]);
}
