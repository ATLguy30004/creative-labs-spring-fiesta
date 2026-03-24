# Creative Labs Spring Fiesta Invite — Project CLAUDE.md

## SCOPE LOCK
This project is fully self-contained. Claude is NOT authorized to work outside this folder.
- No reading or writing to global `~/.claude/` skill folders
- No reading or writing to `_brands/` or any other project
- No syncing skills to global installs
- All skills, commands, and output live only in this folder

## PROJECT SKILLS (local only)
Skills are at `.claude/skills/` within this project:
- `new-site` — concept generation workflow
- `r2-image-upload-skill` — image upload to Cloudflare R2

## WORKFLOW (per Authority Page 1)
1. Run `/plugins` in Claude Code → install Frontend Design Plugin
2. Run `/new-site` in plan mode → interview → generate 4 concepts
3. Run `npm run dev` → review concepts in browser
4. Mix and match sections across concepts
5. Load `/frontend-design` before any design work
6. Run refinement pass using the prompt in Authority/Page 1.txt
7. Save refinement prompt as `.claude/commands/refine.md` for reuse via `/refine`

## REFERENCE FILES (Authority folder)
- `Authority/Page 1.txt` — core workflow
- `Authority/Design System.txt` — design system rules
- `Authority/SECTION 1 THE LANDSCAPE MATRIX.txt` — section planning
- `Authority/add pages.txt` — adding pages
- `Authority/content collections.txt` — content collections
- Other lesson files as needed

## STACK
Astro | Vanilla CSS | npm | Vercel (when deploying)

## RULES
- Read Authority files before building anything
- Follow the interview → concept → refine workflow exactly
- 4 concepts minimum before picking a direction
- Always load `/frontend-design` before design work
- Screenshot at 375px after every section

---

## SESSION STATE (updated 2026-03-24)
Read `session-state.json` in the project root. It has everything you need to resume.

**Where we are:** Direction 3 chosen. Refinement phase next.
**Dev server:** Run `npm run dev -- --port 4322 --host` then open http://localhost:4322
**Direction 3 URL:** http://localhost:4322/direction-3-noche-de-fiesta
**Known issue:** Sections use `.scroll-reveal` (opacity:0 by default). After loading, run this in Chrome DevTools console to reveal all sections for auditing:
```js
document.querySelectorAll('.scroll-reveal').forEach(el => el.classList.add('revealed'));
```
**Next task:** Run the full refinement audit prompt (see `session-state.json` → `next_task`)
