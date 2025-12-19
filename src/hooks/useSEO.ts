import { useEffect } from "react";

interface SEOProps {
  title: string;
  description?: string;
  image?: string;
  url?: string;
}

export function useSEO({ title, description, image, url }: SEOProps) {
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

    if (image) {
      updateMeta("og:image", image);
      updateMeta("twitter:image", image);
    }

    if (url) {
      updateMeta("og:url", url);
      updateMeta("twitter:url", url);
    }

    return () => {
      document.title = "Blog";
    };
  }, [title, description, image, url]);
}
