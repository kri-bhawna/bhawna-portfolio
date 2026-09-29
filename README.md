# Kumari Bhawna — portfolio

Single-page portfolio for Kumari Bhawna. Same layout as a professional engineer site: hero, about, experience, education, projects, skills, highlights, contact, and a light/dark toggle.

All copy lives in `src/data/content.ts`. The public resume link is the Google Drive file set on `siteConfig.resumeUrl`.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Host on GitHub Pages

This repo deploys itself on every push to `main` (see `.github/workflows/deploy.yml`).

1. In the repo settings, open **Pages** and set the source to **GitHub Actions**.
2. Push to `main`. The site is published at `https://<github-username>.github.io/bhawna-portfolio/`.

The build sets `NEXT_PUBLIC_BASE_PATH=/bhawna-portfolio` so assets resolve on a project site. If you serve the site from a domain root (a custom domain, or a `username.github.io` repository), clear that variable in the workflow and push again.

To use your own domain, add the domain under Pages settings and put it in a `CNAME` file at the repo root.
