import AboutMe from "@/components/Aboutme";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import { FloatingDock } from "@/components/Dock";

export default function Home() {
  return (
    <div className="overflow-x-hidden overflow-y-hidden">
      <main className="relative dark:bg-black-100 flex flex-col items-center justify-center mx-auto sm:px-10 px-5">
        <div className="max-w-7xl w-full md:mb-16 max-sm:mb-2">
          <Hero />
          <AboutMe />
          <Skills />
          <Projects />
          <Contact />
        </div>
        <FloatingDock />
      </main>
    </div>
  );
}
