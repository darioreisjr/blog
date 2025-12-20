/**
 * Gera uma imagem Open Graph dinamicamente usando Canvas API
 * @param title - Título do post
 * @param description - Descrição do post
 * @returns Data URL da imagem gerada
 */
export async function generateOGImage(
  title: string,
  description: string
): Promise<string> {
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");

  if (!ctx) {
    throw new Error("Não foi possível obter o contexto do canvas");
  }

  // Dimensões padrão do Open Graph
  canvas.width = 1200;
  canvas.height = 630;

  // Fundo gradiente
  const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
  gradient.addColorStop(0, "#0f172a"); // slate-900
  gradient.addColorStop(1, "#1e293b"); // slate-800
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Adicionar padrão de grade sutil
  ctx.strokeStyle = "rgba(148, 163, 184, 0.1)"; // slate-400 com opacity
  ctx.lineWidth = 1;
  const gridSize = 40;
  for (let x = 0; x <= canvas.width; x += gridSize) {
    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x, canvas.height);
    ctx.stroke();
  }
  for (let y = 0; y <= canvas.height; y += gridSize) {
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(canvas.width, y);
    ctx.stroke();
  }

  // Adicionar retângulo de destaque no canto superior esquerdo
  ctx.fillStyle = "rgba(99, 102, 241, 0.2)"; // indigo-500 com opacity
  ctx.fillRect(0, 0, 200, 200);

  // Margem
  const margin = 80;
  const contentWidth = canvas.width - margin * 2;

  // Título
  ctx.fillStyle = "#f8fafc"; // slate-50
  ctx.font = "bold 64px system-ui, -apple-system, sans-serif";
  ctx.textBaseline = "top";

  // Quebrar título em múltiplas linhas
  const words = title.split(" ");
  const lines: string[] = [];
  let currentLine = "";

  words.forEach((word) => {
    const testLine = currentLine + (currentLine ? " " : "") + word;
    const metrics = ctx.measureText(testLine);
    if (metrics.width > contentWidth && currentLine) {
      lines.push(currentLine);
      currentLine = word;
    } else {
      currentLine = testLine;
    }
  });
  if (currentLine) {
    lines.push(currentLine);
  }

  // Limitar a 3 linhas
  const titleLines = lines.slice(0, 3);
  const lineHeight = 75;
  let yPosition = margin + 60;

  titleLines.forEach((line) => {
    ctx.fillText(line, margin, yPosition);
    yPosition += lineHeight;
  });

  // Descrição
  ctx.fillStyle = "#cbd5e1"; // slate-300
  ctx.font = "32px system-ui, -apple-system, sans-serif";
  yPosition += 40; // Espaço entre título e descrição

  // Quebrar descrição em múltiplas linhas
  const descWords = description.split(" ");
  const descLines: string[] = [];
  let currentDescLine = "";

  descWords.forEach((word) => {
    const testLine = currentDescLine + (currentDescLine ? " " : "") + word;
    const metrics = ctx.measureText(testLine);
    if (metrics.width > contentWidth && currentDescLine) {
      descLines.push(currentDescLine);
      currentDescLine = word;
    } else {
      currentDescLine = testLine;
    }
  });
  if (currentDescLine) {
    descLines.push(currentDescLine);
  }

  // Limitar a 2 linhas
  const descriptionLines = descLines.slice(0, 2);
  const descLineHeight = 45;

  descriptionLines.forEach((line) => {
    ctx.fillText(line, margin, yPosition);
    yPosition += descLineHeight;
  });

  // Rodapé com logo/nome
  ctx.fillStyle = "#64748b"; // slate-500
  ctx.font = "28px system-ui, -apple-system, sans-serif";
  ctx.fillText("Blog - Dário Reis Jr.", margin, canvas.height - margin);

  // Linha decorativa
  ctx.strokeStyle = "#6366f1"; // indigo-500
  ctx.lineWidth = 4;
  ctx.beginPath();
  ctx.moveTo(margin, canvas.height - margin - 50);
  ctx.lineTo(margin + 150, canvas.height - margin - 50);
  ctx.stroke();

  // Converter canvas para data URL
  return canvas.toDataURL("image/png");
}
