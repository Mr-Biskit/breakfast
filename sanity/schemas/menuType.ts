// Define the FoodItem schema
import { defineField, defineType } from "sanity";

export const foodItem = defineType({
  name: "foodItem",
  title: "Food Item",
  type: "object",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "price",
      title: "Price",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
    }),
  ],
});

// Define the Menu schema
export const menuType = defineType({
  name: "menu",
  title: "Menu",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "menuGallery",
      title: "Menu Gallery",
      type: "array",
      of: [
        defineField({
          name: "image",
          type: "image",
          options: { hotspot: true },
          fields: [
            {
              name: "alt",
              type: "string",
              title: "Alternative text",
            },
          ],
        }),
      ],
      options: {
        layout: "grid",
      },
    }),
    defineField({
      name: "omeleggs",
      title: "Omeleggs",
      type: "array",
      of: [{ type: "foodItem" }],
    }),
    defineField({
      name: "eggsetra",
      title: "Eggsetra",
      type: "array",
      of: [{ type: "foodItem" }],
    }),
    defineField({
      name: "otherStuff",
      title: "Other Stuff",
      type: "array",
      of: [{ type: "foodItem" }],
    }),
  ],
});
