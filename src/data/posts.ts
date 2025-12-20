import type { BlogPost } from "@/types/blog";

export const posts: BlogPost[] = [
  {
    id: "1",
    slug: "frontend-como-gestor-do-estado-temporario",
    title: "Front-End como gestor do estado temporário no navegador",
    excerpt:
      "O Front-End não é só tela. Ele decide o que vive na memória, o que vira estado e como isso aparece para o usuário.",
    content: `
## Ideia principal
Quando você usa um app, muita coisa existe só enquanto a aba está aberta.

### O que é estado temporário
- filtros
- paginação
- input digitado
- itens selecionados

### Onde isso vive
- memória do JS
- estado do React
- cache de requests
- storage (quando você quer manter por mais tempo)

\`\`\`ts
type Filters = { q: string; tag?: string }
\`\`\`

## Fechando
Se você domina estado, você domina o coração do Front-End.
    `.trim(),
    publishedAt: "2025-12-19",
    readingTimeMinutes: 6,
    tags: ["react", "estado", "frontend"],
    category: "frontend",
    author: { name: "Dário Reis Jr." },
    cover: { type: "icon", icon: "globe", tint: "blue" },
    ogImage: "/images/posts/frontend-estado.png", // Imagem para compartilhamento
  },
  {
    id: "2",
    slug: "estado-permanente-vs-temporario",
    title: "Estado permanente vs estado temporário em aplicações",
    excerpt:
      "O que precisa sobreviver ao F5 e ao fechamento do app. E o que pode sumir sem culpa.",
    content: `
## Regra simples
Se o usuário espera ver isso amanhã, é permanente.

### Exemplos
Permanente:
- pedidos
- usuários
- pagamentos

Temporário:
- modal aberto
- aba ativa
- campos do formulário

## Dica
Comece temporário, promova para permanente só quando fizer sentido.
    `.trim(),
    publishedAt: "2025-12-08",
    readingTimeMinutes: 5,
    tags: ["arquitetura", "estado"],
    category: "produtividade",
    author: { name: "Dário Reis Jr." },
    cover: { type: "icon", icon: "layers", tint: "purple" },
    ogImage: "/images/posts/estado-permanente.png",
  },
  {
    id: "3",
    slug: "separacao-responsabilidades-frontend-backend-bd",
    title: "Como separar responsabilidades entre Front-End, Back-End e Banco de Dados",
    excerpt:
      "Uma analogia simples para nunca mais misturar regra de negócio, UI e persistência.",
    content: `
## A analogia do restaurante
Front-End é o cardápio.
Back-End é a cozinha.
Banco de dados é o estoque e o caderno.

## Por que isso importa
Quando você mistura tudo, fica difícil evoluir e testar.

## Fechando
Separar responsabilidade não é frescura, é manutenção barata.
    `.trim(),
    publishedAt: "2025-12-15",
    readingTimeMinutes: 7,
    tags: ["backend", "frontend", "banco-de-dados"],
    category: "carreira",
    author: { name: "Dário Reis Jr." },
    cover: { type: "icon", icon: "server", tint: "green" },
    ogImage: "/images/posts/separacao-responsabilidades.png",
  },
  {
    id: "4",
    slug: "bundlers-vs-compilers",
    title: "Bundlers e Compilers na prática",
    excerpt:
      "O que cada um resolve no seu projeto e como isso afeta build, performance e debug.",
    content: `
## Bundler
Junta arquivos e otimiza o empacotamento.

## Compiler
Transforma código para outra forma compatível.

## Fechando
Nem tudo é "só build". Tem impacto direto no dia a dia.
    `.trim(),
    publishedAt: "2025-12-24",
    readingTimeMinutes: 4,
    tags: ["javascript", "tooling"],
    category: "frontend",
    author: { name: "Dário Reis Jr." },
    cover: { type: "icon", icon: "smartphone", tint: "orange" },
    ogImage: "/images/posts/bundlers-compilers.png",
  },
];

export const allTags = Array.from(new Set(posts.flatMap((p) => p.tags)));

export const allCategories: BlogPost["category"][] = [
  "frontend",
  "backend",
  "carreira",
  "produtividade",
];

export const categoryLabels: Record<BlogPost["category"], string> = {
  frontend: "Front-End",
  backend: "Back-End",
  carreira: "Carreira",
  produtividade: "Produtividade",
};
