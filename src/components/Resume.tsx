"use client";

import React from "react";
import { motion } from "framer-motion";

const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, staggerChildren: 0.2 },
  },
};

import { resumeData } from "@/data/data";

const Resume = () => {
  return (
    <div id="resume" className="pt-20 ">
      <h2 className="text-center text-4xl font-bold mb-10 text-blue-500">
        <span className="inline-block align-middle bg-white w-16 h-1 mr-3" />
        Resume{" "}
        <span className="inline-block align-middle bg-white w-16 h-1 ml-3" />
      </h2>
      <div className="bg-gradient-to-b from-gray-900 to-black text-white py-10 min-h-screen mt-10 rounded-lg">
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
