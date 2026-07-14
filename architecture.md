# Architecture — Nicholas Benson Oluwaferanmi

*This document outlines the underlying data structure, routing system, and technical architecture of the portfolio.*

---

## 1. Site Map

```
/                     General entry point (scrollable landing page)
/dev                  Developer-focused entry point (scrollable landing page)
/design               Designer-focused entry point (scrollable landing page)

/about                Full story: bio, skills, experience, leadership, certifications, timeline
/projects             Filterable project grid (All / Developer / Designer)
/projects/[slug]      Project case study (full page)
/blog                 Blog list
/blog/[slug]          Blog post (full reading page)
/resume               Human-readable CV + PDF download

404                   Error page (not counted as primary content)
```

**Mode persists across navigation.** Every page above is also reachable prefixed with the current mode — e.g. `/dev/about`, `/dev/projects`, `/dev/projects/[slug]`, `/design/blog`, `/design/resume`. Same page component and content either way; the prefix just carries the mode forward so someone browsing from `/dev` still sees themselves in "developer view" once they navigate to About, Projects, Blog, or Resume — instead of the mode silently resetting to general the moment they leave the landing page. Landing on a bare `/about` (no prefix) simply means general context.

**Implementation note:** in Next.js this is naturally built with a route group like `/[[...mode]]/about` (optional catch-all), where the mode segment is parsed once and passed down as context — so the About/Projects/Blog/Resume components aren't duplicated three times, just reading the prefix.

**5 primary content destinations:** About, Projects, Blog, Resume, and the Home/Dev/Design landing pages (one shared template, three data views).

---

## 2. Mode System

`/`, `/dev`, and `/design` are **the same page template** with different data prioritization — not three separate sites.

| | `/` | `/dev` | `/design` |
|---|---|---|---|
| Hero subtitle | "I build digital experiences through software engineering and visual design." | "Building scalable software and modern web applications." | "Designing visual identities and intuitive digital experiences." |
| Featured projects | Dev projects shown (general defaults to dev-first) | Dev projects shown | Design projects shown |
| Featured blog order | Balanced | Dev articles first | Design articles first |
| Page title / meta description | General | Dev-specific | Design-specific |
| About, Resume, Contact | Identical | Identical | Identical |

This is what lets you send:
- `yourdomain.com/` for general opportunities
- `yourdomain.com/dev` for software roles
- `yourdomain.com/design` for design roles

— all pointing at the same underlying content, reordered per audience.

### 2.1 Making Each Mode Aware of the Other

Since the mode filters rather than removes content, someone landing on a single mode shouldn't come away thinking that's *all* you do. A few lightweight, deliberately small signals — not equal billing, just visibility:

- **Hero gets a quiet second line.** Below the main subtitle, a smaller caption surfaces the other side:
  - `/dev`: main line stays dev-focused → small line beneath: "Also working across visual design and branding."
  - `/design`: mirrors this in reverse.
  - Kept visually secondary so the primary pitch for that mode still dominates.
- **One teaser card closes out Featured Projects.** After the mode's own projects, a single card reads "Also explore my design work →" (linking to `/design`) on `/dev`, and the reverse on `/design`. This is the one spot where the other mode gets an explicit, clickable mention.
- **The view switch in the nav is always visible** — a constant, low-effort reminder that other views exist, regardless of which one someone landed on.
- **The About page is the full picture**, identical across all three modes, explicitly listing Computer Scientist / Software Engineer / Visual Designer. The "Read More" link from About Preview should stay visually clear on every mode, since this is where the complete story lives.

---

## 3. Navigation Behavior (Routing)

Behavior changes based on *where the user currently is*:

- **On `/`, `/dev`, or `/design`:** nav links are in-page anchors (`#about`, `#projects`, `#blog`, `#resume`, `#contact`) — clicking scrolls, doesn't navigate away. Matches the "landing page pitch" feel of these routes.
- **On every other page** (`/about`, `/projects`, `/blog`, `/resume`, or their `/dev`/`/design`-prefixed equivalents): nav links go to real routes, staying within the current mode prefix (e.g. from `/dev/projects`, clicking About goes to `/dev/about`, not `/about`). Contact instead scrolls to the footer contact block on that page.

This keeps navigation predictable: fast scroll where the page is a pitch, real navigation where the page is a destination.

### 3.1 Light/Dark Mode
The theme toggle covers UI appearance only — no content changes. Language is left to the browser/OS for now (visitors can use built-in browser translation if needed).

---

## 4. Data Schema (draft)

Everything is data-driven off shared collections — the mode system and tab filters just query/reorder these.

```ts
// Project
{
  slug: string,
  title: string,
  summary: string,
  categories: ("dev" | "design")[],       // can be both
  featuredOn: ("home" | "dev" | "design")[],
  technologies: string[],                  // e.g. ["React", "Next.js"]
  tags: string[],                          // e.g. ["Branding", "UI"]
  year: number,
  thumbnail: string,
  gallery: string[],
  problem: string,
  solution: string,
  challenges: string,
  lessonsLearned: string,
  links: { demo?: string, github?: string },
  featured: boolean
}

// Blog Post
{
  slug: string,
  title: string,
  category: "software" | "design" | "leadership" | "career" | "cs" | "research" | "personal",
  featuredOn: ("home" | "dev" | "design")[],
  readingTime: number,
  publishedAt: string,
  heroImage: string,
  content: string // MDX
}

// Testimonial
{
  id: string,
  name: string,
  role: string,
  avatar?: string,        // optional — falls back to an initial if not provided
  rating: number,          // 1–5
  quote: string,
  featuredOn: ("home" | "dev" | "design")[]
}
```

---

## 5. SEO Checklist (per page)

- Unique title + meta description
- Open Graph image + Twitter Card
- Canonical URL
- JSON-LD structured data
- Every project and blog post gets its own metadata

---

## 6. Future Expansion (no redesign required)

Open Source · Speaking & Workshops · Uses (hardware/software) · Now page · Reading List · Media Mentions · Language switch / content localization

*(Research & Publications live under Blog, Awards under About, and Testimonials under Home)*
