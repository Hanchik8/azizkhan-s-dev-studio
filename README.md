# 🚀 Azizkhan's Dev Studio

[![CI](https://github.com/Hanchik8/azizkhan-s-dev-studio/actions/workflows/ci.yml/badge.svg)](https://github.com/Hanchik8/azizkhan-s-dev-studio/actions/workflows/ci.yml)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8-blue?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-18.3-61DAFB?logo=react&logoColor=white)](https://reactjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-5.4-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](./LICENSE)

> Personal developer portfolio showcasing my projects, skills, and experience as a Full-Stack Developer.

**🌐 Live Demo:** [azizkhan.dev](https://azizkhan.dev)

## ✨ Features

- 🎨 **Modern Design** — Clean, terminal-inspired aesthetic with smooth animations
- 🌓 **Dark/Light Theme** — Toggle between themes with persistent preference
- 📱 **Fully Responsive** — Optimized for all screen sizes
- ⚡ **Fast Performance** — Built with Vite for lightning-fast load times
- ♿ **Accessible** — WCAG-compliant with semantic HTML and ARIA labels
- 🔍 **SEO Optimized** — Meta tags, Open Graph, and JSON-LD structured data

## 🛠️ Tech Stack

| Category | Technologies |
|----------|-------------|
| **Frontend** | React 18, TypeScript 5.8, Tailwind CSS 3.4 |
| **Build Tool** | Vite 5.4 with SWC |
| **UI Components** | shadcn/ui, Radix UI Primitives |
| **Form Handling** | React Hook Form, Zod validation |
| **Icons** | Lucide React |
| **Testing** | Vitest, React Testing Library |
| **Code Quality** | ESLint, Prettier, EditorConfig |
| **CI/CD** | GitHub Actions |

## 📁 Project Structure

```
src/
├── components/       # React components
│   ├── ui/          # shadcn/ui primitives
│   ├── Navigation.tsx
│   ├── Hero.tsx
│   ├── Services.tsx
│   ├── Projects.tsx
│   ├── Skills.tsx
│   ├── About.tsx
│   ├── Contact.tsx
│   ├── Terminal.tsx
│   └── Footer.tsx
├── content/          # Static content & config
│   ├── siteConfig.ts
│   ├── projects.ts
│   └── services.ts
├── hooks/            # Custom React hooks
├── lib/              # Utility functions
├── pages/            # Page components
└── test/             # Test files
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18.x or higher
- bun, npm, yarn, or pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/AzizKhanC/azizkhan-s-dev-studio.git
cd azizkhan-s-dev-studio

# Install dependencies
bun install
# or: npm install

# Start development server
bun dev
# or: npm run dev
```

The app will be available at `http://localhost:8080`

## 📜 Available Scripts

| Script | Description |
|--------|-------------|
| `bun dev` | Start development server on port 8080 |
| `bun build` | Build for production |
| `bun preview` | Preview production build |
| `bun test` | Run tests with Vitest |
| `bun test:coverage` | Run tests with coverage report |
| `bun lint` | Run ESLint |
| `bun lint:fix` | Fix ESLint issues |
| `bun format` | Format code with Prettier |
| `bun format:check` | Check code formatting |
| `bun typecheck` | Run TypeScript type checking |

## 🧪 Testing

```bash
# Run all tests
bun test

# Run tests in watch mode
bun test -- --watch

# Generate coverage report
bun test:coverage
```

## 🚢 Deployment

The site is deployed automatically on push to `main` branch. For manual deployment:

```bash
# Build for production
bun build

# The dist/ folder contains the static files
# Deploy to any static hosting service
```

### Deployment Platforms

Works with any static hosting:
- Vercel (recommended)
- Netlify
- GitHub Pages
- Cloudflare Pages

## 📝 Configuration

### Site Config

Edit `src/content/siteConfig.ts` to update:
- Personal information
- Social links
- Contact details
- Status/availability

### Projects

Add or modify projects in `src/content/projects.ts`

### Services

Update services in `src/content/services.ts`

## 📄 License

This project is licensed under the MIT License — see the [LICENSE](./LICENSE) file for details.

## 👤 Author

**Azizkhan Nurlanov**

- Website: [azizkhan.dev](https://azizkhan.dev)
- GitHub: [@Hanchik8](https://github.com/Hanchik8)
- LinkedIn: [azizkhan-nurlanov-382135345](https://www.linkedin.com/in/azizkhan-nurlanov-382135345/)
- Telegram: [@Hanchik_8](https://t.me/Hanchik_8)

---

<p align="center">
  Built with ❤️ and ☕ in Bishkek, Kyrgyzstan
</p>
