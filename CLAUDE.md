# Test Firm Website

Turborepo monorepo with:
- `apps/web` — Next.js 15 frontend
- `apps/studio` — placeholder
- `packages/ui` — shared styles (globals.css with CSS variables)

## Conventions
- CSS variables for theming in `packages/ui/src/styles/globals.css`
- The web app copies this to `apps/web/packages-ui-styles.css` — update BOTH files when changing colors
- All color tokens use hex format (e.g. #22c55e)
- Primary color is currently green (#22c55e)

## Build
```bash
pnpm run build:web
```

## Integration Tests
Tests live in `apps/web/tests/`. Run with:
```bash
cd apps/web && npx playwright install --with-deps chromium && npx playwright test
```

## Important
- When changing CSS variables, update BOTH `packages/ui/src/styles/globals.css` AND `apps/web/packages-ui-styles.css`
- Always commit and push after changes
