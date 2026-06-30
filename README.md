# Jhon Rey – Personal Portfolio

A responsive, single-page personal portfolio website built with **React + TypeScript + Vite**. Features a light/dark mode toggle with smooth crossfade animations, video profile media, an integrated EmailJS contact form with reCAPTCHA, and an alternating project showcase.

---

## ?? Tech Stack

| Layer | Technology |
|---|---|
| Framework | [React 19](https://react.dev/) |
| Language | TypeScript |
| Bundler | [Vite 8](https://vite.dev/) |
| Styling | Vanilla CSS (custom properties / CSS variables) |
| Font | [Inter](https://fonts.google.com/specimen/Inter) via Google Fonts |
| Email | [EmailJS](https://www.emailjs.com/) |
| CAPTCHA | [Google reCAPTCHA v2](https://www.google.com/recaptcha/) |
| Linting | ESLint + typescript-eslint + eslint-plugin-react-hooks |

> No external UI library or CSS framework is used — everything is hand-crafted with CSS variables for theme switching.

---

## ?? Project Structure

```
my_personal_portfolio/
+-- public/
¦   +-- favicon.svg              # Browser tab icon
¦   +-- icons.svg                # SVG sprite (reserved)
+-- src/
¦   +-- assets/
¦   ¦   +-- new_cat_shade.mp4    # Light mode profile video
¦   ¦   +-- reverse_cat_shade.mp4# Dark mode profile video
¦   ¦   +-- verified_badge.png   # Verified checkmark (natural colour, no filter)
¦   ¦   +-- mail-white.png       # Mail icon for light mode Send Email btn
¦   ¦   +-- mail-dark.png        # Mail icon for dark mode Send Email btn
¦   ¦   +-- down.png             # View More arrow (light mode)
¦   ¦   +-- down-dark.png        # View More arrow (dark mode)
¦   ¦   +-- location.png
¦   ¦   +-- about.png
¦   ¦   +-- job_experience.png
¦   ¦   +-- tech_stack.png
¦   ¦   +-- facebook.png         # Contact footer Facebook icon
¦   ¦   +-- phone-white.png      # Contact footer phone icon
¦   ¦   +-- travel_tours.png
¦   ¦   +-- the_folio.png
¦   ¦   +-- bias.png
¦   ¦   +-- magic_leftovers1.png
¦   ¦   +-- magic_leftovers2.png
¦   +-- App.tsx              # Main component + all section markup
¦   +-- App.css              # Component-level styles
¦   +-- ContactModal.tsx     # Floating "Message me" button + slide-up form panel
¦   +-- ContactModal.css     # Modal + FAB styles
¦   +-- index.css            # Global reset, CSS tokens, dark/light mode vars
¦   +-- main.tsx             # React entry point
+-- .env                     # EmailJS keys + reCAPTCHA site key (not committed)
+-- index.html               # HTML shell + Google Fonts link
+-- vite.config.ts
+-- tsconfig.json
+-- tsconfig.app.json
+-- tsconfig.node.json
+-- eslint.config.js
+-- package.json
```

---

## ?? Design System

All colours are defined as **CSS custom properties** on `:root` (light mode) and overridden on `:root.dark` (dark mode). Theme switching is smooth — toggling the `.dark` class on `<html>` transitions all tokens via `transition: background 0.3s ease`.

### Tokens (selected)

| Variable | Light | Dark |
|---|---|---|
| `--bg-page` | `#f0efef` | `#2b2b2b` |
| `--bg-card` | `#e8e7e7` | `#3a3a3a` |
| `--text-primary` | `#1a1a1a` | `#f0f0f0` |
| `--btn-bg` | `#1a1a1a` | `#f0f0f0` |
| `--toggle-track` | `#c8c8c8` | `#5a9fff` |

---

## ??? Sections

### 1. Hero
- **Profile media** — layered crossfade: `new_cat_shade.mp4` (light) / `reverse_cat_shade.mp4` (dark). Each video plays from the beginning on every mode toggle and freezes on its last frame. Transition is a smooth **0.5 s opacity crossfade**.
- Name row with **verified badge** (natural colour retained in both modes)
- Location badge and **"Aspiring UI/UX Designer"** subtitle
- **Send Email** button — `mail-white.png` in light mode, `mail-dark.png` in dark mode

### 2. About + Experience *(two-column grid)*
**Left column**
- **About** card — scrollable bio (max-height 200 px) with custom thin scrollbar
- **Tech Stack** card — tags grouped by *Frontend* and *Backend*

**Right column**
- **Experience** card — scrollable list of 7 role types

### 3. View More Button
- Centred pill button with a down-arrow icon
- `down.png` in light mode, `down-dark.png` in dark mode
- Smooth-scrolls to the Projects section via `scrollIntoView({ behavior: 'smooth' })`

### 4. My Projects
Four project cards in a vertical stack:

| # | Project | Stack | Link |
|---|---|---|---|
| 01 | J&D Amazing8 Travels and Tours | React, TypeScript, Supabase | [amazing8.netlify.app](https://amazing8.netlify.app/) |
| 02 | The-Folio Project | React, Supabase, TypeScript | — |
| 03 | BIAS – Barangay Inquiry & Appointment System | HTML, CSS, JS, Figma | — |
| 04 | MagicLeftOvers | Figma, UI/UX, Prototyping | — |

**Card features:**
- Even/odd cards flip image left ? right
- Multi-image cards auto-cycle every **2.5 s** with opacity crossfade
- Hover ? lifts `translateY(-6px)` + accent bar sweeps in
- Clickable cards open external project links in a new tab

### 5. Contact Modal ("Message me")
- Fixed floating pill button (bottom-right) with a **blue pulsing glow** matching the verified badge colour (#1877F2)
- Slides up as a panel from the bottom-right
- **EmailJS form** with fields: Full Name, Email Address, Phone Number, Message
- Google reCAPTCHA v2 required before sending
- Footer contact links: phone (`tel:`), Facebook ([iammushi2089](https://www.facebook.com/iammushi2089)), email

---

## ?? Components

### `DarkModeToggle`
```tsx
<DarkModeToggle dark={boolean} onToggle={() => void} />
```
Pill-shaped toggle. Defaults to **light mode**. Applies `.dark` to `document.documentElement` via `useEffect`.

### `ProjectCard`
```tsx
<ProjectCard project={Project} index={number} />
```
Single project card with optional `project.link` — wraps in `<a>` if set.

### `ContactModal`
```tsx
<ContactModal />
```
Self-contained floating button + slide-up panel. Manages form state, reCAPTCHA token, and EmailJS send.

### `App` (default export)
Root component. Holds `dark` state (`false` = **light default**), two video refs (`lightVideoRef`, `darkVideoRef`), and `projectsRef` for scroll target.

---

## ??? Responsive Breakpoints

| Breakpoint | Behaviour |
|---|---|
| `> 900px` | Two-column grid for About/Experience; project cards show image + text side-by-side |
| `= 900px` | Single-column layout; project card image stacks above text |
| `= 600px` | Reduced padding, smaller fonts, hero stacks vertically |

---

## ?? Environment Variables

Create a `.env` file in the project root (never commit this):

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
VITE_RECAPTCHA_SITE_KEY=your_recaptcha_site_key
```

### EmailJS Template Variables

The template must use exactly these variable names:

| Template placeholder | Value sent |
|---|---|
| `{{user_name}}` | Full Name field |
| `{{user_email}}` | Email Address field |
| `{{user_phone}}` | Phone Number field |
| `{{message}}` | Message textarea |

---

## ?? Getting Started

### Prerequisites
- Node.js = 18
- npm = 9

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
npm run build    # Type-check + production bundle ? dist/
npm run preview  # Serve the production build locally
npm run lint     # Run ESLint
```

---

## ?? Key Dependencies

```json
"dependencies": {
  "react": "^19.x",
  "react-dom": "^19.x",
  "@emailjs/browser": "^4.x",
  "react-google-recaptcha": "^3.x"
},
"devDependencies": {
  "@vitejs/plugin-react": "^6.x",
  "typescript": "~6.x",
  "vite": "^8.x",
  "eslint": "^10.x"
}
```

---

## ?? Notes

- All images and videos are imported in `App.tsx` / `ContactModal.tsx` and bundled by Vite (content-hashed filenames in production).
- Dark mode state is **not persisted** to `localStorage` — page refresh resets to **light mode** (default).
- The portfolio is a **single page with no routing** — all sections live in one scrollable document.
- SEO meta tags are set in `index.html`.
- The `verified_badge.png` retains its natural colour in both modes (no CSS filter applied).

---

*Built by Jhon Rey · La Union, Philippines*
