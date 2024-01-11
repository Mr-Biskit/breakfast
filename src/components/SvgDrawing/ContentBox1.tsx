import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";

const sentences = ["2,000,000", "eggs", "cracked", "since 2013"];
function ContentBox1() {
  const animate = {
    initial: { y: "100%" },
    open: (i: number) => ({
      y: "0%",
      transition: { duration: 0.8, delay: 0.5 * i, ease: [0.33, 1, 0.68, 1] },
    }),
  };
  const box = useRef(null);
  const inView = useInView(box, { once: true, margin: "-10%" });
  return (
    <div
      ref={box}
      className="flex h-3/4 w-[30%] flex-col items-center justify-center space-y-4 py-8 md:mt-10 2xl:mt-0"
    >
      {sentences.map((sentence, index) => {
        let standardClassName =
          "text-heading translate-y-1/2 transform text-center text-2xl uppercase tracking-tight text-eggShell md:text-7xl";
        if (index === 1) {
          standardClassName =
            "text-heading translate-y-1/2 transform text-center text-2xl uppercase tracking-tight text-eggYolk md:text-7xl";
        } else if (index === 3) {
          standardClassName =
            "text-heading translate-y-1/2 transform text-center text-xl uppercase tracking-tight text-eggShell md:text-5xl";
        }
        return (
          <div key={index} className="overflow-hidden">
            <motion.p
              custom={index}
              variants={animate}
              initial="initial"
              animate={inView ? "open" : ""}
              className={standardClassName}
            >
              {sentence}
            </motion.p>
          </div>
        );
      })}
    </div>
  );
}

export default ContentBox1;
