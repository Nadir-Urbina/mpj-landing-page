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

## Brand Context

**Target Audience:** Christians, believers, prophetic communities
**Biblical Foundation:** John 16:13, 1 Corinthians 14:29
**Key Value Props:** Track prophetic words, discover patterns in spiritual life, biblical integration, community features

When creating or editing content, maintain spiritual/faith-based tone and ensure biblical references are accurate.