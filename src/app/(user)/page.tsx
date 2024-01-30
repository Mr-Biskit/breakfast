"use client";
import Hero from "@/src/components/Hero/Hero";
import LinkButton from "@/src/components/LinkButton/LinkButton";
import MaskGallery from "@/src/components/MaskGallery/MaskGallery";
import SvgDraw from "@/src/components/SvgDrawing/SvgDraw";
import TextArea from "@/src/components/TextArea/TextArea";
import Lenis from "@studio-freight/lenis";
import { useEffect } from "react";

export default function Home() {
  return (
    <main className="min-h-screen  bg-eggWhite">
      <Hero />
      <MaskGallery />
      <TextArea />
      <SvgDraw />
    </main>
  );
}
