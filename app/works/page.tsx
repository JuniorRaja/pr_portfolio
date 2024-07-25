"use client";

import { PinContainer } from "@/components/ui/3d-pin";
//import ImageCarousel from "@/components/ui/ImageCarousel";
import { projects } from "@/data";
import { FaLocationArrow } from "react-icons/fa";
import Image from "next/image";

const Works = () => {
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
        <div className="flex flex-wrap items-center justify-center p-4 gap-10 mt-10 w-full">
          {projects.map(({ id, title, des, img, iconLists, link }) => (
            <div
              key={id}
              className=" sm:h-[41rem] h-[27rem] lg:min-h-[32.5rem] flex flex-wrap items-center 
              justify-center w-[500px] md:w-[20rem] lg:w-[40rem]"
            >
              <PinContainer title={link} href={link}>
                <div
                  className="realtive flex items-center justify-center 
                w-[80vw] md:w-[40vw] h-[25vh] md:h-[40vh] overflow-hidden mb-10"
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
      </section>
    </div>
  );
};

export default Works;
