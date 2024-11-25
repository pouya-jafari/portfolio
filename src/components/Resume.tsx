"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiMongodb,
  SiRedux,
  SiNodedotjs,
  SiGraphql,
  SiDeno,
  SiJavascript,
} from "react-icons/si";

const resumeData = {
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

const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, staggerChildren: 0.2 },
  },
};

const Resume = () => {
  return (
    <div id="resume" className="pt-20">
      <h2 className="text-center text-4xl font-bold mb-10 text-blue-500">
        <span className="inline-block align-middle bg-white w-16 h-1 mr-3" />
        Resume{" "}
        <span className="inline-block align-middle bg-white w-16 h-1 ml-3" />
      </h2>
      <div className="bg-gradient-to-b from-gray-900 to-black text-white py-10 min-h-screen mt-10">
        <div className="max-w-6xl mx-auto px-6">
          <section>
            <motion.h2
              initial="hidden"
              animate="visible"
              variants={sectionVariants}
              className="text-3xl font-semibold mb-4 relative"
            >
              Work Experience
              <div className="absolute left-0 bottom-0 w-full h-1 bg-white"></div>
            </motion.h2>
            {resumeData.workExperience.map((job, index) => (
              <motion.div
                key={index}
                initial="hidden"
                animate="visible"
                variants={sectionVariants}
                className="mb-8"
              >
                <h3 className="text-2xl font-bold">{job.title}</h3>
                <p className="text-sm text-gray-400">
                  {job.location} | {job.duration}
                </p>
                <p className="text-gray-300 mt-2">{job.description}</p>
                <div className="flex gap-2 mt-3 flex-wrap">
                  {job.technologies.map((tech, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-1 bg-gray-800 px-3 py-1 rounded-full text-sm"
                    >
                      {tech.icon}
                      <span>{tech.name}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </section>

          <section>
            <motion.h2
              initial="hidden"
              animate="visible"
              variants={sectionVariants}
              className="text-3xl font-semibold mb-4 relative"
            >
              Education
              <div className="absolute left-0 bottom-0 w-full h-1 bg-white"></div>
            </motion.h2>
            {resumeData.education.map((edu, index) => (
              <motion.div
                key={index}
                initial="hidden"
                animate="visible"
                variants={sectionVariants}
                className="mb-6"
              >
                <h3 className="text-2xl font-bold">{edu.institution}</h3>
                <p className="text-sm text-gray-400">{edu.degree}</p>
                <p className="text-gray-300">{edu.year}</p>
              </motion.div>
            ))}
          </section>

          <section>
            <motion.h2
              initial="hidden"
              animate="visible"
              variants={sectionVariants}
              className="text-3xl font-semibold mb-4 relative"
            >
              Certifications
              <div className="absolute left-0 bottom-0 w-full h-1 bg-white"></div>
            </motion.h2>
            {resumeData.certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial="hidden"
                animate="visible"
                variants={sectionVariants}
                className="mb-6"
              >
                <h3 className="text-2xl font-bold">{cert.title}</h3>
                <p className="text-sm text-gray-400">
                  {cert.provider} | {cert.year}
                </p>
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-4 py-2 mt-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-transform transform hover:scale-105"
                >
                  View Certificate
                </a>
                <div className="flex gap-2 mt-3 flex-wrap">
                  {cert.technologies.map((tech, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-1 bg-gray-800 px-3 py-1 rounded-full text-sm"
                    >
                      {tech.icon}
                      <span>{tech.name}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </section>
        </div>
      </div>
    </div>
  );
};

export default Resume;
