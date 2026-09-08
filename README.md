# Ganeshotsav Berlin

Source for the Ganeshotsav Berlin website — a React + Vite + Tailwind CSS single-page app.

## Getting started

```bash
npm install
npm run dev       # start the dev server
npm run build     # production build to dist/
npm run preview   # preview the production build locally
```

## Project structure

- `src/pages/` — one file per route
- `src/components/` — shared UI (`Header`, `Footer`, `WhatsAppSection`, `PersonCard`, etc.)
- `src/lib/site.js` — site-wide constants (contact info, social links, WhatsApp channel URL, venue address)
- `src/data/press.js` — press release content
- `src/App.jsx` — route definitions

## Deployment

Pushes to this branch (and to `main`) auto-deploy to GitHub Pages via
`.github/workflows/deploy.yml`. The repo has a `public/CNAME` pointing at
`ganeshotsavberlin.com`, so the site is built to be served from that domain's
root — **this is prepared but not yet live**; GitHub Pages only actually
serves the custom domain once its DNS points there.

**Interim preview** (before DNS is switched): https://rutwik1994.github.io/ganeshotsav-berlin/
Because the build now uses root-relative asset paths (required for the custom
domain), this interim link will be unstyled/broken until the domain cutover
below is done — that's expected, not a bug. Use `npm run dev` locally to
preview in the meantime.

**To point ganeshotsavberlin.com at this site**, whoever manages the domain's
DNS needs to, at the registrar/DNS provider:

1. Add these four **A** records for the apex domain (`@`):
   ```
   185.199.108.153
   185.199.109.153
   185.199.110.153
   185.199.111.153
   ```
   (Optionally, **AAAA** records for IPv6: `2606:50c0:8000::153`,
   `2606:50c0:8001::153`, `2606:50c0:8002::153`, `2606:50c0:8003::153`.)
2. If `www.ganeshotsavberlin.com` should also work, add a **CNAME** record for
   `www` → `rutwik1994.github.io`.
3. Once DNS has propagated (can take minutes to hours), go to the repo's
   **Settings → Pages** and confirm the custom domain shows as verified, then
   check **Enforce HTTPS** once the certificate is issued.

⚠️ **Heads up:** the domain currently points at the existing live site. Once
DNS is switched to the values above, this rebuild replaces it — so only do
this when the rebuild (see gaps below) is actually ready to go live.

## Known gaps / follow-ups

This was rebuilt from a set of saved pages from the live site plus its structured
data (JSON-LD, meta tags), since several pages render entirely client-side and
their content couldn't be captured directly. In particular:

- **Home page** (`src/pages/Home.jsx`) — the live homepage never rendered in the
  saved export (it only ever showed a loading state), so this page's copy is
  reconstructed from meta tags and JSON-LD event data. Treat it as a first draft.
- **Header dropdown contents** (`src/components/Header.jsx`) — the "Ganeshotsav"
  and "Learn" menu items are a best guess grouped from the footer's link
  categories, since the live dropdowns are client-rendered and weren't captured.
- **Team photos** (`src/pages/Team.jsx`) — real photos weren't captured; initials
  avatars are used as placeholders (`src/components/PersonCard.jsx`).
- **Gallery** (`src/pages/Gallery.jsx`) — placeholder; no photos were available.
- **Impressum / Privacy Policy** — intentionally left as placeholders rather than
  guessed legal text. Both need real, reviewed content before publishing (German
  law requires an accurate Impressum; a Privacy Policy needs to reflect actual
  data processing).
- **Press release full text** (`src/pages/PressArticle.jsx`) — only the teaser
  copy from the press listing was available; full release bodies are missing.
- **Blog** — the live blog currently shows 0 published articles, so this page
  matches that empty state.
