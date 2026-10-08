# Portfolio v2 Replication Plan

## Current Status: ✅ Foundation Complete

**Last Updated**: October 8, 2026
**Build Status**: ✅ Passing
**Stack**: Next.js 15 + TypeScript + Tailwind v4 + Turbopack

---

## Completed Phases

### Phase 1: Foundation ✅
- [x] Next.js 15 project with App Router
- [x] TypeScript + Tailwind CSS v4 + ESLint
- [x] Dependencies: lucide-react, next-themes, zustand, clsx, tailwind-merge, @supabase/supabase-js, @radix-ui/react-popover, contentful

### Phase 2: Design System ✅
- [x] CSS variables for theming (light/dark)
- [x] Figtree Variable (sans) + Newsreader (serif) + Geist Mono
- [x] Spacing scale: gap-4 (16px) through gap-56 (224px)
- [x] Chip variants: chip-dark, chip-light
- [x] Card component styles
- [x] Animation keyframes: bob, tap, lean, tilt

### Phase 3: Layout & Components ✅
- [x] **Shell Layout**: Fixed sidebar + fluid main column
- [x] **Sidebar**: Collapsible (320px → 80px), localStorage persistence
- [x] **Navigation**: 4 groups (Learn, Explore, Work with me, Portfolio)
- [x] **Icon System**: Dynamic `<Icon name="..." />` with Lucide React
- [x] **Theme Provider**: next-themes with system detection

### Phase 4: Content Sections ✅
- [x] **Hero**: Dual-font headline, niche chips, 3 metric cards, CTAs
- [x] **Experience**: 2 roles with bullets, tech tags, current badge
- [x] **Projects**: Client (4) + Personal (5) with status badges
- [x] **Stack**: 7 categories as key-value grid
- [x] **GitHub Graph**: 53-week contribution calendar (client-side)

---

## Remaining Phases (Tomorrow)

### Phase 5: Backend Integration
- [ ] **Supabase Setup**
  - [ ] Create Supabase project
  - [ ] Add env vars: `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`
  - [ ] Schema: projects, experience, stack, pokes, contact_messages
  - [ ] RLS policies
- [ ] **Auth**: Supabase Auth (email/password + OAuth)
- [ ] **Real-time**: Subscribe to pokes counter

### Phase 6: Content Management
- [ ] **Contentful/Sanity Integration**
  - [ ] Create content model (sections as documents)
  - [ ] Add env vars: `CONTENTFUL_SPACE_ID`, `CONTENTFUL_ACCESS_TOKEN`
  - [ ] Build content fetching utilities
  - [ ] Replace hardcoded data with CMS queries

### Phase 7: Signature Effects (MVP → Full)
- [ ] **Pixel Name Canvas** - Render name as pixel art
- [ ] **Dithered Background Canvas** - Animated noise pattern
- [ ] **Cloud Mascot SVG** - 4-layer CSS animations (bob, tap, lean, tilt)
- [ ] **Native Popover Contact** - Radix Popover + form

### Phase 8: Polish & Deploy
- [ ] **Vercel Deployment**
  - [ ] Connect GitHub repo
  - [ ] Add environment variables
  - [ ] Configure custom domain (marwieang.com)
- [ ] **Performance**
  - [ ] Image optimization (next/image)
  - [ ] Font optimization (preload WOFF2)
  - [ ] Bundle analysis
- [ ] **SEO/Analytics**
  - [ ] Sitemap.xml
  - [ ] Robots.txt
  - [ ] OpenGraph/Twitter cards
  - [ ] Vercel Analytics / Plausible

---

## Key Decisions Made

| Decision | Choice | Rationale |
|----------|--------|-----------|
| Backend | **Supabase** | PostgreSQL + Auth + Realtime + Edge Functions |
| CMS | **Contentful** | Visual editing, familiar, good Next.js integration |
| Animations | **Pure CSS** | Zero deps, matches original exactly, performant |
| Deploy | **Vercel** | Native Next.js support, edge functions |
| Scope | **MVP First** | Core layout + content working, effects incremental |

---

## File Structure Reference

```
src/
├── app/
│   ├── fonts.ts          # Font configuration
│   ├── globals.css       # Design tokens + utilities
│   ├── layout.tsx        # Root layout (providers + shell)
│   └── page.tsx          # Main page (all sections)
├── components/
│   ├── providers/
│   │   └── theme-provider.tsx
│   ├── layout/
│   │   ├── shell.tsx
│   │   └── sidebar.tsx
│   ├── sections/
│   │   ├── hero.tsx
│   │   ├── experience.tsx
│   │   ├── projects.tsx
│   │   ├── stack.tsx
│   │   └── github-graph.tsx
│   └── ui/
│       └── icons.tsx
└── lib/
    ├── navigation.ts
    └── utils.ts
```

---

## Commands

```bash
# Development
cd /mnt/c/Users/Marc/Documents/Github/portfolio-v2/portfolio-v2
pnpm dev

# Build
pnpm build

# Production
pnpm start

# Type check
pnpm tsc --noEmit

# Lint
pnpm lint
```

---

## Environment Variables Needed

```env
# Supabase
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=

# Contentful
CONTENTFUL_SPACE_ID=
CONTENTFUL_ACCESS_TOKEN=
CONTENTFUL_PREVIEW_TOKEN=

# Analytics (optional)
NEXT_PUBLIC_VERCEL_ANALYTICS_ID=
PLAUSIBLE_DOMAIN=
```

---

## Next Session Starting Point

1. Run `pnpm dev` to verify dev server works
2. Set up Supabase project and add env vars
3. Create database schema from `docs/schema.sql` (to be created)
4. Implement Supabase client in `src/lib/supabase.ts`
5. Migrate one section (e.g., Projects) to Supabase

---

## Notes

- Original site: https://www.marwieang.com/
- Key unique effects to replicate: pixel canvas name, dither background, animated cloud SVG
- Current build is static export compatible (no server components needed for sections)
- Sidebar state persists across sessions via localStorage