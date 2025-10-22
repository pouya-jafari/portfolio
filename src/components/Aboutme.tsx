"use client";
import { motion } from "framer-motion";
import pouyaImg from "@/assets/pouya-bg-2.png";
const AboutMe = () => {
    return (
        <section
            id="about"
            className="relative rounded-lg bg-gray-100 dark:bg-gray-900 py-20 px-5 lg:px-20"
        >
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                <motion.div
                    className="space-y-6"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    <h2 className="text-4xl font-bold text-blue-600 dark:text-blue-400">
                        About Me
                    </h2>
                    <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                        Hi, I&apos;m <strong>Pouya Jafari</strong>, a passionate
                        Full-Stack Web Developer with a knack for crafting
                        interactive and responsive web applications. I
                        specialize in modern web technologies like React,
                        Next.js, Tailwind CSS, and Node.js.
                    </p>
                    <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                        My journey started with a love for problem-solving and a
                        curiosity for how technology shapes our world. Over
                        time, I have honed my skills to create efficient,
                        scalable, and user-friendly solutions.
                    </p>
                    <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                        When I&apos;m not coding, you can find me exploring new
                        technologies, experimenting with design, or contributing
                        to open-source projects.
                    </p>
                </motion.div>

                <motion.div
                    className="relative w-full h-[450px] rounded-lg overflow-hidden shadow-lg"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                >
                    <img
                        src={pouyaImg.src}
                        alt="Pouya Jafari"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900/70" />
                    <div className="absolute bottom-5 left-5 text-white">
                        <h3 className="text-2xl font-semibold">Pouya Jafari</h3>
                        <p className="text-sm">Full-Stack Web Developer</p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default AboutMe;
