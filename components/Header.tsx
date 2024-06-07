"use client";

// import { useLocation } from "react-router-dom";
import { useState } from "react";
import { navMenuItems } from "@/data";
import brainwave from "../public/brainwave.svg";
import background from "../public/background.jpg";
import MenuSvg from "./ui/MenuSvg";
import Image from "next/image";

const Header = () => {
  //   const pathName = useLocation();
  const [openNav, setOpenNav] = useState<boolean>(false);
  const toggleNav = () => {
    if (openNav) {
      setOpenNav(false);
    } else {
      setOpenNav(true);
    }
  };

  const handleClick = () => {
    setOpenNav(false);
  };

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 border-b border-n-6 lg:bg-n-8/90 lg:backdrop-blur-sm 
    ${openNav ? "bg-n-8" : "bg-n-8/90 backdrop-blur-sm"}
    `}
    >
      <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
        <a>
          <img
            src={brainwave}
            width={190}
            height={40}
            alt="Brainwave"
            className="block w-[12rem] xl:mr-8"
            // href="#hero"
          />
        </a>

        <nav
          className={`fixed top-[5rem] left-0 right-0 bottom-0 bg-n-8 lg:static lg:flex
        lg:mx-auto lg:bg-transparent ${openNav ? "flex" : "hidden"}`}
        >
          <div className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row">
            {navMenuItems.map((item) => (
              <a
                key={item.id}
                href={item.url}
                onClick={handleClick}
                className={`block relative font-code text-2xl uppercase text-white transition-colors hover:text-color-1 ${
                  item.onlyMobile ? "lg:hidden" : ""
                } px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold 
                lg:leading-5 lg:hover:text-white xl:px-12 z-2 lg:text-white`}
              >
                {/* above nav class wtih useLocation $ 
                {item.url === pathName.hash
                  ? "z-2 lg:text-white"
                  : "lg:text-white/50"} */}
                {item.title}
              </a>
            ))}
          </div>

          {/* <HamburgerMenu /> */}
          <div className="absolute inset-0 pointer-events-none lg:hidden">
            <div className="absolute inset-0 opacity-[.03]">
              <Image
                className="w-full h-full object-cover"
                src={background}
                width={688}
                height={953}
                alt="Background"
              />
            </div>

            {/* add these components later
            
            <Rings />

            <SideLines />

            <BackgroundCircles /> */}
          </div>
        </nav>
        <a
          href="#signup"
          className="button hidden mr-8 text-white/50 transition-colors hover:text-white lg:block"
        >
          New Account
        </a>

        <button className="ml-auto lg:hidden px-3" onClick={toggleNav}>
          <MenuSvg openNavigation={openNav} />
        </button>
      </div>
    </div>
  );
};

export default Header;
