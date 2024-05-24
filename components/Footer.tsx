import React from "react";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa";
import { socialMedia } from "@/data";
import { div } from "three/examples/jsm/nodes/Nodes.js";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="w-full pb-20 mb-[75px] md:mb-5" id="contact">
      <div className="w-full absolute left-0 bottom-0 min-h-96">
        <Image
          src="/footer-grid.svg"
          alt="gridbg"
          width={100}
          height={100}
          className="w-full h-full opacity-50"
        />
      </div>

      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Ready to take <span className="text-purple">your</span> digital
          presence to next level ?
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Reach out to me today and let&apos;s discuss how I can help you
          achieve your goals.
        </p>
        <a href="mailto:imprasannarajendran@gmail.com">
          <MagicButton
            title="Get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>

      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-small md:font-normal font-light pb-10">
          Copyright © 2024 PR
        </p>

        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((prof) => (
            <div
              key={prof.id}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <Image src={prof.img} alt="Social Media" height={20} width={20} />
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
