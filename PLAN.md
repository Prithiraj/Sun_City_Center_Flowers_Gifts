# Sun City Center Flowers & Gifts — Website Implementation Plan

## Goal
Build a polished, responsive, photo-first storefront for **Sun City Center Flowers & Gifts** that combines three visual ideas supplied by the user:

1. **Local florist reference** — immediate call / directions actions, strong local identity, warm shop photography, useful contact information above the fold.
2. **Modern ecommerce reference** — clear shopping hierarchy, occasion chips, compact product/category cards, strong mobile browsing patterns, dark-green service bands.
3. **Editorial floral-studio reference** — elegant serif display typography, cream paper tones, burgundy accents, generous whitespace, asymmetrical flower photography, refined wedding storytelling.

These references are used **only for visual direction and layout patterns**. Their names, addresses, phone numbers, opening hours, prices, delivery promises, reviews, testimonials, product names, and other invented business details are not copied into the implementation.

## Source-of-truth policy
Business facts come from the florist’s public ordering site, not from the design references.

Verified source pages used during implementation:
- https://www.flowersbysuncitycenterflowers.com/
- https://www.flowersbysuncitycenterflowers.com/roses.php
- https://www.flowersbysuncitycenterflowers.com/birthday.php
- https://www.flowersbysuncitycenterflowers.com/sympathy.php
- https://www.flowersbysuncitycenterflowers.com/custom_orders.php
- https://www.flowersbysuncitycenterflowers.com/wedding-flowers
- https://www.flowersbysuncitycenterflowers.com/gift-baskets
- https://www.flowersbysuncitycenterflowers.com/gift_items.php

Verified business details used in the page:
- **Sun City Center Flowers & Gifts**
- **1607 Sun City Center Plaza, Sun City Center, FL 33573**
- **Local:** (813) 634-2824
- **Toll-free:** (800) 842-5069
- The shop lists flowers for delivery in Sun City Center and surrounding areas.
- The shop lists roses, birthday flowers, sympathy flowers, wedding flowers, gift baskets, gift items, and custom flower designs.

### Deliberately not hard-coded
The site does not present fixed hours, “open now” status, fixed delivery cut-off times, guaranteed same-day delivery, customer testimonials, or product pricing. These can change. Visitors are directed to the florist’s live ordering site or asked to call for current information.

## Product principles
1. **Real flower photography leads the design.** The implementation uses real photographic imagery; CSS ornamentation only complements the photos.
2. **Local trust is immediate.** Phone, address, directions, and online-order links appear above the fold.
3. **Commerce stays authoritative.** Category cards route directly to the florist’s current ordering pages rather than duplicating dynamic inventory or pricing.
4. **Editorial, not ornamental overload.** Large serif headlines, paper tones, botanical spacing, and asymmetrical image layouts create the premium feel.
5. **Mobile is a first-class layout.** The navigation becomes a drawer, category cards remain scannable, horizontal occasion chips are touch-friendly, and a bottom action bar exposes Call / Shop / Directions.
6. **Accessible by default.** Semantic structure, alt text, focus states, keyboard-dismissible navigation, and reduced-motion support are included.
7. **Static-site friendly.** No build step and no runtime framework are required for GitHub Pages.

## Information architecture
- Announcement bar with location + call-to-confirm message
- Primary navigation
- Editorial split hero with two real flower photos
- Above-the-fold phone / address / shop-online strip
- Occasion chips
- Four-category ecommerce grid: Roses, Birthday, Sympathy, Custom Flower Design
- Local delivery information banner
- Wedding editorial feature
- Gift baskets / gift items / custom design feature
- Visit-the-shop image collage + verified address / phone card
- Direct-contact callout
- Footer with verified category and service links
- Mobile Call / Shop / Directions action bar

## Visual system
### Palette
- Deep forest: `#103526`
- Forest: `#174a35`
- Cream: `#f7f0e6`
- Warm paper: `#fffaf4`
- Coral: `#d66045`
- Burgundy: `#7a2831`
- Ink: `#202520`

### Typography
- Display: an editorial system serif stack (`Iowan Old Style`, `Palatino`, `Baskerville`, `Georgia`).
- UI/body: system sans-serif stack for clarity and loading speed.

### Shape and motion
- Soft but restrained radii.
- Thin warm borders and low-contrast shadows.
- Subtle image zoom / button lift on pointer devices.
- All transitions collapse under `prefers-reduced-motion`.

## Photography
Actual flower and florist photography is loaded from `images.unsplash.com` and credited to Unsplash contributors in the site footer.

The image set covers:
- pastel mixed florist display,
- rose detail,
- bright sunflower bouquet,
- white floral arrangement,
- custom-style peach/pink arrangement,
- wedding bouquet,
- flower shop interior,
- flower storefront.

No generated image is used as a replacement for real shop/floral photography in this implementation. Three.js is not used because it would not improve the photo-led experience enough to justify the extra weight; CSS decorative details are intentionally subordinate to the photographs.

## Implementation files
- `index.html` — semantic storefront and verified business content
- `styles.css` — responsive visual system matching the three reference directions
- `script.js` — accessible mobile navigation, sticky-header state, active year
- `PLAN.md` — design rationale, source-of-truth rules, and deployment record
- `README.md` — project summary and local preview instructions
- `.nojekyll` — keeps GitHub Pages from applying Jekyll processing

## Validation checklist
- [x] Reference images used only for visual direction
- [x] No invented address, phone, hours, pricing, reviews, or delivery guarantees copied from reference comps
- [x] Business identity/address/phone verified against official florist site
- [x] Category/service links point to existing florist pages
- [x] Real photography remains the primary visual content
- [x] Responsive breakpoints cover desktop, tablet, and small mobile
- [x] Mobile navigation exposes `aria-expanded` and closes with Escape
- [x] All content images have descriptive `alt` text
- [x] External links use `rel="noopener noreferrer"`
- [x] Phone actions use `tel:`
- [x] Directions link targets the verified address
- [x] Visible keyboard focus states included
- [x] `prefers-reduced-motion` respected
- [x] No build tooling required

## Deployment
The static site is released to the repository’s `gh-pages` branch for GitHub Pages hosting.

Release workflow:
1. Implement and review changes on `main`.
2. Mirror the approved `index.html`, `styles.css`, `script.js`, `PLAN.md`, `README.md`, and `.nojekyll` files to `gh-pages`.
3. GitHub Pages publishes the branch when repository Pages settings are configured for `gh-pages` / root.
4. Verify the public project URL after the Pages deployment is active.

Expected project URL:
`https://prithiraj.github.io/Sun_City_Center_Flowers_Gifts/`
