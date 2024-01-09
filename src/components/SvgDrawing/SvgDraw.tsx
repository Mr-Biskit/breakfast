"use client";
import { motion, useScroll } from "framer-motion";

function SvgDraw() {
  const { scrollYProgress } = useScroll();
  return (
    <div className="m-0 flex h-[300vh] bg-[#223C32]">
      <div className=" h-full w-full  text-center">
        <motion.svg
          viewBox="0 0 1293 972"
          fill="none"
          preserveAspectRatio="xMidYMax meet"
          className="fixed left-0 top-0"
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
        <motion.svg
          style={{ width: "80%", height: "80%" }}
          viewBox="0 0 480 480"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.path
            // initial={{ pathLength: 0 }}
            // animate={{ pathLength: 1 }}
            // transition={{
            //   duration: 2,
            //   ease: "easeInOut",
            //   repeat: Infinity,
            //   repeatType: "loop",
            //   repeatDelay: 1,
            // }}
            style={{ pathLength: scrollYProgress }}
            stroke={"#09201C"}
            strokeWidth={4}
            strokeDasharray="0 1"
            fill="none"
            d="M415,275Q422,310,417.5,354Q413,398,378,423Q343,448,299,423Q255,398,227.5,389.5Q200,381,151,401.5Q102,422,86,383.5Q70,345,65,309.5Q60,274,78.5,243.5Q97,213,87.5,176.5Q78,140,107.5,122Q137,104,160.5,74Q184,44,222,33Q260,22,293.5,43.5Q327,65,362,81Q397,97,386,142.5Q375,188,391.5,214Q408,240,415,275Z"
          />
        </motion.svg>
      </div>
    </div>
  );
}

export default SvgDraw;

// const draw = {
//     hidden: { pathLength: 0, opacity: 0 },
//     visible: (i: any) => {
//       const delay = 1 + i * 0.5;
//       return {
//         pathLength: 1,
//         opacity: 1,
//         transition: {
//           pathLength: { delay, type: "spring", duration: 1.5, bounce: 0 },
//           opacity: { delay, duration: 0.01 },
//         },
//       };
//     },
//   };
//   const { scrollYProgress } = useScroll();
