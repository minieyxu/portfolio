# Minie’s little world

A portfolio with a static homepage and projects page, and a React case study styled with Tailwind. The case study uses Astryx for the interview prompts and Motion for the introductory transition.

## Run

With Node.js 20.19+ or 22.12+ and pnpm installed:

```sh
pnpm install
pnpm dev
pnpm build
pnpm preview
```

Vite builds the homepage, `work.html`, and the linked Feeling In Between case study. Open the case study through the Projects page while the development or preview server is running.

## Files

- `index.html`: homepage text, navigation, and image.
- `homepage.css`: homepage layout and responsive image framing.
- `assets/landscape/woodland-painting.jpg`: the production landscape image.
- `assets/landscape/README.md`: image source and generation prompt.
- `work.html` and `feeling_in_between_warm_editorial.html`: linked portfolio content.
- `woodland-reference.png` and `homepage-reference.png`: original design references, not loaded by the site.

The landscape is static. On narrow screens it crops around the main pine; on wider screens it reveals the full painting. Its original generated PNG is retained outside the project in Codex’s generated image library. Obsolete illustration engines, separate character PNGs, SVG exports, React source, and their dependencies have been removed.
