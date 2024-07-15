"use client";
import Carousel from "@/components/ui/Carousel";

const Gallery = () => {
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
        <div className="h-auto min-h-[40rem]">
          <Carousel />
        </div>
        {/* Serach feature will be added soon
        <div className="flex justify-center mb-8">
          <input
            type="text"
            placeholder="Search"
            className="w-full max-w-md p-2 border border-border rounded bg-input text-foreground shadow-md"
          />
        </div> */}
        {/* 
        New Slider implementated. hence commented the old
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {albums.map((album) => (
            <Link key={album.route} href={`/gallery/${album.route}`} passHref>
              <div
                key={album.route}
                className="bg-card rounded-md overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300"
              >
                <img
                  src={album.img.src}
                  alt={album.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h2 className="text-xl font-bold text-white">{album.name}</h2>
                  <p className="text-muted-foreground">
                    {album.likes} likes · {album.views} views
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div> */}

        {/* <div className="flex items-center justify-center mt-40 relative">
          <ImageSlider />
        </div> */}
      </section>
    </div>
  );
};

export default Gallery;
