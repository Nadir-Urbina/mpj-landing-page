import type { PortableTextBlock } from "@portabletext/react";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";

/** Fields needed to render a blog card (index + homepage teaser). */
const CARD_FIELDS = `
  _id,
  title,
  "slug": slug.current,
  excerpt,
  category,
  author,
  publishedAt,
  coverImage
`;

export type PostCard = {
  _id: string;
  title: string;
  slug: string;
  excerpt?: string;
  category?: string;
  author?: string;
  publishedAt: string;
  coverImage?: SanityImageSource & { alt?: string };
};

export type Post = PostCard & {
  body?: PortableTextBlock[];
};

export const latestPostsQuery = `*[_type == "post" && defined(slug.current)] | order(publishedAt desc)[0...$limit]{${CARD_FIELDS}}`;

export const allPostsQuery = `*[_type == "post" && defined(slug.current)] | order(publishedAt desc){${CARD_FIELDS}}`;

export const postBySlugQuery = `*[_type == "post" && slug.current == $slug][0]{${CARD_FIELDS}, body}`;

export const postSlugsQuery = `*[_type == "post" && defined(slug.current)]{ "slug": slug.current }`;

export type Testimonial = {
  _id: string;
  quote: string;
  name: string;
  source?: string;
  rating?: number;
};

export const testimonialsQuery = `*[_type == "testimonial"] | order(coalesce(order, 100) asc, _createdAt desc){
  _id,
  quote,
  name,
  source,
  rating
}`;
