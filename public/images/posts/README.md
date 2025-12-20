# Imagens dos Posts

Esta pasta contém as imagens usadas nos posts do blog.

## Boas Práticas

### Tamanho e Formato
- **Tamanho recomendado**: 1200x630px (proporção 1.91:1)
- **Formato**: PNG ou JPG
- **Peso máximo**: 1MB para carregamento rápido

### Nomenclatura
Use o slug do post como nome do arquivo:
- Post: `frontend-como-gestor-do-estado-temporario`
- Imagem: `frontend-como-gestor-do-estado-temporario.png`

## Como Adicionar uma Imagem a um Post

1. Salve a imagem nesta pasta (`public/images/posts/`)
2. Abra o arquivo `src/data/posts.ts`
3. Adicione o campo `ogImage` ao post:

```typescript
{
  id: "1",
  slug: "meu-post",
  title: "Meu Post",
  // ... outros campos
  ogImage: "/images/posts/meu-post.png",
}
```

## Onde a Imagem Aparece

### 1. Compartilhamento em Redes Sociais
Quando você compartilha o link do post em:
- Facebook
- Twitter/X
- LinkedIn
- WhatsApp
- Telegram
- Discord
- Slack

A imagem aparece no card de preview junto com o título e descrição.

### 2. Na Página do Post
A imagem também é exibida no topo da página do post, logo após o cabeçalho com título, autor e tags.

## Ferramentas Recomendadas

### Para Criar Imagens
- [Canva](https://canva.com) - Templates prontos para Open Graph
- [Figma](https://figma.com) - Design personalizado
- [Photopea](https://photopea.com) - Editor online gratuito

### Para Otimizar Imagens
- [TinyPNG](https://tinypng.com) - Compressão de PNG
- [Squoosh](https://squoosh.app) - Compressão avançada
- [ImageOptim](https://imageoptim.com) - Para macOS

## Exemplo de Uso

```typescript
// src/data/posts.ts
{
  id: "1",
  slug: "frontend-como-gestor-do-estado-temporario",
  title: "Front-End como gestor do estado temporário no navegador",
  excerpt: "O Front-End não é só tela...",
  ogImage: "/images/posts/frontend-estado.png", // 👈 Imagem para compartilhamento
  // ... resto do post
}
```

## Placeholder Automático

Se você não adicionar uma imagem ou se a imagem estiver quebrada/indisponível, o sistema **automaticamente gera um placeholder bonito** com:

- Título do post
- Categoria do post
- Gradiente de cor baseado na categoria:
  - **Frontend**: Azul
  - **Backend**: Verde
  - **Carreira**: Roxo
  - **Produtividade**: Laranja

Isso significa que **nunca ficará uma imagem quebrada ou espaço vazio** no seu blog!

## Notas Importantes

- O campo `ogImage` é **opcional**
- Se não definir uma imagem, será exibido um placeholder automático com o título
- Se a imagem estiver quebrada, o placeholder aparece automaticamente
- Imagens personalizadas aumentam o engajamento nas redes sociais
- Certifique-se de ter direitos sobre as imagens que usar
