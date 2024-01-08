"use client";
import { useScroll, useTransform, motion } from "framer-motion";
import React, { useEffect, useState } from "react";

import LoopingImages from "./LoopImages";

const imagePaths = [
  "images/oml1.png",
  "images/oml2.png",
  "images/oml3.png",
  "images/oml4.png",
];

function MaskGallery() {
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [1, 20]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <>
      <div ref={ref} className="relative z-10 h-[400vh] overflow-clip">
        <motion.div
          style={{
            scale,
          }}
          className="hero-background sticky left-0 top-0 flex h-screen w-screen items-center justify-center"
        >
          <div className="window-mask h-screen w-full bg-eggWhite"></div>
        </motion.div>
      </div>
      <div className="relative mt-[-400vh] h-[400vh] overflow-clip">
        <div className="sticky top-0 flex h-screen w-screen items-center justify-center">
          <motion.img
            style={{
              scale: imageScale,
            }}
            src="/images/banner.webp"
            alt="egghead logo"
            className="sticky h-screen w-screen "
          />
          <LoopingImages
            imagePaths={imagePaths}
            scrollYProgress={scrollYProgress}
          />
        </div>
      </div>
    </>
  );
}

export default MaskGallery;
