// Resume Imports
import { FaGg, FaPalette, FaExpand } from "react-icons/fa";

// Dock Imports
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconHome,
  IconBallpenFilled,
  IconTerminal2,
  IconVocabulary,
} from "@tabler/icons-react";

// Project Imports and other parts for Icons
import {
  SiJavascript,
  SiTypescript,
  SiPython,
  SiHtml5,
  SiCss3,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiSass,
  SiBootstrap,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiFirebase,
  SiGit,
  SiGithub,
  SiDocker,
  SiJira,
  SiGraphql,
  SiRedux,
  SiWebpack,
  SiVite,
  SiAzuredevops,
  SiNetlify,
  SiVercel,
  SiNginx,
  SiDeno,
} from "react-icons/si";
import portfolioImage from "@/assets/portfolioImage.png";
import tanjeImage from "@/assets/Tanje.png";
import { StaticImageData } from "next/image";

// Dock
export const links = [
  {
    title: "Home",
    icon: (
      <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "#home",
  },

  {
    title: "Projects",
    icon: (
      <IconTerminal2 className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "#projects",
  },
  {
    title: "Skills",
    icon: (
      <IconBallpenFilled className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "#skills",
  },
  {
    title: "Resume",
    icon: (
      <IconVocabulary className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "#resume",
  },
  {
    title: "LinkedIn",
    icon: (
      <IconBrandLinkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "https://www.linkedin.com/in/pouya-jafari/",
  },
  {
    title: "GitHub",
    icon: (
      <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "https://github.com/pouya-jafari/",
  },
];

// Hero Section
export const words = [
  "Full-Stack Web Developer",
  "Front-End Developer",
  "Back-End Developer",
  "Software Engineer",
];

// Project Section
export type Project = {
  title: string;
  image?: StaticImageData | string;
  description: string;
  icons: { component: JSX.Element; color: string }[];
  github?: string;
  website?: string;
  isWorking?: boolean;
};

export const projects: Project[] = [
  {
    title: "Portfolio Website",
    image: portfolioImage,
    description:
      "A sleek and modern personal portfolio designed to showcase my skills, projects, and achievements. Built using React, Next.js, and Tailwind CSS with responsive design and smooth animations.",
    icons: [
      { component: <SiReact />, color: "#61DAFB" },
      { component: <SiNextdotjs />, color: "white" },
      { component: <SiJavascript />, color: "yellow" },
      { component: <SiTailwindcss />, color: "#06B6D4" },
      { component: <SiTypescript />, color: "#3178C6" },
    ],
    github: "https://github.com/pouya-jafari/portfolio",
    website: "https://pouyajafari.netlify.app/",
  },
  {
    title: "Tanje Takeout Restaurant",
    image: tanjeImage,
    description:
      "A visually appealing static website for a takeout restaurant, designed to display the menu, restaurant information, and customer testimonials.",
    icons: [
      { component: <SiReact />, color: "#61DAFB" },
      { component: <SiTailwindcss />, color: "#06B6D4" },
      { component: <SiTypescript />, color: "#3178C6" },
      { component: <SiJavascript />, color: "yellow" },
      { component: <SiVite />, color: "pink" },
    ],
    github: "https://github.com/pouya-jafari/tanje-restaurant",
    website: "https://tanje.netlify.app",
  },
  {
    title: "Shamim Bakery",
    description:
      "Still Working - A responsive e-commerce platform for a bakery with an integrated shopping cart, payment gateway, and product search functionality. ",
    icons: [
      { component: <SiReact />, color: "#61DAFB" },
      { component: <SiTailwindcss />, color: "#06B6D4" },
      { component: <SiRedux />, color: "white" },
      { component: <SiNextdotjs />, color: "white" },
    ],
    github: "https://github.com/pouya-jafari/ecommerce",
    website: "https://ecommerce-demo.com",
    isWorking: true,
  },
  {
    title: "Chat App",
    description:
      "Still Working - A real-time chat application with user authentication, private messaging, and group chats. Upcoming enhancements include message reactions, typing indicators, and read receipts.",
    icons: [
      { component: <SiReact />, color: "#61DAFB" },
      { component: <SiMongodb />, color: "#47A248" },
    ],
    github: "https://github.com/pouya-jafari/new-project",
    website: "https://new-project.com",
    isWorking: true,
  },
];

// Resume Section

export const resumeData = {
  workExperience: [
    {
      title: "Freelance Full-Stack Developer",
      duration: "August 2024 - Present",
      location: "Remote",
      description: `
        Delivered freelance projects, specializing in creating responsive, high-performance web applications. Focused on modern web development practices with React, TailwindCSS, and Next.js.
        Key Projects:
        - Built a personal portfolio to highlight skills, projects, and certifications. Implemented smooth animations, responsive design, and dark mode.
        - Created a responsive website for a takeout restaurant featuring a menu, testimonials, and business information. Optimized for speed and usability.
      `,
      technologies: [
        { name: "React", icon: <SiReact /> },
        { name: "Next.js", icon: <SiNextdotjs /> },
        { name: "TailwindCSS", icon: <SiTailwindcss /> },
        { name: "MongoDB", icon: <SiMongodb /> },
        { name: "Redux", icon: <SiRedux /> },
        { name: "TypeScript", icon: <SiTypescript /> },
      ],
    },
    {
      title: "Line Cook",
      duration: "March 2024 - Present",
      location: "Cactus Club Cafe, Burnaby, BC",
      description: `
        Worked collaboratively in a high-paced kitchen environment. Built strong teamwork, time management, and problem-solving skills.
      `,
      technologies: [],
    },
  ],
  education: [
    {
      institution: "Langara College",
      degree: "Associate of Science in Computer Science",
      year: "April 2024",
    },
  ],
  certifications: [
    {
      title: "React - The Complete Guide 2024 (incl. Next.js, Redux)",
      provider: "Udemy",
      year: "Sept 2024",
      link: "https://www.udemy.com/certificate/UC-ab4eb515-a3eb-4148-ac43-a97513e82f67/",
      technologies: [
        { name: "React", icon: <SiReact /> },
        { name: "Next.js", icon: <SiNextdotjs /> },
        { name: "Redux", icon: <SiRedux /> },
      ],
    },
    {
      title: "React & TypeScript - The Practical Guide",
      provider: "Udemy",
      year: "Sept 2024",
      link: "https://www.udemy.com/certificate/UC-43eb3d49-1519-400e-b621-e9571f8eef15/",
      technologies: [
        { name: "React", icon: <SiReact /> },
        { name: "TypeScript", icon: <SiTypescript /> },
      ],
    },
    {
      title: "NodeJS - The Complete Guide (MVC, REST APIs, GraphQL, Deno)",
      provider: "Udemy",
      year: "Sept 2024",
      link: "https://www.udemy.com/certificate/UC-66807af9-11f7-4559-9d21-dc95086190f2/",
      technologies: [
        { name: "Node.js", icon: <SiNodedotjs /> },
        { name: "GraphQL", icon: <SiGraphql /> },
        { name: "Deno", icon: <SiDeno /> },
      ],
    },
    {
      title: "The Complete JavaScript Course 2024: From Zero to Expert!",
      provider: "Udemy",
      year: "August 2024",
      link: "https://www.udemy.com/certificate/UC-ac7f33d6-a54c-486e-8521-a12be23e072a/",
      technologies: [{ name: "JavaScript", icon: <SiJavascript /> }],
    },
  ],
};

// Skills Section

export const categories = [
  {
    title: "Languages",
    skills: [
      { name: "JavaScript", icon: <SiJavascript /> },
      { name: "TypeScript", icon: <SiTypescript /> },
      { name: "Python", icon: <SiPython /> },
      { name: "HTML5", icon: <SiHtml5 /> },
      { name: "CSS3", icon: <SiCss3 /> },
    ],
  },
  {
    title: "Libraries & Frameworks",
    skills: [
      { name: "React", icon: <SiReact /> },
      { name: "Next.js", icon: <SiNextdotjs /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss /> },
      { name: "Sass", icon: <SiSass /> },
      { name: "Bootstrap", icon: <SiBootstrap /> },
      { name: "Redux", icon: <SiRedux /> },
      { name: "Ant Design (AntD)", icon: <FaExpand /> },
      { name: "Material UI", icon: <FaPalette /> },
      { name: "Framer Motion", icon: <FaGg /> },
      { name: "GSAP", icon: <FaGg /> },
      { name: "Aceternity UI", icon: <FaExpand /> },
    ],
  },
  {
    title: "Back-End Frameworks",
    skills: [
      { name: "Node.js", icon: <SiNodedotjs /> },
      { name: "Express.js", icon: <SiExpress /> },
      { name: "GraphQL", icon: <SiGraphql /> },
    ],
  },
  {
    title: "Databases",
    skills: [
      { name: "MongoDB", icon: <SiMongodb /> },
      { name: "MySQL", icon: <SiMysql /> },
      { name: "PostgreSQL", icon: <SiPostgresql /> },
      { name: "Firebase", icon: <SiFirebase /> },
    ],
  },
  {
    title: "DevOps & Tools",
    skills: [
      { name: "Git", icon: <SiGit /> },
      { name: "GitHub", icon: <SiGithub /> },
      { name: "Docker", icon: <SiDocker /> },
      { name: "Jira", icon: <SiJira /> },
      { name: "Webpack", icon: <SiWebpack /> },
      { name: "Vite", icon: <SiVite /> },
    ],
  },
  {
    title: "Cloud & Deployment",
    skills: [
      { name: "Azure DevOps", icon: <SiAzuredevops /> },
      { name: "Netlify", icon: <SiNetlify /> },
      { name: "Vercel", icon: <SiVercel /> },
      { name: "Nginx", icon: <SiNginx /> },
    ],
  },
];
