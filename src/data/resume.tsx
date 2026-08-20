import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";
import { siReact, siNextdotjs, siTypescript, siJavascript, siPython, siGo, siCplusplus, siNodedotjs, siPostgresql, siMongodb, siRedis, siDocker, siKubernetes, siClaude, siCursor, siGoogle, siGit, siGithub, siVercel, siFigma } from "simple-icons";

export interface SocialItem {
  name: string;
  url: string;
  icon: any;
  navbar: boolean;
}

export interface ResumeData {
  name: string;
  initials: string;
  url: string;
  location: string;
  locationLink: string;
  description: string;
  summary: string;
  avatarUrl?: string;
  navbar: readonly { href: string; icon: any; label: string }[];
  contact: {
    email: string;
    social: Record<string, SocialItem>;
  };
  work: readonly any[];
  education: readonly any[];
  projects: readonly any[];
}

export const DATA: ResumeData = {
  name: "Aɳιɱєʂԋ ƙυɱαɾ",
  initials: "AK",
  url: "https://animesh.live",
  location: "India, New Delhi",
  locationLink: "https://www.google.com/maps/place/newdelhi",
  description:
    "I'm a Software Engineer, loves turning ideas into interfaces that move, respond, and feel alive. Trying to be active on Twitter.",
  summary: `
• \u00A0\u00A0I’m Aɳιɱєʂԋ ƙυɱαɾ (call me Ani) — a Software Engineer passionate about crafting polished digital experiences and building things from the ground up.

• \u00A0\u00A0Always exploring new technologies, experimenting with ideas, and turning them into thoughtfully crafted products.

• \u00A0\u00A0I’m obsessed with the details — from clean architecture and smooth interactions to the final pixel on the screen.
`,
  
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
  ],
  contact: {
  email: "animeshkr2022@example.com",
  social: {
    GitHub: {
      name: "GitHub",
      url: "https://github.com/Not-Animesh",
      icon: Icons.github,
      navbar: true,
    },

    LinkedIn: {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/not-animesh",
      icon: Icons.linkedin,
      navbar: true,
    },

    X: {
      name: "X",
      url: "https://x.com/not_animesh_",
      icon: Icons.x,
      navbar: true,
    },

    email: {
      name: "Send Email",
      url: "#",
      icon: Icons.email,
      navbar: false,
    },
  },
},

  work: [
  {
    company: "EduSkills",
    href: "https://eduskillsfoundation.org/",
    badges: ["Virtual Internship"],
    location: "Remote",
    title: "MERN Full Stack Development Intern",
    logoUrl: "/eduskills.jpg",
    start: "June 2026",
    end: "August 2026",
    description:
      "Completed an 8-week virtual internship focused on MERN full-stack development, including React, Node.js, Express, MongoDB, REST APIs, authentication, deployment, and a final e-commerce project.",
  },
  {
    company: "Acmegrade",
    href: "https://www.acmegrade.com/",
    badges: ["Internship"],
    location: "Remote",
    title: "Web Development Intern",
    logoUrl: "/acmegrade.svg",
    start: "January 2025",
    end: "February 2025",
    description:
      "Completed a one-month Web Development internship focused on learning and applying practical web development skills through hands-on projects.",
  },
  
  {
    company: "Freelance",
    href: "#",
    badges: ["Freelance"],
    location: "Remote",
    title: "Web Developer",
    logoUrl: "/freelance.png",
    start: "2025",
    end: "Present",
    description:
      "Built and shipped multiple websites and web projects, taking ideas from concept to deployment. I enjoy turning requirements into polished, responsive experiences and obsessing over the details that make each project feel unique.",
  },
],
  education: [
  {
    school: "Galgotias University",
    href: "https://www.galgotiasuniversity.edu.in/",
    degree: "Bachelor of Computer Applications (BCA)",
    start: "August 2024",
    end: "August 2027",
  },
  {
    school: "Mata Draupadi Namdhari Gobind Singh Public School",
    degree: "Senior Secondary Education (Class 11–12)",
    start: "May 2021",
    end: "May 2023",
  },
  {
    school: "Vimla Pandey Memorial Gyan Niketan School",
    degree: "Secondary Education (Class 10)",
    start: "May 2021",
    end: "May 2021",
    location: "Daltonganj",
  },
],
 projects: [
  {
    title: "Suburbia Skate",
    href: "https://suburbia-sooty.vercel.app/",
    dates: "2026",
    active: true,
    description:
      "An interactive 3D skateboard configurator built to explore the intersection of web design, animation, and 3D. Customize your skateboard and see the changes rendered live on an interactive 3D model.",
    technologies: [
      "Next.js",
      "Three.js",
      "React Three Fiber",
      "GSAP",
      "Prismic",
      "Matter.js",
      "Tailwind CSS",
    ],
    links: [
      {
        type: "Website",
        href: "https://suburbia-sooty.vercel.app/",
        icon: <Icons.globe className="size-3" />,
      },
      {
        type: "Source",
        href: "https://github.com/Not-Animesh/Suburbia",
        icon: <Icons.github className="size-3" />,
      },
    ],
    image: "/suburbia.png",
    video: "",
  },

  {
    title: "Sarita Koirala",
    href: "https://saritakoirala.vercel.app/",
    dates: "Client Project",
    active: true,
    description:
      "Designed and developed a fashion designer's portfolio with a strong focus on visual presentation, typography, smooth interactions, and GSAP-powered motion.",
    technologies: [
      "Next.js",
      "Tailwind CSS",
      "GSAP",
      "SendGrid",
      "Figma",
    ],
    links: [
      {
        type: "Website",
        href: "https://saritakoirala.vercel.app/",
        icon: <Icons.globe className="size-3" />,
      },
    ],
    image: "/portfolio.png",
    video: "",
  },

  {
    title: "PlayGioco",
    href: "https://playgioco.vercel.app/",
    dates: "2026",
    active: true,
    description:
      "A collection of social party games built for playing with friends, including an imposter-style game where players have to figure out who is secretly working against them.",
    technologies: [
      "Next.js",
      "Tailwind CSS",
      "Figma",
    ],
    links: [
      {
        type: "Website",
        href: "https://playgioco.vercel.app/",
        icon: <Icons.globe className="size-3" />,
      },
      {
        type: "Source",
        href: "https://github.com/Not-Animesh/playgioco",
        icon: <Icons.github className="size-3" />,
      },
    ],
    image: "/gioco.png",
    video: "",
  },

  {
    title: "Titanic ML Explorer",
    href: "https://github.com/Not-Animesh/Titanic",
    dates: "2026",
    active: true,
    description:
      "An interactive machine-learning application built with Streamlit that lets you experiment with multiple classification models, predict passenger survival, and explore model decisions through live SHAP-powered explainability.",
    technologies: [
      "Python",
      "Streamlit",
      "Pandas",
      "NumPy",
      "Scikit-learn",
      "XGBoost",
      "CatBoost",
      "SHAP",
      "Plotly",
      "Matplotlib",
      "Seaborn",
    ],
    links: [
      {
        type: "Source",
        href: "https://github.com/Not-Animesh/Titanic",
        icon: <Icons.github className="size-3" />,
      },
    ],
    image: "/titanic.png",
    video: "",
  },
],
};

export const STACK = [
  {
    number: "01",
    title: "Language",
    skills: [
      { name: "TypeScript", icon: siTypescript },
      { name: "JavaScript", icon: siJavascript },
      { name: "Python", icon: siPython },
      { name: "Go", icon: siGo },
      { name: "C++", icon: siCplusplus },
    ],
  },
  {
    number: "02",
    title: "Frontend",
    skills: [
      { name: "React", icon: siReact },
      { name: "Next.js", icon: siNextdotjs },
    ],
  },
  {
    number: "03",
    title: "Backend & Database",
    skills: [
      { name: "Node.js", icon: siNodedotjs },
      { name: "PostgreSQL", icon: siPostgresql },
      { name: "MongoDB", icon: siMongodb },
      { name: "Redis", icon: siRedis },
    ],
  },
  {
    number: "04",
    title: "DevOps",
    skills: [
      { name: "Docker", icon: siDocker },
      { name: "Kubernetes", icon: siKubernetes },
    ],
  },
  {
    number: "05",
    title: "Workflow & AI",
    skills: [
      { name: "Claude", icon: siClaude },
      { name: "Cursor", icon: siCursor },
      { name: "Gemini", icon: siGoogle },
      { name: "Git", icon: siGit },
      { name: "GitHub", icon: siGithub },
      { name: "Vercel", icon: siVercel },
    ],
  },
  {
    number: "06",
    title: "Design",
    skills: [
      { name: "Figma", icon: siFigma },
    ],
  },
] as const;