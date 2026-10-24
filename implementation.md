# Technical Implementation Reference: Interactive AI Developer Portfolio

This document provides a technical reference for the architecture, component hierarchy, design system, animation physics, security protocols, and backend API integration of the Interactive AI Developer Portfolio web application.

For general project onboarding and setup instructions, see [README.md](./README.md). For implementation phases, status tracking, and verification criteria, see [implementation_plan.md](./implementation_plan.md).

---

## 1. Project Objectives and System Architecture

The application is architectured as a single-page interactive developer showcase with server-side API extensions, built using the Next.js App Router framework.

```
┌─────────────────────────────────────────────────────────────────┐
│                       Next.js App Router                        │
├────────────────────────────────┬────────────────────────────────┤
│       Frontend (Client/SSR)    │      Serverless API Route      │
│  - App Layout & Page           │  - /api/chat (POST)            │
│  - Interactive Components      │  - Grounding Prompt Generator  │
│  - Canvas Particle Engine      │  - Free Model Verification     │
│  - 3D Tilt & Viewport Observers│  - In-Memory Rate Limiter      │
├────────────────────────────────┴────────────────────────────────┤
│                   Data Layer: portfolioData.ts                  │
│       (Single Source of Truth for Visuals & AI Grounding)       │
└─────────────────────────────────────────────────────────────────┘
```

### Core Architecture Principles:
1. **Decoupled Configuration**: All content displayed on the website—including profile metadata, education timelines, skill categories, projects, certifications, and navigation links—is defined in `src/data/portfolioData.ts`. This data acts as the single source of truth for both UI components and the AI assistant's system grounding prompt.
2. **Minimal Runtime Overhead**: Lightweight native Web APIs (`IntersectionObserver`, `HTML5 Canvas 2D Context`, `requestAnimationFrame`, and `useSyncExternalStore`) are prioritized over heavy external animation bundles.
3. **Resilient AI Integration**: Serverless chat route with strict input validation, rate limiting, and defensive model enforcement ensuring only free-tier models are dispatched.

---

## 2. Component Responsibilities and Data Flow

### 2.1 Component Hierarchy
- **`src/app/layout.tsx`**: Root shell providing font variables (`Geist Sans`, `Geist Mono`), SEO metadata, OpenGraph tags, theme color definitions, and dark mode configuration.
- **`src/app/page.tsx`**: Root page assembler orchestrating the main sections, background layers, and fixed floating widgets:
  - `<ScrollProgress />`: Top-edge scroll-linked progress indicator.
  - `<InteractiveCanvas />`: Full-viewport ambient particle background.
  - `<Navbar />`: Sticky header navigation with mobile drawer.
  - `<main>`:
    - `<Hero />`: Headline, rotating specializations, quick metadata, action buttons, 3D terminal console.
    - `<About />`: Narrative overview, geographic anchors, core philosophy, specialization cards.
    - `<Education />`: Formal degree overview, coursework modules, chronological timeline.
    - `<Skills />`: Tabbed competency switcher, Python code pipeline viewer, roadmap cards.
    - `<Certifications />`: Credential details, simulation competencies, status verification modal.
    - `<Projects />`: 3D tilt project showcase cards, technology tags, developer integration guide.
    - `<Contact />`: Verified contact channels, client-validated message form, clipboard dispatcher.
  - `<PortfolioChatbot />`: Floating AI assistant modal with suggested query pills.
  - `<Footer />`: Navigation links, dynamic year calculation, back-to-top button.

### 2.2 Data Flow
```
src/data/portfolioData.ts
   │
   ├──► UI Components (Hero, About, Education, Skills, Projects, Certifications, Contact, Footer)
   │       └── Rendered via React Server Components & Client Wrappers
   │
   └──► src/app/api/chat/route.ts
           └── Ingested dynamically to generate the strict system grounding prompt for OpenRouter
```

---

## 3. Design System, Colors, and Responsive Behavior

### 3.1 Color Tokens
All styling is built upon custom CSS variables defined in `src/app/globals.css` and mapped through Tailwind CSS v4:

| Token | CSS Variable | Hex Value | Usage |
| :--- | :--- | :--- | :--- |
| **Canvas Background** | `--background` | `#06090e` | Deep obsidian base surface |
| **Panel Surface** | `--surface` | `#0b111e` | Card containers and navigation shells |
| **Elevated Surface** | `--surface-elevated` | `#111a2d` | Floating menus, modal dialogue bodies |
| **Primary Foreground** | `--foreground` | `#f8fafc` | Headings, active text, primary landmarks |
| **Muted Foreground** | `--foreground-muted`| `#94a3b8` | Subtitles, body copy, timestamps |
| **Accent Cyan** | `--accent-cyan` | `#38bdf8` | Interactive highlights, links, focus rings |
| **Accent Indigo** | `--accent-indigo` | `#818cf8` | Secondary gradients, timeline connectors |
| **Accent Emerald** | `--accent-emerald` | `#10b981` | Verification badges, live indicators |

### 3.2 Glassmorphism & Visual Effects
- **Panel Backdrop**: `background: rgba(14, 22, 37, 0.75); backdrop-filter: blur(14px); border: 1px solid rgba(255, 255, 255, 0.08);`
- **Radial Lighting Utility (`.radial-glow`)**: Soft radial gradient (`rgba(56, 189, 248, 0.08)`) centered across hero zones to provide subtle depth without visual clutter.
- **Subtle Mesh Utility (`.mesh-grid`)**: Transparent 40px × 40px grid creating modern engineering texture.

### 3.3 Responsive Breakpoints
- **Mobile (`< 640px`)**: Single-column vertical stacking, touch-friendly tap targets (minimum 44px × 44px), full-width drawer navigation, and compact chat panel.
- **Tablet (`640px – 1023px`)**: 2-column grid structures for cards, milestone timeline realignment, and docked bottom-right chat modal.
- **Desktop (`>= 1024px`)**: 12-column asymmetric layouts, interactive 3D perspective tilt enabled, and persistent floating AI trigger with tooltip.

---

## 4. Animation and Interaction Implementation

### 4.1 Scroll-Linked Progress (`ScrollProgress.tsx`)
- Reads `window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)`.
- Throttled using `window.requestAnimationFrame` to ensure zero main-thread hitching.
- Renders via hardware-accelerated `transform: scaleX(progress)` with `transform-origin: left`.

### 4.2 Viewport Reveal Animations (`ScrollReveal.tsx`)
- Uses native `IntersectionObserver` with a threshold of `0.08` and a `-30px` bottom root margin.
- Automatically unobserves elements once triggered to prevent re-triggering flicker during upward scrolling.
- Avoids cascading renders using `useSyncExternalStore` for media query subscription:
  ```ts
  const reducedMotion = useSyncExternalStore(
    subscribeReducedMotion,
    getReducedMotionSnapshot,
    getReducedMotionServer
  );
  ```
- When `prefers-reduced-motion` is enabled, reveals immediately with zero animation delay.

### 4.3 3D Perspective Card Tilt (`TiltCard.tsx`)
- Pointer physics calculated relative to the card's bounding rectangle:
  ```ts
  const rotateX = ((y - centerY) / centerY) * -maxTilt;
  const rotateY = ((x - centerX) / centerX) * maxTilt;
  ```
- Specular radial glare overlay dynamically repositions along the cursor's percentage coordinates (`glareX%`, `glareY%`).
- Automatically disabled on touch screens (`pointer: coarse`) and when reduced motion is preferred via `useSyncExternalStore`.

### 4.4 Ambient Neural Canvas (`InteractiveCanvas.tsx`)
- Mathematical particle simulation rendering connected nodes across dynamic browser dimensions.
- Particles drift with low velocity components (`vx`, `vy`) and repel smoothly from cursor coordinates.
- Connections are drawn conditionally if Euclidean distance `sqrt(dx*dx + dy*dy) < 110px`.
- **Power Optimization**: Listens to `document.addEventListener("visibilitychange")` and cancels the `requestAnimationFrame` loop when the browser tab is hidden, eliminating battery and GPU drain.

---

## 5. Chatbot Backend, API Integration, and Security

### 5.1 Endpoint Specification
- **Path**: `POST /api/chat`
- **Request Headers**: `Content-Type: application/json`
- **Request Body**:
  ```json
  {
    "message": "User query string (1-600 characters)",
    "history": [
      { "role": "user", "content": "..." },
      { "role": "assistant", "content": "..." }
    ]
  }
  ```
- **Success Response (HTTP 200)**:
  ```json
  {
    "reply": "Assistant response in markdown",
    "mode": "optional notice flag"
  }
  ```

### 5.2 OpenRouter Free-Model Integration
The route handler dispatches requests to the OpenRouter Chat Completions endpoint:
- **URL**: `https://openrouter.ai/api/v1/chat/completions`
- **Headers**:
  - `Authorization`: `Bearer ${OPENROUTER_API_KEY}`
  - `Content-Type`: `application/json`
  - `HTTP-Referer`: Request referer or fallback URL
  - `X-Title`: `"Deekshith Portfolio AI Assistant"`
- **Payload**:
  - `model`: Defaults to `openrouter/free`.
  - `temperature`: `0.3` (restrained for factual grounding).
  - `max_tokens`: `600`.
  - `messages`: Standard OpenAI format combining system prompt, validated history (last 8 turns), and latest user query.

### 5.3 Strict Free-Only Enforcement
To prevent inadvertent paid API usage:
```ts
const envModel = process.env.OPENROUTER_MODEL?.trim() || "openrouter/free";
const isFreeModel = envModel === "openrouter/free" || envModel.endsWith(":free");
const modelToUse = isFreeModel ? envModel : "openrouter/free";
```
If a user specifies a model that is neither `openrouter/free` nor ends with `:free`, the backend automatically overrides the model to `openrouter/free`.

### 5.4 Abuse Prevention & Error Safeguards
- **In-Memory Rate Limiter**: 20 requests per rolling 60-second window per client IP. Returns HTTP 429 when exceeded.
- **Payload Validation**: Non-string messages or strings exceeding 600 characters return HTTP 400.
- **Provider Error Translation**:
  - HTTP 429 from OpenRouter: Returns descriptive notice about shared community rate limits.
  - HTTP 401/403: Alerts operator that `OPENROUTER_API_KEY` is invalid.
  - HTTP 502/503: Informs visitor that the selected free model is currently busy.
- **Secret Isolation**: `OPENROUTER_API_KEY` is never sent to the client, never prefixed with `NEXT_PUBLIC_`, and never logged to console.

---

## 6. Accessibility and Performance Considerations

### 6.1 Accessibility Standards
- **Reduced Motion**: System-level preference (`prefers-reduced-motion: reduce`) triggers global CSS animation overrides in `globals.css` and disables transforms in `ScrollReveal.tsx`, `TiltCard.tsx`, and `InteractiveCanvas.tsx`.
- **Keyboard Navigation**:
  - Fully visible focus indicators (`:focus-visible` with 2px sky-cyan outline and 3px offset).
  - Chat modal supports `Escape` key dismissal.
  - Textarea supports `Enter` to submit and `Shift + Enter` for multi-line inputs.
- **Semantic HTML**: Proper use of landmarks (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`) and ARIA roles (`role="dialog"`, `aria-modal="true"`, `aria-live="polite"`).

### 6.2 Performance Optimizations
- **Static Pre-Rendering**: All portfolio pages are prerendered as static HTML at build time (`○ /`), with the dynamic route (`ƒ /api/chat`) executed on demand.
- **Font Optimization**: Uses `next/font/google` with CSS variable injection to prevent Cumulative Layout Shift (CLS).
- **Turbopack Build Integration**: Configured in `next.config.ts` with component caching and partial prefetching enabled.

---

## 7. Build, Lint, and Testing Procedures

### Verified CLI Commands
```bash
# 1. Static Lint Analysis (ESLint 9 + React 19 rules)
npm run lint

# 2. Production Build (Next.js 16.4.2 Turbopack)
npm run build

# 3. Local Development Server
npm run dev

# 4. Local Production Runtime
npm run start -- -p 3000
```

### Verified Test Evidence
- **Lint Audit**: Passed with 0 errors and 0 warnings.
- **Build Output**: Successfully generated static routes and dynamic `/api/chat` serverless endpoint.
- **API Functional Suite**:
  - `POST /api/chat` with `{}` -> `HTTP 400 (Invalid request payload)`
  - `POST /api/chat` with `{ "message": "   " }` -> `HTTP 400 (Message cannot be empty)`
  - `POST /api/chat` with 650 characters -> `HTTP 400 (Message exceeds maximum length)`
  - `POST /api/chat` without API key -> `HTTP 200 (Informational setup notice)`

---

## 8. Known Implementation Details and Limitations

1. **Free Model Availability**: OpenRouter's free tier (`openrouter/free`) routes across providers offering zero-cost capacity. Free tier models are subject to shared community rate limits, upstream latency spikes, and provider rotation.
2. **Contact Submission Pipeline**: The contact form operates via client-side validation and dispatches prefilled drafts via the `mailto:` protocol and clipboard copy. A third-party transactional mail service (e.g., Resend or SendGrid) is not configured by default.
3. **Repository Showcase Placeholders**: Project cards currently display upcoming architecture placeholders until concrete repository and live demo URLs are provided in `src/data/portfolioData.ts`.
