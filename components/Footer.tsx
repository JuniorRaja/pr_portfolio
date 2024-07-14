"use client";
import { socialMedia, footerLinks } from "@/data";
import Image from "next/image";
import Waves from "./ui/Waves";
import footerLogo from "@/public/prlogo-footerx.png";
import PRLogo from "@/public/PRLogoW.png";

const Footer = () => {
  return (
    <footer className="w-full md:mb-5 lg:mb-[75px]" id="contact">
      <div className="w-full absolute left-0 bottom-0">
        <Waves />
      </div>

      <div className="text-foreground py-6 border-t border-t-purple">
        <div className="text-muted-foreground text-center -mt-12">
          <Image
            src={PRLogo.src}
            height={60}
            width={60}
            alt="logo"
            className="inline bg-slate-950"
          />
        </div>

        <div className=" mx-auto flex flex-col-reverse md:flex-row text-center justify-center gap-3 min-w-full">
          <div className="m-2 pt-8 h-auto flex items-center justify-center">
            <Image
              src={footerLogo}
              height={250}
              width={250}
              alt="logo"
              className="inline"
            />
          </div>
          <div className="z-10">
            <div className="my-6">
              <ul className="flex justify-center flex-wrap gap-y-2 space-x-6 text-sm font-medium lg:text-lg">
                {footerLinks.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="hover:text-primary">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
              <ul className="flex justify-center space-x-6 text-sm font-medium lg:text-lg mt-4">
                <li>
                  <a href="#" className="hover:text-primary">
                    Terms
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary">
                    Privacy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary">
                    Get my CV
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex items-center justify-center md:gap-3 gap-6">
              {socialMedia.map((prof) => (
                <div
                  key={prof.id}
                  className="w-10 h-10 md:w-12 md:h-12 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
                >
                  <Image
                    src={prof.img}
                    alt="Social Media"
                    height={20}
                    width={20}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
