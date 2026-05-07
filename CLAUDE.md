# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start dev server
npm run build     # Build for production (also used to validate code/config changes)
npm run generate  # Generate static output
npm run preview   # Preview production build
```

**Validation rule:** Run `npm run build` after any code or config change. Skip the build for content-only edits (Markdown text with no code impact).

## Environment

Requires a `.env` file with:
```
GITHUB_TOKEN=your_github_token_here
```

The token is used server-side only (`config.server.githubToken`) by the GitHub GraphQL API endpoint.

## Architecture

### Routing & Pages

File-based routing via `pages/`:
- `index.vue` — Homepage bento grid
- `projects.vue` — GitHub-powered projects page (fetches from `/api/github/projects`)
- `uses.vue` — Uses/tools page
- `blog/index.vue` + `blog/[...slug].vue` — Blog listing and posts
- `work/index.vue` + `work/[...slug].vue` — Case study listing and detail
- `logo-variations.vue` — Noindexed internal page

### Content (Nuxt Content v2)

Markdown content lives in `content/`:
- `content/blog/*.md` — Blog posts
- `content/work/*.md` — Case study entries; frontmatter drives homepage display:
  - `featured: true` — appears in homepage featured work grid
  - `logo`, `logoBg` — image filename and background color for the tile
  - `client`, `date`, `slug`

### Components

- `components/tiles/` — Homepage bento grid tiles: `ResumeTile`, `SocialTile` (linkedin/instagram/email variants), `StackTile`
- `components/content/` — Components auto-available inside Markdown via Nuxt Content: `Callout`
- Top-level: `SiteHeader`, `SiteFooter`, `PageHero`, `LogoMark`, `ColorModeToggle`, `Post`, `ClientWorkCard`

### Server

`server/api/github/projects.get.ts` — Calls GitHub GraphQL API to fetch 6 most recent public repos. Falls back to README text for description when the repo description is missing.

### Styling

Tailwind CSS v4 loaded via `@tailwindcss/vite` plugin (not PostCSS). All design tokens are defined in `assets/css/main.css` under `@theme`:

| Token | Value |
|---|---|
| `--color-cream` | `#F5F1EA` (page background) |
| `--color-ink` | `#1B2332` (text) |
| `--color-accent` | `#E96A4E` (orange accent) |
| `--color-butter` | `#F4C95D` |
| `--font-display` | Instrument Serif |
| `--font-sans` | Nunito Sans / Inter |
| `--radius-tile` | 28px |

Dark mode uses class-based strategy: `.dark` on `<html>`, configured via `@nuxtjs/color-mode` with `classSuffix: ""` and `dataValue: "theme"`.

The `--color-accent-primary` CSS variable is used for interactive accent colors in inline styles throughout the homepage.

### Service Worker

In development, the app actively unregisters any service workers and clears caches (see `app.vue`). In production, `/public/sw.js` is registered for caching.

## Deployment

Deployed to Netlify. Nitro preset is `netlify`. Static assets under `/images/**` and `/_nuxt/**` are cached for 1 year; favicons are set to no-cache. `/logo-variations` is noindexed via `X-Robots-Tag`.

## Git Conventions

Commit messages use conventional commits: `feat:`, `fix:`, `perf:`, `docs:`, `chore:`.

## Editing Guidelines

- Do not make large visual or layout changes unless explicitly requested.
- Preserve existing section order on the homepage grid.
- Favor non-visual performance optimizations (payload size, lazy loading, caching) over visual changes.
- When reporting performance, always state context: local vs. production, mobile vs. desktop.
