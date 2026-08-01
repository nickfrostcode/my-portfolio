<!-- @format -->

# Component Specs — Nicholas Benson Olúwafẹ́rànmi

_Detailed behavior and layout for individual UI components and page flows, desktop and mobile. Structure lives in README.md, visual language (color/type/icons/texture) lives in design.md — this file is where those get applied to specific components._

> **Status:** Skeleton — components to be defined one at a time.

---

## 1. Page Flows

### 1.1 Home / Dev / Design Flow

```
Hero
 ↓
About Preview        (2 short paragraphs + "Read More" → /about)
 ↓
Featured Projects    (no tabs — mode itself is the filter: dev projects shown on `/` and `/dev`,
                       design projects on `/design`; 5 shown, ends with one teaser card
                       linking to the other mode's projects → "View All Projects" → /projects)
 ↓
Featured Blog        (3 posts, reordered by mode → "Read More Articles" → /blog)
 ↓
Testimonials         (short quotes/recommendations)
 ↓
Resume Preview       (summary cards: Experience / Projects / Leadership / Certifications / Education
                       → "View Resume" → /resume)
 ↓
Contact              (form, email, LinkedIn, GitHub, socials)
```

### 1.2 About Page Flow

```
Hero
 ↓
Quick Stats   (small stat containers: e.g. Projects · Years of Experience · Certifications · Awards · Articles Written — a scannable summary for anyone who won't scroll further)
 ↓
Biography
 ↓
Journey       (horizontal scrollable timeline — accommodates a long history without pushing the page down)
 ↓
Skills        (grouped: Programming, Frontend, Backend, Design, Tools)
 ↓
Experience
 ↓
Leadership    (NACOSS VP, DevTools Weekly — framed as technical/organizational impact)
 ↓
Certifications (grid)
 ↓
Awards        (grid)
 ↓
Contact
```

**Awards** display as a card grid, same pattern as Certifications: Title, Issuing Body, Date, short description, and a link/image of the award if available.

### 1.3 Projects Page Flow

```
Search (title / technology / description)
 ↓
Quick Tabs (defaults to current mode — Developer or Designer — with All and the other mode
            still one click away; visiting `/projects` with no mode context defaults to All)
 ↓
Technology Filters (React, Next.js, TypeScript, Node, Supabase, Java, Python, Logo Design, Branding, Poster, UI …)
 ↓
Sort (Newest / Oldest / Featured / Popular)
 ↓
Project Grid
```

**Case study contents (`/projects/[slug]`):**

```
Overview → Gallery → Problem → Research → Solution → Features →
Technology Stack → Architecture → Challenges → Lessons Learned →
Future Improvements → Links (Live Demo / GitHub / Case Study) → Related Projects
```

### 1.4 Blog Flow

**List (`/blog`):** Featured → Categories (Software, Design, Leadership, Career, Computer Science, Research, Publications, Personal) → Search → Article list
**Post (`/blog/[slug]`):** Title → Hero Image → Content → Table of Contents → Related Articles → Share → Contact

### 1.5 Resume Page Flow

Human-readable CV, fully indexed, with a PDF download option.

```
Summary → Education → Experience → Projects → Leadership →
Skills → Certifications → Awards → Download PDF
```

---

## 2. Navigation Bar

**Reference:** capsule-shaped navbar, fused flush to the top of the page — no gap or floating margin. Shape: flat across the very top (attached to the viewport edge), flowing into a stylish concave incurve at the top corners, then down into a fully rounded border at the bottom two corners only.

### Desktop

```
   ┌─────────────────────────────────────────────────────────────┐
   │ [Logo] Nick Frost   About  Projects  Blog  Resume   [Mode][Theme] Contact │
   ╰─────────────────────────────────────────────────────────────╯
```

- **Shape:** flush/flat top edge fused to the viewport top, concave incurve at the top corners, fully rounded corners at the bottom only — no top margin, no floating gap
- **Fill:** flat, plain surface (design.md Section 2) — `neutral-800` with a `neutral-700` border in dark mode, `neutral-100` with a `neutral-200` border in light mode. No blur, no transparency, no drop shadow.
- **Left:** logo mark + "Nick Frost" — identity anchor, constant across all modes
- **Center-left:** primary nav links — About, Projects, Blog, Resume (Limit to ~6 nav items to maintain simplicity)
- **Right:** mode switch + theme toggle (compact icon controls), Contact as a Primary button (Section 11 — neutral fill, not accent), visually distinct from the nav links
- **Active state:** current route gets `accent` color text + a thin underline; hover on any nav item shifts to `accent` color only (no underline).
- **Sticky on scroll**, no shadow introduced on scroll — stays flat throughout

### Mobile

- **At rest:** logo mark + "Nick Frost", theme toggle, hamburger icon only — everything else lives in the drawer
- **On tap:** the navbar itself expands downward to reveal the menu contents — not a separate full-screen takeover component.
- **Background overlay:** the menu appears above a dimmed/faded overlay covering the page content beneath it.
- **Contents, top to bottom:** nav links stacked large → mode switch as a full-width segmented control → Contact as a full-width filled button pinned at the bottom
- **Close (X)** in the top-right, mirroring the reference
- **Touch targets:** minimum 44px tall per item

---

## 3. Hero

### Desktop

```
┌───────────────────────────────────────────────────────────┐
│  · · · · · · · · · · · · · (subtle grid background) · · · │
│  Nicholas Benson Olúwafẹ́rànmi        ┌─────────────────┐  │
│  [mode subtitle]                     │                 │  │
│  Nick Frost » @nickfrostcode         │   photo (B&W    │  │
│  [View Projects] [Download CV]       │   treatment)    │  │
│                                       └─────────────────┘  │
│  · · · · · · · · · · · · · · · · · · · · · · · · · · · · │
└───────────────────────────────────────────────────────────┘
```

- **Left column:** name (H1), mode-specific subtitle, identity element (static "Nick Frost » @nickfrostcode"), CTA buttons (View Projects, Download CV). Avoid duplicate CTAs competing above the fold. No autoplaying animations on the name, which breaks scannability.
- **Right column:** photo — black & white treatment, plain or softly blurred background in the shot itself.
- **Background:** full-bleed graph/grid-square pattern spanning the entire hero section edge to edge.

### Mobile

Stacking order, top to bottom, both blocks centered:

1. **Text block** — name, subtitle, identity element, CTA buttons (centered)
2. **Photo** — same black & white treatment, centered below the text
3. **Grid background** continues full-bleed behind both.

---

## 4. About Preview (Homepage)

### Desktop

```
                    About Me
                    (centered title, "Me" in accent)

┌─────────────────┐   ┌─────────────────────────────┐
│                 │   │ OVERVIEW                     │
│  photo          │   │ What I Do                    │
│  (black &       │   │ [1–2 sentence bio]            │
│  white)         │   └─────────────────────────────┘
│                 │   ┌─────────────────────────────┐
│                 │   │ CERTIFICATIONS                │
│  Nick Frost     │   │ [most recent cert, issuer]    │
└─────────────────┘   └─────────────────────────────┘
                       ┌─────────────────────────────┐
                       │ TECH STACK                    │
                       │ [grouped skill tags]          │
                       └─────────────────────────────┘
                       [ View More → /about ]
```

- **Title:** "About Me", centered, one word in `accent`.
- **Left column:** photo — black & white treatment.
- **Right column:** three stacked cards — Overview/bio, most recent Certification, Tech Stack summary. Left-aligned text internally.
- **View More button:** sits below the cards, links to `/about`.

### Mobile

Stacking order, top to bottom, centered: Title → Photo → Cards (full-width) → View More button (full-width).

---

## 5. Identity Element

- **Display:** "Nick Frost » @nickfrostcode" (or similar separator) — both shown together, no toggle, no click required.
- **Position:** directly beneath the H1 in the Hero, small text size, `neutral-500`.

---

## 6. Mode Switch (General / Developer / Designer)

**Behavior:** a small dropdown, not a segmented control with all three options always visible. Shows the current mode in the nav; tapping/clicking expands just that part downward.

- **On open:** the trigger's immediate area extends downward, revealing the other mode options.
- **Options:** General, Developer, Designer — selecting one navigates to the respective mode URL.
- **Mobile:** Lives inside the navbar's own expanded drawer.

---

## 7. Theme Toggle (Light/Dark/System)

**Behavior:** same local dropdown pattern as the Mode Switch.

- **Trigger:** icon representing the current theme (Lucide).
- **Options:** Light, Dark, System.
- **Mobile:** Lives inside the navbar's own expanded drawer.

---

## 8. Testimonials

### Desktop & Mobile

```
                    Client Reviews
              (centered title, "Reviews" in accent)
        Don't just take my word for it — subtitle line

→ ─────────────────────────────────────────────────────── →
  [card] [card] [card] [card] [card] [card] [card] [card]
→ ─────────────────────────────────────────────────────── →

← ─────────────────────────────────────────────────────── ←
  [card] [card] [card] [card] [card] [card] [card] [card]
← ─────────────────────────────────────────────────────── ←
```

- **Two rows**, each an infinite horizontal marquee, moving in **opposite directions**.
- **Cards:** plain flat surface + border, avatar circle, name, role, star rating in `accent`, quote text truncated to 1–2 lines.
- **Motion:** continuous, slow, linear scroll — pauses on hover/touch.

---

## 9. Project / Blog / Certification Cards & Grid

**Grid columns, responsive:** 4-column (large desktop) → 3-column (desktop) → 2-column (tablet) → 1-column (mobile). Generous gaps throughout (24–32px).
**Hover state:** title text shifts to `accent` color, preview image zooms in slightly (1.0 → 1.05). No shadow or lift.

**Shared card anatomy:**

```
┌───────────────────────┐
│      preview image    │
├───────────────────────┤
│ Title                 │
│ Short description     │
│ [tag] [tag] [tag]     │
│                       │
│ Link A       Link B   │
└───────────────────────┘
```

| Field       | Project                                | Blog                            | Certification       |
| ----------- | -------------------------------------- | ------------------------------- | ------------------- |
| Preview     | Thumbnail/screenshot                   | Cover image                     | Issuer badge/logo   |
| Title       | Project title                          | Post title                      | Certification name  |
| Description | Short summary                          | Excerpt                         | Issuer + short note |
| Tags        | Tech stack used                        | Category                        | Skills covered      |
| Link A      | View Case Study →`/projects/[slug]` | Read Article →`/blog/[slug]` | View Certificate    |
| Link B      | Live Demo                              | _none_                        | Verify Credential   |

---

## 10. Tabs & Filters

**Style:** plain text labels, no pill/button backgrounds. Hover shifts the label to `accent`/`accent-pressed` color. Active/selected tab combines `accent` color **and** a thin underline beneath it.

- **Used for:** Featured Projects mode-filter, `/projects` Quick Tabs.

---

## 11. Buttons

| Variant   | Fill                                                          | Use                                                |
| --------- | ------------------------------------------------------------- | -------------------------------------------------- |
| Primary   | Solid —`neutral-black` (light) or `neutral-white` (dark) | Main actions — Contact, Download CV, form submit  |
| Secondary | Outlined, neutral border/text, transparent fill               | Supporting actions — View More, View All Projects |
| Tertiary  | Outlined in`accent`, transparent fill                       | Used sparingly                                     |

**Hover:** reduced contrast on the button's own fill/border.
**Sizes:** small / default / large (32px / 40px / 48px height).

---

## 12. Forms (Contact)

**Layout:** two cards side by side on desktop (form 70%, socials 30%), stacking vertically on mobile. This is a persistent component, not a standalone `/contact` page.

### Form Card

Fields: Name + Email → Subject → Category + File attachment → Message → Send button. Left-aligned internally.

### Socials Card

Lists all social/contact links using Simple Icons — icon + label per row, neutral color with `accent-pressed` on hover.

---

## 13. Footer

### Desktop

```
┌──────────────────────────────────────────────────────────┐
│  Quick Summary        Routes            Social Handles    │
│  [short bio line]     Home              [icon] GitHub     │
│  [current status]     About             [icon] LinkedIn   │
│                        Projects          [icon] X          │
│                        Blog                                │
│                        Resume                               │
│                        Contact                               │
├──────────────────────────────────────────────────────────┤
│                                                            │
│                     NICHOLAS  (large, faded)               │
│                                                            │
└──────────────────────────────────────────────────────────┘
```

- **Middle column:** route list (Home, About, Projects, Blog, Resume, Contact).
- **Below columns:** "NICHOLAS" in large type, faded. Copyright/current status/last-updated sit near the faded name.

### Mobile

All three columns stack vertically (Quick Summary → Routes → Social Handles), followed by the faded "NICHOLAS" watermark.

---

## 14. Loading / Transition State

**Animation:** slow, continuous rotation of the circular logo. Fade-in before rotation, linear rotation, fade-out to a stop. If `prefers-reduced-motion` is on, skip rotation entirely — just fade.

---

## 15. 404 / Empty States

A normal page, no illustration, no signature-element animation.

```
                          404
              This page doesn't exist.

              Here's where you can go instead:

                    Home        About
                    Projects    Blog
                    Resume      Contact
```
