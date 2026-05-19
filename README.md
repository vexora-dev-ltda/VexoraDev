# VexoraDev Website

Site institucional moderno da VexoraDev, desenvolvido com foco em design premium, performance e conversao.

## Stack

- Next.js (App Router)
- React
- Tailwind CSS v4
- Framer Motion
- TypeScript

## Como rodar

```bash
npm install
npm run dev
```

Abra `http://localhost:3000` no navegador.

## Scripts

- `npm run dev`: ambiente de desenvolvimento
- `npm run lint`: validacao de qualidade
- `npm run build`: build de producao
- `npm run start`: executa build em producao

## Deploy (Vercel)

1. Conecte seu repositório no Vercel (https://vercel.com) ou use o Vercel CLI.

2. Para deploy via Vercel CLI:

```bash
npm i -g vercel
vercel login
vercel --prod
```

3. Defina a variável de ambiente `NEXT_PUBLIC_SITE_URL` no painel do Vercel para o domínio final (ex: `https://vexoradev.vercel.app` ou seu domínio personalizado). Isso faz com que o `metadataBase` seja populado corretamente.

O arquivo `vercel.json` já está incluído para otimizar o deploy.

## Deploy no GitHub Pages (opcao temporaria)

Se voce prefere publicar 100% via GitHub Pages (site estatico), siga estes passos.

1. Instale dependencias de deploy:

```bash
npm install
npm install --save-dev gh-pages cross-env
```

2. Para exportar e publicar (este projeto sera exportado para `out/` e publicado na branch `gh-pages`):

```bash
npm run export:deploy
```

3. Verifique `https://vexora-dev-ltda.github.io/vexora-dev/` apos alguns minutos.

Observacoes:
- Algumas funcoes do Next.js (SSR, App Router server features) NAO funcionarao no GitHub Pages. Este fluxo gera um site estatico com `next export`.
- Caso queira voltar ao deploy no Vercel mais tarde, remova a branch `gh-pages` ou mude a configuracao de deploy.

## Estrutura principal

- `src/app/layout.tsx`: metadados globais e estrutura raiz
- `src/app/page.tsx`: composicao das secoes da landing page
- `src/app/globals.css`: tokens visuais e estilos globais
- `src/components/motion/reveal.tsx`: componentes reutilizaveis de animacao
- `src/lib/site-data.ts`: dados das secoes (servicos, portfolio, processo)

## SEO basico incluido

- Title e description otimizados
- Keywords
- Open Graph basico
- Hierarquia semantica de secoes
