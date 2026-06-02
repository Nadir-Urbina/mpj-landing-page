import { createClient } from "next-sanity";

import { apiVersion, dataset, isSanityConfigured, projectId } from "../env";

/**
 * Null until the project is configured via env. All reads go through
 * `sanityFetch`, which returns a fallback when the client is null.
 */
export const client = isSanityConfigured
  ? createClient({
      projectId: projectId!,
      dataset: dataset!,
      apiVersion,
      useCdn: true,
      perspective: "published",
    })
  : null;
