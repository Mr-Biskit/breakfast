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
    <div className=" flex h-screen  flex-col items-center justify-center bg-[#223C32]">
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
      </div>{" "}
      <svg
        width="187"
        height="169"
        viewBox="0 0 187 169"
        fill="#09201C"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M169.656 12.5C139.121 12.5 123.865 27.4844 116.536 34.6875L105.956 44.3C103.047 46.9043 100.741 50.0029 99.1714 53.4163C97.6018 56.8296 96.8 60.4897 96.8125 64.1844V68.75L103.844 62.4156C104.288 57.2443 106.774 52.3875 110.851 48.725L121.649 38.9125C128.017 32.6531 140.966 19.9312 166.101 18.8219C165.331 32.9531 159.545 42.8031 153.62 49.6094L141.906 53.125H150.294C148.227 55.1271 146.063 57.0456 143.807 58.875L140.408 61.9062L128.031 65.625H136.242L132.922 68.5844C130.673 70.6227 127.997 72.2388 125.05 73.339C122.103 74.4391 118.942 75.0016 115.752 74.9937H108.665L140.893 45.9594L135.989 41.5406L89.875 83.0813L94.7798 87.5L101.724 81.2437H115.755C119.859 81.2535 123.925 80.5293 127.716 79.1131C131.507 77.6969 134.949 75.617 137.841 72.9937L148.49 63.475C156.485 56.8844 173.125 43.1406 173.125 15.625V12.5H169.656Z"
          fill="#F8F8F8"
        />
        <path
          d="M17.3438 156.5C47.8792 156.5 63.1347 141.516 70.4642 134.312L81.0439 124.7C83.9529 122.096 86.259 118.997 87.8286 115.584C89.3982 112.17 90.2 108.51 90.1875 104.816V100.25L83.1563 106.584C82.7119 111.756 80.2262 116.613 76.1495 120.275L65.3513 130.088C58.9826 136.347 46.0338 149.069 20.8992 150.178C21.6693 136.047 27.4552 126.197 33.3798 119.391L45.0938 115.875H36.7063C38.7731 113.873 40.9374 111.954 43.1929 110.125L46.5922 107.094L58.9688 103.375H50.7582L54.0778 100.416C56.327 98.3773 59.0028 96.7612 61.9501 95.661C64.8975 94.5609 68.0578 93.9984 71.2481 94.0063H78.3348L46.1066 123.041L51.0114 127.459L97.125 85.9187L92.2202 81.5L85.2758 87.7563H71.2447C67.1406 87.7465 63.0751 88.4707 59.284 89.8869C55.4928 91.3031 52.0514 93.383 49.1591 96.0063L38.5101 105.525C30.5146 112.116 13.875 125.859 13.875 153.375V156.5H17.3438Z"
          fill="#F8F8F8"
        />
      </svg>
    </div>
  );
}

export default TextArea;
