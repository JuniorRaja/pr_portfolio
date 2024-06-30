import { FaLocationArrow } from "react-icons/fa";
import MagicButton from "./ui/MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import { socialMedia } from "@/data";
import Image from "next/image";
const Hero = () => {
  return (
    <div className="pb-20 pt-36">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="top-10 left-full h-[80vh] w-[50vw]"
          fill="purple"
        />
        <Spotlight className="top-28 left-80 h-[80vh] w-[50vh]" fill="blue" />
      </div>
      <div className="h-screen w-full dark:bg-slate-950 bg-white dark:bg-grid-white/[0.1] bg-grid-black/[0.2] flex items-center justify-center absolute top-0 left-0 after:content-[''] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[550px] after:bg-gradient-to-b after:from-transparent after:to-slate-950 overflow-hidden">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-slate-950 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
        <p className="text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8"></p>
      </div>

      <div className="flex justify-center relative my-36 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[70vw] flex flex-col items-center justify-center ">
          <p className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-[80] mb-5">
            Hi, I&apos;m Prasanna Rajedran
          </p>

          <TextGenerateEffect
            className="text-center text-[40px] md:text-6xl lg:text-7xl"
            words="Passion Beyond Responsibilities"
          />
          <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl mt-5">
            Manager by day. Developer by Heart
          </p>

          <div className="flex items-center md:gap-3 gap-6 m-10">
            {socialMedia.map((prof) => (
              <a
                key={prof.id}
                href={prof.url}
                target="_blank"
                className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
              >
                <Image
                  src={prof.img}
                  alt="Social Media"
                  height={20}
                  width={20}
                />
              </a>
            ))}
          </div>

          <a href="#about">
            <MagicButton
              title={"Know more"}
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
