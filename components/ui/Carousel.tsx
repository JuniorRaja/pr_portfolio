import React, { useRef } from "react";
import styles from "./Carousel.module.css";
import Link from "next/link";
import { AlbumItem } from "@/types/types";

const Carousel: React.FC<{ albums: AlbumItem[] }> = ({ albums }) => {
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

  return (
    <div className={styles.container}>
      <div className={styles.slide} ref={slideRef}>
        {albums.map((item) => (
          <div
            className={styles.item}
            key={item.id}
            style={{ backgroundImage: `url(${item.img})` }}
            id={`CarouselItem`}
          >
            <div className={styles.content}>
              <div className={styles.name}>{item.name}</div>
              <div>{item.des}</div>
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
