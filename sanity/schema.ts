import { type SchemaTypeDefinition } from "sanity";
import { foodItem, menuType } from "./schemas/menuType";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [menuType, foodItem],
};
