"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import pouyaImg from "@/assets/pouya.png";

const Avatar = () => {
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const textElement = textRef.current;
    const words = textElement?.querySelectorAll(".word");

    if (words) {
      gsap.set(words, { opacity: 0, y: -20 });
    }

    const handleMouseEnter = () => {
      if (words) {
        const tl = gsap.timeline();
        words.forEach((word, index) => {
          tl.to(
            word,
            {
              opacity: 1,
              y: 0,
              duration: 0.4,
              ease: "power2.out",
            },
            index * 0.2
          );
        });
      }
    };

    const handleMouseLeave = () => {
      if (words) {
        gsap.to(words, {
          opacity: 0,
          y: -20,
          duration: 0.4,
          ease: "power2.in",
          stagger: 0.2,
        });
      }
    };

    const avatarElement = document.querySelector(".avatar-container");
    if (avatarElement) {
      avatarElement.addEventListener("mouseenter", handleMouseEnter);
      avatarElement.addEventListener("mouseleave", handleMouseLeave);
    }

    return () => {
      if (avatarElement) {
        avatarElement.removeEventListener("mouseenter", handleMouseEnter);
        avatarElement.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, []);

  return (
    <div className="avatar-container fixed top-4 left-4 flex flex-col items-center z-50">
      <div className="w-16 h-16 rounded-full overflow-hidden shadow-md">
        <Image
          src={pouyaImg}
          alt="Pouya Jafari"
          width={64}
          height={64}
          className="object-cover w-full h-full"
        />
      </div>
      <div
        ref={textRef}
        className="mt-2 text-white text-sm font-medium flex gap-1"
      >
        {["Pouya", "Jafari"].map((word, index) => (
          <span key={index} className="word">
            {word}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Avatar;
