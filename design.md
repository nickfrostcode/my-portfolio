# Design System — Nicholas Benson Oluwaferanmi

*Visual design decisions for the portfolio. Structural/architectural decisions live in README.md — this file is UI only.*

> **Status:** Color system defined. Typography and layout to follow.

---

## 1. Color System

**Neutrals (shared across modes):**

| Token | Hex | Role |
|---|---|---|
| `neutral-white` | `#F0EDE9` | Light mode background, dark mode text |
| `neutral-black` | `#111111` | Dark mode background, light mode text |
| `neutral-100` | `#E5E2DE` | Light mode card fill (one step down from background — same step size as dark mode's card fill) |
| `neutral-800` | `#1C1C1C` | Dark mode card fill (one step up from background) |
| `neutral-150` | `#DBD8D4` | Light mode button/tag fill on cards (one step down from card — same step size as dark mode) |
| `neutral-750` | `#262626` | Dark mode button/tag fill on cards (one step up from card) |
| `neutral-200` | `#D3D0CC` | Light mode card border (one step down from button/tag fill — same step size as dark mode) |
| `neutral-700` | `#2E2E2E` | Dark mode card border (one step up from button/tag fill) |
| `neutral-500` | `#6E6E6E` | Secondary/muted text — works on both modes |

**Accent — Electric Cyan:**

| Token | Hex | Role |
|---|---|---|
| `accent` | `#00D4FF` | Primary accent — links, active states, icons (dark mode: safe as text; light mode: icons/fills only, not text) |
| `accent-hover` | `#33DDFF` | Hover state tint |
| `accent-pressed` | `#00A8CC` | Pressed/active state, and accent text on light backgrounds (contrast-safe substitute for raw `accent`) |
| `accent-tint` | `#E6FBFF` | Light background wash — selected-tab background, subtle highlight blocks |
| `accent-glow` | `rgba(0, 212, 255, 0.25)` | Soft glow/shadow, dark mode only |

**Usage discipline:**
- Accent is reserved for interactive/subtle moments only: links, active nav state, button fills, tab underlines, tag highlights.
- Never used for large surfaces, body text blocks, or more than one accent moment per screen section.
- On light backgrounds, use `accent-pressed` instead of raw `accent` for any accent text — raw `accent` fails contrast on white.
- Everything else (backgrounds, most text, cards, borders) stays strictly neutral, keeping the accent a deliberate signature rather than decoration.
- **Interactive text states (nav links, tabs, similar):** hover shifts text color to `accent`/`accent-pressed`, no underline yet. Active/selected state combines both — accent color **and** an underline. This two-step distinction (color-only on hover, color+underline when active) is what separates "you're pointing at this" from "this is the current selection."

**Theme default:** follows the visitor's system preference (`prefers-color-scheme`), with dark mode as the priority/fallback if no system preference is detected — a sensible default given cyan reads strongest on the near-black background anyway.

---

## 2. Surface & Card System

**Flat surfaces, everywhere.** No glass/blur panels, no floating/hover-lift depth, no grain or noise texture. Solid neutral colors with clean edges — this is what keeps the site reading as disciplined and formal rather than trend-chasing.

**Page background vs. cards — distinguished by shade + border, not texture.** The page background uses `neutral-white` (light mode) / `neutral-black` (dark mode). Cards (project, blog, certification, testimonial, form, etc.) use a step-different shade from the same neutral family — `neutral-100` in light mode, `neutral-800` in dark mode — paired with a thin, visible border (`neutral-200` light / `neutral-700` dark). The shade shift plus border is what separates a card from the page behind it — no overlay effects needed.

**Corner radius:** cards use the same slightly-rounded radius as buttons (components.md, Section 10) — not sharp corners, not heavily rounded. Keeps one consistent radius language across every bordered/filled element on the site instead of introducing a second scale.

No other depth or motion effects layered on top of this — plain color + border is the entire surface language for the whole site.

---

## 3. Hero Visual Treatment

**Layout: side-by-side, not text-over-photo.** Name/subtitle sit on a clean flat neutral surface beside the photo, rather than overlaid on top of it.

Why: text-over-photo needs a dark overlay/scrim to stay readable, which conflicts with the flat-surfaces decision (Section 2) and starts to read as a glass effect. It also pushes the tone toward "personal brand" landing page rather than "Computer Scientist" portfolio. Side-by-side keeps full contrast control over the name/subtitle with no overlay tricks, while the photo stays fixed in place beside it.

**Photo treatment:**
- Black & white (grayscale) — not full color, so the photo doesn't visually compete with the accent/neutral palette
- Shoulders-up or half-body, composed — not full-body, not casual
- Plain or softly blurred background in the shot itself — avoid generic "typing on laptop" stock-photo framing

---

## 4. Typography

Two typeface families, self-hosted locally via `next/font/local`.

| Role | Font | Weight/Usage |
|---|---|---|
| Headings (hero name, section titles, project titles) | General Sans | Semibold / Bold |
| Paragraphs, UI, buttons, nav, labels | General Sans | Regular / Medium |
| Tertiary — tags, tech stack, dates, metadata, code | JetBrains Mono | Regular |

One typeface (General Sans) carries both headings and body, differentiated by weight and size rather than a separate display face — kept in line with the system's overall discipline of fewer, deliberate choices rather than stacking more elements. JetBrains Mono is reserved for the "data layer" — anything tag-like, dated, or technical — which is also where the dev identity shows up structurally in the type system itself.

---

## 5. Icon System

**Library: React Icons**, split by role to create deliberate contrast between functional UI and brand/social elements.

| Role | Icon set | Style | Usage |
|---|---|---|---|
| Functional UI | Lucide (`lu`) | Stroke/outline | Nav, buttons, filters, arrows, mode switch, theme toggle — matches shadcn/ui, stays visually quiet |
| Social / brand links | Simple Icons (`si`) | Solid/fill | GitHub, LinkedIn, X, etc. — solid shapes read as recognizable brand marks; outlining them hurts recognizability |

**Fallback priority** (when an icon isn't available in the preferred set, check the next one down before reaching for something visually inconsistent):
1. Lucide (`lu`) — functional UI icons
2. Simple Icons (`si`) — brand/social icons
3. FontAwesome 6 (`fa6`) — solid fallback if a brand mark isn't in Simple Icons
4. Tabler (`tb`) — stroke fallback if something functional isn't in Lucide (closest stylistic match to Lucide, so it blends in rather than standing out)

**Color rule:** brand icons stay in the neutral/accent token system, not each platform's own brand color — `neutral-500` default, `accent-pressed` on hover — so social icons don't introduce a separate color scheme competing with the accent discipline set in Section 1. Simple Icons' default brand-color prop is overridden rather than used as-is.

---

## 6. Layout & Spacing

**Spacing scale:** 8pt-based (8, 16, 24, 32, 48, 64, 96, 128px), used consistently across all padding, margins, and gaps — Tailwind's default scale, no custom values invented.

**Section rhythm:** vertical spacing between major sections (Hero → About → Projects → Blog, etc.) is noticeably larger than spacing within a section — roughly 96–160px between sections vs. 24–48px within one. This is what makes the layout feel considered rather than cramped or templated.

**Content width:** max content width ~1200–1280px with real side padding — not full-bleed on large screens. Text blocks (About, blog, case studies) capped around 65–75 characters per line for readability.

**Alignment:** centered, on both desktop and mobile, for section titles and intros. Exceptions: card content (project/blog/certification card text stays left-aligned within the card) and the desktop Hero (split side-by-side per Section 3 — text block is left-aligned within its own column, since it's paired with the photo rather than standing alone). Mobile Hero, where text and photo stack, follows the centered default like other sections.

**Grids:** project/blog/certification cards run 4-column large desktop → 3-column desktop → 2-column tablet → 1-column mobile, with generous 24–32px gaps (not tight 8–12px) so bordered cards (Section 2) read as distinct objects rather than a dense wall. Full card anatomy and per-type field mapping defined in components.md, Section 8.

**Overall principle:** whitespace is the system's second signature, alongside the plain-color-plus-border card language — restraint carries through every decision in this system (one accent, one card treatment, two fonts, contrast-based icons), so layout should be the most disciplined part, not where density creeps back in.

---

## 7. Signature Element

**Personal logo icon** (existing, already designed) used consistently across two specific interaction moments:

1. **Loading/page transition animation** — the icon animates in (trace-in, fade/scale, or similar — implementation and coloring to be handled directly against the existing logo). Kept in line with the flat, disciplined motion language established elsewhere rather than a glossy/playful one.
2. **Primary button press micro-interaction** — a small particle burst of the icon shape emanates from the button on click. Reserved for primary/CTA buttons only (e.g. "View Projects," "Download CV," form submit) — not every button, filter, or nav link. Keeping it to a handful of meaningful actions is what keeps it a signature moment rather than noise, consistent with the restraint applied everywhere else in this system (one accent, one card treatment, two fonts). **Reduced motion:** if `prefers-reduced-motion` is on, skip the particle burst entirely — the button still responds (e.g. a simple press/depress state), just without the animated burst.

---

## 8. Anti-Patterns & Visual Constraints

To maintain the core identity of the portfolio, deliberately avoid:
- **Autoplaying animations:** Avoid autoplaying hero animations on the name or other critical text. It breaks scannability for recruiters.
- **Duplicate CTAs:** Avoid competing primary buttons above the fold. 
- **Overcrowded Navigation:** Do not exceed ~6 top-level navigation items.
- **Separate mode templates:** Do not build separate layouts for `/dev` vs `/design` — rely on data sorting and minor text changes within the same template.
