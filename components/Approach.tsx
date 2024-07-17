"use client";
import React from "react";

import { AnimatePresence, motion } from "framer-motion";
// import { CanvasRevealEffect } from "@/components/ui/CanvasRevealEffect";
import { div } from "three/examples/jsm/nodes/Nodes.js";

const Approach = () => {
  return (
    <section className="w-full py-20">
      <h1 className="heading">
        My <span className="text-purple">Approach</span>
      </h1>
      <>
        <div className="my-20 flex flex-col lg:flex-row items-center justify-center w-full gap-4 mx-auto px-8">
          <Card
            title="Planning & Statergy"
            descr="Learn how to build and deploy a modern developer portfolio with animations using Next.js. Perfect for showcasing your web development skills!"
            icon={<AceternityIcon title="Phase 1" />}
          >
            {/* <CanvasRevealEffect
              animationSpeed={5.1}
              containerClassName="bg-emerald-900"
            /> */}
          </Card>
          <Card
            title="Development & Preparation"
            descr="Learn how to build and deploy a modern developer portfolio with animations using Next.js. Perfect for showcasing your web development skills!"
            icon={<AceternityIcon title="Phase 2" />}
          >
            {/* <CanvasRevealEffect
              animationSpeed={3}
              containerClassName="bg-black"
              colors={[
                [236, 72, 153],
                [232, 121, 249],
              ]}
              dotSize={2}
            /> */}
            {/* Radial gradient for the cute fade 
            <div className="absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-black/50 dark:bg-black/90" />*/}
          </Card>
          <Card
            title="Development & Launch"
            descr="Learn how to build and deploy a modern developer portfolio with animations using Next.js. Perfect for showcasing your web development skills!"
            icon={<AceternityIcon title="Phase 3" />}
          >
            {/* <CanvasRevealEffect
              animationSpeed={3}
              containerClassName="bg-sky-600"
              colors={[[125, 211, 252]]}
            /> */}
          </Card>
        </div>
      </>
    </section>
  );
};

const Card = ({
  title,
  icon,
  children,
  descr,
}: {
  title: string;
  icon: React.ReactNode;
  children?: React.ReactNode;
  descr: string;
}) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="border lg:h-[35rem] border-black/[0.2] group/canvas-card flex items-center justify-center dark:border-white/[0.2]  max-w-sm w-full mx-auto p-4 relative h-[30rem] rounded-3xl"
    >
      <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />

      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="h-full w-full absolute inset-0"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-20">
        <div className="text-center group-hover/canvas-card:-translate-y-4 absolute top-[50%] left-[50%] translate-x-[-50%] trasnlate-y-[50%] group-hover/canvas-card:opacity-0 transition duration-200 w-full  mx-auto flex items-center justify-center">
          {icon}
        </div>
        <h2 className="text-center text-3xl dark:text-white opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-black mt-4  font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200">
          {title}
        </h2>
        <h2
          style={{ color: "#e4ecff" }}
          className="text-center dark:text-white text-xm opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-black mt-4  font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200"
        >
          {descr}
        </h2>
      </div>
    </div>
  );
};

const AceternityIcon = ({ title }: { title: string }) => {
  return (
    <div>
      <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
        <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
          {title}
        </span>
      </button>
    </div>
  );
};

export const Icon = ({ className, ...rest }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};

export default Approach;
