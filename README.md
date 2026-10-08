# portfolio-v2

Portfolio website built with Next.js 15, TypeScript, and Tailwind CSS v4.

## Getting Started

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Stack

- **Framework**: Next.js 15 (App Router) + Turbopack
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Fonts**: Figtree Variable + Newsreader (Google Fonts)
- **Icons**: Lucide React
- **Theme**: next-themes (dark/light/system)
- **State**: Zustand
- **Backend**: Supabase (planned)
- **CMS**: Contentful (planned)
- **Deploy**: Vercel

## Project Structure

```
src/
├── app/                 # App Router pages
├── components/          # React components
│   ├── layout/         # Shell, Sidebar
│   ├── sections/       # Hero, Experience, Projects, Stack, GitHubGraph
│   ├── providers/      # ThemeProvider
│   └── ui/             # Icons
└── lib/                 # Utilities, navigation config
```

## Commands

```bash
pnpm dev      # Development server
pnpm build    # Production build
pnpm start    # Production server
pnpm lint     # Lint check
pnpm tsc      # Type check
```

## Deploy

Deployed on [Vercel](https://vercel.com) - connect the GitHub repo for automatic deployments.