# Iron Brothers Premium Website

Premium personalized fitness coaching website. Multi-language (EN/PT) landing experience designed for conversions: clear value, strong social proof, focused CTAs.

## Tech Stack
- React 18 + Vite (fast dev server and optimized build)
- ESLint + Prettier + EditorConfig (consistent formatting & linting)
- Vitest + Testing Library (unit/component tests)
- GitHub Actions CI (lint, test, build on every push/PR)
- (Optional) Tailwind CSS – utilities can be added later (currently using handcrafted utility classes)

## Getting Started
```bash
npm install
npm run dev
```
Visit: http://localhost:5173

## Scripts
| Script | Purpose |
| ------ | ------- |
| `npm run dev` | Start local dev server |
| `npm run build` | Production build (outputs to `dist/`) |
| `npm run preview` | Preview production build locally |
| `npm test` | Run tests once |
| `npm run test:watch` | Watch mode for tests |
| `npm run lint` | Lint source files |
| `npm run format` | Apply Prettier formatting |

## Project Structure
```
index.html              # Vite entry HTML
package.json            # Dependencies & scripts
src/                    # Source code
	main.jsx              # React entry
	IronBrothersLanding.jsx  # Main landing component
public/assets/          # Static image assets
.github/workflows/ci.yml# CI pipeline
```

## Component Notes
`IronBrothersLanding.jsx` contains inline style utilities and bilingual copy. Future enhancements:
- Extract translation copy to `i18n/en.json` & `i18n/pt.json`
- Introduce a state manager or context for language toggle
- Replace Unsplash placeholders with curated transformation images
- Add form handling (submit to API / email service)

## Testing
Example test file: `src/IronBrothersLanding.test.jsx`
Run all tests:
```bash
npm test
```

## Deployment
Static build via `npm run build` -> contents of `dist/`. Can be deployed to Netlify, Vercel, GitHub Pages, or Azure Static Web Apps.

## Roadmap Ideas
- Tailwind integration & theme tokens
- Accessibility pass (ARIA labels, semantic sections)
- SEO improvements (meta tags, structured data)
- Contact/lead capture backend endpoint
- Dark/Light mode toggle (currently dark-first)
- Analytics (privacy-respecting)

## License
See `LICENSE` for details.

---
Feel free to expand into a full client portal or e-commerce integration (Shopify, etc.) later.
