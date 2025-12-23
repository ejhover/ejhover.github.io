# Emmet Hoversten - Recreated Portfolio

This repository recreates the portfolio site from the files you provided. It's a minimal Next.js project with Tailwind CSS and Framer Motion.

## Quick start

1. Install dependencies
   ```bash
   npm install
   ```
2. Run development server
   ```bash
   npm run dev
   ```

Open http://localhost:3000 to view the site.

## Deploy to GitHub Pages (user/organization site at `ejhover.github.io`)

Recommended approach: create a GitHub repository named `ejhover.github.io` and push this project to its `main` branch.

1. Add the remote and push:
   ```bash
   git remote add origin https://github.com/ejhover/ejhover.github.io.git
   git branch -M main
   git push -u origin main
   ```

2. The repository includes a GitHub Actions workflow that will build, export (`next export`) and publish the static `out/` folder to the `gh-pages` branch whenever you push to `main`.

3. Configure Pages for the repository (if not automatic):
   - Go to Settings → Pages → Source: `gh-pages` branch → `/ (root)` → Save.

Alternate: If you'd prefer to publish directly to the `main` branch (for a repo named `ejhover.github.io` you can set Pages to serve from the `main` branch), replace the `peaceiris/actions-gh-pages` step with a custom push using `actions/checkout` with `persist-credentials: true` then `git push` to `main`.

Note: After the workflow runs, your site will be available at `https://ejhover.github.io` (may take a few minutes on initial deploy).

Notes:
- The project uses `@/*` path alias to map to `src/*` (see `jsconfig.json`).
- The `Resume` section embeds a public Google Doc (ID present in the file).