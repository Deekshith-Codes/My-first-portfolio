# Interactive AI Developer Portfolio

A modern, high-performance web application designed for a Computer Science & Engineering (AI/ML) student portfolio. Built with Next.js 16 (App Router), React 19, TypeScript, and Tailwind CSS v4, this application features scroll-driven animations, 3D card tilt physics, fine-grained micro-interactions, an interactive particle canvas, and a grounded AI chatbot powered by OpenRouter's free model tier.

For deeper technical architecture and engineering details, see [implementation.md](./implementation.md). For implementation phases, status tracking, and verification criteria, see [implementation_plan.md](./implementation_plan.md).

---

## 1. Project Overview

The primary goal of this application is to deliver a fast, responsive, and visually engaging developer portfolio with interactive features that maintain strict accessibility and performance standards:

- **Aesthetic Direction**: Dark interface utilizing deep charcoal tones (`#06090e`, `#0b111e`), refined cyan (`#38bdf8`) and indigo (`#818cf8`) accents, glassmorphic panels, and subtle radial gradient lighting.
- **Motion & Interaction**: Fluid viewport reveals, top-edge scroll progress tracking, cursor-driven 3D card tilt physics, and ambient particle networks with full `prefers-reduced-motion` compliance.
- **Server-Side AI Assistance**: An interactive conversational assistant answering visitor queries about portfolio content, backed by OpenRouter's free model tier and strictly grounded in local configuration data.
- **Engineering Quality**: Strict TypeScript types, static prerendering where applicable, zero layout shift (CLS), and modular component architecture.

---

## 2. Features

- **Dark Visual Theme**: Cohesive dark-mode palette configured in CSS variables and Tailwind utility layers with high-contrast text (`#f8fafc` on `#06090e`).
- **Scroll-Linked Progress Bar**: Top-edge gradient progress bar (`ScrollProgress.tsx`) utilizing `requestAnimationFrame` to track scroll progress smoothly without scroll-jacking.
- **Viewport Section Reveals**: Performant `IntersectionObserver` wrapper (`ScrollReveal.tsx`) animating entrance states with configurable directions, distances, and staggered delays.
- **Interactive 3D Tilt Cards**: Mouse-tracking perspective tilt container (`TiltCard.tsx`) with dynamic specular glare highlights, automatically disabled on touch devices and when reduced motion is preferred.
- **Interactive Particle Background**: 60fps HTML5 Canvas (`InteractiveCanvas.tsx`) simulating connected neural network nodes with mouse repulsion; automatically pauses when the browser tab is hidden to conserve GPU/CPU power.
- **Chronological Timeline**: Visual milestone spine in the education section with glowing connector nodes and specialized coursework pillars.
- **Skill Competency & Roadmap Switcher**: Tabbed competency interface distinguishing verified core skills from planned curriculum roadmap items.
- **Credential Verification Modal**: Dedicated certification showcase with an interactive status modal and developer linking instructions.
- **Validated Contact Dispatcher**: Contact form with client-side regex validation, clipboard copy feedback, and automatic prefilled `mailto:` client generation.
- **Personalized AI Portfolio Chatbot**: Floating assistant drawer with quick question suggestions, markdown rendering, chat clearing, retry mechanisms, and error reporting.
- **Fully Responsive**: Optimized fluid grid layouts supporting mobile (`<640px`), tablet (`640px–1023px`), and desktop (`>=1024px`) viewports without horizontal overflow.

---

## 3. Technology Stack

| Layer | Technology | Version | Purpose |
| :--- | :--- | :--- | :--- |
| **Framework** | Next.js (App Router) | `16.4.2` | Server/Client components, API routes, Turbopack engine |
| **UI Library** | React / React DOM | `19.3.0` | Component state, `useSyncExternalStore` media subscriptions |
| **Language** | TypeScript | `^5` | Strict static type checking and data schema validation |
| **Styling** | Tailwind CSS | `^4` | Utility styling, modern CSS engine (`@tailwindcss/turbopack`) |
| **Icons** | Lucide React | `^1.61.0` | Lightweight SVG icons for navigation and indicators |
| **Vector Assets** | Custom SVGs | Native | Embedded inline SVG icons for external platforms |
| **AI Provider** | OpenRouter API | v1 | OpenAI-compatible Chat Completions via server-side `fetch` |

---

## 4. Project Structure

```
.
├── .env.example               # Template for required environment variables
├── .gitignore                 # Git ignore rules (protects local env files)
├── implementation.md          # In-depth technical implementation reference
├── implementation_plan.md     # Development phases and verification record
├── next.config.ts             # Next.js configuration (Turbopack, cache components)
├── package.json               # Dependencies, scripts, and package metadata
├── package-lock.json          # Deterministic dependency lockfile
├── README.md                  # Main project documentation
├── tsconfig.json              # TypeScript strict configuration
├── public/                    # Static public assets
└── src/
    ├── app/
    │   ├── api/
    │   │   └── chat/
    │   │       └── route.ts   # Server-side OpenRouter chat completion handler
    │   ├── favicon.ico        # Fallback favicon
    │   ├── globals.css        # Tailwind imports, theme variables, glassmorphism
    │   ├── icon.svg           # High-resolution vector monogram favicon
    │   ├── layout.tsx         # Root layout, font definitions, and metadata
    │   └── page.tsx           # Main page orchestrator assembling all sections
    ├── components/
    │   ├── About.tsx          # Biography narrative and focus area cards
    │   ├── Certifications.tsx # Certification card and verification status modal
    │   ├── Contact.tsx        # Contact channel items and validated message form
    │   ├── Education.tsx      # Chronological academic timeline and coursework pillars
    │   ├── Footer.tsx         # Navigation links, social items, and copyright bar
    │   ├── Hero.tsx           # Dynamic headline, verified badges, 3D terminal card
    │   ├── InteractiveCanvas.tsx # 60fps neural network particle backdrop
    │   ├── Navbar.tsx         # Sticky navigation header with mobile drawer
    │   ├── PortfolioChatbot.tsx # Floating AI assistant modal with suggested prompts
    │   ├── Projects.tsx       # 3D tilt project cards and developer guide box
    │   ├── ScrollProgress.tsx # Top-edge scroll-linked progress indicator
    │   ├── ScrollReveal.tsx   # IntersectionObserver wrapper for staggered reveals
    │   ├── Skills.tsx         # Verified skills deep dive and roadmap switcher
    │   ├── TiltCard.tsx       # 3D perspective tilt container with dynamic glare
    │   └── icons/
    │       └── BrandIcons.tsx # Custom SVG brand icons
    └── data/
        └── portfolioData.ts   # Centralized data model and single source of truth
```

---

## 5. Getting Started

### Prerequisites
- **Node.js**: `v18.18.0` or higher (tested with `v20.x`, `v22.x`, and `v24.x`)
- **npm**: `v9.x` or higher (or equivalent package manager)

### Installation
1. Clone or extract the project repository into your workspace:
   ```bash
   cd My-first-portfolio-main
   ```
2. Install project dependencies:
   ```bash
   npm install
   ```

### Running Locally
To launch the development server with Turbopack and hot-reloading:
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your web browser.

To run the production bundle locally:
```bash
npm run build
npm run start -- -p 3000
```

---

## 6. Environment Variables

The application requires environment variables for server-side AI chatbot integration. A template file ([.env.example](./.env.example)) is provided at the repository root.

Create a `.env.local` file by copying the template:
```bash
cp .env.example .env.local
```

Configure the following variables in `.env.local`:

```env
# Required: OpenRouter API key for server-side chat completions
# Obtain a key at: https://openrouter.ai/settings/keys
OPENROUTER_API_KEY=your_openrouter_api_key_here

# Optional: Default is openrouter/free
# Must be 'openrouter/free' or a specific model ending with ':free'
OPENROUTER_MODEL=openrouter/free
```

> **Security Rule**: Never commit `.env.local` or any file containing real API keys to version control. The `.gitignore` file is configured to exclude `.env*` files while allowing `.env.example`.

---

## 7. AI Chatbot Architecture

The portfolio includes an integrated AI assistant designed to answer visitor questions accurately without inventing unverified claims.

```
┌─────────────────────────────────┐
│     Client Browser (User)       │
│  - Suggested Prompt Pills       │
│  - Controlled Markdown History  │
│  - Input Length Checks (<=600)  │
└────────────────┬────────────────┘
                 │ POST /api/chat { message, history }
                 ▼
┌─────────────────────────────────┐
│  Next.js Server API Route       │
│  (src/app/api/chat/route.ts)    │
│  1. In-Memory Rate Limiter      │
│  2. Payload Validation          │
│  3. System Prompt Grounding     │
│     (from portfolioData.ts)     │
│  4. Free-Model Verification     │
└────────────────┬────────────────┘
                 │ POST https://openrouter.ai/api/v1/chat/completions
                 │ Authorization: Bearer ${OPENROUTER_API_KEY}
                 ▼
┌─────────────────────────────────┐
│    OpenRouter API (Free Tier)   │
│  - Model: openrouter/free       │
│  - Strict Community Quotas      │
└─────────────────────────────────┘
```

### Key Technical Properties:
- **Ground Truth Grounding**: The system prompt is constructed directly from `src/data/portfolioData.ts`. The assistant is instructed to state clearly when requested information is not documented in the portfolio data.
- **Free-Only Model Guarantee**: The backend verifies that `OPENROUTER_MODEL` is either `openrouter/free` or ends with `:free`. Any non-free model identifier defaults to `openrouter/free` to avoid unexpected billing.
- **Abuse Prevention**: Client IP request throttling (20 requests per minute window) and payload character caps (maximum 600 characters per message).
- **Graceful Error Handling**: Specific HTTP handlers for rate limits (`429`), invalid credentials (`401`/`403`), and upstream model unavailability (`502`).
- **Free Model Limitations**: Free models on OpenRouter rely on shared community capacity. Availability and response latencies may fluctuate depending on upstream provider load.

---

## 8. Build and Testing

### Build Commands
- **Type Checking & Production Build**:
  ```bash
  npm run build
  ```
  *Actual verified result*: Compiles successfully with Turbopack, verifies TypeScript strict types, and generates static pages along with the dynamic `/api/chat` route.
- **Lint Audit**:
  ```bash
  npm run lint
  ```
  *Actual verified result*: 0 errors, 0 warnings across all source components.

### Automated Test Procedures
The application endpoints were validated using direct HTTP request suites:
1. **Missing Key Validation**: Returns HTTP 200 with setup instructions when `OPENROUTER_API_KEY` is not present.
2. **Empty Input Rejection**: Returns HTTP 400 (`Message cannot be empty.`) for whitespace-only submissions.
3. **Payload Length Validation**: Returns HTTP 400 (`Message exceeds maximum length of 600 characters.`) when input exceeds length caps.
4. **Malformed Payload Validation**: Returns HTTP 400 (`Invalid request payload.`) when required JSON fields are missing.

---

## 9. Deployment

The application is optimized for deployment on [Vercel](https://vercel.com/):

1. Push your repository to GitHub:
   ```bash
   git add .
   git commit -m "Configure portfolio for production"
   git push origin main
   ```
2. Import the repository into the Vercel dashboard.
3. In **Project Settings > Environment Variables**, add:
   - `OPENROUTER_API_KEY`: Your OpenRouter API key.
   - `OPENROUTER_MODEL`: `openrouter/free`
4. Deploy the project. Next.js will automatically configure static prerendering for the frontend pages and deploy `/api/chat` as a serverless function.

---

## 10. Customization

All portfolio content is decoupled from UI presentation and managed centrally in [src/data/portfolioData.ts](./src/data/portfolioData.ts):

- **Profile & Headline**: Edit `PORTFOLIO_DATA.personal` to update the name, headline, location, email, and social links.
- **Education & Timeline**: Update `PORTFOLIO_DATA.education` to modify institutions, degrees, dates, and curriculum highlights.
- **Skills & Stack**: Edit `PORTFOLIO_DATA.skills.verified` for confirmed competencies and `PORTFOLIO_DATA.skills.roadmap` for upcoming skills.
- **Projects**: Modify `PORTFOLIO_DATA.projects` to add real GitHub repository links (`githubUrl`), live demonstration URLs (`liveUrl`), and technology tags.
- **Certificates**: Edit `PORTFOLIO_DATA.certifications` to add issued credentials, verification URLs, or links to assets placed in `public/certificates/`.

Updating `portfolioData.ts` automatically updates both the visual website sections and the AI chatbot's system grounding prompt.

---

## 11. Troubleshooting

| Issue | Cause | Solution |
| :--- | :--- | :--- |
| **Chatbot displays setup notice** | `OPENROUTER_API_KEY` is not set in `.env.local` or Vercel. | Add `OPENROUTER_API_KEY=your_key` to `.env.local` and restart the dev server. |
| **HTTP 429 in Chatbot** | OpenRouter free model community rate limit reached. | Wait a few moments before sending another prompt; free tier models share capacity across users. |
| **`npm.ps1 cannot be loaded` (Windows)** | Windows PowerShell script execution policy restriction. | Run commands through `cmd.exe /c npm run dev` or adjust the execution policy. |
| **Model temporarily unavailable (502)** | Upstream free provider is undergoing maintenance. | Set `OPENROUTER_MODEL=openrouter/free` to allow OpenRouter to route automatically to an available free provider. |
| **Build fails on date evaluated during prerender** | Unstable `new Date()` called during client component initial state. | Keep initial client timestamps deterministic and evaluate dates only inside event handlers or `useEffect`. |

---

## 12. License

No open-source license has been specified for this repository. All rights are reserved by the original project owner unless otherwise declared.
