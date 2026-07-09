# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev          # Start Vite dev server
npm run build        # Type-check + production build
npm run lint         # ESLint
npm run test.unit    # Vitest unit tests
npm run test.e2e     # Cypress e2e tests
```

Run a single unit test file:
```bash
npx vitest run src/App.test.tsx
```

For mobile targets, use Ionic CLI (requires `npm install -g @ionic/cli`):
```bash
ionic capacitor sync android   # Sync web assets to Android
ionic capacitor run android --livereload --external
```

## Architecture

**Stack:** Ionic 8 + React 19 + TypeScript, bundled with Vite. Targets both web and mobile (via Capacitor).

**Auth flow:** `AuthService` (singleton) stores GitHub username + personal access token in `localStorage`. `App.tsx` reads `AuthService.isAuthenticated()` synchronously on every render to gate the tab layout behind `/login`. Login redirects via `window.location.href` (hard reload) so the auth check re-runs. `AuthService.getAuthHeaders()` returns a `Basic btoa(username:token)` header.

**API layer (`src/services/GithubService.ts`):** Creates one Axios instance (`githubApiClient`) at module load time with auth headers. `fetchRepositories` currently bypasses this instance and uses raw `axios.get` (no auth header). `createRepository` and `getUserInfo` use `githubApiClient`. The GitHub API base URL is read from `VITE_GITHUB_API_URL` (`.env`).

**Page lifecycle:** Pages use Ionic's `useIonViewWillEnter` hook (not `useEffect`) to reload data when a tab is navigated back to — this is intentional for Ionic's tab caching model.

**Interfaces (`src/interfaces/`):** `Repository`, `RepositoryPayload`, `GithubUser` — these are the shapes used across pages and services.

**Components (`src/components/`):** `RepoItem` renders a single repository entry; `LoadingSpinner` wraps `IonLoading`.

## Environment

Copy `.env` and set:
```
VITE_GITHUB_API_URL=https://api.github.com
VITE_GITHUB_API_TOKEN=<not currently used — auth comes from localStorage via AuthService>
```

Credentials are entered at runtime through the Login page and persisted in `localStorage` — the `.env` token is not consumed by any active code path.

## Lab progression

This is a lab project built incrementally:
- **Lab 7**: Ionic GUI components (lists, forms, tabs)
- **Lab 8**: GET endpoints (`/user/repos`, `/user`)
- **Lab 9**: POST endpoint (`/user/repos`)
- **Exam**: DELETE + PATCH on `/repos/{owner}/{repo}`
