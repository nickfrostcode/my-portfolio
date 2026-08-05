<!-- @format -->

# Portfolio — Nicholas Benson

A visually stunning, dynamic, and data-driven personal portfolio designed to present one versatile professional through two distinct lenses: **Software Engineering** and **Visual Design**.

Built with an innovative **"Mode System"**, this portfolio adapts its content, themes, and messaging based on the visitor's chosen context (`general`, `dev`, or `design`) without duplicating the site structure.

---

## ✨ Key Features

- **The Mode System**: Visitors can experience the portfolio tailored to their specific interests:
  - `/` (General) — A comprehensive view of both technical and design accomplishments.
  - `/dev` (Software Engineering) — Prioritizes code, architecture, backend systems, and technical leadership.
  - `/design` (Visual Design) — Showcases UI/UX, brand identity, accessibility, and pixel-perfect design work.
- **Dynamic Content**: Data is dynamically filtered and reordered based on the active mode (e.g., the Resume page toggles between Software Developer and Visual Designer layouts instantly).
- **Responsive & Modern UI**: Features smooth micro-interactions, clean typography, dark/light theme support, and a highly polished UI.
- **Robust Page Architecture**: Features dedicated pages for `Projects`, `Blog`, `Resume`, and `About`, all deeply integrated with the Mode System.

## 🛠 Tech Stack

- **Framework**: [Next.js (App Router)](https://nextjs.org/) for routing and Server-Side Rendering
- **Language**: [TypeScript](https://www.typescriptlang.org/) for strict type safety
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) + [shadcn/ui](https://ui.shadcn.com/) for beautiful, accessible UI components
- **Icons**: React Icons (Lucide & FontAwesome)
- **State Management**: React Context API (for global Mode persistence)

## 📖 Documentation Index

The architecture and design specifications have been separated into dedicated documents to maintain clarity. You can find them in the `project-details/` directory:

1. **[Architecture &amp; Data Schema](project-details/architecture.md)** — Explains the Mode System, routing logic, SEO strategy, and TypeScript data models.
2. **[Component Specifications](project-details/components.md)** — Detailed layouts and flows for pages (Home, About, Projects) and shared components.
3. **[Design System](project-details/design.md)** — Visual rules including color tokens, typography, surface logic, and anti-patterns.

## 🚀 Quick Start (Local Development)

To run this portfolio locally:

1. **Clone the repository:**

   ```bash
   git clone <repository-url>
   cd my-portfolio
   ```
2. **Install dependencies:**

   ```bash
   pnpm install
   # or npm install / yarn install
   ```
3. **Run the development server:**

   ```bash
   pnpm run dev
   ```
4. **Explore the site:**
   Open your browser and visit:

   - General view: [http://localhost:3000](http://localhost:3000)
   - Developer view: [http://localhost:3000/dev](http://localhost:3000/dev)
   - Designer view: [http://localhost:3000/design](http://localhost:3000/design)

---

## 📄 License

MIT License. See `LICENSE` for more information.
