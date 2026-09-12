# Base44 Dev Environment

## Stack
- Vite + React 18 (JavaScript, no TypeScript)
- Single-page app, entry point: `src/main.jsx`
- Dev server on port 3000

## Running
```bash
docker compose -f docker-compose.base44.yml up -d --build
```

## Structure
- `src/App.jsx` — root component
- `src/LandingPage.jsx` — main landing page
- `src/LandingPage.css` — landing page styles
- `src/index.css` — global styles and CSS variables

## Notes
- Node modules are stored in a named volume to persist across restarts
- Vite dev server runs with `--host 0.0.0.0` for container access
- `allowedHosts: true` in vite.config.js allows the preview proxy host
