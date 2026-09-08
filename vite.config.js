import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// Custom domain (see public/CNAME) serves the site at its own root, so
// assets resolve from '/' rather than a GitHub Pages project subpath.
// NOTE: until DNS for ganeshotsavberlin.com is pointed at GitHub Pages,
// this means the interim https://<owner>.github.io/ganeshotsav-berlin/
// preview link will 404 on its assets (root-relative paths resolve
// against the github.io origin, not the /ganeshotsav-berlin/ subpath) —
// that's expected. See README.md for the domain cutover steps.
export default defineConfig({
  plugins: [react()],
  base: '/',
})
