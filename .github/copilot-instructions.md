# Copilot instructions for Routa (frontend)

## Big picture

- React 19 + Vite app with feature-based architecture; routing lives in `src/app/router/AppRouter.tsx` and is mounted by `src/App.tsx`/`src/main.tsx`.
- Features are isolated under `src/features/<feature>/{domain,data,ui}`; UI must not call APIs directly and should receive data via props.
- Shared, reusable code lives in `src/shared` (UI, hooks, utils, types, constants). Cross-feature imports are not allowed; move common logic to `shared/`.

## Layering & dependency direction

- Dependency direction is `domain → data → ui`.
- UI components must not depend on data implementations (see README rules).
- Keep one responsibility per file and avoid mixing UI + business logic.

## UI patterns & styling

- React function components only.
- Component filenames use PascalCase; shared UI components use `*.component.tsx` with paired `*.module.css` (CSS Modules), e.g. `src/shared/ui/Button/Button.component.tsx`.
- Feature UI pages live in `src/features/*/ui/pages` and import shared UI (e.g. Login page uses `shared/ui/Input`, `shared/ui/Button`, `shared/ui/ImageSlider`).
- Avoid inline styles except small dynamic values; do not hardcode colors/spacing—prefer CSS modules/theme variables.

## State & business logic

- No API calls or business logic inside UI components.
- Global state is reserved for auth/session/app-wide config (see README). Prefer local state otherwise.
- Use `.usecase.ts` suffix for business logic files; custom hooks must start with `use`.

## Tooling & workflows

- Vite scripts: `npm run dev`, `build`, `lint`, `preview`, `format` (see `package.json`).
- TypeScript is strict with `noEmit`; keep types tight and avoid unused locals/params.

## Integration points

- Routing uses `react-router-dom` v7; add routes in `AppRouter.tsx`.
- External service abstractions belong in `src/lib` (http/storage/config).
