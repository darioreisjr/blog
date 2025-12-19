import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

interface TagChipProps {
  tag: string;
  active?: boolean;
  asLink?: boolean;
  onClick?: () => void;
}

export function TagChip({ tag, active, asLink = false, onClick }: TagChipProps) {
  const className = cn("tag-chip", active && "active");

  if (asLink) {
    return (
      <Link to={`/tags/${tag}`} className={className}>
        {tag}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={className}>
      {tag}
    </button>
  );
}
