import { useState } from "react";

interface PostImagePlaceholderProps {
  src?: string;
  alt: string;
  title: string;
  category: "frontend" | "backend" | "carreira" | "produtividade";
}

const categoryColors = {
  frontend: "from-blue-500 to-blue-700",
  backend: "from-green-500 to-green-700",
  carreira: "from-purple-500 to-purple-700",
  produtividade: "from-orange-500 to-orange-700",
};

const categoryLabels = {
  frontend: "Front-End",
  backend: "Back-End",
  carreira: "Carreira",
  produtividade: "Produtividade",
};

export function PostImagePlaceholder({
  src,
  alt,
  title,
  category,
}: PostImagePlaceholderProps) {
  const [imageError, setImageError] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  // Se não tem src ou teve erro, mostra o placeholder
  const showPlaceholder = !src || imageError;

  if (showPlaceholder) {
    return (
      <div
        className={`w-full h-64 md:h-96 bg-gradient-to-br ${categoryColors[category]} flex items-center justify-center p-8 text-white`}
      >
        <div className="text-center max-w-2xl">
          <div className="inline-block px-4 py-1.5 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium mb-4">
            {categoryLabels[category]}
          </div>
          <h2 className="text-2xl md:text-4xl font-bold leading-tight drop-shadow-lg">
            {title}
          </h2>
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full">
      {/* Placeholder enquanto carrega */}
      {!imageLoaded && (
        <div
          className={`w-full h-64 md:h-96 bg-gradient-to-br ${categoryColors[category]} animate-pulse`}
        />
      )}

      {/* Imagem real */}
      <img
        src={src}
        alt={alt}
        className={`w-full h-auto object-cover transition-opacity duration-300 ${
          imageLoaded ? "opacity-100" : "opacity-0 absolute inset-0"
        }`}
        loading="lazy"
        onLoad={() => setImageLoaded(true)}
        onError={() => setImageError(true)}
      />
    </div>
  );
}
