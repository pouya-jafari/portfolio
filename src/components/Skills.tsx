"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { categories } from "@/data/data";

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
