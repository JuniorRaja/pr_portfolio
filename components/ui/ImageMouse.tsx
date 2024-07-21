"use client";
import React, { useState, useRef } from "react";
import styled from "styled-components";

interface ImageProps {
  "data-index": number;
  "data-status": string;
  src: string;
}

const imagesData: ImageProps[] = [
  {
    "data-index": 0,
    "data-status": "inactive",
    src: "https://images.unsplash.com/photo-1663583513676-9f6361cd859d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
  },
  {
    "data-index": 1,
    "data-status": "inactive",
    src: "https://images.unsplash.com/photo-1663530294185-5af3692326c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1506&q=80",
  },
  {
    "data-index": 2,
    "data-status": "inactive",
    src: "https://images.unsplash.com/photo-1663579111009-863bc978c78e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
  },
  {
    "data-index": 3,
    "data-status": "inactive",
    src: "https://images.unsplash.com/photo-1663492412083-17bfcad3c533?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
  },
  {
    "data-index": 4,
    "data-status": "inactive",
    src: "https://images.unsplash.com/photo-1663571473113-d3fc49bbe775?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=986&q=80",
  },
  {
    "data-index": 5,
    "data-status": "inactive",
    src: "https://images.unsplash.com/photo-1663431263243-ef4aa402afc6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
  },
  {
    "data-index": 6,
    "data-status": "inactive",
    src: "https://images.unsplash.com/photo-1663330082092-11fa01e1ee8e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
  },
  {
    "data-index": 7,
    "data-status": "inactive",
    src: "https://images.unsplash.com/photo-1663450806250-da193dc36368?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1149&q=80",
  },
  {
    "data-index": 8,
    "data-status": "inactive",
    src: "https://images.unsplash.com/photo-1663352248740-645afa021c9c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
  },
  {
    "data-index": 9,
    "data-status": "inactive",
    src: "https://images.unsplash.com/photo-1663431905837-09cf339461ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2207&q=80",
  },
];

const ImageGallery: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const activate = (image: HTMLElement, x: number, y: number) => {
    if (image) {
      image.style.left = `${x + 200}px`;
      image.style.top = `${y + 200}px`;
      image.style.zIndex = String(globalIndex);
      image.dataset.status = "active";
      setlast({ x, y });
    }
  };

  const images = document.querySelectorAll(
    "#image"
  ) as unknown as HTMLCollectionOf<HTMLElement>;

  const distanceFromLast = (x: number, y: number) => {
    return Math.hypot(x - last.x, y - last.y);
  };

  var [globalIndex, setGlobalIndex] = useState<number>(0);
  var [last, setlast] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;

    const { left, top } = containerRef.current.getBoundingClientRect();
    console.log("left", left, "top", top);
    console.log("e.clientX", e.clientX, "e.clientY", e.clientY);
    if (
      distanceFromLast(e.clientX - left, e.clientY - top) >
      containerRef.current.getBoundingClientRect().width % 60
    ) {
      const lead = images[globalIndex % images.length];
      const tail = images[(globalIndex - 5) % images.length];

      if (lead) {
        activate(lead, e.clientX - left, e.clientY - top);
      }

      if (tail) {
        tail.dataset.status = "inactive";
      }
      setGlobalIndex(globalIndex + 1);
    }
  };

  const onMouseOut = () => {
    if (!containerRef.current) return;

    const images = containerRef.current.querySelectorAll(
      "#image"
    ) as NodeListOf<HTMLElement>;
    images.forEach((image) => (image.dataset.status = "inactive"));
  };

  return (
    <div
      ref={containerRef}
      id="container"
      onMouseMove={handleMouseMove}
      onMouseOut={onMouseOut}
      className="w-auto  h-[70vh] border border-purple"
    >
      {imagesData.map((image) => (
        <StyledImage
          id="image"
          key={image["data-index"]}
          data-index={image["data-index"]}
          data-status={image["data-status"]}
          src={image.src}
          className="StyledImage rounded-lg"
        />
      ))}
    </div>
  );
};

const StyledImage = styled.img`
  width: 40vmin;
  position: absolute;
  transform: translate(-50%, -50%);
  &[data-status="inactive"] {
    display: none;
  }
  &[data-status="active"] {
    display: block;
  }
`;

export default ImageGallery;
