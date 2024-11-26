import { FaLocationArrow } from "react-icons/fa";
import MagicButton from "./ui/HeroButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerator";
import { FlipWords } from "./ui/FlipWord";
import { words } from "@/data/data";
const Hero = () => {
  return (
    <div className="pb-20 pt-36" id="home">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight className="top-10 left-full h-[80vh] w-[50vw]" fill="blue" />
        <Spotlight
          className="top-30 left-full h-[80vh] w-[50vw]"
          fill="green"
        />
        <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="blue" />
      </div>
      <div className=" w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.01] bg-grid-black/[0.2] flex items-center justify-center relative">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
        <div className="flex justify-center relative my-20 z-10">
          <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
            <TextGenerateEffect
              words="Pouya Jafari"
              className="text-center max-sm:text-[40px] text-[80px] md:text-5xl lg:text-6xl"
            />
            <div className="text-4xl mx-auto font-normal text-neutral-600 dark:text-neutral-400 mb-4">
              <FlipWords words={words} />
            </div>
            <a href="#resume">
              <MagicButton
                title="See my Resume"
                icon={<FaLocationArrow />}
                position="right"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
