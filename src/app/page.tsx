import AboutMe from "@/components/AboutMe";
import Avatar from "@/components/Avatar";
import ContactCard from "@/components/ContactCard";
import Contact from "@/components/ContactFooter";
import { FloatingDockDemo } from "@/components/Dock";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <div className="overflow-x-hidden overflow-y-hidden">
      <div className="hidden md:block">
        <Avatar />
      </div>
      <ContactCard />
      <main className="relative dark:bg-black-100 flex flex-col items-center justify-center mx-auto sm:px-10 px-5">
        <div className="max-w-7xl w-full md:mb-16 max-sm:mb-2">
          <Hero />
          <AboutMe />
          <Skills />
          <Projects />
          <Contact />
        </div>
        <FloatingDockDemo />
      </main>
    </div>
  );
}
