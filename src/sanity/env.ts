export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2024-10-01";

export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;

export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;

/**
 * True only when both projectId and dataset are present. The frontend and
 * Studio both read this so the app degrades gracefully (placeholders, empty
 * lists) instead of crashing before the Sanity project is created.
 */
export const isSanityConfigured = Boolean(projectId && dataset);
