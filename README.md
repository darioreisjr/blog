# 📝 Blog Pessoal - Dario Reis

![React](https://img.shields.io/badge/React-18.3.1-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8.3-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-5.4.19-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind-3.4.17-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-Deploy-000000?style=for-the-badge&logo=vercel&logoColor=white)

Um blog moderno e minimalista construído com React, TypeScript e shadcn/ui, focado em conteúdo técnico sobre desenvolvimento web, arquitetura de software e carreira.

---

## 🎯 Sobre o Projeto

Este é um blog pessoal desenvolvido com foco em performance, acessibilidade e experiência do usuário. O projeto utiliza as melhores práticas de desenvolvimento front-end e oferece uma interface limpa e responsiva para leitura de artigos técnicos.

### ✨ Funcionalidades

- ✅ **Sistema de Blog Completo** - Posts com categorias e tags
- 🔍 **Busca em Tempo Real** - Pesquisa por título, descrição e tags
- 🏷️ **Filtros Inteligentes** - Filtragem por tags e categorias
- 📱 **Totalmente Responsivo** - Design adaptável para todos os dispositivos
- 🎨 **UI Moderna** - Componentes shadcn/ui com Tailwind CSS
- ⚡ **Performance Otimizada** - Build otimizado com Vite
- 🚀 **SPA Routing** - Navegação fluida sem reload de página
- 📖 **Markdown Support** - Conteúdo renderizado com tipografia aprimorada
- ⏱️ **Tempo de Leitura** - Estimativa automática de tempo de leitura
- 🎭 **Ícones Customizados** - Covers únicas para cada post com Lucide Icons

---

## 🛠️ Tecnologias Utilizadas

### Core
- **React 18.3.1** - Biblioteca JavaScript para construção de interfaces
- **TypeScript 5.8.3** - Superset tipado do JavaScript
- **Vite 5.4.19** - Build tool ultra-rápida
- **React Router DOM 6.30.1** - Roteamento client-side

### Estilização
- **Tailwind CSS 3.4.17** - Framework CSS utility-first
- **shadcn/ui** - Componentes acessíveis e customizáveis
- **Radix UI** - Primitivos de UI headless
- **Lucide React** - Ícones modernos
- **class-variance-authority** - Variantes de componentes
- **tailwind-merge** - Merge inteligente de classes

### Gerenciamento de Estado
- **TanStack Query 5.83.0** - Gerenciamento de estado assíncrono
- **React Hook Form 7.61.1** - Gerenciamento de formulários
- **Zod 3.25.76** - Validação de schemas TypeScript-first

### Utilidades
- **date-fns 3.6.0** - Manipulação de datas
- **Sonner** - Sistema de toast notifications
- **next-themes** - Suporte a temas (dark mode ready)

---

## 📁 Estrutura do Projeto

```
blog/
├── public/                    # Arquivos estáticos
│   ├── placeholder.svg       # Imagem placeholder
│   └── robots.txt           # Configuração para crawlers
│
├── src/
│   ├── components/           # Componentes React
│   │   ├── blog/            # Componentes específicos do blog
│   │   │   ├── BlogHeader.tsx      # Cabeçalho com busca
│   │   │   ├── MarkdownContent.tsx # Renderizador de markdown
│   │   │   ├── PostCard.tsx        # Card de preview do post
│   │   │   ├── SearchInput.tsx     # Campo de busca
│   │   │   └── TagChip.tsx         # Chip de tag
│   │   │
│   │   ├── ui/              # Componentes shadcn/ui
│   │   │   ├── accordion.tsx
│   │   │   ├── alert-dialog.tsx
│   │   │   ├── avatar.tsx
│   │   │   ├── badge.tsx
│   │   │   ├── button.tsx
│   │   │   ├── card.tsx
│   │   │   ├── input.tsx
│   │   │   └── ... (30+ componentes)
│   │   │
│   │   └── NavLink.tsx      # Link de navegação customizado
│   │
│   ├── data/                # Dados da aplicação
│   │   └── posts.ts         # Array de posts do blog
│   │
│   ├── hooks/               # Custom hooks
│   │
│   ├── lib/                 # Bibliotecas e utilitários
│   │   └── utils.ts         # Funções auxiliares
│   │
│   ├── pages/               # Páginas da aplicação
│   │   ├── Blog.tsx         # Página principal (lista de posts)
│   │   ├── BlogPost.tsx     # Página individual do post
│   │   ├── BlogByTag.tsx    # Posts filtrados por tag
│   │   ├── BlogByCategory.tsx # Posts filtrados por categoria
│   │   └── NotFound.tsx     # Página 404
│   │
│   ├── types/               # Definições de tipos TypeScript
│   │   └── blog.ts          # Tipos relacionados ao blog
│   │
│   ├── App.tsx              # Componente raiz
│   ├── App.css              # Estilos do App
│   ├── index.css            # Estilos globais e Tailwind
│   ├── main.tsx             # Entry point da aplicação
│   └── vite-env.d.ts        # Tipagens do Vite
│
├── .gitignore               # Arquivos ignorados pelo Git
├── bun.lockb                # Lock file do Bun
├── components.json          # Configuração shadcn/ui
├── eslint.config.js         # Configuração ESLint
├── index.html               # HTML principal
├── package.json             # Dependências e scripts
├── package-lock.json        # Lock file do npm
├── pnpm-lock.yaml           # Lock file do pnpm
├── postcss.config.js        # Configuração PostCSS
├── tailwind.config.ts       # Configuração Tailwind
├── tsconfig.json            # Configuração TypeScript
├── tsconfig.app.json        # Config TS para app
├── tsconfig.node.json       # Config TS para Node
├── vercel.json              # Configuração Vercel (SPA routing)
├── vite.config.ts           # Configuração Vite
└── README.md                # Este arquivo
```

---

## 🚀 Como Executar

### Pré-requisitos

- Node.js 18+ ou Bun
- npm, pnpm ou bun

### Instalação

1. **Clone o repositório**
```bash
git clone <url-do-repositorio>
cd blog
```

2. **Instale as dependências**

Com npm:
```bash
npm install
```

Com pnpm:
```bash
pnpm install
```

Com bun:
```bash
bun install
```

### Executando em Desenvolvimento

```bash
npm run dev
# ou
pnpm dev
# ou
bun dev
```

A aplicação estará disponível em `http://localhost:8080`

### Build para Produção

```bash
npm run build
# ou
pnpm build
# ou
bun run build
```

Os arquivos otimizados serão gerados na pasta `dist/`

### Preview do Build

```bash
npm run preview
# ou
pnpm preview
# ou
bun preview
```

---

## 📝 Gerenciando Conteúdo

### Adicionando um Novo Post

Os posts estão definidos em [src/data/posts.ts](src/data/posts.ts). Para adicionar um novo post:

1. Abra o arquivo `src/data/posts.ts`
2. Adicione um novo objeto ao array `posts`:

```typescript
{
  id: "5",
  slug: "meu-novo-post",
  title: "Título do Meu Post",
  excerpt: "Breve descrição do post que aparecerá no card.",
  content: `
## Seção 1
Conteúdo em Markdown...

### Subseção
Mais conteúdo...

\`\`\`typescript
// Código de exemplo
const exemplo = "Olá mundo";
\`\`\`
  `.trim(),
  publishedAt: "2025-12-20",
  readingTimeMinutes: 5,
  tags: ["react", "typescript"],
  category: "frontend",
  author: { name: "Dario Reis" },
  cover: {
    type: "icon",
    icon: "code", // Qualquer ícone do Lucide
    tint: "blue"  // blue, green, purple, orange
  },
}
```

### Categorias Disponíveis

- `frontend` - Front-End
- `backend` - Back-End
- `carreira` - Carreira
- `produtividade` - Produtividade

### Ícones e Cores para Covers

**Ícones disponíveis** (Lucide React):
- `globe`, `code`, `server`, `layers`, `smartphone`, `terminal`, `database`, etc.

**Cores disponíveis**:
- `blue` - Azul
- `green` - Verde
- `purple` - Roxo
- `orange` - Laranja

---

## 🎨 Customização

### Cores e Tema

As cores são definidas em [src/index.css](src/index.css) usando CSS variables. Para customizar:

```css
:root {
  --background: 0 0% 100%;
  --foreground: 240 10% 3.9%;
  --primary: 240 5.9% 10%;
  /* ... outras variáveis */
}
```

### Componentes UI

Os componentes shadcn/ui podem ser customizados diretamente em `src/components/ui/`. Cada componente é independente e pode ser modificado sem afetar os outros.

### Tipografia

Fontes configuradas em [tailwind.config.ts](tailwind.config.ts):
- **Sans**: Inter (textos gerais)
- **Mono**: JetBrains Mono (código)

---

## 🌐 Deploy

### Vercel (Recomendado)

O projeto já está configurado para deploy na Vercel com suporte a SPA routing.

1. Conecte seu repositório à Vercel
2. Configure o build:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
3. Deploy automático!

O arquivo [vercel.json](vercel.json) já configura o roteamento SPA:

```json
{
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

### Outras Plataformas

- **Netlify**: Configure `publish directory` para `dist`
- **GitHub Pages**: Use `gh-pages` package
- **Cloudflare Pages**: Configure build output para `dist`

---

## 🗺️ Rotas da Aplicação

| Rota | Componente | Descrição |
|------|-----------|-----------|
| `/` | [Blog.tsx](src/pages/Blog.tsx) | Página inicial com lista de posts |
| `/:slug` | [BlogPost.tsx](src/pages/BlogPost.tsx) | Página individual do post |
| `/tags/:tag` | [BlogByTag.tsx](src/pages/BlogByTag.tsx) | Posts filtrados por tag |
| `/categorias/:category` | [BlogByCategory.tsx](src/pages/BlogByCategory.tsx) | Posts filtrados por categoria |
| `*` | [NotFound.tsx](src/pages/NotFound.tsx) | Página 404 |

---

## 🔧 Scripts Disponíveis

| Comando | Descrição |
|---------|-----------|
| `npm run dev` | Inicia servidor de desenvolvimento |
| `npm run build` | Build de produção |
| `npm run build:dev` | Build em modo desenvolvimento |
| `npm run preview` | Preview do build de produção |
| `npm run lint` | Executa ESLint |

---

## 📦 Principais Dependências

### Produção

| Pacote | Versão | Propósito |
|--------|--------|-----------|
| react | 18.3.1 | Biblioteca UI |
| react-router-dom | 6.30.1 | Roteamento |
| @tanstack/react-query | 5.83.0 | Gerenciamento de estado |
| lucide-react | 0.462.0 | Ícones |
| tailwindcss | 3.4.17 | Estilização |
| zod | 3.25.76 | Validação de schemas |
| date-fns | 3.6.0 | Manipulação de datas |
| react-hook-form | 7.61.1 | Gerenciamento de forms |
| sonner | 1.7.4 | Notifications |

### Desenvolvimento

| Pacote | Versão | Propósito |
|--------|--------|-----------|
| @vitejs/plugin-react-swc | 3.11.0 | Plugin React para Vite |
| typescript | 5.8.3 | Tipagem estática |
| eslint | 9.32.0 | Linting |
| @tailwindcss/typography | 0.5.16 | Estilos para markdown |
| autoprefixer | 10.4.21 | Prefixos CSS |

---

## 🏗️ Arquitetura

### Padrões Utilizados

- **Component-Based Architecture** - Componentes reutilizáveis e isolados
- **Type Safety** - TypeScript em todo o projeto
- **Separation of Concerns** - Separação clara entre dados, lógica e UI
- **Mobile First** - Design responsivo priorizando mobile
- **Performance First** - Otimizações de bundle e rendering

### Fluxo de Dados

```
posts.ts (data)
    ↓
Pages (Blog.tsx, BlogPost.tsx)
    ↓
Components (PostCard, BlogHeader)
    ↓
UI Components (shadcn/ui)
    ↓
User Interface
```

### Otimizações

- ✅ **Code Splitting** automático via React Router
- ✅ **Lazy Loading** de componentes
- ✅ **Memoização** com useMemo para filtros
- ✅ **Build otimizado** com Vite
- ✅ **Tree Shaking** automático
- ✅ **CSS Purge** via Tailwind

---

## 🤝 Contribuindo

Contribuições são bem-vindas! Sinta-se à vontade para:

1. Fazer um Fork do projeto
2. Criar uma branch para sua feature (`git checkout -b feature/MinhaFeature`)
3. Commit suas mudanças (`git commit -m 'Adiciona MinhaFeature'`)
4. Push para a branch (`git push origin feature/MinhaFeature`)
5. Abrir um Pull Request

---

## 📄 Licença

Este projeto é de código aberto e está disponível para uso pessoal e educacional.

---

## 👤 Autor

**Dario Reis**

- Blog: [https://blog.darioreis.dev/](https://blog.darioreis.dev/)
- GitHub: [@darioreisjr](https://github.com/darioreisjr)
- LinkedIn: [linkedin.com/in/darioreisjr](https://www.linkedin.com/in/darioreisjr/)

---

## 🙏 Agradecimentos

- [shadcn/ui](https://ui.shadcn.com/) - Componentes UI incríveis
- [Radix UI](https://www.radix-ui.com/) - Primitivos acessíveis
- [Lucide](https://lucide.dev/) - Ícones modernos
- [Tailwind CSS](https://tailwindcss.com/) - Framework CSS utility-first
- [Vite](https://vitejs.dev/) - Build tool ultra-rápida

---

**Desenvolvido com ❤️ e TypeScript**
