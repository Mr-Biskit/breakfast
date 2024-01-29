"use client";

import MenuCarousel from "@/src/components/menu-carousel/MenuCarousel";
import OmeleggMenu from "@/src/components/omelegg-menu/OmeleggMenu";
import useMenuQuery from "@/src/utils/hooks/use-menu-query";
import { EmblaOptionsType } from "embla-carousel";
import React from "react";

const OPTIONS: EmblaOptionsType = {};

function Menu() {
  const { data, isLoading, isError } = useMenuQuery();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error</div>;
  }
  console.log(data.allMenu[0].menuGallery);

  return (
    <div className="flex  min-h-screen flex-col bg-eggWhite px-10">
      <div className="flex  h-[200px] flex-col items-center justify-center">
        <h1 className="text-heading text-center text-[9rem] italic text-eggRed"></h1>
      </div>
      <MenuCarousel
        imageGallery={data.allMenu[0].menuGallery}
        options={OPTIONS}
      />
      <div className="flex min-h-screen w-full flex-col items-center justify-center">
        <OmeleggMenu foodItems={data.allMenu[0].omeleggs} />
      </div>
    </div>
  );
}

export default Menu;
