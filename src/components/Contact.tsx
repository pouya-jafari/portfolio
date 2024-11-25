"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative rounded-lg bg-gray-100 dark:bg-gray-900 py-20 px-5 lg:px-20"
    >
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2
          className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Get in Touch
        </motion.h2>
        <motion.p
          className="text-lg text-gray-700 dark:text-gray-300 mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Feel free to reach out via email or connect with me on LinkedIn and
          GitHub.
        </motion.p>
        <motion.div
          className="flex flex-wrap justify-center gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <a
            href="mailto:pouya-jafari@outlook.com"
            className="flex items-center gap-2 px-6 py-3 rounded-lg bg-blue-500 hover:bg-blue-800 text-white shadow-md transition duration-300 hover:scale-110 "
          >
            <FaEnvelope size={20} /> Email Me
          </a>

          <a
            href="https://www.linkedin.com/in/pouya-jafari/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 rounded-lg bg-blue-700 hover:bg-blue-950 text-white shadow-md transition duration-300 hover:scale-110"
          >
            <FaLinkedin size={20} /> LinkedIn
          </a>

          <a
            href="https://github.com/pouya-jafari"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 rounded-lg bg-gray-800 hover:bg-gray-900 text-white shadow-md transition duration-300 hover:scale-110"
          >
            <FaGithub size={20} /> GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
