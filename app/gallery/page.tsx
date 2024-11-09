"use client";
import Carousel from "@/components/ui/Carousel";
import { useState, useEffect } from "react";
import { fetchAlbumsList } from "../../lib/fetchAlbumsList";
import { AlbumItem } from "@/types/types";
import SectionHeader from "@/components/layout/SectionHeader";

import doorsImg from "@/public/gallery/thumbnails/tnail_doors.jpeg";
import macroImg from "@/public/gallery/thumbnails/tnail_macro.jpeg";
import minimalImg from "@/public/gallery/thumbnails/tnail_minimal.jpg";
import natureImg from "@/public/gallery/thumbnails/tnail_nature.jpg";
import patternsImg from "@/public/gallery/thumbnails/tnail_patterns.jpg";

const Gallery = () => {
  // const [albums, setAlbums] = useState<AlbumItem[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const albums: AlbumItem[] = [
    {
      id: 1,
      name: "Doors & Windows",
      likes: 0,
      views: 0,
      img: doorsImg.src,
      route: "doors",
      des: "Unique doors and windows from around the world.",
    },
    {
      id: 2,
      name: "Macro",
      likes: 0,
      views: 0,
      img: macroImg.src,
      route: "macro",
      des: "Get closer to the world around you.",
    },
    {
      id: 3,
      name: "Minimal",
      likes: 0,
      views: 0,
      img: minimalImg.src,
      route: "minimal",
      des: "Less is the new more",
    },
    {
      id: 4,
      name: "Nature",
      likes: 0,
      views: 0,
      img: natureImg.src,
      route: "nature",
      des: "Indeed the most beautiful mother nature",
    },
    {
      id: 5,
      name: "Patterns",
      likes: 0,
      views: 0,
      img: patternsImg.src,
      route: "patterns",
      des: "They are everywhere, just look around",
    },
  ];

  // useEffect(() => {
  //   async function getAlbums() {
  //     try {
  //       setLoading(true);
  //       const data = await fetchAlbumsList();
  //       setAlbums(data);
  //     } catch (error) {
  //       console.log("Failed to fetch albums");
  //     } finally {
  //       setLoading(false);
  //     }
  //   }

  //   getAlbums();
  // }, []);

  return (
    <div className="max-w-7xl w-full">
      <section className="w-full py-20 min-h-screen mt-5 md:pt-36">
        <SectionHeader
          words={["Different", "Perspectives"]}
          tagline="beautiful world in"
        />
        <p className="text-center text-muted-foreground mb-8 md:mx-16 text-white">
          One of the five senses, sight. Photography is an art that gives a good
          feeling to through the eyes. I still learn and to me, art is something
          that you can never master. I have tried to categorize my photos and my
          faviourtes of them are Minimal, Doors & Patterns.
        </p>
        <div className="h-auto min-h-[45rem] md:max-w-[90%] m-auto text-center">
          {loading ? <p>Loading...</p> : <Carousel albums={albums} />}
        </div>
        {/* Serach feature will be added soon
        <div className="flex justify-center mb-8">
          <input
            type="text"
            placeholder="Search"
            className="w-full max-w-md p-2 border border-border rounded bg-input text-foreground shadow-md"
          />
        </div> */}
      </section>
    </div>
  );
};

export default Gallery;
