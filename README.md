# Jhon Rey – Personal Portfolio

A responsive, single-page personal portfolio website built with **React + TypeScript + Vite**. Features a dark/light mode toggle, smooth scroll navigation, and an alternating project showcase with auto-cycling images.

---

## 🚀 Tech Stack

| Layer | Technology |
|---|---|
| Framework | [React 19](https://react.dev/) |
| Language | TypeScript |
| Bundler | [Vite 8](https://vite.dev/) |
| Styling | Vanilla CSS (custom properties / CSS variables) |
| Font | [Inter](https://fonts.google.com/specimen/Inter) via Google Fonts |
| Icons | Custom PNG assets + inline SVG favicon |
| Linting | ESLint + typescript-eslint + eslint-plugin-react-hooks |

> No external UI library or CSS framework is used — everything is hand-crafted with CSS variables for theme switching.

---

## 📁 Project Structure

```
my_personal_portfolio/
├── public/
│   ├── favicon.svg          # Browser tab icon
│   └── icons.svg            # SVG sprite (reserved for future use)
├── src/
│   ├── assets/              # All image assets
│   │   ├── profile_picture_cat.png
│   │   ├── verified_badge.png
│   │   ├── mail.png
│   │   ├── location.png
│   │   ├── about.png
│   │   ├── job_experience.png
│   │   ├── tech_stack.png
│   │   ├── down.png
│   │   ├── travel_tours.png
│   │   ├── the_folio.png
│   │   ├── bias.png
│   │   ├── magic_leftovers1.png
│   │   └── magic_leftovers2.png
│   ├── App.tsx              # Main component + all section markup
│   ├── App.css              # Component-level styles
│   ├── index.css            # Global reset, CSS tokens, dark mode vars
│   └── main.tsx             # React entry point
├── index.html               # HTML shell + Google Fonts link
├── vite.config.ts           # Vite config
├── tsconfig.json            # TypeScript config root
├── tsconfig.app.json        # App-specific TS settings
├── tsconfig.node.json       # Node/Vite TS settings
├── eslint.config.js         # ESLint flat config
└── package.json
```

---

## 🎨 Design System

All colours are defined as **CSS custom properties** on `:root` (light mode) and overridden on `:root.dark` (dark mode). Theme switching is instant — toggling the `.dark` class on `<html>` transitions all tokens at once via `transition: background 0.3s ease`.

### Tokens (selected)

| Variable | Light | Dark |
|---|---|---|
| `--bg-page` | `#f0efef` | `#2b2b2b` |
| `--bg-card` | `#e8e7e7` | `#3a3a3a` |
| `--text-primary` | `#1a1a1a` | `#f0f0f0` |
| `--btn-bg` | `#1a1a1a` | `#f0f0f0` |
| `--toggle-track` | `#c8c8c8` | `#5a9fff` |

---

## 🗂️ Sections

### 1. Hero
- Profile photo with a rounded card border
- Name row with **verified badge** icon
- Location badge and **"Aspiring UI/UX Designer"** subtitle
- **Send Email** `<a>` button linking to `mailto:`

### 2. About + Experience *(two-column grid)*
**Left column**
- **About** card — three-paragraph bio describing background, projects, and skills
- **Tech Stack** card — tags grouped by *Frontend* and *Backend*

**Right column**
- **Experience** card — bulleted list of 7 role types (Business Analyst, QA, Backend Dev, Frontend Dev, UI/UX Design, Static Web Dev, Software Testing)

### 3. View More Button
- Centred pill button with a down-arrow icon
- Clicking it **smooth-scrolls** to the Projects section via `scrollIntoView({ behavior: 'smooth' })`

### 4. My Projects
Four project cards displayed in a vertical stack:

| # | Project | Stack |
|---|---|---|
| 01 | J&D Amazing8 Travels and Tours | React, TypeScript, Supabase |
| 02 | The-Folio Project | React, Supabase, TypeScript |
| 03 | BIAS – Barangay Inquiry & Appointment System | HTML, CSS, JS, Figma |
| 04 | MagicLeftOvers | Figma, UI/UX, Prototyping |

**Project card features:**
- Even/odd cards flip image left ↔ right (`direction: rtl` trick)
- Multi-image cards auto-cycle screenshots every **2.5 s** with a CSS opacity crossfade
- Hover → card lifts (`translateY(-6px)`) + accent-coloured bar sweeps in from the left
- Each card has a unique `--accent` CSS variable colour

---

## ⚙️ Components

### `DarkModeToggle`
```tsx
<DarkModeToggle dark={boolean} onToggle={() => void} />
```
A pill-shaped toggle button. The knob slides with a spring cubic-bezier easing. The `dark` boolean is stored in `App` state and applied to `document.documentElement` via `useEffect`.

### `ProjectCard`
```tsx
<ProjectCard project={Project} index={number} />
```
Renders a single project. Uses `useState` + `useEffect` + `setInterval` for the image carousel. Accepts an `index` to alternate layout direction.

### `App` (default export)
Root component. Holds the `dark` state and a `projectsRef` for the scroll target.

---

## 🖥️ Responsive Breakpoints

| Breakpoint | Behaviour |
|---|---|
| `> 900px` | Two-column layout for About/Experience; project cards show image + text side-by-side |
| `≤ 900px` | Single-column layout; project card image stacks above text |
| `≤ 600px` | Reduced padding, smaller fonts, hero stacks vertically |

---

## 🏃 Getting Started

### Prerequisites
- Node.js ≥ 18
- npm ≥ 9

### Install & Run

```bash
# Install dependencies
npm install

# Start dev server (hot-reload)
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Other Scripts

```bash
npm run build    # Type-check + production bundle → dist/
npm run preview  # Serve the production build locally
npm run lint     # Run ESLint
```

---

## 📦 Key Dependencies

```json
"dependencies": {
  "react": "^19.2.7",
  "react-dom": "^19.2.7"
},
"devDependencies": {
  "@vitejs/plugin-react": "^6.0.3",
  "typescript": "~6.0.2",
  "vite": "^8.1.1",
  "eslint": "^10.6.0"
}
```

---

## 📝 Notes

- All images are imported directly in `App.tsx` and bundled by Vite (content-hashed filenames in production).
- Dark mode state is **not persisted** to `localStorage` — page refresh resets to light mode.
- The portfolio is a **single page with no routing** — all sections live in one scrollable document.
- SEO meta tags (`<title>`, `<meta name="description">`) are set in `index.html`.

---

*Built by Jhon Rey · La Union, Philippines*
