import { client } from "./client";

/**
 * Wrapper around the Sanity client that returns `fallback` when the project
 * isn't configured yet or a query fails, so pages render (placeholders / empty
 * states) instead of throwing. Results are revalidated every 60s (ISR).
 */
export async function sanityFetch<T>(
  query: string,
  params: Record<string, unknown> = {},
  fallback: T
): Promise<T> {
  if (!client) return fallback;
  try {
    return await client.fetch<T>(query, params, {
      next: { revalidate: 60 },
    });
  } catch (error) {
    console.error("Sanity fetch failed:", error);
    return fallback;
  }
}
