import React from "react";
import Image from "next/image";
import MaskGallery from "../MaskGallery/MaskGallery";

function Hero() {
  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <h1 className="text-heading text-center text-3xl italic leading-10 tracking-tight text-eggRed md:text-[9rem]">
        GET YOUR
      </h1>
      <Image
        src="/images/dStulle_white_egg.svg"
        alt="egghead logo"
        width={200}
        height={200}
        className="z-2 flex items-center justify-center"
      />
      <h1 className="text-heading text-center text-3xl italic tracking-tight text-eggRed md:text-[9rem]">
        EGG ON !
      </h1>
    </div>
  );
}

export default Hero;
