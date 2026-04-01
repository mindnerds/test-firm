# Test Firm Website

Turborepo monorepo with:
- `apps/web` — Next.js 15 frontend
- `apps/studio` — placeholder
- `packages/ui` — shared styles (globals.css with CSS variables)

## Conventions
- CSS variables for theming in `packages/ui/src/styles/globals.css`
- All color tokens use OKLCH format
- Primary color is green (hue ~120)
- Build with: `pnpm run build:web`
