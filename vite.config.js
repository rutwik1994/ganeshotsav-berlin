import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// Served from https://<owner>.github.io/ganeshotsav-berlin/ via GitHub Pages,
// so assets need to resolve under that subpath rather than site root.
// If/when this moves to a custom domain, change this back to '/'.
export default defineConfig({
  plugins: [react()],
  base: '/ganeshotsav-berlin/',
})
