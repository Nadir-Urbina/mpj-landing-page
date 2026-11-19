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
  coverImage,
  "language": coalesce(language, "en")
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
  /** "en" or "es"; posts created before the field existed count as English. */
  language: "en" | "es";
};

export type Post = PostCard & {
  body?: PortableTextBlock[];
  /** Natural size of the cover asset, so the post hero can render uncropped. */
  coverDimensions?: { width: number; height: number };
};

/**
 * Posts for a site language: that language's posts first, then (only when it
 * has fewer than needed) the other language's, so the Spanish blog isn't empty
 * before Spanish posts exist. Cards from the other language get a tag.
 */
const LANG_ORDER = `order(select(coalesce(language, "en") == $lang => 0, 1) asc, publishedAt desc)`;

export const latestPostsQuery = `*[_type == "post" && defined(slug.current)] | ${LANG_ORDER}[0...$limit]{${CARD_FIELDS}}`;

export const allPostsQuery = `*[_type == "post" && defined(slug.current)] | ${LANG_ORDER}{${CARD_FIELDS}}`;

/** English-only feed for the RSS (Mailchimp) list. */
export const englishPostsQuery = `*[_type == "post" && defined(slug.current) && coalesce(language, "en") == "en"] | order(publishedAt desc){${CARD_FIELDS}}`;

export const postBySlugQuery = `*[_type == "post" && slug.current == $slug][0]{
  ${CARD_FIELDS},
  body,
  "coverDimensions": coverImage.asset->metadata.dimensions{width, height}
}`;

export const postSlugsQuery = `*[_type == "post" && defined(slug.current)]{ "slug": slug.current, "language": coalesce(language, "en") }`;

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
