export interface PersonalInfo {
  name: string;
  headline: string;
  location: string;
  email: string;
  linkedInUrl: string;
  role: string;
  statusBadge: string;
  bio: string;
}

export interface EducationItem {
  institution: string;
  degree: string;
  specialization: string;
  duration: string;
  location: string;
  isCurrent: boolean;
  highlights: string[];
}

export interface SkillItem {
  name: string;
  status: "verified" | "roadmap";
  category: string;
  description: string;
  level?: string;
}

export interface CertificationItem {
  title: string;
  issuer: string;
  status: "verified";
  issuedDate?: string;
  skillsPracticed: string[];
  credentialNote: string;
}

export interface ProjectPlaceholder {
  id: string;
  title: string;
  status: "In Planning" | "Architecture Design" | "Upcoming";
  headline: string;
  description: string;
  targetStack: string[];
  isPlaceholder: true;
}

export const PORTFOLIO_DATA = {
  personal: {
    name: "Deekshith P",
    headline: "AI/ML Student | Aspiring Data Scientist | Python, Machine Learning & Full Stack Development | Building Real-World Projects",
    location: "Kasaragod, Kerala, India",
    email: "deekshithpulikuthi@gmail.com",
    linkedInUrl: "https://www.linkedin.com/in/deekshith-p-065910428",
    role: "AI/ML Student & Aspiring Data Scientist",
    statusBadge: "B.E. Candidate (2024–2028)",
    bio: "Computer Science and Engineering undergraduate specializing in Artificial Intelligence and Machine Learning at AJ Institute of Engineering and Technology, Mangaluru. Focused on Python, analytical problem-solving, and developing real-world data science and machine learning applications.",
  } as PersonalInfo,

  education: [
    {
      institution: "AJ Institute of Engineering and Technology, Mangaluru",
      degree: "Bachelor of Engineering (B.E.)",
      specialization: "Computer Science and Engineering – Artificial Intelligence and Machine Learning",
      duration: "2024 – 2028",
      location: "Mangaluru, Karnataka, India",
      isCurrent: true,
      highlights: [
        "Specialized curriculum spanning Artificial Intelligence, Machine Learning algorithms, and computational modeling.",
        "Core foundational coursework in Computer Science, Data Structures, Algorithms, and Mathematics.",
        "Hands-on technical development with a focus on real-world engineering project implementations."
      ]
    }
  ] as EducationItem[],

  skills: {
    verified: [
      {
        name: "Python (Programming Language)",
        status: "verified",
        category: "Programming & Data Science",
        description: "Confirmed primary programming language extracted from official profile. Utilized for algorithmic logic, data processing, and machine learning foundation.",
        level: "Core Verified Skill"
      }
    ] as SkillItem[],
    roadmap: [
      {
        name: "Machine Learning & Statistical Modeling",
        status: "roadmap",
        category: "AI & ML",
        description: "Indicated in professional headline; planned for verification as coursework and project implementations progress."
      },
      {
        name: "Data Analytics & Insights",
        status: "roadmap",
        category: "Data Science",
        description: "Applied during Deloitte Data Analytics Job Simulation. Planned for in-depth technical verification."
      },
      {
        name: "Full Stack Development",
        status: "roadmap",
        category: "Web & Software Engineering",
        description: "Indicated in professional headline; actively preparing portfolio projects to demonstrate full-stack capabilities."
      },
      {
        name: "SQL & Relational Databases",
        status: "roadmap",
        category: "Data Engineering",
        description: "Placeholder for upcoming database management and querying skills."
      }
    ] as SkillItem[]
  },

  certifications: [
    {
      title: "Deloitte Data Analytics Job Simulation",
      issuer: "Deloitte (Forage Virtual Experience)",
      status: "verified",
      skillsPracticed: [
        "Data Analytics & Interpretation",
        "Business Problem Solving",
        "Data-Driven Decision Making",
        "Analytical Presentation"
      ],
      credentialNote: "Official certification verified from Profilee.pdf. Certificate document or credential ID link can be connected upon file upload."
    }
  ] as CertificationItem[],

  projects: [
    {
      id: "project-placeholder-1",
      title: "AI/ML Real-World Solution",
      status: "In Planning",
      headline: "Machine Learning Predictive System",
      description: "Planned end-to-end machine learning project. Designed to ingest raw data, execute feature engineering in Python, and produce real-world predictive insights.",
      targetStack: ["Python", "Machine Learning", "Data Analytics"],
      isPlaceholder: true
    },
    {
      id: "project-placeholder-2",
      title: "Full Stack Intelligent Web App",
      status: "Architecture Design",
      headline: "Interactive Data-Driven Application",
      description: "Upcoming application combining full-stack web architecture with intelligent data processing workflows, reflecting the headline specializations.",
      targetStack: ["Python", "Full Stack", "REST APIs"],
      isPlaceholder: true
    },
    {
      id: "project-placeholder-3",
      title: "Data Analytics & Exploration Dashboard",
      status: "Upcoming",
      headline: "Deloitte Simulation Capstone Extension",
      description: "Exploratory data analysis project building upon analytical methodologies practiced in the Deloitte Data Analytics simulation.",
      targetStack: ["Python", "Data Exploration", "Visualization"],
      isPlaceholder: true
    }
  ] as ProjectPlaceholder[],

  navLinks: [
    { label: "Home", href: "#hero" },
    { label: "About", href: "#about" },
    { label: "Education", href: "#education" },
    { label: "Skills", href: "#skills" },
    { label: "Certifications", href: "#certifications" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ]
};
