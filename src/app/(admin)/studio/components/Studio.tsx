"use client";

import { NextStudio } from "next-sanity/studio";
import { StudioProvider, StudioLayout } from "sanity";

import config from "../../../../../sanity.config";

export function Studio() {
  return (
    <NextStudio config={config}>
      <StudioProvider config={config}>
        <StudioLayout />
      </StudioProvider>
    </NextStudio>
  );
}
