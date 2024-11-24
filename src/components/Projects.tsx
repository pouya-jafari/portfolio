"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiMongodb,
  SiNodedotjs,
} from "react-icons/si";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { StaticImageData } from "next/image";
import { FiArrowDownCircle, FiArrowUpCircle } from "react-icons/fi";
import portfolioImage from "@/assets/portfolioImage.png";
import tanjeImage from "@/assets/Tanje.png";

type Project = {
  title: string;
  image?: StaticImageData | string;
  description: string;
  icons: { component: JSX.Element; color: string }[];
  github?: string;
  website?: string;
};

const projects: Project[] = [
  {
    title: "Portfolio Website",
    image: portfolioImage,
    description: "A personal portfolio showcasing my skills and projects.",
    icons: [
      { component: <SiReact />, color: "#61DAFB" },
      { component: <SiNextdotjs />, color: "#000000" },
      { component: <SiTailwindcss />, color: "#06B6D4" },
    ],
    github: "https://github.com/pouya-jafari/portfolio",
    website: "https://pouya-portfolio.com",
  },
  {
    title: "Tanje Takeout Restaurant",
    image: tanjeImage,
    description: "A full-stack app for managing tasks and projects.",
    icons: [
      { component: <SiReact />, color: "#61DAFB" },
      { component: <SiTypescript />, color: "#3178C6" },
      { component: <SiNodedotjs />, color: "#339933" },
      { component: <SiMongodb />, color: "#47A248" },
    ],
    github: "https://github.com/pouya-jafari/tanje-restaurant",
    website: "https://tanje.netlify.app",
  },
  {
    title: "Shamim Bakery",
    description: "A responsive online store with shopping cart functionality.",
    icons: [
      { component: <SiReact />, color: "#61DAFB" },
      { component: <SiTailwindcss />, color: "#06B6D4" },
      { component: <SiNextdotjs />, color: "#000000" },
    ],
    github: "https://github.com/pouya-jafari/ecommerce",
    website: "https://ecommerce-demo.com",
  },
  {
    title: "New Project",
    description: "Another project description goes here.",
    icons: [
      { component: <SiReact />, color: "#61DAFB" },
      { component: <SiMongodb />, color: "#47A248" },
    ],
    github: "https://github.com/pouya-jafari/new-project",
    website: "https://new-project.com",
  },
];

const Projects = () => {
  const [showAll, setShowAll] = useState(false);
  const [activeProject, setActiveProject] = useState<number | null>(null);

  const handleToggle = () => setShowAll((prev) => !prev);

  return (
    <div className="py-20 px-5" id="projects">
      <h2 className="text-center text-4xl font-bold mb-10 text-blue-500">
        <span className="inline-block align-middle bg-white w-16 h-1 mr-3" />
        My Projects
        <span className="inline-block align-middle bg-white w-16 h-1 ml-3" />
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {projects.slice(0, 3).map((project, index) => (
          <motion.div
            key={index}
            className="relative group rounded-lg overflow-hidden shadow-lg bg-white dark:bg-gray-800"
            onMouseEnter={() => setActiveProject(index)}
            onMouseLeave={() => setActiveProject(null)}
            whileHover={{
              y: -10,
              scale: 1.05,
              boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)",
            }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            {project.image ? (
              typeof project.image === "string" ? (
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover"
                />
              ) : (
                <motion.img
                  src={project.image?.src}
                  alt={project.title}
                  className="w-full h-64 object-cover"
                />
              )
            ) : (
              <div className="w-full h-64 bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
                <span className="text-4xl font-bold text-white">
                  {project.title
                    .split(" ")
                    .map((word) => word[0])
                    .join("")}
                </span>
              </div>
            )}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: activeProject === index ? 1 : 0 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 bg-black bg-opacity-80 flex flex-col items-center justify-center text-white p-4 space-y-4"
            >
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <p className="text-sm text-gray-300">{project.description}</p>
              <div className="flex gap-3 text-2xl">
                {project.icons.map((icon, idx) => (
                  <span
                    key={idx}
                    style={{ color: icon.color }}
                    className="text-3xl"
                  >
                    {icon.component}
                  </span>
                ))}
              </div>
              <div className="flex gap-4 mt-4">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg flex items-center"
                  >
                    <FaGithub className="mr-2" /> GitHub
                  </a>
                )}
                {project.website && (
                  <a
                    href={project.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg flex items-center"
                  >
                    <FaExternalLinkAlt className="mr-2" /> Website
                  </a>
                )}
              </div>
            </motion.div>
          </motion.div>
        ))}
        <AnimatePresence>
          {showAll &&
            projects.slice(3).map((project, index) => (
              <motion.div
                key={index + 3}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.4 }}
                className="relative group rounded-lg overflow-hidden shadow-lg bg-white dark:bg-gray-800"
              >
                <motion.img
                  src={
                    typeof project.image === "string"
                      ? project.image
                      : project.image?.src
                  }
                  alt={project.title}
                  className="w-full h-64 object-cover"
                />
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 bg-black bg-opacity-80 flex flex-col items-center justify-center text-white p-4 space-y-4"
                >
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <p className="text-sm text-gray-300">{project.description}</p>
                  <div className="flex gap-3 text-2xl">
                    {project.icons.map((icon, idx) => (
                      <span
                        key={idx}
                        style={{ color: icon.color }}
                        className="text-3xl"
                      >
                        {icon.component}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4 mt-4">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg flex items-center"
                      >
                        <FaGithub className="mr-2" /> GitHub
                      </a>
                    )}
                    {project.website && (
                      <a
                        href={project.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg flex items-center"
                      >
                        <FaExternalLinkAlt className="mr-2" /> Website
                      </a>
                    )}
                  </div>
                </motion.div>
              </motion.div>
            ))}
        </AnimatePresence>
      </div>
      {projects.length > 3 && (
        <div className="text-center mt-10">
          <motion.div
            onClick={handleToggle}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="cursor-pointer text-4xl text-blue-500 inline-flex items-center justify-center"
          >
            {showAll ? <FiArrowUpCircle /> : <FiArrowDownCircle />}
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default Projects;
