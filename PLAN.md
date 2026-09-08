# Sun City Center Flowers & Gifts — Website Implementation Plan

## Goal
Build a polished, responsive static storefront for **Sun City Center Flowers & Gifts** that feels warm, local, editorial, and premium while still making the most important actions immediate: shop flowers, call the shop, find the store, and browse occasion-based arrangements.

The visual direction blends the strongest ideas from the supplied references:
- local-florist warmth and direct contact information,
- clean e-commerce product presentation,
- editorial typography and generous whitespace,
- cream / forest-green / coral palette,
- photo-first storytelling with real floral photography.

## Product principles
1. **Actual flower photography leads the experience.** Decorative effects support the content rather than replacing images.
2. **Local trust is visible above the fold.** Phone, location, and local-service messaging stay easy to find.
3. **Static-site friendly.** The site is optimized for GitHub Pages with no build step required.
4. **Commerce routes to the existing ordering site.** This redesign acts as a high-conversion front door and sends purchase CTAs to the florist’s current ordering pages.
5. **Mobile-first interactions.** The navigation becomes a compact drawer; cards, galleries, and contact actions remain touch-friendly.
6. **Accessible by default.** Semantic landmarks, visible focus states, sufficient contrast, reduced-motion support, and descriptive image alt text are included.

## Information architecture
- Announcement bar
- Primary navigation
- Hero: “Flowers for life’s meaningful moments”
- Occasion quick links
- Featured arrangements / popular picks
- Local-service strip
- Wedding + custom floral feature
- Sympathy + thoughtful-gifting feature
- Shop / studio story
- Visit / call / hours contact panel
- Footer with shopping and business links

## Visual system
### Palette
- Forest: `#123d2c`
- Deep forest: `#0a2a1d`
- Cream: `#f7f1e7`
- Warm paper: `#fffaf2`
- Coral: `#d95f45`
- Burgundy accent: `#7d2332`
- Ink: `#1f241f`

### Typography
- Display: Georgia / Times New Roman serif stack for a refined editorial feel without external font dependencies.
- UI/body: system sans-serif stack for clarity and speed.

### Shape & motion
- Soft radii, thin warm borders, restrained shadows.
- Subtle image zoom, button lift, and floral-line ornament motion.
- Motion is disabled when `prefers-reduced-motion` is enabled.

## Photography
Real photography is sourced from free-to-use Unsplash images and loaded responsively from `images.unsplash.com`.

Selected themes:
- hero: mixed pastel bouquets,
- pink roses,
- white sympathy / wedding arrangement,
- sunflower / cheerful bouquet,
- bright mixed bouquet,
- storefront / flower-shop atmosphere,
- rose bouquet detail.

Photo source pages used for attribution/reference:
- https://unsplash.com/photos/assortment-of-colorful-floral-bouquets-for-sale-npK-to-rbaI — Esra Afşar
- https://unsplash.com/photos/a-bouquet-of-white-flowers-sitting-on-top-of-a-wooden-table-K4nCahsnHtg — Katelynn English
- https://unsplash.com/photos/person-holding-yellow-sunflower-bouquet-IumYcPp3Ti4 — Courtney Cook
- https://unsplash.com/photos/pink-roses-in-vase-mjtc0khBqls — Annie Spratt
- https://unsplash.com/photos/pink-roses-in-clear-glass-vase-oKTbuBOyz_E — Kitera Dent
- https://unsplash.com/photos/a-bouquet-of-pink-and-white-roses-kK02K5CYZW0 — Jonathan Sanchez
- https://unsplash.com/photos/a-store-front-with-flowers-_Nu5sUQqN4I — Dario Brönnimann
- https://unsplash.com/photos/a-flower-shop-with-many-flowers-tm6ME830ahk — Dana Sarsenbekova
- https://unsplash.com/photos/a-vase-filled-with-orange-and-pink-flowers-M7HPRCy0Y7I — Yuliia Dementsova

## Business information
Use the florist’s public business details:
- **Sun City Center Flowers & Gifts**
- **1607 Sun City Center Plaza, Sun City Center, FL 33573**
- **Local:** (813) 634-2824
- **Toll-free:** (800) 842-5069

Because opening hours and seasonal notices can change, the design avoids hard-coding a potentially stale “open now” promise and instead encourages visitors to call for today’s hours.

## Implementation
### Files
- `index.html` — semantic page structure and content
- `styles.css` — complete responsive design system
- `script.js` — mobile navigation, active-year label, lightweight interaction enhancements
- `README.md` — project notes and local preview instructions
- `.nojekyll` — prevents Jekyll processing
- `.github/workflows/pages.yml` — GitHub Pages deployment workflow

### External dependencies
None required for the core experience. The implementation intentionally skips Three.js because the photo-led design is stronger and faster without a WebGL dependency; decorative motion is handled with lightweight CSS only.

## Validation checklist
- [ ] Hero and CTAs fit comfortably at 320px width
- [ ] Navigation drawer works with keyboard and pointer
- [ ] All images have useful `alt` text
- [ ] External shop links use safe `rel` values
- [ ] Phone links use `tel:`
- [ ] Address links open a map search
- [ ] Focus states remain visible
- [ ] `prefers-reduced-motion` is respected
- [ ] No horizontal overflow at common mobile sizes
- [ ] GitHub Pages workflow included and enabled where repository permissions allow

## Deployment
GitHub Pages is deployed from the repository using the official Actions flow:
1. Checkout the repository.
2. Configure Pages.
3. Upload the repository root as the Pages artifact.
4. Deploy with `actions/deploy-pages`.

The expected project URL is:
`https://prithiraj.github.io/Sun_City_Center_Flowers_Gifts/`

If Pages is not yet enabled for this repository, the workflow attempts Pages configuration; repository settings may still require the Pages source to be set to **GitHub Actions** once by an administrator.
