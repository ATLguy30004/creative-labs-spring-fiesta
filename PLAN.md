# PLAN: Elote King Mechanical Bull Popup — Hero Video Production Package

## WHAT WE'RE BUILDING

A scroll-stopping, $100M-agency-quality hero video for the Elote King Mechanical Bull Popup event using DaVinci Resolve's full feature set — Fusion for motion graphics, Color page for cinematic grading, speed ramps, AI features, and professional export.

### Deliverables
1. **60s Full Hero Video** (1080x1920, 9:16 vertical)
2. **15s Reels Cut** (1080x1920, 9:16 vertical)
3. **Static Thumbnail** from the bull rider fall moment

### Event Details (for title cards)
- **Event:** Elote King's Mechanical Bull Popup
- **Date:** Saturday, March 28 — 7 PM to 11 PM
- **Location:** 6180 Atlanta Highway, Alpharetta 30004
- **Brand:** Elote King Atlanta (100% Zabiha Halal | Muslim-Owned | Zero Alcohol)
- **Copy:** Written by Claude — bold, street-smart, punchy (per BRAND.md voice)
- **Audio:** Silent build — Fahim handles music/sound design separately

### THE BULL RIDE CHALLENGE (the sell-out hook)
- **12 seconds on the bull** → FREE Esquite
- **20 seconds on the bull** → FREE Entrée
- This is the conversion engine. Every title card, every CTA, every second of video pushes toward this challenge.

---

## STEP 0: CONNECT DAVINCI RESOLVE MCP TO CLAUDE CODE

**Problem:** MCP is installed (v0.1.1, Python 3.10) but only configured in Claude Desktop, not this project.

**Action:** Add DaVinci Resolve MCP to `.mcp.json` in this project folder.

```json
{
  "mcpServers": {
    "playwright": {
      "type": "stdio",
      "command": "npx",
      "args": ["@playwright/mcp@latest"]
    },
    "davinci-resolve": {
      "type": "stdio",
      "command": "C:\\Users\\dangr\\AppData\\Local\\Programs\\Python\\Python310\\Scripts\\davinci-resolve-mcp.exe",
      "args": [],
      "env": {
        "RESOLVE_SCRIPT_API": "C:\\ProgramData\\Blackmagic Design\\DaVinci Resolve\\Support\\Developer\\Scripting",
        "RESOLVE_SCRIPT_LIB": "C:\\Program Files\\Blackmagic Design\\DaVinci Resolve\\fusionscript.dll",
        "PYTHONPATH": "C:\\ProgramData\\Blackmagic Design\\DaVinci Resolve\\Support\\Developer\\Scripting\\Modules"
      }
    }
  }
}
```

After updating, restart Claude Code session so the MCP server connects to the running Resolve instance.

---

## STEP 1: SOURCE MEDIA INVENTORY & SHOT MAPPING

### Available Videos (7 clips)
| File | Size | Shot Assignment |
|------|------|----------------|
| `Bull rider faling short.mov` | 5 MB | **HERO SHOT** — The money shot. Bull ride + fall. Speed ramp this. |
| `Girls review 10 out of 10.mov` | 100 MB | **SOCIAL PROOF** — "10 out of 10" reaction. Key testimonial clip. |
| `Hispanic customer review.mp4` | 5.2 MB | **SOCIAL PROOF** — Customer reaction, authentic. |
| `Yaqoob pina colda review video.mov` | 122 MB | **SOCIAL PROOF** — Piña colada review, genuine reaction. |
| `Elote outdor cooking-non enchaned.mp4` | 64 MB | **FOOD PORN** — Outdoor cooking, sizzle shots. Slow-mo segments. |
| `event_food_vibes.mp4` | 3.8 MB | **ATMOSPHERE** — Event energy, food vibes B-roll. |
| `event3-food-reel.mp4` | 0.9 MB | **ATMOSPHERE** — Quick food reel B-roll. |

### Available Photos (27 images)
| File | Shot Assignment |
|------|----------------|
| `01_squad_clean.jpg` | Crew/squad shot — opening or closing |
| `02_tornado_viral.jpg` | Tornado potato hero — food product |
| `tornado_action.jpg` | Tornado potato action shot |
| `King MangoNada alone.jpg` | Mangonada product hero |
| `Tostilo clo + Mangonada.jpg` | Product combo shot |
| `Taco toast.png` | Taco toast product |
| `Camila Mango Nada TAsting-reaxtion.jpg` | Customer reaction photo |
| `Jennifer Mango Nado reaction.jpg` | Customer reaction photo |
| `Jennifer Mango nada reasction 2.jpg` | Customer reaction photo |
| `2 european girl review...` | Customer review photo |
| `IMG_1509.JPG` | Misc event photo |
| `rider_action_zoom.jpg` | Bull rider action — thumbnail candidate |
| `rider_smiling_zoom.jpg` | Bull rider smiling post-ride |
| `rider_waving.jpg` / `rider_waving_zoom.jpg` | Bull rider waving |
| `family_watching_bull.jpg` | Families watching — community vibe |
| `family_picnic_day.jpg` | Family picnic — community |
| `crowd_families.jpg` / `crowd_families_at_event.jpg` | Crowd shots |
| `crowd_selfie.jpg` / `crowd_selfie_golden_hour.jpg` | Golden hour selfies |
| `Crowd1.jpeg` | General crowd |
| `community_eating_together.jpg` | Community eating |
| `squad_with_food.jpg` | Squad with food |
| `trunk_crew.jpg` | Trunk crew |
| `event_moment_01.jpg` / `event_moment_02.jpg` | Event moments |

---

## STEP 2: CREATIVE DIRECTION — "100M AGENCY" TREATMENT

### The Edit Philosophy
This isn't a slideshow with transitions. This is a **rhythm-driven vertical video** that uses DaVinci Resolve's advanced features to create the feeling of being AT the event.

### DaVinci Resolve Features We'll Use

**Edit Page:**
- Speed ramps (0.25x slow-mo on bull fall, food sizzle)
- 2-3 frame flash cuts for energy
- Jump cuts synced to implied beat drops
- Vertical 9:16 timeline (1080x1920)

**Fusion Page (Motion Graphics):**
- Animated text overlays — Bebas Neue, brand green (#16a34a)
- Kinetic typography for "MECHANICAL BULL" title
- Lower-third event info cards with slide-in animation
- Animated trust badges (Halal | Muslim-Owned | Zero Alcohol)
- Particle burst on the bull fall moment
- Animated CTA card at the end

**Color Page:**
- Cinematic orange/teal grade across all clips (food pops warm, backgrounds cool)
- Lifted blacks for modern social media feel
- Boosted saturation on food close-ups
- Vignette on crowd/atmosphere shots
- Power Windows on key subjects

**AI/Neural Engine:**
- Magic Mask to isolate bull rider from background
- Speed Warp for smooth slow-motion (AI frame interpolation)

---

## STEP 3: EDIT STRUCTURE — 60s HERO VIDEO

### Shot-by-Shot Breakdown (60 seconds @ 30fps)

### ACT 1: THE HOOK — "Stop scrolling. You need to see this." (0:00–0:15)

| Time | Dur | Source | Treatment | On-Screen Text |
|------|-----|--------|-----------|----------------|
| 0:00-0:03 | 3s | `Bull rider faling short.mov` (MID-FALL frame) | Opens on the fall. 0.25x ultra slow-mo. Speed Warp AI. Desaturated grade, dramatic. | **"NOBODY LASTS 20 SECONDS."** (large, centered, Bebas Neue, white on dark) |
| 0:03-0:05 | 2s | `rider_action_zoom.jpg` | Flash cut. Hard zoom. High contrast. | **"DO YOU?"** (snaps in, bold) |
| 0:05-0:09 | 4s | `Bull rider faling short.mov` (ride START) | Rewind feel — now we see the RIDE. Normal speed building to fast. | **"12 SECONDS = FREE ESQUITE"** (animated count-up timer graphic) |
| 0:09-0:12 | 3s | `Bull rider faling short.mov` (ride continues) | Speed ramp — faster, wilder | **"20 SECONDS = FREE ENTRÉE"** (text SLAMS in, green highlight on FREE) |
| 0:12-0:15 | 3s | `Bull rider faling short.mov` (THE FALL) | 0.25x slow-mo replay + particle burst on impact | **"THIS SATURDAY. PROVE IT."** |

### ACT 2: THE FOOD — "Even if you fall, you eat like a king." (0:15–0:30)

| Time | Dur | Source | Treatment | On-Screen Text |
|------|-----|--------|-----------|----------------|
| 0:15-0:18 | 3s | `Elote outdor cooking...mp4` (sizzle close-up) | 0.5x slow-mo. Warm grade. Steam rising. | **"FALL OFF THE BULL."** |
| 0:18-0:20 | 2s | `02_tornado_viral.jpg` | Zoom burst reveal, vibrant saturation pop | **"LAND IN THE FOOD."** |
| 0:20-0:22 | 2s | `King MangoNada alone.jpg` | Slide-in, glow, product hero grade | **"MANGONADA"** |
| 0:22-0:24 | 2s | `Tostilo clo + Mangonada.jpg` | Quick cut, food pop grade | **"TORNADO POTATO"** |
| 0:24-0:26 | 2s | `Taco toast.png` | Flash cut, warm | **"BIRRIA TACOS"** |
| 0:26-0:28 | 2s | `Elote outdor cooking...mp4` (different segment) | 0.5x slow-mo, fire/grill focus | — |
| 0:28-0:30 | 2s | `event3-food-reel.mp4` | 1.25x speed, energy cut | **"THE WHOLE MENU. HALAL. EVERY ITEM."** |

### ACT 3: THE PROOF — "Don't take our word for it." (0:30–0:42)

| Time | Dur | Source | Treatment | On-Screen Text |
|------|-----|--------|-----------|----------------|
| 0:30-0:33 | 3s | `Girls review 10 out of 10.mov` (peak reaction) | Normal speed, natural warm grade | **"10 OUT OF 10"** (animated, pulsing, green) |
| 0:33-0:35 | 2s | `Hispanic customer review.mp4` (reaction) | Normal speed, authentic | — |
| 0:35-0:37 | 2s | `Camila Mango Nada TAsting-reaxtion.jpg` | Ken Burns, warm | — |
| 0:37-0:39 | 2s | `Jennifer Mango Nado reaction.jpg` | Quick flash, reaction face | **"EVERY. SINGLE. TIME."** |
| 0:39-0:42 | 3s | `crowd_families_at_event.jpg` + `family_watching_bull.jpg` | 1.5s each, Ken Burns pan, golden hour | **"BRING YOUR CREW"** |

### ACT 4: THE SELL — "You're going. Here's when." (0:42–1:00)

| Time | Dur | Source | Treatment | On-Screen Text |
|------|-----|--------|-----------|----------------|
| 0:42-0:44 | 2s | `community_eating_together.jpg` | Warm, soft grade | **"ALPHARETTA"** |
| 0:44-0:46 | 2s | `01_squad_clean.jpg` | Heroic grade, slow zoom | **"THIS SATURDAY NIGHT"** |
| 0:46-0:52 | 6s | **Fusion Title Card** | Animated card — green accent bar, info slides in line by line | **"SAT MARCH 28 — 7 TO 11 PM"** / **"6180 ATLANTA HWY, ALPHARETTA"** / **"MECHANICAL BULL • STREET FOOD • VIBES"** |
| 0:52-0:56 | 4s | **Fusion Challenge Card** | Black bg, green timer graphic, stakes animate in | **"RIDE THE BULL:"** / **"12 SEC → FREE ESQUITE"** / **"20 SEC → FREE ENTRÉE"** / **"0 SEC → YOU STILL EAT GOOD"** |
| 0:56-0:58 | 2s | **Fusion CTA Card** | Brand green bg (#16a34a), white text, slides up | **"PULL UP. EAT GOOD. PROVE SOMETHING."** |
| 0:58-1:00 | 2s | Logo on brand green | Fade in, trust badges below | **100% ZABIHA HALAL • MUSLIM-OWNED • ZERO ALCOHOL** |

### 15s Reels Cut — "The Challenge Ad" (extracted from the 60s)
This is the one that gets shared. Pure challenge energy.

| Time | Source from 60s | Why |
|------|----------------|-----|
| 0:00-0:03 | 0:00-0:03 (bull fall slow-mo) | **Hook** — "NOBODY LASTS 20 SECONDS" |
| 0:03-0:05 | 0:05-0:09 (ride + 12 sec text) | **Stakes** — "12 SEC = FREE ESQUITE" |
| 0:05-0:07 | 0:09-0:12 (ride + 20 sec text) | **Bigger stakes** — "20 SEC = FREE ENTRÉE" |
| 0:07-0:09 | 0:15-0:18 (food sizzle) | **Reward** — even if you fall, the food is crazy |
| 0:09-0:11 | 0:30-0:33 (10/10 reaction) | **Proof** — real people, real reactions |
| 0:11-0:15 | 0:52-0:56 (challenge card) | **CTA** — the stakes card with timer graphic |

### Static Thumbnail
- Source: `rider_action_zoom.jpg` OR frame grab from `Bull rider faling short.mov` at the fall peak
- Treatment: Cinematic grade, "MECHANICAL BULL POPUP" text overlay, event date, brand logo
- Export: 1080x1920 PNG

---

## STEP 4: TECHNICAL EXECUTION VIA DAVINCI RESOLVE MCP

Since most MCP tool methods are stubs, ALL work goes through `execute_davinci_resolve_script()` which gives us full access to Resolve's Python scripting API.

### Execution Sequence:
1. **Create output folder** `C:\Users\dangr\OneDrive\Desktop\Elote king_output\`
2. **Import all media** into Resolve Media Pool
3. **Create 9:16 timeline** (1080x1920, 30fps) named "EK_Hero_60s"
4. **Place clips** on timeline per shot breakdown above
5. **Apply speed changes** (ramps, slow-mo) via Resolve API
6. **Apply color grades** via Color page API
7. **Build Fusion titles** via Fusion composition API
8. **Add transitions** between clips
9. **Export 60s hero** as H.264 MP4
10. **Duplicate timeline**, trim to 15s for Reels cut, export
11. **Grab still frame** from bull fall moment, export as PNG thumbnail

### Key API calls we'll use:
- `project.GetMediaPool().ImportMedia()` — import files
- `mediaPool.AppendToTimeline()` — add clips
- `timeline.GetItemListInTrack()` — get clips for manipulation
- `clip.SetClipProperty()` — speed, in/out points
- `project.SetCurrentRenderFormatAndCodec()` — export settings
- `project.AddRenderJob()` + `project.StartRendering()` — render

---

## STEP 5: COPY — SELL-OUT ENERGY (per BRAND.md voice)

### The Psychology
The bull challenge is the conversion engine. Free food is the reward. FOMO is the fuel.
Every line either builds the dare or makes the food irresistible. No filler.

### All On-Screen Copy (in sequence):

**ACT 1 — THE DARE:**
1. "NOBODY LASTS 20 SECONDS."
2. "DO YOU?"
3. "12 SECONDS = FREE ESQUITE"
4. "20 SECONDS = FREE ENTRÉE"
5. "THIS SATURDAY. PROVE IT."

**ACT 2 — THE FOOD:**
6. "FALL OFF THE BULL."
7. "LAND IN THE FOOD."
8. "MANGONADA"
9. "TORNADO POTATO"
10. "BIRRIA TACOS"
11. "THE WHOLE MENU. HALAL. EVERY ITEM."

**ACT 3 — THE PROOF:**
12. "10 OUT OF 10"
13. "EVERY. SINGLE. TIME."
14. "BRING YOUR CREW"

**ACT 4 — THE CLOSE:**
15. "ALPHARETTA"
16. "THIS SATURDAY NIGHT"
17. "SAT MARCH 28 — 7 TO 11 PM"
18. "6180 ATLANTA HWY, ALPHARETTA"
19. "MECHANICAL BULL • STREET FOOD • VIBES"
20. "RIDE THE BULL:"
21. "12 SEC → FREE ESQUITE"
22. "20 SEC → FREE ENTRÉE"
23. "0 SEC → YOU STILL EAT GOOD"
24. "PULL UP. EAT GOOD. PROVE SOMETHING."
25. "100% ZABIHA HALAL • MUSLIM-OWNED • ZERO ALCOHOL"

### Caption Copy (for Instagram/TikTok post):
"Nobody lasts 20 seconds on the bull. Saturday we're proving it. 🐂

12 seconds = free esquite
20 seconds = free entrée
0 seconds = you still eat like a king

Mechanical Bull Popup
Sat March 28 | 7-11 PM
6180 Atlanta Hwy, Alpharetta

100% Zabiha Halal. Muslim-Owned. Zero Alcohol.
Bring your crew. Bring your ego. Leave full either way.

#EloteKing #MechanicalBull #AlpharettaEvents #HalalFood #AtlantaFood #StreetFood #FreeFood"

---

## BEFORE EXECUTION — FAHIM MUST ANSWER

1. **Audio:** Building silent. You add music in Resolve after. Correct?
2. **Logo file:** Where is `elote-king-logo-transparent.png`? Not in the media folder.
3. **Anything else on the challenge rules?** (e.g., age limit, waiver, one ride per person, etc.)
4. **Ready to proceed?** I'll update `.mcp.json`, you restart Claude Code, and I build it in Resolve.
