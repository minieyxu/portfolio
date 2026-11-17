# Minie’s little world

A React portfolio built with Vite. Home, Projects, Photo, and About share a Header component. The Feeling In Between case study uses Tailwind CSS, Astryx interview prompts, and Motion for its introductory transition.

## Setup

Use Node.js 24 and pnpm 11.25.0. Node.js includes npm. To check your tools, run each command individually.

```sh
node --version
npm --version
pnpm --version
```

From the project folder, install the dependencies listed in `package.json` using the versions recorded in `pnpm-lock.yaml`.

```sh
pnpm install --frozen-lockfile
```

## Local development

Start Vite and open the local URL it prints in Terminal.

```sh
pnpm dev
```

Keep the server running while editing. Vite processes JSX and updates the browser as files change. View the site through its local HTTP address. Opening an HTML file directly with a `file://` URL cannot render these React pages.

## Production build

Build the site into `dist/`.

```sh
pnpm build
```

Preview that build locally, then open the address printed in Terminal.

```sh
pnpm preview
```

Static hosting publishes the contents of `dist/`. The site has five HTML entry points, configured in `vite.config.js`.

## Files

| Page | HTML entry point | React entry point |
| --- | --- | --- |
| Home | `index.html` | `homepage.jsx` |
| Projects | `work.html` | `projects.jsx` |
| Photo | `photo.html` | `photo.jsx` |
| About | `about.html` | `about.jsx` |
| Feeling In Between | `feeling_in_between_warm_editorial.html` | `case-study.jsx` |

Each HTML entry point provides metadata and an element where React renders the page.

- `components/Header.jsx` provides shared navigation for Home, Projects, Photo, and About. Its `currentPage` prop identifies the active link. The case study has a dedicated sticky header with chapter navigation.
- `site.css` and `theme.css` provide shared styles for the four main pages. Each page also has its own CSS file. The case study imports `case-study.css` and uses Tailwind.
- `public/theme.js` restores the saved theme, handles theme buttons, and announces changes through the `minie-theme-change` browser event.
- `assets/` contains images imported by React. Home uses `anni-painting.jpeg` on larger screens and `animals.jpg` on smaller screens.
- `woodland-reference.png` and `homepage-reference.png` are design references.

## Version control

Review changes, stage the files for a focused checkpoint, and commit with a description of the change.

```sh
 git status
 git diff
 git add path/to/changed-file
 git diff --staged
 git commit -m "Describe the change"
 git push
```

Replace `path/to/changed-file` with the files you want to include. Press `q` to exit Git’s diff viewer. `git --no-pager diff` prints the diff directly in Terminal.

The `.gitignore` excludes installed packages, local pnpm caches, generated builds, temporary output, and macOS metadata. Commit source files, required assets, and the pnpm lockfile so another checkout can reproduce the project.
