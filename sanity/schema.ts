import { type SchemaTypeDefinition } from "sanity";
import { foodItem, menuType } from "./schemas/menuType";
import {
  openingHoursType,
  weekdayHours,
  weekendHours,
} from "./schemas/openTimeType";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [menuType, foodItem, openingHoursType, weekendHours, weekdayHours],
};
