"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

const ContactCard = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleCard = () => setIsExpanded((prev) => !prev);

  return (
    <motion.div
      className="fixed top-4 right-4 z-50 shadow-md bg-white dark:bg-gray-800 rounded-lg p-4 cursor-pointer hidden md:block"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      whileHover={{ scale: 1.05 }}
      onClick={toggleCard}
    >
      {!isExpanded ? (
        <div className="flex items-center space-x-2">
          <div className="text-blue-500">
            <FaEnvelope size={20} />
          </div>
          <span className="font-medium text-gray-700 dark:text-gray-300">
            Contact Me
          </span>
        </div>
      ) : (
        <motion.div
          className="space-y-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex items-center space-x-2">
            <FaEnvelope className="text-blue-500" />
            <a
              href="mailto:pouya-jafari@outlook.com"
              className="text-gray-700 dark:text-gray-300 hover:underline"
            >
              pouya-jafari@outlook.com
            </a>
          </div>

          <div className="flex items-center space-x-2">
            <FaLinkedin className="text-blue-700" />
            <a
              href="https://www.linkedin.com/in/pouya-jafari/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 dark:text-gray-300 hover:underline"
            >
              LinkedIn
            </a>
          </div>
          <div className="flex items-center space-x-2">
            <FaGithub className="text-gray-900 dark:text-gray-300" />
            <a
              href="https://github.com/pouya-jafari"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 dark:text-gray-300 hover:underline"
            >
              GitHub
            </a>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default ContactCard;
