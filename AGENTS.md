# Base44 Dev Environment

## App overview
This repository is a single static HTML site (`dikang1`) — the "Chookee Inasal Central Franchise System" landing/marketing page. There is no backend, no build step, no package manager, and no external-service credentials required. `eis1` is an empty placeholder file.

## How it runs
- Served by `nginx:alpine` via `docker-compose.base44.yml`, bind-mounting the repo root to `/app`.
- `nginx.base44.conf` serves `dikang1` as the index page on container port 5173, mapped to host port 3000 (the preview entry point).
- No live-reload dev server (it's static HTML); edit `dikang1` directly and call `reload_preview` to see changes.

## Setup quirks
- The repo root directory ships with mode `700`; nginx's worker user cannot read it. `chmod a+rX .` on the repo root and files is required before nginx can serve (already applied in this environment).

## Verification
- `curl -sf -H "Host: external-preview.example.com" http://localhost:3000/` must return 200 and the HTML doctype.
