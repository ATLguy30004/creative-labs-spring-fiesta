# Refinement Plan — Direction 3: Noche de Fiesta (LOCKED)

## EXECUTION LOCK
This plan is LOCKED. Claude must follow it exactly as written. No deviations, no "improvements", no independent decisions. Every step below is mandatory. If something is unclear, STOP and ask Fahim — do not improvise.

## Context
Fahim showed tonyrobbins.com as the visual reference. The current hero (centered text over full-bleed video) and lack of a photo gallery section don't match. Two Starwind Pro blocks replicate the TR look exactly. Everything else is REFINE polish.

## What Matches Tony Robbins

**TR Hero = Starwind Hero 15 - Cinematic Split**
- Split composition: SWAPPING STILLS (image carousel/slideshow) on left (~60%), event messaging right
- Video preview card bottom-right (hero-highlight.mp4 plays here, NOT as a background)
- Bold typography, high contrast
- Left side cycles through best event photos as a slideshow — NOT a static image, NOT a video background
- This replaces the current centered-text Hero.astro

**TR Photo Strip = Starwind Services 7 - Horizontal Scroll**
- Tall photo cards in a horizontal scrollable row
- Cards bleed off the right edge
- Each card gets: event photo + caption text below
- Placement: after FoodActivities, before LocationParking (visual break before the utilitarian info)
- Uses the 18 real event photos

## Full Section Plan

| # | Section | Action | Block | What Happens |
|---|---------|--------|-------|-------------|
| 1 | Nav | REFINE | — | Fix name → "Creative Labs Learning Center". Remove logo. Add backdrop-blur on scroll. |
| 2 | Hero | **REBUILD** | **Hero 15 - Cinematic Split** | Install block. Left: swapping stills carousel (best event photos cycling). Right: "SPRING FIESTA" headline + date/time + tagline. Bottom-right: video preview card with hero-highlight.mp4. Swap brand colors/fonts/copy only. |
| 3 | EventDetails | REFINE | — | Fix name. Complete hover glow. Bump address text. |
| 4 | FreeTickets | REFINE | — | Larger icons in option cards. Box-shadow for depth against pink. |
| 5 | FoodActivities | REFINE | — | Subtle gradient on text-only bento cards. No structural changes. |
| 6 | **Photo Strip** | **NEW** | **Services 7 - Horizontal Scroll** | Install block. Populate with tall event photos (bull riders, crowd selfies, food shots, family moments). Each card: photo + short caption. Horizontal scroll, bleeds right. |
| 7 | LocationParking | REFINE | — | Fix name. Add standalone event photo as `<img>` element (not bg overlay). |
| 8 | PartnerBanner | REFINE | — | Text legibility via text-shadow (not overlay). Bigger button. More padding. Remove logos. |
| 9 | Footer | REFINE | — | Remove fake SVG logo. Remove all logos. Fix name. Text-only. |

## Global Changes
- Find/replace "Creative Labs Center" → "Creative Labs Learning Center" across all components
- Remove all logo elements (SVG and img) from every component
- No overlay patterns on any photos

## Photo Quality Rule — MANDATORY
Every photo used MUST be properly focused on people. Before placing any image:
1. Check that the subject (person/people) is clearly visible and centered in the crop
2. No junk crops that cut off faces or show empty space
3. If the original image needs cropping, use CSS `object-position` to focus on the person
4. Reject any photo where the subject isn't clear — use a different photo from the asset library instead
5. The 18 enhanced images in public/images/ are the source — pick the ones where people are most visible and well-framed

## Execution Order
1. `npx starwind@latest add @starwind-pro/hero-15` — install Hero 15
2. `npx starwind@latest add @starwind-pro/services-07` — install Services 7
3. Rebuild Hero.astro using Hero 15 structure — swap brand tokens, copy, images only
4. Create PhotoStrip.astro using Services 7 structure — populate with event photos
5. Add PhotoStrip import to direction-3-noche-de-fiesta.astro (after FoodActivities)
6. Work through REFINE sections top-to-bottom (Nav → EventDetails → FreeTickets → FoodActivities → LocationParking → PartnerBanner → Footer)
7. Global find/replace name + remove logos
8. Screenshot every section at 1440px + 375px
9. `npm run build` — clean build
10. Fahim reviews on phone

## Design Skill Usage
Frontend-design skill invoked before touching each section. No independent design decisions by Claude.

## Verification
- Hero matches TR split pattern (swapping stills left, text right, video card bottom-right)
- Hero stills cycle through event photos — NOT static, NOT video background
- Every photo is properly cropped with people clearly visible and focused
- Photo strip scrolls horizontally, cards bleed right edge, real photos with captions
- "Creative Labs Learning Center" everywhere — zero instances of "Creative Labs Center"
- Zero logos on the page (no SVG, no img, no logo references)
- Zero overlay patterns on any photos
- Clean build, no console errors
- Fahim reviews on phone via network URL

## DEVIATION RULES
Claude CANNOT:
- Add anything not in this plan
- Remove anything this plan says to keep
- Change the block choices (Hero 15, Services 7)
- Skip the photo quality check
- Add overlays to photos
- Add logos back
- Make layout decisions not specified here
- "Improve" or "polish" beyond what's listed per section

If blocked or uncertain → STOP and ask Fahim. Do not improvise.

---

## APPENDIX — Full Context for Next Session

### Project Files to Read First
1. `session-state.json` — project state (will be updated before next session)
2. `.claude/refine-context.json` — image paths, video paths, design constraints
3. `.new-site/brief.md` — brand brief (event details, copy, tone)
4. `.new-site/directions.json` — Direction 3 palette + fonts
5. `.claude/skills/frontend-design/SKILL.md` — design skill (invoke before each section)

### Correct Business Name
**"Creative Labs Learning Center"** — NOT "Creative Labs Center". The current build has the wrong name everywhere. Fix globally.

### Palette (Direction 3 — Noche de Fiesta)
- Primary (yellow): `#FFD024`
- Secondary (green): `#71AF47`
- Accent (hot pink): `#FF2D6B`
- Background: `#0E0E0E`
- Surface: `#1A1A1A`
- Text: `#FFFFFF`
- Muted: `#999999`

### Fonts
- Heading: `Raleway Variable` (weight 900 for display)
- Body: `Outfit Variable`

### Component Files (all in `src/components/direction-3/`)
- `Nav.astro`
- `Hero.astro` ← REBUILD with Hero 15
- `EventDetails.astro`
- `FreeTickets.astro`
- `FoodActivities.astro` (already Starwind Feature 15)
- `LocationParking.astro`
- `PartnerBanner.astro` (already Starwind CTA 06)
- `Footer.astro`
- **NEW:** `PhotoStrip.astro` ← create from Services 7

### Page File
`src/pages/direction-3-noche-de-fiesta.astro` — add PhotoStrip import after FoodActivities

### Assets Available in public/
**Images (public/images/):**
- `crowd_selfie_golden_hour.jpg` — golden hour selfie, people clearly visible
- `crowd_families_at_event.jpg` — families at the event
- `crowd_families.jpg` — crowd/families shot
- `crowd_selfie.jpg` — group selfie
- `rider_action_zoom.jpg` — bull rider in action, zoomed
- `rider_waving_zoom.jpg` — rider waving, zoomed
- `rider_smiling_zoom.jpg` — rider smiling, zoomed
- `rider_waving.jpg` — rider waving, wider shot
- `community_eating_together.jpg` — people eating Elote King food at tables
- `squad_with_food.jpg` — group with food, used in PartnerBanner
- `event_moment_01.jpg` — event moment
- `event_moment_02.jpg` — event moment
- `family_watching_bull.jpg` — family watching bull ride
- `family_picnic_day.jpg` — family picnic scene
- `taco-toast.png` — taco toast food shot
- `01_squad_clean.jpg` — squad photo cleaned up
- `02_tornado_viral.jpg` — viral bull ride moment
- `03_trunk_clean.jpg` — trunk shot cleaned up

**Also in src/assets/images/ (for Astro Image optimization):**
- `community_eating_together.jpg`
- `rider_action_zoom.jpg`
- `squad_with_food.jpg`

**Video:** `public/videos/hero-highlight.mp4` (18s loop — mount, ride, fall + kid riding)

**Logos (DO NOT USE — logos are banned from the page):**
- `public/logos/creative-labs-logo.png`
- `public/logos/eloteking-logo.png`
- `public/logos/elote-king-logo.png`

### Starwind Pro
- License key in `.env.local`
- Already installed: `feature-15`, `cta-06`, base components (`badge`, `button`, `card`, `image`)
- To install: `npx starwind@latest add @starwind-pro/hero-15`
- To install: `npx starwind@latest add @starwind-pro/services-07`
- Theme tokens mapped in `src/styles/theme.css`

### Dev Server
- Command: `npm run dev -- --port 4322 --host`
- URL: `http://localhost:4322/direction-3-noche-de-fiesta`
- Scroll reveal workaround: `document.querySelectorAll('.scroll-reveal').forEach(el => el.classList.add('revealed'));`
- launch.json uses `node node_modules/.bin/astro` (Windows fix)

### Tony Robbins Reference Pattern (what to match)
**Hero layout:** Split composition. Left ~60% = large visual area with SWAPPING STILLS (photos cycle through). Right = text block with headline, description, CTA. Bottom-right = small video preview card with play button.
**Photo strip:** Horizontal scrollable row of tall portrait-oriented photo cards. Each card has overlaid text at the bottom. Below each card, a quote or caption with attribution. Cards bleed off the right edge of the viewport — user scrolls horizontally to see more. Like Tony Robbins' "Date with Destiny / Business Mastery / Coaching" row.

### Event Copy (for hero/sections)
- Event: Spring Fiesta
- Date: Saturday, March 28
- Time: 7:00 PM – 11:00 PM
- Location: Creative Labs Learning Center, 6180 Atlanta Highway, Alpharetta, GA 30004
- What: Each enrolled student gets 2 free tickets → Popsicle OR Mechanical Bull Ride at Elote King
- Food: Elote King Atlanta (authentic street food, elote, loaded corn cups)
- Activities: Mechanical bull, popsicles, music, family fun
- Tagline: "One night. All the energy. All the flavor."
- Partner: Elote King Atlanta (collaboration)
