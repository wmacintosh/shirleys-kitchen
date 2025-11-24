# Shirley's Kitchen (Consolidated)
# Shirley's Kitchen (Consolidated)

This workspace has been consolidated so the Vite + React app lives in the `shirleys-kitchen/` folder as the canonical app root. Duplicate root-level project files were archived under `legacy/` and necessary configs were moved into the app folder.

Quick commands (from the repo root):

- Install and start the app:

```bash
cd "./shirleys-kitchen"
npm install
npm run dev
```

- Build for production:

```bash
cd "./shirleys-kitchen"
npm run build
```

- Preview the production build:

```bash
cd "./shirleys-kitchen"
npm run preview
```

What changed:
- Moved `tailwind.config.js` and `postcss.config.cjs` into `shirleys-kitchen/`.
- Archived root `package.json`, `vite.config.js`, `index.html`, `app.js`, and duplicate PostCSS/Tailwind configs into `legacy/`.

If you want the legacy files restored to the repo root instead of archived, tell me and I will move them back.

Development notes:
- The canonical app root is `shirleys-kitchen/` — open that folder in your editor for development.
- Run `npm run lint`, `npm run build`, and `npm run dev` from the `shirleys-kitchen` folder.

Deploying to Vercel
-------------------

This repo is prepared for Vercel. To deploy:

1. In Vercel dashboard choose "Import Project" and select this repository (or use `vercel` CLI).
2. Set the project root to the repository root — Vercel will detect `vercel.json` and build the `shirleys-kitchen` app.
	- Build command: (default) `npm run build`
	- Output directory: `dist` (the app build output inside `shirleys-kitchen/dist`)

Alternatively, from the repo root you can run the Vercel CLI:

```bash
# install Vercel CLI if needed
npm i -g vercel

# deploy (interactive)
vercel
```

Notes:
- `.vercelignore` excludes `node_modules`, `dist`, and large legacy files so they won't be uploaded.
- If your app requires environment variables (Firebase keys, etc.), add them in the Vercel project settings.

