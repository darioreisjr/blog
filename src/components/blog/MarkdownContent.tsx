interface MarkdownContentProps {
  content: string;
}

export function MarkdownContent({ content }: MarkdownContentProps) {
  // Simple markdown parser for our use case
  const parseContent = (text: string) => {
    const lines = text.split("\n");
    const elements: React.ReactNode[] = [];
    let inCodeBlock = false;
    let codeBlockContent: string[] = [];
    let codeBlockLang = "";

    lines.forEach((line, idx) => {
      // Code block start/end
      if (line.startsWith("```")) {
        if (!inCodeBlock) {
          inCodeBlock = true;
          codeBlockLang = line.slice(3).trim();
          codeBlockContent = [];
        } else {
          inCodeBlock = false;
          elements.push(
            <pre key={`code-${idx}`} className="bg-code-bg rounded-lg p-4 my-4 overflow-x-auto border border-border">
              <code className="text-sm text-foreground font-mono">
                {codeBlockContent.join("\n")}
              </code>
            </pre>
          );
        }
        return;
      }

      if (inCodeBlock) {
        codeBlockContent.push(line);
        return;
      }

      // Headers
      if (line.startsWith("## ")) {
        elements.push(
          <h2 key={idx} className="text-xl font-semibold text-foreground mt-8 mb-4">
            {line.slice(3)}
          </h2>
        );
        return;
      }

      if (line.startsWith("### ")) {
        elements.push(
          <h3 key={idx} className="text-lg font-medium text-foreground mt-6 mb-3">
            {line.slice(4)}
          </h3>
        );
        return;
      }

      // List items
      if (line.startsWith("- ")) {
        elements.push(
          <li key={idx} className="text-muted-foreground ml-4">
            {line.slice(2)}
          </li>
        );
        return;
      }

      // Empty lines
      if (line.trim() === "") {
        return;
      }

      // Paragraphs with inline code
      const parsedLine = line.replace(
        /`([^`]+)`/g,
        '<code class="text-tint-green bg-code-bg px-1.5 py-0.5 rounded text-sm font-mono">$1</code>'
      );

      elements.push(
        <p
          key={idx}
          className="text-muted-foreground leading-relaxed mb-4"
          dangerouslySetInnerHTML={{ __html: parsedLine }}
        />
      );
    });

    return elements;
  };

  return <div className="prose-vscode">{parseContent(content)}</div>;
}
