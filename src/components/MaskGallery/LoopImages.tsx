import { MotionValue, motion, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

type LoopingImagesProps = {
  imagePaths: string[];
  scrollYProgress: MotionValue<number>;
};

function LoopingImages({ imagePaths, scrollYProgress }: LoopingImagesProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const loopingImageScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  useEffect(() => {
    if (imagePaths && imagePaths.length > 0) {
      const intervalId = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % imagePaths.length);
      }, 1000);

      return () => clearInterval(intervalId);
    }
  }, [imagePaths]);

  if (!imagePaths || imagePaths.length === 0) {
    return null; // or render some placeholder/error UI
  }

  return (
    <motion.img
      src={imagePaths[currentIndex]}
      style={{
        scale: loopingImageScale,
      }}
      className="absolute  mx-auto mt-12 h-[480px] w-[300px]  md:h-[500px] md:w-[380px]"
    />
  );
}

export default LoopingImages;
