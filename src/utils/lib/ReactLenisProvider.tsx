"use client";
import React from "react";
import { ReactLenis, useLenis } from "@studio-freight/react-lenis";

function ReactLenisProvider({ children }: { children: React.ReactNode }) {
  const lenis = useLenis(({ scroll }) => {
    // called every scroll
  });

  return <ReactLenis root>{children}</ReactLenis>;
}

export default ReactLenisProvider;
