"use client";

import MenuCarousel from "@/src/components/menu-carousel/MenuCarousel";
import OmeleggMenu from "@/src/components/omelegg-menu/OmeleggMenu";
import OpeningTimes from "@/src/components/opening-times/OpeningTimes";
import useMenuQuery from "@/src/utils/hooks/use-menu-query";
import useOpenTimesQuery from "@/src/utils/hooks/use-opening-time-query";
import { EmblaOptionsType } from "embla-carousel";
import React from "react";

const OPTIONS: EmblaOptionsType = { loop: true };

function Menu() {
  const { data, isError } = useMenuQuery();
  const { data: openTimes } = useOpenTimesQuery();

  // if (isLoading) {
  //   return <div>Loading...</div>;
  // }

  if (isError) {
    return <div>Error</div>;
  }

  return (
    <div className="flex  min-h-screen w-screen flex-col space-y-32 bg-eggWhite px-10 pt-10">
      <section className="relative">
        <MenuCarousel
          imageGallery={data.allMenu[0].menuGallery}
          options={OPTIONS}
        />
      </section>
      <OpeningTimes
        openTimes={openTimes!.allOpeningHours[0]}
        primaryColor="darkWood"
        secondaryColor="eggYolk"
      />
      <section
        id="menu-section"
        className="flex min-h-screen w-full flex-col items-center justify-center"
      >
        <OmeleggMenu foodItems={data.allMenu[0].omeleggs} />
      </section>
    </div>
  );
}

export default Menu;
