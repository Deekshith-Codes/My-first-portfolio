# Deekshith P — AI/ML Portfolio Website

A modern, high-performance personal portfolio website for **Deekshith P**, an AI/ML undergraduate and aspiring data scientist at AJ Institute of Engineering and Technology, Mangaluru.

Built with **Next.js (App Router)**, **TypeScript**, and **Tailwind CSS**. Designed under a **strict zero-hallucination policy** grounded exclusively in verified details from `Profilee.pdf`.

---

## 🌟 Verified Profile Highlights

- **Full Name**: Deekshith P
- **Headline**: *AI/ML Student | Aspiring Data Scientist | Python, Machine Learning & Full Stack Development | Building Real-World Projects*
- **Location**: Kasaragod, Kerala, India
- **Email**: [deekshithpulikuthi@gmail.com](mailto:deekshithpulikuthi@gmail.com)
- **LinkedIn**: [linkedin.com/in/deekshith-p-065910428](https://www.linkedin.com/in/deekshith-p-065910428)
- **Institution**: AJ Institute of Engineering and Technology, Mangaluru
- **Degree**: Bachelor of Engineering (B.E.) in Computer Science & Engineering – Artificial Intelligence and Machine Learning (2024–2028)
- **Confirmed Top Skill**: Python (Programming Language)
- **Confirmed Certification**: Deloitte Data Analytics Job Simulation

---

## 🚀 Key Features

1. **Modern Dark Aesthetic**: Deep obsidian backgrounds (`#06090e`), restrained cyan (`#38bdf8`) and indigo (`#818cf8`) accents, subtle glows, and accessible contrast.
2. **Interactive Neural Constellation**: Lightweight HTML5 Canvas constellation background that responds gracefully to cursor movement and respects `prefers-reduced-motion`.
3. **No Synthetic Portraits**: Authentic technical branding with a high-tech `DP` monogram emblem and an interactive `deekshith_profile.py` terminal code viewer.
4. **Transparent Skills Section**: Highlights verified Python proficiency with code demonstrations alongside clearly labeled "Skills to Add / Roadmap" cards for upcoming competencies.
5. **Certificate Verification Modal**: Features the Deloitte Data Analytics Job Simulation with an interactive modal detailing verification notes and step-by-step developer instructions.
6. **Extensible Projects Pipeline**: Structured placeholder cards for upcoming ML and Full Stack repositories, including an in-code developer guide.
7. **Validated Direct Contact Form**: Fully typed form with real-time field validation, clipboard copy feedback, and automatic prefilled `mailto:` client dispatcher.
8. **Production-Ready Next.js**: App Router, static prerendering, zero build errors, zero linter warnings, complete OpenGraph and Twitter SEO tags.

---

## 🛠️ Project Structure

```
ABC/
├── implementation.md          # Complete architecture & verification log
├── implementation_plan.md     # Development roadmap and specifications
├── package.json               # Dependencies and build scripts
├── tsconfig.json              # TypeScript strict configuration
├── src/
│   ├── app/
│   │   ├── layout.tsx         # Root layout with SEO metadata & viewport
│   │   ├── page.tsx           # Page orchestrator assembling all sections
│   │   ├── globals.css        # Tailwind CSS directives, glows, scrollbars
│   │   └── icon.svg           # Custom DP monogram favicon
│   ├── components/
│   │   ├── Navbar.tsx         # Sticky header with mobile drawer & active spy
│   │   ├── Hero.tsx           # Headline, verified tags, terminal console visual
│   │   ├── About.tsx          # Authentic student story & headline pillars
│   │   ├── Education.tsx      # AJIET timeline card with coursework modules
│   │   ├── Skills.tsx         # Verified Python deep dive & roadmap switcher
│   │   ├── Certifications.tsx # Deloitte analytics card with status modal
│   │   ├── Projects.tsx       # Reusable project cards & developer guide
│   │   ├── Contact.tsx        # Direct contact cards & validated message form
│   │   ├── Footer.tsx         # Dynamic year, verified links, back-to-top
│   │   ├── InteractiveCanvas.tsx # Lightweight 60fps neural network canvas
│   │   └── icons/
│   │       └── BrandIcons.tsx # High-precision SVGs for LinkedIn and GitHub
│   └── data/
│       └── portfolioData.ts   # Centralized data model for all verified information
```

---

## 💻 Getting Started Locally

### Prerequisites
- Node.js `v18.18+` or `v20+` / `v22+`
- npm `v9+` or `v10+`

### Installation & Run
```bash
# Clone or navigate to the workspace
cd ABC

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build
```bash
# Run production build
npm run build

# Start production server
npm run start -- -p 3000
```

### Run Linter
```bash
npm run lint
```

---

## 📝 How to Add Real Projects & Certificates Later

All personal information and project items are centralized in [`src/data/portfolioData.ts`](./src/data/portfolioData.ts):

### Adding a Project:
Simply add an item to the `projects` array:
```ts
{
  id: "my-real-project",
  title: "Machine Learning Crop Yield Prediction",
  headline: "Python & Scikit-Learn Model",
  description: "Trained on historical rainfall and soil data to predict agricultural yields.",
  targetStack: ["Python", "Pandas", "Scikit-Learn"],
  githubUrl: "https://github.com/deekshith-p/crop-prediction",
  liveUrl: "https://crop-prediction-demo.vercel.app"
}
```

### Linking the Deloitte Certificate:
1. Place the scanned certificate PDF or image in `public/certificates/deloitte.pdf`.
2. In `src/data/portfolioData.ts`, link the URL:
```ts
credentialUrl: "/certificates/deloitte.pdf"
```

---

## 📄 License
Created for **Deekshith P**. All rights reserved.
