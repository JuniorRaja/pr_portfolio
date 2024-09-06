"use client";
import Carousel from "@/components/ui/Carousel";
import { useState, useEffect } from "react";
import { fetchAlbumsList } from "./../lib/fetchAlbumsList";

interface Album {
  id: number;
  name: string;
  likes: number;
  views: number;
  img: string;
  route: string;
  des: string;
}

const Gallery = () => {
  const [albums, setAlbums] = useState<Album[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function getAlbums() {
      try {
        setLoading(true);
        const data = await fetchAlbumsList();
        setAlbums(data);
      } catch (error) {
        console.log("Failed to fetch albums");
      } finally {
        setLoading(false);
      }
    }

    getAlbums();
  }, []);
  return (
    <div className="max-w-7xl w-full">
      <section className="w-full py-20 min-h-screen pt-36">
        <h1 className="text-4xl font-bold text-center mb-4 text-white">
          A <span className="text-purple">Different</span> Perspective
        </h1>
        <p className="text-center text-muted-foreground mb-8 text-white">
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
