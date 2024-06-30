"use client";

// import { useLocation } from "react-router-dom";
import { useState } from "react";
import { navMenuItems } from "@/data";
import PRLogoW from "../public/PRLogoW.png";
import MenuSvg from "./ui/MenuSvg";
import Image from "next/image";
import Link from "next/link";

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
      // Top navigation bar container with dynamic classes for styling
    >
      <div
        className={`flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4 ${
          openNav ? "bg-slate-950 " : ""
        }`}
        // Container for logo, navigation, and additional buttons
      >
        <Link href="/">
          <img
            src={PRLogoW.src}
            width={50}
            height={50}
            alt="PRLogoW"
            className="block w-[2.5rem] xl:mr-8"
            // Logo image
          />
        </Link>

        <nav
          className={`fixed top-[4rem] left-0 right-0 bottom-0 bg-n-8 lg:static lg:flex
        lg:mx-auto z-auto lg:bg-transparent ${openNav ? "flex" : "hidden"}`}
          // Navigation menu, shown or hidden based on `openNav` state
        >
          <div
            className={`relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row ${
              openNav ? "bg-slate-950 " : ""
            } w-full h-full`}
            // Container for navigation items, layout changes based on screen size
          >
            {navMenuItems.map((item) => (
              <a
                key={item.id}
                href={item.url}
                onClick={handleClick}
                className={`block relative font-code text-2xl uppercase text-white transition-colors hover:text-color-1 ${
                  item.onlyMobile ? "lg:hidden" : ""
                } px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold 
                lg:leading-5 lg:hover:text-white xl:px-12 z-2 lg:text-white`}
                // Navigation link with dynamic styling based on item properties
              >
                {item.title}
              </a>
            ))}
          </div>

          {/* <HamburgerMenu /> */}
          <div className="absolute inset-0 pointer-events-none lg:hidden">
            {/* <div className="absolute inset-0 opacity-[.03]">
              <Image
                className="w-full h-full object-cover"
                src={background}
                width={688}
                height={953}
                alt="Background"
              />
            </div> */}
            <div className="w-full h-full absolute left-0 bottom-3">
              <Image
                src="/footer-grid.svg"
                alt="gridbg"
                width={500}
                height={750}
                className="w-full h-full object-none opacity-50"
              />
            </div>
          </div>
        </nav>
        <a
          href="#signup"
          className="button hidden mr-8 text-white/50 transition-colors hover:text-white lg:block"
          // Sign-up button, visible only on larger screens
        ></a>

        <button
          className="ml-auto lg:hidden px-3"
          onClick={toggleNav}
          // Hamburger menu button for mobile view
        >
          <MenuSvg openNavigation={openNav} />
        </button>
      </div>
    </div>
  );
};

export default Header;
