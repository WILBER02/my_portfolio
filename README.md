# Wilberforce Muhuyi Muramba — Professional Portfolio

A modern, fast, ATS-friendly, fully responsive portfolio website built with **HTML, CSS, JavaScript, and Bootstrap 5**.
Dark base with alternating light sections, smooth animations, timeline, skill bars, animated counters, and a clean software/data portfolio.

---

## 📁 Project Structure

```
portfolioF/
├── index.html              # Single-page portfolio (all sections)
├── assets/
│   ├── css/style.css       # Design system + themes + animations
│   ├── js/main.js          # All interactive features
│   ├── img/                # drop your photos & screenshots (names in img/README.md)
│   └── resume/             # drop Wilberforce_Muramba_Resume.pdf
└── README.md
```

## 🚀 Quick Start

1. **Clone / download** this folder.
2. Open `index.html` in a browser — everything works with no build step.
3. Replace the `YOUR-…` placeholders (see below).

## ✏️ Content Setup — files to drop in

| Drop into | Exact filename | Notes |
|---|---|---|
| `assets/img/` | `wilberforce.jpg` | Hero portrait **and** About photo (same file used twice) |
| `assets/img/` | `og_cover.png` | Social-share preview (OG / X card), 1200×630 |
| `assets/img/` | `switor-home.png` | Switor Fashion homepage screenshot |
| `assets/img/` | `switor-products.png` | Switor product catalog screenshot |
| `assets/img/` | `switor-cart.png` | Switor shopping cart screenshot |
| `assets/resume/` | `Wilberforce_Muramba_Resume.pdf` | Hero "Download Resume" target |

All of these names are **already referenced** in `index.html` — the styled placeholders
stay visible until each file exists, so the page never looks broken (details in
`assets/img/README.md`).

## ✏️ Links to fill in (all live in `index.html`)

All placeholders in `index.html` are filled in: portfolio → `https://wilber02.github.io/my_portfolio`, LinkedIn → `https://www.linkedin.com/in/wilberforce-muhuyi-49762a39a/`, GitHub → `https://github.com/WILBER02`, email → `wilberforcemuhuyi28@gmail.com`,
WhatsApp → `https://wa.me/254718682769`, phone → `+254 758 352 185`.

Still to personalize: the 2 placeholder certificate cards and the 2 project cards.

### Contact form — ready for Netlify Forms

The contact form (`#contactForm`) is pre-wired for **Netlify Forms** (`data-netlify="true"` + hidden
`form-name` field + honeypot). No backend code needed:

1. Deploy the site to Netlify (drag-and-drop the folder or connect the GitHub repo).
2. Netlify auto-detects the form on deploy — submissions appear under
   **Site settings → Forms** and get emailed to the address set in your Netlify account.

On **GitHub Pages** (or anywhere without Netlify), the form automatically falls back to opening
the visitor's email app with the message prefilled to `wilberforcemuhuyi28@gmail.com` — so it never
silently fails.

## 🌐 Deployment

### Option A — GitHub Pages (free, recommended)
```bash
git init
git add .
git commit -m "Portfolio v1"
git branch -M main
git remote add origin https://github.com/WILBER02/my_portfolio.git
git push -u origin main
```
Then: **Repo → Settings → Pages → Branch: main / root → Save**. Your site lives at
`https://wilber02.github.io/my_portfolio/`.

### Option B — Netlify (free)
1. Push the folder to a GitHub repo (steps above).
2. Go to [app.netlify.com](https://app.netlify.com) → **Add new site → Import from Git**.
3. Pick the repo. Build command: leave empty. Publish directory: leave empty (or `/`).
4. **Deploy**. Netlify also gives you form handling if you enable it in the UI.

### Custom domain
Add your domain in GitHub Pages settings or Netlify → **Domain management**, then set the DNS record.

## 🔍 SEO (already implemented)

- Unique `<title>` + meta description (~155 chars)
- Keywords, author, robots, canonical
- **Open Graph** + **Twitter Card** tags (update the `og:image` URL)
- **JSON-LD structured data** (`schema.org/Person`)
- Semantic HTML5 (`header`, `nav`, `main`, `section`, `article`, `figure`, `footer`)
- Accessibility: skip-link, ARIA labels, `aria-live` typed text, focus-visible rings, reduced-motion support

## ⚡ Performance Optimizations

- No build tooling, no frameworks beyond Bootstrap CDN → tiny, instant first paint
- CSS variables & one small stylesheet; defer non-critical JS (load scripts at end of body)
- Replace `data:` favicon / placeholder gradients with optimized WebP images (compress to < 100 KB)
- Self-host Bootstrap + fonts (or add `crossorigin`) if you want to remove all third-party requests
- Add `loading="lazy"` to real `<img>` elements below the fold

## ♿ Accessibility Improvements (implemented)

- Semantic landmarks & single `h1`
- Skip-to-content link, visible focus states
- `aria-expanded` on the menu toggler, `aria-current` on active nav items
- Progress bars expose `role="progressbar"` with `aria-valuenow`
- `prefers-reduced-motion` disables animations
- Contrast-checked palettes (dark & light)

## 🎨 Design Choices

- **Palette:** dark-first system — light-black `#1A1D22` / charcoal `#14171C` sections, card gray `#22262E`, off-white text, light-blue accents `#38BDF8` (gradient `#7DD3FC → #0EA5E9`), teal link hover `#5EEAD4`, warm orange `#F2A65A` for small accents, footer in a lighter gray `#262B33`.
- **Fonts:** [Space Grotesk](https://fonts.google.com/specimen/Space+Grotesk) (headings) + [Inter](https://fonts.google.com/specimen/Inter) (body).
- **Icons:** [Bootstrap Icons](https://icons.getbootstrap.com/) — SVG icon fonts, zero image requests.
- **Photos:** a real headshot (front-facing, clean background) and 3–4 crisp screenshots of Switor.

## 💼 Recruiter / ATS Notes

- Job titles used verbatim from target roles (Software Engineer, Full Stack Developer, Data Analyst).
- Plain, keyword-rich copy; no tables or graphics-only text blocks that ATS can't read.
- Every claim is backed by a concrete example (interview-advantage section).
- Keep the resume PDF single-page and mirror the same keywords.

## 🧠 Recommended Next Projects (to compete for SWE / Data roles)

1. **Sentiment / annotation tool** — a small labeled dataset + a trained classifier (Python), with a README explaining labeling guidelines.
2. **Prompt-evaluation harness** — script that scores LLM outputs against a rubric and exports a report.
3. **REST API with auth** (e.g., a task manager in PHP/MySQL or Python/Flask) — shows modern API skills.
4. **Portfolio tracker / budget app** — demonstrates JavaScript front-end + localStorage or a backend.
5. **A search-quality demo** — a mini relevance-rating UI, directly mirroring Search Quality Evaluator work.
6. **Content-moderation classifier** — text classification with clearly documented edge cases.

Each should have: problem → solution → tech → challenges → lessons, plus GitHub + live demo links, exactly like the Switor card.

---

© 2026 Wilberforce Muhuyi Muramba. Built with HTML, CSS, JavaScript & Bootstrap.
