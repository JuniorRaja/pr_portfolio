"use client";
import { useState, useEffect } from "react";
import PRLogoW from "../public/PRLogoW.png";
import MenuSvg from "./ui/MenuSvg";
import Image from "next/image";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store";
import { setPrimaryColor } from "@/store/colorSlice";

// const Skeleton = ({ classNames }: { classNames?: string }) => {
//   return (
//     <div className={`animate-pulse flex gap-4 w-full ${classNames}`}>
//       <div className="bg-gray-700 h-4 w-20 rounded-xl"></div>
//       <div className="bg-gray-700 h-4 w-20 rounded-xl"></div>
//       <div className="bg-gray-700 h-4 w-20 rounded-xl"></div>
//       <div className="bg-gray-700 h-4 w-20 rounded-xl"></div>
//     </div>
//   );
// };

interface NavbarItem {
  id: number;
  title: string;
  url: string;
  onlyMobile: boolean;
}

interface NavbarProps {
  navItems: NavbarItem[];
}

const Header = ({ navItems }: NavbarProps) => {
  const dispatch = useDispatch();
  const [activeNav, setActiveNav] = useState<number>(99);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [openNav, setOpenNav] = useState<boolean>(false);
  const primaryColor = useSelector(
    (state: RootState) => state.color.primaryColor
  );

  useEffect(() => {
    const savedColor = sessionStorage.getItem("primaryColor");
    if (savedColor) {
      dispatch(setPrimaryColor(savedColor));
    } else {
      dispatch(setPrimaryColor("#8B5CF6"));
    }
  }, [dispatch]);

  const toggleNav = () => {
    setOpenNav(!openNav);
  };

  const handleClick =
    (id: number) => (event: React.MouseEvent<HTMLAnchorElement>) => {
      setActiveNav(id);
      setOpenNav(false);
    };

  const colors = [
    { code: "#8B5CF6", name: "Purple" },
    { code: "#EC4899", name: "Pink" },
    { code: "#F59E0B", name: "Amber" },
  ];

  const handleColorSelect = (color: string) => {
    dispatch(setPrimaryColor(color));
    sessionStorage.setItem("primaryColor", color);
    setDropdownOpen(false);
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
          <Image
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
            {navItems.map((item) => (
              <a
                key={item.id}
                href={item.url}
                onClick={handleClick(item.id)}
                className={`block relative font-code text-2xl uppercase text-white transition-colors hover:text-color-1 
                    ${item.onlyMobile ? "lg:hidden" : ""} 
                    px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold 
                    lg:leading-5 lg:hover:text-white xl:px-12 z-2 lg:text-white`}
                //${activeNav === item.id ? "border border-b-2" : ""}  highlihgt active nav item
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
        <div className="relative bg-white p-1 rounded-3xl">
          <div
            className="w-8 h-8 rounded-full cursor-pointer bg-black-100"
            style={{ backgroundColor: primaryColor }}
            onClick={() => setDropdownOpen(!dropdownOpen)}
          />
          {dropdownOpen && (
            <div className="absolute mt-2 w-auto p-2 rounded-lg bg-white shadow-lg transform transition-all duration-300 ease-in-out">
              {colors.map((color) => (
                <div
                  key={color.name}
                  className="flex items-center px-4 py-1 justify-evenly hover:bg-gray-200 hover:rounded-lg gap-2"
                >
                  <div
                    key={color.name}
                    className="w-8 h-8 rounded-full my-2 cursor-pointer transition-transform transform hover:scale-110"
                    style={{ backgroundColor: color.code }}
                    onClick={() => handleColorSelect(color.code)}
                  />
                  <div className="text-black w-10">{color.name}</div>
                </div>
              ))}
            </div>
          )}
        </div>
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
