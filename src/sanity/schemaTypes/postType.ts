import { defineField, defineType } from "sanity";

export const postType = defineType({
  name: "post",
  title: "Blog Post",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "language",
      title: "Language",
      type: "string",
      description:
        "Which site this post belongs to. Spanish posts appear on /es/blog; English posts on /blog.",
      options: {
        list: [
          { title: "English", value: "en" },
          { title: "Español", value: "es" },
        ],
        layout: "radio",
        direction: "horizontal",
      },
      // Not required: posts saved before this field existed have no value and
      // are treated as English by the site's queries.
      initialValue: "en",
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "excerpt",
      title: "Excerpt",
      type: "text",
      rows: 3,
      description: "One-sentence summary shown on cards and link previews.",
      validation: (rule) => rule.max(220),
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          { title: "Dreams", value: "Dreams" },
          { title: "Visions", value: "Visions" },
          { title: "Discernment", value: "Discernment" },
          { title: "Prophetic Growth", value: "Prophetic Growth" },
          { title: "Scripture", value: "Scripture" },
        ],
      },
    }),
    defineField({
      name: "coverImage",
      title: "Cover image",
      type: "image",
      options: { hotspot: true },
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alt text",
          description: "Describe the image for screen readers and SEO.",
        },
      ],
    }),
    defineField({
      name: "author",
      title: "Author",
      type: "string",
    }),
    defineField({
      name: "publishedAt",
      title: "Published at",
      type: "datetime",
      initialValue: () => new Date().toISOString(),
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "body",
      title: "Body",
      type: "blockContent",
    }),
  ],
  orderings: [
    {
      title: "Published date, newest",
      name: "publishedAtDesc",
      by: [{ field: "publishedAt", direction: "desc" }],
    },
  ],
  preview: {
    select: { title: "title", category: "category", language: "language", media: "coverImage" },
    prepare: ({ title, category, language, media }) => ({
      title,
      subtitle: [language === "es" ? "ES" : "EN", category].filter(Boolean).join(" · "),
      media,
    }),
  },
});
