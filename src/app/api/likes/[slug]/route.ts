import { NextResponse } from "next/server";

import { sanityFetch } from "@/sanity/lib/fetch";
import { postSlugsQuery } from "@/sanity/lib/queries";
import {
  VOTER_TTL_SECONDS,
  isLikesConfigured,
  isValidSlug,
  likeCountKey,
  likeVoterKey,
  redis,
} from "@/app/lib/likes";

type Params = { params: Promise<{ slug: string }> };

/**
 * Only allow keys for slugs that actually exist in Sanity — otherwise anyone
 * could POST arbitrary slugs and fill Redis with junk keys.
 */
async function isKnownPost(slug: string) {
  const slugs = await sanityFetch<{ slug: string }[]>(postSlugsQuery, {}, []);
  return slugs.some((s) => s.slug === slug);
}

function clientIp(request: Request) {
  const forwarded = request.headers.get("x-forwarded-for");
  return forwarded?.split(",")[0]?.trim() || request.headers.get("x-real-ip") || "unknown";
}

export async function GET(request: Request, { params }: Params) {
  const { slug } = await params;
  if (!isValidSlug(slug)) {
    return NextResponse.json({ error: "Invalid slug" }, { status: 400 });
  }
  if (!redis) return NextResponse.json({ count: 0, liked: false, enabled: false });

  const [count, voted] = await Promise.all([
    redis.get<number>(likeCountKey(slug)),
    redis.get(likeVoterKey(slug, clientIp(request))),
  ]);

  return NextResponse.json({
    count: typeof count === "number" ? count : 0,
    liked: Boolean(voted),
    enabled: true,
  });
}

export async function POST(request: Request, { params }: Params) {
  const { slug } = await params;

  if (!isValidSlug(slug)) {
    return NextResponse.json({ error: "Invalid slug" }, { status: 400 });
  }
  if (!isLikesConfigured || !redis) {
    return NextResponse.json({ error: "Likes are not configured" }, { status: 503 });
  }
  if (!(await isKnownPost(slug))) {
    return NextResponse.json({ error: "Unknown post" }, { status: 404 });
  }

  const voterKey = likeVoterKey(slug, clientIp(request));

  // NX means the write only lands the first time, so repeat requests from the
  // same visitor return the current count without incrementing.
  const firstVote = await redis.set(voterKey, 1, { nx: true, ex: VOTER_TTL_SECONDS });

  if (!firstVote) {
    const count = await redis.get<number>(likeCountKey(slug));
    return NextResponse.json({ count: typeof count === "number" ? count : 0, liked: true });
  }

  const count = await redis.incr(likeCountKey(slug));
  return NextResponse.json({ count, liked: true });
}
