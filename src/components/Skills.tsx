"use client";
import { useState } from "react";
import { motion } from "framer-motion";
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
} from "react-icons/si";
import { FaGg, FaPalette, FaExpand } from "react-icons/fa";

const categories = [
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

const Skills = () => {
  const [expandedCategories, setExpandedCategories] = useState<{
    [key: string]: boolean;
  }>({});

  const toggleExpand = (categoryTitle: string) => {
    setExpandedCategories((prevState) => ({
      ...prevState,
      [categoryTitle]: !prevState[categoryTitle],
    }));
  };

  return (
    <div className="py-20 px-5" id="skills">
      <h2 className="text-center text-4xl font-bold mb-10 text-blue-500">
        <span className="inline-block align-middle bg-white w-16 h-1 mr-3" />
        Skills
        <span className="inline-block align-middle bg-white w-16 h-1 ml-3" />
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {categories.map((category, index) => {
          const isExpanded = expandedCategories[category.title] || false;
          const displayedSkills = isExpanded
            ? category.skills
            : category.skills.slice(0, 5);

          return (
            <motion.div
              key={category.title}
              className="p-5 bg-white dark:bg-gray-800 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.2 }}
            >
              <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-4">
                {category.title}
              </h3>
              <ul className="space-y-3">
                {displayedSkills.map((skill) => (
                  <motion.li
                    key={skill.name}
                    className="flex items-center gap-3 text-lg text-gray-700 dark:text-gray-300"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <span className="text-2xl text-blue-500 dark:text-blue-300">
                      {skill.icon}
                    </span>
                    {skill.name}
                  </motion.li>
                ))}
              </ul>
              {category.skills.length > 5 && (
                <button
                  onClick={() => toggleExpand(category.title)}
                  className="mt-4 text-sm text-blue-500 dark:text-blue-300 hover:underline"
                >
                  {isExpanded ? "Show Less" : "Show More"}
                </button>
              )}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
