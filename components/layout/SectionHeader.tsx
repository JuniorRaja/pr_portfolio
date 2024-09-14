import { FC } from "react";
import { Spotlight } from "@/components/ui/Spotlight";

interface SectionHeaderProps {
  words: [string, string];
  tagline: string;
}

const SectionHeader: FC<SectionHeaderProps> = ({ words, tagline }) => {
  const [word1, word2] = words;
  return (
    <div className="w-full h-[auto] pb-2 md:pb-10">
      <p className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-[80] mb-5">
        {tagline}
      </p>

      <Spotlight
        className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
        fill="white"
      />
      <Spotlight className="top-25 left-full h-[80vh] w-[50vw]" fill="purple" />
      <Spotlight className="top-28 left-80 h-[80vh] w-[50vh]" fill="blue" />

      <h1 className="heading">
        {word1} <span className="text-purple">{word2}</span>
      </h1>
    </div>
  );
};

export default SectionHeader;
