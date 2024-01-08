import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./schemas";
import StudioNavBar from "./src/app/(admin)/studio/components/StudioNavBar";
import Logo from "./src/app/(admin)/studio/components/Logo";
import { theme } from "https://themer.sanity.build/api/hues?preset=stereofidelic";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!;

export default defineConfig({
  basePath: "/studio",
  name: "Egg_Content_Studio",
  title: "Egg Content Studio",
  projectId,
  dataset,

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
  studio: {
    components: {
      logo: Logo,
      navbar: StudioNavBar,
    },
  },
  theme,
});
