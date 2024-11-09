"use client";

import { useState, useEffect } from "react";
import { Spotlight } from "@/components/ui/Spotlight";
import Image from "next/image";
import AIAvatar from "@/public/AIAvatar-5.png";
import { FlipWords } from "@/components/ui/flip-words";
import { socialMedia, techStack, words, interests } from "@/data";
import ShimmerButton from "@/components/ui/ShimmerButton";
import TravelCards from "@/components/ui/travel-cards";
import SectionHeader from "@/components/layout/SectionHeader";

const About = () => {
  const [age, setAge] = useState<string>("");

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
    }, 10);

    return () => clearInterval(interval);
  }, []);

  const handleClick = () => {
    window.location.href = "/contact";
  };

  return (
    <div className="max-w-7xl w-full">
      <section className="w-full py-20 min-h-screen mt-5 md:pt-36">
        {/* Header Div */}
        <SectionHeader words={["About", "PR"]} tagline="Greeting to you" />
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
                  <ShimmerButton title="Work with me" onClickFn={handleClick} />
                </div>
                <div>
                  <ShimmerButton title="Say Hi" onClickFn={handleClick} />
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
                className="w-[10rem] h-[13rem] md:w-[17rem] md:h-[20rem] rounded-full object-fill"
              />
            </div>
          </div>
        </div>

        <div className="text-foreground py-12 mx-auto">
          <div className="text-center mb-12 w-full lg:w-[55%] mx-auto">
            {/* <h1 className="text-5xl font-extrabold mb-6">Greetings!</h1> */}
            <p className="text-xl mb-6">
              Hi, I&apos;m <span className="text-purple">Prasanna</span>,
              versatile & dynamic{" "}
              {/* <span className="font-bold text-purple">jack of all trades</span>{" "} */}
              CS enthusiast based in Chennai, India.
            </p>
            <p className="text-muted-foreground mb-6">
              With expertise in leading teams, web development, design, and
              photography, I blend technology and creativity to craft engaging
              and industry standard digital experiences.
            </p>
            <p className="text-muted-foreground">
              As a full-stack developer and passionate traveler, I bring a
              unique perspective to every project. Let&apos;s build something
              extraordinary together.
            </p>
          </div>
          <div>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">My Age</h2>
              <p className="font-sans text-4xl font-extrabold mb-2">{age}</p>
              <p className="text-muted-foreground mb-6">Years</p>
            </div>
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

          <div id="travel">
            <TravelCards />
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
