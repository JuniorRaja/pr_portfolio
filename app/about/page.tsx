"use client";

import { Spotlight } from "@/components/ui/Spotlight";
import Image from "next/image";
import pr_banner from "/public/pr_banner.webp";
import { FlipWords } from "@/components/ui/flip-words";
import { socialMedia } from "@/data";
import ShimmerButton from "@/components/ui/ShimmerButton";

const About = () => {
  const words = [
    "Deputy\u00A0Proj.\u00A0Manager",
    "Full\u00A0Stack\u00A0Developer",
    "Photographer",
  ];

  return (
    <div className="max-w-7xl w-full">
      <section className="w-full py-20 h-screen pt-36">
        {/* Header Div */}
        <div className="w-full h-[20vh]">
          <p className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-[80] mb-5">
            Greetings to you
          </p>

          <Spotlight
            className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
            fill="white"
          />
          <Spotlight
            className="top-25 left-full h-[80vh] w-[50vw]"
            fill="purple"
          />
          <Spotlight className="top-28 left-80 h-[80vh] w-[50vh]" fill="blue" />

          <h1 className="heading">
            About <span className="text-purple">PR</span>
          </h1>
        </div>
        {/* body div */}
        <div className="h-[30vh] flex flex-row items-center justify-between mx-2 ">
          <div className="mr-4 w-[50%]">
            <div>
              <div className="flex justify-center items-center">
                <FlipWords words={words} /> <br />
              </div>
              <div>
                <h1 className="heading">
                  <span className="text-purple">Prasanna</span> Rajendran
                </h1>
              </div>
              {/* Additional Information */}
              <div></div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center md:gap-3 gap-6 my-8 mx-10">
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
              <div>
                <a href="#about">
                  <ShimmerButton title="Work with me" />
                </a>
              </div>
            </div>
          </div>
          <div className="ml-4 h-full w-[50%] flex items-center justify-center">
            <div className="">
              <Image
                src={pr_banner}
                height={100}
                width={100}
                alt="Banner Photo"
                className="w-[20rem] h-[20rem] rounded-[20px] object-fill"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
