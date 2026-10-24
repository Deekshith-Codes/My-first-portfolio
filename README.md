# Personal Portfolio Website

Welcome to my personal portfolio! This website showcases my education, technical interests, projects, and development journey in Artificial Intelligence, Machine Learning, Python, and full-stack development.

## About Me

I am a Computer Science and Engineering student specializing in Artificial Intelligence and Machine Learning at AJ Institute of Engineering and Technology, Mangaluru.

I am interested in Python programming, machine learning, data science, and full-stack development. My goal is to build practical projects and apply my technical knowledge to real-world problems.

## Live Website

**Portfolio:** Add your deployed website URL here.

## Built With

- Next.js
- React
- TypeScript
- Tailwind CSS
- OpenRouter API
- Git and GitHub
- Vercel

## Features

- Responsive design for desktop and mobile
- Introduction and about section
- Technical skills and project showcase
- Education and contact information
- Scroll progress indicator
- Scroll reveal animations
- Interactive 3D tilt cards
- Floating AI chatbot
- OpenRouter API integration for AI responses
- Touch-friendly interactions
- Reduced-motion support

## Technical Interests

- Python programming
- Artificial Intelligence and Machine Learning
- Data science and analytics
- Full-stack web development

## Education

**AJ Institute of Engineering and Technology, Mangaluru**

Bachelor of Engineering in Computer Science and Engineering – Artificial Intelligence and Machine Learning

2024–2028

## Certification

- Deloitte Data Analytics Job Simulation

## AI Chatbot

The portfolio includes an AI chatbot designed to help visitors explore information about the website.

The chatbot uses a Next.js server-side API route to communicate with OpenRouter.

Configure the following environment variables locally:

- `OPENROUTER_API_KEY`
- `OPENROUTER_MODEL`

Never expose your real API key in client-side code or commit it to GitHub.

## Run Locally

1. Clone your GitHub repository:

   ```bash
   git clone https://github.com/Deekshith-Codes/My-first-portfolio
   ```

2. Open the project directory:

   ```bash
   cd My-first-portfolio
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Create a `.env.local` file in the project root:

   ```env
   OPENROUTER_API_KEY=your_api_key_here
   OPENROUTER_MODEL=openrouter/free
   ```

5. Start the development server:

   ```bash
   npm run dev
   ```

6. Open [http://localhost:3000](http://localhost:3000).

## Production Build

```bash
npm run build
```

## Deployment

The application can be deployed on Vercel or another platform that supports Next.js. Configure the required environment variables in the deployment settings.

## Project Structure

- `src/` — Application source code and API routes
- `public/` — Static images, icons, and other assets
- `package.json` — Dependencies and scripts
- `package-lock.json` — Dependency lockfile
- `next.config.ts` — Next.js configuration
- `tsconfig.json` — TypeScript configuration

## Security

- Keep API keys in environment variables.
- Do not upload `.env.local` or files containing real credentials.
- Keep private API credentials on the server.

## License

This project is intended for portfolio presentation, development, and learning purposes.

