"use client";
import { motion, useScroll } from "framer-motion";

function SvgDraw() {
  const { scrollYProgress } = useScroll();
  return (
    <div className="relative m-0 h-[200vh] bg-[#223C32]">
      <div className="absolute left-0 top-0 h-full w-full overflow-hidden px-4 text-center">
        <motion.svg
          viewBox="0 0 1293 972"
          fill="none"
          preserveAspectRatio="xMidYMax meet"
          className="inline-block h-auto w-auto"
        >
          <motion.path
            style={{ pathLength: scrollYProgress }}
            stroke={"#09201C"}
            strokeDasharray="0 1"
            strokeWidth={4}
            d="M663 31.6667C663 36.7058 660.998 41.5385 657.435 45.1017C653.872 48.6649 649.039 50.6667 644 50.6667C638.961 50.6667 634.128 48.6649 630.565 45.1017C627.002 41.5385 625 36.7058 625 31.6667C625 21.1787 633.512 0 644 0C654.488 0 663 21.1787 663 31.6667Z"
            fill="none"
          />
          <motion.path
            style={{ pathLength: scrollYProgress }}
            strokeDasharray="0 1"
            fillRule="evenodd"
            clipRule="evenodd"
            strokeWidth={4}
            stroke={"#09201C"}
            d="M641.5 472.5V3H647.5V472.5H1292.5V889H649.25V972H643.25V889H0V472.5H641.5ZM6 478.5V883H1286.5V478.5H6Z"
            fill="none"
          />
        </motion.svg>
      </div>
      <section className="relative grid h-screen items-center justify-center text-[4rem]">
        <h1 className=" text-eggWhite">Hello This is content</h1>
      </section>
    </div>
  );
}

export default SvgDraw;
