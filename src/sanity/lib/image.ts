import imageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";

import { dataset, projectId } from "../env";

const builder = imageUrlBuilder({
  projectId: projectId || "",
  dataset: dataset || "",
});

/**
 * Build a URL for a Sanity image. Only call with a real image object — guard
 * on `post.coverImage` at the call site (images only exist once configured).
 */
export const urlForImage = (source: SanityImageSource) => builder.image(source);
