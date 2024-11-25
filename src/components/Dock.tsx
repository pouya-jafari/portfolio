import React from "react";
import { FloatingDockComponent } from "@/components/ui/FloatingDock";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconHome,
  IconNewSection,
  IconTerminal2,
  IconNotes,
} from "@tabler/icons-react";

export function FloatingDock() {
  const links = [
    {
      title: "Home",
      icon: (
        <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#home",
    },

    {
      title: "Projects",
      icon: (
        <IconTerminal2 className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#projects",
    },
    {
      title: "Skills",
      icon: (
        <IconNewSection className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#skills",
    },
    {
      title: "Resume",
      icon: (
        <IconNotes className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "LinkedIn",
      icon: (
        <IconBrandLinkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://www.linkedin.com/in/pouya-jafari/",
    },
    {
      title: "GitHub",
      icon: (
        <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://github.com/pouya-jafari/",
    },
  ];
  return (
    <div className="fixed bottom-6 right-6 z-100  max-sm:mb-20 md:bottom-4 md:right-1/2 md:transform md:translate-x-1/2">
      <FloatingDockComponent mobileClassName="translate-y-20" items={links} />
    </div>
  );
}
