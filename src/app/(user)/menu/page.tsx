"use client";
import SvgDraw from "@/src/components/SvgDrawing/SvgDraw";
import React from "react";

function Menu() {
  return (
    <div className="flex  min-h-screen flex-col bg-eggWhite">
      <div className="flex  flex-col items-center justify-center">
        <h1 className="text-heading text-center text-[9rem] italic text-eggRed">
          Menu
        </h1>
      </div>
      <SvgDraw />
    </div>
  );
}

export default Menu;
