import { projects } from "@/data";
import React from "react";
import { div } from "three/examples/jsm/nodes/Nodes.js";
import { PinContainer } from "./ui/3d-pin";
import { FaLocationArrow } from "react-icons/fa";
import Image from "next/image";

const RecentProjects = () => {
  return (
    <div id="projects" className="py-20">
      <h1 className="heading">
        A small selected of <span className="text-purple">Recent Project</span>
      </h1>

      <div className="flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-4 mt-10">
        {projects.map(({ id, title, des, img, iconLists, link }) => (
          <div
            key={id}
            className="sm:h-[41rem] h-[27rem] lg:min-h-[32.5rem] flex items-center justify-center sm:w-[570px] w-[80vw]"
          >
            <PinContainer title={link} href={link}>
              <div className="realtive flex items-center justify-center sm:w-[570px] w-[80vw] sm:h-[40vh] h-30 overflow-hidden h-[20vh] mb-10">
                <div className="relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#13162d]">
                  <Image src="/bg.png" alt="bg-img" width={500} height={275} />
                </div>
                <Image
                  src={img}
                  alt={title}
                  className="z-10 absolute top-0"
                  width={555}
                  height={150}
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
    </div>
  );
};

export default RecentProjects;
