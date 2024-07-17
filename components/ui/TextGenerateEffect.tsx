"use client";
import { cn } from "@/utils/cn";
import { motion, stagger, useAnimate } from "framer-motion";
import { useEffect } from "react";

export const TextGenerateEffect = ({
  words,
  className,
  animationDuration = 2, // Default animation duration
}: {
  words: string;
  className?: string;
  animationDuration?: number;
}) => {
  const [scope, animate] = useAnimate();
  let wordsArray = words.split(" ");

  useEffect(() => {
    animate(
      "span",
      {
        opacity: 1,
      },
      {
        duration: animationDuration,
        delay: stagger(0.2),
      }
    );
  }, [animate, animationDuration]);

  const renderWords = () => {
    return (
      <motion.div ref={scope}>
        {wordsArray.map((word, idx) => {
          const delay = idx * 0.1;
          return (
            <motion.span
              key={word + idx}
              className={`${
                idx > 1 ? "text-purple" : "dark:text-white text-black"
              }
              ${idx === 0 ? "word-gradient" : ""}
              `}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: delay, duration: 0.2 }}
              style={{
                display: "inline-block",
                marginRight: "10px",
              }}
            >
              {word}
            </motion.span>
          );
        })}
      </motion.div>
    );
  };

  return (
    <div className={cn("font-bold", className)}>
      <style jsx>{``}</style>
      <div className="mb-4">
        <div className="dark:text-white text-black leading-snug tracking-wide">
          {renderWords()}
        </div>
      </div>
    </div>
  );
};
