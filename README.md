# Shirley's Kitchen (Consolidated)

This workspace has been consolidated so the Vite + React app lives in the `shirleys-kitchen/` folder as the canonical app root. Duplicate root-level project files have been removed and necessary configs were moved into the app folder.

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
- Removed root `package.json`, `vite.config.js`, `index.html`, `app.js`, and duplicate PostCSS/Tailwind configs.

If you want some of the removed content recovered (for example the legacy `app.js` or the root `index.html`), I can restore or archive them into a `legacy/` folder instead of deleting.
