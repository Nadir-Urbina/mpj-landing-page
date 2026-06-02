import { defineField, defineType } from "sanity";

export const testimonialType = defineType({
  name: "testimonial",
  title: "Testimonial",
  type: "document",
  fields: [
    defineField({
      name: "quote",
      title: "Quote",
      type: "text",
      rows: 4,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "name",
      title: "Name / username",
      type: "string",
      description: "Shown under the quote, e.g. an App Store reviewer's handle.",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "source",
      title: "Source",
      type: "string",
      options: {
        list: [
          { title: "App Store", value: "App Store" },
          { title: "Google Play", value: "Google Play" },
          { title: "Website", value: "Website" },
        ],
      },
      initialValue: "App Store",
    }),
    defineField({
      name: "rating",
      title: "Rating",
      type: "number",
      description: "Number of stars (1–5).",
      initialValue: 5,
      validation: (rule) => rule.required().min(1).max(5).integer(),
    }),
    defineField({
      name: "order",
      title: "Order",
      type: "number",
      description: "Lower numbers appear first. Leave blank for newest-first.",
    }),
  ],
  orderings: [
    {
      title: "Manual order",
      name: "orderAsc",
      by: [{ field: "order", direction: "asc" }],
    },
  ],
  preview: {
    select: { title: "name", subtitle: "quote" },
  },
});
