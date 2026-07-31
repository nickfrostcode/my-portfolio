<!-- @format -->

# Portfolio — Nicholas Benson Olúwafẹ́rànmi

_A single, data-driven personal website presenting one Computer Scientist through two lenses — Software Engineering and Visual Design — with three audience-tuned entry points._

This repository contains the source code for the portfolio, built with a unique "mode system" that re-prioritizes content based on the visitor's context without duplicating the site.

---

## 📖 Documentation Index

The project architecture and design specifications have been separated into dedicated documents to maintain clarity:

1. **[Architecture & Data Schema](architecture.md)** — Explains the Mode System, routing logic, SEO strategy, and TypeScript data models.
2. **[Component Specifications](components.md)** — Detailed layouts and flows for pages (Home, About, Projects) and shared components (Navbar, Hero, Footer, etc.).
3. **[Design System](design.md)** — Visual rules including color tokens, typography, surface logic, and anti-patterns.

---

## 🛠 Tech Stack

- **Next.js (App Router)** — Routing and Server-Side Rendering
- **TypeScript** — Type safety
- **Tailwind CSS + shadcn/ui** — Styling and accessible UI primitives
- **Motion** — Used sparingly for subtle transitions only
- **MDX** — Blog content authoring
- **Supabase/PostgreSQL** (or static JSON initially) — Projects, certifications, and structured data

---

## 🚀 Quick Start (Local Development)

_(Instructions to be expanded once project initialization is complete)_

1. **Clone the repository:**

   ```bash
   git clone <repository-url>
   cd my-portfolio
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

   _(or `yarn install` / `pnpm install` depending on preference)_

3. **Set up environment variables:**
   - Copy `.env.example` to `.env.local`
   - Fill in the required API keys (e.g., Supabase connection strings, analytics IDs)

4. **Run the development server:**

   ```bash
   npm run dev
   ```

5. **Open the site:**
   Visit [http://localhost:3000](http://localhost:3000) in your browser.
   - For developer view, visit: [http://localhost:3000/dev](http://localhost:3000/dev)
   - For designer view, visit: [http://localhost:3000/design](http://localhost:3000/design)

---

## 📄 License

_(Add License Information Here)_
