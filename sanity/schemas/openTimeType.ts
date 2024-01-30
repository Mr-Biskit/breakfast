import { defineField, defineType } from "sanity";

export const weekdayHours = defineType({
  name: "weekdayHours",
  title: "Weekday Hours",
  type: "object",
  fields: [
    defineField({
      name: "days",
      title: "Days",
      type: "string",
      initialValue: "Monday to Friday",
      readOnly: true, // Set as read-only if the days do not change
    }),
    defineField({
      name: "openTime",
      title: "Opening Time",
      type: "string",
      validation: (Rule) =>
        Rule.required().regex(
          /^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/,
          "Please enter a valid time in HH:MM format"
        ),
    }),
    defineField({
      name: "closeTime",
      title: "Closing Time",
      type: "string",
      validation: (Rule) =>
        Rule.required().regex(
          /^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/,
          "Please enter a valid time in HH:MM format"
        ),
    }),
  ],
});

export const weekendHours = defineType({
  name: "weekendHours",
  title: "Weekend Hours",
  type: "object",
  fields: [
    defineField({
      name: "days",
      title: "Days",
      type: "string",
      initialValue: "Saturday to Sunday",
      readOnly: true, // Set as read-only if the days do not change
    }),
    defineField({
      name: "openTime",
      title: "Opening Time",
      type: "string",
      validation: (Rule) =>
        Rule.required().regex(
          /^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/,
          "Please enter a valid time in HH:MM format"
        ),
    }),
    defineField({
      name: "closeTime",
      title: "Closing Time",
      type: "string",
      validation: (Rule) =>
        Rule.required().regex(
          /^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/,
          "Please enter a valid time in HH:MM format"
        ),
    }),
  ],
});

export const openingHoursType = defineType({
  name: "openingHours",
  title: "Opening Hours",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "weekdayHours",
      title: "Weekday Hours",
      type: "weekdayHours",
    }),
    defineField({
      name: "weekendHours",
      title: "Weekend Hours",
      type: "weekendHours",
    }),
  ],
});
