# Base44 Dev Environment

## App overview
This repo is a single self-contained static HTML page (`dikang1`) — the "Chookee Inasal Central Franchise System" marketing/portal page. No backend, no build step, no package manager, no external API calls. The only external resource is a logo image hosted on `media.base44.com` (loaded over the network). `eis1` is an empty placeholder file.

## Running the app
```bash
docker compose -f docker-compose.base44.yml up -d
```
- Served by `nginx:alpine` on host port **3000**.
- The repo root is bind-mounted into the container at `/usr/share/nginx/html`; nginx serves `dikang1` as the index document (see `nginx.base44.conf`).
- nginx runs as `user root` (see `nginx.main.base44.conf`) because the sandbox repo directory has restrictive `700` permissions that the default `nginx` worker user cannot traverse.

## Editing
Edits to `dikang1` are reflected immediately on browser refresh (nginx serves the bind-mounted file directly — no rebuild needed). After an edit, call `reload_preview` so the preview iframe refreshes.

## Health check
```bash
curl -sf -H "Host: external-preview.example.com" http://localhost:3000/
```
Should return the HTML starting with `<!DOCTYPE html>` and the `<title>Chookee Inasal ...`.

## Secrets
None required — the app has no backend or external service credentials.
