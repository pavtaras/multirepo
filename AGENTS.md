# AGENTS.md for @multirepo

## Commands

- `npm run build` — builds all packages (runs `tsgo` in each)
- `npm run typecheck` — typechecks without emitting (`tsgo --noEmit`)
- `npm run dev` — `node --watch src/index.ts` in `packages/app` (Node >=26 required)

## Toolchain

- Uses **TypeScript 7.0 native Go compiler** (`tsgo` from `@typescript/native-preview`), not regular `tsc`.
- `tsgo` builds; `tsgo --noEmit` typechecks.
- Node >=26 (native `--watch`).

## Monorepo

- npm workspaces under `packages/*`.
- `@multirepo/app` — Express server, depends on `@multirepo/logger`.
- `@multirepo/logger` — Express middleware (`urlLogger`), peer-depends on `express`.
- Module systems differ: logger uses `"module": "ES6"`, app uses `"module": "NodeNext"` + `erasableSyntaxOnly: true`.

## Testing

No test runner or test scripts configured.

## Gotchas

- Run `npm install` from root only, never inside packages.
- Logger's `UserType` enum: `REGULAR = 0`, `NORMAL = 1` — may be unintentional.
- `dist/` is gitignored — rebuild (`npm run build`) before consuming cross-package changes.
