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
