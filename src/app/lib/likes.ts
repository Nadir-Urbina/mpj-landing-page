import { createHash } from "crypto";

import { Redis } from "@upstash/redis";

/**
 * Like counts live in Upstash Redis. Following the same pattern as the Sanity
 * and Resend integrations, this is null until configured so the app degrades
 * gracefully (the like button simply hides) instead of throwing.
 *
 * Required env: UPSTASH_REDIS_REST_URL, UPSTASH_REDIS_REST_TOKEN
 */
const url = process.env.UPSTASH_REDIS_REST_URL;
const token = process.env.UPSTASH_REDIS_REST_TOKEN;

export const isLikesConfigured = Boolean(url && token);

export const redis = isLikesConfigured ? new Redis({ url: url!, token: token! }) : null;

/** Slugs are used as Redis keys, so keep them to a known-safe shape. */
export const isValidSlug = (slug: string) =>
  /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug) && slug.length <= 96;

export const likeCountKey = (slug: string) => `likes:${slug}`;

/**
 * Per-visitor dedupe key. The IP is hashed with a salt rather than stored, so
 * no raw visitor IPs are ever persisted.
 */
export const likeVoterKey = (slug: string, ip: string) => {
  const salt = process.env.LIKES_IP_SALT || "mpj-likes";
  const hash = createHash("sha256").update(`${salt}:${ip}`).digest("hex").slice(0, 24);
  return `liked:${slug}:${hash}`;
};

/** One like per visitor per post per 30 days. */
export const VOTER_TTL_SECONDS = 60 * 60 * 24 * 30;

export async function getLikeCount(slug: string): Promise<number> {
  if (!redis) return 0;
  const count = await redis.get<number>(likeCountKey(slug));
  return typeof count === "number" ? count : 0;
}
