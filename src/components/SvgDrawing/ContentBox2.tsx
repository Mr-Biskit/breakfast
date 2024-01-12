"use client";
import React from "react";
import { useRive } from "@rive-app/react-canvas";

function ContentBox2() {
  const { RiveComponent: Egg } = useRive({
    src: "/animations/breakashell.riv",
    stateMachines: "state_machine",
    autoplay: true,
  });
  return (
    <div className="flex h-3/4 w-[30%] flex-col items-center justify-center space-y-4 py-8 md:mt-10 2xl:mt-0">
      <Egg />
    </div>
  );
}

export default ContentBox2;
