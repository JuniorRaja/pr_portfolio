"use client";

import { useState, useEffect } from "react";
import { Spotlight } from "@/components/ui/Spotlight";
import Image from "next/image";
import AIAvatar from "@/public/AIAvatar-4.png";
import { FlipWords } from "@/components/ui/flip-words";
import { socialMedia, techStack, words, interests } from "@/data";
import ShimmerButton from "@/components/ui/ShimmerButton";
import TravelCards from "@/components/ui/travel-cards";

const About = () => {
  const [age, setAge] = useState<string>("");
  const [experience, setExperience] = useState<string>("");

  useEffect(() => {
    const interval = setInterval(() => {
      const birthDate: Date = new Date("1998-06-11");
      const currentDate: Date = new Date();

      // Calculate total difference in milliseconds
      const diffInMs: number = Number(
        currentDate.getTime() - birthDate.getTime()
      ); // Corrected syntax and method to get time in milliseconds
      // Average milliseconds per year (365.25 days per year accounts for leap years)
      const msPerYear: number = 365.25 * 24 * 60 * 60 * 1000;
      // Calculate years as a decimal
      const yearsDecimal: number = diffInMs / msPerYear;
      // Format years with 6 decimal places
      const formattedAge: string = yearsDecimal.toFixed(9);

      // Extract the integer and decimal parts
      const [years, decimal] = formattedAge.split(".");
      // Format the output as YY with 6-digit decimal
      const output: string = `${years.slice(-2)}.${decimal}`;

      setAge(output);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      const birthDate: Date = new Date("2019-06-05");
      const currentDate: Date = new Date();

      const diffInMs: number = Number(
        currentDate.getTime() - birthDate.getTime()
      );
      const msPerYear: number = 365.25 * 24 * 60 * 60 * 1000;
      const yearsDecimal: number = diffInMs / msPerYear;
      const formattedAge: string = yearsDecimal.toFixed(9);
      const [years, decimal] = formattedAge.split(".");
      const output: string = `${years.slice(-2)}.${decimal}`;

      setExperience(output);
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="max-w-7xl w-full">
      <section className="w-full py-20 min-h-screen pt-36">
        {/* Header Div */}
        <div className="w-full h-[auto] mb-5">
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
        <div className="h-auto flex  flex-col-reverse md:flex-row items-center justify-between mx-2 ">
          <div className="md:mr-4 md:w-[50%]">
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
              <div className="flex items-center justify-center gap-2">
                <div>
                  <ShimmerButton title="Work with me" />
                </div>
                <div>
                  <ShimmerButton title="Say Hi" />
                </div>
              </div>
            </div>
          </div>
          <div className="ml-4 h-full md:w-[50%] flex items-center justify-center">
            <div className="">
              <Image
                src={AIAvatar}
                height={100}
                width={100}
                alt="Banner Photo"
                className="w-[13rem] h-[13rem] md:w-[20rem] md:h-[20rem] rounded-full object-fill"
              />
            </div>
          </div>
        </div>

        <div className="text-foreground py-12 mx-auto">
          <div className="text-center mb-12">
            {/* <h1 className="text-5xl font-extrabold mb-6">Greetings!</h1> */}
            <p className="text-xl mb-6">
              Hi, my name is <span className="text-purple">Prasanna</span> and I
              am a{" "}
              <span className="font-bold text-purple">jack of all trades</span>{" "}
              based in Chennai, India.
            </p>
            <p className="text-muted-foreground mb-6">
              I am a creative professional with a passion for design and
              technology. I have a strong background in graphic design, web
              development, and photography. I am also a full-stack developer
              with experience in building web applications and websites.
            </p>
            <p className="text-muted-foreground">
              Other than development, I am also a photographer and a travel
              enthusiast.
            </p>
          </div>
          <div>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">My Age</h2>
              <p className="text-4xl font-extrabold mb-2">{age}</p>
              <p className="text-muted-foreground mb-6">Years</p>
            </div>
            {/* <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">My Experience</h2>
              <p className="text-4xl font-extrabold mb-2">{experience}</p>
              <p className="text-muted-foreground mb-6">Years</p>
            </div> */}
          </div>
          <div className="text-center mb-12" id="skills">
            <h2 className="text-4xl font-bold mb-6">
              I can <span className="text-purple">work</span> with
            </h2>
            <div className="flex justify-center flex-wrap w-[100%] gap-2 my-8">
              {techStack.map((tech) => (
                <div
                  key={tech.label}
                  className="mr-2 mb-2 p-2 rounded-full hover:-translate-y-1 bg-white bg-opacity-10 border transition hover:border-white"
                >
                  <Image
                    src={tech.img.src}
                    alt={tech.label}
                    height={100}
                    width={100}
                    className="rounded-full shadow-lg w-12 h-12 object-cover" // Adjust size as needed
                  />
                </div>
              ))}
            </div>
            <h2 className="text-4xl font-bold mb-6">
              Things that <span className="text-purple">excite</span> me
            </h2>
            <div
              className="flex flex-wrap justify-center space-x-2"
              id="interests"
            >
              {interests.map((interest) => (
                <span
                  key={interest}
                  className="bg-secondary text-secondary-foreground py-2 px-4 rounded-full mb-2 shadow-lg"
                >
                  {interest}
                </span>
              ))}
            </div>
          </div>

          {/* <div className="text-center">
            <div className="flex justify-center space-x-12">
              <div>
                <p className="text-5xl font-extrabold text-red-500">+1000</p>
                <p className="text-muted-foreground">PROJECTS</p>
              </div>
              <div>
                <p className="text-5xl font-extrabold text-red-500">+10000</p>
                <p className="text-muted-foreground">DESIGN CREATIVES</p>
              </div>
              <div>
                <p className="text-5xl font-extrabold text-red-500">+100</p>
                <p className="text-muted-foreground">BRANDS</p>
              </div>
            </div>
          </div> */}

          <TravelCards />
        </div>
      </section>
    </div>
  );
};

export default About;
