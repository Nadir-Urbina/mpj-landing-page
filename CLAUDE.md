# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a landing page for "My Prophetic Journal" - a spiritual journaling app. Built with Next.js 15 App Router, TypeScript, and Tailwind CSS v4. The landing page is conversion-optimized with sections for social proof, features, pricing, community, and security.

## Common Commands

```bash
# Development server (default port 3000)
npm run dev

# Production build
npm run build

# Start production server
npm start

# Linting
npm run lint
```

## Architecture

### Page Structure
The landing page (`src/app/page.tsx`) is composed of sequential section components imported from `src/app/components/`:
- Header
- HeroSection
- SocialProofSection
- FeaturesSection
- PremiumSection
- CommunitySection
- SecuritySection
- Footer

### Styling System
- **Tailwind CSS v4** with PostCSS (@tailwindcss/postcss)
- **Global styles** in `src/app/globals.css` define CSS custom properties for brand colors:
  - `--primary` (#3385FF), `--secondary` (#018786), `--tertiary` (#5B9BD5)
  - `--accent` (#E57373 for voice features)
  - `--background`, `--foreground` for light/dark mode
- Components use Tailwind utility classes with brand colors via CSS variables

### Metadata & SEO
- Centralized metadata in `src/app/layout.tsx` includes OpenGraph and Twitter cards
- Keywords focus on spiritual/prophetic journaling target audience
- Google Fonts (Geist and Geist Mono) loaded via next/font/google

### Path Aliases
- `@/*` maps to `./src/*` (configured in tsconfig.json)

### Blog (Sanity CMS)
- Content is managed in Sanity. The embedded Studio is served at `/studio` (config in root `sanity.config.ts`, schema in `src/sanity/schemaTypes/`).
- Frontend reads live in `src/sanity/lib/`: `client.ts` (null until configured), `fetch.ts` (`sanityFetch` wrapper with 60s ISR + graceful fallback), `queries.ts` (GROQ + types), `image.ts` (`urlForImage`).
- Pages: `/blog` (index, `src/app/blog/page.tsx`) and `/blog/[slug]` (post, Portable Text via `portableComponents.tsx`). The homepage teaser (`BlogSection`) pulls the latest 3 posts and falls back to static placeholders when none exist.
- Required env (see `.env.local.example`): `NEXT_PUBLIC_SANITY_PROJECT_ID`, `NEXT_PUBLIC_SANITY_DATASET`. The whole blog layer no-ops (placeholders / empty states) until these are set, so builds never break.

### Contact form
- `ContactSection` posts to `src/app/api/contact/route.ts`, which emails via Resend. Requires `RESEND_API_KEY`; the route returns a graceful 500 if it's missing.

### Blog post likes
- `LikeButton` (on `/blog/[slug]`) calls `src/app/api/likes/[slug]/route.ts`; counts are stored in Upstash Redis via `src/app/lib/likes.ts`.
- Required env: `UPSTASH_REDIS_REST_URL`, `UPSTASH_REDIS_REST_TOKEN`, plus optional `LIKES_IP_SALT` (salt for hashing visitor IPs). Note `.env.local.example` is gitignored by the `.env*` pattern, so these are documented here instead.
- Unset env means `isLikesConfigured` is false and the button hides itself — the page still renders, matching the Sanity/Resend graceful-degradation pattern.
- Abuse controls: slug must match `^[a-z0-9]+(?:-[a-z0-9]+)*$` (slugs become Redis keys), POST verifies the slug exists in Sanity, and dedupe uses a salted SHA-256 of the IP with a 30-day TTL (raw IPs are never stored).

## Brand Context

**Target Audience:** Christians, believers, prophetic communities
**Biblical Foundation:** John 16:13, 1 Corinthians 14:29
**Key Value Props:** Track prophetic words, discover patterns in spiritual life, biblical integration, community features

When creating or editing content, maintain spiritual/faith-based tone and ensure biblical references are accurate.