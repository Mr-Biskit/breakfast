"use client";
import React, { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { EmblaCarouselType, EmblaOptionsType } from "embla-carousel";
import Autoplay from "embla-carousel-autoplay";
import { motion } from "framer-motion";

import Image from "next/image";
import "./embla.css";
import { DotButton } from "./EmblaCarouselDotButton";
import Link from "next/link";
import { ArrowBigDown, ChevronDown } from "lucide-react";

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
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [
    Autoplay({ delay: 8000 }),
  ]);
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
      <div className="embla ">
        <div className="embla__viewport" ref={emblaRef}>
          <div className="embla__container">
            {imageGallery.map((image: ImageData, index: number) => (
              <motion.div
                className="embla__slide"
                key={index}
                animate={{ scale: index === selectedIndex ? 1 : 0.8 }}
                transition={{ duration: 0.8 }}
              >
                <Image
                  width={image.asset.metadata?.dimensions.width}
                  height={image.asset.metadata?.dimensions.height}
                  className="embla__slide__img"
                  src={image.asset.url}
                  alt={image.asset.altText || ""}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      <div className="space-y-18 absolute -left-0 bottom-0 right-0 flex flex-col items-center justify-center">
        <div className="embla__dots ">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => scrollTo(index)}
              className={`embla__dot${
                index === selectedIndex ? " embla__dot--selected" : ""
              }`}
            />
          ))}
        </div>
        <Link href="#menu-section">
          <ChevronDown className="h-16 w-16 text-eggShell" />
        </Link>
      </div>

      <h1 className="text-heading pointer-events-none absolute inset-0 z-10 flex items-center justify-center text-center text-6xl italic leading-10 tracking-tight text-eggRed md:text-[9rem]">
        MENU
      </h1>
    </>
  );
};

export default MenuCarousel;
