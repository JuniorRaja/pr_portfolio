"use client";

import { useState, useEffect } from "react";
import { PinContainer } from "@/components/ui/3d-pin";
import { projects, roadmap } from "@/data";
import { FaLocationArrow } from "react-icons/fa";
import Image from "next/image";
import grid from "/public/grid.png";
import Tagline from "@/components/ui/Tagline";

const Works = () => {
  const [experience, setExperience] = useState<string>("");

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
        <h1 className="text-4xl font-bold text-center mb-4 text-white">
          My <span className="text-purple">Works</span>
        </h1>
        <p className="text-center text-muted-foreground mb-8 text-white">
          Learning is an obession. Below are some of the projects that helped me
          learn and experiment. I have wide range of expericence in BackEnd
          because of my job role and nature. So, I primarily wanted to learn and
          explore the modern JS world and faster applications.
        </p>

        {/* Projects */}
        <div className="flex flex-wrap items-center justify-center p-4 mt-10 w-full">
          {projects.map(({ id, title, des, img, iconLists, link }) => (
            <div
              key={id}
              className=" sm:h-[41rem] h-[27rem] lg:min-h-[32.5rem] flex flex-wrap items-center 
              justify-center w-[500px] md:w-[40rem] lg:w-[37rem]"
            >
              <PinContainer title={link} href={link}>
                <div
                  className="realtive flex items-center justify-center 
                w-[80vw] md:w-[40vw] lg:w-[27vw] h-[25vh] md:h-[40vh] overflow-hidden mb-10"
                >
                  <div className="relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#13162d]">
                    <Image
                      src="/bg.png"
                      alt="bg-img"
                      width={500}
                      height={275}
                    />
                  </div>
                  <Image
                    src={img}
                    alt={title}
                    className="absolute w-[95%] h-[55%] md:h-[60%] object-contain md:object-cover"
                    width={550}
                    height={275}
                  />
                </div>
                <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                  {title}
                </h1>

                <p className="lg:text-1 lg:font-normal font-light text-sm line-clamp-1">
                  {des}
                </p>

                <div className="flex items-center justify-between mt-7 mb-3">
                  <div className="flex items-center">
                    {iconLists.map((icon, idx) => (
                      <div
                        key={icon}
                        className="border border-white/[0.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                        style={{ transform: `translateX(-${5 * idx * 2} px)` }}
                      >
                        <Image
                          src={icon}
                          alt={icon}
                          className="p-2"
                          width={40}
                          height={40}
                        />
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-center">
                    <p className="flex lg:text-xl md:text-xs text-sm text-purple">
                      Check Live Site
                    </p>
                    <FaLocationArrow className="ms-3" color="#CBACF9" />
                  </div>
                </div>
              </PinContainer>
            </div>
          ))}
        </div>

        {/* Career */}
        <h2 className="text-4xl text-center font-bold my-10">
          My <span className="text-purple">Career</span>
        </h2>
        <p className="text-center text-muted-foreground mb-8 text-white">
          Since my graduation I have been working in a FinTech Company involved
          in a core Non-Banking Financial Solution product. Here, I began from
          zero and now I am leading the product development team and learning
          new things everyday.
        </p>
        <div className="text-center mb-12">
          <p className="text-4xl font-extrabold mb-2">{experience}</p>
          <p className="text-muted-foreground mb-6">
            Years of Professional Experience
          </p>
        </div>
        <div className="relative grid gap-10 md:gap-4 md:grid-cols-2 md:pb-[7rem]">
          {roadmap.map((item, idx) => {
            //const status = item.status === "done" ? "Done" : "In-Progress";

            return (
              <div
                key={item.id}
                className={`md:flex even:md:translate-y-[8rem] p-0.25 rounded-[2.5rem] 
                    ${item.colorful ? "bg-conic-gradient" : "bg-n-6"}`}
              >
                <div
                  className="relative p-8 bg-n-8 rounded-[2rem] overflow-hidden xl:p-15 
                  hover:-translate-y-1 bg-white bg-opacity-10 border transition hover:border-white"
                >
                  <div className="absolute top-0 left-0 max-w-full z-10">
                    <Image
                      className="w-full"
                      width={150}
                      height={150}
                      src={grid.src}
                      alt="Grid"
                    />
                  </div>

                  <div className="relative z-1">
                    <div className="flex items-center justify-between max-w-[27rem] mb-8 md:mb-20">
                      <Tagline className="text-sm">{item.date}</Tagline>

                      <div className="flex items-center px-4 py-1 bg-n-1 rouned text-n-8">
                        {/* <img
                          src={item.status === "done" ? check2 : loading}
                          alt={status}
                          width={16}
                          height={16}
                          className="mr-2.5"
                        /> */}
                        <div className="tagline text-sm">{item.status}</div>
                      </div>
                    </div>

                    <div className="mb-10 -my-10 -mx-15">
                      {/* <img
                          src={item.imageUrl}
                          className="w-full"
                          width={630}
                          height={420}
                          alt={item.title}
                        /> */}
                    </div>
                    <h4 className="h-4 mb-4 font-bold">{item.title}</h4>
                    <p className="body-2 text-n-4">{item.text}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Works;
