"use client";
import React from "react";
import { useInView, motion } from "framer-motion";
import { useRef } from "react";

const phrases = [
  " Specialized in omelettes",
  "our eggsperts use only",
  "the freshiesht ingredients",
  "& free-range eggs for the best",
  "breakfast eggsperience!",
];

function TextArea() {
  const animate = {
    initial: { y: "100%" },
    open: (i: number) => ({
      y: "0%",
      transition: { duration: 0.8, delay: 0.2 * i, ease: [0.33, 1, 0.68, 1] },
    }),
  };
  const body = useRef(null);
  const inView = useInView(body, { once: true, margin: "-10%" });

  return (
    <div className="flex  h-screen flex-col items-center justify-center bg-[#223C32]">
      <div
        ref={body}
        className=" mt-32  flex flex-col items-center justify-center space-y-6"
      >
        {phrases.map((phrase, index) => {
          return (
            <div key={index} className="overflow-hidden">
              <motion.p
                custom={index}
                variants={animate}
                initial="initial"
                animate={inView ? "open" : ""}
                className="text-heading translate-y-1/2 transform text-center text-2xl uppercase tracking-tight text-eggShell md:text-6xl"
              >
                {phrase}
              </motion.p>
            </div>
          );
        })}
        <div className="text-heading flex h-[100px] w-1/5 items-center justify-center border-4 border-[#09201C] text-xl uppercase text-eggRed md:text-3xl">
          See the Menu
        </div>
      </div>
    </div>
  );
}

export default TextArea;
