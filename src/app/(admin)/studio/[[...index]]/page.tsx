import type { Metadata } from "next";
import { metadata as studioMetadata } from "next-sanity/studio/metadata";

import { Studio } from "../components/Studio";
export const metadata: Metadata = {
  ...studioMetadata,
  // Overrides the viewport to resize behavior
  viewport: `${studioMetadata.viewport}, interactive-widget=resizes-content`,
};

export default function StudioPage() {
  return <Studio />;
}
