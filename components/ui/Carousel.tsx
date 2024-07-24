import React, { useRef } from "react";
import styles from "./Carousel.module.css";

import doorsImg from "@/public/gallery/thumbnails/tnail_doors.jpeg";
import macroImg from "@/public/gallery/thumbnails/tnail_macro.jpeg";
import minimalImg from "@/public/gallery/thumbnails/tnail_minimal.jpg";
import natureImg from "@/public/gallery/thumbnails/tnail_nature.jpg";
import patternsImg from "@/public/gallery/thumbnails/tnail_patterns.jpg";
import Link from "next/link";
const Carousel: React.FC = () => {
  const slideRef = useRef<HTMLDivElement>(null);

  const handleNextClick = () => {
    if (slideRef.current) {
      const items =
        slideRef.current.querySelectorAll<HTMLDivElement>("#CarouselItem");
      console.log(items);
      if (items.length > 0) {
        slideRef.current.appendChild(items[0]);
      }
    }
  };

  const handlePrevClick = () => {
    if (slideRef.current) {
      const items =
        slideRef.current.querySelectorAll<HTMLDivElement>("#CarouselItem");
      if (items.length > 0) {
        slideRef.current.prepend(items[items.length - 1]);
      }
    }
  };

  const albums = [
    {
      id: 1,
      name: "Doors & Windows",
      likes: 0,
      views: 0,
      img: doorsImg,
      route: "doors",
      des: "Unique doors and windows from around the world.",
    },
    {
      id: 2,
      name: "Macro",
      likes: 0,
      views: 0,
      img: macroImg,
      route: "macro",
      des: "Get closer to the world around you.",
    },
    {
      id: 3,
      name: "Minimal",
      likes: 0,
      views: 0,
      img: minimalImg,
      route: "minimal",
      des: "Less is the new more",
    },
    {
      id: 4,
      name: "Nature",
      likes: 0,
      views: 0,
      img: natureImg,
      route: "nature",
      des: "Indeed the most beautiful mother nature",
    },
    {
      id: 5,
      name: "Patterns",
      likes: 0,
      views: 0,
      img: patternsImg,
      route: "patterns",
      des: "They are everywhere, just look around",
    },
  ];

  return (
    <div className={styles.container}>
      {/* <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-[#f5f5f5] shadow-xl animate-fade-in"> */}
      <div className={styles.slide} ref={slideRef}>
        {/* <div className="relative w-full h-full animate-slide-in" ref={slideRef}> */}
        {albums.map((item) => (
          // className="absolute top-1/2 -translate-y-1/2 w-[200px] h-[300px] rounded-xl shadow-2xl bg-center bg-cover inline-block transition-all duration-500"
          <div
            className={styles.item}
            key={item.id}
            style={{ backgroundImage: `url(${item.img.src})` }}
            id={`CarouselItem`}
          >
            <div className={styles.content}>
              {/* <div className={styles.blurbackdrop}> </div> */}
              {/* <div className="absolute top-1/2 left-[100px] -translate-y-1/2 w-[300px] text-left text-[#eee] font-sans hidden"> */}
              <div className={styles.name}>{item.name}</div>
              <div>{item.des}</div>
              {/* <button>See More</button> */}
              <Link
                className={styles.link}
                key={item.route}
                href={`/gallery/${item.route}`}
                passHref
              >
                See More
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className={styles.button}>
        <button
          className={`${styles.prev} prev navButton`}
          onClick={handlePrevClick}
        >
          Prev.
        </button>
        <button
          className={`${styles.next} next navButton`}
          onClick={handleNextClick}
        >
          Next.
        </button>
      </div>
    </div>
  );
};

export default Carousel;
