"use client";
import Hero from "@/src/components/Hero/Hero";
import LinkButton from "@/src/components/LinkButton/LinkButton";
import MaskGallery from "@/src/components/MaskGallery/MaskGallery";
import TextArea from "@/src/components/TextArea/TextArea";
import Lenis from "@studio-freight/lenis";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  return (
    <main className=" min-h-screen bg-eggWhite">
      <Hero />
      <MaskGallery />
      <TextArea />
    </main>
  );
}
