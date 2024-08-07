import Image from "next/image";
import React from "react";
import { Carousel, Card } from "@/components/ui/cards-carousel";
import SG from "@/public/travel/sg.jpg";
import SL from "@/public/travel/sl.jpg";
import PL from "@/public/travel/pl.jpg";
import SV from "@/public/travel/sv.jpg";
import AU from "@/public/travel/au.jpg";
import CZ from "@/public/travel/cz.jpg";
import HU from "@/public/travel/hu.jpg";

export default function TravelCards() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full text-center">
      <h2 className="text-4xl font-bold mb-6">
        Places I have <span className="text-purple">travelled</span> to
      </h2>
      <Carousel items={cards} />
    </div>
  );
}

const DummyContent = () => {
  return (
    <>
      {[...new Array(1).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content" + index}
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700 dark:text-neutral-200">
                Travelling keeps your soul young. <br />
              </span>{" "}
              Every new place you visit, every new culture you experience, every
              new person you meet, every new food you taste, every new language
              you learn, every new adventure you embark on, every new memory you
              create, every new story you share, every new experience you gain,
              every new lesson you learn, every new perspective you see, every
              new emotion you feel, every new moment you live, every new journey
              you take, every new dream you chase, every new goal you achieve,
              every new challenge you face, every new fear you conquer, every
              new obstacle you overcome, every new success you celebrate, every
              new failure you learn from, every new relationship you build,
              every new connection you make, every new bond you form, every new
              friendship you cherish, every new love you find, every new heart
              you touch, every new life you change, every new world you explore,
              every new universe you create, every new reality you live, every
              new you you become.
            </p>
            {/* <Image
              src={"https://assets.aceternity.com/macbook.png"}
              alt="Photo of the place"
              height="500"
              width="500"
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
            /> */}
          </div>
        );
      })}
    </>
  );
};

const data = [
  {
    category: "JAN 2023",
    title: "Singapore",
    src: SG.src,
    content: <DummyContent />,
  },
  {
    category: "JUN 2023",
    title: "Sri Lanka",
    src: SL.src,
    content: <DummyContent />,
  },
  {
    category: "SEP 2023",
    title: "Poland",
    src: PL.src,
    content: <DummyContent />,
  },

  {
    category: "SEP 23",
    title: "Slovakia",
    src: SV.src,
    content: <DummyContent />,
  },
  {
    category: "OCT 2023",
    title: "Austria",
    src: AU.src,
    content: <DummyContent />,
  },
  {
    category: "OCT 2023",
    title: "Czech Republic",
    src: CZ.src,
    content: <DummyContent />,
  },
  {
    category: "NOV 2023",
    title: "Hungary",
    src: HU.src,
    content: <DummyContent />,
  },
];
