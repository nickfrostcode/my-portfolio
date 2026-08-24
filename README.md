<!-- @format -->

# ❄️ Nicholas Benson — Personal Portfolio

A modern, high-performance, and data-driven dual-mode personal portfolio showcasing two distinct career disciplines: **Software Engineering** and **Visual & Brand Design**.

Built with Next.js 16 (App Router + Turbopack), React 19, Tailwind CSS v4, and Motion, this portfolio features a dynamic **Mode System** that adapts layout, imagery, typography, and content without code duplication or heavy payload transfers.

---

## ✨ Features & Highlights

- **Dual-Mode System (`dev` & `design`)**:
  - **Developer Mode (`/`)**: Focuses on full-stack web applications, APIs, architecture, databases, technical leadership, and engineering credentials.
  - **Designer Mode (`/design`)**: Focuses on brand identity, typography, visual direction, packaging, and design works with a masonry showcase.
  - **Subdomain & Path Support**: Includes proxy middleware to seamlessly handle subdomains (`design.domain.com`) or subpaths (`/design`).
- **Interactive 3D Testimonials Carousel**:
  - Embla Carousel with continuous infinite looping, touch/mouse drag navigation, smooth 3D scale/blur transitions, and autoplay.
- **Dynamic Works & Project Gallery**:
  - Real-time client-side search, tag filtering across tools and categories, and date-based sorting.
- **Interactive Credentials & Experience Timeline**:
  - Scroll-synced interactive timeline and categorized credentials grid with live category filters.
- **Secure Serverless Contact Form**:
  - Next.js Server Route (`/api/contact`) with bot honeypot protection, sliding-window IP rate limiting, file MIME-type and extension validation, and server-side Google Apps Script webhook integration.
- **Accessibility & Design**:
  - Full WCAG AA compliant contrast ratios in both Dark and Light modes.
  - Custom grain overlay and sleek glassmorphic surfaces.

---

## 🛠️ Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router, Turbopack)
- **UI Library**: [React 19](https://react.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations**: [Motion](https://motion.dev/) (formerly Framer Motion)
- **Icons**: [React Icons](https://react-icons.github.io/react-icons/) (Lucide & FontAwesome)
- **Themes**: [next-themes](https://github.com/pacocoursey/next-themes) (Light / Dark mode persistence)
- **Package Manager**: [pnpm](https://pnpm.io/)

---

## 🚀 Getting Started

### 1. Prerequisites
- **Node.js** >= 20.0.0
- **pnpm** >= 9.0.0 (recommended)

### 2. Clone and Install
```bash
git clone https://github.com/nickfrostcode/my-portfolio.git
cd my-portfolio
pnpm install
```

### 3. Environment Variables
Copy the example environment file:
```bash
cp .env.example .env
```
Fill in your Google Apps Script webhook URL if you wish to enable the contact form submission forwarder:
```env
GOOGLE_SCRIPT_URL=https://script.google.com/macros/s/your-deployment-id/exec
```

### 4. Run Development Server
```bash
pnpm dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

- **Developer Portfolio**: `http://localhost:3000/`
- **Design Portfolio**: `http://localhost:3000/design`

### 5. Build for Production
```bash
pnpm build
pnpm start
```

---

## 📁 Project Structure

```text
├── app/
│   ├── (dev routes)/       # Developer pages (/, /about, /projects, /resume, /blog)
│   ├── design/             # Designer pages (/design, /design/about, /design/works, /design/resume)
│   ├── api/contact/        # Hardened contact form API route
│   ├── globals.css         # Tailwind v4 theme tokens & custom CSS
│   └── layout.tsx          # Root HTML layout, font setup, and providers
├── components/
│   ├── about/              # Biography, skills, stats, credentials components
│   ├── design/             # Design-specific showcases and cards
│   ├── home/               # Hero, preview sections, testimonials carousel
│   ├── projects/           # Developer project galleries & cards
│   └── shared/             # Navbar, footer, contact form, mode links
├── context/
│   └── ModeContext.tsx     # Mode state provider & URL syncer
├── lib/
│   ├── data/               # Modular static data (projects, works, credentials, etc.)
│   ├── data.ts             # Central data re-export
│   └── logic.ts            # Sorting, mode filtering, and URL helpers
└── public/                 # Static assets, resume PDFs, icons, and grain textures
```

---

## 📄 License & Usage Terms

This project is open-sourced under the **MIT License with Personal Identity, Data & Media Reservation**.

- **Source Code**: You are free to use, study, fork, and adapt the software architecture, components, and layout code for your own portfolio.
- **Personal Data & Assets (Strictly Excluded)**: 
  - All files and media in `/public/` (resume PDFs, screenshots, project graphics).
  - All images and brand graphics in `/app/assets/` (avatar photos, brand logos, custom visuals).
  - All data files in `/lib/data/` (work experience history, testimonials, credentials, education, and bio).
  - Personal identity and likeness ("Nicholas Benson", "Nick Frost").

> **Note**: If you fork or clone this repository to build your own portfolio, you must replace all data in `lib/data/`, media in `public/` and `app/assets/`, and personal branding with your own prior to deployment.

See the full [LICENSE](file:///c:/Code/my-portfolio/LICENSE) file for complete terms.
