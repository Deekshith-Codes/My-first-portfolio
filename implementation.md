# Implementation

## Personal Portfolio Website

This document describes the technologies, components, and features of the personal portfolio website.

## 1. Technology Stack

- **Next.js:** Application framework and routing
- **React:** Component-based user interface
- **TypeScript:** Type-safe development
- **Tailwind CSS:** Responsive styling
- **OpenRouter API:** AI chatbot integration
- **Git and GitHub:** Version control and source code management
- **Vercel:** Deployment platform

## 2. Portfolio Content

The portfolio presents the developer's education, technical interests, projects, and contact information.

The profile content focuses on Python programming, Artificial Intelligence and Machine Learning, data science, and full-stack development.

## 3. User Interface

The website is designed to support desktop and mobile visitors.

Implemented interface enhancements include:

- Scroll progress indicator
- Scroll reveal animations
- Interactive 3D tilt cards
- Touch interaction support
- Reduced-motion considerations

## 4. AI Chatbot

The website includes a floating chatbot that allows visitors to interact with an AI-powered assistant.

The chatbot uses a Next.js API route to communicate with OpenRouter.

### Configuration

The chatbot uses these environment variables:

- `OPENROUTER_API_KEY` — API authentication
- `OPENROUTER_MODEL` — Model selection

The API key must remain server-side and must not be exposed in public source code.

## 5. Development Workflow

1. Develop and update React components.
2. Install dependencies using `npm install`.
3. Run the development server using `npm run dev`.
4. Test the interface and chatbot.
5. Run `npm run build` to check the production build.
6. Commit and push changes to GitHub.
7. Configure environment variables and deploy the application.

## 6. Security and Maintenance

- Exclude secret environment files from Git.
- Keep dependencies and configuration files consistent.
- Test API error handling and chatbot behavior.
- Verify responsive layouts after interface changes.
- Review the production build before deployment.

## 7. Expected Result

A responsive personal portfolio website combining professional profile information, project presentation, interactive visual elements, and an AI chatbot.
