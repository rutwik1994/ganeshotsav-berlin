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
