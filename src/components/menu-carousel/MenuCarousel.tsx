"use client";
import React, { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { EmblaCarouselType, EmblaOptionsType } from "embla-carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import "./embla.css";
import { DotButton } from "./EmblaCarouselDotButton";

type ImageData = {
  asset: {
    url: string;
    altText?: string | null;
    metadata?: {
      dimensions: {
        width: number;
        height: number;
      };
    };
  };
};

type MenuCarouselProps = {
  imageGallery: ImageData[];
  options?: EmblaOptionsType;
};

const MenuCarousel: React.FC<MenuCarouselProps> = (props) => {
  const { imageGallery, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const scrollTo = useCallback(
    (index: number) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  );
  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    setSelectedIndex(emblaApi!.selectedScrollSnap());
  }, []);

  const onInit = useCallback((emblaApi: EmblaCarouselType) => {
    setScrollSnaps(emblaApi!.scrollSnapList());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;
    onInit(emblaApi);
    onSelect(emblaApi);
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onInit);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect, onInit]);

  return (
    <>
      <div className="embla">
        <div className="embla__viewport" ref={emblaRef}>
          <div className="embla__container">
            {imageGallery.map((image: ImageData, index: number) => (
              <div className="embla__slide " key={index}>
                <Image
                  width={image.asset.metadata?.dimensions.width}
                  height={image.asset.metadata?.dimensions.height}
                  className=" w-full"
                  src={image.asset.url}
                  alt={image.asset.altText || ""}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="embla__dots">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => scrollTo(index)}
              className={"embla__dot".concat(
                index === selectedIndex ? " embla__dot--selected" : ""
              )}
            />
          ))}
        </div>
        <div className="z-2 absolute -bottom-0  flex items-center justify-center text-center">
          <h1 className="text-heading text-center text-3xl italic leading-10 tracking-tight text-eggRed md:text-[9rem]">
            MENU
          </h1>
        </div>
      </div>
    </>
  );
};

export default MenuCarousel;
