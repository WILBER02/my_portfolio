# assets/img — drop your images here with these exact names

The site already references these filenames. Just drop your files in — they'll
automatically replace the styled placeholders (which show until an image exists).
If a file is missing, the placeholder stays, so nothing ever looks broken.

| # | Exact filename | Used where | Suggested spec |
|---|---|---|---|
| 1 | `wilberforce.jpg` | Hero portrait **and** About photo (same file used in both) | Portrait orientation, ~4:5 ratio, 800×1226 px, JPG |
| 2 | `og_cover.png` | Social-share preview (Open Graph / X/Twitter card) | 1200×630 px PNG |
| 3 | `switor-home.png` | Switor Fashion — homepage screenshot | ~16:10 ratio, ≥ 1200×750 px |
| 4 | `switor-products.png` | Switor Fashion — product catalog screenshot | ~16:10 ratio |
| 5 | `switor-cart.png` | Switor Fashion — shopping cart screenshot | ~16:10 ratio |
| 6 | `icon.png` | Certificate icon (shown above each certificate name) | Square, 64×64 px PNG (already resized) |

Notes:
- Keep filenames **exactly** as listed (lowercase, same extension) — the HTML points at them.
- Swap the extension (e.g. use `.webp` instead of `.jpg`) only if you also update the `src` in `index.html`.
- Compress images before uploading (target < 150 KB each) for fast loading.
- The three `switor-*.png` are used inside the Featured Project card; screenshots should be clean, full-page, and readable on mobile.
