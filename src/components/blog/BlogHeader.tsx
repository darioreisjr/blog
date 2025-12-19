import { SearchInput } from "./SearchInput";
import { TagChip } from "./TagChip";

interface BlogHeaderProps {
  searchQuery: string;
  onSearchChange: (value: string) => void;
  tags: string[];
  activeTag?: string;
  onTagClick: (tag: string | undefined) => void;
}

export function BlogHeader({
  searchQuery,
  onSearchChange,
  tags,
  activeTag,
  onTagClick,
}: BlogHeaderProps) {
  return (
    <header className="text-center mb-12">
      <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-3">
        Blog
      </h1>
      <p className="text-lg text-muted-foreground mb-8">
        Notas e guias sobre dev, carreira e projetos
      </p>

      <div className="flex flex-col items-center gap-6">
        <SearchInput
          value={searchQuery}
          onChange={onSearchChange}
          placeholder="Buscar posts..."
        />

        <div className="flex flex-wrap justify-center gap-2">
          <TagChip
            tag="Todos"
            active={!activeTag}
            onClick={() => onTagClick(undefined)}
          />
          {tags.map((tag) => (
            <TagChip
              key={tag}
              tag={tag}
              active={activeTag === tag}
              onClick={() => onTagClick(tag)}
            />
          ))}
        </div>
      </div>
    </header>
  );
}
