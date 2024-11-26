import React from "react";
import { FloatingDockComponent } from "@/components/ui/FloatingDock";
import { links } from "@/data/data";

export function FloatingDock() {
  return (
    <div className="fixed bottom-6 right-6 z-100  max-sm:mb-20 md:bottom-4 md:right-1/2 md:transform md:translate-x-1/2">
      <FloatingDockComponent mobileClassName="translate-y-20" items={links} />
    </div>
  );
}
